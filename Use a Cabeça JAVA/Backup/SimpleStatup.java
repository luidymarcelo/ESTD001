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
