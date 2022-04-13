/* /* Ciclo para ingresar número de pedidos
 */


let pedido = prompt("Ingresar un pedido");

while(pedido != "SALIR" ){
    alert("El usuario pidió" + " " + pedido + " " + "órdenes");
    
    pedido = prompt("Ingresar otro pedido o escribe SALIR si así lo desea");
}
