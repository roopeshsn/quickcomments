export function formatSecAndNanoSec({ seconds, nanoseconds }) {
  const formattedDateAndTime = new Date(seconds * 1000 + nanoseconds / 1000000);
  return formattedDateAndTime.toString();
}
