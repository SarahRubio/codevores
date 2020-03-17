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

document.querySelector(".hamburger").addEventListener('click', function ()
{
  document.querySelector('.hamburger-menu').classList.remove('hidden');
  document.querySelector('.hamburger').style.display="none";
  document.querySelector('.cross').style.display="inline";
});


document.querySelector(".cross").addEventListener('click', function ()
{
  document.querySelector('.hamburger-menu').classList.add('hidden');
  document.querySelector('.hamburger').style.display="inline";
  document.querySelector('.cross').style.display="none";
});
