//TODO:
//using fetch contact with the back end


async function displayDefaults(){
    let tickers = "";
    let tableBody = document.getElementById('defaultTable');
    let paragraphBody = document.getElementById("div1");
    let dataHtml = ``;
    
    var listOfStocks = await fetch ('http://localhost:3000/getQuoteRoute/tech',{
        //method: 'GET'
        //body: JSON.stringify(data)
    });

    const list = await listOfStocks.json();
    console.log(list);
    for (i = 0; i < list[0].Stocks.length; i++){
        tickers += list[0].Stocks[i] + " ";
        dataHtml += `
        <thread>
            <tr>
                <th>${list[0].Stocks[i]}</th>
            </tr>
        </thread>   
        `;
       
    }
    let tickers1 = `
        <p> 
            ${tickers}
        </p>
    
    `;
    paragraphBody.innerHTML = tickers1;
    tableBody.innerHTML = dataHtml;
}
/*
document.ready(function () {
    displayDefaults();
});

*/

displayDefaults();
