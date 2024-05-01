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
            difficulty="normal",
            start_date=datetime(2023, 11,10),
            repeats=0
        ),
        Daily(
            user_id=1,
            title="Watch my favorite show",
            note="bring popcorn!!",
            difficulty="easy",
            start_date=datetime(2023, 12,10),
            repeats=1
        ),
        Daily(
            user_id=1,
            title="Charge my phone",
            note="need to charge my ipad too",
            difficulty="easy",
            start_date=datetime(2023, 12,10),
            repeats=1
        ),
        Daily(
            user_id=1,
            title="Cook dinner",
            note="let's make pizza -need to buy extra cheeze",
            difficulty="easy",
            start_date=datetime(2023, 1,10),
            repeats=0
        ),
        Daily(
            user_id=2,
            title="Cook dinner",
            note="need milk",
            difficulty="easy",
            start_date=datetime(2023, 1,10),
            repeats=0
        ),
        Daily(
            user_id=1,
            title="git commit",
            note="need to add comments on my code",
            difficulty="hard",
            start_date=datetime(2023, 12,10),
            repeats=1
        ),
        Daily(
            user_id=1,
            title="Going LA",
            note="need to bring passport, id, SSN",
            difficulty="normal",
            start_date=datetime(2024, 5,1),
            repeats=0
        ),
        Daily(
            user_id=1,
            title="Let's exercise",
            note="running machine",
            difficulty="normal",
            start_date=datetime(2024, 5,1),
            repeats=0
        ),
        Daily(
            user_id=1,
            title="Play game",
            note="Lost Ark region raid",
            difficulty="hard",
            start_date=datetime(2024, 5,2),
            repeats=1
        ),
        Daily(
            user_id=1,
            title="Study coding",
            note="What is database?",
            difficulty="hard",
            start_date=datetime(2024, 5,1),
            repeats=1
        ),
        Daily(
            user_id=1,
            title="Need to buy bicycle",
            note="mountain? road? hybrid??",
            difficulty="hard",
            start_date=datetime(2024, 5,1),
            repeats=0
        ),
        Daily(
            user_id=1,
            title="Appointment with my doctor...",
            note="right shoulder still hard to move",
            difficulty="easy",
            start_date=datetime(2024, 5,4),
            repeats=0
        ),
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
        db.session.execute(f"TRUNCATE table {SCHEMA}.dailies RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM dailies"))

    db.session.commit()
