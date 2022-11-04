import queryStringify from "../utils/queryStringify";

enum METHODS  {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
}

interface IOptions {
    headers?: {};
    method?: METHODS;
    data?: any;
    timeout?: number;
}

export class HTTPTransport {
    get = (url: string, options?: IOptions) => {
        return this.request(url, {...options, method: METHODS.GET});
    };

    post = (url: string, options?: IOptions) => {
        return this.request(url, {...options, method: METHODS.POST});
    };

    put = (url: string, options?: IOptions) => {
        return this.request(url, {...options, method: METHODS.PUT});
    };

    delete = (url: string, options?: IOptions) => {
        return this.request(url, {...options, method: METHODS.DELETE});
    };

    request = (url: string, options: IOptions = {}) => {
        const {headers = {}, method, data} = options;

        return new Promise(function(resolve, reject) {
            if (!method) {
                reject('No method');
                return;
            }

            const xhr = new window.XMLHttpRequest();
            const isGet = method === METHODS.GET;

            xhr.open(
                method,
                isGet && !!data
                    ? `${url}${queryStringify(data)}`
                    : url
            );
            xhr.withCredentials = true;

            Object.keys(headers).forEach(key => {
                xhr.setRequestHeader(key, headers[key]);
            });


            xhr.onload = function() {
                resolve(xhr);
            };

            xhr.onabort = reject;
            xhr.onerror = reject;

            if (isGet || !data) {
                xhr.send();
            } else {
                xhr.send(data);
            }
        });
    };
}
