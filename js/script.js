const forms = document.querySelector(".forms"),
      //pwShowHide = document.querySelectorAll(".eye-icon"),
      links = document.querySelectorAll(".link"); 

links.forEach(link => {
    link.addEventListener("click", e => {
       e.preventDefault(); //preventing form submit
       forms.classList.toggle("show-signup");
    })
})

function validate(){
    var pass = document.getElementById('pass1');
    var upper= document.getElementById('upper');
    var lower= document.getElementById('lower');
    var num= document.getElementById('number');
    var len= document.getElementById('length');
    var sp_char= document.getElementById('special_char');
    //check if password value contains a number
    if(pass.value.match(/[0-9]/)){  //match function matches regular expression
    num.style.color = 'green';
    } else{
        num.style.color = 'red';
    }
    if(pass.value.match(/[A-Z]/)){  
        upper.style.color = 'green';
        } else{
            upper.style.color = 'red';
        }
        if(pass.value.match(/[a-z]/)){  
            lower.style.color = 'green';
            } else{
                lower.style.color = 'red';
            }
            if(pass.value.match(/[!\@\#\$\%\^\&\*\(\)\_\+\=\?\>\<\.\,]/)){  
                sp_char.style.color = 'green';
                } else{
                    sp_char.style.color = 'red';
                }
        if(pass.value.length < 6){
            len.style.color='red';
        }else{
            len.style.color='green';
        }
}  
function conform(){
    var pass1 = document.getElementById('pass1');
    var pass2 = document.getElementById('pass2');
    if(pass1.value == pass2.value){
        document.getElementById('number').style.display = 'none';
        document.getElementById('length').style.display = 'none';
        document.getElementById('special_char').style.display = 'none';
        document.getElementById('upper').style.display = 'none';
        document.getElementById('lower').style.display = 'none';
    }
       
    
}