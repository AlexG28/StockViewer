//TODO:
//using fetch contact with the back end


async function displayDefaults(){
    const tableBody = document.getElementById('defaultTable');
    let dataHtml = `
    
    <tr>
        <th>Tech</th>
        <th>Ticker</th>
        <th>Price</th>
        <th>Change</th>
        <th>% Change</th>
    </tr>
    
    `;
    
    var category = await fetch ('http://localhost:3000/getQuoteRoute/Banks', {});

    const stockList1 = await category.json();
    const stockList = stockList1[0];
    console.log(stockList);
    for (i = 0; i < stockList.Stocks.length; i++){     
        var dailyPercentChange = ((stockList.Stocks[i].dailyChange / stockList.Stocks[i].price) * 100).toFixed(4);
        dataHtml += `
       
        <tr>
            <th>${stockList.Stocks[i].ticker.toUpperCase()}</th>
            <th>${stockList.Stocks[i].companyName}</th>
            <th>${stockList.Stocks[i].price}</th>
            <th>${stockList.Stocks[i].dailyChange}</th>
            <th>${dailyPercentChange + " %"}</th>
        </tr>
         
        `;
       
    }   
    
    tableBody.innerHTML = dataHtml;
}

displayDefaults();
