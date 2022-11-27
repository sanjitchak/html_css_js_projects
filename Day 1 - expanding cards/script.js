const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
panel.addEventListener(
    'click' , () => {
removeActiveClasses()

// on click only add the ACTIVE class
panel.classList.add('active')
    })

} )

function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active')
    }

    )
}