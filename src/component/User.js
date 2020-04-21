// import axios from 'axios';
import "@babel/polyfill";

const User = async function() {

  // const res = await axios.get('https://randomuser.me/api');
  let template = '';
  let user;

  await fetch('https://randomuser.me/api')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      // console.log(JSON.stringify(data));
      user = data.results[0];

      console.log(user)
      template = `
        <div class="card">
          <img src="${user.picture.large}" />
          <div class="card-body">
            <h1>${user.name.first} ${user.name.last}</h1>
            <ul>
              <li>${user.email}</li>
              <li>${user.phone}</li>
              <li>${user.location}</li>
            </ul>
          </div>  
        </div>
      `;

    });
  
    console.log(template)
    return template;
}

export default User;