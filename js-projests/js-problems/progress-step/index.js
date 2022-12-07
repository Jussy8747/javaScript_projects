const progress = document.getElementById('progress');
const prev = document.getElementById('preview');
const next = document.getElementById('next');
const circle= document.querySelectorAll('.circle');


let ccurrentActive = 1


next.addEventListener('click', ()=>{
  ccurrentActive++
  if(ccurrentActive > circle.length){
ccurrentActive = circle.length
  }
  update()
})

prev.addEventListener('click', ()=>{
  ccurrentActive--
  if(ccurrentActive < 1){
ccurrentActive = 1
  }
 update()
})

function update(){
circle.forEach((circle, index)=>{
  if(index < ccurrentActive){
    circle.classList.add('active')
  }else{
    circle.classList.remove('active')
  }
})

const active =document.querySelectorAll('.active');
progress.style.width = (active.length - 1)/(circle.length -1) * 100 +'%'
if(ccurrentActive === 1){
  prev.disabled = true
}else if(ccurrentActive === circle.length){
  next.disabled =true
}else {
  
  prev.disabled = false
  next.disabled = false
}
}