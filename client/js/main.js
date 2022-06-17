let urlPost = "http://localhost:3000/api/posts/";

let urlUser = "http://localhost:3000/api/users/";

// LOGIN
let bottone = document.querySelector('#login');
let input = document.querySelectorAll('.loginform input');

if(bottone){
    bottone.addEventListener('click', userLogin);
}

function userLogin(){ 
    let username = input[0].value;
    let password = input[1].value;

    fetch(urlUser).then(response => response.json()).then(json => {

        let utente = json.find(ele => ele.userid === username);
        
        if(utente.userid !== undefined){
            if(password === utente.password){
                localStorage.clear;
                localStorage.setItem('utente', JSON.stringify(utente));
                window.location.assign('home.html');
            } else {
            alert('username o password errati');
            }
        } else{
            alert('utente non trovato');
        }
    });

     
}
/* Home Main */

let idLogin = 5;

class Post {
    constructor(userId, title, body) {
        this.userId = userId;
        this.title = title;
        this.body = body;
    }
}



let promisePost = fetch(urlPost).then(res => res.json());

document.addEventListener('DOMContentLoaded', () => {
    let username = localStorage.getItem('username'); //salvo il dato
    profileSet();  
    promisePost.then(json => showPosts(json));
})

function showPosts(post) {
    let postCont = document.querySelector('.post-container');
    if(postCont){
    postCont.innerHTML = "";
    post.forEach(post => {
        let postdiv = document.createElement('div');
        postdiv.classList.add('post');
        postdiv.classList.add('mt-4');
        postdiv.classList.add('d-flex');
        postdiv.classList.add('flex-column');
        let divflex = document.createElement('div');
        divflex.classList.add('d-flex');
        let img = document.createElement('img');
        img.classList.add('profilepic');
        img.src = 'img/Portrait_Placeholder.png';
        let postContent = document.createElement('div');
        postContent.classList.add('post-content');
        postContent.classList.add('ms-3');
        let username = document.createElement('h3');
        username.classList.add('text-white');
        let p = document.createElement('p');
        p.classList.add('text-white');
        p.classList.add('text-justify');
        p.innerHTML = post.body;
        let bottom = document.createElement('div');
        bottom.classList.add('d-flex');
        bottom.classList.add('justify-content-end');
        let commentIcon = document.createElement('i');
        commentIcon.classList.add('fa-regular');
        commentIcon.classList.add('fa-comment');
        let likeIcon = document.createElement('i');
        likeIcon.classList.add('fa-regular');
        likeIcon.classList.add('fa-heart');
        
        fetch(urlUser + post.userId).then(res => res.json()).then(user => {
            username.innerHTML = `${user.name} <span>@${user.username}</span>`;
        })

        postCont.appendChild(postdiv);
        postdiv.appendChild(divflex);
        divflex.appendChild(img);
        divflex.appendChild(postContent);
        postContent.appendChild(username);
        postContent.appendChild(p);
        postdiv.appendChild(bottom);
        bottom.appendChild(commentIcon);
        bottom.appendChild(likeIcon);
    });
};
};

let codeBtn = document.querySelector('.newPost button');


let textarea = document.querySelector('.newPost textarea');

let titlePost = 'nuovo post'; 

function addPost(id) {

    let newPost = new Post(id, titlePost, textarea.value);

    console.log(newPost);

    fetch(urlPost, {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(res => res.json()).then(json => {
        fetch(urlPost).then(res => res.json()).then(posts => showPosts(posts));
    });

};


/* Fine Home Main */





// HOME
let profilesx = document.getElementById('profilesx');
if(profilesx){
profilesx.addEventListener('mouseover', displayprofile);
profilesx.addEventListener('mouseout', unshowprofile);
}

function displayprofile(){
    let profiledrop = document.querySelector('.profiledrop');
    profiledrop.style.display = 'block'
}
function unshowprofile(){
    let profiledrop = document.querySelector('.profiledrop');
    profiledrop.style.display = 'none';
}

function profileSet(){
    let utente = JSON.parse(localStorage.getItem('utente'));
       
        console.log(utente);

        let online = document.querySelector('.online');
        let onlineDot = document.querySelector('.online p');

        let onlineName = document.createElement('p');
        onlineName.id = 'pname';
        onlineName.innerText = `${utente.name}`;
        online.insertBefore(onlineName, onlineDot);

    let dropdown = document.querySelector('#dropdown');

    if (dropdown){
    dropdown.innerHTML = `<li class="list-group-item">${utente.name}</li>
    <li class="list-group-item">${utente.email}</li>
    <li class="list-group-item">${utente.website}</li>`;
    }
}



// PROFILE



function compilaProfilo(){
    let utente = JSON.parse(localStorage.getItem('utente'));    

    let spname = document.querySelector('.spname');
    console.log(spname);
    spname.innerText = utente.name;
    let spemail = document.querySelector('.spemail');
    spemail.innerText = utente.email;
}