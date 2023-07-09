// obtener el valor id desde la URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')
// obtener los estudiantes guardados en el local storage
let students = localStorage.getItem('students')
students = JSON.parse(students)
console.log(students)
let student
let materias

//obtener el input de nombre
let txtName = document.getElementById('txtNombre')
//obtener el input de nombre
let txtEdad = document.getElementById('txtEdad')
//obtener el input de nombre
let txtApellido = document.getElementById('txtApellido')

if (id){
    // buscar el estudiante usando el id que obtuvimos de la URL
    student = students.filter(x => x.id == id)[0]
    txtName.value = student.nombre
    txtEdad.value = student.edad
    txtApellido.value = student.apellidos
    materias = student.materias
}



// obtener todos los input de las notas
// obtener el input de la nota
let txtMath = document.getElementById('notaMatematicas')
// obtener el input de la nota
let txtIdioma = document.getElementById('notaIdioma')
// obtener el input de la nota
let txtCiencias = document.getElementById('notaCiencias')
// obtener el input de la nota
let txtSociales = document.getElementById('notaSociales')
// obtener el input de la nota
let txtIngles = document.getElementById('notaIngles')

// obtener el checkbox
let chkMath = document.getElementById('chkMatematicas')
chkMath.onchange = (e) => {
    // obtener el valor si el checkbox se selecciono o no
    let checked = e.target.checked
    // revisar si se selecciono el checkbox se debe habilitar el input para ingresar la nota
    if (checked) { 
        txtMath.removeAttribute('disabled')
        return
    }
    // se deselecciono el checkbox, hay que borrar el contenido del input y desabilitar el input
    txtMath.value = ''
    txtMath.setAttribute('disabled', true)

}

// obtener el checkbox
let chkIdioma = document.getElementById('chkIdioma')
chkIdioma.onchange = (e) => {
    // obtener el valor si el checkbox se selecciono o no
    let checked = e.target.checked
    // revisar si se selecciono el checkbox se debe habilitar el input para ingresar la nota
    if (checked) { 
        txtIdioma.removeAttribute('disabled')
        return
    }
    // se deselecciono el checkbox, hay que borrar el contenido del input y desabilitar el input
    txtIdioma.value = ''
    txtIdioma.setAttribute('disabled', true)

}

// obtener el checkbox
let chkCiencias = document.getElementById('chkCiencias')
chkCiencias.onchange = (e) => {
    // obtener el valor si el checkbox se selecciono o no
    let checked = e.target.checked
    // revisar si se selecciono el checkbox se debe habilitar el input para ingresar la nota
    if (checked) { 
        txtCiencias.removeAttribute('disabled')
        return
    }
    // se deselecciono el checkbox, hay que borrar el contenido del input y desabilitar el input
    txtCiencias.value = ''
    txtCiencias.setAttribute('disabled', true)

}

// obtener el checkbox
let chkSociales = document.getElementById('chkSociales')
chkSociales.onchange = (e) => {
    // obtener el valor si el checkbox se selecciono o no
    let checked = e.target.checked
    // revisar si se selecciono el checkbox se debe habilitar el input para ingresar la nota
    if (checked) { 
        txtSociales.removeAttribute('disabled')
        return
    }
    // se deselecciono el checkbox, hay que borrar el contenido del input y desabilitar el input
    txtSociales.value = ''
    txtSociales.setAttribute('disabled', true)

}

// obtener el checkbox
let chkIngles = document.getElementById('chkIngles')
chkIngles.onchange = (e) => {
    // obtener el valor si el checkbox se selecciono o no
    let checked = e.target.checked
    // revisar si se selecciono el checkbox se debe habilitar el input para ingresar la nota
    if (checked) { 
        txtIngles.removeAttribute('disabled')
        return
    }
    // se deselecciono el checkbox, hay que borrar el contenido del input y desabilitar el input
    txtIngles.value = ''
    txtIngles.setAttribute('disabled', true)

}


if (!materias) {
    materias = []
}
else{
    materias.forEach(x => {
        if(x.id == 1){
            chkMath.checked = true
            txtMath.value = x.nota
            txtMath.removeAttribute('disabled')
        }
        if(x.id == 2){
            chkIdioma.checked = true
            txtIdioma.value = x.nota
            txtIdioma.removeAttribute('disabled')
        }
        if(x.id == 3){
            chkCiencias.checked = true
            txtCiencias.value = x.nota
            txtCiencias.removeAttribute('disabled')
        }
        if(x.id == 4){
            chkSociales.checked = true
            txtSociales.value = x.nota
            txtSociales.removeAttribute('disabled')
        }
        if(x.id == 5){
            chkIngles.checked = true
            txtIngles.value = x.nota
            txtIngles.removeAttribute('disabled')
        }
    })
}


let btnSave = document.getElementById('btnSave')
btnSave.onclick = () => {
    let name = txtName.value
    let apellido = txtApellido.value
    let edad = txtEdad.value
    if(id){
        materias = []
        student.nombre = name
        student.apellidos = apellido
        student.edad = edad
    }
    else {
        let newId = students.length + 1
        student =  new Student(newId, name, apellido, edad)
    }

    let hasMath = chkMath.checked
    if(hasMath) {
        let score = txtMath.value
        let subject = new Materia(1, "Matematicas", score)
        materias.push(subject)
    }
    let hasIdioma = chkIdioma.checked
    if(hasIdioma) {
        let score = txtIdioma.value
        let subject = new Materia(2, "Idioma Español", score)
        materias.push(subject)
    }
    let hasCiencias = chkCiencias.checked
    if(hasCiencias) {
        let score = txtCiencias.value
        let subject = new Materia(3, "Ciencias Naturales", score)
        materias.push(subject)
    }
    let hasSociales = chkSociales.checked
    if(hasSociales) {
        let score = txtSociales.value
        let subject = new Materia(4, "Estudio Sociales", score)
        materias.push(subject)
    }
    let hasIngles = chkIngles.checked
    if(hasIngles) {
        let score = txtIngles.value
        let subject = new Materia(5, "Ingles", score)
        materias.push(subject)
    }

    student.materias = materias
    
    let newStudents = students.filter(x => x.id != id)
    newStudents.push(student)
    localStorage.setItem('students', JSON.stringify(newStudents))
    console.log(newStudents)
}