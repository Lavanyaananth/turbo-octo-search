
    let xhr = new XMLHttpRequest;
    xhr.open ('GET','https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=modi' , true);
    xhr.onload = function() 
    {
        //check if the status is 200
        if (this.status === 200) 
            {
                //return server response as an object 
                console.log(JSON.parse(this.responseText));
    }
            }
    //call send
    xhr.send();


