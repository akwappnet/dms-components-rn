import { StyleSheet, Text, Dimensions } from "react-native";
import DmsTheme from "./../../Utils/DmsTheme";

const windowWidth = Dimensions.get("window").width;

export function Dmslabel({
  Textstr,
  fontWeight,
  fontSize,
  color,
  marginBottom,
}) {
  let fontmulti = 0.035;
  if (fontSize) {
    fontmulti = 0.033 + fontSize / 1000;
  }

  const styles = StyleSheet.create({
    texts: {
      fontWeight: fontWeight ? fontWeight : "normal",
      fontSize: fontmulti * windowWidth,
      color: color ? color : DmsTheme.DmsLabelColour,
      marginBottom: marginBottom ? marginBottom : 0,
    },
  });

  return <Text style={styles.texts}>{Textstr}</Text>;
}
