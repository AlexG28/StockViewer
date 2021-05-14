//TODO:
//using fetch contact with the back end


async function displayDefaults(){
    const tableBody = document.getElementById('defaultTable');
    let dataHtml = ``;
    
    var listOfStocks = await fetch ('http://localhost:3000/getQuoteRoute/tech',{
        //method: 'GET'
    });

    const list = await listOfStocks.json();
    console.log(list);
    for (i = 0; i < list[0].Stocks.length; i++){     
        dataHtml += `
        <thread>
            <tr>
                <th>${list[0].Stocks[i]}</th>
            </tr>
        </thread>   
        `;
       
    }   
    
    tableBody.innerHTML = dataHtml;
}

displayDefaults();
