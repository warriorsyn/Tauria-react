import { stat } from 'fs';
import React, { ChangeEvent, Fragment, InputHTMLAttributes, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as uuid from 'uuid';

import {Button, Container, Content} from './style';



const FinishOrder: React.FC = () => {

  return (
    <Fragment>
        <div className="container">
          <div className="row mt-4">
            <div className="col-2">
              ola
            </div>
            <div className="col-10">
              <Content>
                  <div className="card-main row no-gutters">
                    <div className="title">
                      <span className="main">Build your pizza</span>
                      <span className="sub">Select the items to build the pizza</span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12">
                      <span className="title">Choose the pizza size</span>
                      
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
                      <span className="title">{crustType && "Choose crust type"}</span>
                      
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
                      <span className="title">{ingredients && "Choose the ingredients (After 3 ingredients each one will cost $0.50"}</span>
                      
                      <div className="radio-group d-flex flex-wrap">
                        {ingredients?.map(item => (
                          <div key={item.id} className="mr-3">
                            <input name="ingredients" onChange={(e: any) => handleIngredientsSelection(e)} id={`${item.id.toString()}`} checked={!!selectedIngredients.find(s => s.id == item.id)} value={item.id} type="checkbox" />
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

        <button onClick={() => console.log(selectedIngredients)}>asd</button>
    </Fragment>
  );
}


export default FinishOrder;
