# Import flask and datetime module for showing date and time
from flask import Flask
import datetime

x = datetime.datetime.now()

# Initializing flask app
app = Flask(__name__)


# Route for seeing a data
@app.route('/')
def index():
	return {
        "name": "Kamala srinivas",
        "age": 26
    }

	
app.run(debug=True)
