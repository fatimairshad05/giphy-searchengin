document.querySelector("button").addEventListener('click',function(){
    var input = document.querySelector("input").value;
    searchgipphy(input);
    //pushinput(input);

})

    document.querySelector("input").addEventListener('keyup', function (e) {
        var input = document.querySelector("input").value;
        if(e.which === 13){
        searchgipphy(input)
        //pushinput(input);
        }

    })
    function searchgipphy(input){
         var url = "https://api.giphy.com/v1/gifs/search?api_key=OIrq4pcqvYBAoreDU1JLcy4KZPqL2qto&limit=25&offset=0&rating=g&lang=en&q=" + input;

        // AJAX Request
        var GiphyAJAXCall = new XMLHttpRequest();
        GiphyAJAXCall.open('GET', url);
        GiphyAJAXCall.send();

        GiphyAJAXCall.addEventListener('load', function (e) {

            var data = e.target.response;
            pushinput(data);
        });
    }

    function pushinput(input){
        var response = JSON.parse(input);
        for(i=0;i<30;i++){
        var imageurl = response.data[i].images.fixed_height.url;
        console.log(imageurl);         

    var container = document.querySelector(".container");
    container.innerHTML= container.innerHTML + "<img src=\" "+ imageurl +"\">";
    // container.innerHTML+= "<img src=\" "+ imageurl +"\">";(we can also write like this);
    }};

