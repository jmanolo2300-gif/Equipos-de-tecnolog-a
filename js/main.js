//Creacion de catalogo de productos tipo json de carrito de compras
const productos=[
//seccion celulares
{
        id:"1",
        titulo:"iPhone 13 128GB 5G Blanco Estrella",
        imagen:"https://www.alkosto.com/medias/194252707432-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxMTUxNHxpbWFnZS93ZWJwfGFHUXlMMmcwWkM4eE5ETXhOak0yT1RjM01qVTNOQzh4T1RReU5USTNNRGMwTXpKZk1EQXhYemMxTUZkNE56VXdTQXxiODU4OTg5MmU2NGZhNDljNjc1ZDM4MWU3NTFmNjMxZjdmY2FiZDhlNTg0MmQ0MTg1MjAwMWRhMTMwMTIwMDE5 ",
        categoria:{
            nombre:"celulares",
            id:"celulares" // esta es la palabra clñave debe ser igual al buttom if de index car que es carrito.html
        },
        precio:2099010
    },
    {
        id:"2",
        titulo:"TECNO Spark 40Pro+ 256GB 4G Negro",
        imagen:"https://www.alkosto.com/medias/4894947096334-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wzNjYxNnxpbWFnZS93ZWJwfGFERXhMMmhrT1M4eE5URTNPVGMwT1RjeU1EQTVOQzgwT0RrME9UUTNNRGsyTXpNMFh6QXdNVjgzTlRCWGVEYzFNRWd8MTMxZjhmMWNiZWQwNWNlZDBiMGZlNjA2Y2M3Yzk4YmI0MDRjZTE1MGIyNGRkZjE2N2MyNTVhOWRmNmUyNzY4Nw",
        categoria:{
            nombre:"celulares",
            id:"celulares" // esta es la palabra clñave debe ser igual al buttom if de index car que es carrito.html
        },
        precio:899900
    },
     {
        id:"3",
        titulo:" REDMI Note 14 Pro 256GB 4G Negro",
        imagen:"https://www.alkosto.com/medias/6941812742143-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxMTAxNnxpbWFnZS93ZWJwfGFHUmlMMmhrWmk4eE5EZzVNREF6Tnpnd05UQTROaTgyT1RReE9ERXlOelF5TVRRelh6QXdNVjgzTlRCWGVEYzFNRWd8NDE0YzkxYmMwMzZmZDE3YmFjYTQ2YjY4NmZlOGU3NWEyYTFkMDVmM2FjMzY2YTBjNjYwZjNkZTdjZjA3YTdhYQ",
        categoria:{
            nombre:"celulares",
            id:"celulares" // esta es la palabra clñave debe ser igual al buttom if de index car que es carrito.html
        },
        precio:999050
    },
     {
        id:"4",
        titulo:" MOTOROLA Edge 60 Fusion 256GB 5G Azul",
        imagen:"https://www.alkosto.com/medias/840023293788-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wzNDk4OHxpbWFnZS93ZWJwfGFEUXpMMmcwWmk4eE5URXdOREExT0RJeU9EYzJOaTg0TkRBd01qTXlPVE0zT0RoZk1EQXhYemMxTUZkNE56VXdTQXxiMTdlY2U3MDYyNmEwMWRhM2RmNWYwYTU1OTE3MTVlOTk0ZmVkYjliODFmM2I4NDVlZDg3ZjkyOGQxYzBiNDgz",
        categoria:{
            nombre:"celulares",
            id:"celulares" // esta es la palabra clñave debe ser igual al buttom if de index car que es carrito.html
        },
        precio:1029050
    },
    //computadores
    {
        id:"5",
        titulo:"  Portátil LENOVO 15.3 Pulgadas IdeaPad Slim 3 Táctil - Intel Core i5 - RAM 24GB - Disco SSD 512GB - Gris ",
        imagen:"https://www.alkosto.com/medias/198155958885-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxNTA4OHxpbWFnZS93ZWJwfGFEUm1MMmcxTUM4eE5UTXpOemN6TlRVNE5UZ3lNaTh4T1RneE5UVTVOVGc0T0RWZk1EQXhYemMxTUZkNE56VXdTQXw5MDA3ZTQ2MzkyZTI2MTI0M2VjNTY4YmY5ZTExOWU0MzkxMTdlNDdmYjVmYzI2NzU0MGNhODgzOGFiNjYxNWIw",
        categoria:{
            nombre:"computadores",
            id:"computadores" // esta es la palabra clñave debe ser igual al buttom if de index car que es carrito.html
        },
        precio:2399070
    },
     {
        id:"6",
        titulo:"  MacBook Air 13 Pulgadas Chip M2 CPU 8 Núcleos GPU 10 Núcleos - RAM 24GB - SSD 512GB - Azul Medianoche ",
        imagen:"https://www.alkosto.com/medias/195950772258-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wyMTgyNHxpbWFnZS93ZWJwfGFETXlMMmcxT1M4eE5UUXhNRGcxTnprMk56WTBOaTh4T1RVNU5UQTNOekl5TlRoZk1EQXhYemMxTUZkNE56VXdTQXxiYmRjMTNlYmZhNmYwYWRhZjA1NmUxOWMzYjZmMGYzNDdlZGUxMzhkNjg2ODI3MzIwNGFhOGZiZWVlOWY5YTQ1",
        categoria:{
            nombre:"computadores",
            id:"computadores" // esta es la palabra clñave debe ser igual al buttom if de index car que es carrito.html
        },
        precio:4799010
    },
     {
        id:"7",
        titulo:" Portátil HP 15 Pulgadas Fd1056la - Intel Core Ultra 5 - RAM 24GB - Disco SSD 512GB - Azul",
        imagen:"//www.alkosto.com/medias/199485983363-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w0NDA1MnxpbWFnZS93ZWJwfGFEUXpMMmc1TUM4eE5UTTBOVE0wTkRZME16RXdNaTh4T1RrME9EVTVPRE16TmpOZk1EQXhYemMxTUZkNE56VXdTQXxiZDFmMjQzODc0OTFhNGEyYzY3ZGNjNzFmMmNlMjg3MjJjYzA5ZTc5ZjFhZTFhYTcwNDg4MDJjNzcxZjhlOTAw",
        categoria:{
            nombre:"computadores",
            id:"computadores" // esta es la palabra clñave debe ser igual al buttom if de index car que es carrito.html
        },
        precio:2399030
    },
     {
        id:"8",
        titulo:" Portátil ASUS Vivobook Go 15.6 Pulgadas E1504FA - AMD Ryzen 5 - RAM 8GB - Disco SSD 512 GB - Negro",
        imagen:"https://www.alkosto.com/medias/4711387322925-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxNjg2MnxpbWFnZS93ZWJwfGFHRXpMMmd3Wmk4eE5UQTBOVFU0TnpZNU56WTVOQzgwTnpFeE16ZzNNekl5T1RJMVh6QXdNVjgzTlRCWGVEYzFNRWd8NjZlMjBhMjJmMTVmN2U1OTgzNGFlYmI1YmU3MGU4NmFlZWEyMDk3ZGY4NjllMDI3NTgzMzk1MjVhNjhhYmUyNw",
        categoria:{
            nombre:"computadores",
            id:"computadores" // esta es la palabra clñave debe ser igual al buttom if de index car que es carrito.html
        },
        precio:1699070
    },
    //Accesorios
 {
        id:"9",
        titulo:"Parlante XIAOMI Bluetooth Sound Party 50W Puerto USB-C Negro",
        imagen:"https://www.alkosto.com/medias/6941948706743-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w0MjM1OHxpbWFnZS93ZWJwfGFHSXdMMmc1T0M4eE5USTNPRE00TmpFeE9EWTROaTgyT1RReE9UUTROekEyTnpRelh6QXdNVjgzTlRCWGVEYzFNRWd8ZDZiZWQxMTYyYmViNmUzZTdmZmNkMTU0MWI1NmZlOWI1ZGYyMjkwMTc3NTVlNzJlZWJlNjMzZWNjMjVjMzJlMA",
        categoria:{
            nombre:"accesorios",
            id:"accesorios" // esta es la palabra clñave debe ser igual al buttom if de index car que es carrito.html
        },
        precio:399900
    },
     {
        id:"10",
        titulo:"Apple Pencil Pro",
        imagen:"https://www.alkosto.com/medias/195949573040-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxNjI0fGltYWdlL3dlYnB8YURRd0wyaGhOQzh4TlRJME1UQTFNREV5T0RReE5DOHhPVFU1TkRrMU56TXdOREJmTURBeFh6YzFNRmQ0TnpVd1NBfGRmZmM1OGU5NGY3MDNmMGIxMDhmZWZiNzgyNDFjNzIxYTJmZTAzZWFjMGRhMWZmMzhlMGI1ZDdhM2Q3NTdlNTY",
        categoria:{
            nombre:"accesorios",
            id:"accesorios" // esta es la palabra clñave debe ser igual al buttom if de index car que es carrito.html
        },
        precio:769000
    },
    {
        id:"11",
        titulo:"Base KALLEY Brazo Flexible para televisores 23 a 55",
        imagen:"https://www.alkosto.com/medias/7705946171083-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxNzAxOHxpbWFnZS93ZWJwfGFHWm1MMmhqWlM4eE5EZzJOek16TkRVeU9UQTFOQzgzTnpBMU9UUTJNVGN4TURnelh6QXdNVjgzTlRCWGVEYzFNRWd8OWY0OTVlNjY4NDNlOTU4NWVjZjQzOTc3YTI4ZWMzODIwYTU2MDI5MTdmODkxM2YzOGY4MjFlNTE4NWM3YTU1MQ",
        categoria:{
            nombre:"accesorios",
            id:"accesorios" // esta es la palabra clñave debe ser igual al buttom if de index car que es carrito.html
        },
        precio:129900
    },
    {
        id:"12",
        titulo:"Kit x 2 Micrófono VTA Inalámbrico VTA-82327 Negro",
        imagen:"https://www.alkosto.com/medias/7702271823274-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxNzY4MHxpbWFnZS93ZWJwfGFETmpMMmc0TXk4eE5EYzBNRE01TWpVd09UUTNNQzgzTnpBeU1qY3hPREl6TWpjMFh6QXdNVjgzTlRCWGVEYzFNRWd8MGU1ZGVhNzY4ZjI5YmE1Mzk3ODNkODQzNTk2NjM2ZWIwNzEzNjRlOWI1MmVjZjlmOTZjYTcwMGNkYjEzZDQwNw",
        categoria:{
            nombre:"accesorios",
            id:"accesorios" // esta es la palabra clñave debe ser igual al buttom if de index car que es carrito.html
        },
        precio:179900
    }


];
//seccion de codigo js carrito de compras con local storage
const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos(productosElegidos) {


    contenedorProductos.innerHTML = "";


    productosElegidos.forEach(producto => {


        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;


        contenedorProductos.append(div);
    })


    actualizarBotonesAgregar();
}


cargarProductos(productos);


botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {


        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");


        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }


    })
});


function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");


    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}


let productosEnCarrito;


let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");


if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}


function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);


    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }


    actualizarNumerito();


    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}


function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}
