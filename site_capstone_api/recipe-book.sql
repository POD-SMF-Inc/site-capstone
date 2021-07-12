\echo 'Delete and recreate recipe_book db?'
\prompt 'Return for yes or control-C to cancel > ' answer

DROP DATABASE recipe_book;
CREATE DATABASE recipe_book;
\connect recipe_book

\i recipe-book-schema.sql

\echo 'Delete and recreate recipe_book_test db?'
\prompt 'Return for yes or control-C to cancel > ' answer

DROP DATABASE recipe_book_test;
CREATE DATABASE recipe_book_test;
\connect recipe_book_test

\i recipe-book-schema.sql