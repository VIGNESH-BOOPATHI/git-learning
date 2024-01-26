var request =new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all")

request.send();

request.onload =function(){
    var res = JSON.parse(request.response);
    console.log(res);
    
    
    for(var i =0;i<res.length;i++){
        
        console.log(res[i].flags.png+"\n"+
        "country: "+res[i].name.common+"\n"+"Region: "+ 
        res[i].region+"\n"+"Sub-Region: "+res[i].subregion+"\n"+"Population: "+
        res[i].population+"\n"

        )
        

    }
    
}
