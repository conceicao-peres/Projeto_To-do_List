function adicionarTarefa(){

    var input = document.getElementById('input').value
    var lista = document.getElementById('lista')

    if(input != ''){
        var tarefa = document.createElement('li')
        var checkItem = `<input type="checkbox" id="check-item" name="check-item">`
        var labelItem = `<label for="check-item">${input}</label>` 
        var item = checkItem + labelItem
        tarefa.classList.add("item")

        tarefa.innerHTML = item

        lista.appendChild(tarefa)
    }else{
        alert("Digite uma tarefa para adicionar à lista!")
    }

    input = document.getElementById('input').value = ""
}

function adcionar(){
   adicionarTarefa()
}

