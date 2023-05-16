



function showAllCursos(){
    document.querySelector('.CursosContainerAll').style.display='block';
    document.querySelector('.CursosContainerTI').style.display='none';
    document.querySelector('.CursosContainerRH').style.display='none';
    document.querySelector('.CursosContainerLogis').style.display='none';
}
function showTICursos(){
    document.querySelector('.CursosContainerAll').style.display='none';
    document.querySelector('.CursosContainerTI').style.display='block';
    document.querySelector('.CursosContainerRH').style.display='none';
    document.querySelector('.CursosContainerLogis').style.display='none';
}
function showRHCursos(){
    document.querySelector('.CursosContainerAll').style.display='none';
    document.querySelector('.CursosContainerTI').style.display='none';
    document.querySelector('.CursosContainerRH').style.display='block';
    document.querySelector('.CursosContainerLogis').style.display='none';
}
function showLogisCursos(){
    document.querySelector('.CursosContainerAll').style.display='none';
    document.querySelector('.CursosContainerTI').style.display='none';
    document.querySelector('.CursosContainerRH').style.display='none';
    document.querySelector('.CursosContainerLogis').style.display='block';
}