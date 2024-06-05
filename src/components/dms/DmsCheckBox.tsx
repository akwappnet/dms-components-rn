import React, { useState, FC } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface DmsCheckBoxProps {
  label?: string;
  initialCheck?: boolean;
  onCheckChange?: (checked: boolean) => void;
}

const DmsCheckBox: FC<DmsCheckBoxProps> = ({
  label,
  initialCheck = false,
  onCheckChange,
}) => {
  const [checked, setChecked] = useState<boolean>(initialCheck);

  const handlePress = () => {
    const newCheckState = !checked;
    setChecked(newCheckState);
    if (onCheckChange) {
      onCheckChange(newCheckState);
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={[styles.checkbox, checked && styles.checkedCheckbox]}>
        {checked && <View style={styles.innerCheckmark} />}
      </View>
      {label ? <Text style={styles.label}>{label}</Text> : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: "#666",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5,
  },
  checkedCheckbox: {
    backgroundColor: "#666", // color when checkbox is checked
  },
  innerCheckmark: {
    width: 9,
    height: 9,
    backgroundColor: "white",
  },
  label: {
    marginLeft: 5,
  },
});

export default DmsCheckBox;
