

function sendApiRequest(request, options) {
    return (fetch(request, options).then(response => {
        if (!response.ok) {
            console.log('response',response);
            throw response;
            
        }
        return response.json();
        const error = (data && data.message) || response.status;
          return Promise.reject(error);
    }));
}

function createRequestOptions(method = 'get', body = {}) {
    let options = {'method': method};

    if (['post', 'put'].includes(options.method)) {
        options['headers'] = {'Content-Type': 'application/json'};
        options['body'] = JSON.stringify(body);
    }
    if(['delete'].includes(options.method)){
        options['headers']={'Content-Type',Content-Length,Server,Date,access-control-allow-methods,access-control-allow-origin};
    }

    return options;
}

function hasParam(request, key, value) {
    if (value != null && value !== '') {
        request.searchParams.append(key, value);
    }
}

export const Api = (url, params = {}, options) => {
    let request = new URL(url, 'http://localhost:5000');

    Object.keys(params)
        .forEach(
            key => hasParam(request, key, params[key])
        );

    return sendApiRequest(request, options);
};

export const ApiGet = (url, params = {}) => {
    return Api(url, params, createRequestOptions('get'));
};

export const ApiPost = (url, body) => {
    return Api(url, {}, createRequestOptions('post', body));
};

export const ApiPut = (url, body = {}) => {
    return Api(url, {}, createRequestOptions('put', body));
};

export const ApiDelete = (url) => {
    return Api(url, {}, createRequestOptions('delete'));
};

export default Api;