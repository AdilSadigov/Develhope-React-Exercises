import React from "react";
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

export class DisplayLanguage extends React.Component {
    render () {
        return <div>
                 <LanguageContext.Consumer>
                    { (language) => {
                        return <h1>{Strings[language].language}</h1>
                    }}
                </LanguageContext.Consumer>
        </div>
    }
}