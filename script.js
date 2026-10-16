const formulario = document.getElementById('formulario')
const alunosCadastrados = document.querySelector('.container-alunos')

formulario.addEventListener('submit', function(event){
    // IMPORTANTE PARA NÃO RECARREGAR A PAGINA AO ENVIAR FORMULARIO 
    event.preventDefault()

    const dados = new FormData(formulario)

    let nomeAluno = dados.get('nome')
    let idadeAluno = dados.get('idade')
    let cursoAluno = dados.get('curso')
    let fotoAluno = dados.get('foto')
    let Nota = dados.get('nota')

     const valorSelecionado = cursoAluno.value;


    const cardAluno = document.createElement('div')
    cardAluno.classList.add('card-aluno')

    if(Nota >= 6){
        cardAluno.classList.add('fundo-verde')
    } else {
        cardAluno.classList.add('fundo-vermelho')
    }

    const curso = document.createElement('p')
  
    cardAluno.appendChild(curso)

    

    if(cursoAluno === "1"){
        cardAluno.classList.add('opcao1')
    }

    if(cursoAluno === "2"){
        cardAluno.classList.add('opcao2')
    }

    if(cursoAluno === "3"){
        cardAluno.classList.add('opcao3')
    }

    if(cursoAluno === "4"){
        cardAluno.classList.add('opcao4')
    }

    if(cursoAluno === "5"){
        cardAluno.classList.add('opcao5')
    }

    if(cursoAluno === "6"){
        cardAluno.classList.add('opcao6')
    }

    if(cursoAluno === "7"){
        cardAluno.classList.add('opcao7')
    }


    if(cursoAluno === "8"){
        cardAluno.classList.add('opcao8')
    }

    if(cursoAluno === "9"){
        cardAluno.classList.add('opcao9')
    }

    if(cursoAluno === "10"){
        cardAluno.classList.add('opcao10')
    }

    if(cursoAluno === "11"){
        cardAluno.classList.add('opcao11')
    }

    if(cursoAluno === "12"){
        cardAluno.classList.add('opcao12')
    }

    if(cursoAluno === "13"){
        cardAluno.classList.add('opcao13')
    }

    if(cursoAluno === "14"){
        cardAluno.classList.add('opcao14')
    }

    if(cursoAluno === "15"){
        cardAluno.classList.add('opcao15')
    }

    if(cursoAluno === "16"){
        cardAluno.classList.add('opcao16')
    }

    if(cursoAluno === "17"){
        cardAluno.classList.add('opcao17')
    }

    if(cursoAluno === "18"){
        cardAluno.classList.add('opcao18')
    }

    if(cursoAluno === "19"){
        cardAluno.classList.add('opcao19')
    }

    if(cursoAluno === "20"){
        cardAluno.classList.add('opcao20')
    }
    

    const nome = document.createElement('h2')
    nome.textContent = nomeAluno
    cardAluno.appendChild(nome)
    
     nome.classList.add('nomeusuario')

    const idade = document.createElement('p')
    idade.textContent = 'Opnião sobre o livro: ' + idadeAluno 
    cardAluno.appendChild(idade)
    idade.classList.add('opniao')

    

    const nota = document.createElement('p')
    nota.textContent = 'Nota dada ao livro: ' + Nota
    cardAluno.appendChild(nota)
    nota.classList.add('nota')

    const remover = document.createElement('button')
    remover.classList.add('remover')
    remover.textContent = ('remover')

    remover.addEventListener('click', function(){
        cardAluno.remove()
    })

    cardAluno.appendChild(remover)
    alunosCadastrados.appendChild(cardAluno)
    formulario.reset()

})