import axios from 'axios';

const config = {
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
}

export function getLoginRedirect() {
    return new Promise((resolve, reject) => {
        axios
          .get('/')
          .then(res => resolve(res.data), err => reject(err));
      });
}