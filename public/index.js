//import { networkInterfaces } from "os";
// function retrieveTopHeadlines(){
//    // alert("functioj");
//   //const NewsAPI = require('newsapi');
//   const newsapi = new NewsAPI('80f13eeda9c8481590f4696199a27860');
//   // To query /v2/top-headlines
//   // All options passed to topHeadlines are optional, but you need to include at least one of them
//   newsapi.v2.topHeadlines({
//   sources: 'bbc-news,the-verge',
//   q: 'bitcoin',
//   category: 'business',
//   language: 'en',
//   country: 'us'
//   }).then(response => {
//   //console.log("hello");
//   console.log(response);
//   });
// }
//   $( document ).ready(function() {
//  alert( "document loaded" );
//  console.log("hello");
//  retrieveTopHeadlines();
//   });
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
            document.getElementById("news").innerHTML = "whatever";

        }).fail(function (jqXHR, textStatus, errorThrown) {
            alert("AJAX call failed: " + textStatus + ", " + errorThrown);
        });


    }

