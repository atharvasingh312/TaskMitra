let button1 = document.querySelector(".summary #input");
let button2 = document.querySelector(".summary #output");
let summaryInput = document.querySelector("#summary .input");
let summaryOutput = document.querySelector("#summary .output");
let  summaryOutputResult=document.querySelector(".summary-result");

button2.addEventListener("click", (event) => {
    event.preventDefault();
    document.getElementById('summary-input').value = ""; 
    summaryInput.style.display = "block";
    summaryOutput.style.display = "none";
});

button1.addEventListener("click", async (event) => {
    event.preventDefault();
    let inputData = document.getElementById('summary-input').value;
    console.log(inputData);
    const url = 'https://open-ai21.p.rapidapi.com/summary';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': 'cc766fd634mshebda32eec51a04bp1f5a17jsn3059cfeabfb1',
            'X-RapidAPI-Host': 'open-ai21.p.rapidapi.com'
        },
        body: JSON.stringify({ text: inputData })
    };
    try {
        const response = await fetch(url, options);
        const resultText = await response.text();
        const result = JSON.parse(resultText); 
        summaryOutputResult.innerText = result.result;
        await navigator.clipboard.writeText(result.result);
        console.log('Text copied to clipboard:', result.result);
    } catch (error) {
        console.error(error);
    }
    summaryInput.style.display = "none";
    summaryOutput.style.display = "block";
});
