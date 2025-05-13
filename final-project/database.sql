set client_encoding = 'utf8';

create table if not exists shelters (
    id serial primary key,
    name varchar,
    address varchar,
    city varchar,
    state varchar,
    zip_code varchar,
    phone varchar,
    email varchar
);

create table if not exists dogs (
    id serial primary key,
    name varchar,
    breed varchar,
    age integer,
    gender varchar,
    size varchar,
    color varchar,
    description varchar,
    status varchar,
    shelter_id integer,
    foreign key (shelter_id) references shelters(id)
);

create table if not exists users (
    id serial primary key,
    name varchar,
    email varchar,
    salt varchar,
    password varchar
);

create table if not exists applications (
    id serial primary key,
    user_id integer,
    dog_id integer,
    status varchar,
    submission_date timestamp with time zone,
    decision_date timestamp with time zone,
    name varchar,
    phone varchar,
    address varchar,
    city varchar,
    state varchar,
    zip_code varchar,
    housing_type varchar,
    activity_level varchar,
    reason varchar,
    notes varchar,
    foreign key (user_id) references users(id),
    foreign key (dog_id) references dogs(id)
);