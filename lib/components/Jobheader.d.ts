import React from "react";
interface TechnicianStatus {
    colour: string;
    clockedOn: boolean;
    jobID: string;
    TimeTaken: string;
    TimeAllocated: string;
}
interface JobheaderProps {
    technicianStatus: TechnicianStatus;
    selectedJob: string;
    setSelectedJob: (job: string) => void;
}
declare const Jobheader: React.FC<JobheaderProps>;
export default Jobheader;
