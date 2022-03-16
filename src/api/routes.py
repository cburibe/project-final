"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Place, Like, Resource, Post, Comment, Score, People, Role_people, Role
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }
@api.route('/peoples', methods=['GET'])
def all_people():
    peoples = People.query.all()
    peoples = list(map(lambda people: people.serialize(), peoples))
    return jsonify(peoples), 200
    

@api.route('/peoples/<int:id>', methods=['GET'])
def get_people(id):
    peoples = People.query.get(id)
    return jsonify(peoples.serialize()), 200    


@api.route('/peoples', methods=['POST']) 
def create_people():
    username = request.json.get('username')
    email = request.json.get('email')
    password = request.json.get('password')
    number_phone= request.json.get('number_phone')
    print(username, email, password, number_phone)

    people = People()
    people.username = username
    people.email = email
    people.password = password
    people.number_phone = number_phone

    db.session.add(people)
    db.session.commit()
    
    return jsonify(people.serialize()), 201

@api.route('/peoples/<int:id>', methods=['PUT']) 
def modificar_people(id):
    username = request.json.get('username')
    email = request.json.get('email')
    password = request.json.get('password')
    number_phone = request.json.get('number_phone')


    people = People.query.get(id)
    people.username = username
    people.email = email
    people.password = password
    people.number_phone = number_phone
    
    db.session.commit()
    
    return jsonify(people.serialize()), 201

@api.route('/peoples/<int:id>', methods=['DELETE'])
def delete_peoples(id):
    peoples = People.query.get(id)
    db.session.delete(peoples)
    db.session.commit()

    return jsonify({}), 200 

""" De aqui va places"""

@api.route('/places', methods=['GET'])
def all_places():
    places = Place.query.all()
    places = list(map(lambda place: place.serialize(), places))
    return jsonify(places), 200
    

@api.route('/places/<int:id>', methods=['GET'])
def get_place(id):
    places = Place.query.get(id)
    return jsonify(places.serialize()), 200    


@api.route('/places', methods=['POST']) 
def create_place():
    lat = request.json.get('lat')
    long = request.json.get('long')
    street = request.json.get('street')
    commune= request.json.get('commune')


    place = Place()
    place.lat = lat
    place.long = long
    place.street = street
    place.commune = commune

    db.session.add(place)
    db.session.commit()
    
    return jsonify(place.serialize()), 201

@api.route('/places/<int:id>', methods=['PUT']) 
def modificar_place(id):
    lat = request.json.get('lat')
    long = request.json.get('long')
    street = request.json.get('street')
    commune = request.json.get('commune')


    place = Place.query.get(id)
    place.lat = lat
    place.long = long
    place.street = street
    place.commune = commune
    
    db.session.commit()
    
    return jsonify(place.serialize()), 201

@api.route('/places/<int:id>', methods=['DELETE'])
def delete_places(id):
    places = Place.query.get(id)
    db.session.delete(places)
    db.session.commit()

    return jsonify({}), 200   

""" Aqui va los Post """

@api.route('/posts', methods=['GET'])
def all_posts():
    posts = Post.query.all()
    posts = list(map(lambda post: post.serialize(), posts))
    return jsonify(posts), 200
    

@api.route('/posts/<int:id>', methods=['GET'])
def get_post(id):
    posts = Post.query.get(id)
    return jsonify(posts.serialize()), 200    

   

@api.route('/posts', methods=['POST']) 
def create_post():
    like = request.json.get('like')
    text = request.json.get('text')
    people_id = request.json.get('people_id')
    place_id = request.json.get('place_id')


    post = Post()
    post.like = like
    post.text = text
    post.people_id = people_id
    post.place_id = place_id

    db.session.add(post)
    db.session.commit()
    
    return jsonify(post.serialize()), 201

@api.route('/posts/<int:id>', methods=['PUT']) 
def modificar_post(id):
    like = request.json.get('like')
    text = request.json.get('text')
    people_id = request.json.get('people_id')
    place_id = request.json.get('place_id')


    post = Place.query.get(id)
    post.like = like
    post.text = text
    post.people_id = people_id
    post.place_id = place_id
    
    db.session.commit()
    
    return jsonify(post.serialize()), 201

