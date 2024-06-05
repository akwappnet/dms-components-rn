import { FC } from "react";
interface DmsradioBtnProps {
    onPress: () => void;
    file: string;
    recordID: string;
}
declare const DmsradioBtn: FC<DmsradioBtnProps>;
export default DmsradioBtn;
