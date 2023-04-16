"""empty message

Revision ID: 41fc510db0cf
Revises: 4eca620b48f9
Create Date: 2023-04-15 23:20:36.325804

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '41fc510db0cf'
down_revision = '4eca620b48f9'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('salt', sa.String(length=500), nullable=False))
        batch_op.add_column(sa.Column('hashed_password', sa.String(length=500), nullable=False))
        batch_op.create_unique_constraint(None, ['salt'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='unique')
        batch_op.drop_column('hashed_password')
        batch_op.drop_column('salt')

    # ### end Alembic commands ###