from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()



"""def __repr__(self):
        return '<User %r>' % self.username"""

   

class User(db.Model):
    __tablename__="user"
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(120), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True)
    password = db.Column(db.Text, nullable=False)
    number_phone = db.Column(db.String(120))
    places = db.relationship('Place', backref="user", lazy=True)
    post_rel = db.relationship('Post', backref="user", lazy=True)
    like_rel = db.relationship('Like', backref="user", lazy=True)
    score_rel = db.relationship('Score', backref="user", lazy=True)
    role_user_rel = db.relationship('Role_user', backref="user", lazy=True)
    comment_rel = db.relationship('Comment', backref="user", lazy=True)
    is_active = db.Column(db.Boolean(), unique=False)

    def __repr__(self):
        return '<User %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            # "password": self.password,
            "number_phone": self.number_phone,
           # "places":self.places,
            #"post_rel":self.post_rel,
            #"like_rel": self.like_rel,
            #"score_rel": self.score_rel,
            #"role_user_rel": self.role_user_rel,
            #"comment_rel": self.comment_rel,
            "is_active": self.is_active
        }
    def save(self):
        db.session.add(self)
        db.session.commit()
    def update(self):
        db.session.commit()
    def delete(self):
        db.session.delete(self)
        db.session.commit()

class Role_user(db.Model):
    __tablename__="role_user"
    id = db.Column(db.Integer , primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    roles_id = db.Column(db.Integer, db.ForeignKey('role.id'), nullable=False)       

    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
           "roles_id": self.roles_id
        }
    def save(self):
        db.session.add(self)
        db.session.commit()
    def update(self):
        db.session.commit()
    def delete(self):
        db.session.delete(self)
        db.session.commit()

class Role(db.Model):
    __tablename__="role"
    id = db.Column(db.Integer , primary_key=True)
    rol_names = db.Column(db.String(120))
    role_user_rel = db.relationship('Role_user', backref="role", lazy=True)

    def serialize(self):
        return {
            "id": self.id,
            "rol_names":self.rol_names
        }
    def save(self):
        db.session.add(self)
        db.session.commit()
    def update(self):
        db.session.commit()
    def delete(self):
        db.session.delete(self)
        db.session.commit()

class Place(db.Model):
    __tablename__="place"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120))
    lat = db.Column(db.String(120), nullable=False)
    long = db.Column(db.String(120), nullable=False)
    street = db.Column(db.String(120), nullable=False)
    state = db.Column(db.String(120), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    post_rel = db.relationship('Post', backref="place", lazy=True)
    score_rel = db.relationship('Score', backref="place", lazy=True)

   
    def serialize(self):
        return {
        "id": self.id,
        "name": self.name,
        "lat": self.lat,
        "long": self.long,
        "street": self.street,
        "state": self.state,
        "user_id": self.user_id,
       # "post_rel": self.post_rel,
       # "score_rel": self.score_rel
        }

    def save(self):
        db.session.add(self)
        db.session.commit()
    def update(self):
        db.session.commit()
    def delete(self):
        db.session.delete(self)
        db.session.commit()

class Post(db.Model):
    __tablename__="post"
    id = db.Column(db.Integer , primary_key=True)
    text = db.Column(db.String(120))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    place_id = db.Column(db.Integer, db.ForeignKey('place.id'))
    commentrel = db.relationship('Comment', backref="post", lazy=True)
    like_rel = db.relationship('Like', backref="post", lazy=True)
    resource_rel = db.relationship('Resource', backref="post", lazy=True)
    

    def serialize(self):
        return {
            "id": self.id,
            "text": self.text,
           "user_id": self.user_id,
           "place_id": self.place_id
        }
    def save(self):
        db.session.add(self)
        db.session.commit()
    def update(self):
        db.session.commit()
    def delete(self):
        db.session.delete(self)
        db.session.commit() 

class Comment(db.Model):
    __tablename__="comment"
    id = db.Column(db.Integer , primary_key=True)
    data_comment = db.Column(db.String(250))  
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey('post.id'), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "data_comment": self.data_comment,
           "user_id": self.user_id,
           "post_id": self.post_id  
        }

    def save(self):
        db.session.add(self)
        db.session.commit()
    def update(self):
        db.session.commit()
    def delete(self):
        db.session.delete(self)
        db.session.commit()    

class Like(db.Model):
    __tablename__="like"
    id = db.Column(db.Integer , primary_key=True) 
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey('post.id'), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
           "user_id": self.user_id,
           "post_id": self.post_id  
        }
    def save(self):
        db.session.add(self)
        db.session.commit()
    def update(self):
        db.session.commit()
    def delete(self):
        db.session.delete(self)
        db.session.commit()    

class Score(db.Model):
    __tablename__="score"
    id = db.Column(db.Integer , primary_key=True)
    score= db.Column(db.Integer, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    place_id = db.Column(db.Integer, db.ForeignKey('place.id'), nullable=False)


    def serialize(self):
        return {
            "id": self.id,
            "score": self.score,
           "user_id": self.user_id,
           "place_id": self.place_id  
        }
    def save(self):
        db.session.add(self)
        db.session.commit()
    def update(self):
        db.session.commit()
    def delete(self):
        db.session.delete(self)
        db.session.commit()    

class Resource(db.Model):
    __tablename__="resource"
    id = db.Column(db.Integer , primary_key=True)
    base64resource = db.Column(db.Text)  
    resource_type = db.Column(db.String(120)) 
    post_id = db.Column(db.Integer, db.ForeignKey('post.id'), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "base64resource": self.base64resource,
           "resource_type": self.resource_type,
           "post_id": self.post_id  
        }
    def save(self):
        db.session.add(self)
        db.session.commit()
    def update(self):
        db.session.commit()
    def delete(self):
        db.session.delete(self)
        db.session.commit()


