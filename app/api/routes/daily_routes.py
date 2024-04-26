from flask import Blueprint, jsonify, request
from app.models import db, Avatar, Daily
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
