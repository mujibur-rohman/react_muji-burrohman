const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const message = document.getElementById('message');

const button = document.getElementById('kirim');

button.addEventListener('click', (e) => {
  e.preventDefault();
  if (firstName.value && lastName.value && email.value && message.value) {
    alert(`Nama : ${firstName.value} ${lastName.value}
Email : ${email.value}
Pesan : ${message.value}
`);
  } else {
    alert('Lengkapi Form Terlebih Dahulu');
  }
});

// console.log(fullname);
