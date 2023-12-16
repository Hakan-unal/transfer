import en from "./en.json";
import de from "./de.json";
import tr from "./tr.json";

// i18 alternative custom translator
export const translator = (key: string, lang: string = "en") => {
   switch (lang) {
      case "en":
         return en[key as keyof typeof en] as string;
      case "de":
         return de[key as keyof typeof de] as string;
      case "tr":
         return tr[key as keyof typeof tr] as string;
   }
};