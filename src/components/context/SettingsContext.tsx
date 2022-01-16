import React from "react";

interface context {
    workMinutes: number;
    breakMinutes: number;
    setWorkMinutes: (num: number) => void;
    setBreakMinutes: (num: number) => void;
    setShowSettings: (el: boolean) => void;
}

const SettingsContext = React.createContext({} as context)

export default SettingsContext