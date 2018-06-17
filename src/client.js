export default (function () {
    const client = {}
    
    client.fetchProject = function (lang) {
        const url = `https://api.github.com/search/repositories?q=language:${lang}&sort=stars`
        return fetch(url).then(function (response) {
            if (response.status >=400) {
                throw new Error('fetch projects error:' + response.status);
            }
            return response.json()
        })
    }

    return client;
})()