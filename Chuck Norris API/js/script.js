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
        $('#' + i ).html('<text>' + data[i] + '</text>');
    }
};

function setCateg (x){
	var categoryName = x.textContent;
	var randomJokeUrl = 'https://api.chucknorris.io/jokes/random?category=' + categoryName;

    $.ajax({url: randomJokeUrl, method: 'GET'}).done(
        function (data) {
            $("#joke").html(data.value);
		}
		);
}
function resetCateg(x){
	var categoryName = null;
};

$.ajax(
    {
        url: 'https://api.chucknorris.io/jokes/categories',
        method: 'GET'
    }
).done(loadCategories);