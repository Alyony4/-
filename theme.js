let Theme = localStorage.getItem('Theme');
const buttonImg = document.querySelector('.button_number')


const themeImg = () => {
  document.querySelectorAll('.button_number').forEach(button => {
    const lightImg = button.querySelector('.light-theme-img');
    const darkImg = button.querySelector('.dark-theme-img');

    if (Theme === 'dark'){
      lightImg.classList.add('hidden');
      darkImg.classList.remove('hidden')
    } else{
      lightImg.classList.remove('hidden');
      darkImg.classList.add('hidden')
    }
  })
} 

const button = document.querySelector('#knopka');

const darkTheme = () =>{
  document.body.classList.add('darkstyle');
  localStorage.setItem('Theme','dark')
  /*themeImg();*/
}
const notDarkTheme = () => {
  document.body.classList.remove('darkstyle');
  localStorage.setItem('Theme', null);
  /*themeImg()*/
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