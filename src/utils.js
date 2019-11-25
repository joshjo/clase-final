export function pad(num, size) {
  var s = num+"";
  while (s.length < size) s = "0" + s;
  return s;
}



export function formatTime(value) {
  const minutes = Math.floor(value / 60);
  const seconds = value % 60;
  return `${pad(minutes, 2)}:${pad(seconds, 2)}`;
}
