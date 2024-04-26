from flask_wtf import FlaskForm
from wtforms import StringField, DateField, SubmitField
from wtforms.validators import DataRequired


class DailyForm(FlaskForm):
    title = StringField('title', validators=[DataRequired()])
    note = StringField('note', validators=[DataRequired()])
    difficulty = StringField('difficulty', validators=[DataRequired()])
    start_date = DateField('start_date', validators=[DataRequired()])
    repeats = StringField('repeats', validators=[DataRequired()])
