/*var handleCategoryChange = function () {
    var categoryName = $(".categorie").val();

    var randomJokeUrl = 'https://api.chucknorris.io/jokes/random?category=' + categoryName;

    $.ajax({url: randomJokeUrl, method: 'GET'}).done(
        function (data) {
            $("#joke").html(data.value);
        }
    );
};*/

var loadCategories = function (data) {
    for (var i = 0; i < data.length; i++) {
        $('#' + i ).html('<option>' + data[i] + '</option>');
    }
	$("button").click(function(){
		$(selectedCategory);
	});
};

var selectedCategory = function(){
	var categoryName = $('button').toString();
	$("#joke").html(categoryName);
		
	/*var randomJokeUrl = 'https://api.chucknorris.io/jokes/random?category=' + categoryName;

    $.ajax({url: randomJokeUrl, method: 'GET'}).done(
        function (data) {
            $("#joke").html(data.value);
		}
		);*/
};

$.ajax(
    {
        url: 'https://api.chucknorris.io/jokes/categories',
        method: 'GET'
    }
).done(loadCategories);