drop database if exists my_first_db;

create database my_first_db;

\c my_first_db

CREATE TABLE "users" (
  "id" serial,
  "name" text,
  "email" text,
  "password" text,
  "salt" text,
  PRIMARY KEY ("id")
);

CREATE TABLE "genres" (
  "id" serial ,
  "name" text,
  PRIMARY KEY ("id")
);

CREATE TABLE "books" (
  "id" serial,
  "title" text,
  "genre_id" int,
  "publishing_year" int,
  PRIMARY KEY ("id")
);

CREATE TABLE "comments" (
  "id" serial,
  "user_id" int,
  "book_id" int,
  "comment" text,
  "created_at" timestamp,
  PRIMARY KEY ("id")
);

CREATE TABLE "authors" (
  "id" serial,
  "first_name" text,
  "last_name" text,
  PRIMARY KEY ("id")
);

CREATE TABLE "authors_books" (
  "id" serial,
  "author_id" int,
  "book_id" int,
  PRIMARY KEY ("id")
);

CREATE TABLE "books_users" (
  "id" serial,
  "user_id" int,
  "book_id" int,
  "read_status" text,
  PRIMARY KEY ("id")
);
