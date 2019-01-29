import React, { Component } from 'react';
import { storeProducts, detailProduct } from './shopData';


const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct
  }

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = {...item};
      tempProducts = [...tempProducts, singleItem];
    })
    this.setState(() => {
      return {products:tempProducts}
    });
  };


  getItem = (id) => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };


  processDetails = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return {detailProduct:product}
    })
  };

  addItemToCart = (id) => {
    console.log(`hello from add item to the cart. the id is ${id}`);
  };

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state, 
        processDetails:this.processDetails,
        addItemToCart: this.addItemToCart,
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};
