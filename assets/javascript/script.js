// Changement de thème

function changerTheme(classTheme) {
  document.querySelector('body').classList.remove('themeJour', 'themeNuit');
  document.querySelector('body').classList.add(classTheme);
}

if(document.querySelector('.jour')) {
    document.querySelector('.jour').addEventListener('click', function () {
      changerTheme('themeJour')
    });

    document.querySelector('.nuit').addEventListener('click', function () {
      changerTheme('themeNuit')
    });
};

if(document.querySelector('.jourbis')) {
    document.querySelector('.jourbis').addEventListener('click', function () {
      changerTheme('themeJour')
    });
    document.querySelector('.nuitbis').addEventListener('click', function () {
      changerTheme('themeNuit')
    });
};

// Menu hamburger et cross

if(document.querySelector('.hamburger')) {
    document.querySelector(".hamburger").addEventListener('click', function ()
    {
      document.querySelector('.hamburger-menu').classList.remove('display-none');
      document.querySelector('.hamburger').style.display="none";
      document.querySelector('.cross').style.display="inline";
    });
};

if(document.querySelector('.hamburger-index')) {
    document.querySelector(".hamburger-index").addEventListener('click', function ()
    {
      document.querySelector('.hamburger-menu-index').classList.remove('display-none');
      document.querySelector('.hamburger-index').style.display="none";
      document.querySelector('.cross').style.display="inline";
    });
};

if(document.querySelector('.cross')) {
    document.querySelector(".cross").addEventListener('click', function ()
    {
      document.querySelector('.hamburger-menu-index').classList.add('display-none');
      document.querySelector('.hamburger-index').style.display="inline";
      document.querySelector('.cross').style.display="none";
    });
};

if(document.querySelector('.cross')) {
    document.querySelector(".cross").addEventListener('click', function ()
    {
      document.querySelector('.hamburger-menu').classList.add('display-none');
      document.querySelector('.hamburger').style.display="inline";
      document.querySelector('.cross').style.display="none";
    });
};

// JSON geekzone

function afficheArticle(article) {
    let element = document.createElement("li");
    let lien = document.createElement("a");
    lien.href = article.url
    lien.textContent = "> " + "  " + article.title

    element.appendChild(lien)
    return element
}

let liste = document.createElement("ul")

if(document.querySelector('.actuJson')) {
  for(let i = 0; i < 10; i++) {
    article = afficheArticle(data.items[i])
    liste.appendChild(article)
  }
};

if(document.querySelector('.actuJson')) {
  document.querySelector(".actuJson").appendChild(liste)
};


// Input-file

let input = document.querySelector('#file-up');
let preview = document.querySelector('.preview');

if(document.querySelector('.label-file-t')) {
  input.addEventListener('change', updateFileDisplay);
};

function updateFileDisplay() {
  while(preview.firstChild) {
    preview.removeChild(preview.firstChild);
  }

  let curFiles = input.files;
  if(curFiles.length === 0) {
    let para = document.createElement('p');
    para.textContent = 'Aucun fichier sélectionné pour le moment';
    preview.appendChild(para);
  } else {
    let list = document.createElement('ol');
    preview.appendChild(list);
    for(let i = 0; i < curFiles.length; i++) {
      let listItem = document.createElement('li');
      let para = document.createElement('p');
        para.textContent = curFiles[i].name + ' | ' + returnFileSize(curFiles[i].size) + '.';
        listItem.appendChild(para);
        list.appendChild(listItem);
    }
  }
}

function returnFileSize(number) {
  if(number < 1024) {
    return number + ' octets';
  } else if(number >= 1024 && number < 1048576) {
    return (number/1024).toFixed(1) + ' Ko';
  } else if(number >= 1048576) {
    return (number/1048576).toFixed(1) + ' Mo';
  }
}

// FAQ
function toogleVisible(numero) {
  let reponse = `.reponse${numero}`;
  document.querySelector(reponse).classList.toggle('display-none');
}

if(document.querySelector('.question')) {
    document.querySelector(".question1").addEventListener('click', function ()
    {
      toogleVisible('1');
    });

    document.querySelector(".question2").addEventListener('click', function ()
    {
      toogleVisible('2');
    });

    document.querySelector(".question3").addEventListener('click', function ()
    {
      toogleVisible('3');
    });

    document.querySelector(".question4").addEventListener('click', function ()
    {
      toogleVisible('4');
    });

    document.querySelector(".question5").addEventListener('click', function ()
    {
      toogleVisible('5');
    });

    document.querySelector(".question6").addEventListener('click', function ()
    {
      toogleVisible('6');
    });

    document.querySelector(".question7").addEventListener('click', function ()
    {
      toogleVisible('7');
    });
};

// starTrombi

function addClass(numero) {
  let star = `.star${numero}`;
  document.querySelector(star).classList.toggle('starTrombiFull');
}

if(document.querySelector('.starTrombi')) {
    document.querySelector(".star1").addEventListener('click', function ()
    {
      addClass('1');
    });

    document.querySelector(".star2").addEventListener('click', function ()
    {
      addClass('2');
    });

    document.querySelector(".star3").addEventListener('click', function ()
    {
      addClass('3');
    });

    document.querySelector(".star4").addEventListener('click', function ()
    {
      addClass('4');
    });

    document.querySelector(".star5").addEventListener('click', function ()
    {
      addClass(5);
    });

    document.querySelector(".star6").addEventListener('click', function ()
    {
      addClass(6);
    });

    document.querySelector(".star7").addEventListener('click', function ()
    {
      addClass(7);
    });

    document.querySelector(".star8").addEventListener('click', function ()
    {
      addClass(8);
    });

};

// Formulaire proposition PROJET

if(document.querySelector('.proposer')) {
    document.querySelector(".proposer").addEventListener('click', function ()
    {
      document.querySelector('.proposer').style.display="none";
      document.querySelector('.formprojet').style.display="inline";
    });
};

if(document.querySelector('.envoyerp')) {
    document.querySelector(".envoyerp").addEventListener('click', function ()
    {
      document.querySelector('.proposerA').style.display="inline";
      document.querySelector('.propositionE').style.display="inline";
      document.querySelector('.formprojet').style.display="none";
    });
};

if(document.querySelector('.propositionE')) {
    document.querySelector(".proposerA").addEventListener('click', function ()
    {
      document.querySelector('.formprojet').style.display="inline";
      document.querySelector('.proposerA').style.display="none";
      document.querySelector('.propositionE').style.display="none";
    });
};

// Price Slider

let slider = document.getElementById("myRange");
let output = document.getElementById("price");

if(document.querySelector('.slidecontainer')) {
  output.innerHTML = slider.value + "€" + " " + "et plus"; // valeur par défaut du slider
}
// mise à jour de la valeur du slider à chaque fois que le curseur est déplacé
if(document.querySelector('.slidecontainer')) {
  slider.oninput = function() {
    output.innerHTML = this.value + "€" + " " + "et plus";
  }
}
