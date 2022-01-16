
let last = document.querySelector('.last');
let first = document.querySelector('.first');
let email = document.querySelector('.email');
let age = document.querySelector('.age');
let city = document.querySelector('.city');
let avatar = document.querySelector('.avatar');
let button = document.querySelector('button');

button.addEventListener('click', function () {

    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(userInfo => {
            last.innerText = userInfo.results[0].name.first;
            first.innerText = userInfo.results[0].name.last;
            email.innerText = userInfo.results[0].email;
            age.innerText = userInfo.results[0].dob.age;
            city.innerText = userInfo.results[0].location.city;
            avatar.setAttribute('src', userInfo.results[0].picture.large)

                  
        });

});