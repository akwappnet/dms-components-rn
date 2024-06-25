var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NetworkInfo } from "react-native-network-info";
import DeviceInfo from "react-native-device-info";
import { NavigatorService } from "../services/Navigator";
class Dms {
    static GetAPIKey() {
        return __awaiter(this, void 0, void 0, function* () {
            const address = yield this.getServerAddress();
            return "194789.775.4087.49FA.10C_" + this.ConvertStringToHex(address !== null && address !== void 0 ? address : "");
        });
    }
    static DmsFiles() { }
    static DocsFile() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.DMSROOT()) + "\\webs\\docs";
        });
    }
    static Token() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getData("Token");
        });
    }
    static GetAPIKeyBasic() {
        return __awaiter(this, void 0, void 0, function* () {
            let add = yield this.getServerAddress();
            let key = this.ConvertStringToHex(add !== null && add !== void 0 ? add : "");
            return key;
        });
    }
    static ConvertStringToHex(str) {
        var arr = [];
        for (var i = 0; i < str.length; i++) {
            arr[i] = str.charCodeAt(i).toString(16).slice(-4);
        }
        return arr.join("");
    }
    static getServerAddress() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getData("serverAddress");
        });
    }
    static getBranch() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getData("branch").then((b) => {
                return b;
            });
        });
    }
    static DMSROOT() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getData("DMSROOT");
        });
    }
    static getDeviceInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            let deviceName = "";
            yield DeviceInfo.getDeviceName().then((getDeviceName) => {
                deviceName = getDeviceName;
            });
            let ipAddress = "";
            yield NetworkInfo.getIPAddress().then((getIPAddress) => {
                ipAddress = getIPAddress;
            });
            let androidid = "";
            yield DeviceInfo.getAndroidId().then((getAndroidId) => {
                androidid = getAndroidId;
            });
            return { ipAddress: ipAddress, pcId: androidid, deviceName: deviceName };
        });
    }
    static user() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getData("userID");
        });
    }
    static checkPriv(user, priv) {
        let list = user.privileges.split(",");
        if (list.includes(priv)) {
            return true;
        }
        else {
            return false;
        }
    }
    static HasLicence(licence) {
        return __awaiter(this, void 0, void 0, function* () {
            const param = { licence: licence };
            const r = yield NavigatorService.callProg("HASLICENCE.MOBILE", param);
            return r.HasLicence;
        });
    }
    static getDate(method) {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, "0"); // Use padStart for consistent formatting
        const dd = String(today.getDate()).padStart(2, "0");
        if (!method) {
            const formattedToday = `${dd}/${mm}/${yyyy}`; // Template literals for cleaner string formatting
            return formattedToday;
        }
        else if (method === "YYYY_MM") {
            return `${yyyy}_${mm}`;
        }
        else if (method === "QM") {
            // Consider using a dedicated library for date calculations
            // This logic might be better encapsulated in a separate utility function
            const d = new Date("January 1, 1968 00:00:00").getTime();
            const daysSinceEpoch = Math.floor(d / (1000 * 60 * 60 * 24));
            return daysSinceEpoch.toString();
        }
        else {
            throw new Error(`Invalid method: ${method}`); // Handle invalid methods
        }
    }
    static getTime() {
        const d = new Date();
        const hours = d.getHours().toString().padStart(2, "0");
        const minutes = d.getMinutes().toString().padStart(2, "0");
        return `${hours}:${minutes}`;
    }
}
_a = Dms;
Dms.storeData = (key, value) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield AsyncStorage.setItem("@" + key, value.toString());
    }
    catch (e) { }
});
Dms.getData = (key) => __awaiter(void 0, void 0, void 0, function* () {
    const value = yield AsyncStorage.getItem("@" + key);
    if (value !== null) {
        return value;
    }
    else {
        return "";
    }
});
Dms.setBranch = (branch) => {
    return _a.storeData("branch", branch).then(() => {
        return true;
    });
};
export { Dms };
//# sourceMappingURL=Dms.js.map