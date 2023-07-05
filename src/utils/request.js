import axios from 'axios'
const service = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? 'https://flashcash4test.com' : '/api', // api 的 base_url
    timeout: 60000 // 请求超时时间
})

export default service;