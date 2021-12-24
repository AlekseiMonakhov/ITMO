"use strict";

let Name = "login";
let Value = "stanislav";

document.cookie = encodeURIComponent(Name) + '=' + encodeURIComponent(Value);

console.log(document.cookie);