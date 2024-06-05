"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Dmslabel_1 = __importDefault(require("./dms/Dmslabel"));
const Header = ({ user }) => {
    return (<react_native_1.View style={styles.container}>
      {user && (<react_native_1.View style={styles.userInfo}>
          <Dmslabel_1.default Textstr={`Staff: ${user.ID}`}/>
          <Dmslabel_1.default Textstr={`Name: ${user.name}`}/>
        </react_native_1.View>)}
    </react_native_1.View>);
};
exports.default = Header;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfo: {
        flex: 1,
        justifyContent: "center",
    },
});
