// Función para cargar las citas guardadas en localStorage
window.onload = function() {
    // Obtener las citas del localStorage (si existen)
    const citas = JSON.parse(localStorage.getItem('citas')) || [];

    // Referencia a la tabla donde se mostrarán las citas
    const tablaCitas = document.getElementById('tablaCitas');

    // Si no hay citas, mostrar un mensaje
    if (citas.length === 0) {
        const tr = document.createElement('tr');
        tr.innerHTML = '<td colspan="5" class="text-center">No hay citas reservadas.</td>';
        tablaCitas.appendChild(tr);
    } else {
        // Recorrer las citas y agregarlas a la tabla
        citas.forEach((cita, index) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <th scope="row">${index + 1}</th>
                <td>${cita.nombre}</td>
                <td>${cita.dni}</td>
                <td>${cita.especialidad}</td>
                <td>${new Date(cita.fechaHora).toLocaleString()}</td>
            `;
            tablaCitas.appendChild(tr);
        });
    }
};
