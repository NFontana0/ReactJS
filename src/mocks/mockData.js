const productosHC = [
    { id: '101', name: 'Remera Adidas', price: 3500, stock: 15, category: 'remeras', idproduct: 'remeraadidas', img: <img src= 'https://essential.vtexassets.com/arquivos/ids/417466-800-auto?v=637538500908470000&width=800&height=auto&aspect=true"" ' alt="" /> },
    { id: '102', name: 'Remera Nike', price: 3800, stock: 7, category: 'remeras', idproduct: 'remeranike' },
    { id: '103', name: 'Remera Reebok', price: 3200, stock: 10, category: 'remeras', idproduct: 'remerareebok' },
    { id: '201', name: 'Pantalon Adidas', price: 10700, stock: 25, category: 'pantalones', idproduct: 'pantalonadidas' },
    { id: '202', name: 'Pantalon Nike', price: 11500, stock: 12, category: 'pantalones', idproduct: 'pantalonnike' },
    { id: '203', name: 'Pantalon Reebok', price: 10400, stock: 23, category: 'pantalones', idproduct: 'pantalonreebok' },
    { id: '301', name: 'Zapatillas Adidas', price: 28000, stock: 18, category: 'zapatillas', idproduct: 'zapatillaadidas' },
    { id: '302', name: 'Zapatillas Nike', price: 36000, stock: 9, category: 'zapatillas', idproduct: 'zapatillanike' },
    { id: '303', name: 'Zapatillas Reebok', price: 22000, stock: 18, category: 'zapatillas', idproduct: 'zapatillareebok' },
]


export const promesaProductos = new Promise( (res, rej) => {
        let condition = true
    setTimeout (() => {
        if(condition){
        res(productosHC)}
        else{
            rej('salio mal')
        }
    }, 1000);
})