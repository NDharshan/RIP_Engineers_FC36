from flask import Flask, redirect, render_template, request, url_for
from fileinput import filename
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app, support_credentials=True)

@app.route('/')
def do_web3():
    from web3 import Web3
    import json


    #Variables
    try:
            
        with open('sample.json', 'r+') as openfile:
        
            # Reading from json file
            json_object = json.load(openfile)
            keylist=json_object
    except:
        keylist={}
        

    def generate_contract_keys(private_key,to_acc,val):
        key=str(private_key)+"-_-_-"+str(to_acc)+"-_-_-"+str(val)
        first_half_key=key[0:10]
        second_half_key=key[10:]

        keylist[second_half_key]=first_half_key
        json_object = json.dumps(keylist, indent=4)
        with open("sample.json", "w+") as outfile:
            outfile.write(json_object)

    def commit_transaction(second_half_key):
        try:
            if(second_half_key not in keylist.keys()):
                print("invalid key")
                exit()
            details=keylist[second_half_key]+second_half_key
            details=details.split('-_-_-')
            private_key=details[0]
            to_acc=details[1]
            val=details[2]
            nonce=web3.eth.get_transaction_count(account2)
            txn={
            'nonce': nonce,
            'to':to_acc,
            'value':web3.to_wei(val,'ether'),
            "gas":2000000,
            'gasPrice': web3.to_wei('50','gwei'),
            # 'gasPrice':web3.eth.gas_price
            }

            signed_tx = web3.eth.account.sign_transaction(txn, private_key)
            txn_hash= web3.eth.send_raw_transaction(signed_tx.rawTransaction)
            print(txn_hash,nonce)
        except:
            print('invalid key2')



    # ganache_url= "HTTP://127.0.0.1:7545"
    # web3= Web3(Web3.HTTPProvider(ganache_url))
    # print(web3.is_connected())




    ganache_url= "HTTP://127.0.0.1:7545"
    web3= Web3(Web3.HTTPProvider(ganache_url))
    print(web3.is_connected())



    accounts= web3.eth._accounts()
    # account1=accounts[0]
    account2=accounts[1]


    try:
        with open('contract.json', 'r+') as openfile:
        
            # Reading from json file
            json_object = json.load(openfile)
            name=json_object["name"]
            print(name)
            priv_key = json_object["private"]
            value = 4
            generate_contract_keys(priv_key, account2, value)
            assets = json_object["assets"]
            assets_json = json.dumps(assets, indent=4)
            benProportion = json_object["benProportion"]
            benProportion_json = json.dumps(benProportion, indent=4)
            # with open('sample.json', 'r+') as key_file:
            #     json_object = json.load(key_file)
            #     print(json_object.key)
            trax = json_object["trax"]
            commit_transaction(trax)
    except :
        # generate_contract_keys('0xcdbe8305fc1a7412919491585364733b8dfa1764478a9aa6b3ffb7d65885159a',account2,10)
        print(trax)
    finally:
        return render_template('landingpage.html', data={"assets": assets, "benProportion": benProportion})


@app.route('/success', methods = ['POST'])  
def success():  
    if request.method == 'POST':  
        f = request.files['file']
        f.save(f.filename)  
        return render_template("success.html", name = f.filename) 

app.run(debug=True, port=5000)

#input is necessary
# commit_transaction("fc1a7412919491585364733b8dfa1764478a9aa6b3ffb7d65885159a-_-_-0xDd69429b995E90A123bfC6bE9DB18d7e63CC1d98-_-_-10")


# print(web3.is_address(account1))


# account1_private_key='0xc5f982ad61c2f7c7c4750923005e5e49681f29ac487145cd87d935fb7667e6cb'
# nonce=web3.eth.get_transaction_count(account1)


# txn={
#     'nonce': nonce,
#     'to':account2,
#     'value':web3.to_wei(1,'ether'),
#     "gas":2000000,
#     'gasPrice': web3.to_wei('50','gwei'),
#     # 'gasPrice':web3.eth.gas_price

# }

# signed_tx = web3.eth.account.sign_transaction(txn, account1_private_key)
# txn_hash= web3.eth.send_raw_transaction(signed_tx.rawTransaction)

# print(txn_hash,nonce)