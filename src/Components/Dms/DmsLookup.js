import { View, Dimensions } from "react-native";
import { useEffect, useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { NavigatorService } from "../../API/Navigator";
DropDownPicker.setListMode("MODAL");
const windowWidth = Dimensions.get("window").width;

export function DmsLookup({ file, recordID, getValue, currentValue }) {
  let [open, setOpen] = useState(null);
  let [value, setValue] = useState(null);
  let [items, setItems] = useState([]);
  useEffect(() => {
    populate();
  }, []);

  const populate = async () => {
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
}
