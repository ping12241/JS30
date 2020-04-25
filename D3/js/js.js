variable();

function variable() {
    var inputs = document.querySelectorAll(".item input");
    inputs.forEach(input => input.addEventListener("change", handleUpdate)); //每一個input加上監聽
    inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));
}

function handleUpdate() {
    var unit = this.dataset.sizing || ''; //單位
    document.documentElement.style.setProperty(`--${this.id}`, this.value + unit);
    // documentElement 傳回目前根元素
}