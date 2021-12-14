import axios from 'axios'



export const onRegister = async (data) => {
    console.log('Data', data);
    const requestConfig = {
        method: 'post',
        url: 'http://localhost:3000/auth/signup',
        data: data
    }

    try {
        const response = await axios.request(requestConfig);
        console.log(response);
        return response;
    } catch (e) {
        console.log(e.response);
        return e;
    }
}

export const onLogin = async (data) => {
    const requestConfig = {
        method: 'post',
        url: 'http://localhost:3000/auth/signIn',
        data:data
    }
    console.log('Loggeando al server en puerto');
    return axios.request(requestConfig);


}