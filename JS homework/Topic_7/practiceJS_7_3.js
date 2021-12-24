"use strict";

let getCookies = () => {
    let result = [];
    let cookies = document.cookie.split('; ');
   
    cookies.forEach(cookie => {
        let tmp = cookie.split("=");
        result.push({ name: tmp[0], value: tmp[1] });
    });
    
    return result;
}

console.log(getCookies());