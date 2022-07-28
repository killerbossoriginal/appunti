public class index {
    // Tipi di variabili
    private int a = 9; // Visibile solo da questa classe (index)
    public int b = 10; // Visibili da ogni classe
    protected int c = 11; // Visibili dal package (contenitore delle classi e delle sottoclassi)

    public static void main(String args[]) {
        int d = 5;
        int e = 7;

        system.out.println(d + e); // + , - , * , / , % , ++ , --
        
        int f = d - e // + , - , * , / , % , ++ , --
        f = f + 3
    }
}