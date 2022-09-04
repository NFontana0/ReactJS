import React, {useState, useEffect} from "react"
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer( ) {

    const [loading, setLoading] = useState (true);
    const [producto, setProducto] = useState ([]);
    const [error, setError] = useState ('');

useEffect (() => { 
    let promesaProducto = new Promise( (res, rej) => {
    setTimeout (() => {
        res([
            { cod:1, name: 'Remera Adidas', price: 12500, img: <img src= 'https://essential.vtexassets.com/arquivos/ids/417466-800-auto?v=637538500908470000&width=800&height=auto&aspect=true"" ' alt="" /> },
        ]);
    }, 2000);
});

promesaProducto
    .then((res) => {
        setProducto(res);}
        )
    .catch((err) => {
        setError(err);}
        )
    .finally(() => {
        setLoading(false);}
        );
    })
    
return (
    <div>
        <p>Loading: {loading ? 'Loading...' : 'Fin de carga'}</p>
        <p>Error: {error ? error : null}</p>
        <ItemDetail producto={producto}  />

    </div>
);
}