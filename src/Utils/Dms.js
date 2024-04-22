import AsyncStorage from "@react-native-async-storage/async-storage";

import { NetworkInfo } from "react-native-network-info";
import DeviceInfo from "react-native-device-info";
import { NavigatorService } from "../API/Navigator";
export class Dms {
  static async GetAPIKey() {
    return (
      "194789.775.4087.49FA.10C_" +
      this.ConvertStringToHex(await this.getServerAddress())
    );
  }

  static DmsFiles() {}

  static async DocsFile() {
    return (await this.DMSROOT()) + "\\webs\\docs";
  }

  static async Token() {
    return await this.getData("Token");
  }

  static async GetAPIKeyBasic() {
    let add = await this.getServerAddress();

    let key = this.ConvertStringToHex(add);
    return key;
  }

  static ConvertStringToHex(str) {
    var arr = [];
    for (var i = 0; i < str.length; i++) {
      arr[i] = str.charCodeAt(i).toString(16).slice(-4);
    }
    return arr.join("");
  }

  static getServerAddress() {
    return this.getData("serverAddress");
  }

  static storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem("@" + key, value.toString());
    } catch (e) {}
  };

  static getData = async (key) => {
    try {
      const value = await AsyncStorage.getItem("@" + key);
      if (value !== null) {
        return value;
      }
    } catch (e) {
      return "";
    }
  };

  static async getBranch() {
    return this.getData("branch").then((b) => {
      return b;
    });
  }
  static async DMSROOT() {
    return await this.getData("DMSROOT");
  }

  static setBranch = (branch) => {
    this.storeData("branch", branch).then(() => {
      return true;
    });
  };

  static async getDeviceInfo() {
    let deviceName = "";
    await DeviceInfo.getDeviceName().then((getDeviceName) => {
      deviceName = getDeviceName;
    });

    let ipAddress = "";
    await NetworkInfo.getIPAddress().then((getIPAddress) => {
      ipAddress = getIPAddress;
    });

    let androidid = "";
    await DeviceInfo.getAndroidId().then((getAndroidId) => {
      androidid = getAndroidId;
    });

    return { ipAddress: ipAddress, pcId: androidid, deviceName: deviceName };
  }

  static async user() {
    return await this.getData("userID");
  }

  static checkPriv(user, priv) {
    let list = user.privileges.split(",");
    if (list.includes(priv)) {
      return true;
    } else {
      return false;
    }
  }

  static async HasLicence(licence) {
    const param = { licence: licence };
    const r = await NavigatorService.callProg("HASLICENCE.MOBILE", param);
    return r.HasLicence;
  }

  static getDate(method) {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    if (!method) {
      const formattedToday = dd + "/" + mm + "/" + yyyy;
      return formattedToday;
    } else if (method == "YYYY_MM") {
      return yyyy + "_" + mm;
    } else if (method == "QM") {
      let d = new Date("January 1, 1968 00:00:00");
      d = d.getTime();
      d = parseInt(d) / 1000 / 60 / 60 / 24;
      return d;
    }
  }

  static getTime() {
    var d = new Date();
    var n = d.toLocaleTimeString("en-GB");
    n = n.split(":");
    t = n[0] + ":" + n[1];
    return t;
  }
}
