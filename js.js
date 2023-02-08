
// slider 
// slider 
// slider 
// slider 
window.addEventListener('load', function () {
    const slider = this.document.querySelector('.slider')
    const sliderMain = this.document.querySelector('.slider-main')
    const nextBtn = this.document.querySelector('.slider-next')
    const prevBtn = this.document.querySelector('.slider-prev')
    const sliderItems = this.document.querySelectorAll('.slider-item')
    const dotItem = this.document.querySelectorAll('.slider-dot-item')
    const sliderLength = sliderItems.length;
    const sliderItemWidth = sliderItems[0].offsetWidth
    let positionX = 0;
    let index = 0
    var indexDot = document.querySelectorAll('.slider-dot-item')
    nextBtn.addEventListener('click', function () {
        handleChangeSlide(1);
    });
    prevBtn.addEventListener('click', function () {
        handleChangeSlide(-1);
    })

    function handleChangeSlide(direction) {
        if (direction == 1) {

            if (index >= sliderLength - 1) {
                index = sliderLength - 1
                return
            }
            positionX = positionX - sliderItemWidth
            sliderMain.style = `transform: translateX(${positionX}px)`
            ++index
            for (const key in indexDot) {
                if (key == index) {
                    indexDot[key].classList.add('active')
                    indexDot[key - 1].classList.remove('active')
                }
            }


        } else if (direction == -1) {

            if (index <= 0) {
                index = 0
                return
            }
            positionX = positionX + sliderItemWidth
            sliderMain.style = `transform: translateX(${positionX}px)`
            --index
            for (var ii = 0; ii < 5; ii++) {
                if (ii == index) {
                    indexDot[ii].classList.add('active')
                    indexDot[++ii].classList.remove('active')
                }
            }
        }
    }
    function dotAuto(){
        var countDot = index
        if(countDot ==4){
            setTimeout(6000)
            handleChangeSlide(-1);
            handleChangeSlide(-1);
            handleChangeSlide(-1);
            handleChangeSlide(-1);
            countDot=0
        }else{
            handleChangeSlide(1);
        }
        return setTimeout(() => {
            dotAuto()
        },6000 );
    }
    setTimeout(function() {
        dotAuto()
    }, 2000);

    function clickDots(VlIndex){
        var countDots = Math.abs(VlIndex-index)
        var i=0
        console.log(countDots)
        if(VlIndex>index){
            for(i;i<=countDots-1;i++){
                handleChangeSlide(1);
            }
        }else if(VlIndex<index){
            for(i;i<=countDots-1;i++){
                handleChangeSlide(-1);
            }
        }else{

        }
        
    }
    dotItem[0].addEventListener('click',function(){
        clickDots(0)
    })
    dotItem[1].addEventListener('click',function(){
        clickDots(1)
    })
    dotItem[2].addEventListener('click',function(){
        clickDots(2)
    })
    dotItem[3].addEventListener('click',function(){
        clickDots(3)
    })
    dotItem[4].addEventListener('click',function(){
        clickDots(4)
    })

})
