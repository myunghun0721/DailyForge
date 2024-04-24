from flask_wtf import FlaskForm
from wtforms import StringField, DateField, SubmitField
from wtforms.validators import DataRequired


class AvatarForm(FlaskForm):
    body = StringField('Body', validators=[DataRequired()])
    skin = StringField('Skin', validators=[DataRequired()])
    hair = StringField('Hair', validators=[DataRequired()])
    extra = StringField('Extra', validators=[DataRequired()])
    backgrounds = StringField('Background', validators=[DataRequired()])
