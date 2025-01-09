from app import app
from database import db  # Import your database instance
from models import Job  # Import your Job model
from datetime import datetime

def seed_jobs():
    seed_data = [
            {
            "job_title": "Lead Software Engineer (Front End)",
            "employer_name": "Capital One",
            "job_location": "Norfolk, VA",
            "job_salary": "$100K - $140K",
            "job_employment_type": "Full-Time",
            "job_status": "Applied",
            "applied_date": "2024-12-02",
            "job_apply_link": "#",
        },
        {
            "job_title": "Senior Developer Point of Sale",
            "employer_name": "Cambridge Consulting Group LLC",
            "job_location": "Austin, TX",
            "job_salary": "$80 - $140/hr",
            "job_employment_type": "Contractor",
            "job_status": "Applied",
            "applied_date": "2024-12-02",
            "job_apply_link": "#",
        },
        {
            "job_title": "Lead React.js Developer (Remote, EST)",
            "employer_name": "Cloud7Works",
            "job_location": "Remote, OR",
            "job_salary": "$100K - $180K",
            "job_employment_type": "Full-Time",
            "job_status": "Applied",
            "applied_date": "2024-12-02",
            "job_apply_link": "#",
        },
        {
            "job_title": "Python Developer",
            "employer_name": "Adobe",
            "job_location": "Remote, OR",
            "job_salary": "$100K - $180K",
            "job_employment_type": "Full-Time",
            "job_status": "Interviewing",
            "applied_date": "2024-12-02",
            "job_apply_link": "#",
        },
        {
            "job_title": "Javascript Developer",
            "employer_name": "Meta",
            "job_location": "Norfolk, VA",
            "job_salary": "$100K - $140K",
            "job_employment_type": "Full-Time",
            "job_status": "Interviewing",
            "applied_date": "2024-12-02",
            "job_apply_link": "#",
        },
        {
            "job_title": "Front End Developer",
            "employer_name": "Instagram",
            "job_location": "Austin, TX",
            "job_salary": "$80 - $140/hr",
            "job_employment_type": "Contractor",
            "job_status": "Rejected",
            "applied_date": "2024-12-02",
            "job_apply_link": "#",
        },
        {
            "job_title": "Full Stack Developer",
            "employer_name": "Microsoft",
            "job_location": "Remote, OR",
            "job_salary": "$100K - $180K",
            "job_employment_type": "Full-Time",
            "job_status": "Rejected",
            "applied_date": "2024-12-02",
            "job_apply_link": "#",
        },
        {
            "job_title": "Software Engineer",
            "employer_name": "Twitter",
            "job_location": "Remote, OR",
            "job_salary": "$100K - $180K",
            "job_employment_type": "Full-Time",
            "job_status": "Interviewing",
            "applied_date": "2024-12-02",
            "job_apply_link": "#",
        },
    ]

    # Create Job objects and add them to the session
    for job_data in seed_data:
        job = Job(**job_data)
        db.session.add(job)

    # Commit the session to save the data to the database
    db.session.commit()
    print("Seed data inserted successfully!")

# Run the seed function
if __name__ == "__main__":
    with app.app_context():
      # This sets up the app context
        seed_jobs()
