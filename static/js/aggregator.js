$(document).ready(function(){
    console.log("blam");
    var url = "http://api.espn.com/v1/sports/news/headlines?apikey=8hbju8cbhanghmxwhwzf8rxx"


    $.getJSON('times', function(json) {
	for(var i=0; i<5;i++){
	    $('#times').append("<a href='" + json.results[i].url + "'>" + json.results[i].title + "</a><hr/><br/>");
	}
    });

    $.ajax({
	type: 'GET',
	url: url,
	data: {
	    key: 'value'
	},
	dataType: "json",
	success: function(json){
	    for(var i=0; i<5; i++){
		$('#sports').append("<a href='" + json.headlines[i].links.web.href + "'>" +  json.headlines[i].headline + "</a><hr/><br/>");
	    }
	}
    });
    $.getJSON('movies', function(json) {
	for(var i=0; i<5;i++){
	    $('#movies').append("<a href='" + json.movies[i].links.alternate + "'>" + json.movies[i].title + "</br> <span class='rating'> Rating: " + json.movies[i].ratings.audience_score + "%</span>" + "</a><hr/>");//("<a href='" + json.movies[i].links.alternate + "'>" + json.movies[i].title + "</a><hr/><br/>");
	    console.log(json.movies[i].title)
	}
    });
    $.ajax({
	type: 'GET',
	url: 'tech',
	dataType: "xml",
	success: function(xml){
	    for(var i=1; i<5; i++){ 
		$('#tech').append("<a href='" + $($(xml).find('item')[i]).find('link').text() + "'>" + $($(xml).find('item')[i]).find('title').text() + "</a><hr/><br/>");
	    }
	}
    });
    $.getJSON('music', function(json){
	console.log(json.feed.entry);
	for(var i=0; i <5; i++){
	    $('#music').append("<a href='" + json.feed.entry[i].link[1].attributes.href + "'>" + json.feed.entry[i].title.label + "</a><hr/><br/>");
	}
    });
});
