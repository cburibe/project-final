from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()



"""def __repr__(self):
        return '<User %r>' % self.username"""

   

class People(db.Model):
    __tablename__="people"
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(120), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False )
    passsword = db.Column(db.String(120), nullable=False)
    number_phone = db.Column(db.String(120))

    """ is_active = db.Column(db.Boolean(), unique=False, nullable=False) """

    def __repr__(self):
        return '<People %r>' % self.username

    def serialize(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "password": self.password,
            "username": self.username,
            "number_phone": self.number_phone
        }
    def save(self):
        db.session.add(self)
        db.session.commit()
    def update(self):
        db.session.commit()
    def delete(self):
        db.session.delete(self)
        db.session.commit()    

class Role_people(db.Model):
    __tablename__="role_people"
    id = db.Column(db.Integer , primary_key=True)
    people_id = db.Column(db.Integer, db.ForeignKey('people.id'), nullable=False)
    roles_id = db.Column(db.Integer, db.ForeignKey('role.id'), nullable=False)       

    def serialize(self):
        return {
            "id": self.id,
            "people_id": self.people_id,
           "role_id": self.roles_id
          
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
    lat = db.Column(db.String(120), nullable=False)
    long = db.Column(db.String(120), nullable=False)
    street = db.Column(db.String(120), nullable=False)
    commune = db.Column(db.String(120), nullable=False)
   
    def serialize(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "password": self.password,
            "username": self.username,
            "number_phone": self.number_phone
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
    likes = db.Column(db.String(120))
    text = db.Column(db.String(120))
    people_id = db.Column(db.Integer, db.ForeignKey('people.id'), nullable=False)
    place_id = db.Column(db.Integer, db.ForeignKey('place.id'), nullable=False)
     
    def serialize(self):
        return {
            "id": self.id,
            "likes": self.likes,
            "text": self.text,
           "people_id": self.people_id,
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
    people_id = db.Column(db.Integer, db.ForeignKey('people.id'), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey('post.id'), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "data_comment": self.data_comment,
           "people_id": self.people_id,
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
    likes = db.Column(db.String(120))  
    people_id = db.Column(db.Integer, db.ForeignKey('people.id'), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey('post.id'), nullable=False)

    def serialize(self):
        return {
            "id": self.id,
            "likes": self.likes,
           "people_id": self.people_id,
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


class Score(db.Model):
    __tablename__="score"
    id = db.Column(db.Integer , primary_key=True)
    people_id = db.Column(db.Integer, db.ForeignKey('people.id'), nullable=False)
    place_id = db.Column(db.Integer, db.ForeignKey('place.id'), nullable=False)


    def serialize(self):
        return {
            "id": self.id,
           "people_id": self.people_id,
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
    base64resource = db.Column(db.String(250))  
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

    

    """ is_active = db.Column(db.Boolean(), unique=False, nullable=False) """

