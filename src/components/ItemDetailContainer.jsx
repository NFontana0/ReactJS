import React, {useState, useEffect} from "react"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import {promesaProductos} from '../mocks/mockData'
import { collection, doc, getDoc} from "firebase/firestore"
import { db } from "../firebase/firebase"

export default function ItemDetailContainer( ) {

    const [productDetail, setProductDetail] = useState ({});
    const [loading, setLoading] = useState (true);
    const { idproduct } = useParams();
    const [error, setError] = useState ('');
    const { id } = useParams();

useEffect (() => { 
    const coleccionProductos = collection(db, "products")

    const referenciaDoc = doc(coleccionProductos, id)

    getDoc(referenciaDoc)
    .then((result)=>{
        setProductDetail ({
            id:result.id,
            ...result.data()
        })
    })
    .catch((error)=> console.log(error))
    .finally(()=> setLoading(false))
}, []);
    
return (
    <div className="cardContainer">
        <p>Productos: {loading ? 'Loading...' : <ItemDetail productDetail={productDetail}  />}</p>
    </div>
);
}