// Lista para almacenar los nombres de los amigos
let amigos = [];

/**
 * Función para agregar un nuevo amigo a la lista.
 * Se conecta con el input id="amigo" y el botón onclick="agregarAmigo()".
 */
function agregarAmigo() {
    // Obtener el elemento del campo de texto
    let amigoInput = document.getElementById('amigo');

    // Validar si el campo de texto no está vacío
    if (amigoInput.value == '') {
        alert('Por favor, ingresa un nombre válido.');
        return; // Detiene la ejecución de la función si el campo está vacío
    }

    // Convertimos a minúsculas para una comparación insensible a mayúsculas/minúsculas
    const nuevoAmigoLower = amigoInput.value.toLowerCase();

    // Usamos el método `some` para verificar si el nombre ya existe
    if (amigos.some(amigo => amigo.toLowerCase() === nuevoAmigoLower)) {
        alert('Este nombre ya ha sido agregado. Por favor, ingresa un nombre diferente.');
        amigoInput.value = ''; // Limpiamos el campo de texto
        return;
    }

    // Si el nombre es válido y no existe, lo agregamos a la lista (array)
    amigos.push(amigoInput.value);

    // Actualizamos la visualización de la lista en la página
    actualizarListaAmigos();

    // Limpiamos el campo de texto para el próximo nombre
    amigoInput.value = '';
}

/**
 * Función para actualizar la lista de amigos en el HTML.
 */
function actualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiamos la lista para reconstruirla

    // Recorremos el array de amigos y creamos un <li> por cada uno
    for (let i = 0; i < amigos.length; i++) {
        // Creamos un elemento de lista
        let listItem = document.createElement('li');
        // Le asignamos el nombre del amigo
        listItem.textContent = amigos[i];
        // Lo añadimos a la lista en el HTML
        listaAmigos.appendChild(listItem);
    }
}

/**
 * Función para realizar el sorteo del amigo secreto.
 * Se conecta con el botón onclick="sortearAmigo()".
 */
function sortearAmigo() {
    // Condicional para verificar si hay suficientes personas para el sorteo
    if (amigos.length < 2) {
        alert('Agrega al menos 2 amigos para poder realizar el sorteo.');
        return; // Detiene la función si no hay suficientes amigos
    }

    // Generar un número aleatorio que servirá como índice para la lista
    let indiceSorteado = Math.floor(Math.random() * amigos.length);

    // Variable para almacenar el nombre del amigo secreto
    let amigoSecreto = amigos[indiceSorteado];

    // Mostrar el resultado del sorteo en la página, usando el id="resultado"
    let resultadoLista = document.getElementById('resultado');
    // Limpiamos resultados anteriores
    resultadoLista.innerHTML = '';

    // Creamos un nuevo elemento de lista para el resultado
    const resultadoItem = document.createElement('li');
    resultadoItem.textContent = 'El amigo secreto es: ' + amigoSecreto;

    // Añadimos el resultado a la lista en el HTML
    resultadoLista.appendChild(resultadoItem);
}

/**
 * Función para reiniciar el juego, limpiando la lista y los resultados.
 * (Esta función no está conectada a ningún botón en el HTML proporcionado)
 */
function reiniciar() {
    // Limpiamos la lista de amigos
    amigos = [];
    // Limpiamos la visualización en la página
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('amigo').value = '';
}