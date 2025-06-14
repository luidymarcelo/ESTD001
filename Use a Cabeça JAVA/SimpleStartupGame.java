import java.util.Scanner;
import java.util.ArrayList;

public class SimpleStartupGame {
    public static void main(String[] args) {
        int numOfGuesses = 0;
        GameHelper helper = new GameHelper();

        SimpleStatup theStartup = new SimpleStatup();
        int randomNum = (int) (Math.random() * 5);

        int[] locations = {randomNum, randomNum + 1, randomNum + 2};
        theStartup.SetLocationCells(locations);
        boolean isAlive = true;

        while (isAlive) {
            int guess = helper.getUserInput("Enter a number");
            String result = theStartup.CheckYourSelf(guess);
            numOfGuesses++;
            if (result.equals("kill")) {
                isAlive = false;
                System.out.println("You took " + numOfGuesses + " guesses");
            }
        }
    }
}

class SimpleStatup {
    private ArrayList<String> locationCells;
    public void SetLocationCells(ArrayList<String> locs) {
        locationCells = locs;
    }

    public String CheckYourSelf(String userInput) {
        String result = "miss";
        int index = locationCells.indexOf(userInput);
        if (index >= 0) {
            locationCells.remove(index);
        }
        if (locationCells.isEmpty()) {
            result = "kill";
        }
        else {
            result = "hit";
        }
        return result;
    }
}

class GameHelper {
    public int getUserInput(String prompt) {
        System.out.println(prompt + ": ");
        Scanner scanner = new Scanner(System.in);
        return scanner.nextInt();
    }    
}