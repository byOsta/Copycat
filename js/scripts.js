var exampleSocket = new WebSocket("ws://localhost:8888/Copycat");
var listAddress = []

exampleSocket.onmessage = function (event) {
    console.log(event.data);

    var dataParsed = JSON.parse(event.data);
    if (!listAddress.includes(dataParsed.ContractAddress)) {
        listAddress.splice(0, 0, dataParsed.ContractAddress);
        
        const element = document.getElementById("TableBody");
        const para = document.createElement("tr");
        para.id = dataParsed.ContractAddress;
        dataParsed.Data.forEach(element => {
            para.innerHTML = para.innerHTML + element;
    
        });
    
        // console.log(para.innerHTML)
        element.prepend(para);
    
    }else{
        const para = document.getElementById(dataParsed.ContractAddress);
        para.innerHTML = '';

        dataParsed.Data.forEach(element => {
            para.innerHTML = para.innerHTML + element;
    
        });
    }

}
