var Model = require('./../models/Models');

/* Save a book */
var saveGenre = function (req, res) {
	new Model.Genre({
		name: req.body.name,
		description: req.body.description
	}).save()
		.then(function (genre) {
			res.json(genre);
		}).catch(function (error) {
			console.log(error);
			res.send('An error occured');
		});
};

/* Get all books */
var getGenres = function (req, res) {
	new Model.Genre().fetchAll()
		.then(function (genres) {
			res.json(genres);
		}).catch(function (error) {
			console.log(error);
			res.send('An error occured');
		});
};

/* Delete a book */
var deleteGenre = function (req, res) {
	var genreId = req.params.id;
	new Model.Genre().where('genreId', genreId)
		.destroy()
		.catch(function (error) {
			console.log(error);
			res.send('An error occured');
		});
};

/* Get a book */
var getGenre = function (req, res) {
	var genreId = req.params.id;
	new Model.Genre().where('genreId', genreId)
		.fetch()
		.then(function (genre) {
			res.json(genre);
		}).catch(function (error) {
			console.log(error);
			res.send('An error occured');
		});
};

/* Exports all methods */
module.exports = {
	saveGenre: saveGenre,
	getGenres: getGenres,
	deleteGenre: deleteGenre,
	getGenre: getGenre
};
