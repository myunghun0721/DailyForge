"""empty message

Revision ID: d06f50d403a0
Revises: 4cef9aa8fe0a
Create Date: 2024-06-03 15:49:29.992588

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd06f50d403a0'
down_revision = '4cef9aa8fe0a'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('avatars', schema=None) as batch_op:
        batch_op.drop_column('exp')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('avatars', schema=None) as batch_op:
        batch_op.add_column(sa.Column('exp', sa.INTEGER(), nullable=True))

    # ### end Alembic commands ###
