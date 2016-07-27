import React from "react";
import { render } from 'react-dom'
import { Col, Row, Panel, ListGroup } from 'react-bootstrap'
import CurrentOrderItem from './CurrentOrderItem'

export default class CurrentOrders extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    let orders = user.openOrders.length ? user.openOrders.map((order) => {
      return <CurrentOrderItem vendorAvatar={order.vendorImg}
                        vendorName={order.vendorName}
                        totalAmount={order.totalAmount}
                        date={order.createdAt}
                        />
                    }) : [];

    return(
      <div className="fullWidth">
        <Panel header="Current orders" id="currentOrderPanel">
          <ListGroup>
            {orders}
          </ListGroup>
          {/*<div className="centeredPrompt">
            You don't have any current order.
          </div>*/}
        </Panel>
      </div>
    );
  }
}

const order =  {
  "_id": "578d2e44938895b3d3166f53",
  "createdAt": "Sun Jul 24 2016 14:30:12 GMT-0700 (PDT)",
  "totalAmount": 1000,
  "customer": "578d1f381639feb2d01e3e1b",
  "vendor": "578d2c9e3025c470d31c9568",
  "vendorName": "Pizza Hut",
  "vendorImg": "http://www.kuchingdirectory.com/home/wp-content/uploads/2015/04/Pizza_Hut1.png",
  "__v": 0,
  "status": {
    "cancelled": false,
    "delivered": false,
    "underDelivery": false,
    "cooked": false,
    "processed": false
  },
  "items": [
    "578d2cea3025c470d31c9569"
  ]
};

const user = { openOrders: [order] };
