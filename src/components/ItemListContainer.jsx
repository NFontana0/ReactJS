import React, {useState, useEffect} from "react"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import {promesaProductos} from '../mocks/mockData'


export default function ItemListContainer( ) {

    const { idcategory } = useParams();
    const [loading, setLoading] = useState (true);
    const [productos, setProductos] = useState ([]);
    const [error, setError] = useState ('');

useEffect (() => { 
        
    if(!idcategory){
        //Aca estoy en la home, muestro todo
        
        promesaProductos
            .then((res) => {
                setProductos(res);}
                )
            .catch((err) => {
                setError(err);}
                )
            .finally(() => {
                setLoading(false);}
        ); } 

        else {
            //Aca estoy en una categoria, hay que filtrar
            promesaProductos
            .then((res) => {
                setProductos(res.filter((producto) => producto.idcategory === idcategory));}
                )
            .catch((err) => {
                setError(err);}
                )
            .finally(() => {
                setLoading(false);}
        );
};}, [idcategory]);


return (
    <div className="cardContainer">
        <p>Productos: {loading ? <CircularProgress /> : <ItemList productos={productos}  />}</p>
    </div>
);
}