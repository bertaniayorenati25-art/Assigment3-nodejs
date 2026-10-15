function analyzeNumber(number) {
  if (number <= 0) {
    console.log("Masukkan bilangan bulat positif.");
    return;
  }

  let temp = number;
  let count = 0;
  let sum = 0;
  let reversed = 0;

  while (temp > 0) {
    const digit = temp % 10;
    count++;
    sum += digit;
    reversed = reversed * 10 + digit;
    temp = Math.floor(temp / 10);
  }

  const isPalindrome = number === reversed;

  console.log(`=== Analisis Angka: ${number} ===`);
  console.log(`Banyaknya digit : ${count}`);
  console.log(`Jumlah digit    : ${sum}`);
  console.log(`Angka dibalik   : ${reversed}`);
  console.log(`Palindrom?      : ${isPalindrome ? "Ya" : "Tidak"}`);
}

analyzeNumber(12321);