import json

def generate_smart_contract(json_data):
    contract_code = """
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract GanacheSmartContract {
    mapping(address => uint256) public balances;
    address public owner;

    event Deposit(address indexed account, uint256 amount);
    event Withdrawal(address indexed account, uint256 amount);
    event Transfer(address indexed sender, address indexed recipient, uint256 amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only contract owner can perform this action");
        _;
    }

    constructor() {
        owner = msg.sender;
        balances[owner] = {initial_balance}; // Set initial balance for the contract owner
    }

    function deposit() public payable {
        require(msg.value > 0, "Amount must be greater than zero");
        balances[msg.sender] += msg.value;
        emit Deposit(msg.sender, msg.value);
    }

    function withdraw(uint256 amount) public {
        require(amount > 0, "Amount must be greater than zero");
        require(balances[msg.sender] >= amount, "Insufficient balance");

        balances[msg.sender] -= amount;
        payable(msg.sender).transfer(amount);
        emit Withdrawal(msg.sender, amount);
    }

    function transfer(address recipient, uint256 amount) public {
        require(amount > 0, "Amount must be greater than zero");
        require(balances[msg.sender] >= amount, "Insufficient balance");

        balances[msg.sender] -= amount;
        balances[recipient] += amount;
        emit Transfer(msg.sender, recipient, amount);
    }

    function getBalance(address account) public view returns (uint256) {
        return balances[account];
    }

    function changeOwner(address newOwner) public onlyOwner {
        require(newOwner != address(0), "Invalid address");
        owner = newOwner;
    }

    function contractBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function destroyContract() public onlyOwner {
        selfdestruct(payable(owner));
    }
}
"""

    initial_balance = json_data.get("initial_balance", 1000)
    return contract_code.replace("{initial_balance}", str(initial_balance))


def save_contract_to_file(contract_code, file_path):
    with open(file_path, "w") as contract_file:
        contract_file.write(contract_code)


def read_json_config(file_path):
    with open(file_path, "r") as json_file:
        json_data = json.load(json_file)
    return json_data


# Example usage:
json_file_path = "contract_config.json"
contract_output_path = "ganache_smart_contract.sol"

json_data = read_json_config(json_file_path)

smart_contract_code = generate_smart_contract(json_data)
save_contract_to_file(smart_contract_code, contract_output_path)
print(f"Smart contract saved to {contract_output_path}")
