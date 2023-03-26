import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const Strings = {
    en: {
        language: "English"
    },
    it: {
        language: "Italiano"
    },
    ru: {
        language: "Русский"
    },
    tr: {
        language: "Türkçe"
    }
}

export function DisplayLanguage() {
    const language = useContext(LanguageContext);

    return (
        <div>
            <h1>{Strings[language].language}</h1>
        </div>
    );
}