import React, { useContext } from "react";
import "./PlaceOrder.css";
import { IndianRupee } from "lucide-react";
import { StoreContext } from "../../Context/StoreContext";

function PlaceOrder() {
  const { getTotalCartAmount } = useContext(StoreContext);
  // const gridCols = "grid-cols-[80px_2fr_1fr_1fr_1fr_60px]";
  const cartTotal = getTotalCartAmount();
  return (
    <form action="" className="place-order  flex items-start justify-between gap-[50px]">
      <div className="place-order-left w-full max-w-[max(30%,500px)]">
        <p className="title text-[30px] font-semibold mb-[50px]">Delivery Information</p>
        <div className="multi-field flex gap-[10px]">
          <input type="text" placeholder="First name" className="mb-[15px] w-full p-[10px] border border-[#c5c5c5] rounded outline-[#ff6347]"/>
          <input type="text" placeholder="last name" className="mb-[15px] w-full p-[10px] border border-[#c5c5c5] rounded outline-[#ff6347]"/>
        </div>
        <input type="email" placeholder="Email address" className="mb-[15px] w-full p-[10px] border border-[#c5c5c5] rounded outline-[#ff6347]"/>
        <input type="text" placeholder="Street" className="mb-[15px] w-full p-[10px] border border-[#c5c5c5] rounded outline-[#ff6347]"/>
        <div className="multi-field flex gap-[10px]">
          <input type="text" placeholder="City" className="mb-[15px] w-full p-[10px] border border-[#c5c5c5] rounded outline-[#ff6347]"/>
          <input type="text" placeholder="State" className="mb-[15px] w-full p-[10px] border border-[#c5c5c5] rounded outline-[#ff6347]"/>
        </div>
        <div className="multi-field flex gap-[10px]">
          <input type="text" placeholder="Zip code" className="mb-[15px] w-full p-[10px] border border-[#c5c5c5] rounded outline-[#ff6347]"/>
          <input type="text" placeholder="Country" className="mb-[15px] w-full p-[10px] border border-[#c5c5c5] rounded outline-[#ff6347]"/>
        </div>
        <input type="text" placeholder="Phone" className="mb-[15px] w-full p-[10px] border border-[#c5c5c5] rounded outline-[#ff6347]"/>
      </div>
      <div className="place-order-right w-full max-w-[max(40%,500px)]">
        <div className="cart-total flex-1 flex flex-col gap-5">
          <h2 className="font-semibold text-[30px]">Cart totals</h2>
          <div>
            <div className="cart-total-details flex justify-between text-[#555]">
              <p >Subtotal</p>
              {/* <p>{getTotalCartAmount()}</p> */}
              <p className="text-center flex items-center justify-center">
                <IndianRupee className="w-4 h-4" />
                {getTotalCartAmount()}
              </p>
            </div>
            <hr className="my-[10px]" />
            <div className="cart-total-details flex justify-between text-[#555]">
              <p>Delivery Fee</p>
              <p>{getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr className="my-[10px]" />
            <div className="cart-total-details flex justify-between text-[#555]">
              <b>Total</b>
              {/* <b>{getTotalCartAmount()+2}</b> */}
              {/* <p className="text-center flex items-center justify-center ">
                  <IndianRupee className="w-4 h-4" />
                  {getTotalCartAmount() < 0 ? 0 : getTotalCartAmount()+2}
                </p> */}
              <b className="text-center flex items-center justify-center">
                <IndianRupee className="w-4 h-4" />
                {cartTotal === 0 ? 0 : cartTotal + 2}
              </b>
            </div>
          </div>
          <button className="text-white bg-[#ff6347] w-[max(15vw,200px)] py-3 rounded-[4px] cursor-pointer mt-8">
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;
