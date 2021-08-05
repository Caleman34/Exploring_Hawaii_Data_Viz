from flask import Flask, render_template, jsonify, request

from sqlalchemy import create_engine, func
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from config import username
from config import password

app = Flask(__name__)

engine = create_engine(f"postgresql://{username}:{password}@localhost:5432/climate")
conn = engine.connect()
Base = automap_base()
Base.prepare(engine, reflect=True)
session = Session(engine)

print(Base.classes.keys())
climate_table = Base.classes.climate

@app.route('/')
def home_page():
    return render_template('index.html')


@app.route('/weather', methods=['GET'])
def get_all_stations():
    """Step 2:
        Query the db for all stations in the station table
       Step 3:
        DB provides the data
    """
    station = session.query(climate_table).all()
    session.close()
    res_object = []  # Empty response object

    """Step 4:
        Process the provided data and send it to 'display_data.html' with render_template()
    """
    for station in station:
        print(station)
        res_object.append({
            'island': station.island,
            'weather_type': station.weather_type,
            'data_year': station.data_year,
            'jan': station.jan,
            'feb': station.feb,
            'march':station.march,
            'april': station.april,
            'may': station.may,
            'june': station.june,
            'july': station.july,
            'aug':station.aug,
            'sep': station.sep,
            'oct':station.oct,
            'nov': station.nov,
            'december':station.december,
            'annual': station.annual,
            
        })

    return render_template('display_data.html', res_object=res_object)

if __name__ == "__main__":
    app.run(debug=True)