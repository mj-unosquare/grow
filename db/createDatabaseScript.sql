CREATE DATABASE grow;

use grow;

CREATE TABLE account
(
    user_id serial PRIMARY KEY,
    username VARCHAR (50) UNIQUE NOT NULL,
    email VARCHAR (150) NOT NULL,
    first_name VARCHAR (100) NOT NULL,
    surname VARCHAR(100) NOT NULL,
    create_on TIMESTAMP NOT NULL,
    last_login TIMESTAMP
);

CREATE TABLE LOCATION
(
    location_id serial PRIMARY KEY,
    user_id serial NOT NULL,
    location_name VARCHAR
    (50) NOT NULL,
    description VARCHAR
    (200),
    FOREIGN KEY
    (user_id) REFERENCES account
    (user_id)
);

CREATE TABLE plant
(
    plant_id serial PRIMARY KEY,
    location_id serial NOT NULL,
    plant_name VARCHAR(100) NOT NULL,
    description VARCHAR (200),
    FOREIGN KEY
    (location_id) REFERENCES location
    (location_id)
);

INSERT INTO account
    (user_id, username, email, first_name, surname, create_on, last_login)
VALUES
    (1, 'janed', 'a@b.com', 'Jane', 'Doe', CURRENT_DATE, CURRENT_DATE);


/* location 1 */
insert into location
    (location_id, user_id, location_name, description)
values
    (1, 1, 'Living Room', 'The living room is north-facing with a large window and lots of windowsill space for plants to go. However, it''s also a high cat traffic area, with lots of cat-related plant mishaps.');

insert into plant
    (plant_id, location_id, plant_name, description)
values
    (1, 1, 'Monstera', 'Likes indirect sunlight. Brown tips on some leaves. Approx. 1m tall.');

insert into plant
    (plant_id, location_id, plant_name, description)
values
    (2, 1, 'Asparagus fern', 'Likes shade and the occasional spray of water. Approx. 20 cm tall.');

insert into plant
    (plant_id, location_id, plant_name, description)
values
    (3, 1, 'Echeveria', 'Easy plant, likes basically any position and very little water. Flowered once in direct sunlight.');


/* location 2 */
insert into location
    (location_id, user_id, location_name, description)
values
    (2, 1, 'Kitchen', 'The kitchen is south-facing with some windowsill space and lots of counter space.');


insert into plant
    (plant_id, location_id, plant_name, description)
values
    (4, 2, 'Echeveria', 'Easy plant, likes basically any position and very little water. Flowered once in direct sunlight.');

insert into plant
    (plant_id, location_id, plant_name, description)
values
    (5, 2, 'Aloe Vera', 'Prime target for cats!');

/* location 3 */
insert into location
    (location_id, user_id, location_name, description)
values
    (3, 1, 'Bathroom', 'The bathroom is small and south-facing with a little bit of space for 1 or 2 plants.');



insert into plant
    (plant_id, location_id, plant_name, description)
values
    (6, 3, 'Echeveria', 'Easy plant, likes basically any position and very little water. Flowered once in direct sunlight.');

insert into plant
    (plant_id, location_id, plant_name, description)
values
    (7, 3, 'Snake plant', 'Easy plant, likes basically any position and very little water.');


/* add imageurl column and default image */
ALTER TABLE location 
ADD COLUMN imageurl VARCHAR;

UPDATE location
SET imageurl = 'https://images.pexels.com/photos/1122765/pexels-photo-1122765.jpeg'
WHERE
   1=1;

ALTER TABLE plant 
ADD COLUMN imageurl VARCHAR;

UPDATE plant
SET imageurl = 'https://images.pexels.com/photos/1122765/pexels-photo-1122765.jpeg'
WHERE
   1=1;