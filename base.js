
/*let estudiante1 = new Student(1, "Oscar", "Muñoz", 27)
let estudiante2 = new Student(2, "Carlos", "Reyes", 22)
let estudiante3 = new Student(3, "Enrique", "Lima", 20)

let estudiantes = [estudiante1, estudiante2, estudiante3]
localStorage.setItem("students", JSON.stringify(estudiantes))*/
let estudiantes = localStorage.getItem('students')
estudiantes = JSON.parse(estudiantes)

let tablaEstudiates = document.getElementById("tablaEstudiantes")


let fillStudentTable = (estudiantes) => {

    for(var i = tablaEstudiates.rows.length - 1; i > 0; i--)
    {
        tablaEstudiates.deleteRow(i);
    }

    estudiantes.forEach(x => {
        let fila = tablaEstudiates.insertRow()
        let nombreColumna = fila.insertCell(0)
        let apellidoColumna = fila.insertCell(1)
        let edadColumna = fila.insertCell(2)
        let updateButtonColumna = fila.insertCell(3)
        let deleteButtonColumna = fila.insertCell(4)
    
        let nombreText = document.createTextNode(x.nombre)
        nombreColumna.appendChild(nombreText)
    
        let apellidoText = document.createTextNode(x.apellidos)
        apellidoColumna.appendChild(apellidoText)
    
        let edadText = document.createTextNode(x.edad)
        edadColumna.appendChild(edadText)
    
        // crear un button
        let updateButton = document.createElement("button")
        // agregarle una clase de bootstrap
        updateButton.className = 'btn btn-info'
        // agrega el id al button
        updateButton.id= 'btnUpdate_'+x.id
        // agrega el texto 
        updateButton.innerText = 'Actualizar'
        updateButton.onclick = () => {
            window.location = "http://127.0.0.1:5500/student.html?id="+x.id
        }
        // inserta el boton en la columna
        updateButtonColumna.appendChild(updateButton)
    
        // crear un button
        let deleteButton = document.createElement("button")
        //
        deleteButton.setAttribute('studentId', x.id)
        // agregarle una clase de bootstrap
        deleteButton.className = 'btn btn-danger'
        // agrega el id al button
        deleteButton.id= 'btnDelete_'+x.id
        // agrega el texto 
        deleteButton.innerText = 'Borrar'
        // Agregar evento para eliminar
        deleteButton.onclick = e => {
            console.log('delete')
            let button = e.target
            let buttonId = button.getAttribute('studentId')
            console.log(buttonId)
            let newStudents = estudiantes.filter(x => x.id != buttonId)
            localStorage.setItem('students', JSON.stringify(newStudents))
            students = newStudents
            fillStudentTable(newStudents)
        }
        // inserta el boton en la columna
        deleteButtonColumna.appendChild(deleteButton)
    })
}

fillStudentTable(estudiantes)

/*let grupo1 = new Grupos(1, "matematicas1") 
let grupos =[grupo1]
localStorage.setItem("groups", JSON.stringify(grupos))*/
let grupos = localStorage.getItem('groups')
grupos = JSON.parse(grupos)

let tablaGrupos = document.getElementById("tablaGrupos")

let fillTableGroup = (grupos) => {

    for(var i = tablaGrupos.rows.length - 1; i > 0; i--)
    {
        tablaGrupos.deleteRow(i);
    }

    grupos.forEach(x => {
        let fila = tablaGrupos.insertRow()
        let nombreColumna = fila.insertCell(0)
        let updateButtonColumna = fila.insertCell(1)
        let deleteButtonColumna = fila.insertCell(2)
    
        let nombreText = document.createTextNode(x.nombre)
        nombreColumna.appendChild(nombreText)
    
        // crear un button
        let updateButton = document.createElement("button")
        // agregarle una clase de bootstrap
        updateButton.className = 'btn btn-info'
        // agrega el id al button
        updateButton.id= 'btnUpdate_'+x.id
        // agrega el texto 
        updateButton.innerText = 'Actualizar'
        
        updateButton.onclick = () => {
            window.location = "http://127.0.0.1:5500/group.html?id="+x.id
        }
    
        // inserta el boton en la columna
        updateButtonColumna.appendChild(updateButton)
    
        // crear un button
        let deleteButton = document.createElement("button")
        //
        deleteButton.setAttribute('groupId', x.id)
        // agregarle una clase de bootstrap
        deleteButton.className = 'btn btn-danger'
        // agrega el id al button
        deleteButton.id= 'btnDelete_'+x.id
        // agrega el texto 
        deleteButton.innerText = 'Borrar'
        // Agregar evento para eliminar
        deleteButton.onclick = e => {
            console.log('delete')
            let button = e.target
            let buttonId = button.getAttribute('groupId')
            console.log(buttonId)
            let newGroups = grupos.filter(x => x.id != buttonId)
            localStorage.setItem('groups', JSON.stringify(newGroups))
            fillTableGroup(newGroups)
        }
        // inserta el boton en la columna
        deleteButtonColumna.appendChild(deleteButton)
     
    })
}

fillTableGroup(grupos)


// obtener el boton agregar estudiante
let btnAgregarEstudiente = document.getElementById("btnAgregarEstudiante")
btnAgregarEstudiente.onclick = () => {
    window.location = "http://127.0.0.1:5500/student.html"
}

// obtener el boton agregar estudiante
let btnAgregarGrupo = document.getElementById("btnAgregarGrupo")
btnAgregarGrupo.onclick = () => {
    window.location = "http://127.0.0.1:5500/group.html"
}