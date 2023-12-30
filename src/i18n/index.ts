import english from "./en.json";
import spanish from "./es.json";

const LANGUAGES = {
  SPANISH: "es",
  ENGLISH: "en",
};

export const getI18N = ({
  currentLocale = "es",
}: {
  currentLocale?: string | undefined;
}) => {
  //   switch (currentLocale) {
  //     case LANGUAGES.ENGLISH:
  //       return english;
  //     case LANGUAGES.SPANISH:
  //       return spanish;
  //     default:
  //       return spanish;
  //   }

  if (currentLocale === LANGUAGES.ENGLISH) return english;
  if (currentLocale === LANGUAGES.SPANISH) return spanish;
};
