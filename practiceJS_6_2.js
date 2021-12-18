function getForm() {
    let result = {};
    let polInputs = document.getElementsByName('pol'); 

    polInputs.forEach((item) => {
        if (item.checked == true) {
            result[item.value] = { status : 'checked' };
        } else {
            result[item.value] = { status : 'false' };
        }
    });

    return result;
}
let test = getForm();
console.log(test)