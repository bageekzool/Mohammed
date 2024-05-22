// FORMS
let userInput = document.querySelector("[name = 'username']");
let passinput = document.querySelector("[name = 'password']");

// max.length of password
document.forms[0].onsubmit = function (e)
{
    let userValid = false;
    let passValid = false;
    console.log(userInput.value);
    console.log(userInput.value.length);

    if(userInput.value !== "" && userInput.value.length <=15)
        {
           userValid = true;
        }
    if(passinput.value !== "" && passinput.value.length <=10)
        {
            passValid = true;
        }



    if( userValid === false || passValid === false)
        {
            // console.log(event);
            e.preventDefault();
        }
}
// AUTO FOCUS
let pass = document.querySelector(".pass");

window.onload = function ()
{
    pass.focus();
};

// Show and hide password
let passw = document.querySelector("#pass"),
check = document.querySelector('#check');

check.addEventListener('change',function() {
    if(passw.type === 'text')
        {
            passw.type = 'password';
        }
    else
    {
        passw.type = 'text';
    }
    
})



// Change color when you move it over the button

function btnColorOn()
{
    var myBtnOn = document.getElementById("botton");
    myBtnOn.style.backgroundColor = "rgba(225, 110, 229, 0.345)";
}

// Return the button to its original color
function btnColorOff() 
{
    var myBtnOff = document.getElementById("botton");
    myBtnOff.style.backgroundColor = "";
}

function submitForm() {
    var formData = new FormData(document.getElementById('myForm'));
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'submit.php', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('response').innerHTML = xhr.responseText;
            document.getElementById('myForm').reset();
        }
    };
    xhr.send(formData);
}








