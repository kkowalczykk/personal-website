export interface IJobBox extends React.HTMLAttributes<HTMLDivElement> {
  jobName: string;
  jobCompany: string;
  jobStartDate: Date;
  jobEndDate: Date;
  jobDescription: string | JSX.Element;
}
