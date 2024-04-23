from .db import db, environment, SCHEMA, add_prefix_for_prod



class Party(db.Model):
    __tablename__ = 'parties'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    member_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    name = db.Column(db.String(255), nullable=False)
    power = db.Column(db.Integer, nullable=False)


    # relationships
    users = db.relationship("User", back_populates="parties")
    monsters = db.relationship("Monster", back_populates="parties")

    def to_dict(self):
        return {
            'id': self.id,
            'member_id' :self.member_id,
            'name' :self.name,
            'power' :self.power,

        }
