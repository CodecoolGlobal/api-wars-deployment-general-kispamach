
from typing import List, Dict
import psycopg2
from psycopg2.extras import RealDictCursor

import database_connection


@database_connection.connection_handler
def add_new_user(cursor: RealDictCursor, email, password):
    query = """
        INSERT INTO users (email, password)
        VALUES (%(email)s, %(password)s)
    """
    data = {
        'email': email,
        'password': password
    }
    cursor.execute(query, data)


@database_connection.connection_handler
def get_hashed_password(cursor: RealDictCursor, email):
    data = {
        'email': email
    }
    query = """
        SELECT password
        FROM users
        WHERE email = %(email)s
        """
    cursor.execute(query, data)
    return cursor.fetchone()


@database_connection.connection_handler
def check_if_taken(cursor: RealDictCursor, email):
    query = """
        SELECT * FROM users
        WHERE email = %(email)s
    """
    data = {
        'email': email
    }
    cursor.execute(query, data)
    return cursor.fetchone()