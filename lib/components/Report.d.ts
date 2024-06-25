/// <reference types="react" />
interface ReportProps {
    reportData: any[];
    reportFunction: (item: any) => void;
    reportKey: string;
}
declare const Report: React.FC<ReportProps>;
export default Report;
