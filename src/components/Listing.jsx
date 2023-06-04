import React from 'react'
import propTypes from "prop-types"

function checkTitleLength(element) {
    if (element.length > 50){
        return `${element.slice(0, 50)} ...`;
    } else {
        return element
    }
};

function checkCurrency(element) {
  if(element.currency_code) {
    switch (element.currency_code) {
      case "USD":
        return `$ ${element.price}`;
      case "EUR":
        return `€ ${element.price}`;
      default:
        return `${element.price} ${element.currency_code}`
    };
  };
};


function checkQuantity(element) {
  if(element.quantity){
    switch(true){
      case(element.quantity <= 10):
        return "item-quantity level-low"
      case(element.quantity <= 20):
        return "item-quantity level-medium"
      case(element.quantity > 20):
        return "item-quantity level-high"
    }
  }
}


export default function Listing(props) {
    let {data} = props;
    let rend = data.map((el)=>{
      return(
        (el.state === 'active') && 
      <div class="item" key={el.listing_id}>
        <div class="item-image">
          <a href={el.url}>
            <img src={el.MainImage.url_570xN} alt={el.title}></img>
          </a>
        </div>
        <div class="item-details">
          <p class="item-title">{checkTitleLength(el.title)}</p>
          <p class="item-price">{checkCurrency(el)}</p>
          <p class={checkQuantity(el)} > {el.quantity} left</p>
        </div>
      </div>
      )
    })

  return (
    <div>
      <div class="item-list">
        {rend}
      </div>
    </div>
  )
}

Listing.propTypes ={
  data: propTypes.array.isRequired
}

Listing.defaultProps = {
    case: [],
}
  