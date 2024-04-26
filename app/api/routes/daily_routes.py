from flask import Blueprint, jsonify, request
from app.models import db, Daily
from flask_login import current_user, login_required
from datetime import datetime
from ...forms import DailyForm

daily_routes = Blueprint('dailies', __name__)

# read dailies
@daily_routes.route('/')
def read_route():

    dailies = Daily.query.filter(Daily.user_id == current_user.id).all()

    if not dailies:
        return {"message": "no dailies"}

    return [daily.to_dict() for daily in dailies]

@daily_routes.route('/new', methods=['POST'])
@login_required
def post_route():
    form = DailyForm()
    form['csrf_token'].data =request.cookies['csrf_token']


    if form.validate_on_submit():
        params = {
            'user_id': current_user.id,
            'title' : form.data['title'],
            'note' : form.data['note'],
            'difficulty' : form.data['difficulty'],
            'start_date' : form.data['start_date'],
            'repeats' : True if form.data['repeats'] == True else False ,
        }
        new_daily = Daily(**params)
        db.session.add(new_daily)
        db.session.commit()
        # print(new_song.to_dict())
        return new_daily.to_dict()

    return {"message": "form validation failed"}, 401

# delete daily
@daily_routes.route('/<int:dailyId>/delete', methods=["DELETE"])
@login_required
def daily_delete(dailyId):
    daily = Daily.query.get(dailyId)

    if not daily:
        return {"message": "daily not found"}, 404
    if current_user.id != daily.user_id:
        return {"message": "your not the owner of this daily", "current_user": current_user.id, "daily_owner": daily.user_id}

    db.session.delete(daily)
    db.session.commit()

    return {"message": "delete successful"}
