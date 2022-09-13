const button = (n, toggle = false) => {
  let factor = 0;
  let switcher = toggle;

  for (let index = 1; index <= n; index++) {
    if (n % index === 0) {
      toggle = !toggle;
      factor++;
      if (factor % 2 === 0) switcher = !toggle;
    }
  }

  if (toggle) {
    console.log('Lampu Menyala');
  } else {
    console.log('Lampu Mati');
  }
};

// Test case
button(5);
button(4);
