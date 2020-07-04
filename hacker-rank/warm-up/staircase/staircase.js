function staircase(n) {
  let spaces = n - 1;
  let hashtags = 1;
  while (spaces >= 0) {
    console.log(" ".repeat(spaces) + "#".repeat(hashtags))
    spaces--;
    hashtags++;
  }
}
