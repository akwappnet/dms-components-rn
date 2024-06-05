import { NavigatorService } from "../services/Navigator";
import { Dms } from "./Dms";

interface Theme {
  DmsButtonColour: string;
  DmsLabelColour: string;
  DmsTextColour: string;
  DmsTextBackgroundColour: string;
  DmsTextPlaceHolderTextColour: string;
  NavigationTheme: string;
}

class DmsTheme {
  DmsButtonColour: string;
  DmsLabelColour: string;
  DmsTextColour: string;
  DmsTextBackgroundColour: string;
  DmsTextPlaceHolderTextColour: string;
  NavigationTheme: string;

  async getThemes(): Promise<void> {
    try {
      const themes: Theme = await NavigatorService.callProg(
        "GET.THEMES.MOBILE",
        {
          branch: await Dms.getBranch(),
        }
      );
      if (themes.NavigationTheme === "Defualt") {
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

  defualt(): void {
    this.DmsButtonColour = "#32A952";
    this.DmsLabelColour = "black";
    this.DmsTextColour = "black";
    this.DmsTextBackgroundColour = "white";
    this.DmsTextPlaceHolderTextColour = "grey";
    this.NavigationTheme = "Defualt";
  }

  buildThemes(theme: Theme): void {
    this.DmsButtonColour = theme.DmsButtonColour;
    this.DmsLabelColour = theme.DmsLabelColour;
    this.DmsTextColour = theme.DmsTextColour;
    this.DmsTextBackgroundColour = theme.DmsTextBackgroundColour;
    this.DmsTextPlaceHolderTextColour = theme.DmsTextPlaceHolderTextColour;
    this.NavigationTheme = theme.NavigationTheme;
  }
}

export default new DmsTheme();
