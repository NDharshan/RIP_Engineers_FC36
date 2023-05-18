import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'

function App() {
	// usestate for setting a javascript
	// object for storing and using data
	const [data, setdata] = useState({
      name: "srn",
      age: 0
	});

	useEffect(() => {
      // Using fetch to fetch the api from 
      // flask server it will be redirected to proxy
      fetch("/").then((res) =>
          res.json().then((data) => {
              // Setting a data from api
              setdata({
                  name: data.name,
                  age: data.age
              });
          })
      );
  }, []);

	return (
		<div className="App">
			<header className="App-header">
				<h1>React and flask</h1>
				<p>{data.name}</p>
        <p>{data.age}</p>
			</header>
		</div>
	);
}

export default App;
