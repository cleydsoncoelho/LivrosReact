import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import controleLivro from "./controle/ControleLivros";
import controleEditora from "./controle/ControleEditora";

const LivroDados = () => {
    const opcoes = controleEditora.getEditoras().map((editora) => ({
        value: editora.codEditora,
        text: editora.nome,
    }));

    const [titulo, setTitulo] = useState("");
    const [resumo, setResumo] = useState("");
    const [autores, setAutores] = useState("");
    const [codEditora, setCodEditora] = useState(opcoes[0].value);
    const [ano, setAno] = useState(""); 

    const navigate = useNavigate();

    const tratarCombo = (evento) => {
        setCodEditora(Number(evento.target.value));
    };

    const incluir = (evento) => {
        evento.preventDefault();
        const novoLivro = {
            codigo: 0,
            titulo,
            ano,
            resumo,
            autores: autores.split("\n"),
            codEditora,
        };
        controleLivro.incluir(novoLivro);
        navigate("/");
    };

    return (
        <main className='container mt-4'>
            <h1>Cadastrar um novo Livro</h1>
            <form onSubmit={incluir}>
                <div className='mb-3'>
                    <label className='form-label'>Título:</label>
                    <input type='text' className='form-control' value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                </div>
                <div className='col-1 mb-3'>
                    <label className='form-label'>Ano:</label> {/* Adicionando o campo de entrada para ano */}
                    <input type='text' className='form-control' value={ano} onChange={(e) => setAno(e.target.value)} />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Resumo:</label>
                    <textarea className='form-control' rows='5' value={resumo} onChange={(e) => setResumo(e.target.value)} />
                </div>
                <div className='col-3 mb-3'>
                    <label className='form-label'>Editora:</label>
                    <select className='form-select' value={codEditora} onChange={tratarCombo}>
                        {opcoes.map((opcao) => (
                            <option key={opcao.value} value={opcao.value}>
                                {opcao.text}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Autores (um por linha):</label>
                    <textarea className='form-control' rows='5' value={autores} onChange={(e) => setAutores(e.target.value)} />
                </div>
                <button type='submit' className='btn btn-primary'>
                    Salvar Dados
                </button>
            </form>
        </main>
    );
};

export default LivroDados;
