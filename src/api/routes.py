"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""

from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Place, Like, Resource, Post, Comment, Score, User, Role_user, Role
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import jwt_required, get_jwt_identity, create_access_token 
from werkzeug.security import generate_password_hash, check_password_hash
import datetime

api = Blueprint('api', __name__)

""" @api.route('/register', methods=['GET'])
def all_user_register():
    users = User.query.all()
    users = list(map(lambda user: user.serialize(), users))

    return jsonify(users), 200
     """

@api.route('/test')
def test():
    return jsonify(test='test'),200
@api.route('/register', methods=['POST']) 
def create_register():
    # obteniendo los datos del body
    username = request.json.get('username')
    email = request.json.get('email')
    password = request.json.get('password')

    # validaciones
    # si el email ya se encuentra registrado
    user = User.query.filter_by(email=email).first()
    if user is not None:
        return jsonify(message=f'El usuario {email} ya existe'), 409 

    # creo el objeto User
    user = User()
    user.username = username
    user.email = email
    user.password = generate_password_hash(password)

    
    # validamos el parametro opcional
    if request.json.get("number_phone") is not None:
        number_phone= request.json.get('number_phone')
        user.number_phone = number_phone

    #agregar el usuario a db y guardos los cambios
    db.session.add(user)
    db.session.commit()
    
    # retornar los datos del usuario registrado
    return jsonify(user.serialize()), 201    

@api.route('/login', methods=['POST'])
def login_user():
    #validations
    if request.json.get('username') is None or request.json.get('username') == '':
        return jsonify(message='debes enviar un username'), 400
    if request.json.get('password') is None or request.json.get('password') == '':
        return jsonify(message='debes enviar un password'), 400
    # asignations
    username = request.json.get('username')
    password = request.json.get('password')

    user = User.query.filter_by(username=username).first()
    if user is None:
        return jsonify(message=f'el usuario {username} no existe'), 404
    
    if check_password_hash(user.password, password):
        sessiontime = timedelta(hours=2)
        access_token = create_access_token(identity=username, expires_delta=sessiontime)
        return jsonify(access_token=access_token), 200
    else:
        return jsonify(message='la contraseña o el usuario es incorrecto'),401
        

@api.route('/users', methods=['GET'])
def all_user():
    users = User.query.all()
    users = list(map(lambda user: user.serialize(), users))

    return jsonify(users), 200
    

@api.route('/users/<int:id>', methods=['GET'])
def get_user(id):
    users = User.query.get(id)
    return jsonify(users.serialize()), 200    


@api.route('/users', methods=['POST']) 
def create_user():
    username = request.json.get('username')
    email = request.json.get('email')
    password = request.json.get('password')
    number_phone= request.json.get('number_phone')
    is_active = request.json.get('is_active')

    # print(username, email, password, number_phone)
    user = User.query.filter_by(email=email).first()
    if user is not None:
        return jsonify(message=f'El usuario {email} ya existe'), 409 
    user = User.query.filter_by(username=username).first()
    if user is not None:
        return jsonify(message=f'El username {username} ya existe'), 409 


    user = User()
    user.username = username
    user.email = email
    user.password = generate_password_hash(password)
    if request.json.get("number_phone") is not None:
        number_phone= request.json.get('number_phone')
        user.number_phone = number_phone

    user.is_active = is_active

    db.session.add(user)
    db.session.commit()
    
    return jsonify(user.serialize()), 201

@api.route('/users/<int:id>', methods=['PUT']) 
def modificar_user(id):
    username = request.json.get('username')
    email = request.json.get('email')
    password = request.json.get('password')
    number_phone = request.json.get('number_phone')
    is_active = request.json.get('is_active')


    user = User.query.get(id)
    user.username = username
    user.email = email
    user.password = password
    user.number_phone = number_phone
    user.is_active = is_active
    
    db.session.commit()
    
    return jsonify(user.serialize()), 201

@api.route('/users/<int:id>', methods=['DELETE'])
def delete_users(id):
    users = user.query.get(id)
    db.session.delete(users)
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
    state= request.json.get('state')
    user_id= request.json.get('user_id')


    place = Place()
    place.lat = lat
    place.long = long
    place.street = street
    place.state = state
    place.user_id = user_id


    db.session.add(place)
    db.session.commit()
    
    return jsonify(place.serialize()), 201

@api.route('/places/<int:id>', methods=['PUT']) 
def modificar_place(id):
    lat = request.json.get('lat')
    long = request.json.get('long')
    street = request.json.get('street')
    state = request.json.get('state')
    user_id= request.json.get('user_id')


    place = Place.query.get(id)
    place.lat = lat
    place.long = long
    place.street = street
    place.state = state
    place.user_id = user_id
    
    
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
    user_id = request.json.get('user_id')
    place_id = request.json.get('place_id')
  


    post = Post()
    post.like = like
    post.text = text
    post.user_id = user_id
    post.place_id = place_id
    

    db.session.add(post)
    db.session.commit()
    
    return jsonify(post.serialize()), 201

