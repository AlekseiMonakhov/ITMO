function buildNames(listNames, parrentNode) {
    let root = document.getElementsByClassName(parrentNode)[0];
    if (root !== undefined) {
        listNames.forEach(name => {
            let li = document.createElement('li');
            li.innerText = name;
            root.append(li);
        });
        return true;
    } else {
        return false;
    }
}

buildNames(['Маша','Паша','Гриша','Даша'], 'list')
