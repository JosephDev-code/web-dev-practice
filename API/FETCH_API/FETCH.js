// this request are in seriews so for the second one to be done, the first has to be resolved. 
// to do that we would not nest the second request in the first.

// fetch("https://swapi.info/api/people/1/")
//     .then((res) => {
//         console.log("RESOLVED", res);
//         return res.json()
//     })
//     .then((data) => {
//         console.log("JSON DONE", data);
//         return fetch("https://swapi.info/api/people/2/")
//     })
//     .then((res) => {
//         console.log("SECOND REQUEST RESOLVED", res);
//         return res.json()
//     })
//     .then((data) => {
//         console.log("2ND JSON DONE", data);
//     })
//     .catch((e) => {
//         console.log("REJECTED", e)
//     }) 

//Using async is way cleaner and easier to read. 
// It is also more efficient than the above method.
const loadStarWarsPeople = async () => {
    try {
        const res = await fetch("https://swapi.info/api/people/1/");
        const data = await res.json();
        console.log(data);
        //T0 make the second request in series, we would nest the data in the async function.
        const res2 = await fetch("https://swapi.info/api/people/2/");
        const data2 = await res2.json();
        console.log(data2);
    } catch (e) { console.log("ERROR", e) }
};
loadStarWarsPeople();
