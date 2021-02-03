import config from '../config'
import TokenService from './token-service'

const LanguageApiService = {

    getLanguageAndWords() {
        return fetch(`${config.API_ENDPOINT}/language`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
            },
        })
        .then(res => {
            if(!res.ok) {
                return res.json().then(e => {
                    Promise.reject(e)
                })
            }
            else return res.json()
        })
    },

    getCurrentWord() {
        return fetch(`${config.API_ENDPOINT}/language/head`, {
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
        .then(res => {
            if(!res.ok) {
                return res.json().then(e => {
                    Promise.reject(e)
                })
            }
            else{
                return res.json()
            }
        })
    },

    handleSubmitGuess(guess) {
        return fetch(`${config.API_ENDPOINT}/language/guess`, {
            method: 'POST',
            headers: { 'authorization': `bearer ${TokenService.getAuthToken()}`,
                        'content-type': 'application/json' },
            body: JSON.stringify({ guess })
        })
        .then(res => {
            if(!res.ok) {
                return res.json().then(e => {
                    Promise.reject(e)
                })
            } else{
                return res.json()
            }
        })
    }
}

export default LanguageApiService