drop database if exists mydb;

create database mydb;
\c mydb;

create table authors (
    id serial primary key,
    first_name text,
    last_name text
);

insert into authors (first_name, last_name) values ('Colleen', 'Hoover');
insert into authors (first_name, last_name) values ('John', 'Green');
insert into authors (first_name, last_name) values ('Stephenie', 'Meyer');
insert into authors (first_name, last_name) values ('Frank', 'Herbert');
insert into authors (first_name, last_name) values ('J.K.', 'Rowling');

create table books (
    id serial primary key,
    title text,
    publishing_year int,
    genre_id int
);

insert into books (title, publishing_year) values ('Verity', 2022);
insert into books (title, publishing_year) values ('The Fault in Our Stars', 2012);
insert into books (title, publishing_year) values ('Twilight', 2005);
insert into books (title, publishing_year) values ('Dune', 1965);
insert into books (title, publishing_year) values ('Harry Potter and the Philosophers Stone', 1997);