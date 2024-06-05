import React from "react";
interface DmsDateProps {
    initialDate: string;
    OnDateChanged: (date: string) => void;
}
declare const DmsDate: React.FC<DmsDateProps>;
export default DmsDate;
