import AsyncStorage from "@react-native-async-storage/async-storage";
import { NetworkInfo } from "react-native-network-info";
import DeviceInfo from "react-native-device-info";
import { NavigatorService } from "../services/Navigator";

export class Dms {
  static async GetAPIKey() {
    const address = await this.getServerAddress();
    return "194789.775.4087.49FA.10C_" + this.ConvertStringToHex(address ?? "");
  }

  static DmsFiles(): void {}

  static async DocsFile(): Promise<string> {
    return (await this.DMSROOT()) + "\\webs\\docs";
  }

  static async Token() {
    return await this.getData("Token");
  }

  static async GetAPIKeyBasic(): Promise<string> {
    let add = await this.getServerAddress();

    let key = this.ConvertStringToHex(add ?? "");
    return key;
  }

  static ConvertStringToHex(str: string): string {
    var arr: string[] = [];
    for (var i = 0; i < str.length; i++) {
      arr[i] = str.charCodeAt(i).toString(16).slice(-4);
    }
    return arr.join("");
  }

  static async getServerAddress() {
    return await this.getData("serverAddress");
  }

  static storeData = async (key: string, value: string): Promise<void> => {
    try {
      await AsyncStorage.setItem("@" + key, value.toString());
    } catch (e) {}
  };

  static getData = async (key: string) => {
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

  static setBranch = (branch: string) => {
    return this.storeData("branch", branch).then(() => {
      return true;
    });
  };

  static async getDeviceInfo(): Promise<{
    ipAddress: string;
    pcId: string;
    deviceName: string;
  }> {
    let deviceName = "";
    await DeviceInfo.getDeviceName().then((getDeviceName: any) => {
      deviceName = getDeviceName;
    });

    let ipAddress = "";
    await NetworkInfo.getIPAddress().then((getIPAddress: any) => {
      ipAddress = getIPAddress;
    });

    let androidid = "";
    await DeviceInfo.getAndroidId().then((getAndroidId: any) => {
      androidid = getAndroidId;
    });

    return { ipAddress: ipAddress, pcId: androidid, deviceName: deviceName };
  }

  static async user() {
    return await this.getData("userID");
  }

  static checkPriv(user: { privileges: string }, priv: string): boolean {
    let list = user.privileges.split(",");
    if (list.includes(priv)) {
      return true;
    } else {
      return false;
    }
  }

  static async HasLicence(licence: string): Promise<boolean> {
    const param = { licence: licence };
    const r = await NavigatorService.callProg("HASLICENCE.MOBILE", param);
    return r.HasLicence;
  }

  static getDate(method?: "YYYY_MM" | "QM") {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0"); // Use padStart for consistent formatting
    const dd = String(today.getDate()).padStart(2, "0");

    if (!method) {
      const formattedToday = `${dd}/${mm}/${yyyy}`; // Template literals for cleaner string formatting
      return formattedToday;
    } else if (method === "YYYY_MM") {
      return `${yyyy}_${mm}`;
    } else if (method === "QM") {
      // Consider using a dedicated library for date calculations
      // This logic might be better encapsulated in a separate utility function
      const d = new Date("January 1, 1968 00:00:00").getTime();
      const daysSinceEpoch = Math.floor(d / (1000 * 60 * 60 * 24));
      return daysSinceEpoch.toString();
    } else {
      throw new Error(`Invalid method: ${method}`); // Handle invalid methods
    }
  }

  static getTime(): string {
    const d = new Date();
    const hours = d.getHours().toString().padStart(2, "0");
    const minutes = d.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }
}
