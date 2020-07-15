function timeConversion(s) {
  let hour = parseInt(s[0] + s[1]);
  if (s[0] + s[1] === "12" && s[8] === "A") {
    hour = "00";
  } else if (s[0] + s[1] === "12" && s[8] === "P") {
    hour = "12";
  } else if (s[8] === "P") {
    hour += 12;
  } else if (hour < 10) {
    hour = "0" + hour;
  }
  return hour + s[2] + s[3] + s[4] + s[5] + s[6] + s[7];
}
