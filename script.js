const hamburger = document.getElementsByClassName('hamburger')[0];
const navUl = document.getElementsByClassName('ul')[0];
console.log(navUl)


hamburger.addEventListener('click', () => {
    if (window.matchMedia("(max-width: 768px)").matches) {
        // kode yang ingin dijalankan jika ukuran layar kurang dari atau sama dengan 768px
        if(navUl.style.opacity == '1'){
            navUl.style.opacity = '0';
            navUl.style.transform = 'translateY(30px)'
        } else {
            navUl.style.opacity = '1';
            navUl.style.transform = 'translateY(0)'
        }
    } else {
        // kode yang ingin dijalankan jika ukuran layar lebih besar dari 768px
        navUl.style.opacity = '1';
      }
})


window.addEventListener('resize', function(event) {
    if(window.innerWidth > 620) {
        navUl.style.opacity = '1';
        navUl.style.transform = 'translateY(0)'
    } else {
        navUl.style.opacity = '0';
        navUl.style.transform = 'translateY(30px)'
    }
});
  