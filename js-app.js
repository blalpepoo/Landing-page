

// global var
const sections = document.querySelectorAll('section');

const create = document.createDocumentFragment();

const list = document.getElementById('navbar__list');

// create li ..
function liCreator()
{
    // Looping..
  for (section of sections)
{
listItem = document.createElement('li');

sectionId = section.getAttribute('id');

sectionDataNav = section.getAttribute('data-nav');

listItem.innerHTML = `<a class='menu__link' data-nav='${section.id}' href='#${section.id}'> ${section.dataset.nav} </a>`;

      // unorderd List ..
create.appendChild(listItem);


}
 list.appendChild(create);
}

// Making nav bar

function toggleActiveState()

{

document.querySelectorAll("section").forEach(function (sec)

{

let allLi = list.querySelector(`[data-nav=${sec.id}]`);

if (sec.getBoundingClientRect().top >= -400 && sec.getBoundingClientRect().top <= 150)

{

// If on screen give it the active class

sec.classList.add("your-active-class");

allLi.classList.add("active");

  }else{

  // If not then remove the active class

sec.classList.remove("your-active-class");

allLi.classList.remove("active");

}

});

}

// smooth scrolling ..

list.addEventListener("click", (toSec) => {

toSec.preventDefault();

if (toSec.target.dataset.nav)

{

document.getElementById(`${toSec.target.dataset.nav}`).scrollIntoView({ behavior: "smooth" });

}

});

liCreator();

document.addEventListener('scroll', toggleActiveState);
