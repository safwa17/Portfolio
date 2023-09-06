
const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})

const btn = document.getElementById('back-to-top');

btn.addEventListener('click', function (event) {
  console.log('Évènement clic sur le bouton');
  event.preventDefault();
  let destination = btn.getAttribute('href');
  console.log(destination);
  document.querySelector(destination).scrollIntoView({
    behavior: 'smooth'
  });
});

const ancre = document.getElementsByClassName('ancre'); // classname donc plusieurs elements donc tableau d'élement
for (let i = 0; i < ancre.length; i++) {
  ancre[i].addEventListener('click', function (event) {
    event.preventDefault();

    let destination = ancre[i].getAttribute('href');

    document.querySelector(destination).scrollIntoView({
      behavior: 'smooth'
    });
  });

}

const menu = document.getElementById('menu-principal');
const burger = document.getElementById('burger-menu');
const bars = document.getElementById('bars');

burger.addEventListener('click', function (event) {
  if (menu.style.display === 'flex') {
    menu.style.display = 'none';
    bars.classList.remove("fa-xmark");
    bars.classList.remove("fa-solid");
    bars.classList.add("fa-solid");
    bars.classList.add("fa-bars");

  } else {
    menu.style.display = 'flex';
    bars.classList.remove("fa-solid");
    bars.classList.remove("fa-bars");
    bars.classList.add("fa-solid");
    bars.classList.add("fa-xmark");
  }
});

window.addEventListener('resize', function (e) {
  var largeur = window.innerWidth;
  if (this.window.innerWidth > 992) {
    menu.style.display = 'flex';
  } else {
    menu.style.display = 'none';
  }
})



// code pour bande auto slide

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

// gallery code
filterSelection("Tout") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "Tout") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}