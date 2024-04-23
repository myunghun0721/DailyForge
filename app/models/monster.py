from .db import db, environment, SCHEMA, add_prefix_for_prod



class Monster(db.Model):
    __tablename__ = 'monsters'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    party_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('parties.id')), nullable=False)
    image_url = db.Column(db.String(255), nullable=False)
    name = db.Column(db.String(255), nullable=False)
    power = db.Column(db.Integer, nullable=False)


    # relationships
    parties = db.relationship("Party", back_populates="monsters")

    def to_dict(self):
        return {
            'id': self.id,
            'party_id' :self.party_id,
            'image_url' :self.image_url,
            'name' :self.name,
            'power' :self.power,

        }
