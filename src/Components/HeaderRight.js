import { Image } from "react-native";
var logo = require("../Images/navlogosimple.png");

export function HeaderRight() {
  return (
    <Image
      source={logo}
      style={{
        height: "50%",
        width: "50%",
        flex: 1,
        resizeMode: "contain",
      }}
    ></Image>
  );
}
