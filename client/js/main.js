const usersAPI = 'http://localhost:3000/api/users/';

// LOGIN
let bottone = document.querySelector('#login');
bottone.addEventListener('click',userLogin);

function userLogin(){ 
    const regexpass = /^[0-9]*$/;
    /* let input = document.querySelectorAll('.loginform input').value; */
    let username = document.querySelector('#username').value;
    console.log(username);
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