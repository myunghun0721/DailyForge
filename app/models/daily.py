from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime


class Daily(db.Model):
    __tablename__ = 'dailies'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    title = db.Column(db.String(255), nullable=False)
    note = db.Column(db.String(255), nullable=False)
    difficulty = db.Column(db.String(255), nullable=False)
    start_date = db.Column(db.DateTime, default=datetime.utcnow)
    repeats = db.Column(db.Boolean, nullable=False)

    # relationships
    users = db.relationship("User", back_populates="dailies")

    def to_dict(self):
        return {
            'id': self.id,
            'title' :self.title,
            'note' :self.note,
            'difficulty' :self.difficulty,
            'start_date' :self.start_date,
            'repeats' :self.repeats,
        }
