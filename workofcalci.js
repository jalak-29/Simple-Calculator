
function enter(j) {
    let v = document.getElementById("input");
    v.value = v.value+j;
}

function del() {
    let v = document.getElementById("input");
    v.value = '';
  }

function res() {
    let v = document.getElementById("input");
    v.value = eval(input.value);
}

function back() {
    let v = document.getElementById("input");
    v.value = v.value.slice(0,-1);
}
