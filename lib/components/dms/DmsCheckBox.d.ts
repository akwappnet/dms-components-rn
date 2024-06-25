import { FC } from "react";
interface DmsCheckBoxProps {
    label?: string;
    initialCheck?: boolean;
    onCheckChange?: (checked: boolean) => void;
}
declare const DmsCheckBox: FC<DmsCheckBoxProps>;
export default DmsCheckBox;
