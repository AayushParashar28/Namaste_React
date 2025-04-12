import ResturantCard from "./ResturantCard";

const Body = () => {
  const ListofResturants = [];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            ListofResturants = ListofResturants.filter(
              (res) => res.data.avgRating > 4
            );
          }}
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="res-container">
        {ListofResturants.map((resturant) => {
          <ResturantCard ket={resturant.data.id} resData={resturant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
