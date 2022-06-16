const usersAPI = 'http://localhost:3000/api/users/';

// LOGIN
let bottone = document.querySelector('#login');
let input = document.querySelectorAll('.loginform input');

if(bottone){
    bottone.addEventListener('click', userLogin);
}

function userLogin(){ 
    let username = input[0].value;
    let password = input[1].value;

    fetch(usersAPI).then(response => response.json()).then(json => {

        let utente = json.find(ele => ele.userid === username);
        
        if(utente.userid !== undefined){
            if(password === utente.password){
                window.location.assign('home.html');
            } else {
            alert('username o password errati');
            }
        } else{
            alert('utente non trovato');
        }
    });

    

    const regexpass = /^[0-9]*$/;
     
}

/* btn.addEventListener('click', function() {
    
    let txtTest = 'abc@gmail.com';
    let cfTest = 'MNLMRT78T28A269K'
    let passTest = 'Abc1?a1p!';
    let testoTxt = 'alshf54';
    console.log(regexemail.test(txtTest));
    console.log(regexcf.test(cfTest));
    console.log(regexpass.test(passTest));
    console.log(regexText.test(testoTxt));
    
    let txt = document.querySelector('.container input[name="txt"]').value;
    if(txt.trim() !== '' || txt.trim().length > 0) {
        alert('Testo ok!!!')
    }
}) */







// HOME
/* let profilesx = document.querySelector('#profilesx');
profilesx.addEventListener('mouseover', displayprofile); */
/* profilesx.addEventListener('mouseout', unshow); */

/* function displayprofile(){
    let profiledrop = document.querySelector('.profiledrop');
    profiledrop.style.display = 'block';
}
 */
/* function unshow(){
    let profilehide = document.querySelector('.profiledrop');
    profilehide.style.display = 'none';
} */


// PROFILE


/* function userProfile(id) {
    fetch(usersAPI+id).then(response => response.json()).then(json => {
        console.log(json);
    })
} */