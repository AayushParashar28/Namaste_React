import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState, useEffect } from "react";

const RestaurantMenue = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const dummy = "Dummy Data"

  const infoCard = resInfo?.cards?.find((card) => card?.card?.card?.info);
  const info = infoCard?.card?.card?.info || {};

  const { name, cuisines = [], costForTwoMessage } = info;

  const regularCards =
    resInfo?.cards?.find((card) => card?.groupedCard?.cardGroupMap?.REGULAR)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  console.log(regularCards);

  const menuCards = regularCards.filter(
    (c) =>
      c?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  // Accordion index management
  const [showIndex, setShowIndex] = useState(null);

  return !resInfo ? (
    <Shimmer />
  ) : (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      {/* Render categories */}
      {menuCards.map((category, index) => (
         <RestaurantCategory
         key={category?.card?.card.title}
         data={category?.card?.card}
         showItems={index === showIndex ? true : false}
         setShowIndex={() => setShowIndex(index)}
         dummy={dummy}
       />
      ))}
    </div>
  );
};

export default RestaurantMenue;
