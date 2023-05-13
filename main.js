const alumno_nombre = document.getElementById("alumno_nombre")
const alumno_curso = document.getElementById("alumno_curso")
const alumno_edad = document.getElementById("alumno_edad")
const alumno_descripcion = document.getElementById("alumno_descripcion")
const contenedor_alumno = document.getElementById("contenedor_alumnos")



class Alumno{
    constructor(nombre,curso,edad,descripcion){
        this.nombre = nombre
        this.curso = curso
        this.edad = edad
        this.descripcion = descripcion
    }

}

const CrearAlumno = () =>{
    localStorage.setItem("alumnos", JSON.stringify(alumnos));
    event.preventDefault();
    const nuevoAlumno = new Alumno (alumno_nombre.value , alumno_curso.value , alumno_edad.value , alumno_descripcion.value)
    const Alumno_element = document.createElement("div");
    Alumno_element.classList.add("card");
    Alumno_element.innerHTML = `
    <div class="container_card">
    <ul>
      <li>Nombre alumno:${nuevoAlumno.nombre}</li>
      <li>Edad alumno:${nuevoAlumno.edad}</li>
      <li>Curso alumno:${nuevoAlumno.curso}</li>
      <li>Descripcion alumno${nuevoAlumno.descripcion}:</li>
    </ul>
  </div>


    `
    contenedor_alumno.appendChild(Alumno_element);

}

const form = document.getElementById("submit_button_form")
form.addEventListener("submit",CrearAlumno)
