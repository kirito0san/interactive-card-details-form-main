let nameN = document.querySelector("#name");
let CardN = document.querySelector("#CardN");
let inpM = document.querySelector("#inpM");
let inpY = document.querySelector("#inpY");
let cvc = document.getElementById("cvc");
let MName = document.querySelector(".MName");
let Mdate = document.querySelector(".Mdate");
let Mcvcv = document.querySelector(".Mcvc");
let Mcard = document.querySelector(".Mcard");
let btnOne = document.querySelector(".form button");
nameN.nextElementSibling.style.cssText = "display:none";
nameN.addEventListener("input", () => {
    MName.innerHTML = nameN.value;
    nameN.style.borderColor = ``; //step one
    if (nameN.value == ``) {
        co(nameN); //step two
        nameN.nextElementSibling.innerHTML = "cannot be empty";
        nameN.nextElementSibling.style.cssText =
            "display:block; color:red;  font-size: 13px; position:absolute; top:75px;";
    } else if (!Array.from(nameN.value).every((e) => /([a-zA-z]|\s)/gi.test(e))) {
        color(nameN)
        nameN.nextElementSibling.innerHTML = "provide a valid name";
        nameN.nextElementSibling.style.cssText =
            "display:block; color:red;  font-size: 13px; position:absolute; top:75px;";
    } else {
        NColor(nameN)
        nameN.nextElementSibling.innerHTML = ``;
        nameN.nextElementSibling.style.cssText = "display:none";
    }
});
let mmyy = document.querySelector(`.mmyy`);
inpM.addEventListener("input", () => {
    Mdate.innerHTML = `${inpM.value}/${inpY.value}`;
    inpM.style.borderColor = ``; //step one
    if (inpM.value == ``) {
        co(inpM); //step two
        mmyy.children[0].lastElementChild.innerHTML = `cannot be empty`;
        mmyy.children[0].lastElementChild.style.cssText =
            "display:block;color:red;  font-size: 13px; position:absolute; top:75px;";
    } else if (
        Array.from(inpM.value).some((e) => /[a-zA-z]/gi.test(e)) ||
        Number(inpM.value) > 12
    ) {
        color(inpM);
        mmyy.children[0].lastElementChild.innerHTML = `provide a valid MM`
        mmyy.children[0].lastElementChild.style.cssText =
            "display:block;color:red;  font-size: 13px; position:absolute; top:75px;";
    } else {
        mmyy.children[0].lastElementChild.innerHTML = ``;
        mmyy.children[0].lastElementChild.style.cssText = "display:none";
    }
});
// inpY.nextElementSibling.style.cssText = "display:none";
inpY.addEventListener("input", () => {
    Mdate.innerHTML = `${inpM.value}/${inpY.value}`;
    inpY.style.borderColor = ``; //step one
    if (inpY.value == ``) {
        co(inpY);
        mmyy.children[1].lastElementChild.innerHTML = `cannot be empty`;
        mmyy.children[1].lastElementChild.style.cssText =
            "display:block;color:red;  font-size: 13px; position:absolute; top:75px;";
    } else if (Array.from(inpY.value).some((e) => /[a-zA-z]/gi.test(e))) {
        color(inpY); //step two
        mmyy.children[1].lastElementChild.innerHTML = `provide a valid MM`
        mmyy.children[1].lastElementChild.style.cssText =
            "display:block;color:red;  font-size: 13px; position:absolute; top:75px;";
    } else {
        mmyy.children[1].lastElementChild.innerHTML = ``;
        mmyy.children[1].lastElementChild.style.cssText = "display:none";
    }
});



