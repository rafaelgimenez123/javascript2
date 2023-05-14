const API_URL = "https://jsonplaceholder.typicode.com/users";

class Alumno {
  constructor(nombre, curso, edad, descripcion) {
    this.nombre = nombre;
    this.curso = curso;
    this.edad = edad;
    this.descripcion = descripcion;
  }
}

const obtenerDatosAPI = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Error al obtener los datos de la API");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const CrearAlumno = async (event) => {
  event.preventDefault();

  const alumno_nombre = document.getElementById("alumno_nombre");
  const alumno_curso = document.getElementById("alumno_curso");
  const alumno_edad = document.getElementById("alumno_edad");
  const alumno_descripcion = document.getElementById("alumno_descripcion");
  const contenedor_alumno = document.getElementById("contenedor_alumnos");

  if (![alumno_nombre, alumno_curso, alumno_edad, alumno_descripcion].every((element) => element.value)) {
    Swal.fire('Ingresa todos los campos para continuar');
    return;
  }

  const datosAPI = await obtenerDatosAPI();
  if (datosAPI) {
    const nuevoAlumno = new Alumno(
      alumno_nombre.value,
      alumno_curso.value,
      alumno_edad.value,
      alumno_descripcion.value
    );

    let listaAlumnos = JSON.parse(localStorage.getItem('alumnos')) || [];
    listaAlumnos.push(nuevoAlumno);
    localStorage.setItem('alumnos', JSON.stringify(listaAlumnos));

    const Alumno_element = document.createElement("div");
    Alumno_element.classList.add("card");
    Alumno_element.innerHTML = `
      <div class="container_card">
        <h3>${nuevoAlumno.nombre}</h3>
        <ul>
          <li>Edad alumno: ${nuevoAlumno.edad}</li>
          <li>Curso alumno: ${nuevoAlumno.curso}</li>
          <li>Descripción alumno: ${nuevoAlumno.descripcion}</li>
        </ul>
      </div>
    `;

    contenedor_alumno.appendChild(Alumno_element);
  } else {
    Swal.fire('Error al obtener los datos de la API');
  }
};

// Obtener los alumnos del Local Storage y mostrarlos en la página
const mostrarAlumnos = () => {
  const contenedor_alumno = document.getElementById("contenedor_alumnos");
  const listaAlumnos = JSON.parse(localStorage.getItem('alumnos')) || [];

  listaAlumnos.forEach((alumno) => {
    const Alumno_element = document.createElement("div");
    Alumno_element.classList.add("card");
    Alumno_element.innerHTML = `
      <div class="container_card">
        <h3>${alumno.nombre}</h3>
        <ul>
          <li>Edad alumno: ${alumno.edad}</li>
          <li>Curso alumno: ${alumno.curso}</li>
          <li>Descripción alumno: ${alumno.descripcion}</li>
        </ul>
      </div>
    `;

    contenedor_alumno.appendChild(Alumno_element);
  });
};

const form = document.getElementById("submit_button_form");
form.addEventListener("submit", CrearAlumno);

// Mostrar los alumnos al cargar la página
mostrarAlumnos();
``
