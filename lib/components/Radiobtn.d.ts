import React, { ReactNode } from "react";
interface RadiobtnProps {
    onPress: () => void;
    selected: boolean;
    children: ReactNode;
}
declare const Radiobtn: React.FC<RadiobtnProps>;
export default Radiobtn;
