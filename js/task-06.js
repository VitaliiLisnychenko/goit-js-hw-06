// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.

const validEl = document.querySelector("#validation-input");
const validLengthEl = validEl.dataset.length;

validEl.addEventListener("blur", onBlur);

function onBlur(event) {
  if (validEl.value.length === Number(validLengthEl)) {
     validEl.classList.add("valid");
     validEl.classList.remove("invalid");
  } else {
    validEl.classList.add("invalid");
  }
}
