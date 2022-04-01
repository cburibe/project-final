"""empty message

Revision ID: 1411fac66bad
Revises: 698f584031af
Create Date: 2022-03-31 23:20:52.354239

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '1411fac66bad'
down_revision = '698f584031af'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('place', sa.Column('name', sa.String(length=120), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('place', 'name')
    # ### end Alembic commands ###
