import React from 'react'

export default function CartItem({item, value}) {
  const{id, title, img, price, total, count} = item;
  const {cartIncrement, cartDecrement, removeItem} = value;

  return (
    <div className="row my-2 text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img src={img} style={{ width: "6rem", height: "6rem" }} className="img-fluid" alt="product" />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Product : </span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Price : </span>${price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span className="btn btnPurple mx-1" onClick={() => cartDecrement(id)}>
              &#45;
            </span>
            <span className="btn btnPurple mx-1">{count}</span>
            <span className="btn btnPurple mx-1" onClick={() => cartIncrement(id)}>
              &#43;
            </span>
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div className="cartIcon" onClick={() => removeItem(id)}>
          <div className="fas fa-trash"></div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong>ITEM TOTAL : $ {total}</strong>
      </div>
    </div>
  );
}
