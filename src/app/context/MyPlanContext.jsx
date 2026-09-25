'use client'
import { createContext, useState } from "react";

export const GymContext = createContext(null)

const MyPlanContext = ({children}) => {

    const [activeTab, setActiveTab] = useState("today")

    
    const sheardValue = {
        activeTab,
        setActiveTab
    }


    return (
        <GymContext.Provider value={sheardValue}>{children}</GymContext.Provider>
    );
};

export default MyPlanContext;