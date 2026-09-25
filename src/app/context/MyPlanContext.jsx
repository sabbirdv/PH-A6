'use client'
import { createContext, useState } from "react";

export const GymContext = createContext(null)


const MyPlanContext = ({children}) => {

    const [activeTab, setActiveTab] = useState("today")
    const [todaysData, setTodaysData] = useState([])
    const [savedData, setSavedData] = useState([])

    let todayListCount = todaysData.length;
    let saveListCount = savedData.length;

    const sheardValue = {
        activeTab,
        setActiveTab,
        todaysData,
        setTodaysData,
        savedData,
        setSavedData,
        todayListCount,
        saveListCount,

    }

    return (
        <GymContext.Provider value={sheardValue}>{children}</GymContext.Provider>
    );
};

export default MyPlanContext;