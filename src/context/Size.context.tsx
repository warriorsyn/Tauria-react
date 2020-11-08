import React, { createContext, useContext, useState } from 'react';
import IPizzaSizes from '../interfaces/IPizzaSizes';


interface ISizeContext {
    sizes?: IPizzaSizes[];
    setSizes?: any;
    selectedSize?: IPizzaSizes;
    setSelectedSize?: any;
}

export const SizeContext = createContext<ISizeContext>({});

export default function SizeProvider({ children }: any) {

    const mockSize: IPizzaSizes[] = [
        {
          id: 1,
          size: 'Small',
          price: 8
        },
        {
          id: 2,
          size: 'medium',
          price: 10
        },
        {
          id: 3,
          size: 'Large',
          price: 12
        }
      ];

    const [sizes, setSizes] = useState<IPizzaSizes[]>(mockSize);

    const [selectedSize, setSelectedSize] = useState<IPizzaSizes>();

    return (
        <SizeContext.Provider value={{sizes, setSizes, selectedSize, setSelectedSize}}>
            {children}
        </SizeContext.Provider>
    )
}

 
export function useSize(): ISizeContext {
    const context = useContext(SizeContext);
    const { sizes, setSizes, setSelectedSize, selectedSize } = context;

    return { sizes, setSizes, selectedSize, setSelectedSize };
}
