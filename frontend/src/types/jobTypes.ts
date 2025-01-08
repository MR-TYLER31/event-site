export type ApplicationStatus =
  | "Applied"
  | "Interviewing"
  | "Offered"
  | "Rejected";

export type Column = {
  id: ApplicationStatus;
  title: string;
};

export type Job = {
  job_id: number;
  job_title: string;
  employer_name: string;
  job_location: string;
  job_salary: string;
  job_status: string;
  employer_logo: string;
  job_publisher: string;
  job_employment_type: string;
  job_apply_link: string;
  job_description: string;
  job_is_remote: boolean;
  job_posted_at: string;
  applied_date: string;
};
