import { useEffect, useContext } from "react";
import context from "../context/CardContext";


export function useFavorites() {
  const { infoData,setFavorite} = useContext(context);

    useEffect(()=>{

    const favorited = JSON.parse(localStorage.getItem('favoriteNotices') || '[]');
    const resultado = infoData.filter(info => favorited.some(favor => info.id === favor.id));
    console.log(resultado)
    return setFavorite(resultado)
  
  
     },[])


}