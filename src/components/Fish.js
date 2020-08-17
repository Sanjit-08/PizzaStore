import React, { Component } from 'react';
import PropTypes from "prop-types";
import { formatPrice } from '../helpers';

class Fish extends Component{
    static propTypes={
           details:PropTypes.shape({
            image:PropTypes.string,
            name:PropTypes.string,
            desc:PropTypes.string,
            status:PropTypes.string,
            price:PropTypes.number,
        }),
        addtoOrder:PropTypes.func
    };
    handleClick = () =>{
        this.props.addtoOrder(this.props.index);
    }
    render(){
        const {image,name,desc,price,status}=this.props.details;
        const isAvailable=status==="available";
        return(
             <li className="menu-fish">
                <img src={image} alt={name}></img>
                <h3 className="fish-name">
                    {name}
                    <span className="price">{formatPrice(price)}</span>
                </h3>
                <p className="desc">{desc}</p>
                <span className="cart"><button disabled={!isAvailable} onClick={this.handleClick}>{isAvailable ? 'ADD TO CART' : 'SOLD OUT!'}</button></span>
             </li>
        )
    }
}

export default Fish;