document.addEventListener("DOMContentLoaded", function () {
    var clicked = false;
    var ref = document.getElementById("btn");
    const menu = document.getElementById('notification-box');
    ref.addEventListener("click", function () {
      if (clicked) { 
        clicked = false;
        menu.classList.remove('hide');
        menu.classList.remove('notification-box--fade-out');
        menu.classList.add('show');
        menu.classList.add('notification-box--fade-in');      
        ref.innerHTML = ' <i class="fas fa-times"></i>';   
      } else  {              
        clicked = true;  
        menu.classList.remove('notification-box--fade-in');    
        menu.classList.add('notification-box--fade-out');   
        setTimeout(function () {
          menu.classList.add('hide');
        }, 0.2 * 1000);
        ref.innerHTML = '<i class="fas fa-bell"></i>';
      }
    });
  });