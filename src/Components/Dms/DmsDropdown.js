import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import SelectDropdown from "react-native-select-dropdown";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const DmsDropdownPicker = ({
  items,
  placeholder,
  onSelect,
  isCamera = false,
  defaultValue,
  defaultValueByIndex = null,
}) => {
  return (
    <SelectDropdown
      defaultValueByIndex={defaultValueByIndex}
      defaultValue={defaultValue}
      data={items}
      onSelect={onSelect}
      renderButton={(selectedItem, isOpened) => {
        return (
          <View
            style={[
              styles.dropdownButtonStyle,
              { width: isCamera ? wp("70%") : wp("86%") },
            ]}
          >
            {selectedItem && (
              <MaterialCommunityIcons
                name={selectedItem.icon}
                style={styles.dropdownButtonIconStyle}
              />
            )}
            <Text style={styles.dropdownButtonTxtStyle}>
              {(selectedItem && selectedItem.label) || placeholder}
            </Text>
            <MaterialCommunityIcons
              name={isOpened ? "chevron-up" : "chevron-down"}
              style={styles.dropdownButtonArrowStyle}
            />
          </View>
        );
      }}
      renderItem={(item, index, isSelected) => {
        const isLastItem = index === items.length - 1;
        return (
          <View
            style={{
              ...styles.dropdownItemStyle,
              ...(isSelected && { backgroundColor: "#D2D9DF" }),
            }}
          >
            <MaterialCommunityIcons
              name={item.icon}
              style={styles.dropdownItemIconStyle}
            />
            <View style={[styles.textContainer, isLastItem && styles.noBorder]}>
              <Text style={styles.dropdownItemTxtStyle}>{item.label}</Text>
            </View>
          </View>
        );
      }}
      showsVerticalScrollIndicator={false}
      dropdownStyle={styles.dropdownMenuStyle}
    />
  );
};

const styles = StyleSheet.create({
  dropdownButtonStyle: {
    height: 50,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
    marginTop: 10,
    alignSelf: "center",
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
    color: "#151E26",
    textAlign: "center",
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: "#E9ECEF",
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 1,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
    color: "#151E26",
    padding: 15,
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  textContainer: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#151E2610",
  },
  noBorder: {
    borderBottomWidth: 0,
  },
});

export default DmsDropdownPicker;
