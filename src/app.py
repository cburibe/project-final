"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from api.utils import APIException, generate_sitemap
from api.models import db, Place, Like, Resource, Post, Comment, Score, People, Role_people, Role
from api.routes import api
from api.admin import setup_admin
from models import db, Place, Like, Resource, Post, Comment, Score, People, Role_people, Role
#from models import Person

ENV = os.getenv("FLASK_ENV")
static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False

# database condiguration
app = Flask(__name__)
app.config['DEBUG'] = True
app.config['ENV'] = 'development'
app.url_map.strict_slashes = False
app.config['SQLALCHEMY_DATABASE_URI'] = "postgreSQL:///dev_4geeks.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db)
db.init_app(app)
CORS(app)
setup_admin(app)

# Allow CORS requests to this API
CORS(app)

# add the admin
setup_admin(app)

# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code


db.init_app(app)
Migrate(app, db)

@app.route('/people', methods=['GET'])
def all_people():
    peoples = People.query.all()
    peoples = list(map(lambda people: people.serialize(), peoples))
    return jsonify(peoples), 200
    

@app.route('/people/<int:id>', methods=['GET'])
def get_people(id):
    peoples = People.query.get(id)
    return jsonify(peoples.serialize()), 200

@app.route('/people', methods=['POST']) 
def create_people():
    name = request.json.get('name')
    email = request.json.get('email')

    user = User()
    user.name = name
    user.email = email

    db.session.add(user)
    db.session.commit()
    
    return jsonify(user.serialize()), 201

@app.route('/user/<int:id>', methods=['PUT']) 
def modificar_user(id):
    name = request.json.get('name')
    email = request.json.get('email')

    user = User.query.get(id)
    user.name = name
    user.email = email

    
    db.session.commit()
    
    return jsonify(user.serialize()), 201

@app.route('/users/<int:id>', methods=['DELETE'])
def delete_users(id):
    users = User.query.get(id)
    db.session.delete(users)
    db.session.commit()

    return jsonify({}), 200   

if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)
