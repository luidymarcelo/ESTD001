class Movie {
// Atributos / Propriedades / Campos / Variaveis de instancia
    String title;
    String genre;
    int rating;
    
// Metodos
    void playIt() {
        System.out.println("Iniciando filme " + title);
    }
}

class MovieTestDriver {
    public static void main(String[] args) {
        Movie oneMovie = new Movie();
        oneMovie.title = "Star Wars";
        oneMovie.genre = "Sci-Fi";
        oneMovie.rating = 8;

        Movie twoMovie = new Movie();
        twoMovie.title = "The Matrix";
        twoMovie.genre = "Sci-Fi";
        twoMovie.rating = 8;

        Movie threeMovie = new Movie();
        threeMovie.title = "The Matrix Reloaded";
        threeMovie.genre = "Sci-Fi";
        threeMovie.rating = 8;
        
        oneMovie.playIt();
        twoMovie.playIt();
        threeMovie.playIt();
    }
}