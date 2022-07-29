public class index {
    public static void main(String args[]) {
        int d = a(b);
        System.out.println(d)
    }

    static int a(int b) { // se static può essere chiamato da un altro metodo
        c = b++;
        return c;
    }
    
    String/*data type da far ritornare*/ a() {
        return 'Ciao';
    }
    void a() {
// niente return
    }
}
// Overload di metodo: quando piu' metodi hanno lo stesso nome e 
// hanno parametri di data type diversi java calcola in automatico
// quale deve eseguire a seconda del  data type del parametro che li
// viene passato