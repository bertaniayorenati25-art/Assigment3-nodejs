const scores = [80, 65, 90, 75, 50, 88, 92, 70, 60, 85];

let totalSum = 0;
let passedCount = 0;
let failedCount = 0;
let highest = scores[0];
let lowest = scores[0];

for (let i = 0; i < scores.length; i++) {
  const score = scores[i];
  totalSum += score;

  if (score >= 75) {
    passedCount++;
  } else {
    failedCount++;
  }

  if (score > highest) highest = score;
  if (score < lowest) lowest = score;
}

const average = totalSum / scores.length;

console.log("=== Laporan Nilai Siswa ===");
console.log(`Daftar Nilai    : ${scores.join(", ")}`);
console.log(`Rata-rata Nilai : ${average.toFixed(2)}`);
console.log(`Jumlah Lulus    : ${passedCount}`);
console.log(`Jumlah Gagal    : ${failedCount}`);
console.log(`Nilai Tertinggi : ${highest}`);
console.log(`Nilai Terendah  : ${lowest}`);
