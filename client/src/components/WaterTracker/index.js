import React from "react";
import { WaterLayout } from "./styled";

export const WaterTracker = () => {
  return (
    <WaterLayout>
      <img src={require("../../img/water-icon.png")} alt="plant-logo"></img>
      <h1>water</h1>
      <p>you can indicate how much you watered this plant below.</p>
      <form>
        <input type="number" name="quantity" min="1" max="1000" />
        ml
      </form>
    </WaterLayout>
  );
};

export default WaterTracker;
