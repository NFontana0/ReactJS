import React, {useState, useEffect} from "react"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import {promesaProductos} from '../mocks/mockData'

export default function ItemDetailContainer( ) {

    const { idproduct } = useParams();
    const [loading, setLoading] = useState (true);
    const [producto, setProducto] = useState ({});
    const [error, setError] = useState ('');

useEffect (() => { 

    if(!idproduct){
    promesaProductos
    .then((res) => {
        setProducto(res);}
        )
    .catch((err) => {
        setError(err);}
        )
    .finally(() => {
        setLoading(false);}
        );} 

    else {
    //Aca estoy en una categoria, hay que filtrar
    promesaProductos
    .then((res) => {
        setProducto(res.find((producto) => producto.idproduct === idproduct));}
        )
    .catch((err) => {
        setError(err);}
        )
    .finally(() => {
        setLoading(false);}
    );
};}, [idproduct]);
    
return (
    <div className="cardContainer">
        <p>Productos: {loading ? 'Loading...' : <ItemDetail producto={producto}  />}</p>
    </div>
);
}