import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenue = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId)

  const info = resInfo?.cards?.find((card) => card?.card?.card?.info)?.card
    ?.card?.info;

  const { name, cuisines, costForTwoMessage } = info || {};

  const menuCards = resInfo?.cards?.find(
    (card) => card?.groupedCard?.cardGroupMap?.REGULAR
  )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const itemCards = menuCards?.find((c) => c?.card?.card?.itemCards)?.card?.card
    ?.itemCards;

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}{" "}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - ₹
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenue;
