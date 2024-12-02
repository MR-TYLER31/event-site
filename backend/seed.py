from app import app
from database import db  # Import your database instance
from models import Job  # Import your Job model
from datetime import datetime

def seed_jobs():
    seed_data = [
            {
            "title": "Lead Software Engineer (Front End)",
            "company": "Capital One",
            "location": "Norfolk, VA",
            "salary": "$100K - $140K",
            "category": "Full-Time",
            "status": "Applied",
            "applied_date": "2024-12-02",
            "link": "#",
        },
        {
            "title": "Senior Developer Point of Sale",
            "company": "Cambridge Consulting Group LLC",
            "location": "Austin, TX",
            "salary": "$80 - $140/hr",
            "category": "Contractor",
            "status": "Applied",
            "applied_date": "2024-12-02",
            "link": "#",
        },
        {
            "title": "Lead React.js Developer (Remote, EST)",
            "company": "Cloud7Works",
            "location": "Remote, OR",
            "salary": "$100K - $180K",
            "category": "Full-Time",
            "status": "Applied",
            "applied_date": "2024-12-02",
            "link": "#",
        },
        {
            "title": "Lead React.js Developer (Remote, EST)",
            "company": "Cloud7Works",
            "location": "Remote, OR",
            "salary": "$100K - $180K",
            "category": "Full-Time",
            "status": "Interviewing",
            "applied_date": "2024-12-02",
            "link": "#",
        },
        {
            "title": "Lead Software Engineer (Front End)",
            "company": "Capital One",
            "location": "Norfolk, VA",
            "salary": "$100K - $140K",
            "category": "Full-Time",
            "status": "Interviewing",
            "applied_date": "2024-12-02",
            "link": "#",
        },
        {
            "title": "Senior Developer Point of Sale",
            "company": "Cambridge Consulting Group LLC",
            "location": "Austin, TX",
            "salary": "$80 - $140/hr",
            "category": "Contractor",
            "status": "Rejected",
            "applied_date": "2024-12-02",
            "link": "#",
        },
        {
            "title": "Lead React.js Developer (Remote, EST)",
            "company": "Cloud7Works",
            "location": "Remote, OR",
            "salary": "$100K - $180K",
            "category": "Full-Time",
            "status": "Rejected",
            "applied_date": "2024-12-02",
            "link": "#",
        },
        {
            "title": "Lead React.js Developer (Remote, EST)",
            "company": "Cloud7Works",
            "location": "Remote, OR",
            "salary": "$100K - $180K",
            "category": "Full-Time",
            "status": "Interviewing",
            "applied_date": "2024-12-02",
            "link": "#",
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
