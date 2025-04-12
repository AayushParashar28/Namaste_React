const ResturantCard = (props) => {
    const {resName, cuisine} = props;
   return (
    <div className="res-card">
      <img className="res-logo"  alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/sotxv0gury7f7vrfvb2r" />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>4.4 stars</h4>
      <h4>36 minutes</h4>
    </div>
   )
  }

export default ResturantCard;