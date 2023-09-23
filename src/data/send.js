// console.log("data", data);

// useEffect(() => {
//   fetch(
//     "https://aifude-45fc6-default-rtdb.firebaseio.com/restaurantes.json",
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     }
//   )
//     .then((res) => res.json())
//     .then(console.log)
//     .catch(console.log);
// }, []);

useEffect(() => {
  (async () => {
    fetch(
      "https://aifude-45fc6-default-rtdb.firebaseio.com/restaurantes.json",
      {
        method: "GET",
        headers: { "Content-Type": "application/json", body: null },
      }
    )
      .then((res) => res.json())
      .then(console.log)
      .catch(console.log);
  })();
}, []);
