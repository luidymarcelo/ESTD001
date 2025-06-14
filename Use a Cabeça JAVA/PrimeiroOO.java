
/* Class Dog */
class Dog {
/* Variables de instance */
    int size;
    String breed;
    String name;

/* Method bark */
    void bark() {
        System.out.println("Woof!");
    }
}

class DogTestDriver {
    public static void main(String[] args) {
        Dog d = new Dog(); /* Cria um objeto Dog */
        d.size = 40;       /* Usa o operador "." para definir o tamanho de dog */
        d.bark();          /* Usa o operador "." para chamar o metodo bark */
    }
}