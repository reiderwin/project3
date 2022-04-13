from flask_pymongo import PyMongo
from flask import Flask, render_template, redirect
from flask import Flask, render_template, jsonify
from flask_cors import CORS
from bson import json_util
import json
from bson import ObjectId


app = Flask(__name__)
CORS(app)

app.config["MONGO_URI"] = "mongodb://localhost:27017/states_db"
mongo = PyMongo(app)



@app.route("/")
def index():
    return render_template("index.html")


@app.route("/get-data")
def get_data():
    cancer_data = mongo.db.cancer_data

    output = []
    for q in cancer_data.find():
        output.append({'Index': q['Index'], 'Location' : q['Location'], 'Sex' : q['Sex'], 'Year' : q['Year'], 'Mx' : q['Mx'], 'Upper' : q['Upper'], 'Lower' : q['Lower']})
    return jsonify({'RESULT' : output})

if __name__ == '__main__':
    app.debug = True
    app.run()



