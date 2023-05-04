/**
 * сколько ушло времени
 */
expectedByInput.forEach((v, k) => {
  const sum = k[0];
  const numbers = k[1];
  const expected = v;

  const expectation = `Numbers: "${numbers}"; "${sum}" expected to be combined from: "${expected}"`;

  const result = findSumPair(sum, numbers);
  const passed = JSON.stringify(result) === JSON.stringify(expected);

  const status = passed ? "OK -" : "FAIL -";
  const found = passed ? "" : `- but found "${result}"`;
  console.log(status, expectation, found);
})

function findSumPair(sum, numbers) {
  const n1 = numbers.find((n, i) => numbers.indexOf(sum - n, i + 1) >= 0);

  if (n1 !== undefined)
    return [n1, sum - n1];

  return [];
}

