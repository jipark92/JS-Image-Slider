const imageSlider = (() => {
    const prevBtns = document.querySelector('.prev-btn');
    const nextBtns = document.querySelector('.next-btn');
    const pictureContainer = document.querySelector('.picture-container');
    const pictureFrame = document.querySelectorAll('.picture-frame');
    const images = document.querySelector('img')

    let nextNumber = 0;
    let prevNumber = 0;
    

    let img0 = pictureFrame[0]
    let img1 = pictureFrame[1]
    let img2 = pictureFrame[2]
    let img3 = pictureFrame[3]
    let img4 = pictureFrame[4]


    const nextBtnFunction = () => {
        nextBtns.addEventListener('click', ()=>{
            if(nextNumber === 0){
                img0.style.transform = "translate(-110%)";
                img1.style.transform = "translate(-110%)";
                img2.style.transform = "translate(-110%)";
                img3.style.transform = "translate(-110%)";
                img4.style.transform = "translate(-110%)";
                nextNumber++
            } else if (nextNumber === 1){
                img0.style.transform = "translate(-222%)";
                img1.style.transform = "translate(-222%)";
                img2.style.transform = "translate(-222%)";
                img3.style.transform = "translate(-222%)";
                img4.style.transform = "translate(-222%)";
                nextNumber++
            } else if (nextNumber === 2){
                img0.style.transform = "translate(-333%)";
                img1.style.transform = "translate(-333%)";
                img2.style.transform = "translate(-333%)";
                img3.style.transform = "translate(-333%)";
                img4.style.transform = "translate(-333%)";
                nextNumber++
            } else if (nextNumber === 3){
                img0.style.transform = "translate(-444%)";
                img1.style.transform = "translate(-444%)";
                img2.style.transform = "translate(-444%)";
                img3.style.transform = "translate(-444%)";
                img4.style.transform = "translate(-444%)";
                nextNumber++
            } else {
                return;
            }
        })
    }
    nextBtnFunction()

    const prevBtnFunction = () => {
        prevBtns.addEventListener('click', ()=>{
            console.log('clicked')
            if (nextNumber === 0){
            } else if (nextNumber === 1) {
                img0.style.transform = "translate(0%)";
                img1.style.transform = "translate(0%)";
                img2.style.transform = "translate(0%)";
                img3.style.transform = "translate(0%)";
                img4.style.transform = "translate(0%)";
            } else if (nextNumber === 2) {
                img0.style.transform = "translate(-110%)";
                img1.style.transform = "translate(-110%)";
                img2.style.transform = "translate(-110%)";
                img3.style.transform = "translate(-110%)";
                img4.style.transform = "translate(-110%)";
            } else if (nextNumber === 3) {
                img0.style.transform = "translate(-222%)";
                img1.style.transform = "translate(-222%)";
                img2.style.transform = "translate(-222%)";
                img3.style.transform = "translate(-222%)";
                img4.style.transform = "translate(-222%)";
            } else if (nextNumber === 4) {
                img0.style.transform = "translate(-333%)";
                img1.style.transform = "translate(-333%)";
                img2.style.transform = "translate(-333%)";
                img3.style.transform = "translate(-333%)";
                img4.style.transform = "translate(-333%)";
            }
        })
    }
    prevBtnFunction();

    return {nextBtnFunction}
})();

