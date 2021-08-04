CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    password TEXT NOT NULL,
    first_name TEXT NOT NULL,
    last_name   TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1), 
    username TEXT NOT NULL UNIQUE, 
    is_admin    BOOLEAN NOT NULL DEFAULT FALSE,
    created_at  TIMESTAMP NOT NULL DEFAULT NOW()
);


CREATE TABLE profile (
    id SERIAL PRIMARY KEY,
    diet TEXT,
    intolerances TEXT,
    cuisines TEXT,
    description TEXT,
    location TEXT,
    schoolname TEXT,
    image TEXT,
    user_id INTEGER NOT NULL
);

/* CREATE TABLE image (
    id integer NOT NULL,
    name character varying (255),
    image bytea,
    user_id INTEGER NOT NULL
) */

CREATE TABLE favorites (
    id SERIAL PRIMARY KEY,
    food_id INTEGER NOT NULL,
    title TEXT,
    picture TEXT,
    user_id INTEGER NOT NULL
);

CREATE TABLE shopping (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    quantity INTEGER NOT NULL DEFAULT 1, 
    is_selected BOOLEAN NOT NULL DEFAULT FALSE,
    user_id INTEGER NOT NULL,
    unique_id TEXT NOT NULL UNIQUE
);