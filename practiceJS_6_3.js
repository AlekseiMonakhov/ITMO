function getForm() {
    let result = {};

    result['name'] = document.getElementById('name').value;
    result['surname'] = document.getElementById('surname').value;
    result['age'] = document.getElementById('age').value;

    let sex = document.getElementsByName('sex'); 

    let itemSex = {};
    let index = 0;
    sex.forEach((item) => {
        if (item.checked == true) {
            itemSex[index] = {};           
            itemSex[index]['value'] = item.value;
            itemSex[index++]['status'] = 'checked';
        } else {
            itemSex[index] = {};   
            itemSex[index]['value'] = item.value;
            itemSex[index++]['status'] = 'false';
        }
    });
    result['sex'] = itemSex;
   
    return result
}