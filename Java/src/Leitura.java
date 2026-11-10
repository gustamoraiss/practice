import java.util.Scanner;

public class Leitura {
    public static void main() {
        Scanner leitura = new Scanner(System.in);

        System.out.println("Digite seu filme favorito: ");
        String filme = leitura.nextLine();
        System.out.println("Qual o ano de lançamento: ");
        int anodeLancamento = leitura.nextInt();
        System.out.println("Diga sua avaliação para o filme: ");
        double avaliacao = leitura.nextDouble();
        System.out.println(anodeLancamento);
        System.out.println(filme);
        System.out.println(avaliacao);
    }
}