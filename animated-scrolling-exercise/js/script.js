
let anchors = document.querySelectorAll('a[href^="#"]')

for (let item of anchors) { // relitere
    item.addEventListener('click', (e)=> { //adds a click event to the items
        e.preventDefault() //Prevent anchors from jumping
        let hashval = item.getAttribute('href') // Reads the value of an attribute as it appears in HTML
        let element = document.querySelector(hashval) //The call to document.querySelector(hashval) returns the first element for the given hashval selector

// scroll to top of target element

        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })

//Using history.pushState() to update the browser's URL History silently

        history.pushState(null, null, hashval)
    })
}
