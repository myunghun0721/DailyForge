from flask import Blueprint, jsonify, request
from app.models import db, Avatar
from flask_login import current_user, login_required
from datetime import datetime


avatar_routes = Blueprint('avatars', __name__)
# create avatar
@avatar_routes.route('/new', methods=["POST"])
@login_required
def create_route():
    return {"create": "create route"}

# read avatar
@avatar_routes.route('/')
def read_route():
    # print(current_user.id)
    avatar = Avatar.query.get(current_user.id)

    if not avatar:
        return {"message": "no avatar"}

    return avatar.to_dict()

# delete avatar
@avatar_routes.route('/delete', methods=["DELETE"])
@login_required
def avatar_delete():
    avatar = Avatar.query.get(current_user.id)

    if not avatar:
        return {"message": "avatar not found"}, 404
    if current_user.id != avatar.user_id:
        return {"message": "your not the owner of this avatar", "current_user": current_user.id, "avatar_owner": avatar.user_id}

    db.session.delete(avatar)
    db.session.commit()

    return {"message": "delete successful"}


@avatar_routes.route('/test')
def test_route():
    return {"message": "testing"}
