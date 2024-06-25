import { FC } from "react";
import { KeyboardTypeOptions } from "react-native";
interface DmstextProps {
    placeholder: string;
    onChangeText: (text: string) => void;
    value: string;
    keyboardType?: KeyboardTypeOptions;
    secureTextEntry?: boolean;
    onEndEditing?: () => void;
}
declare const Dmstext: FC<DmstextProps>;
export default Dmstext;
