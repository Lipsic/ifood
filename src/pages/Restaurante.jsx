import React from "react";
import { useParams, useLoaderData } from "react-router";

function Restaurante() {
  const { id } = useParams();
  const { restaurant } = useLoaderData();
  console.log("details", restaurant);
  return (
    <div>
      <h1>Restaurante</h1>
      <h2>Post ID:{id} </h2>
    </div>
  );
}

export const loader = async ({ params }) => {
  const res = await fetch(
    `https://restaurant-api.dicoding.dev/detail/${params.id}`,
    {
      method: "GET",
    }
  );
  const restaurantDetails = await res.json();
  return restaurantDetails;
};

export default Restaurante;
