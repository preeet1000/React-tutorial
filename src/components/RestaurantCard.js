const RestaurantCard = (props) => (
    <div className="card">
      <img className="card-img" src={props.img} />
      <div className="card-details">
        <h2>{props.name}</h2>
        <h3>* {props.rating} </h3>
        <h4>{props.cuisine.join(",")}</h4>
      </div>
    </div>
  );

  export default RestaurantCard;