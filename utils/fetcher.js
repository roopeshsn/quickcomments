const fetcher = (url) => fetch(url).then((res) => res.json());

// const fetcher = async (url, uid) => {
//   await fetch(url, {
//     method: "GET",
//     headers: new Headers({ "Content-Type": "application/json", uid }),
//     credentials: "same-origin",
//   }).then((res) => {
//     return res.json();
//   });
// };

export default fetcher;
