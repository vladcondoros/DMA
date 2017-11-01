function validare(){
	var x = $('#srcbox').val();
	var searchurl = 'https://api.themoviedb.org/3/search/movie?api_key=309e4791c7c42b9d394e8d7a9abcedb2&language=en-US&query='+ x +'&page=1&include_adult=false';
	if (x === ""){
		alert("Nu pot căuta nimicul!");
	}
	else
		{
			$.ajax(
			{
				url: searchurl,
				method: 'GET'
			}).done(loadResults,loadPagination);
		}
}

var loadPagination = function (data) {
    nrmovies(data);

    if (data.page === 1)
        $('#previous').attr('disabled', 'disabled');
    else {
        $('#previous').attr('data-page', data.page - 1);
        $('#previous').removeAttr('disabled');
    }

    if (data.page === data.total_pages)
        $('#next').attr('disabled', 'disabled');
    else{
        $('#next').attr('data-page', data.page + 1);
        $('#next').removeAttr('disabled');
    }
};

var loadResults = function (data) {
    $("#movies").html('');
    for (var i = 0; i < data.results.length; i++) {
        var movie = data.results[i];

        $('#movies').append(
            '<div class ="movie">\n' +
            '\t\t\t\t\t<div class="movieimg">\n' +
            '\t\t\t\t\t\t<span style="vertical-align: middle; display: table-cell">\n' +
            '\t\t\t\t\t\t\t<img class="movieposter" src="http://image.tmdb.org/t/p/w75' + movie.poster_path + '">\n' +
            '\t\t\t\t\t\t</span>\n' +
            '\t\t\t\t\t</div>\n' +
            '\t\t\t\t\t<div class="moviedet">\n' +
            '\t\t\t\t\t\t<span class ="movierating">' + movie.vote_average + '</span>\n' +
            '\t\t\t\t\t\t<span class ="movietitle">' + movie.title + '</span>\n' +
            '\t\t\t\t\t\t<span class ="moviedescript">' + movie.overview + '</span>\n' +
            '\t\t\t\t\t\t<span class ="releasedate">' + movie.release_date + '</span>\n' +
            '\t\t\t\t\t\t<span class ="language">' + movie.original_language + '</span>\n' +
            '\t\t\t\t\t</div>\n' +
            '\t\t\t\t</div>'
        );
    }
};

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

var loadimg = function(data){
	var src = data.poster_path;
    var a = $("<a/>").attr("href", src);
    $(".movieposter").wrap(a);
};

var handlePaginationItemClicked = function (element) {
    var selectedPage = $(element).attr('data-page');
    loadPage(selectedPage);
};

var loadPage = function (pageIndex) {
    var index;
    if (pageIndex)
		index = pageIndex;
    else
		index = 0;

$.ajax(
        {
            url: 'https://api.themoviedb.org/3/discover/movie?api_key=309e4791c7c42b9d394e8d7a9abcedb2&page=' + pageIndex,
            method: 'GET'
        }
    ).done(loadResults, loadPagination);
};

loadPage();