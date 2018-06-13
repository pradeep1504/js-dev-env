import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();


export function getUsers(){
    return get('users');
}

export function deleteUser(id){
    return del(`users/${id}`);
}

function get(url){
    return fetch(baseUrl+url).then(OnSuccess, OnError);
}
function del(url){
    const request = new Request(baseUrl+url, {
        method: 'DELETE'
    });

    return fetch(baseUrl+url).then(OnSuccess, OnError);
}
function OnSuccess(response)
{
    return response.json();
}
function OnError(error)
{
    console.log(error); // eslint-disable-line no-console
} 