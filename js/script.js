let nombreProductoA = 'Guantes'
let precioProductoA = 100
let stockProductoA = 10

let nombreProductoB = 'Botas'
let precioProductoB = 10
let stockProductoB = 20

let nombreProductoC = 'Cascos'
let precioProductoC = 20
let stockProductoC = 50

let nombreProductoD = 'Accesorios'
let precioProductoD = 50
let stockProductoD = 100

let precioTotal = 0

alert("Estos son nuestros productos: \n - Guantes\n - Botas\n - Cascos\n - Accesorios")

function calculoprecio(cantidad, precio){
    precioTotal += (cantidad * precio)
}

function calculostock(cantidad, stock, precio){
    if(cantidad <= stock){
        calculoprecio(cantidad, precio)
    }
    else{
        alert("Actualmente tenemos " + stock + " unidades de este producto")
    }
}

let cantidadCompra = parseInt(prompt("Que cantidad de productos distintos quiere comprar:"))

for(let i = 0; i < cantidadCompra; i = i + 1){

    let productoCompra = prompt("Ingrese que producto quiere comprar: \n - Guantes\n - Botas\n - Cascos\n - Accesorios")
    
    if(productoCompra.toUpperCase() == 'GUANTES'){
        let cantidadProductoGuantes = prompt("ingrese que cantidad de " + nombreProductoA + " desea comprar:")
        calculostock(cantidadProductoGuantes, stockProductoA, precioProductoA)
    }
    else if(productoCompra.toUpperCase() == 'BOTAS'){
        let cantidadProductoBotas = prompt("ingrese que cantidad de " + nombreProductoB + " desea comprar:")
        calculostock(cantidadProductoBotas, stockProductoB, precioProductoB)
    }
    else if(productoCompra.toUpperCase() == 'CASCOS'){
        let cantidadProductoCascos = prompt("ingrese que cantidad de " + nombreProductoC + " desea comprar:")
        calculostock(cantidadProductoCascos, stockProductoC, precioProductoC)
    }
    else if(productoCompra.toUpperCase() == 'ACCESORIOS'){
        let cantidadProductoAccesorios = prompt("ingrese que cantidad de " + nombreProductoD + " desea comprar:")
        calculostock(cantidadProductoAccesorios, stockProductoC, precioProductoC)
    }
    else{
        alert("No tenemos ese producto a la venta")
    }

} 

if(precioTotal != 0){
    alert("El precio total es: " + precioTotal)
}

else {
    alert("Gracias por su visita")
}