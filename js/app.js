//var
const headerElem=document.querySelector('header');

//functions

/**
 * HELPER FUNCTIONS
*/
function readSections(){
    return document.querySelectorAll('section[id^=sect-]'); 
}

/* check if elem is full visible or not*/
function elemIsFullVisible(elem){
    let elemRect=elem.getBoundingClientRect();

    //check if elem is full visible
    if (elemRect.top >= 0 && (elemRect.bottom - window.innerHeight)<=0){
        return true;
    }
    else{
        return false;
    }  
}

function getElemPos(elem){
    
}

/**
 * END HELPER FUNCTIONS
*/

/**
 * MAIN FUNCTIONS
*/

/*func for populating nav menu*/
function createMenuList(){
    const sections=readSections();
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
function sectionActiveClass(){
    
}

// Scroll to anchor ID using scrollTO event
function scrollTo(){
    window.scrollTo(x,(y-headerElem));
    Element.offsetTop; //distance from top
    Element.offsetParent;
}


/**
 * END MAIN FUNCTIONS
*/

/**
 * EVENTS 
*/

//creating list inside ul
createMenuList();

// Scroll to section on link click

// Set sections as active
document.addEventListener('scroll',function(){
    let sections=readSections();
    for (section of sections){
        if (elemIsFullVisible(section)){
            section.classList.add('active-element');
        }
        else{
            section.classList.remove('active-element');
        }
    }
});
