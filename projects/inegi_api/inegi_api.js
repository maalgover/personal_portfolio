


fetch("https://www.inegi.org.mx/app/api/indicadores/desarrolladores/jsonxml/INDICATOR/1002000001/es/070000090002/true/BISE/2.0/f6bb8d22-b237-8aec-5d74-3326aa8f400e?type=json")
    .then(response => response.json())
    .then(data =>{
        console.log("Success:", data);
    })