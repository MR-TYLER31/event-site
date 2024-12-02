from flask import Flask, jsonify
from flask_cors import CORS
from database import db
from models import Job
from dotenv import load_dotenv
import os

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Configure the database URI (adjust this to your setup)
app.config['SQLALCHEMY_DATABASE_URI'] = f"mysql+pymysql://{os.getenv('DB_USERNAME')}:{os.getenv('DB_PASSWORD')}@{os.getenv('DB_HOST')}/{os.getenv('DB_NAME')}"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  # Disable the overhead of tracking modifications

# Initialize the app with the SQLAlchemy extension
db.init_app(app)

# Create tables on app startup (you could also manage migrations with Flask-Migrate)
with app.app_context():
    db.create_all()

# Test route
@app.route("/")
def index():
    return "Flask-SQLAlchemy is set up"

# Example route to get all jobs
@app.route("/jobs/", methods=["GET"])
def get_jobs():
    jobs = Job.query.all()  # Query all jobs
    return jsonify([{"id": job.id, "title": job.title, "company": job.company, "applied_date": str(job.applied_date)} for job in jobs])

if __name__ == "__main__":
    app.run(debug=True)
