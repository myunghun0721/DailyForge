from flask import Blueprint, jsonify, request
from app.models import db, Avatar
from flask_login import current_user, login_required
from datetime import datetime


avatar_routes = Blueprint('avatars', __name__)


@avatar_routes.route('/')
def avatar_route():
    # print(current_user.id)
    avatar = Avatar.query.get(current_user.id)

    if not avatar:
        return {"message": "avatar not found"}, 404

    return avatar.to_dict()
