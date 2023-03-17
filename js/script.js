const form = document.querySelector("#form-habits");
const nlwSetup = new NLWSetup(form);
const buttonAdd = document.querySelector("header .add");
const buttonRemove = document.querySelector("header .remove");
const marking = document.querySelector(".days");


buttonAdd.addEventListener("click", add);
form.addEventListener("change", save);
buttonRemove.addEventListener("click", remove);

function add() {
    const today = new Date().toLocaleDateString('pt-br').slice(0, -5);
    const dayExists = nlwSetup.dayExists(today);
    console.log(dayExists)
    if(dayExists) {
        alert("Dia já incluso 🔴");
        return;
    }

    alert("Dia adicionado com sucesso ✅");
    nlwSetup.addDay(today);
}

function save() {
    window.localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data));
}

function remove() {
    if(window.localStorage.length != 0) {
        window.localStorage.removeItem('NLWSetup@habits', JSON.stringify(nlwSetup.data));
        alert("Dados removidos com sucesso 🚮");
        marking.style.display = "none";
        document.location.reload();
    }

    else {
        alert("Você não tem dados salvos 💾");
        return;
    }
}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {};
nlwSetup.setData(data);
nlwSetup.load();