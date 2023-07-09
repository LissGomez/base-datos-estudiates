// obtener el valor id desde la URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')
let group

let txtName = document.getElementById('txtNombre')
let btnSave = document.getElementById('btnSave')

let groups = localStorage.getItem('groups')
groups = JSON.parse(groups)

if (id){
    // buscar el estudiante usando el id que obtuvimos de la URL
    group = groups.filter(x => x.id == id)[0]
    txtName.value = group.nombre
}

btnSave.onclick = () => {
    
    if(id){
        group.nombre = txtName.value
    }
    else {
        let groupId = groups.length + 1
        group = new Grupos(groupId, txtName.value)
    }
    let newGroups = groups.filter(x => x.id != id)
    console.log(newGroups)
    newGroups.push(group)
    localStorage.setItem('groups', JSON.stringify(newGroups))
}