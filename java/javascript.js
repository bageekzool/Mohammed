// navbar icon
const togglebtn = document.querySelector('.mi8-btn')
const togglebtnIcon = document.querySelector('.mi8-btn i')
const dropdownMenu = document.querySelector('.dropdown-menu')
togglebtn.onclick = function () 
       {
           dropdownMenu.classList.toggle('open') 
           const isOpen = dropdownMenu.classList.contains('open')

           togglebtnIcon.classList  = isOpen
           ? 'fa-solid fa-xmark'
           : 'fa-solid fa-bars'
       }        


// change background
window.onload = function()
{
    let isDrakeMode = localStorage.getItem('darkMode')

    if (isDrakeMode === 'ture') {
        document.body.classList.add('white-mode')
    }
}
function changeMode(){
    let body1 = document.body;

    body1.classList.toggle('white-mode');

    if(body1.classList.contains('white-mode'))
        {
            localStorage.setItem('darkMode', 'ture')
        }
    else
    {
        localStorage.removeItem('darkMode')
    }    
}

// change the title went to go anther page
let  titlePage = document.title;

window/addEventListener('blur',()=>{
    document.title = 'Mohammed';
    
})

 window.addEventListener('focus',()=>{
    document.title = titlePage;
 })  


//  

window.onscroll = function()
{
    var tMenu = document.getElementById('topMenu');
    {
        if(scrollY > 100)
        {
            tMenu.classList.add("sticky");
        }  
        else
        {
           tMenu.classList.remove("sticky")
        }         
    }
}

// Change the color of the logo when you hover over it
function logoEffectOn() 
{
    var text = document.getElementById("logo");
    text.style.transform = "scale(1.1)"; 
    text.style.opacity = "0.7";
    text.style.color = "orange"
}

// Change back to the original color
function logoEffectOff() 
{
    var text = document.getElementById("logo");
    text.style.transform = ""; 
    text.style.opacity = ""; 
    text.style.color = ""
}
 
// Show a notification when the page is refresh

document.addEventListener('DOMContentLoaded', function() {
    alert("The page has been formatted successfully!");
});

// A button that shows and hides text

document.getElementById('toggleButton').addEventListener('click', function() {
    const text = document.getElementById('toggleText');
    text.classList.toggle('hidden');
});

// A moving bar

document.addEventListener("DOMContentLoaded", function() {
    const marquee = document.querySelector('.marquee');
    const marqueeWidth = marquee.offsetWidth;
    const containerWidth = document.querySelector('.marquee-container').offsetWidth;
    let currentPosition = -marqueeWidth;

    function moveMarquee() {
        currentPosition++;
        if (currentPosition > containerWidth) {
            currentPosition = -marqueeWidth;
        }
        marquee.style.transform = `translateX(${currentPosition}px)`;
        requestAnimationFrame(moveMarquee);
    }

    moveMarquee();
});




// jqurey 

$(document).ready(function(){
    // the setting of aside button change the header and footer color
    $("#mf").click(function(){
        $("#nav").css("background","rgba(225, 110, 229, 0.345)");
        $("#contact").css("background","rgba(225, 110, 229, 0.345)");
    });
    $("#mf0").click(function(){
        $("#nav").css("background","rgba(15, 8, 74, 0.763)");
        $("#contact").css("background","rgba(15, 8, 74, 0.763)");
    });    
    $("#mf1").click(function(){
        $("#mohammed").css("font-size","18px")
    });
    $("#mf2").click(function(){
        $("#mohammed").css("font-size","20px")
    });
    // hover in imge 
        $('#myImage').hover(
            function(){
                
                $(this).css('opacity', '0.5');
            },
            function(){
              
                $(this).css('opacity', '1');
            }
        );                  

        // change imge soruce
            var originalSrc = 'imge/Browsing online-amico.png';
            var newSrc = 'imge/Search engines-amico.png';
            var isOriginal = true;

            $('#myImage1').on('click', function(){
                var confirmation = confirm('Would you like to change imge soruce?');
                if (confirmation) {
                    if (isOriginal) {
                        $(this).attr('src', newSrc);
                    } else {
                        $(this).attr('src', originalSrc);
                    }
                    isOriginal = !isOriginal;
                }
            });        

            // Move the page smoothly to the target element

            $(".container li").on("click", function(event) { 

                event.preventDefault();  

                var target = $(this).find('a').attr('href');

                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 1000); 
            });


            // When clicking on any link within a div with a social-style-one row,
            //  the default behavior (moving to another link) is suppressed and a notification message is displayed containing the row name of the icon within the link
            $('.social-icon2 li a').on('click', function(e) {
                e.preventDefault(); 
                alert('I did not add links: ' + $(this).find('i').attr('class')); 
            });


            // making moving in text of h3 inside the footer ment to come by muse in the text
            $("footer h3").hover(
                function() {
                    
                    $(this).css({
                        "transform": "translateY(-10px)",
                        "color": "#EC8C0E" 
                    });
                },
                function() {
                    
                    $(this).css({
                        "transform": "translateY(0)",
                        "color": "rgb(224, 210, 210)"
                    });
                }
            );
});

