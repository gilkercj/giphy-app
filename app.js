$(document).ready(function () {

    console.log("test");

var state = "still";
    // $('.gif-button').on('click', function () {
    //     var input = $(this).attr("data");
    //     var api = "https://api.giphy.com";
    //     var endpoint = "/v1/gifs/search";
    //     console.log("btn test: " + input);
    // });
    // var newBtn;
    $('#submit-button').on('click', function () {
        console.log("lkj");
        var input = $("#gifInput").val().trim();

        var newBtn = $("<button class='gif-button' data-type='" + input + "'>" + input + "</button>");
        $('#btn-div').append(newBtn);

        $("#gifInput").attr("value", "");




        // var api = "https://api.giphy.com";
        // var endpoint = "/v1/gifs/search";

        console.log("subtest");

        // var query = "?q=" + input;
        // var apiKey = "&api_key=MDm8kI2JvC2YpIvs9A8gcsc9DK2CLdXo";

        // var queryURL = api + endpoint + query + apiKey;
        // // var queryURL = "https://api.giphy.com/v1/gifs/search?q=api_key=dc6zaTOxFJmzC";

        // console.log(queryURL);

        // $.ajax({
        //     url: queryURL,
        //     // dataType: 'jsonp',
        //     method: 'GET'
        // // }).then(function (response) {
        // //     // console.log(response.data[0].images.fixed_height.url);
        // //     var results = response.data;

        // newdiv = $("<img src='" + response.data[i].images.fixed_height.url + "'/>");
        // for (var i = 0; i < 5; i++) {

        //     //         console.log(results[i].images.fixed_height.url)
        //     //         var div = $('<div>');

        //     //         var rating = results[i].rating;

        //     //         var image = $('<img>');

        //     //         image.attr("src", results[i].images.fixed_height.url);

        //     //         div.append(rating);
        //     //         div.append(image);
        //     //         $("#initdiv").prepend(div); 
        //     var newBtn = $("<button id='gif-button' gif-data='" + input + "'>" + input + "</button>");
        //     $('#btn-div').append(newBtn);

        // }




        // queryURL = "https://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=MDm8kI2JvC2YpIvs9A8gcsc9DK2CLdXo"


        // for (var i = 0; i < results.length; i++) {

        //     newdiv = $("<img src='" + response.data[i].images.fixed_height.url + "'/>");
        //     $(div).append(newdiv);
        //     input = $('#input').val().trim();

        // }
        //     console.log(response.data[0].images.fixed_height.url);
        // });


        // });

    });

    $(document).on('click', '.gif-button', function () {
        state = "still";
        $("#initdiv").empty();
        var input = $(this).data("type");

        console.log(input);
        var api = "https://api.giphy.com";
        var query = "?q=" + input;
        var endpoint = "/v1/gifs/search";
        var apiKey = "&api_key=MDm8kI2JvC2YpIvs9A8gcsc9DK2CLdXo";
        console.log("btn test:");
        var queryURL = api + endpoint + query + apiKey;
        $.ajax({
            url: queryURL,
            // dataType: 'jsonp',
            method: 'GET'
        }).then(function (response) {
            // console.log(response.data[0].images.fixed_height.url);
            var results = response.data;

            // newdiv = $("<img src='" + response.data[i].images.fixed_height.url + "'/>");
            for (var i = 0; i < 5; i++) {

                console.log(results[i].images.fixed_height.url)
                var div = $('<div>');

                var rating = $("<p>").text("Rating: " + results[i].rating);

                var image = $('<img class="image">');
                var still = results[i].images.fixed_height_still.url;
                var animated = results[i].images.fixed_height.url;
                image.attr("src", still);
                image.attr("data-still", still);
                image.attr("data-animated", animated);
                image.attr("data-state", "still");



                div.append(rating);
                div.append(image);
                $("#initdiv").append(div);
            }

        });
    });
        $(document).on("click", ".image", function () {
            state = $(this).attr('data-state');
            if (state === "still") {
                $(this).attr("src", $(this).data("animated"));
                $(this).attr("data-state", "animated");
            }
            else {
                $(this).attr("src", $(this).data("still"));
                $(this).attr("data-state", "still")

            }
        });
    
    // $('#button').on('click', function () {

    //     newdiv = $("<img src='" + response.data[i].images.fixed_height.url + "'/>");
    //     $(div).append(newdiv);
    //     input = $('#input').val().trim();

    //     queryURL = "https://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=MDm8kI2JvC2YpIvs9A8gcsc9DK2CLdXo"
    //     console.log(response.data[0].images.fixed_height.url);
    // });
});