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
Object.defineProperty(exports, "__esModule", { value: true });
const Navigator_1 = require("../services/Navigator");
const Dms_1 = require("./Dms");
class DmsTheme {
    getThemes() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const themes = yield Navigator_1.NavigatorService.callProg("GET.THEMES.MOBILE", {
                    branch: yield Dms_1.Dms.getBranch(),
                });
                if (themes.NavigationTheme === "Defualt") {
                    this.defualt();
                }
                else {
                    this.buildThemes(themes);
                }
            }
            catch (error) {
                this.defualt();
            }
        });
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
exports.default = new DmsTheme();
