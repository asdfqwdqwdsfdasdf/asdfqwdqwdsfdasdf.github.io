// Función para validar y mostrar la confirmación
document.getElementById('formReserva').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const dni = document.getElementById('dni').value;
    const especialidad = document.getElementById('especialidad').value;
    const fechaHora = document.getElementById('fechaHora').value;

    // Validar que todos los campos estén llenos
    if (nombre === "" || dni === "" || especialidad === "" || fechaHora === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Crear un objeto para la cita
    const cita = {
        nombre: nombre,
        dni: dni,
        especialidad: especialidad,
        fechaHora: fechaHora
    };

    // Obtener las citas existentes en el localStorage
    let citas = JSON.parse(localStorage.getItem('citas')) || [];

    // Agregar la nueva cita al array
    citas.push(cita);

    // Guardar el array de citas actualizado en el localStorage
    localStorage.setItem('citas', JSON.stringify(citas));

    // Mostrar la confirmación
    document.getElementById('confNombre').textContent = nombre;
    document.getElementById('confDni').textContent = dni;
    document.getElementById('confEspecialidad').textContent = especialidad;
    document.getElementById('confFechaHora').textContent = new Date(fechaHora).toLocaleString();

    // Ocultar el formulario y mostrar la confirmación
    document.getElementById('formReserva').style.display = 'none';
    document.getElementById('confirmacion').style.display = 'block';
});
