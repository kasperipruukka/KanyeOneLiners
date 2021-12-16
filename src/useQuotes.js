import { useContext, useEffect } from "react";
import { AppContext } from "./app-context";

const useQuotes = () => {
    const [state, useState] = useContext(AppContext);

    const testiFunkkari = () => {
        console.log('Testataan AppContext ja useContext toimivuus');
    };

    return {
        testiFunkkari,
    };
}

export default useQuotes;