@api.route('/posts/<int:id>', methods=['DELETE'])
def delete_post(id):
    posts = Post.query.get(id)
    db.session.delete(posts)
    db.session.commit()

    return jsonify({}), 200  

""" Aqui va like"""

@api.route('/likes', methods=['GET'])
def all_likes():
    likes = Like.query.all()
    likes = list(map(lambda like: like.serialize(), likes))
    return jsonify(likes), 200
    

@api.route('/likes/<int:id>', methods=['GET'])
def get_like(id):
    likes = Like.query.get(id)
    return jsonify(likes.serialize()), 200    


@api.route('/likes', methods=['POST']) 
def create_like():
    likes = request.json.get('likes')
    people_id = request.json.get('people_id')
    post_id = request.json.get('post_id')


    like = Like()
    like.likes = likes
    like.people_id = people_id
    like.post_id = post_id

    db.session.add(like)
    db.session.commit()
    
    return jsonify(like.serialize()), 201

@api.route('/likes/<int:id>', methods=['PUT']) 
def modificar_like(id):
    likes = request.json.get('likes')
    people_id = request.json.get('people_id')
    post_id = request.json.get('post_id')


    like = Like.query.get(id)
    like.likes = likes
    like.people_id = people_id
    like.post_id = post_id
    
    db.session.commit()
    
    return jsonify(like.serialize()), 201

@api.route('/likes/<int:id>', methods=['DELETE'])
def delete_like(id):
    likes = Like.query.get(id)
    db.session.delete(likes)
    db.session.commit()

    return jsonify({}), 200  

""" Aqui va el  Score """

@api.route('/scores', methods=['GET'])
def all_scores():
    scores = Score.query.all()
    scores = list(map(lambda score: score.serialize(), scores))
    return jsonify(scores), 200
    

@api.route('/scores/<int:id>', methods=['GET'])
def get_scores(id):
    scores = Score.query.get(id)
    return jsonify(scores.serialize()), 200    

   

@api.route('/scores', methods=['POST']) 
def create_score():
    people_id = request.json.get('score_id')
    place_id = request.json.get('score_id')


    score = Score()
    score.people_id = people_id
    score.place_id = place_id

    db.session.add(score)
    db.session.commit()
    
    return jsonify(score.serialize()), 201

@api.route('/scores/<int:id>', methods=['PUT']) 
def modificar_score(id):
    people_id = request.json.get('score_id')
    place_id = request.json.get('score_id')



    score = Score.query.get(id)
    score.people_id = people_id
    score.place_id = place_id

    
    db.session.commit()
    
    return jsonify(score.serialize()), 201

@api.route('/scores/<int:id>', methods=['DELETE'])
def delete_score(id):
    scores = Score.query.get(id)
    db.session.delete(scores)
    db.session.commit()

    return jsonify({}), 200  
""" Aqui va el  Resource """

@api.route('/resource', methods=['GET'])
def all_resource():
    resources = Resource.query.all()
    resource = list(map(lambda resource: resource.serialize(), resources))
    return jsonify(resources), 200
    

@api.route('/resources/<int:id>', methods=['GET'])
def get_resource(id):
    resources = Resource.query.get(id)
    return jsonify(resources.serialize()), 200    


@api.route('/resources', methods=['POST']) 
def create_resources():
    base64resource = request.json.get('base64resource')
    resource_type = request.json.get('resource_type')
    post_id = request.json.get('post_id')


    resource = Resource()
    resource.base64resource = base64resourc
    resource.resource_type = resource_type
    resource.post_id = post_id

    db.session.add(resource)
    db.session.commit()
    
    return jsonify(resource.serialize()), 201

@api.route('/resources/<int:id>', methods=['PUT']) 
def modificar_resource(id):
    base64resource = request.json.get('base64resource')
    resource_type = request.json.get('resource_type')
    post_id = request.json.get('post_id')


    resource = Resource.query.get(id)
    resource.base64resource = base64resourc
    resource.resource_type = resource_type
    resource.post_id = post_id

    db.session.commit()
    
    return jsonify(resource.serialize()), 201

@api.route('/resources/<int:id>', methods=['DELETE'])
def delete_resource(id):
    resources = Resource.query.get(id)
    db.session.delete(resources)
    db.session.commit()

    return jsonify({}), 200  

