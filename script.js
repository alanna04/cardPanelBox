//selects all panels puts into node list
const panels = document.querySelectorAll('.panel') 


//loops through panels.removes active classes. active applied to clicked
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
});

//removes active class, cards resize
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
} ;