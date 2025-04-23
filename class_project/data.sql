\c my_first_db

insert into authors (first_name, last_name) values ('Colleen', 'Hoover');
insert into authors (first_name, last_name) values ('John', 'Green');
insert into authors (first_name, last_name) values ('Stephenie', 'Meyer');
insert into authors (first_name, last_name) values ('Frank', 'Herbert');
insert into authors (first_name, last_name) values ('J.K.', 'Rowling');

insert into genres (name) values ('Science Fiction');
insert into genres (name) values ('Fantasy');
insert into genres (name) values ('Romance');
insert into genres (name) values ('Mystery');
insert into genres (name) values ('Horror'); --check this


insert into books (title, publishing_year) values ('Verity', 2022, (select id from genres where name = 'Science Fiction'));
insert into books (title, publishing_year) values ('The Fault in Our Stars', 2012, (select id from genres where name = 'Science Fiction'));
insert into books (title, publishing_year) values ('Twilight', 2005, (select id from genres where name = 'Sience Fiction'));
insert into books (title, publishing_year) values ('Dune', 1965, (select id from genres where name = 'Sience Fiction'));
insert into books (title, publishing_year) values ('Harry Potter and the Philosophers Stone', 1997, (select id from genres where name = 'Sience Fiction'));

INSERT into authors_books (author_id, book_id) values (1, 1);
INSERT into authors_books (author_id, book_id) values (1, 2);