cvc.nextElementSibling.style.cssText = "display:none";
cvc.addEventListener("input", () => {
    Mcvcv.innerHTML = `${cvc.value}`;
    if (cvc.value == ``) {
        color(cvc)
        cvc.nextElementSibling.innerHTML = `cannot be empty`;
        cvc.nextElementSibling.style.cssText =
            "display:block;color:red;  font-size: 13px; position:absolute; top:75px;";
    } else if (Array.from(cvc.value).some((e) => /[a-zA-z]/gi.test(e))) {
        color(cvc)
        cvc.nextElementSibling.innerHTML = `provide a valid cvc`;
        cvc.nextElementSibling.style.cssText =
            "display:block;color:red;  font-size: 13px; position:absolute; top:75px;";
    } else {
        NColor(cvc)
        cvc.nextElementSibling.innerHTML = ``;
        cvc.nextElementSibling.style.cssText = "display:none";
    }
});
CardN.nextElementSibling.style.cssText = "display:none";
CardN.addEventListener("input", (e) => {
    if (CardN.value == ``) {
        CardN.nextElementSibling.innerHTML = `cannot be empty`;
        CardN.nextElementSibling.style.cssText =
            "display:block;color:red;  font-size: 13px; position:absolute; top:75px;";
    } else if (
        !Array.from(CardN.value).every((e) => Number.isInteger(Number(e)))
    ) {
        color(CardN);
        CardN.nextElementSibling.innerHTML = `wrong format, numbers only`;
        CardN.nextElementSibling.style.cssText =
            "display:block;color:red;  font-size: 13px; position:absolute; top:75px;";
    } else {
        NColor(CardN);
        CardN.nextElementSibling.innerHTML = ``;
        CardN.nextElementSibling.style.cssText = "display:none";
    }
    Mcard.innerHTML = `${CardN.value.match(/\d{4}/gi).join(`  `)}`;
});

function color(name) {
    name.style.borderColor = `red`;
}
function NColor(name) {
    name.style.borderColor = ``;
}
function co(name) {
    name.value == `` ? color(name) : NColor(name);
}

let one = document.querySelectorAll(".one");
let send = document.querySelector(`.send`);
btnOne.addEventListener("click", () => {
    if (
        nameN.value == `` ||
        inpM.value == `` ||
        inpY.value == `` ||
        CardN.value == `` ||
        cvc.value == ``
    ) {
        co(CardN);
        co(nameN);
        co(inpY);
        co(inpM);
        co(cvc);
        if (CardN.value.length < 16) {
            color(CardN)
            CardN.nextElementSibling.style.cssText =
                "display:block;color:red;  font-size: 13px; position:absolute; top:75px;"
            CardN.nextElementSibling.innerHTML = "provide a valid card number   "
        } else {
            NColor(CardN)
            CardN.nextElementSibling.style.cssText = "display:none"
        }
        if (nameN.value == ``) {
            co(nameN); //step two
            nameN.nextElementSibling.innerHTML = "cannot be empty";
            nameN.nextElementSibling.style.cssText =
                "display:block; color:red;  font-size: 13px; position:absolute; top:75px;";
        } else if (!Array.from(nameN.value).every((e) => /([a-zA-z]|\s)/gi.test(e))) {
            nameN.nextElementSibling.innerHTML = "provide a valid name";
            nameN.nextElementSibling.style.cssText =
                "display:block; color:red;  font-size: 13px; position:absolute; top:75px;";
        } else {
            nameN.nextElementSibling.innerHTML = ``;
            nameN.nextElementSibling.style.cssText = "display:none";
        }
        if (inpM.value == ``) {
            mmyy.children[0].lastElementChild.innerHTML = `cannot be empty`
            mmyy.children[0].lastElementChild.style.cssText =
                "display:block; color:red;position: absolute;top: 75px;  font-size: 13px;  "
        }
        if (inpY.value == ``) {
            mmyy.children[1].lastElementChild.innerHTML = `cannot be empty`
            mmyy.children[1].lastElementChild.style.cssText =
                "display:block; color:red;  font-size: 13px;  position: absolute;top: 75px; "
        }
        if (cvc.value == ``) {
            cvc.nextElementSibling.innerHTML = `cannot be empty`;
            cvc.nextElementSibling.style.cssText =
                "display:block;color:red;  font-size: 13px; position:absolute; top:75px;";
        }
        send.style.display = `none`;
        form.style.display = `flex`;
    } else {
        form.style.display = `none`;
        send.style.display = `flex`;
    }
});
let form = document.querySelector(`.form`)