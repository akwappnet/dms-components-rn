import { Image } from "react-native";
import { navlogosimple } from "../images/Index";

const HeaderRight: React.FC = () => {
  return (
    <Image
      source={navlogosimple}
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
