import React, {useState, useEffect} from "react"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import {promesaProductos} from '../mocks/mockData'
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase/firebase"

export default function ItemListContainer( ) {

    const [productList, setProductList] = useState ([]);
    const [loading, setLoading] = useState (false);
    const { id, categoriaId } = useParams();

useEffect (() => { 
    setLoading(true)
    const productos = categoriaId ? query(collection(db, "products"), where("category", "==", categoriaId)) :collection(db, "products")
    getDocs(productos)
    .then((result)=>{
        const lista = result.docs.map((product)=> {
            return{
                id:product.id,
                ...product.data()
            }
        })
        setProductList(lista)
    })
    .catch((error)=>console.log(error))
    .finally(()=>setLoading(false))
}, [categoriaId])


return (
    <div className="cardContainer">
        <p>Productos: {loading ? <CircularProgress /> : <ItemList productList={productList}  />}</p>
    </div>
);
}