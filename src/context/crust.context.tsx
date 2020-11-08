import React, { createContext, useContext, useState } from 'react';
import { CrustTypeEnum } from '../enums/CrustTypeEnum';
import ICrustType from '../interfaces/ICrustType';
 

interface ICrustContext {
    crustType?: ICrustType[],
    setCrustType?: any;
    selectedCrustType?: ICrustType;
    setSelectedCrustType?: any;
    showCrusts: Function;
}

export const CrustContext = createContext<ICrustContext>({showCrusts: Function});

export default function CrustProvider({ children }: any) {


    const [crustType, setCrustType] = useState<ICrustType[]>();
    const [selectedCrustType, setSelectedCrustType] = useState<ICrustType>();

    function showCrusts() {
        const mockCrust: ICrustType[] = [
            {
              id: 1,
              type: CrustTypeEnum.Thin,
              price: 2
            },
            {
              id: 2,
              type: CrustTypeEnum.Thick,
              price: 4
            }
          ];

          setCrustType(mockCrust);
    } 
    
    return (
        <CrustContext.Provider value={{crustType, setCrustType, showCrusts, selectedCrustType, setSelectedCrustType}}>
            {children}
        </CrustContext.Provider>
    )
}

 
export function useCrust(): ICrustContext {
    const context = useContext(CrustContext);
    const { crustType, setCrustType, selectedCrustType,setSelectedCrustType ,showCrusts } = context;

    return { crustType, setCrustType, selectedCrustType, setSelectedCrustType ,showCrusts };
}

