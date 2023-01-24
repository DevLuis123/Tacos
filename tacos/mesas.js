const btn = document.querySelectorAll('.btnMain');

const mesas = document.querySelector('.mesas');

console.log(mesas.textContent);

for (let i = 0; i <= btn.length; i++) {
  btn[i].addEventListener('click', function () {
    mesas.textContent = `Mesa ${i + 1}`;
  });
}
