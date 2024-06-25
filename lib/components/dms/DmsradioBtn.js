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
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { NavigatorService } from "../../services/Navigator";
const DmsradioBtn = ({ onPress, file, recordID }) => {
    const [jobStatusList, setJobStatusList] = useState([]);
    useEffect(() => {
        populate();
    }, []);
    const populate = () => __awaiter(void 0, void 0, void 0, function* () {
        const list = yield NavigatorService.popualteRadio(file, recordID);
        setJobStatusList(list);
    });
    return (<View style={{ flex: 1 }}>
      {jobStatusList.map((item) => (<View style={styles.radioButtonContainer}>
          <TouchableOpacity onPress={onPress} style={styles.radioButton}>
            {item.selected ? <View style={styles.radioButtonIcon}/> : null}
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.radioButtonText}>{item.children}</Text>
          </TouchableOpacity>
        </View>))}
    </View>);
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
//# sourceMappingURL=DmsradioBtn.js.map