import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { NavigatorService } from "../../API/Navigator";

export function DmsradioBtn({ onPress, file, recordID }) {
  let [jobStatusList, setjobStatusList] = useState([]);

  useEffect(() => {
    populate();
  }, []);

  const populate = async () => {
    return setjobStatusList(
      await NavigatorService.popualteRadio(file, recordID)
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {jobStatusList.map((item) => (
        <View style={styles.radioButtonContainer}>
          <TouchableOpacity onPress={onPress} style={styles.radioButton}>
            {selected ? <View style={styles.radioButtonIcon} /> : null}
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.radioButtonText}>{children}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 45,
  },
  radioButton: {
    height: 20,
    width: 20,
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E6E6E6",
    alignItems: "center",
    justifyContent: "center",
  },
  radioButtonIcon: {
    height: 14,
    width: 14,
    borderRadius: 7,
    backgroundColor: "#98CFB6",
  },
  radioButtonText: {
    fontSize: 16,
    marginLeft: 16,
  },
});
