function solution(D) {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const result = new Array(7).fill(null);

  for (const dateStr in D) {
    const date = new Date(dateStr);
    const jsDay = date.getDay(); // Sun=0 ... Sat=6
    const index = (jsDay + 6) % 7; // Convert to Mon=0 ... Sun=6

    result[index] = (result[index] ?? 0) + D[dateStr];
  }

  // Fill missing days with mean of previous and next
  for (let i = 0; i < 7; i++) {
    if (result[i] === null) {
      let prev = i - 1;
      let next = i + 1;

      while (result[prev] === null) prev--;
      while (result[next] === null) next++;

      result[i] = Math.floor((result[prev] + result[next]) / 2);
    }
  }

  const output = {};
  for (let i = 0; i < 7; i++) {
    output[days[i]] = result[i];
  }

  return output;
}

module.exports = solution;
