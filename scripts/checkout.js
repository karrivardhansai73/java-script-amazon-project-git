import { renderOrderSummary } from "./checkout/orderSummary.js";
import {renderPaymentSummary} from "./checkout/paymentSummary.js"
import { loadFromStroage } from "../data/cart.js";
import { loadProducts } from "../data/products.js";
//import "../data/backend-practice.js";
//import  Car from "../data/car.js"
//import '../data/cart-class.js';
document.addEventListener('DOMContentLoaded', () => {
    loadProducts(()=>{
    renderPaymentSummary(); // or this, if needed
    renderOrderSummary(); // now runs AFTER DOM is loaded
    });
  });