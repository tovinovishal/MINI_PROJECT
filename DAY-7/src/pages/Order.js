import React from "react";
import './order.css';
import { Link } from "react-router-dom";
function Orders(){
return(
  <div className="Main">
<div class="w">
    <div class="contain">
        <form action="">
            <h1>
                <i class="fas fa-shipping-fast"></i>
                Shipping Details
            </h1>
            <div class="name">
                <div>
                    <label for="f-name">First</label>
                    <input type="text" name="f-name"/>
                </div>
                <div>
                    <label for="l-name">Last</label>
                    <input type="text" name="l-name"/>
                </div>
            </div>
            <div class="street">
                <label for="name">Street</label>
                <input type="text" name="address"/>
            </div>
            <div class="address-info">
                <div>
                    <label for="city">City</label>
                    <input type="text" name="city"/>
                </div>
                <div>
                    <label for="state">State</label>
                    <input type="text" name="state"/>
                </div>
                <div>
                    <label for="zip">Zip</label>
                    <input type="text" name="zip"/>
                </div>
            </div>
            <h1>
                <i class="far fa-credit-card"></i> Order Details
            </h1>
            <div class="cc-num">
                <label for="card-num">Quantity</label>
                <input type="text" name="card-num"/>
            </div>
            <div class="btns">
                <Link to='/shop'>
                <button>Purchase</button>
                <button >Back to cart</button>
                </Link>
            </div>
        </form>
    </div>
</div>
    </div>

);

}
export default Orders;