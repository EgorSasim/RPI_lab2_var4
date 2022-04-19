let $rihtSwipeArrow = document.querySelector('.welcoming-slider-right-arrow');
let $leftSwipeArrow = document.querySelector('.welcoming-slider-left-arrow');
let $imgBgContainer = document.querySelector('.welcoming-slider-img-part');
let dotsContainer = document.querySelector('.dots-container');



const IMGCOUNT = 5;
let choosenImg = 0;



function swipeRight(){
    
    
    choosenImg = (choosenImg + 1) % IMGCOUNT;   

    console.log(choosenImg);
    clearAllBtn(dotsContainer);
    changeBtnColor(dotsContainer, (choosenImg) % IMGCOUNT);

    switch (choosenImg){
        case 0:
            $imgBgContainer.style.backgroundImage = "url(../assets/img/welcoming_slider/c00lEYE.jpeg)";
            break;
        case 1:
            $imgBgContainer.style.backgroundImage = "url(../assets/img/welcoming_slider/faces.jpeg)";
            break;
        case 2: 
            $imgBgContainer.style.backgroundImage = "url(../assets/img/welcoming_slider/mindBreaker.jpeg)";
            break;
        case 3: 
            $imgBgContainer.style.backgroundImage = "url(../assets/img/welcoming_slider/mushroom.jpeg)";
            break;
        case 4: 
            $imgBgContainer.style.backgroundImage = "url(../assets/img/welcoming_slider/snakeEye.png)";
            break;
        
        default:
            console.log("The limit has been overflowed!!!");
    }
    
}


function swipeLeft(){

    if (choosenImg <= 0) {
        choosenImg = (IMGCOUNT - choosenImg - 1) % IMGCOUNT;
    } else{
        choosenImg = (choosenImg - 1) % IMGCOUNT;
    }
    console.log(choosenImg);
    clearAllBtn(dotsContainer);
    changeBtnColor(dotsContainer, (choosenImg) % IMGCOUNT);
    
    switch (choosenImg){
        case 0:
            $imgBgContainer.style.backgroundImage = "url(../assets/img/welcoming_slider/c00lEYE.jpeg)";
            break;
        case 1:
            $imgBgContainer.style.backgroundImage = "url(../assets/img/welcoming_slider/faces.jpeg)";
            break;
        case 2: 
            $imgBgContainer.style.backgroundImage = "url(../assets/img/welcoming_slider/mindBreaker.jpeg)";
            break;
        case 3: 
            $imgBgContainer.style.backgroundImage = "url(../assets/img/welcoming_slider/mushroom.jpeg)";
            break;
        case 4: 
            $imgBgContainer.style.backgroundImage = "url(../assets/img/welcoming_slider/snakeEye.png)";
            break;
        
        default:
            console.log("The limit has been overflowed!!!");
    }
    
}

function swipeToCertainSlide(n){
    clearAllBtn(dotsContainer);
    changeBtnColor(dotsContainer, n);
    choosenImg = n - 1;
    swipeRight();

}

function changeBtnColor(dotsContainer, n){
    let dot = dotsContainer.children[n];
    dot.classList.add("choosen");
    console.log( dotsContainer.children);
}

function clearAllBtn(dotsContainer){
    for(let i = 0; i < dotsContainer.children.length; i++){
        dotsContainer.children[i].classList.remove("choosen");
    }
}

