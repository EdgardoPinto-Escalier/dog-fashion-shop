import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../context';

export default class Cart extends Component {
  render() {
    return (
      <section className="mt-4">
        <ProductConsumer>
          {value => {
            const {cart} = value;
            if(cart.length > 0) {
              return (
              <React.Fragment>
                <Title name="YOUR" title="CART" />
                <CartColumns />
              </React.Fragment>
              );
            }
            else{
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
        
      </section>
    );
  }
}