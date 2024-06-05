import { Image } from "react-native";
var logo = require("../Images/navlogosimple.png");

const HeaderRight: React.FC = () => {
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
};

export default HeaderRight;
