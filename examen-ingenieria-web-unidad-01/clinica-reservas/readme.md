 
# Clínica de Reservas

Este proyecto es una página web para una clínica de reservas médicas. Los usuarios pueden:

1. Ver las especialidades médicas disponibles.
2. Realizar una reserva de cita médica.
3. Consultar las citas reservadas.

### Funcionalidades

- **Inicio**: Presentación de la clínica con un carrusel de imágenes.
- **Especialidades**: Lista de especialidades médicas con opción para reservar una cita.
- **Reserva**: Formulario para ingresar datos y reservar cita médica. Las citas se guardan en el `localStorage`.
- **Citas Reservadas**: Muestra una tabla con las citas reservadas desde el `localStorage`.

### Estructura del Proyecto

```

/clinica-reservas
│
├── index.html             # Página de inicio
├── especialidades.html    # Página de especialidades médicas
├── reserva.html           # Página para realizar la reserva de citas
├── citas.html             # Página para ver las citas reservadas
│
├── css
│   └── estilos.css        # Estilos personalizados
│
├── js
│   └── citas.js           # Cargar citas reservadas desde localStorage
│   └── reserva.js         # Lógica para guardar las reservas
│
└── img
└── fotos-clinica      # Imágenes del sitio

````

### Tecnologías

- **HTML5**, **CSS3**, **JavaScript** y **Bootstrap 5**.

### Uso

1. Clona el repositorio:

```bash
   git clone https://github.com/tu-usuario/clinica-reservas.git
````

2. Abre los archivos `.html` en tu navegador para probar las funcionalidades.

### Licencia

Este proyecto está bajo la licencia **MIT**.

 