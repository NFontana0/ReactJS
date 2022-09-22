import React, {useState, useEffect} from "react"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";

export default function Item( {product} ) {

    const {id, name, price, stock, img, descripcion} = product;    
    const navegar = useNavigate()
    const bull = (
        <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
        •
        </Box>
);

    const card = (
        <React.Fragment>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Producto: {name}
            </Typography>
            <Typography variant="h5" component="div">
            Descripcion: {descripcion}
            </Typography>
            <Typography variant="body2">
            Precio: ${price}
            </Typography>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Stock: {stock}
            </Typography>
            <div className="d-flex justify-content-center mt-2">
            <Button variant="outlined" size="small" color="secondary"  onClick={()=>navegar(`/product/${id}`)}>
            VER MAS 
            </Button>
        </div>
        </CardContent>
        </React.Fragment>
);

return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card}</Card>
        </Box>
        );

}

