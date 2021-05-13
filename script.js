//TODO:
//using fetch contact with the back end


async function displayDefaults(){

    const tableBody = document.getElementById('defaultTable');
    let dataHtml = ``;
    const data = {"StockCategory" : "tech"};
    
    let listOfStocks = await fetch ('http://localhost:3000/getQuoteRoute/kdjf',
        {
            //method: 'GET',
            body: JSON.stringify(data)
        }
    );

    const list = await listOfStocks.json();

    for (i = 0; i < list.Stocks.length; i++){
        dataHtml += `
        <thread>
            <tr>
                <th>${list.Stocks[i]}</th>
            </tr>
        </thread>   
        `;
    }

    tableBody.innerHTML = dataHtml;
}


displayDefaults();