@api.route('/posts/<int:id>', methods=['PUT']) 
def modificar_post(id):
    like = request.json.get('like')
    text = request.json.get('text')
    user_id = request.json.get('user_id')
    place_id = request.json.get('place_id')
    


    post = Place.query.get(id)
    post.like = like
    post.text = text
    post.user_id = user_id
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
    user_id = request.json.get('user_id')
    post_id = request.json.get('post_id')


    like = Like()
    like.likes = likes
    like.user_id = user_id
    like.post_id = post_id

    db.session.add(like)
    db.session.commit()
    
    return jsonify(like.serialize()), 201

@api.route('/likes/<int:id>', methods=['PUT']) 
def modificar_like(id):
    likes = request.json.get('likes')
    user_id = request.json.get('user_id')
    post_id = request.json.get('post_id')


    like = Like.query.get(id)
    like.likes = likes
    like.user_id = user_id
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
    user_id = request.json.get('score_id')
    place_id = request.json.get('score_id')


    score = Score()
    score.user_id = user_id
    score.place_id = place_id

    db.session.add(score)
    db.session.commit()
    
    return jsonify(score.serialize()), 201

@api.route('/scores/<int:id>', methods=['PUT']) 
def modificar_score(id):
    user_id = request.json.get('score_id')
    place_id = request.json.get('score_id')



    score = Score.query.get(id)
    score.user_id = user_id
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
    resources = list(map(lambda resource: resource.serialize(), resources))
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
    rol_names = request.json.get('rol_names')

    role = Role()
    role.rol_names = rol_names

    db.session.add(role)
    db.session.commit()
    
    return jsonify(role.serialize()), 201

@api.route('/roles/<int:id>', methods=['PUT']) 
def modificar_role(id):
    rol_names = request.json.get('rol_names')

    role = Role()
    role.rol_names = rol_names

    db.session.commit()
    
    return jsonify(role.serialize()), 201

@api.route('/roles/<int:id>', methods=['DELETE'])
def delete_role(id):
    roles = Role.query.get(id)
    db.session.delete(roles)
    db.session.commit()

    return jsonify({}), 200  

""" Aqui va el  Rple_users """

@api.route('/role_users', methods=['GET'])
def all_role_users():
    role_users = Role_user.query.all()
    role_users = list(map(lambda role_user: role_user.serialize(), role_users))
    return jsonify(role_users), 200
    

@api.route('/role_users/<int:id>', methods=['GET'])
def get_role_user(id):
    role_users = Role_user.query.get(id)
    return jsonify(role_users.serialize()), 200    


@api.route('/role_users', methods=['POST']) 
def create_role_user():
    user_id = request.json.get('user_id')
    roles_id = request.json.get('roles_id')


    role_user = Role_user()
    role_user.user_id = user_id
    role_user.roles_id = roles_id

    db.session.add(role_user)
    db.session.commit()
    
    return jsonify(role_user.serialize()), 201

@api.route('/role_users/<int:id>', methods=['PUT']) 
def modificar_role_user(id):
    user_id = request.json.get('user_id')
    post_id = request.json.get('post_id')


    role_user = Role_user.query.get(id)
    role_user.user_id = user_id
    role_user.roles_id = roles_id
    
    db.session.commit()
    
    return jsonify(role_user.serialize()), 201

@api.route('/role_users/<int:id>', methods=['DELETE'])
def delete_role_user(id):
    role_users = Role_user.query.get(id)
    db.session.delete(role_users)
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
    user_id = request.json.get('user_id')
    post_id = request.json.get('post_id')
    
    print(username, email, password, number_phone)

    comment = Comment()
    comment.user_id = user_id
    comment.post_id = post_id
   

    db.session.add(comment)
    db.session.commit()
    
    return jsonify(comment.serialize()), 201

@api.route('/comments/<int:id>', methods=['PUT']) 
def modificar_comment(id):
    data_comment = request.json.get('data_comment')
    user_id = request.json.get('user_id')
    post_id = request.json.get('post_id')


    comment = Comment.query.get(id)
    comment.data_comment = data_comment
    comment.user_id = user_id
    comment.post_id = post_id
    
    db.session.commit()
    
    return jsonify(comment.serialize()), 201

@api.route('/comments/<int:id>', methods=['DELETE'])
def delete_comments(id):
    comments = Comment.query.get(id)
    db.session.delete(comments)
    db.session.commit()

    return jsonify({}), 200 