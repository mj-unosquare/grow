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

CREATE TABLE tracker
(
    tracker_id serial PRIMARY KEY,
    tracker_name VARCHAR(100) NOT NULL,
    tracker_type VARCHAR(100) NOT NULL
)

CREATE TABLE plant_record
(
    plant_record_id serial PRIMARY KEY,
    plant_id serial NOT NULL,
    tracker_id serial NOT NULL,
    record_date DATE,
    record_value VARCHAR(100) NOT NULL,
    FOREIGN KEY
    (plant_id) REFERENCES plant
    (plant_id),
    FOREIGN KEY
    (tracker_id) REFERENCES tracker
    (tracker_id)
)

insert into tracker
    (tracker_id, tracker_name, tracker_type)
VALUES
    (1, 'water', 'number');

insert into plant_record
    (plant_record_id, plant_id, tracker_id, record_date, record_value)
VALUES
    (1, 1, 1, CURRENT_DATE - 1, "10")

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



ALTER TABLE tracker
ADD COLUMN description VARCHAR
(250);

ALTER TABLE tracker
ADD COLUMN measurement VARCHAR
(50);

ALTER TABLE tracker
ADD COLUMN imageurl VARCHAR
(250);

update tracker set description = 'you can indicate how much you watered this plant below.' where 1=1;
update tracker set measurement = 'ml' where 1=1;
update tracker set imageurl = 'https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/water-512.png' where 1=1;

insert into tracker
    (tracker_id, tracker_name, tracker_type, description, measurement, imageurl)
VALUES
    (2, 'soil pH', 'number', 'pH can affect how well a plant is able to absorb nutrients from soil', 'https://cdn4.iconfinder.com/data/icons/ios-web-user-interface-multi-circle-flat-vol-5/512/Culture_cube_lab_accessories_lab_experiment_laboratory_sample_tube_test_tube-512.png');