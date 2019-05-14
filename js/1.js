
async function anyfilm() { 
    const req = fetch('https://swapi.co/api/films/');

    const resp = await req;
    

    console.log( resp);


}

anyfilm()