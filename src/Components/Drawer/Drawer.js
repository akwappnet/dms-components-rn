import React, { useContext } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import {
  navlogo,
  techIcon,
  settingsSymbol,
  signoutSymbol,
} from "../../Images/Index";
import VersionUtils from "../../Utils/VersionUtils";
import { Dms } from "../../Utils/Dms";
import { Dmslabel } from "../Dms/Dmslabel";
const windowWidth = Dimensions.get("window").width;

export function Drawer({ navigation, signOut, getUser }) {
  // Enhanced DrawerLabel to include icon mapping
  const DrawerLabel = ({ label, onPress, iconName }) => {
    let iconSource;
    switch (iconName) {
      case "techIcon":
        iconSource = techIcon;
        break;
      case "settingsSymbol":
        iconSource = settingsSymbol;
        break;
      case "signoutSymbol":
        iconSource = signoutSymbol;
        break;
      default:
        iconSource = techIcon; // default icon if none matched
    }

    return (
      <TouchableOpacity style={styles.drawerRow} onPress={onPress}>
        <Image source={iconSource} style={styles.icon} />
        <Text style={styles.drawerLabel(windowWidth)}>{label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Image source={navlogo} resizeMode="contain" style={styles.logo} />
      <View style={styles.userInfoSection}>
        <Dmslabel {...{ Textstr: "Name " + getUser().name }} />
        <Dmslabel {...{ Textstr: "User " + getUser().ID }} />
        <Dmslabel
          {...{ Textstr: "Version " + VersionUtils.getVersionNumber() }}
        />
      </View>
      <DrawerContentScrollView style={{ flex: 1 }}>
        <DrawerLabel
          label="Technicians Clocking"
          onPress={() => navigation.navigate("TechniciansStack")}
          iconName="techIcon"
        />
        {Dms.checkPriv(getUser(), "TEST") && (
          <DrawerLabel
            label="TEST"
            onPress={() => navigation.navigate("Test")}
            iconName="techIcon"
          />
        )}
        {Dms.checkPriv(getUser(), "MYAUTOCOMPANION.LOCKER") && (
          <DrawerLabel
            label="Locker Management"
            onPress={() => navigation.navigate("LockerScreen")}
            iconName="techIcon" // Assuming techIcon for now, update as necessary
          />
        )}
      </DrawerContentScrollView>
      <DrawerLabel
        label="Settings"
        onPress={() => navigation.navigate("Settings")}
        iconName="settingsSymbol"
      />
      <DrawerLabel label="Signout" onPress={signOut} iconName="signoutSymbol" />
      <View style={{ height: 50 }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: "20%",
    width: "90%",
    marginTop: 10,
    alignSelf: "center", // Ensure the logo is centered
  },
  userInfoSection: {
    flex: 0.05,
    padding: 10,
  },
  drawerRow: {
    flexDirection: "row",
    borderColor: "grey",
    borderRadius: 7,
    backgroundColor: "lightblue",
    margin: 20,
    marginBottom: 2,
    alignItems: "center",
  },
  icon: {
    height: 30,
    width: 30,
    margin: 2,
  },
  drawerLabel: (windowWidth) => ({
    fontWeight: "bold",
    fontSize: 0.033 * windowWidth,
    marginLeft: 10,
  }),
});
