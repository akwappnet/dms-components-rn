var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { useEffect, useState } from "react";
import { View, Dimensions } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { NavigatorService } from "../../services/Navigator";
DropDownPicker.setListMode("MODAL");
const windowWidth = Dimensions.get("window").width;
const DmsLookup = ({ file, recordID, getValue, currentValue, }) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(0);
    const [items, setItems] = useState([]);
    useEffect(() => {
        populate();
    }, []);
    const populate = () => __awaiter(void 0, void 0, void 0, function* () {
        setItems(yield NavigatorService.popualteDropDown(file, recordID));
        setValue(currentValue - 1);
    });
    return (<View style={{ flex: 1 }}>
      <DropDownPicker open={open} value={value} items={items} setOpen={setOpen} setValue={setValue} setItems={setItems} dropDownDirection="TOP" onChangeValue={() => {
            getValue(items[value]);
        }} textStyle={{ fontSize: 0.04 * windowWidth }}/>
    </View>);
};
export default DmsLookup;
//# sourceMappingURL=DmsLookup.js.map