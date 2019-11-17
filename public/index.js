function GetSelectedText(){
        var e = document.getElementById("Category");
        var category= e.options[e.selectedIndex].text;	
        console.log(category);
        var searchString = document.getElementById("searchbox").value;
        console.log(searchString);

        // $.get("localhost:3000/search?searchString="+searchString+"&category="+category,{},function(data, status){


        // });

        $.ajax({
            type: "GET",
            url: "http://localhost:3000/search?searchString="+searchString+"&category="+category,
            dataType: "text"
        }).done(function (res) {
            // Your `success` code
        }).fail(function (jqXHR, textStatus, errorThrown) {
            alert("AJAX call failed: " + textStatus + ", " + errorThrown);
        });


    }

