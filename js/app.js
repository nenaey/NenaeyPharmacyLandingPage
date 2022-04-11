/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const html = document.querySelector('html');

//Setting the scroll behavior of the page html
html.style.scrollBehavior='smooth';

const firstSection = document.querySelector('#section1');
const secondSection = document.querySelector('#section2');
const thirdSection = document.querySelector('#section3');
const fourthSection = document.querySelector('#section4');

const navBar = document.querySelector('.page__header');

const navBarList = document.querySelector('#navbar__list');



// building the navigation bar (menuStrip) & setting its style
navBar.style.height = '50px';
navBar.style.backgroundColor = 'black';

// Showing the hidden navigation bar upon mouse leave of the document body
document.body.addEventListener('mouseleave', function(){
    navBar.style.display='block';
});

// menuStripTitle
// Creating Title element
const menuStripTitle = document.createElement('li');
menuStripTitle.innerHTML=`<h4>Dr. Ahmed El-Nenaey Pharmacy</h4>`;
navBarList.appendChild(menuStripTitle);

// setting page top position in the navigation bar 
menuStripTitle.style.marginRight='350px';
menuStripTitle.style.color='yellow';
menuStripTitle.style.fontWeight='Bold';
// menuStripPageTop
// Creating page top element

const menuStripPageTop = document.createElement('li');
menuStripPageTop.innerHTML=`<a id='menuStrip_Top' href=''>Page Top</a>`;
navBarList.appendChild(menuStripPageTop);

// setting page top position in the navigation bar 
menuStripPageTop.style.marginRight='300px';

// Styling page top element on mouse over & on mouse leave
let menuStripTop = document.querySelector('#menuStrip_Top');

menuStripPageTop.addEventListener('mouseover', function(){
    menuStripTop.style.color='yellow';
    menuStripTop.style.fontWeight='Bold';
});
menuStripPageTop.addEventListener('mouseleave', function(){
    if (html.scrollTop>0){
    menuStripTop.style.color='grey';
    menuStripTop.style.fontWeight='normal';
    };
});

// Adding the main role of page top element on clicking it 
menuStripPageTop.addEventListener('click', function(){
    html.scrollTo(0,0);
});

// menuStripFirstSection
// Creating Section 1 element
const menuStripFirstSection = document.createElement('li');
menuStripFirstSection.innerHTML=`<a id='menuStrip_Link1' href='#section1'>Section 1</a>`;
navBarList.appendChild(menuStripFirstSection);

// Setting Section 1 element position on the navigation bar
menuStripFirstSection.style.margin='10px';

// Styling Section 1 element on mouse over & on mouse leave
let menuStripLink1 = document.querySelector('#menuStrip_Link1');

menuStripFirstSection.addEventListener('mouseover', function(){
    menuStripLink1.style.color='white';
    menuStripLink1.style.fontWeight='Bold';
});
menuStripFirstSection.addEventListener('mouseleave', function(){
    if (!(html.scrollTop>50 && html.scrollTop<515)){
    menuStripLink1.style.color='grey';
    menuStripLink1.style.fontWeight='normal';
    };
});


// menuStripSecondSection
// Creating Section 2
const menuStripSecondSection = document.createElement('li');
menuStripSecondSection.innerHTML=`<a id='menuStrip_Link2' href='#section2'>Section 2</a>`;
navBarList.appendChild(menuStripSecondSection);

// Setting Section 2 element position on the navigation bar
menuStripSecondSection.style.margin='10px';

// Styling Section 2 element on mouse over & on mouse leave
let menuStripLink2 = document.querySelector('#menuStrip_Link2');

menuStripSecondSection.addEventListener('mouseover', function(){
    menuStripLink2.style.color='white';
    menuStripLink2.style.fontWeight='Bold';
});
menuStripSecondSection.addEventListener('mouseleave', function(){
    if (!(html.scrollTop>800 && html.scrollTop<1500)){
    menuStripLink2.style.color='grey';
    menuStripLink2.style.fontWeight='normal';
    };
});

