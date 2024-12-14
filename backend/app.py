from flask import Flask, jsonify, request
from flask_cors import CORS
from database import db
from models import Job
from dotenv import load_dotenv
import os


load_dotenv()
# Initialize Flask app
app = Flask(__name__)
CORS(app)


# Configure the database URI (adjust this to your setup)
app.config['SQLALCHEMY_DATABASE_URI'] = f"mysql+pymysql://{os.getenv('DB_USERNAME')}:{os.getenv('DB_PASSWORD')}@{os.getenv('DB_HOST')}/{os.getenv('DB_NAME')}"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  # Disable the overhead of tracking modifications

# Initialize the app with the SQLAlchemy extension
db.init_app(app)
with app.app_context():
     db.create_all()
  


# Create tables on app startup (you could also manage migrations with Flask-Migrate)


# Test route
@app.route("/")
def index():
    return "Flask-SQLAlchemy is set up"

# Example route to get all jobs
@app.route("/jobs/", methods=["GET"])
def get_jobs():
    try:
        jobs = Job.query.all()  # Query all jobs
        # print("jobs fetched:", jobs)
        jobs_list = [{"id": job.id, "title": job.title, "company": job.company, "location": job.location, "salary": job.salary, "category": job.category, "link": job.link, "status": job.status, "applied_date": str(job.applied_date)} for job in jobs]
        return jsonify(jobs_list), 200
    except Exception as e:
        print("Error:", str(e))
        return jsonify({"error": str(e)}), 500
    
    
@app.route("/add-job/", methods=["POST"])
def add_job():
    try:
        job_data = request.json
        print("Received job data:", job_data)
        new_job = Job(**job_data)
        db.session.add(new_job)
        db.session.commit()
        return jsonify({"message": "Job added successfully!"}), 202
    except Exception as e:
        db.session.rollback() # Rollback in case of error
        return jsonify({"error": str(e)}), 500
    
    
@app.route("/delete-job/<id>/", methods=["DELETE"])
def delete_job(id):
    try:
        print(f"Attempting to delete job with ID: {id}")
        job = Job.query.get(int(id))
        if not job:
            print("Job not found.")
            return jsonify({"error": "Job not found"}), 404

        print(f"Job found: {job}")
        db.session.delete(job)
        db.session.commit()
        print("Job deleted successfully.")
        return jsonify({"message": "Job deleted successfully"}), 200
    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({"error": f"Unexpected error: {str(e)}"}), 500

        

if __name__ == "__main__":
    app.run(debug=True)
