scr = [];
b = [];

const dsp = document.querySelector(".display2");
const numkey = document.querySelectorAll(".num-key");


// A code that takes the input from nember keys and displays them on the screen
numkey.forEach(function (numkey) {
  numkey.addEventListener("click", () => {
    scr.push(numkey.innerHTML);
    const scrc = parseInt(scr.join(""), 10);
    dsp.textContent = scrc;
  });
});

// function that adds two number a and b
function add(a, b) {
  return a + b;
}

// a code that runs the addition operation
// here make it store the value of b after storing the previous input as value of A
const addd = document.getElementById("add");
addd.addEventListener("click", () => {
  a = parseInt(scr.join(""), 10);
  scr = []
  b = parseInt(scr.join(""), 10);
  dsp.textContent = ''
  console.log(a);
  console.log(b)
  
});

const eql = document.getElementById("equals");
eql.addEventListener("click", () => {
  dsp.textContent = add(a, b);
});

const clr = document.getElementById('clear');
clr.addEventListener("click", () => {
    dsp.textContent = ''
    scr = []
    b = []
  });