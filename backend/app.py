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
        jobs_list = [{"job_id": job.job_id,
            "job_title": job.job_title,
            "employer_name": job.employer_name,
            "job_location": job.job_location,
            "job_salary": job.job_salary,
            "job_employment_type": job.job_employment_type,
            "job_apply_link": job.job_apply_link,
            "job_status": job.job_status,
            "job_is_remote": job.job_is_remote,
            "job_posted_at": job.job_posted_at,
            "employer_logo": job.employer_logo,
            "job_publisher": job.job_publisher,
            "job_description": job.job_description,
            "applied_date": str(job.applied_date)} for job in jobs]
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
    
    
@app.route("/update-job/<job_id>/", methods=["PUT"])
def update_job(job_id):
    try:
        print(f"Attempting to udpate the job with job_id: {job_id}")
        job = Job.query.get(int(job_id))
        if not job:
            print("Job not found.")
            return jsonify({"error": "Job not found"}), 404
        
        # Parse the incoming JSON data
        job_data = request.json

        print("Received job data:", job_data)
        
        # Update fields (only update fields present in the request payload)
        job.job_title = job_data.get("job_title", job.job_title)
        job.employer_name = job_data.get("employer_name", job.employer_name)
        job.job_job_location = job_data.get("job_location", job.job_location)
        job.job_job_salary = job_data.get("job_salary", job.job_salary)
        job.job_employment_type = job_data.get("job_employment_type", job.job_employment_type)
        job.job_apply_link = job_data.get("job_apply_link", job.job_apply_link)
        job.job_status = job_data.get("job_status", job.job_status)
        job.applied_date = job_data.get("applied_date", job.applied_date)
        
        # Commit the changes to the database
        db.session.commit()
        print("Job updated successfully.")
        
        return jsonify({"message": "Job updated successfully!", "job": {
            "job_id": job.job_id,
            "job_title": job.job_title,
            "employer_name": job.employer_name,
            "job_location": job.job_location,
            "job_salary": job.job_salary,
            "job_employment_type": job.job_employment_type,
            "job_apply_link": job.job_apply_link,
            "job_status": job.job_status,
            "job_is_remote": job.job_is_remote,
            "job_posted_at": job.job_posted_at,
            "employer_logo": job.employer_logo,
            "job_publisher": job.job_publisher,
            "job_description": job.job_description,
            "applied_date": str(job.applied_date),
        }}), 200
        
    except Exception as e:
        db.session.rollback()  # Rollback changes if any error occurs
        print("Error while updating job:", str(e))
        return jsonify({"error": f"Unexpected error: {str(e)}"}), 500
    
    
@app.route("/delete-job/<job_id>/", methods=["DELETE"])
def delete_job(job_id):
    try:
        print(f"Attempting to delete job with job_id: {job_id}")
        job = Job.query.get(int(job_id))
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
