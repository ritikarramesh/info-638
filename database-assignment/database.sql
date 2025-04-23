-- database assignment

drop database if exists dog_adoption_db;

create database dog_adoption_db;

\c dog_adoption_db

CREATE TABLE "shelters" (
  "shelter_id" serial,
  "name" text NOT NULL,
  "address" text NOT NULL,
  "city" text NOT NULL,
  "state" text NOT NULL,
  "zip_code" text NOT NULL,
  "phone" text NOT NULL,
  "email" text NOT NULL,
  "website" text,
  "operating_hours" text,
  PRIMARY KEY ("shelter_id")
);

CREATE TABLE "users" (
  "user_id" serial,
  "first_name" text NOT NULL,
  "last_name" text NOT NULL,
  "email" text NOT NULL,
  "phone" text NOT NULL,
  "password_hash" text NOT NULL,
  "address" text NOT NULL,
  "city" text NOT NULL,
  "state" text NOT NULL,
  "zip_code" text NOT NULL,
  "user_type" text NOT NULL,
  "registration_date" timestamp,
  PRIMARY KEY ("user_id")
);

CREATE TABLE "dogs" (
  "dog_id" serial,
  "name" text NOT NULL,
  "breed" text NOT NULL,
  "age" int,
  "gender" text NOT NULL,
  "size" text NOT NULL,
  "color" text NOT NULL,
  "description" text,
  "status" text NOT NULL DEFAULT 'available',
  "intake_date" date NOT NULL,
  "shelter_id" int NOT NULL,
  PRIMARY KEY ("dog_id"),
  CONSTRAINT "FK_dogs.shelter_id"
    FOREIGN KEY ("shelter_id")
    REFERENCES "shelters"("shelter_id")
);

CREATE TABLE "medical_records" (
  "record_id" serial,
  "dog_id" int NOT NULL,
  "vaccination_status" boolean NOT NULL,
  "spayed_neutered" boolean NOT NULL,
  "microchip_number" text,
  "medical_history" text,
  "special_needs" text,
  "last_checkup_date" date,
  PRIMARY KEY ("record_id"),
  CONSTRAINT "FK_medical_records.dog_id"
    FOREIGN KEY ("dog_id")
    REFERENCES "dogs"("dog_id")
    ON DELETE CASCADE
);

CREATE TABLE "dog_behaviors" (
  "behavior_id" serial,
  "dog_id" int NOT NULL,
  "good_with_kids" boolean,
  "good_with_dogs" boolean,
  "good_with_cats" boolean,
  "energy_level" text NOT NULL,
  "training_level" text NOT NULL,
  "description" text,
  PRIMARY KEY ("behavior_id"),
  CONSTRAINT "FK_dog_behaviors.dog_id"
    FOREIGN KEY ("dog_id")
    REFERENCES "dogs"("dog_id")
    ON DELETE CASCADE
);

CREATE TABLE "applications" (
  "application_id" serial,
  "user_id" int NOT NULL,
  "dog_id" int NOT NULL,
  "status" text NOT NULL DEFAULT 'submitted',
  "submission_date" timestamp,
  "decision_date" timestamp,
  "notes" text,
  PRIMARY KEY ("application_id"),
  CONSTRAINT "FK_applications.user_id"
    FOREIGN KEY ("user_id")
    REFERENCES "users"("user_id")
    ON DELETE CASCADE,
  CONSTRAINT "FK_applications.dog_id"
    FOREIGN KEY ("dog_id")
    REFERENCES "dogs"("dog_id")
    ON DELETE CASCADE
);

-- this is for faster dog searches
CREATE INDEX "idx_dog_status" ON "dogs" ("status");
CREATE INDEX "idx_dog_breed" ON "dogs" ("breed");
CREATE INDEX "idx_dog_size" ON "dogs" ("size");

-- this is for application status
CREATE INDEX "idx_application_status" ON "applications" ("status");

-- this is for applications
CREATE INDEX "CCK_applications" ON "applications" ("user_id", "dog_id");