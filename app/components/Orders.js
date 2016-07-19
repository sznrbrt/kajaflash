import React from "react";
import { render } from 'react-dom'
import { Col, Row, Panel, Media } from 'react-bootstrap'

export default class Orders extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className="fullWidth">
        <Panel header="Previous orders" id="ordersPanel" className="">
          <Col xs={12} className="fullHeight">
            <div className="centeredPrompt placeholder">
              You haven't ordered anything yet.
            </div>
          </Col>
        </Panel>
      </div>
    );
  }
}

const openOrders =  {
                      "_id": "578d2e44938895b3d3166f53",
                      "createdAt": "Mon Jul 18 2016 12:30:12 GMT-0700 (PDT)",
                      "totalAmount": 1000,
                      "customer": "578d1f381639feb2d01e3e1b",
                      "vendor": "578d2c9e3025c470d31c9568",
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
