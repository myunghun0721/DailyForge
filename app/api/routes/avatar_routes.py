from flask import Blueprint, jsonify, request
from app.models import db, Avatar
from flask_login import current_user, login_required
from datetime import datetime
from ...forms import AvatarForm

avatar_routes = Blueprint('avatars', __name__)
# create avatar
@avatar_routes.route('/new', methods=["POST"])
@login_required
def create_route():
    form = AvatarForm()
    form['csrf_token'].data =request.cookies['csrf_token']

    if form.validate_on_submit():
        params = {
            'user_id': current_user.id,
            'body' : form.data['body'],
            'skin' : form.data['skin'],
            'hair' : form.data['hair'],
            'extra' : form.data['extra'],
            'backgrounds' : form.data['backgrounds'],
        }
        new_avatar = Avatar(**params)
        db.session.add(new_avatar)
        db.session.commit()
        # print(new_song.to_dict())
        return new_avatar.to_dict()

    return {"message": "form validation failed"}, 401

# read avatar
@avatar_routes.route('/')
def read_route():

    avatar = Avatar.query.filter(Avatar.user_id == current_user.id).first()

    if not avatar:
        return {"message": "no avatar"}

    return avatar.to_dict()

# delete avatar
@avatar_routes.route('/<int:avatarId>/delete', methods=["DELETE"])
@login_required
def avatar_delete(avatarId):
    avatar = Avatar.query.get(avatarId)

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

@avatar_routes.route('/<int:avatarId>/update', methods=['PUT'])
@login_required
def edit_song(avatarId):
    avatar = Avatar.query.get(avatarId)

    if not avatar:
        return {"message": "avatar not found"}

    if current_user.id != avatar.user_id:
        return {"message": "your not the owner of this avatar", "current_user": current_user.id, "avatar_owner": avatar.user_id}


    form = AvatarForm()
    form['csrf_token'].data =request.cookies['csrf_token']

    if form.validate_on_submit():


        avatar.body= form.data['body']
        avatar.skin =form.data['skin']
        avatar.hair =form.data['hair']
        avatar.extra = form.data['extra']
        avatar.backgrounds =form.data['backgrounds']
        avatar.user_id=current_user.id

        db.session.commit()
        return avatar.to_dict()


    return jsonify("not updated"), 404
