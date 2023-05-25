const url = 'https://company-service.fly.dev/'
import axios from 'axios'

export async function createCompany(name, owner) {
    axios.post(url+'company', {
        name:name, owner:owner
      }).then((response) => {
        // console.log(response);
        // response.json()
    });
}