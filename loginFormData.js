let User = document.getElementById("userData");
let Pass = document.getElementById("userPass");
let submit = document.getElementById("buttonSubmitForm");

    console.log(User.value);
    console.log(Pass.value);
    window.location.assign = "hall.html";

function buttonSubmitForm0() {
    if (User.value == User.value && Pass.value == Pass.value) {
        const nama = User.value;
        console.log(User.value);
        console.log(Pass.value);
        alert(`Halo ${nama}!, Selamat Datang`);
    }
    else {
        alert('Fill The Input!');
    }
}