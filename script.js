const passwordLength = document.getElementById("passwordLength");
const spanValue = document.querySelector(".range > span");
const inputs = document.querySelectorAll('input[type="checkbox"]');
const btn = document.querySelector("button");
const form = document.querySelector("form");
const majuscule = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const minuscule = majuscule.toLowerCase();
const number = "0987654321";
const symbol = "?./:!%*-&_@)]=+";
let Data = [];

const LengthPassword = () => {
  passwordLength.addEventListener("input", (e) => {
    spanValue.textContent = e.target.value;
    let valueLength = parseInt(passwordLength.value);
    console.log(valueLength);
  });
};
LengthPassword();

const DataOfPassword = () => {
  inputs.forEach((input) =>
    input.addEventListener("click", (e) => {
      if (e.target.id == "majuscule") {
        Data.push(...majuscule);
      } else if (e.target.id == "minuscule") {
        Data.push(...minuscule);
      } else if (e.target.id == "number") {
        Data.push(...number);
      } else if (e.target.id == "symbol") {
        Data.push(...symbol);
      }
      console.log(Data);
    })
  );
};
DataOfPassword();

const submit = () => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    for (let i = 0; i < parseInt(passwordLength); i++) {
      console.log(Data[Math.floor(Math.random[Data.length])]);
    }
  });
};
submit();

// afficher n * le nombre de input range
