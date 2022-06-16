// LOGIN
let bottone = document.querySelector('#login');
bottone.addEventListener('click',cerca);

function cerca() {
    
}








// HOME
let profilesx = document.querySelector('#profilesx');
profilesx.addEventListener('mouseover', displayprofile);
/* profilesx.addEventListener('mouseout', unshow); */

function displayprofile(){
    let profiledrop = document.querySelector('.profiledrop');
    profiledrop.style.display = 'block';
}

/* function unshow(){
    let profilehide = document.querySelector('.profiledrop');
    profilehide.style.display = 'none';
} */


// PROFILE
const usersAPI = 'http://localhost:3000/api/users/';

function userProfile(id) {
    fetch(usersAPI+id).then(response => response.json()).then(json => {
        console.log(json);
    })
}