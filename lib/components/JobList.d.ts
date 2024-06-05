import React from "react";
interface ReportItem {
    [key: string]: string;
    "Job No": string;
    Reg: string;
}
interface JobListProps {
    reportData: ReportItem[];
    reportFunction: (item: ReportItem) => void;
    reportKey: string;
    load: () => Promise<void>;
}
declare const JobList: React.FC<JobListProps>;
export default JobList;
