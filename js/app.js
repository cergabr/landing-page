//var

//functions

/**
 * HELPER FUNCTIONS
*/

/**
 * END HELPER FUNCTIONS
*/

/**
 * MAIN FUNCTIONS
*/

//func for populating nav menu
function createItemsList(){
    const sections=document.querySelectorAll('section[id^=sect-]');
    //creating a fragment to append new <li> elements
    const fragment=document.createDocumentFragment();

    //creating # <a> inside <li> elements as many as # sections detected
    for (let section of sections){
        let newLi=document.createElement('li');
        let newAnch=document.createElement('a');

        //setting <a> attribute and text from corresp. section
        newAnch.setAttribute('href','#'+ section.id);
        newAnch.textContent=section.dataset.nav;

        newLi.appendChild(newAnch);
        fragment.appendChild(newLi);
    }
    //appending the fragment to the ul
    document.querySelector('.menu-header-list').appendChild(fragment);
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * END MAIN FUNCTIONS
*/

/**
 * EVENTS 
*/

//creating list inside ul
createItemsList();

// Scroll to section on link click

// Set sections as active


