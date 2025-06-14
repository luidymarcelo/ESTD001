

public class GuessGame {
    Player p1;
    Player p2;
    Player p3;
    
    public void startGame() {
        p1 = new Player();
        p2 = new Player();
        p3 = new Player();

        int guessp1 = 0;C
        int guessp2 = 0;
        int guessp3 = 0;

        boolean p1isRight = false;
        boolean p2isRight = false;
        boolean p3isRight = false;

        int targetNumber = (int)(Math.random() * 10);
        System.out.println("É um número entre 1 e 10, qual é esse?");

        while (true) {
            System.out.println("Número para adivinhar é " + targetNumber);

            p1.guess();
            p2.guess();   
            p3.guess();

            guessp1 = p1.number;
            System.out.println("Jogador 1 adivinhou o número " + guessp1);

            guessp2 = p2.number;
            System.out.println("Jogador 2 adivinhou o número " + guessp2);

            guessp3 = p3.number;
            System.out.println("Jogador 3 adivinhou o número " + guessp3);

            if (guessp1 == targetNumber) {
                p1isRight = true;
            }

            if (guessp2 == targetNumber) {
                p2isRight = true;       
            }

            if (guessp3 == targetNumber) {
                p3isRight = true;
            }

            if (p1isRight || p2isRight || p3isRight) {
                System.out.println("Um dos jogadores acertou o número!");
                break;
            } else {
                System.out.println("Ninguém acertou o número!");
            }
        }
    }
}

class GameLauncher {
    public static void main(String[] args) {
        GuessGame game = new GuessGame();
        game.startGame();
    }
}

class Player {
    int number = 0;

    void guess() {
        number = (int) (Math.random() * 10);
        System.out.println("Você está pensando no número " + number);
    }
}
