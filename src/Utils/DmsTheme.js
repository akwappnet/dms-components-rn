import { NavigatorService } from "../API/Navigator";
import { Dms } from "./Dms";
class DmsTheme {
  async getThemes() {
    try {
      const themes = await NavigatorService.callProg("GET.THEMES.MOBILE", {
        branch: await Dms.getBranch(),
      });
      if (themes.Defualt) {
        this.defualt();
      } else {
        this.buildThemes(themes);
      }
    } catch (error) {
      this.defualt();
    }
  }

  constructor() {
    this.DmsButtonColour = "#32A952";
    this.DmsLabelColour = "black";
    this.DmsTextColour = "black";
    this.DmsTextBackgroundColour = "white";
    this.DmsTextPlaceHolderTextColour = "grey";
    this.NavigationTheme = "Defualt";
  }

  defualt() {
    this.DmsButtonColour = "#32A952";
    this.DmsLabelColour = "black";
    this.DmsTextColour = "black";
    this.DmsTextBackgroundColour = "white";
    this.DmsTextPlaceHolderTextColour = "grey";
    this.NavigationTheme = "Defualt";
  }

  buildThemes(theme) {
    this.DmsButtonColour = theme.DmsButtonColour;
    this.DmsLabelColour = theme.DmsLabelColour;
    this.DmsTextColour = theme.DmsTextColour;
    this.DmsTextBackgroundColour = theme.DmsTextBackgroundColour;
    this.DmsTextPlaceHolderTextColour = theme.DmsTextPlaceHolderTextColour;
    this.NavigationTheme = theme.NavigationTheme;
  }
}
export default new DmsTheme();
