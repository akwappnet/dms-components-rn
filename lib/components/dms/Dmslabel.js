import { Text, Dimensions } from "react-native";
import DmsTheme from "../../utils/DmsTheme";
const windowWidth = Dimensions.get("window").width;
const Dmslabel = ({ Textstr, fontWeight, fontSize, color, marginBottom, }) => {
    let fontmulti = 0.035;
    if (fontSize) {
        fontmulti = 0.033 + fontSize / 1000;
    }
    return (<Text style={{
            fontWeight: fontWeight ? fontWeight : "normal",
            fontSize: fontmulti * windowWidth,
            color: color ? color : DmsTheme.DmsLabelColour,
            marginBottom: marginBottom ? marginBottom : 0,
        }}>
      {Textstr}
    </Text>);
};
export default Dmslabel;
//# sourceMappingURL=Dmslabel.js.map