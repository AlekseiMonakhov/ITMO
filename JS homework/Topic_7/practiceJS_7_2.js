"use strict";

let Name = "login";
let Value = "stanislav";

document.cookie = encodeURIComponent(Name) + '=' + encodeURIComponent(Value) + "; max-age=1";

console.log(document.cookie);