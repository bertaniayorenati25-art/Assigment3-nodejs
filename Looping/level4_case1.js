function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function analyzePrimes(N) {
  console.log(`=== Analisis Bilangan Prima (2 hingga ${N}) ===`);

   const checkN = isPrime(N);
   console.log(`Apakah ${N} bilangan prima? ${checkN ? "Ya" : "Tidak"}`);
    
   const primes = [];
   let sum = 0;

   for (let i = 2; i <= N; i++) {
    if (isPrime(i)) {
      primes.push(i);
      sum += i;
    }
  }
  
  console.log(`Daftar Bilangan Prima : ${primes.join(", ")}`);
  console.log(`Banyaknya Prima       : ${primes.length}`);
  console.log(`Jumlah Total (Sum)    : ${sum}`);
}

analyzePrimes(20);
