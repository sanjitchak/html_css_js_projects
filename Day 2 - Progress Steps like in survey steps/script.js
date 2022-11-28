const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')
const surveyparas = document.querySelectorAll('.surveypara')

let currentActive = 1

next.addEventListener('click', () => {

    currentActive++

    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    update() 

})


prev.addEventListener('click', () => {

    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    update() 

})

function update() { 
    //check if index of circle is less than currentactive number,else remove active class
 circles.forEach((circle, idx) => {
if(idx < currentActive) {
    circle.classList.add('active')
}
else {
    circle.classList.remove('active')
}
 })

//for paragraph, same logic as circle
 surveyparas.forEach((surveypara, idx) => {
 
   
        surveypara.classList.remove('paraactive')
        
        if(idx === currentActive-1) {
            surveypara.classList.add('paraactive')
        }
     })


 const actives = document.querySelectorAll('.active')

 progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

 if(currentActive === 1) {
    prev.disabled = true
 } else if(currentActive === circles.length) {
    next.disabled = true
 }
 else {
    next.disabled = false
    prev.disabled = false
 }


}