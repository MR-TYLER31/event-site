from flask import Flask, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Configure the database URI
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://username:password@localhost/database_name'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  # Optional: Disables unnecessary overhead


# Initialize SQLAlchemy
db = SQLAlchemy(app)

# Define a database model
class Job(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    company = db.Column(db.String(100), nullable=False)
    applied_date = db.Column(db.Date, nullable=False)

# Example job data (replace with your actual data)
jobs = [
    {
        "id": 1,
        "title": "Lead Software Engineer (Front End)",
        "company": "Capital One",
        "location": "Norfolk, VA",
        "salary": "$100K - $140K",
        "type": "Full-Time",
        "link": "#",
    },
    {
        "id": 2,
        "title": "Senior Developer Point of Sale",
        "company": "Cambridge Consulting Group LLC",
        "location": "Austin, TX",
        "salary": "$80 - $140/hr",
        "type": "Contractor",
        "link": "#",
    },
    {
        "id": 3,
        "title": "Lead React.js Developer (Remote, EST)",
        "company": "Cloud7Works",
        "location": "Remote, OR",
        "salary": "$100K - $180K",
        "type": "Full-Time",
        "link": "#",
    },
    {
        "id": 4,
        "title": "Lead React.js Developer (Remote, EST)",
        "company": "Cloud7Works",
        "location": "Remote, OR",
        "salary": "$100K - $180K",
        "type": "Full-Time",
        "link": "#",
    },
    {
        "id": 5,
        "title": "Lead Software Engineer (Front End)",
        "company": "Capital One",
        "location": "Norfolk, VA",
        "salary": "$100K - $140K",
        "type": "Full-Time",
        "link": "#",
    },
    {
        "id": 6,
        "title": "Senior Developer Point of Sale",
        "company": "Cambridge Consulting Group LLC",
        "location": "Austin, TX",
        "salary": "$80 - $140/hr",
        "type": "Contractor",
        "link": "#",
    },
    {
        "id": 7,
        "title": "Lead React.js Developer (Remote, EST)",
        "company": "Cloud7Works",
        "location": "Remote, OR",
        "salary": "$100K - $180K",
        "type": "Full-Time",
        "link": "#",
    },
    {
        "id": 8,
        "title": "Lead React.js Developer (Remote, EST)",
        "company": "Cloud7Works",
        "location": "Remote, OR",
        "salary": "$100K - $180K",
        "type": "Full-Time",
        "link": "#",
    },
]

# @app.route("/dashboard/", methods=["GET"])
# def get_jobs():
#     return jsonify(jobs)

# Route to test database connection
@app.route("/")
def index():
    return 'Flask-SQLAlchemy is set up'

if __name__ == "__main__":
    app.run(debug=True)