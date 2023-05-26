function princiapal(){
    var cursosList  = ['Análise e Desenvolvimento de Sistemas', 'Lógisitca', 'Recursos Humanos'];
    var response = document.getElementById("searchCurso").value;
    var responseView = document.getElementById("searchVetor");

    console.log(procurar(cursosList, response));
}