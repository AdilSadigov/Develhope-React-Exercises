import React from "react";
import { LanguageContext } from "./LanguageContext";

const Strings = {
    en: {
        WelcomeTxt: "Welcome, "
    },
    it: {
        WelcomeTxt: "Benvenuto, "
    },
    ru: {
        WelcomeTxt: "Добро пожаловать, "
    },
    tr: {
        WelcomeTxt: "Hoş geldin, "
    }
}

export class DisplayLanguage extends React.Component {
    render () {
        return <div>
                 <LanguageContext.Consumer>
                    { (language) => {
                        return <h1>{Strings[language].WelcomeTxt} {this.props.name}</h1>
                    }}
                </LanguageContext.Consumer>
        </div>
    }
}