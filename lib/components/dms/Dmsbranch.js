"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const react_1 = require("react");
const Dms_1 = require("../../utils/Dms");
const DmsLookup_1 = __importDefault(require("./DmsLookup"));
const Dmsbranch = () => {
    const [userID, setUserID] = (0, react_1.useState)("");
    const [branch, setBranch] = (0, react_1.useState)("");
    (0, react_1.useEffect)(() => {
        getUser();
    }, []);
    const getUser = () => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        setUserID((_a = (yield Dms_1.Dms.user())) !== null && _a !== void 0 ? _a : "");
        setBranch((_b = (yield Dms_1.Dms.getBranch())) !== null && _b !== void 0 ? _b : "1");
    });
    const setSelectedBranch = (branchdata) => {
        if (branchdata !== null) {
            Dms_1.Dms.setBranch(branchdata.branch);
        }
    };
    return (<react_native_1.View style={{ flex: 1 }}>
      {userID !== "" && branch !== "" && (<DmsLookup_1.default file={userID} recordID="BRANCHES.ALL" getValue={setSelectedBranch} currentValue={parseInt(branch)}></DmsLookup_1.default>)}
    </react_native_1.View>);
};
exports.default = Dmsbranch;
