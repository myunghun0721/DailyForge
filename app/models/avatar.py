from .db import db, environment, SCHEMA, add_prefix_for_prod



class Avatar(db.Model):
    __tablename__ = 'avatars'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    body = db.Column(db.String(255), nullable=False)
    skin = db.Column(db.String(255), nullable=False)
    hair = db.Column(db.String(255), nullable=False)
    extra = db.Column(db.String(255), nullable=False)
    backgrounds = db.Column(db.String(255), nullable=False)

    # relationships
    users = db.relationship("User", back_populates="avatars")

    def to_dict(self):
        return {
            'id': self.id,
            'body' :self.body,
            'skin' :self.skin,
            'hair' :self.hair,
            'extra' :self.extra,
            'backgrounds' :self.backgrounds,
        }
