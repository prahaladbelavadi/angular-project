window.movieStubApp = angular.module('movieStubApp', ['ngRoute']);
movieStubApp.controller("movieStubController", function ($scope, $location) {
$scope.headerSrc = "tmpl/header.html";
$scope.movies = [
{
"id": 0,
"name": "Iron Man",
"rating": 5,
"availability": 9,
"review": "Tony Stark is a billionaire industrialist and genius inventor who is kidnapped and forced to build a devastating weapon. Instead, using his intelligence and ingenuity, Tony builds a high-tech suit of armor and escapes captivity. When he uncovers a nefarious plot with global implications, he dons his powerful armor and vows to protect the world as Iron Man. (Paramount Pictures, Marvel Studios)",
"thumb": "http://upload.wikimedia.org/wikipedia/en/e/e0/Iron_Man_bleeding_edge.jpg"
},
{
"id": 1,
"name": "Jurassic Park",
"rating": 5,
"availability": 3,
"review": "Featuring incredible special effects and action - packed drama, Jurassic Park takes you to a remote island where an amazing theme park with living dinosaurs is about to turn deadly, as five people must battle to survive among the prehistoric predators.(Universal Pictures)",
"thumb": "http://upload.wikimedia.org/wikipedia/en/e/e7/Jurassic_Park_poster.jpg"
},
{
"id": 2,
"name": "Transformers",
"rating": 5,
"availability": 5,
"review": "Transformers: Dark of the Moon features Sam Witwicky taking his first tenuous steps into adulthood while remaining a reluctant human ally of Optimus Prime. The film centers around the space race between the U.S.S.R. and the USA, suggesting there was a hidden Transformers role in it all that remains one of the planet's most dangerous secrets. The villain of the third film will be Shockwave. (DreamWorks Pictures)",
"thumb": "http://upload.wikimedia.org/wikipedia/en/6/66/Transformers07.jpg"
}
];
$scope.currMovie = null;
$scope.getMovieById = function (id1) {
    $location.url('/movie/'+id1);
/*var movies = $scope.movies;
alert('hello');
for (var i = 0; i < movies.length; i++) {
var movie = $scope.movies[i];
if (movie.id == id) {
$scope.currMovie = movie;
}

}*/
};


// A simple back function, that will help us navigate between views
$scope.back = function () {
window.history.back();
};
});
movieStubApp.controller("movieDetailsController", function ($scope, $routeParams) {


$scope.getactualMovieById = function () {

var movies = $scope.movies;
// alert('hello');
for (var i = 0; i < movies.length; i++) {
var movie = $scope.movies[i];
if (movie.id == $routeParams.id) {
$scope.currMovie = movie;
}

}
};
$scope.getactualMovieById();
});
