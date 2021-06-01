//TODO:
//using fetch contact with the back end


async function displayDefaults(category){
    const tableBody = document.getElementById('defaultTable');
    let dataHtml = `
    
    <tr>
        <th>Ticker</th>
        <th>Name</th>
        <th>Price</th>
        <th>Daily Change</th>
        <th>% Change</th>
    </tr>
    
    `;
    
    var category = await fetch ('http://localhost:3000/getQuoteRoute/' + category, {});

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


function main(){
    displayDefaults("Tech");

    document.getElementById("Tech").onclick = function(){
        displayDefaults("Tech");
    }
    
    document.getElementById("Healthcare").onclick = function(){
        displayDefaults("Healthcare");
    }

    document.getElementById("Semicondctor").onclick = function(){
        displayDefaults("Semicondctor");
    }

    document.getElementById("Automotive").onclick = function(){
        displayDefaults("Automotive");
    }

    document.getElementById("Bank").onclick = function(){
        displayDefaults("Bank");
    }
    
    
    //displayDefaults("Automotive");

}

main();

