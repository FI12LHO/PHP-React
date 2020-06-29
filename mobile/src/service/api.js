import Axios from 'axios';

const Api = Axios.create({
    baseURL: 'http://192.168.0.107/EatWell/backend/page'
});

export default Api;