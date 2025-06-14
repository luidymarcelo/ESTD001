import java.io.*;
import java.util.*;

public class ModificarArquivo {
    public static void main(String[] args) {
        // Caminhos dos arquivos que serão modificados
        ArrayList<String> caminhos = new ArrayList<>();
        caminhos.add("C:\\Users\\Thinkpad\\Desktop\\arquivo.txt");
        caminhos.add("C:\\Users\\Thinkpad\\Desktop\\arquivo - Copia.txt");
        caminhos.add("C:\\Users\\Thinkpad\\Desktop\\arquivo - Copia (2).txt");

        // Captura o trecho de palavra a ser buscado
        promptUser trecho = new promptUser();
        String trechoDePalavra = trecho.getUserInput("Digite o trecho que deseja buscar");

        // Captura o novo conteúdo da linha
        promptUser altera = new promptUser();
        String novaLinha = altera.getUserInput("Digite o novo conteúdo");

        // Chama o método para modificar os arquivos
        modificarLinhaArquivo(caminhos, trechoDePalavra, novaLinha);
    }

    public static void modificarLinhaArquivo(ArrayList<String> listaDeCaminhos, String trechoDePalavra, String novaLinha) {
        for (String caminho : listaDeCaminhos) {
            File arquivo = new File(caminho);
            if (arquivo.exists()) {
                List<String> linhas = new ArrayList<>();
                try (BufferedReader br = new BufferedReader(new FileReader(arquivo))) {
                    String linha;
                    while ((linha = br.readLine()) != null) {
                        linhas.add(linha);
                    }

                    // Encontra e modifica a linha que contém o trechoDePalavra
                    for (int i = 0; i < linhas.size(); i++) {
                        if (linhas.get(i).contains(trechoDePalavra)) {
                            linhas.set(i, novaLinha); // Modifica a linha
                        }
                    }

                    // Escreve as linhas de volta no arquivo
                    try (BufferedWriter bw = new BufferedWriter(new FileWriter(arquivo))) {
                        for (String novaLinhaDoArquivo : linhas) {
                            bw.write(novaLinhaDoArquivo);
                            bw.newLine();
                        }
                        System.out.println("Arquivo modificado: " + caminho);
                    }

                } catch (IOException e) {
                    System.err.println("Erro ao processar o arquivo: " + caminho);
                    e.printStackTrace();
                }
            } else {
                System.out.println("Arquivo não encontrado: " + caminho);
            }
        }
    }
}


class promptUser {
    public String getUserInput(String prompt) {
        Scanner scanner = new Scanner(System.in);
        System.out.print(prompt + ": ");
        return scanner.nextLine();
    }
}