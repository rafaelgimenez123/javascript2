class Alumno {
  constructor(nombre, curso, edad, descripcion) {
    this.nombre = nombre;
    this.curso = curso;
    this.edad = edad;
    this.descripcion = descripcion;
  }
}

const alumnosPrefabricados = [{
  nombre: "Juan Pérez",
  curso: "3er año",
  edad: "20 años",
  descripcion: "Estudiante destacado en matematicas"
},
{
  nombre: "Luca lopez",
  curso: "3er año",
  edad: "23 años",
  descripcion: "Estudiante destacado en sociologia"
},
{
  nombre: "Jimmy donnaldson",
  curso: "3er año",
  edad: "22 años",
  descripcion: "Estudiante destacado en fisica"
},
{
  nombre: "Luca lopez",
  curso: "3er año",
  edad: "19 años",
  descripcion: "Estudiante destacado en Quimica"
}
];

const CrearAlumno = (event) => {
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
};


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

mostrarAlumnos();