// menuStripThirdSection
// Creating Section 3
const menuStripThirdSection = document.createElement('li');
menuStripThirdSection.innerHTML=`<a id='menuStrip_Link3' href='#section3'>Section 3</a>`;
navBarList.appendChild(menuStripThirdSection);

// Setting Section 3 element position on the navigation bar
menuStripThirdSection.style.margin='10px';

// Styling Section 3 element on mouse over & on mouse leave
let menuStripLink3 = document.querySelector('#menuStrip_Link3');

menuStripThirdSection.addEventListener('mouseover', function(){    
    menuStripLink3.style.color='white';
    menuStripLink3.style.fontWeight='Bold';
});
menuStripThirdSection.addEventListener('mouseleave', function(){
    if (!(html.scrollTop>1535 && html.scrollTop<2100)){
    menuStripLink3.style.color='grey';
    menuStripLink3.style.fontWeight='normal';
    };
});



// menuStripFourthSection
// Creating Section 4
const menuStripFourthSection = document.createElement('li');
menuStripFourthSection.innerHTML=`<a id='menuStrip_Link4' href='#section4'>Section 4</a>`;
navBarList.appendChild(menuStripFourthSection);

// Setting Section 4 element position on the navigation bar
menuStripFourthSection.style.margin='10px';

// Styling Section 4 element on mouse over & on mouse leave
let menuStripLink4 = document.querySelector('#menuStrip_Link4');

menuStripFourthSection.addEventListener('mouseover', function(){
    menuStripLink4.style.color='white';
    menuStripLink4.style.fontWeight='Bold';
});
menuStripFourthSection.addEventListener('mouseleave', function(){
    if (!(html.scrollTop>2100 && html.scrollTop<2450)){
    menuStripLink4.style.color='grey';
    menuStripLink4.style.fontWeight='normal';
    };
});

// Styling Sections & Navigation bar menu elements upon window scroll

window.addEventListener('scroll',function(){

    //Section 1
    if (html.scrollTop>50 && html.scrollTop<515){
        firstSection.style.backgroundColor='red';
        menuStripLink1.style.color='white';
        menuStripLink1.style.fontWeight='Bold';
        navBar.style.display='none';
    }else{
        firstSection.style.backgroundColor='rgba(255, 255, 255, 0.187)'
        menuStripLink1.style.color='grey';
        menuStripLink1.style.fontWeight='normal';
    };
    //Section 2
    if (html.scrollTop>800 && html.scrollTop<1500){
        secondSection.style.backgroundColor='red';
        menuStripLink2.style.color='white';
        menuStripLink2.style.fontWeight='Bold';
        navBar.style.display='none';
    }else{
        secondSection.style.backgroundColor='rgba(255, 255, 255, 0.187)'
        menuStripLink2.style.color='grey';
        menuStripLink2.style.fontWeight='normal';
    };
    
    //Section 3
    if (html.scrollTop>1500 && html.scrollTop<2100){
        thirdSection.style.backgroundColor='red';
        menuStripLink3.style.color='white';
        menuStripLink3.style.fontWeight='Bold';
        navBar.style.display='none';
    }else{
        thirdSection.style.backgroundColor='rgba(255, 255, 255, 0.19)'
        menuStripLink3.style.color='grey';
        menuStripLink3.style.fontWeight='normal';
    };

    //Section 4
    if (html.scrollTop>2100 && html.scrollTop<2450){
        fourthSection.style.backgroundColor='red';
        menuStripLink4.style.color='white';
        menuStripLink4.style.fontWeight='Bold';
        navBar.style.display='none';
    }else{
        fourthSection.style.backgroundColor='rgba(255, 255, 255, 0.19)'
        menuStripLink4.style.color='grey';
        menuStripLink4.style.fontWeight='normal';
    };

    //Page top
    menuStripTop.style.color='grey';
    menuStripTop.style.fontWeight='normal';
});

