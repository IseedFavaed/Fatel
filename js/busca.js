function princiapal(){
    const cursoList = [
        {curso: "analise e desenvolvimento de sistemas"},
        {curso: "logisitca"},
        {curso: "recursos humanos"}
    ]
    var response = document.getElementById("searchCurso").value;
    var responseView = document.getElementById("searchVetor");

    const meuNovoArray = cursoList.filter((valorAtual) => {
        return valorAtual.curso.includes(response);
    });

    responseView.innerHTML = meuNovoArray.map(item => `<li> ${item.curso} </li>`).join('');
    console.log(meuNovoArray);
    
    if(!responseView.innerHTML)
        responseView.innerHTML = 'Curso não Encontrado!';

}