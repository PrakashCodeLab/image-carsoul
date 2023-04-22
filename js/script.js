const imgSlider = document.querySelectorAll('.img__slider');
const btnBackward = document.querySelector('.btn__backward');
const btnForward = document.querySelector('.btn__forward');
let imgPosition = 0;
let totalImg = imgSlider.length;
console.log(totalImg);




function updateImg() {
	imgSlider.forEach((image) => {
		image.classList.remove('manual-active');
	})
	
	imgSlider[imgPosition].classList.add('manual-active');
	
	dot.forEach((dots)=>{
	    dots.classList.remove('dot-active');
	});    
	
dot[imgPosition].classList.add('dot-active');

}





function updateSlider(n) {
	imgPosition += n;
	if(imgPosition < 0) {
		imgPosition = totalImg - 1
	} else if(imgPosition === totalImg) {
		imgPosition = 0;
	}
	updateImg();
}


btnBackward.addEventListener('click', () => updateSlider(-1));
btnForward.addEventListener('click', () => updateSlider(1));




const dotContainer=document.querySelector('.dots');

imgSlider.forEach((image)=>{
    const dots=document.createElement('div');
    dots.classList.add('dot');
    
    dotContainer.appendChild(dots);
    
})


const dot=document.querySelectorAll('.dot');
     
dot[imgPosition].classList.add('dot-active');     
     
 dot.forEach((dots , index )=>{
     dots.addEventListener('click',()=>{
         imgPosition=index;
         
         updateImg()
     })
 })



setInterval(()=>{
    
    if (imgPosition === totalImg - 1) {
        imgPosition=0;
    }else{
        imgPosition++
    }
    
    updateImg();
    
},3000);
