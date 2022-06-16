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