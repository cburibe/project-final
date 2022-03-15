"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Place, Like, Resource, Post, Comment, Score, People, Role_people, Role
from api.utils import generate_sitemap, APIException


api = Blueprint('api', __name__)


""" @api.route('/hello', methods=['POST', 'GET'])
def handle_hello():
    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }
    return jsonify(response_body), 200
 """

@api.route('/people', methods=['GET'])
def all_people():
    peoples = People.query.all()
    peoples = list(map(lambda people: people.serialize(), peoples))
    return jsonify(peoples), 200
    

@api.route('/people/<int:id>', methods=['GET'])
def get_people(id):
    peoples = People.query.get(id)
    return jsonify(peoples.serialize()), 200

@api.route('/people', methods=['POST']) 
def create_people():
    username = request.json.get('name')
    email = request.json.get('email')
    password = request.json.get('password')
    number_phone = request.json.get('number_phone')

    people = People()
    people.username = name
    people.email = email
    people.password = password
    people.number_phone = number_phone

    db.session.add(people)
    db.session.commit()
    
    return jsonify(people.serialize()), 201

@api.route('/people/<int:id>', methods=['PUT']) 
def modificar_people(id):
    username = request.json.get('name')
    email = request.json.get('email')
    password = request.json.get('password')
    number_phone = request.json.get('number_phone')
    

    people = People.query.get(id)
    people.username = name
    people.email = email
    people.password = password
    people.number_phone = number_phone


    db.session.commit()
    
    return jsonify(people.serialize()), 201

@api.route('/people/<int:id>', methods=['DELETE'])
def delete_peoples(id):
    peoples = People.query.get(id)
    db.session.delete(peoples)
    db.session.commit()

    return jsonify({}), 200   