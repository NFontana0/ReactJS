import React, {useState, useEffect} from "react"
import ItemList from "./ItemList";

export default function ItemListContainer( ) {

    const [loading, setLoading] = useState (true);
    const [productos, setProductos] = useState ([]);
    const [error, setError] = useState ('');

useEffect (() => { 
    let promesaProductos = new Promise( (res, rej) => {
    setTimeout (() => {
        res([
            { cod:1, name: 'Remera', price: 3500 },
            { cod:2, name: 'Cinturon', price: 1700 },
            { cod:3, name: 'Pantalon', price: 8000 },
            { cod:4, name: 'Medias', price: 750 },
            { cod:5, name: 'Zapatillas', price: 15000 },
        ]);
    }, 2000);
});

promesaProductos
    .then((res) => {
        setProductos(res);}
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
        <ItemList productos={productos}  />

    </div>
);
}