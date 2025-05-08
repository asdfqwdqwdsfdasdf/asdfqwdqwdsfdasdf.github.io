# Clínica de Reservas

Este proyecto es una página web para una clínica de reservas médicas, donde los usuarios pueden ver las especialidades médicas, reservar citas y consultar las citas reservadas. El sistema guarda las citas en el `localStorage` del navegador para simular la persistencia de datos.

## Funcionalidades

- **Página de Inicio (index.html)**: Presentación breve de la clínica con un carrusel de imágenes de las instalaciones.
- **Página de Especialidades (especialidades.html)**: Muestra una lista de servicios médicos (como Cardiología, Pediatría, etc.) con la opción de reservar una cita.
- **Página de Reserva (reserva.html)**: Permite a los usuarios reservar una cita proporcionando su nombre, DNI, especialidad médica y la fecha y hora de la cita. Los datos se validan y se guardan en el `localStorage`.
- **Página de Citas Reservadas (citas.html)**: Muestra una tabla con todas las citas reservadas, que se cargan dinámicamente desde el `localStorage`.

## Estructura del Proyecto



