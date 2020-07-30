function alternatingSums(a) {
  const team = [];
  let team1 = 0;
  let team2 = 0;
  for (let i = 0; i < a.length; i += 2) {
    team1 += a[i];
  }
  for (let j = 1; j < a.length; j += 2) {
    team2 += a[j];
  }
  team.push(team1, team2);
  return team;
}

function alternatingSums2(a) {
  const team = [];
  let team1 = 0;
  let team2 = 0;
  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      team1 += a[i];
    } else {
      team2 += a[i];
    }
  }
  team.push(team1, team2);
  return team;
}
