let bannerHead = document.querySelector(".bigHeader");
let block = document.querySelector(".blocks-1");
let block2 = document.querySelector(".blocks-3")
let block3 = document.querySelector(".blocks-2")
let block4 = document.querySelector(".blocks-4")


bannerHead.addEventListener('mouseout',()=>{
    block.classList.toggle("toggle-1");
    block2.classList.toggle("toggle-1");
    block3.classList.toggle("toggle-2");
    block4.classList.toggle("toggle-2");
});

