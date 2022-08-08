import colors from 'colors';

function getPrimes(num: number) {
  const seive = [];
  const primes = [];

  for (let i = 2; i <= num; i++) {
    if (!seive[i]) {
      primes.push(i);
      for (let j = i * i; j <= num; j += i) {
        seive[j] = true;
      }
    }
  }

  for (let i = 0; i < primes.length; i += 3) {
    console.log(colors.green(`${primes[i]}`));
    if (primes[i + 1]) {
      console.log(colors.yellow(`${primes[i + 1]}`));
      if (primes[i + 2]) {
        console.log(colors.red(`${primes[i + 2]}`));
      }
    }
  }
  return primes;
}

getPrimes(888);
