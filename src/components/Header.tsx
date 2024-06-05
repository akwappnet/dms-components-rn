import React from "react";
import { View, StyleSheet } from "react-native";
import Dmslabel from "./dms/Dmslabel";

interface User {
  ID: string;
  name: string;
}

interface HeaderProps {
  user?: User;
}

const Header: React.FC<HeaderProps> = ({ user }: HeaderProps) => {
  return (
    <View style={styles.container}>
      {user && (
        <View style={styles.userInfo}>
          <Dmslabel Textstr={`Staff: ${user.ID}`} />
          <Dmslabel Textstr={`Name: ${user.name}`} />
        </View>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfo: {
    flex: 1,
    justifyContent: "center",
  },
});
