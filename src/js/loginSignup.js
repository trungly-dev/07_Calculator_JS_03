
// Creating a class name User for arranging the stored structure.
class User{
    constructor (username, password, email, fullName, phoneNum){
        this.username = username
        this.password = password = ""
        this.email = email = ""
        this.fullName = fullName = "" 
        this.phoneNum = phoneNum = "" 
    } 
}

// creating a database for storing all users
var admin_1 = new User("w", "1")
var admin_2 = new User("admin", "2")

var data = [
    admin_1, 
    admin_2
];

// showing data are storing inside
console.log(data)

//when login button is clicked 
document.getElementById("btn_login").addEventListener("click", loginChecking)

// when register button is clicked
document.getElementById("btn_Register").addEventListener("click", register)

// All essential functions supporting to call when the buttons are clicked.
function isRightAccount(checkingUsername, checkingPassword) {
    var i=0;
    for ( i=0; i<data.length; i++){
        if(data[i].username === checkingUsername && data[i].password === checkingPassword ){
            return true;
        }

    }
    return false;
    
}

function loginChecking(){
    var announceArea = document.getElementById('announce_text')

    var enter_un = document.getElementById("un").value
    var enter_pw = document.getElementById("pw").value

    
    if (enter_un != "" && enter_pw != "" ) { 
        // ------- none display all "form" ------------- 
        var inputClasses = document.querySelectorAll('form')
        var i = 0
        for (i = 0; i < inputClasses.length; i++) {
            inputClasses[i].style.display = 'none'
        }
        //-------------------------------


        announceArea.style.display = 'flex'
        
        if (isRightAccount(enter_un,enter_pw) == true ){
        
            announceArea.childNodes[0].textContent = "Your login is successful!"
            announceArea.childNodes[1].textContent = "Please waiting for a second!"
            setTimeout(function(){window.location.replace('calculatorPage.html');}, 3000)

        }else{
            announceArea.childNodes[0].textContent = "Your account doesn't match!"
            announceArea.childNodes[1].textContent = "Would you like to try back?"
            announceArea.childNodes[2].style.display = 'block'

            document.getElementById('btn_back').addEventListener("click", function(){
                announceArea.style.display = 'none'
                for (i = 0; i < inputClasses.length; i++) {
                    inputClasses[i].style.display = 'flex'
                }
                announceArea.childNodes[2].style.display = 'none'
                clearTextArea()
                window.location.hash = '#login'

            })

        }
    }
}
  

function clearTextArea() {
    document.getElementById('un').value = ''
    document.getElementById('pw').value = ''
    document.getElementById('reg_un').value = ''
    document.getElementById('reg_pw').value = ''
    document.getElementById('reg_email').value = ''
    document.getElementById('reg_fullName').value = ''
    document.getElementById('reg_phoneNum').value = ''
}

function isExist(checkingUsername){
    var i=0
    for ( i=0; i<data.length; i++){
        if(data[i].username === checkingUsername ){
            return true
        }
    } 
    return false
}

function register() {
    console.log(data)

    var reg_un_value = document.getElementById('reg_un').value
    var reg_pw_value = document.getElementById('reg_pw').value

    var announceArea = document.getElementById('announce_text')

    if( reg_un_value != "" && reg_pw_value !=""){

        if( isExist(reg_un_value)){

            // display an annouce that username are being used by the other! 

            // ------- none display all "form" ------------- 
            var inputClasses = document.querySelectorAll('form')
            var i = 0
            for (i = 0; i < inputClasses.length; i++) {
                inputClasses[i].style.display = 'none'
            }
            announceArea.style.display = 'flex'
            announceArea.childNodes[0].textContent = "Your username is invalid!"
            announceArea.childNodes[1].textContent = "Try the other name, please!"
 
            announceArea.childNodes[2].style.display = 'block'

            document.getElementById('btn_back').addEventListener("click", function(){
                announceArea.style.display = 'none'
                for (i = 0; i < inputClasses.length; i++) {
                    inputClasses[i].style.display = 'flex'
                }
                announceArea.childNodes[2].style.display = 'none'
                
                window.location.hash = '#register'

            })

        }else{

            var newUser = new User()
            newUser.username = reg_un_value
            newUser.password = reg_pw_value
            newUser.email = document.getElementById('reg_email').value
            newUser.fullName = document.getElementById('reg_fullName').value
            newUser.phoneNum = document.getElementById('reg_phoneNum').value

            data[data.length] = newUser

            // display an annouce that register are success! 

            // ------- none display all "form" ------------- 
            var inputClasses = document.querySelectorAll('form');
            var i = 0;
            for (i = 0; i < inputClasses.length; i++) {
                inputClasses[i].style.display = 'none';
            }
            announceArea.style.display = 'flex'
            announceArea.childNodes[0].textContent = "Your register is successful!"
            announceArea.childNodes[1].textContent = "Please waiting for a second!"

            setTimeout(function(){
                announceArea.style.display = 'none'
                for (i = 0; i < inputClasses.length; i++) {
                    inputClasses[i].style.display = 'flex'
                }
                window.location.hash = '#login'
            }, 2000)
        }

        //------------------
console.log(data)

        clearTextArea()
    }
}