let contadorPedidos = 0;

function agregarPedido() {
    contadorPedidos++;  // Incrementamos el contador de pedidos
    const pedidoId = contadorPedidos;  // Este será el ID del pedido
    
    // Creamos un nuevo elemento HTML para mostrar el pedido
    const pedidoElemento = document.createElement("div");
    pedidoElemento.className = "pedido en-proceso";  // Estado inicial: "En Proceso"
    pedidoElemento.innerHTML = `Pedido #${pedidoId} - <strong>En Proceso</strong>`;
    
    // Agregamos el pedido al contenedor en el HTML
    document.getElementById("pedidos-container").appendChild(pedidoElemento);

    // Simulamos la preparación del pedido llamando a `prepararPedido()`
    prepararPedido(pedidoId).then(() => {
        // Cuando el pedido está listo, actualizamos el estado en la interfaz
        pedidoElemento.classList.remove("en-proceso");
        pedidoElemento.classList.add("completado");
        pedidoElemento.innerHTML = `Pedido #${pedidoId} - <strong>Completado ✅</strong>`;
    });
}


async function prepararPedido(pedidoId) {
    // Generamos un tiempo aleatorio de preparación (entre 3 y 12 segundos)
    const tiempoPreparacion = Math.floor(Math.random() * 9000) + 3000;

    console.log(`⏳ Pedido #${pedidoId} en preparación... Tiempo estimado: ${tiempoPreparacion / 1000} segundos`);

    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`✅ Pedido #${pedidoId} listo.`);
            resolve();
        }, tiempoPreparacion);
    });
}
