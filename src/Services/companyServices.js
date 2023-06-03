import axios from 'axios'

const url = 'https://company-service.fly.dev/'

export async function createCompany(name, owner) {
    console.log(name, owner)
    axios.post(url+'company', {
        name:name, owner:owner
      }).then((response) => {
        // console.log(response);
        // response.json()
    });
}

export async function getCompanyByOwner(user_id) {

    return await fetch(url+'company/'+user_id).then((response) => response.json());
    
}