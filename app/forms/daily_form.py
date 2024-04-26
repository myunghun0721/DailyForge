from flask_wtf import FlaskForm
from wtforms import StringField, DateField, SubmitField, SelectField,BooleanField
from wtforms.validators import DataRequired


class DailyForm(FlaskForm):
    title = StringField('title', validators=[DataRequired()])
    note = StringField('note', validators=[DataRequired()])
    difficulty = SelectField('difficulty', choices=[('easy', 'Easy'), ('normal', 'Normal'), ('hard', 'Hard')], validators=[DataRequired()])
    start_date = DateField('start_date', validators=[DataRequired()])
    repeats = BooleanField('repeats' )
