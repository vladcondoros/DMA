function validare(){
	var x = $('#srcbox').textContent;
	if (x === ""){
		alert("Nu pot căuta nimicul!");
	}
}

var currentpage= function(data){
	var cpage = data.page;
	if (cpage === 1){
		$('#previous').die();
	}
	if (cpage === data.total_pages){
		$('#next').die();
	}
};

var lastpage = function(data){
	$.ajax({
		url: 'https://api.themoviedb.org/3/discover/movie?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=309e4791c7c42b9d394e8d7a9abcedb2',
		method: 'GET'
	}
		  ).done(function (data) {
            $("#npage").html(data.total_pages);
	});
};

var nrmovies = function(data){
	$.ajax({
		url: 'https://api.themoviedb.org/3/discover/movie?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=309e4791c7c42b9d394e8d7a9abcedb2',
		method: 'GET'
	}
		  ).done(function (data) {
            $("#nrmovies").html(data.total_results);
	});
};

var loadtitles = function (data) {
    $('.movietitle').html(data.title);
};

var loaddescript = function(data){
	$('.moviedescript').html(data.overview);
};

var loadimg = function(data){
	var src = data.poster_path;
    var a = $("<a/>").attr("href", src);
    $(".movieposter").wrap(a);
};

var loadrating = function(data){
	$('.movierating').html(data.vote_average);
};

var loadreleasedate = function(data){
	$('.releasedate').html("Release date: " + data.release_date);
};

var loadlanguage = function(data){
	$('.language').html("Language: " + data.original_language);
};

var searchedmovie = function(){
	
};

$.ajax(
    {
        url: 'https://api.themoviedb.org/3/movie/550?api_key=309e4791c7c42b9d394e8d7a9abcedb2',
        method: 'GET'
    }
).done(loadtitles, loaddescript, loadimg, loadrating, lastpage, loadlanguage, loadreleasedate, nrmovies);