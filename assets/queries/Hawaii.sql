DROP TABLE hotels 
DROP TABLE climate
DROP TABLE ufo_sightings

CREATE TABLE hotels (
	latitude DECIMAL NOT NULL,
	longitude DECIMAL NOT NULL,
	island VARCHAR(30),
	city_name VARCHAR(100),
	address VARCHAR(100),
	lodging_type VARCHAR(45),
	year_open INTEGER 
);
SELECT * FROM hotels
--------------------------------
CREATE TABLE climate (
	island VARCHAR(30),
	weather_type VARCHAR(45),
	data_year INTEGER,
	jan DECIMAL,
	feb DECIMAL,
	march DECIMAL,
	april DECIMAL,
	may DECIMAL,
	june DECIMAL,
	july DECIMAL,
	aug DECIMAL,
	sep DECIMAL, 
	oct DECIMAL, 
	nov DECIMAL,
	december DECIMAL,	
	annual DECIMAL

);
SELECT * FROM climate
--------------------------------
CREATE TABLE ufo_sightings(
	dates DATE, 
	city VARCHAR(100),
	shape VARCHAR(30)
);
SELECT * FROM ufo_sightings