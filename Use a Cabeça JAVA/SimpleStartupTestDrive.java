public class SimpleStartupTestDrive {
    public static void main(String[] args) {
         SimpleStatup dot = new SimpleStatup();
         int[] locations = {1,2,3};
         dot.SetLocationCells(locations);
         int userGuess = 2;
         String result = dot.CheckYourSelf(userGuess);
         String testResult = "Failed";
         if (result.equals("hit")) {
             testResult = "Passed";
         }
         System.out.println(testResult);
    }
}


class SimpleStatup {
    private int[] locationCells;
    private int numHits = 0;

    public void SetLocationCells(int[] locs) {
        locationCells = locs;
    }

    public String CheckYourSelf(int guess) {
        String result = "miss";
        for (int cell : locationCells) {
            if (guess == cell) {
                result = "hit";
                numHits++;
                break;
            }
        }
        if (numHits == locationCells.length) {
            result = "kill";
        }
        System.out.println(result);
        return result;
    }
}