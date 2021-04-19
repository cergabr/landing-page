
const headerElem=document.querySelector('header');
let timer;

/**
 * HELPER FUNCTIONS
*/
function readSections(){
    return document.querySelectorAll('section[id^=sect-]'); 
}

// Check if elem is visible > 50% of its height
function elemIsVisible(elem){
    //distance from the top of elem and the bottom of viewport
    const topToWbot=window.innerHeight - elem.getBoundingClientRect().top;
    const elemH=elem.offsetHeight;

    //return true if element is visible from the upper half to the low half
    if (topToWbot >= elemH*0.5 && topToWbot <= elemH*1.5){
        return true;
    }
    else{
        return false;
    }  
}

// Hide the header after scroll
function hideAfterScroll(){
    if (window.pageYOffset > 0){
            timer=setTimeout(() => {
            headerElem.classList.add('hidden-header');
        }, 2000);
    }
}

/**
 * END HELPER FUNCTIONS
*/

/**
 * MAIN FUNCTIONS
*/
// Populating nav menu
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

// Add class active-element to section when at least 50% visible on the viewport
function sectionActiveClass(){
        let sections=readSections();
        for (section of sections){
            if (elemIsVisible(section)){
                section.classList.add('active-element');
                //add class active to the correspondent anchor
                document.querySelector('.menu-header-list a[href=\'#'+section.id+'\']').classList.add('active-anchor');
            }
            else {
                section.classList.remove('active-element');
                //remove class active from the correspondent anchor
                document.querySelector('.menu-header-list a[href=\'#'+section.id+'\']').classList.remove('active-anchor');
            }
        }
    }

// Scroll to anchor
function scrollToAnchor(e){
    e.preventDefault();
    const anchorSec=document.querySelector(e.target.hash);
    const posY=anchorSec.getBoundingClientRect().top + document.documentElement.scrollTop - headerElem.offsetHeight;

    window.scrollTo({left: 0, top: posY, behavior: 'smooth'});
}

// Toggle header style on scroll
function headerOnScroll(){
    headerElem.classList.remove('hidden-header');
    if (window.pageYOffset > 0){
        if (!headerElem.classList.contains('page-scrolled')){
            headerElem.classList.add('page-scrolled');
        }
    }
    else{
        headerElem.classList.remove('page-scrolled');
    }
    clearTimeout(timer);
    hideAfterScroll();
}

// Toggle bot anchor when end of doc 
function toggleBottomAnchor(){       
    if (window.pageYOffset + window.innerHeight >= document.body.offsetHeight){
        document.getElementById('bot-anchor').setAttribute('style','display:inline;')
    }
    else {
        document.getElementById('bot-anchor').removeAttribute('style','display:inline;')
    }
}

/**
 * END MAIN FUNCTIONS
*/

/**
 * EVENTS 
*/
// Creating list inside ul
createMenuList();

// Scroll to section on link click
document.querySelector('.menu-header-list').addEventListener('click',scrollToAnchor);

// Scroll to top on bottom link click
document.querySelector('#bot-anchor').addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({left: 0, top: document.querySelector('#page-top').offsetTop, behavior: 'smooth'});
});

// EventListener for active section
document.addEventListener('scroll', e => {
    headerOnScroll();
    toggleBottomAnchor(); 
    sectionActiveClass(e);
});