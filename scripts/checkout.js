import { renderOrderSummary } from "./checkout/orderSummary.js";
import {renderPaymentSummary} from "./checkout/paymentSummary.js"
import '../data/cart-oop.js';
document.addEventListener('DOMContentLoaded', () => {
    renderPaymentSummary(); // or this, if needed
    renderOrderSummary(); // now runs AFTER DOM is loaded

  });