let Theme = localStorage.getItem('Theme');


const button = document.querySelector('#knopka');

const darkTheme = () =>{
  document.body.classList.add('darkstyle');
  localStorage.setItem('Theme','dark')
}
const notDarkTheme = () => {
  document.body.classList.remove('darkstyle');
  localStorage.setItem('Theme', null);
}
button.addEventListener('click',()=> {
  if (Theme !== 'dark'){
    darkTheme();
    Theme = 'dark'
  } else {
    notDarkTheme();
      Theme = null
  }
});

if (Theme === 'dark'){
  notDarkTheme();
}