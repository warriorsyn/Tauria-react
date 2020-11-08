import React, {Fragment, useEffect, useState } from 'react';


import {Button, Content} from './style';



const FinishOrder: React.FC = () => {

  const [order, setOrder] = useState();
  

  return (
    <Fragment>
        <div className="container">
          <div className="row mt-4">
            <div className="col-12">
              <Content>
                  <div className="card-main row no-gutters">
                    <div className="title">
                      <span className="main">Your order</span>
                      <span className="sub">Thanks for buying with us!</span>
                    </div>
                  </div>

                  <div className="row no-gutters">
                    <div className="col-12 size">
                      Size:
                      <span>Big()</span>
                    </div>
                    <div className="crust col-12">
                      <div>
                        Crust:
                        <span>Big()</span>
                      </div>
                    </div>

                    <div className="crust col-12">
                      <div>
                        Ingredients:
                        <span>Big</span>
                      </div>
                    </div>

                    <hr/>

                    <div className="col-12">
                      Final Price: 100
                    </div>
                  </div>
              </Content>
            </div>
          </div>
        </div>
    </Fragment>
  );
}


export default FinishOrder;
