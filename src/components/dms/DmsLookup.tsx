import React, { FC, useEffect, useState } from "react";
import { View, Dimensions } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { NavigatorService } from "../../services/Navigator";

DropDownPicker.setListMode("MODAL");
const windowWidth: number = Dimensions.get("window").width;

interface DmsLookupProps {
  file: string;
  recordID: string;
  getValue: (value: any) => void;
  currentValue: number;
}

const DmsLookup: FC<DmsLookupProps> = ({
  file,
  recordID,
  getValue,
  currentValue,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<number>(0);
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    populate();
  }, []);

  const populate = async (): Promise<void> => {
    setItems(await NavigatorService.popualteDropDown(file, recordID));
    setValue(currentValue - 1);
  };

  return (
    <View style={{ flex: 1 }}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        dropDownDirection="TOP"
        onChangeValue={() => {
          getValue(items[value]);
        }}
        textStyle={{ fontSize: 0.04 * windowWidth }}
      />
    </View>
  );
};

export default DmsLookup;
