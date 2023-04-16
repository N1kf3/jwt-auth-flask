"""empty message

Revision ID: 41a8353851f5
Revises: 41fc510db0cf
Create Date: 2023-04-15 23:39:26.129968

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '41a8353851f5'
down_revision = '41fc510db0cf'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.drop_column('is_active')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('is_active', sa.BOOLEAN(), autoincrement=False, nullable=False))

    # ### end Alembic commands ###
