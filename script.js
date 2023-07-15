
let block_1 = document.querySelector('.block_1');
let block_2 = document.querySelector('.block_2');
let block_3 = document.querySelector('.block_3');
document.querySelector('.link2').addEventListener('click', function(){

    block_1.style.opacity = 0;
    block_2.style.opacity = 1;
    block_3.style.opacity = 0;
});
document.querySelector('.link3').addEventListener('click', function(){
    
    block_1.style.opacity = 0;
    block_2.style.opacity = 0;
    block_3.style.opacity = 1;
});