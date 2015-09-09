var Model = require('./../models/Models');

/* Save a book */
var saveBook = function (req, res) {
	new Model.Book({
		ISBN : req.body.isbn,
		title: req.body.title,
		author: req.body.author,
		genreid:req.body.genreid,
		comments: req.body.comments,
		editor:req.body.editor,
		edition: req.body.edition,
		description:req.body.description
	}).save()
		.then(function (book) {
			res.json(book);
		}).catch(function (error) {
			console.log(error);
			res.send('An error occured');
		});
};

/* Get all books */
var getAllBooks = function (req, res) {
	new Model.Book().fetchAll()
		.then(function (books) {
			res.json(books);
		}).catch(function (error) {
			console.log(error);
			res.send('An error occured');
		});
};

/* Delete a book */
var deleteBook = function (req, res) {
	var isbn = req.params.id;
	new Model.Book().where('ISBN', isbn)
		.destroy()
		.catch(function (error) {
			console.log(error);
			res.send('An error occured');
		});
};

/* Get a book */
var getBook = function (req, res) {
	var isbn = req.params.id;
	new Model.Book().where('ISBN', isbn)
		//.fetch()
		.fetch({withRelated: ["genres"]})
		.then(function (books) {
			res.json(books);
		}).catch(function (error) {
			console.log(error);
			res.send('An error occured');
		});
};

/* Exports all methods */
module.exports = {
	saveBook: saveBook,
	getAllBooks: getAllBooks,
	deleteBook: deleteBook,
	getBook: getBook
};
