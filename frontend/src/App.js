import React, { useEffect, useState } from "react";
import "./App.css";

import Auth from "./components/Auth/Auth";

function App() {
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [restaurants, setRestaurants] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3030/api")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then(
  //       (result) => {
  //         setIsLoaded(true);
  //         if (result.restaurants) {
  //           setRestaurants(result.restaurants);
  //         } else {
  //           setError("No restaurants available");
  //         }
  //       },
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     );
  // });

  // let index;

  // if (error) {
  //   index = <div>Error: {error.message}</div>;
  // } else if (!isLoaded) {
  //   index = <div>Loading...</div>;
  // } else {
  //   index = restaurants.map((restaurant) => {
  //     return (
  //       <Card
  //         name={restaurant.name}
  //         type={restaurant.type}
  //         description={restaurant.description}
  //         imageUrl={restaurant.imageUrl}
  //       />
  //     );
  //   });
  // }

  return (
    <div className="App">
      <Auth
        url="http://localhost:3030/users/add-user"
        type="signup"
        method="POST"
      />
    </div>
  );
}

export default App;
