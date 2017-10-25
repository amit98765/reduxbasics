function MovieBox({ movie, favorite, onFavorite, onUnfavorite }) {
    function onChange(checked) {
        if (checked) onFavorite(movie.title);
        else onUnfavorite(movie.title);
    }

}