import React, {Fragment, useEffect, useState } from 'react';
import queryString from "query-string";

import {Button, Content} from './style';
import IOrder from '../../interfaces/IOrder';
import { CrustTypeEnum } from '../../enums/CrustTypeEnum';



const FinishOrder: React.FC = (props: any) => {

  const [order, setOrder] = useState<IOrder>();
  
  useEffect(() => {

    const { order } = queryString.parse(props.location.search);

    setOrder(JSON.parse(order as string));

    console.log(JSON.parse(order as string));
  }, [])

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
                      <strong>Size:</strong>
                      <span>{order?.size.size} (${order?.size.price})</span>
                    </div>
                    <div className="crust col-12">
                      <div>
                        <strong>Crust:</strong>
                        <span>{order?.crust.type === CrustTypeEnum.Thin ? 'Thin' : 'Thick'} (${order?.crust.price})</span>
                      </div>
                    </div>

                    <div className="crust col-12">
                      <div>
                        <strong>Ingredients:</strong>
                        {order?.ingredients.map(i => (
                          <span>{i.name}, </span>
                        ))}
                      </div>
                    </div>

                    <hr/>

                    <div className="col-12">
                      Final Price: ${order?.total}
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
