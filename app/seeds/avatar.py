from app.models import db, Avatar, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_avatars():

    avatars = [
        Avatar(user_id=1, body='/avatar/body/yellow/slim_shirt_yellow.png',
               skin='/avatar/skin/skin_f5a76e.png',
               hair='/avatar/hair/color/white/hair_bangs_4_white.png',
               extra='/avatar/extra/wheelchair/button_chair_red.png',
               backgrounds='/avatar/backgrounds/background_violet.png'),

    ]

    for avatar in avatars:
        db.session.add(avatar)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_avatars():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.avatars RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM avatars"))

    db.session.commit()
