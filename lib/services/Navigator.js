var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Alert } from "react-native";
import { Dms } from "../utils/Dms";
import VersionUtils from "../utils/VersionUtils";
export class NavigatorService {
    static callProg(routineName, jsonObject) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const apikey = yield Dms.GetAPIKeyBasic();
                const serverAddress = (_a = (yield Dms.getServerAddress())) !== null && _a !== void 0 ? _a : "";
                const sessionID = (_b = (yield Dms.getData("sessionID"))) !== null && _b !== void 0 ? _b : "";
                const userID = (_c = (yield Dms.getData("userID"))) !== null && _c !== void 0 ? _c : "";
                jsonObject.versionNumber = VersionUtils.getVersionNumber();
                let data = `aloadofjunk_${apikey}~${sessionID}~${routineName}:${userID}:${serverAddress}~${JSON.stringify(jsonObject)}`;
                let response = yield fetch("https://services-pool.dmservices.co.uk/DmsNavigator.NavigatorWebService.svc/CallProg", {
                    method: "POST",
                    body: data,
                    headers: {
                        "Content-Type": "text/text",
                    },
                });
                if (response.ok) {
                    const jsonValuetxt = yield response.text();
                    return JSON.parse(jsonValuetxt);
                }
                else {
                    yield Alert.alert("Error 2", "Conection Error", [{ text: "Ok" }], {
                        cancelable: true,
                    });
                }
                return "ok";
            }
            catch (error) { }
        });
    }
    static getNavigatorReportold(reportName, paramsList) {
        return __awaiter(this, void 0, void 0, function* () {
            let paramString = "";
            paramsList.forEach((param) => {
                paramString += param + ",";
            });
            paramString = paramString.substring(0, paramString.length - 1);
            let apikey = yield Dms.GetAPIKey();
            let url = `https://services.dmservices.co.uk/DmsNavigator.NavigatorWebService.svc/GetNavigatorReport/${apikey},1,${reportName},JSON,${paramString}`;
            const response = yield fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "text/text",
                },
            }).catch(() => { });
            if (response.ok) {
                const jsonValuetxt = yield response.text();
                return JSON.parse(jsonValuetxt)["x:reports"];
            }
            else {
                //("notok");
            }
            return "ok";
        });
    }
    static getNavigatorReport(reportName, paramsList) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let paramString = "";
                paramsList.forEach((param) => {
                    paramString += param + ",";
                });
                paramString = paramString.substring(0, paramString.length - 1);
                let data = {
                    routineName: reportName,
                    params: paramString,
                };
                return yield this.callProg("GET.REPORT.JSON.MOBILE", data);
            }
            catch (error) { }
        });
    }
    static writeFile(File, Record, AM, VM, SVM, Value) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = {
                    File: File,
                    Record: Record,
                    AM: AM,
                    VM: VM,
                    SVM: SVM,
                    Value: Value,
                };
                yield this.callProg("PATCH.RECORD.MOBILE", data);
            }
            catch (error) { }
        });
    }
    static WriteFileBase64(filePath, base64) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const apikey = yield Dms.GetAPIKeyBasic();
            const sessionID = (_a = (yield Dms.getData("sessionID"))) !== null && _a !== void 0 ? _a : "";
            const data = `aloadofjunk_${apikey}~${sessionID}~${filePath}~${base64}`;
            yield fetch("https://services-pool.dmservices.co.uk/DmsNavigator.NavigatorWebService.svc/WriteFileBase64", {
                method: "POST",
                body: data,
                headers: {
                    "Content-Type": "text/text",
                },
            });
        });
    }
    static ReadFile(filePath) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const apikey = yield Dms.GetAPIKeyBasic();
            const sessionID = (_a = (yield Dms.getData("sessionID"))) !== null && _a !== void 0 ? _a : "";
            const data = `aloadofjunk_${apikey}~${sessionID}~${filePath}`;
            const response = yield fetch("https://services-pool.dmservices.co.uk/DmsNavigator.NavigatorWebService.svc/ReadFile", {
                method: "POST",
                body: data,
                headers: {
                    "Content-Type": "text/text",
                },
            });
            if (response.ok) {
                const jsonValuetxt = yield response.text();
                return jsonValuetxt;
            }
            else {
                return null;
            }
        });
    }
    static popualteRadio(file, recordname) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let radio = { file: file, recordname: recordname };
                return yield this.callProg("MOBILE.POPULATE.RADIO", radio);
            }
            catch (error) { }
        });
    }
    static popualteDropDown(file, recordname) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let radio = { file: file, recordname: recordname };
                return yield this.callProg("MOBILE.POPULATE.DROPDOWN", radio);
            }
            catch (error) { }
        });
    }
    static hasFlag(recordname) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let data = {
                    Record: recordname,
                    branch: yield Dms.getBranch(),
                };
                const res = yield this.callProg("CHECK.PARAMTERS.MOBILE", data);
                if (res.res == "1") {
                    return true;
                }
                else {
                    return false;
                }
            }
            catch (error) {
                return false;
            }
        });
    }
}
//# sourceMappingURL=Navigator.js.map