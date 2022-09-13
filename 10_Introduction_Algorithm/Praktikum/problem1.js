const primes = (n) => {
  let factor = 0;
  if (n <= 1) console.log('Bukan Bilangan Prima');

  for (let index = 1; index <= n; index++) {
    if (n % index === 0) factor++;
  }

  factor === 2
    ? console.log('Bilangan Prima')
    : console.log('Bukan Bilangan Prima');
};

// Test Case
primes(3);
primes(7);
primes(10);
