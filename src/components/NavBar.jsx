import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

export default function NavBar({carrito}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >   

            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          
            <Link to="/" className="cardNavbar">HOME</Link>
            <Link to="/category/remeras" className="cardNavbar">Remeras</Link>  
            <Link to="/category/pantalones" className="cardNavbar">Pantalones</Link>  
            <Link to="/category/zapatillas" className="cardNavbar">Zapatillas</Link>
            <Link to="/product/remeraadidas" className="cardNavbar">Remera Adidas</Link>

          </Typography>
          <Link to='/cart'>
            <CartWidget />
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
