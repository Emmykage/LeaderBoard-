const url = "https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/";

// function to get ID 
async function getID(){
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({name: "pacman"     
        }),
        headers: {
            'content-type': 'application/json; charset=UTF-8'
        }
    })
    const APID = await response.json();
    return APID
}

// console.log(getID());


// async function Mydata(){
//     const id = await getID()
//     console.log(id);
// }
// Mydata();
export default getID