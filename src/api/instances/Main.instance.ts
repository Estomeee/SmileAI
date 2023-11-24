import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://51.250.123.14:8081/api/',
    timeout: 1000,
    headers: { 'sign-url': 'foobar' } //
});

export const APIPoints = {
    userCreate: 'client/vk/create',
    getUser: 'client/user_data',
    getBucket: '/cart/cart/',
    hints: 'recommendations/tooth_recommendations',
    categories: 'products/vk/category'

}

export default instance

//TODO сделать словарь с путями