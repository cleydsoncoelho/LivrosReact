import React, { useState, useEffect } from "react";
import controleLivro from "./controle/ControleLivros";
import controleEditora from "./controle/ControleEditora";

// Definir o componente auxiliar LinhaLivro, com parâmetro props, para a recepção dos atributos livro e excluir
const LinhaLivro = (props) => {
    const { livro, excluir } = props;
    // Definir em LinhaLivro o atributo nomeEditora, invocando o método getNomeEditora, com a passagem de codEditora, atributo do livro
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);
    return (
        // No retorno do componente, deverá ser fornecida uma linha de tabela, ou tr, com os valores dos atributos do livro nas tags td
        <tr>
            <td>
                {/* Abaixo do título, na primeira célula, adicionar um botão de exclusão, com o recebimento de um método que será fornecido no atributo excluir */}
                <button className='btn btn-danger btm-sm' onClick={() => excluir(livro.codigo)}>
                    Excluir
                </button>
            </td>
            <td>{livro.codigo}</td>
            <td>{livro.titulo}</td>
            <td>{livro.ano}</td>
            <td>{nomeEditora}</td>
            <td>
                {/* Exibir os autores como uma lista HTML, efetuando a geração dos itens através do método map, e tendo como key o valor de index */}
                <ul className='list-unstyled'>
                    {livro.autores.map((autor, index) => (
                        <li key={index}>{autor}</li>
                    ))}
                </ul>
            </td>
        </tr>
    );
};

// Definir o componente LivroLista, exportado por padrão, sem parâmetros
const LivroLista = () => {
    // Em LivroLista, definir as propriedades livros, do tipo vetor, e carregado, booleana, através de useState
    const [livros, setLivros] = useState([]);
    const [carregado, setCarregado] = useState(false);

    // Utilizar o Hook useEffect, que deve alimentar livros com a chamada para obterLivros, do controlador, e alterar carregado para true, tendo ainda como balizador o atributo carregado
    useEffect(() => {
        controleLivro.obterLivros().then((dados) => {
            setLivros(dados);
            setCarregado(true);
        });
    }, [carregado]);

    // Acrescentar o método excluir, estilo arrow function, que deve receber o código do livro, invocar o método excluir do controlador, e setar o valor de carregado como false, para forçar o redesenho da página
    const excluir = (codigo) => {
        controleLivro.excluir(codigo);
        setCarregado(false);
    };

    // No retorno do componente deve ser fornecida a área principal (main), contendo o título da página e uma tabela para exibição dos livros
    return (
        <main className='App-body bg-light text-dark'>
            <div className='container mt-3'>
                <h1>Lista de Livros</h1>
                <table className='table table-striped table-hover'>
                    <thead className='bg-dark text-light'>
                        <tr>
                            <th style={{ width: "10%" }}>Ações</th>
                            <th style={{ width: "10%" }}>Código</th>
                            <th style={{ width: "30%" }}>Título</th>
                            <th style={{ width: "10%" }}>Ano</th>
                            <th style={{ width: "20%" }}>Editora</th>
                            <th style={{ width: "20%" }}>Autores</th>
                        </tr>
                    </thead>

                    <tbody>
                        {/* Utilizar o método map, de livros, para a geração das linhas de dados como componentes do tipo LinhaLivro, tendo como parâmetros o livro atual do vetor, excluir invocando o método excluir de LivroLista, com a passagem do código do livro corrente, e key associado ao código do livro */}
                        {livros.map((livro) => (
                            <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
};

export default LivroLista;
