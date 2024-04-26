from app.models import db, Daily, environment, SCHEMA
from sqlalchemy.sql import text
from datetime import datetime


# Adds a demo user, you can add other users here if you want
def seed_dailes():

    dailes = [
        Daily(
            user_id=1,
            title="Take out the garbage",
            note="Must take out old TV",
            difficulty="medium",
            start_date=datetime(2023, 11,10),
            repeats="no"
        ),
        Daily(
            user_id=1,
            title="Watch my favorite show",
            note="bring popcorn!!",
            difficulty="easy",
            start_date=datetime(2023, 12,10),
            repeats="yes"
        ),
        Daily(
            user_id=1,
            title="Charge my phone",
            note="need to charge my ipad too",
            difficulty="easy",
            start_date=datetime(2023, 12,10),
            repeats="yes"
        ),
        Daily(
            user_id=1,
            title="Cook dinner",
            note="let's make pizza -need to buy extra cheeze",
            difficulty="easy",
            start_date=datetime(2023, 1,10),
            repeats="no"
        ),
        Daily(
            user_id=2,
            title="Cook dinner",
            note="need milk",
            difficulty="easy",
            start_date=datetime(2023, 1,10),
            repeats="no"
        ),
        Daily(
            user_id=2,
            title="git commit",
            note="need to add comments on my code",
            difficulty="hard",
            start_date=datetime(2023, 12,10),
            repeats="yes"
        )
    ]

    for daily in dailes:
        db.session.add(daily)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_dailes():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.dailes RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM dailes"))

    db.session.commit()
