import axios from 'axios';

export const _axios = axios.create({
    baseURL: process.env.HOST
});

export const bitcon = {
    trandes: () => _axios.get('simple/supported_vs_currencies')
}