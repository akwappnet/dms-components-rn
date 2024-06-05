import React, { FC, useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { NavigatorService } from "../../services/Navigator";

interface DmsradioBtnProps {
  onPress: () => void;
  file: string;
  recordID: string;
}

const DmsradioBtn: FC<DmsradioBtnProps> = ({ onPress, file, recordID }) => {
  const [jobStatusList, setJobStatusList] = useState<string[]>([]);

  useEffect(() => {
    populate();
  }, []);

  const populate = async () => {
    const list = await NavigatorService.popualteRadio(file, recordID);
    setJobStatusList(list);
  };

  return (
    <View style={{ flex: 1 }}>
      {jobStatusList.map((item: any) => (
        <View style={styles.radioButtonContainer}>
          <TouchableOpacity onPress={onPress} style={styles.radioButton}>
            {item.selected ? <View style={styles.radioButtonIcon} /> : null}
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.radioButtonText}>{item.children}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

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

export default DmsradioBtn;
