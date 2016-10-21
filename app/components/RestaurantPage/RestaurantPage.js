import React from "react";
import { render } from "react-dom"
import { Col, Row } from 'react-bootstrap'
import Basket from './Basket'
import ResturantPageHeader from './ResturantPageHeader'
import MenuItem from './MenuItem'

export default class RestaurantPage extends React.Component {
  constructor(props){
    super(props)

  }

  render() {

    let menu = restaurant.menu.map((item) => {
      return <MenuItem {...item} />
    })

    return(
      <div>
        <Col xs={8}>
          <Row>
            <ResturantPageHeader {...restaurant}/>
          </Row>
          <hr/>
          <Row>
            { menu }
          </Row>
        </Col>
        <Basket />
      </div>
    );
  }
}

let restaurant = {
    "_id": "578d2c9e3025c470d31c9568",
    "name": "NOM Burger",
    "phoneNumber": "+36201234567",
    "address": "2000, Szentendre Főtér 1.",
    "deliveryhours": "12:00 - 24:00",
    "logo": "http://cdn.designcrowd.com.s3.amazonaws.com/blog/2016/May/burger-day-2016/20_300.png",
    "menu": [
      {
        "_id": "578d2cea3025c470d31c9569",
        "desc": "100% Beef Burger with Vegetables and two 200g premium quality angus beef.",
        "name": "Hamburger Full",
        "price": 1800,
        "image": "http://kickassfacts.com/wp-content/uploads/2013/11/ArchDeluxeBurger.jpg"
      },
      {
        "_id": "578d2cea3025c470d31c9569",
        "desc": "100% Beef Burger with Vegetables and two 200g premium quality angus beef.",
        "name": "Hamburger Full",
        "price": 1800,
        "image": "http://kickassfacts.com/wp-content/uploads/2013/11/ArchDeluxeBurger.jpg"
      },
      {
        "_id": "578d2cea3025c470d31c9569",
        "desc": "100% Beef Burger with Vegetables and two 200g premium quality angus beef.",
        "name": "Hamburger Full",
        "price": 1800,
        "image": "http://kickassfacts.com/wp-content/uploads/2013/11/ArchDeluxeBurger.jpg"
      }
    ]
  };
