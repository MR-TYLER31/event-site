from database import db
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import String, Date, Integer


# Example model for jobs
class Job(db.Model):
    __tablename__ = "jobs"

    job_id: Mapped[int] = mapped_column(primary_key=True)
    job_title: Mapped[str] = mapped_column(String(100), nullable=True)
    employer_name: Mapped[str] = mapped_column(String(100), nullable=True)
    job_location: Mapped[str] = mapped_column(String(100), nullable=True)
    job_salary: Mapped[str] = mapped_column(String(100), nullable=True)
    job_employment_type: Mapped[str] = mapped_column(String(100), nullable=True)
    job_apply_link: Mapped[str] = mapped_column(String(100), nullable=True)
    job_status: Mapped[str] = mapped_column(String(100), nullable=True)
    job_description: Mapped[str] = mapped_column(String(500), nullable=True)
    job_is_remote: Mapped[bool] = mapped_column(String(100), nullable=True)
    job_posted_at: Mapped[str] = mapped_column(String(100), nullable=True)
    employer_logo: Mapped[str] = mapped_column(String(100), nullable=True)
    job_publisher: Mapped[str] = mapped_column(String(100), nullable=True)
    applied_date: Mapped[str] = mapped_column(Date, nullable=True)
    
def __repr__(self):
    return (
        f"<Job job_id={self.job_id} job_title={self.job_title} employer_name={self.employer_name} "
        f"job_location={self.job_location} job_description={self.job_description} job_salary={self.job_salary} "
        f"job_employment_type={self.job_employment_type} job_is_remote={self.job_is_remote} "
        f"job_posted_at={self.job_posted_at} employer_logo={self.employer_logo} job_publisher={self.job_publisher} "
        f"job_apply_link={self.job_apply_link} job_status={self.job_status} applied_date={self.applied_date}>"
    )
