/*
let cont = 0;

function adicionaImgUnLoad(id, img){
    document.getElementById(`${id}`).src=`${img}`;
}


function alterarImgUp(id, img = []){
    let imgInt = []
    cont ++;
    for(let x = 0; x < img.length; x++){
        imgInt.push(img[x]);
    }
    if(cont > 3)
        cont = 3;
    
    if(cont == 1){
        document.getElementById(`${id}`).src=`${img[0]}`;
    }
    else if(cont == 2)
        document.getElementById(`${id}`).src=`${img[1]}`;
    else if(cont == 3)
        document.getElementById(`${id}`).src=`${img[2]}`;
}
function alterarImgDown(id, img = []){
    let imgInt = []
    cont --;
    for(let x = 0; x < img.length; x++){
        imgInt.push(img[x]);
    }
    if(cont < 1)
        cont = 1;
    if(cont == 1)
        document.getElementById(`${id}`).src=`${img[0]}`;
    else if(cont == 2)
        document.getElementById(`${id}`).src=`${img[1]}`;
    else if(cont == 3)
            document.getElementById(`${id}`).src=`${img[2]}`;
}
*/

function carouselImg1(){
    document.getElementById('imgCarousel').src="./assets/img/fatelLogo.jpg";
    setTimeout("carouselImg2()", 5000)
}
function carouselImg2(){
    document.getElementById('imgCarousel').src="./assets/img/slide1.jpeg";
    setTimeout("carouselImg3()", 5000)
}
function carouselImg3(){
    document.getElementById('imgCarousel').src="./assets/img/slide2.jpeg";
    setTimeout("carouselImg4()", 5000)
}
function carouselImg4(){
    document.getElementById('imgCarousel').src="./assets/img/slide3.jpeg";
    setTimeout("carouselImg1()", 5000)
}

