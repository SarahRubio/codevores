// Changement de thème :

// function changerTheme(classTheme) {
//   document.querySelector('body').classList.remove('themeJour', 'themeNuit');
//   document.querySelector('body').classList.add(classTheme);
//   console.log('alert');
// }
//
// document.querySelector('.jour').addEventListener('click', function () {
//   changerTheme('themeJour')
// });
// document.querySelector('.nuit').addEventListener('click', function () {
//   changerTheme('themeNuit')
// });

// Menu hamburger et cross :

// document.querySelector(".hamburger").addEventListener('click', function ()
// {
//   document.querySelector('.hamburger-menu').classList.remove('hidden');
//   document.querySelector('.hamburger').style.display="none";
//   document.querySelector('.cross').style.display="inline";
// });
//
//
// document.querySelector(".cross").addEventListener('click', function ()
// {
//   document.querySelector('.hamburger-menu').classList.add('hidden');
//   document.querySelector('.hamburger').style.display="inline";
//   document.querySelector('.cross').style.display="none";
// });

// JSON geekzone


function afficheArticle(article) {

  let element = document.createElement("li")

  let lien = document.createElement("a")
  lien.href = article.url
  lien.textContent = "> " + "  " + article.title

  element.appendChild(lien)
  return element
}

let liste = document.createElement("ul")

for(let i = 0; i < 10; i++) {
  article = afficheArticle(data.items[i])
  liste.appendChild(article)
}

document.querySelector(".actuJson").appendChild(liste)



// Input-file.

let input = document.querySelector('#file-up');
let preview = document.querySelector('.preview');

input.addEventListener('change', updateFileDisplay);

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
