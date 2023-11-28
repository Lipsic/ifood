import React from "react";
import { useLoaderData } from "react-router";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from "react-router-dom";
import Cardapio from "./Cardapio";


function Restaurante() {
  const  {restaurant}  = useLoaderData();


  return (
    <div style={{marginBottom: '150px'}}>
      <div style={{backgroundColor: "#ea1d2c", minWidth:'100%', minHeight: '5rem', position: 'relative', left: '0', alignContent: 'center', display: 'grid'}}>
        <Link to='/'>
        <ArrowBackIosIcon style={{margin: 'auto 0', marginLeft: '40px'}}/>
        </Link>
      </div>
    <div style={{display: 'grid', justifyContent: 'center', flexDirection: 'column', justifyItems: 'center', minHeight: '700px', width: '100%', marginBottom: '2rem'}}>
      <div style={{maxHeight: '700px', maxWidth: '700px'}}>
        <img src={`https://restaurant-api.dicoding.dev/images/large/${restaurant.pictureId}`} alt={restaurant.name} style={{width: '100%', height: 'auto', margin: '0 auto'}}/>
      </div>
      <h1>{restaurant.name}</h1>
      <hr />
      <h2>Menus</h2>
      {restaurant && <Cardapio menus={restaurant?.menus}/>}
    </div>
        </div>
  );
}

export const loader = async ({ params }) => {
  if(params?.id === undefined) return;
  const res = await fetch(
    `https://restaurant-api.dicoding.dev/detail/${params.id}`,
    {
      method: "GET",
      headers: {
       "Content-Type": "application/json"
      }
    }
  );
  const restaurantDetails = await res.json();
 if(restaurantDetails.message === 'success'){
   return restaurantDetails;
  }
};


export default Restaurante;
