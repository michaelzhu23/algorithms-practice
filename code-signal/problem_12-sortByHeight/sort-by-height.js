function sortByHeight(a) {
  const treeIndexes = [];
  const people = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] === -1) {
      treeIndexes.push(i);
    } else {
      people.push(a[i]);
    }
  }

  people.sort((a, b) => a - b);

  for (let j = 0; j < treeIndexes.length; j++) {
    people.splice(treeIndexes[j], 0, -1);
  }
  return people;
}
