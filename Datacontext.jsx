import React, { createContext } from 'react'
import Data from './Data'

const Datacontext = createContext();

export const Dataprovider= ({children}) => {
    const data = Data;

    return(
        <Datacontext.Provider value={data}>
            {children}
        </Datacontext.Provider>
    )

}

export default Datacontext