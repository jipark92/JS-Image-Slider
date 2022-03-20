const imageSlider = (() => {
    const prevBtns = document.querySelector('.prev-btn');
    const nextBtns = document.querySelector('.next-btn');
    const pictureContainer = document.querySelector('.picture-container');
    const pictureFrame = document.querySelectorAll('.picture-frame');
    const images = document.querySelector('img')
    const buttons = document.querySelectorAll('button');

    let imageNumber = 0;

    let img0 = pictureFrame[0]
    let img1 = pictureFrame[1]
    let img2 = pictureFrame[2]
    let img3 = pictureFrame[3]
    let img4 = pictureFrame[4]

    const nextBtnFunction = () => {
        nextBtns.addEventListener('click', ()=>{
            img0.style.transition ="transform 0.4s ease-in-out"
            img1.style.transition ="transform 0.4s ease-in-out"
            img2.style.transition ="transform 0.4s ease-in-out"
            img3.style.transition ="transform 0.4s ease-in-out"
            img4.style.transition ="transform 0.4s ease-in-out"
            if(imageNumber === 0){
                img0.style.transform = "translate(-110%)";
                img1.style.transform = "translate(-110%)";
                img2.style.transform = "translate(-110%)";
                img3.style.transform = "translate(-110%)";
                img4.style.transform = "translate(-110%)";
                imageNumber++
                colorNavigation()
                console.log(imageNumber)
            } else if (imageNumber === 1){
                img0.style.transform = "translate(-222%)";
                img1.style.transform = "translate(-222%)";
                img2.style.transform = "translate(-222%)";
                img3.style.transform = "translate(-222%)";
                img4.style.transform = "translate(-222%)";
                imageNumber++
                colorNavigation()
                console.log(imageNumber)
            } else if (imageNumber === 2){
                img0.style.transform = "translate(-333%)";
                img1.style.transform = "translate(-333%)";
                img2.style.transform = "translate(-333%)";
                img3.style.transform = "translate(-333%)";
                img4.style.transform = "translate(-333%)";
                imageNumber++
                colorNavigation()
                console.log(imageNumber)
            } else if (imageNumber === 3){
                img0.style.transform = "translate(-444%)";
                img1.style.transform = "translate(-444%)";
                img2.style.transform = "translate(-444%)";
                img3.style.transform = "translate(-444%)";
                img4.style.transform = "translate(-444%)";
                imageNumber++
                colorNavigation()
                console.log(imageNumber)
            } 
        })
    }
    nextBtnFunction()

    const prevBtnFunction = () => {
        prevBtns.addEventListener('click', ()=>{
            console.log('clicked')
            if (imageNumber === 0){
            } else if (imageNumber === 1) {
                img0.style.transform = "translate(0%)";
                img1.style.transform = "translate(0%)";
                img2.style.transform = "translate(0%)";
                img3.style.transform = "translate(0%)";
                img4.style.transform = "translate(0%)";
                imageNumber--
                colorNavigation()
                console.log(imageNumber)
            } else if (imageNumber === 2) {
                img0.style.transform = "translate(-110%)";
                img1.style.transform = "translate(-110%)";
                img2.style.transform = "translate(-110%)";
                img3.style.transform = "translate(-110%)";
                img4.style.transform = "translate(-110%)";
                imageNumber--
                colorNavigation()
                console.log(imageNumber)
            } else if (imageNumber === 3) {
                img0.style.transform = "translate(-222%)";
                img1.style.transform = "translate(-222%)";
                img2.style.transform = "translate(-222%)";
                img3.style.transform = "translate(-222%)";
                img4.style.transform = "translate(-222%)";
                imageNumber--
                colorNavigation()
                console.log(imageNumber)
            } else if (imageNumber === 4) {
                img0.style.transform = "translate(-333%)";
                img1.style.transform = "translate(-333%)";
                img2.style.transform = "translate(-333%)";
                img3.style.transform = "translate(-333%)";
                img4.style.transform = "translate(-333%)";
                imageNumber--
                colorNavigation()
                console.log(imageNumber)
            }
        })
    }
    prevBtnFunction();

    const btn1 = document.querySelector('.b1')
    const btn2 = document.querySelector('.b2')
    const btn3 = document.querySelector('.b3')
    const btn4 = document.querySelector('.b4')
    const btn5 = document.querySelector('.b5')

    const colorNavigation = () =>{ 
        if (imageNumber === 0){
            btn1.style.color = "red";
            btn2.style.color = "black";
            btn3.style.color = "black";
            btn4.style.color = "black";
            btn5.style.color = "black;"
        } else if (imageNumber === 1){
            btn1.style.color = "black";
            btn2.style.color = "red";
            btn3.style.color = "black";
            btn4.style.color = "black";
            btn5.style.color = "black;"
        } else if (imageNumber === 2){
            btn1.style.color = "black";
            btn2.style.color = "black";
            btn3.style.color = "red";
            btn4.style.color = "black";
            btn5.style.color = "black;"
        } else if (imageNumber === 3){
            btn1.style.color = "black";
            btn2.style.color = "black";
            btn3.style.color = "black";
            btn4.style.color = "red"
            btn5.style.color = "black"
        } else if (imageNumber === 4){
            btn1.style.color = "black";
            btn2.style.color = "black";
            btn3.style.color = "black";
            btn4.style.color = "black";
            btn5.style.color = "red"
        }
    }
    colorNavigation()

    const navigateToImg = () => {
        btn1.addEventListener('click',()=>{
            console.log('clicked')
            img0.style.transition ="transform 0.4s ease-in-out"
            img1.style.transition ="transform 0.4s ease-in-out"
            img2.style.transition ="transform 0.4s ease-in-out"
            img3.style.transition ="transform 0.4s ease-in-out"
            img4.style.transition ="transform 0.4s ease-in-out"
            img0.style.transform = "translate(0%)";
            img1.style.transform = "translate(0%)";
            img2.style.transform = "translate(0%)";
            img3.style.transform = "translate(0%)";
            img4.style.transform = "translate(0%)";
            btn1.style.color = "red";
            btn2.style.color = "black";
            btn3.style.color = "black";
            btn4.style.color = "black";
            btn5.style.color = "black;"
            imageNumber = 0;
        })
        btn2.addEventListener('click',()=>{
            console.log('clicked')
            img0.style.transition ="transform 0.4s ease-in-out"
            img1.style.transition ="transform 0.4s ease-in-out"
            img2.style.transition ="transform 0.4s ease-in-out"
            img3.style.transition ="transform 0.4s ease-in-out"
            img4.style.transition ="transform 0.4s ease-in-out"
            img0.style.transform = "translate(-110%)";
            img1.style.transform = "translate(-110%)";
            img2.style.transform = "translate(-110%)";
            img3.style.transform = "translate(-110%)";
            img4.style.transform = "translate(-110%)";
            btn1.style.color = "black";
            btn2.style.color = "red";
            btn3.style.color = "black";
            btn4.style.color = "black";
            btn5.style.color = "black;"
            imageNumber = 1;
        })
        btn3.addEventListener('click',()=>{
            console.log('clicked')
            img0.style.transition ="transform 0.4s ease-in-out"
            img1.style.transition ="transform 0.4s ease-in-out"
            img2.style.transition ="transform 0.4s ease-in-out"
            img3.style.transition ="transform 0.4s ease-in-out"
            img4.style.transition ="transform 0.4s ease-in-out"
            img0.style.transform = "translate(-222%)";
            img1.style.transform = "translate(-222%)";
            img2.style.transform = "translate(-222%)";
            img3.style.transform = "translate(-222%)";
            img4.style.transform = "translate(-222%)";
            btn1.style.color = "black";
            btn2.style.color = "black";
            btn3.style.color = "red";
            btn4.style.color = "black";
            btn5.style.color = "black;"
            imageNumber = 2;
        })
        btn4.addEventListener('click',()=>{
            console.log('clicked')
            img0.style.transition ="transform 0.4s ease-in-out"
            img1.style.transition ="transform 0.4s ease-in-out"
            img2.style.transition ="transform 0.4s ease-in-out"
            img3.style.transition ="transform 0.4s ease-in-out"
            img4.style.transition ="transform 0.4s ease-in-out"
            img0.style.transform = "translate(-333%)";
            img1.style.transform = "translate(-333%)";
            img2.style.transform = "translate(-333%)";
            img3.style.transform = "translate(-333%)";
            img4.style.transform = "translate(-333%)";
            btn1.style.color = "black";
            btn2.style.color = "black";
            btn3.style.color = "black";
            btn4.style.color = "red"
            btn5.style.color = "black"
            imageNumber = 3;
        })
        btn5.addEventListener('click',()=>{
            console.log('clicked')
            img0.style.transition ="transform 0.4s ease-in-out"
            img1.style.transition ="transform 0.4s ease-in-out"
            img2.style.transition ="transform 0.4s ease-in-out"
            img3.style.transition ="transform 0.4s ease-in-out"
            img4.style.transition ="transform 0.4s ease-in-out"
            img0.style.transform = "translate(-444%)";
            img1.style.transform = "translate(-444%)";
            img2.style.transform = "translate(-444%)";
            img3.style.transform = "translate(-444%)";
            img4.style.transform = "translate(-444%)";
            btn1.style.color = "black";
            btn2.style.color = "black";
            btn3.style.color = "black";
            btn4.style.color = "black";
            btn5.style.color = "red"
            imageNumber = 4;
            console.log(imageNumber)
        })
    }
    navigateToImg()

    return {}
})();

