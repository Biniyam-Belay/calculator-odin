const dsp = document.querySelector(".display2")

let one = document.getElementById("1");
one.addEventListener('click', () => {
    console.log("One")
    dsp.textContent = '1'
})