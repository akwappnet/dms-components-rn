import { Text, Dimensions, TextStyle } from "react-native";
import DmsTheme from "../../utils/DmsTheme";

const windowWidth: number = Dimensions.get("window").width;

interface DmslabelProps {
  Textstr: string;
  fontWeight?: "normal" | "bold" | "light" | "medium";
  fontSize?: number;
  color?: string;
  marginBottom?: number;
}

const Dmslabel = ({
  Textstr,
  fontWeight,
  fontSize,
  color,
  marginBottom,
}: DmslabelProps): JSX.Element => {
  let fontmulti: number = 0.035;
  if (fontSize) {
    fontmulti = 0.033 + fontSize / 1000;
  }

  return (
    <Text
      style={{
        fontWeight: fontWeight ? fontWeight : "normal",
        fontSize: fontmulti * windowWidth,
        color: color ? color : DmsTheme.DmsLabelColour,
        marginBottom: marginBottom ? marginBottom : 0,
      }}
    >
      {Textstr}
    </Text>
  );
};

export default Dmslabel;
