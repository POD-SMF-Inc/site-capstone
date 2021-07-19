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
    image TEXT,
    schoolName TEXT,
    user_id INTEGER NOT NULL
);