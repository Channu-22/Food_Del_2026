import React from "react";
import "./Add.css";
import { assets } from "../../assets/assets";
import { IndianRupee } from "lucide-react";

function Add() {
  // const Rs=`${  <IndianRupee className="w-4 h-4" />}20`
  return (
    <div className="add w-[70%] ml-[max(5vw,25px)] mt-12.5 text-[#6d6d6d] text-[16px]">
      <form className="flex_col  " action="">
        <div className="add-img-upload flex_col">
          <p> upload Image</p>
          <label htmlFor="image">
            <img src={assets.upload_area} className="w-30" alt="" />
          </label>
          <input type="file" id="image" hidden required />
        </div>
        <div className="add-product-name flex_col w-[max(40%,280px)]">
          <p>Product name</p>
          <input type="text" name="name" className="p-[10px]" placeholder="Type here " />
        </div>
        <div className="add-product-description flex_col w-[max(40%,280px)]">
          <p>Product description</p>
          <textarea
            name="description"
            rows="6"
            placeholder="Write content here"
            id=""
            className="p-[10px]"
          ></textarea>
        </div>
        <div className="add-category-price flex gap-[30px]">
          <div className="add-category flex_col">
            <p>Product category</p>
            <select name="category" id="" className="max-w-[120px]">
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price flex_col">
            <p>Product price</p>
            <input type="number" name="price" placeholder="Rs20"  className="max-w-[120px]"/>
          </div>
        </div>
        <button type="submit" className="add-btn max-w-30 border-none p-2.5 bg-black text-white cursor-pointer ">Add</button>
      </form>
    </div>
  );
}

export default Add;
