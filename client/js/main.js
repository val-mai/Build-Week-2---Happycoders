const usersAPI = 'http://localhost:3000/api/users/';

function userProfile(id) {
    fetch(usersAPI+id).then(response => response.json()).then(json => {
        console.log(json);
    })
}