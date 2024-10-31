import ActiveSectionContextProvide from "./active-section";
import React from "react";
import ThemeContextProvider from "./theme-context";


type ProivdersProps = {
    children: React.ReactNode;
}

export default function Providers({children}: ProivdersProps) {
    return (
        <ThemeContextProvider>
        <ActiveSectionContextProvide>
            {children}
        </ActiveSectionContextProvide>
        </ThemeContextProvider>
    )
}