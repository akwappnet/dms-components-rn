import { View, Pressable, Image } from "react-native";
import * as Images from "../../images/Index";
import Dmslabel from "./Dmslabel";
import DmsTheme from "../../utils/DmsTheme";
const DmsButton = ({ props }) => {
    const getImage = () => {
        if (props.image === "techIcon") {
            return Images.techIcon;
        }
        if (props.image === "clockIcon") {
            return Images.clockIcon;
        }
        if (props.image === "clockOffIcon") {
            return Images.clockOffIcon;
        }
        if (props.image === "downArrow") {
            return Images.downArrow;
        }
        if (props.image === "plusSymbol") {
            return Images.plusSymbol;
        }
        if (props.image === "sendSymbol") {
            return Images.sendSymbol;
        }
        return null;
    };
    return (<Pressable style={{
            borderRadius: 15,
            backgroundColor: props.backgroundColor
                ? props.backgroundColor
                : DmsTheme.DmsButtonColour,
            flex: 1,
        }} onPress={props.onPress}>
      {props.image && props.name === "" && (<View style={{ flex: 1 }}>
          <Image source={getImage()} style={{ height: "100%", width: "100%" }} resizeMode="contain"/>
        </View>)}

      {props.name && !props.image && (<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Dmslabel Textstr={props.name} fontSize={20} fontWeight="bold" color="white"/>
        </View>)}

      {props.image && props.name && (<View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{
                flex: 0.2,
                padding: 5,
                justifyContent: "center",
                alignItems: "center",
            }}>
            <Image source={getImage()} style={{ height: "100%", width: "100%" }} resizeMode="contain"/>
          </View>
          <View style={{
                flex: 1,
                justifyContent: "center",
                paddingLeft: 10,
            }}>
            <Dmslabel Textstr={props.name} fontSize={20} fontWeight="bold" color="white"/>
          </View>
        </View>)}
    </Pressable>);
};
export default DmsButton;
//# sourceMappingURL=DmsButton.js.map