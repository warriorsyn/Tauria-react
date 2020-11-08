import React, {  Fragment, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as uuid from 'uuid';

import { CrustTypeEnum } from '../../enums/CrustTypeEnum';

import ICrustType from '../../interfaces/ICrustType';
import IIngredients from '../../interfaces/IIngredients';
import IPizzaSizes from '../../interfaces/IPizzaSizes';

import {Button, Content} from './style';

const PizzaBuilder: React.FC = () => {

  const history = useHistory();

  const [sizes, setSizes] = useState<IPizzaSizes[]>([]);

  const [selectedSize, setSelectedSize] = useState<IPizzaSizes>();

  const [crustType, setCrustType] = useState<ICrustType[]>();

  const [selectedCrustType, setSelectedCrustType] = useState<ICrustType>();

  const [ingredients, setIngredients] = useState<IIngredients[]>();

  const [selectedIngredients, setSelectedIngredients] = useState<Array<IIngredients>>([])

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

  useEffect(() => {
    setInterval(() => {
      setSizes(mockSize)
    }, 1000);
  }, [])


  function showCrustType(): void {
    setCrustType(mockCrust);
  }

  function showIngredients(): void {
    setIngredients(igredientsMock);
  }

  function handleSizeChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const size = sizes?.find(s => s.id.toString() === event.target.value);
    if (!size) return;

    setSelectedSize(size);

    showCrustType();
  }

  function handleCrustChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const crust = crustType?.find(c => c.id.toString() === event.target.value)
    if(!crust) return;

    setSelectedCrustType(crust);

    showIngredients()
  }

  function handleIngredientsSelection(event: React.ChangeEvent<HTMLInputElement>): void {
    
    let ingredient = ingredients?.find(i => i.id === event.target.value);

    if(!ingredients) return;

    const selected = selectedIngredients.find(s => s.id === event.target.id);

    if (selected) { 
      setSelectedIngredients(state => state.filter(s => s.id !== selected.id))
      return;
    }


    if(selectedSize?.size === 'Small') {
      if(selectedIngredients.length === 5) {
        alert("Sorry, You can only add 5 ingredients to small pizza size!")
        return;
      }
    }

    if(selectedSize?.size === 'medium') {
      if(selectedIngredients.length === 7) {
        alert("Sorry, You can only add 7 ingredients to medium pizza size!")
        return;
      }
    }

    if(selectedSize?.size === 'Large') {
      if(selectedIngredients.length === 9) {
        alert("Sorry, You can only add 9 ingredients to large pizza size!")
        return;
      }
    }

    setSelectedIngredients(state => [...state as any, ingredient]);
  }

  function calculateTotalOrder(): number {
    let total = (selectedSize?.price || 0) + (selectedCrustType?.price || 0);    
    
    
    if (selectedIngredients.length > 3) {
      const extraQuantity = selectedIngredients.length - 3;
      
      total += extraQuantity * 0.5
    }

    return total;
  }

  function finishOrder() {

    const total = calculateTotalOrder();

    const order = {
      size: selectedSize,
      crust: selectedCrustType,
      ingredients: selectedIngredients,
      total
    }

    history.push({
      pathname: 'finishorder',
      search: `?order=${JSON.stringify(order)}`
    })
  }

  return (
    <Fragment>
        <div className="container">
          <div className="row mt-4">
            <div className="col-12">
              <Content>
                  <div className="card-main row no-gutters">
                    <div className="title">
                      <span className="main">Build your pizza</span>
                      <span className="sub">Select the items to build the pizza</span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12">
                      <strong className="title">Choose the pizza size</strong>
                      
                      <div className="radio-group d-flex">
                        {sizes?.map(item => (
                          <div key={item.id} className="mr-3" onChange={(e: any) => handleSizeChange(e)}>
                            <input name="sizes"  id={item.id.toString()} value={item.id}  type="radio" />
                            <label htmlFor={item.id.toString()}>{item.size} (${item.price})</label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12">
                      <strong className="title">{crustType && "Choose crust type"}</strong>
                      
                      <div className="radio-group d-flex">
                        {crustType?.map(item => (
                          <div key={item.id} className="mr-3" onChange={(e: any) => handleCrustChange(e)}>
                            <input name="crust" id={`${item.id.toString()}-crust`} value={item.id} type="radio" />
                            <label htmlFor={`${item.id.toString()}-crust`}>{item.type === CrustTypeEnum.Thick ? 'Thick' : 'Thin'} (${item.price})</label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12">
                      <strong className="title">{ingredients && "Choose the ingredients (After 3 ingredients each one will cost $0.50)"}</strong>
                      
                      <div className="radio-group d-flex flex-wrap">
                        {ingredients?.map(item => (
                          <div key={item.id} className="mr-3">
                            <input className="mr-1" name="ingredients" onChange={(e: any) => handleIngredientsSelection(e)} id={`${item.id.toString()}`} checked={!!selectedIngredients.find(s => s.id == item.id)} value={item.id} type="checkbox" />
                            <label htmlFor={`${item.id.toString()}`}>{item.name}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                 {selectedCrustType && (
                    <div className="row">
                      <div className="col-12 text-right">
                        <Button onClick={() => finishOrder()}>Finish order</Button>
                      </div>
                  </div>
                 )}
              </Content>
            </div>
          </div>
        </div>
    </Fragment>
  );
}

export default PizzaBuilder;
