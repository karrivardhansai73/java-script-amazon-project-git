import { renderOrderSummary } from "./checkout/orderSummary.js";
import {renderPaymentSummary} from "./checkout/paymentSummary.js"
import { loadFromStroage } from "../data/cart.js";
import { loadProducts ,loadproductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
//import "../data/backend-practice.js";
//import  Car from "../data/car.js"
//import '../data/cart-class.js';




 Promise.all([
   loadproductsFetch(),
new Promise((resolve)=>{

  loadCart(()=>{
    resolve();
  });
})
]).then(()=>{

    renderPaymentSummary(); 
    renderOrderSummary();
})
/*new Promise((resolve)=>{

loadProducts(()=>{
  resolve();
});

}).then(()=>{
 return new Promise((resolve)=>{

  loadCart(()=>{
    resolve();
  });

 }).then(()=>{
    renderPaymentSummary(); 
    renderOrderSummary();
  });

}); */
/*document.addEventListener('DOMContentLoaded', () => {
    loadProducts(()=>{
    renderPaymentSummary(); // or this, if needed
    renderOrderSummary(); // now runs AFTER DOM is loaded
    });
  });*/;