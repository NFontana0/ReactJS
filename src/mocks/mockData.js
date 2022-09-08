const productosHC = [
    { id: '101', name: 'Remera Adidas', price: 3500, stock: 5, idcategory: 'remeras', idproduct: 'remeraadidas', img: <img src= 'https://essential.vtexassets.com/arquivos/ids/417466-800-auto?v=637538500908470000&width=800&height=auto&aspect=true"" ' alt="" /> },
    { id: '102', name: 'Remera Nike', price: 3500, stock: 7, idcategory: 'remeras', idproduct: 'remeranike' },
    { id: '103', name: 'Remera Reebok', price: 3500, stock: 10, idcategory: 'remeras', idproduct: 'remerareebok' },
    { id: '201', name: 'Pantalon Adidas', price: 1700, stock: 5, idcategory: 'pantalones', idproduct: 'pantalonadidas' },
    { id: '202', name: 'Pantalon Nike', price: 1700, stock: 5, idcategory: 'pantalones', idproduct: 'pantalonnike' },
    { id: '203', name: 'Pantalon Reebok', price: 1700, stock: 5, idcategory: 'pantalones', idproduct: 'pantalonreebok' },
    { id: '301', name: 'Zapatillas Adidas', price: 15000, stock: 5, idcategory: 'zapatillas', idproduct: 'zapatillaadidas' },
    { id: '302', name: 'Zapatillas Nike', price: 15000, stock: 5, idcategory: 'zapatillas', idproduct: 'zapatillanike' },
    { id: '303', name: 'Zapatillas Reebok', price: 15000, stock: 5, idcategory: 'zapatillas', idproduct: 'zapatillareebok' },
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