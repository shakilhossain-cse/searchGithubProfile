const input = document.getElementById('search-input');
const btn = document.getElementById('search-btn');
const info = document.getElementById('info');
const logo = document.getElementById('logo');
let warning = document.getElementById('warning-text');
warning.innerHTML = ` <h4>Please search your github profile</h4>`;

btn.addEventListener('click',()=>{
    if (input.value == '') {
        
    }else{
        const url = `https://api.github.com/users/${input.value}`;
        fetch(url)
        .then(res => res.json())
        .then(data => displayInfo(data));
    }
});

const displayInfo = data => {

    if (data.site_admin == null ) {
        warning.innerHTML = ` <h4>Your Profile is Not found</h4>`;
    }else{
        warning.style.display = 'none';
        info.innerHTML = `
        <h4>Name      : <span class="primary">${data.name}</span></h4>
        <h4>Bio      : <span class="primary">${data.bio}</span></h4>
        <h4>UserName      : <span class="primary">${data.login}</span></h4>
        <h4>Followers      : <span class="primary">${data.followers}</span></h4>
        `;
        logo.innerHTML =`<img src="${data.avatar_url}" alt="">`
        ;
    }

}