var mech = document.getElementById('myimg')
var menub = document.querySelector('.links img')
var exit = document.querySelector('.menu img')
var menu =document.querySelector('.menu')


window.addEventListener('resize', function() {
    var windowWidth = window.innerWidth;
    
    if (windowWidth > 426) {
      mech.src='assets/images/image-web-3-desktop.jpg';
    } else {
        mech.src='assets/images/image-web-3-mobile.jpg';
    }
  } 
);

menub.addEventListener('click', function() {
   menu.style.display = 'flex'; 
}
);
exit.addEventListener('click', function() {
    menu.style.display ='none';
}
);