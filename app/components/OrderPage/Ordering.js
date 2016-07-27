import React from "react";
import { render } from "react-dom"
import { Row, Col, Panel } from 'react-bootstrap'
import RestaurantListItem from './RestaurantListItem'

export default class Ordering extends React.Component {
  constructor(props){
    super(props)

  }

  render() {
    let restaurants = restaurantList.map((item) => {
      return <RestaurantListItem name={item.name} logo={item.logo} deliveryhours={item.deliveryhours} />
    });

    return(
      <div className="container">
        <Col xs={12}>
          <Panel header="Restaurants" id="restaurantsPanel">
            {restaurants}
          </Panel>
        </Col>
      </div>
    );
  }
}

const restaurant = {
                      "_id": "579673d845e34a542d7528ad",
                      "name": "Salamalaikum",
                      "logo": "http://www.ordertakeaways.co.uk/media/images/justeat_logo/gyros-exeter.gif",
                      "deliveryhours": "12:00 - 24:00"
                   };

const restaurantList = [restaurant, restaurant, restaurant];
