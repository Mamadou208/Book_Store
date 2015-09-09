var bookshelf = require('./../config/db').bookshelf;

var User = bookshelf.Model.extend({
	tableName: 'users'
});


var BooksGenres = bookshelf.Model.extend({
	tableName: 'books_genres'
});


var Book = bookshelf.Model.extend({
	tableName: 'books',
	hasTimestamps: true,
	genres: function () {
		//return this.belongsTo(Genre, 'genreid');
		return this.belongsTo(Genre, 'books_genres', 'book_id', 'genre_id');
	}
});

var Genre = bookshelf.Model.extend({
	tableName: 'genres',

	books: function () {
		return this.belongsToMany(Book, 'genreid');
	}
});

module.exports = {
	Book: Book,
	Genre : Genre
};
