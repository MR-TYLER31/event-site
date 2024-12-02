from database import db
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import String, Date, Integer


# Example model for jobs
class Job(db.Model):
    __tablename__ = "jobs"

    id: Mapped[int] = mapped_column(primary_key=True)
    title: Mapped[str] = mapped_column(String(100), nullable=False)
    company: Mapped[str] = mapped_column(String(100), nullable=False)
    location: Mapped[str] = mapped_column(String(100), nullable=False)
    salary: Mapped[str] = mapped_column(String(100), nullable=False)
    category: Mapped[str] = mapped_column(String(100), nullable=False)
    link: Mapped[str] = mapped_column(String(100), nullable=False)
    applied_date: Mapped[str] = mapped_column(Date, nullable=False)

    def __repr__(self):
        return f"<Job id={self.id} title={self.title} company={self.company}>"