import { FC } from "react";
interface DmsLookupProps {
    file: string;
    recordID: string;
    getValue: (value: any) => void;
    currentValue: number;
}
declare const DmsLookup: FC<DmsLookupProps>;
export default DmsLookup;