""" Aqui va el  Role """

@api.route('/roles', methods=['GET'])
def all_roles():
    roles = Role.query.all()
    roles = list(map(lambda role: role.serialize(), roles))
    return jsonify(roles), 200
    

@api.route('/roles/<int:id>', methods=['GET'])
def get_role(id):
    roles = Role.query.get(id)
    return jsonify(roles.serialize()), 200    

 

@api.route('/roles', methods=['POST']) 
def create_role():
    people_id = request.json.get('people_id')
    roles_id = request.json.get('roles_id')


    role = Role()
    role.people_id = people_id
    roles.roles_id = roles_id

    db.session.add(role)
    db.session.commit()
    
    return jsonify(role.serialize()), 201

@api.route('/roles/<int:id>', methods=['PUT']) 
def modificar_role(id):
    people_id = request.json.get('people_id')
    role_id = request.json.get('role_id')


    role = Role.query.get(id)
    role.people_id = people_id
    roles.roles_id = roles_id

    db.session.commit()
    
    return jsonify(role.serialize()), 201

@api.route('/roles/<int:id>', methods=['DELETE'])
def delete_role(id):
    roles = Role.query.get(id)
    db.session.delete(roles)
    db.session.commit()

    return jsonify({}), 200  

""" Aqui va el  Role_people """

@api.route('/role_peoples', methods=['GET'])
def all_role_peoples():
    role_peoples = Role_people.query.all()
    role_peoples = list(map(lambda role_people: role_people.serialize(), role_peoples))
    return jsonify(role_peoples), 200
    

@api.route('/role_peoples/<int:id>', methods=['GET'])
def get_role_people(id):
    role_peoples = Role_people.query.get(id)
    return jsonify(role_peoples.serialize()), 200    


@api.route('/role_peoples', methods=['POST']) 
def create_role_people():
    people_id = request.json.get('people_id')
    roles_id = request.json.get('roles_id')


    role_people = Role_people()
    role_people.people_id = people_id
    role_people.roles_id = roles_id

    db.session.add(role_people)
    db.session.commit()
    
    return jsonify(role_people.serialize()), 201

@api.route('/role_peoples/<int:id>', methods=['PUT']) 
def modificar_role_people(id):
    people_id = request.json.get('people_id')
    post_id = request.json.get('post_id')


    role_people = Role_people.query.get(id)
    role_people.people_id = people_id
    role_people.roles_id = roles_id
    
    db.session.commit()
    
    return jsonify(role_people.serialize()), 201

@api.route('/role_peoples/<int:id>', methods=['DELETE'])
def delete_role_people(id):
    role_peoples = Role_people.query.get(id)
    db.session.delete(role_peoples)
    db.session.commit()

    return jsonify({}), 200  

""" Aqui va el  Comment """
@api.route('/comments', methods=['GET'])
def all_comment():
    comments = Comment.query.all()
    comments = list(map(lambda comment: comment.serialize(), comments))
    return jsonify(comments), 200
    

@api.route('/comments/<int:id>', methods=['GET'])
def get_comment(id):
    comments = Comment.query.get(id)
    return jsonify(comments.serialize()), 200    

    

@api.route('/comments', methods=['POST']) 
def create_comment():
    data_comment = request.json.get('data_comment')
    people_id = request.json.get('people_id')
    post_id = request.json.get('post_id')
    
    print(username, email, password, number_phone)

    comment = Comment()
    comment.people_id = people_id
    comment.post_id = post_id
   

    db.session.add(comment)
    db.session.commit()
    
    return jsonify(comment.serialize()), 201

@api.route('/comments/<int:id>', methods=['PUT']) 
def modificar_comment(id):
    data_comment = request.json.get('data_comment')
    people_id = request.json.get('people_id')
    post_id = request.json.get('post_id')


    comment = Comment.query.get(id)
    comment.data_comment = data_comment
    comment.people_id = people_id
    comment.post_id = post_id
    
    db.session.commit()
    
    return jsonify(comment.serialize()), 201

@api.route('/comments/<int:id>', methods=['DELETE'])
def delete_comments(id):
    comments = Comment.query.get(id)
    db.session.delete(comments)
    db.session.commit()

    return jsonify({}), 200 