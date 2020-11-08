import React, { createContext, useContext, useState } from 'react';
import * as uuid from 'uuid';

import IIngredients from '../interfaces/IIngredients';
 
interface IIngredientsContext {
    ingredients?: IIngredients[];
    setIngredients?: any;
    selectedIngredients: IIngredients[];
    setSelectedIngredients: React.Dispatch<React.SetStateAction<IIngredients[]>>
    showIngredients: Function;
}

export const IngredientsContext = createContext<IIngredientsContext>({ 
    showIngredients: Function, 
    selectedIngredients: [], 
    setSelectedIngredients: (): void => {} 
});

export default function IngredientsProvider({ children }: any) {

    const [ingredients, setIngredients] = useState<IIngredients[]>();

    const [selectedIngredients, setSelectedIngredients] = useState<Array<IIngredients>>([])

    function showIngredients(): void {
        const igredientsMock: IIngredients[] = [
            {
              id: uuid.v4(),
              imageUrl: '',
              name: 'Pepperoni',
            },
            {
              id: uuid.v4(),
              imageUrl: '',
              name: 'Onions',
            },
            {
              id: uuid.v4(),
              imageUrl: '',
              name: 'Sausage',
            },
            {
              id: uuid.v4(),
              imageUrl: '',
              name: 'Bacon',
            },
            {
              id: uuid.v4(),
              imageUrl: '',
              name: 'Extra cheese',
            },
            {
              id: uuid.v4(),
              imageUrl: '',
              name: 'Black olives',
            },
            {
              id: uuid.v4(),
              imageUrl: '',
              name: 'Green peppers',
            },
            {
              id: uuid.v4(),
              imageUrl: '',
              name: 'Pineapple',
            },
            {
              id: uuid.v4(),
              imageUrl: '',
              name: 'Spinach',
            },
          ]

          
        setIngredients(igredientsMock);
      }

    return (
        <IngredientsContext.Provider value={{ingredients, setIngredients, showIngredients, selectedIngredients, setSelectedIngredients}}>
            {children}
        </IngredientsContext.Provider>
    )
}
 
export function useIngredients(): IIngredientsContext {
    const context = useContext(IngredientsContext);
    const { ingredients, setIngredients, showIngredients, selectedIngredients, setSelectedIngredients } = context;

    return { ingredients, setIngredients, showIngredients, selectedIngredients, setSelectedIngredients };
}
