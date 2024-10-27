//No arquivo Livro.ts, criar a classe Livro, composta dos campos: codigo e codEditora, numéricos, título e resumo, ambos do tipo texto, e autores, como um vetor de texto

class Livro {
    codigo: number;
    codEditora: number;
    titulo: string;
    ano: string;
    resumo: string;
    autores: string[];

    constructor(codigo: number, codEditora: number, titulo: string, ano: string, resumo: string, autores: string[]) {
        this.codigo = codigo;
        this.codEditora = codEditora;
        this.titulo = titulo;
        this.ano = ano;
        this.resumo = resumo;
        this.autores = autores;
    }
}

export default Livro;
