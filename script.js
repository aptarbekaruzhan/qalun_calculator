function getResult() {
    let education = document.getElementById("education");
    let networth = document.getElementById("networth");
    let skill = document.getElementsByClassName('skill');
    let result = document.getElementById('result');
    let btnShow = document.querySelector("button");
    let res;
    res = 500;
    res *= education.value;
    res *= networth.value;
    for (i = 0; i < 4; i++) {
        if (skill[i].checked === true) {
            res += parseInt(skill[i].value);
        }
    }
    for (i = 1; i < 4; i++) {
        let reputation = 'reputation' + i;
        let age = 'age' + i;
        let rep = document.getElementById(reputation);
        let ages = document.getElementById(age);
        if (rep.checked === true) {
            if (rep.value !== "200") {
                res *= Number(rep.value);
            } else {
                res -= Number(rep.value);
            }
        }
        if (ages.checked === true) {
            res *= Number(rep.value);
        }
    }
    result.innerText = `Groom's price $` + res;
}
