function makeAJAXCall(methodType, url, async=true,data=null){
    return new Promise(function(resolve,reject){

    
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
       // console.log(methodType+" State Changed Called at:"+showTime()+" Ready State: "+xhr.readyState+" Status:"+xhr.status);
        if(xhr.readyState===4){
        if(xhr.status===200 || xhr.status===201){
            resolve(xhr.responseText);
        }else if(xhr.status>=400){
            //console.log("Handle 400 Client Error or 500 Server Error at: "+showTime());
            reject({
                status:xhr.status,
                statusText:xhr.statusText
            });
        console.log("Handle 400 Client Error or 500 Server Error at: "+showTime());

        }
      }
    }
    xhr.onerror=function(){
        reject({
            status:this.status,
            statusText:xhttp.statusText
        });
    };

    xhr.open(methodType,url,async);
    if(data){
        xhr.setRequestHeader("Content-Type","application/json");
        xhr.send(JSON.stringify(data));
    }
    else
    xhr.send();
    console.log(methodType+" request sent to the server at : "+showTime());
 });
}


