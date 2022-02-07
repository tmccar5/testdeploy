const API = {
    getRecomendations: function() {
        console.log('i am outside timeout!')
        return new Promise(resolve => setTimeout(function() {
            resolve(['www.vidUrl.com', 'www.recomendation.com'])
        }, 1000));
        // setTimeout(function()  { 
        //     console.log('i am in set timeout!')
        //     return ['www.vidUrl.com', 'www.recomendation.com']
        // },1000)
    }
}

export default API;