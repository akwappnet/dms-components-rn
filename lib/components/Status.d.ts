/// <reference types="react" />
interface TechnicianStatus {
    clockedOn: boolean;
    IsTechIn: string;
    jobID: string;
    RegNo: string;
    TimeTaken: string;
    TimeAllocated: string;
}
declare const Status: React.FC<TechnicianStatus>;
export default Status;
