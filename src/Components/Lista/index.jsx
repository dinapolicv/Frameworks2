export const Lista = ({_id, nome, usuario, descricao, data_inclusao, palavras_chave}) => {
    return(
        <div className="lista">
            <h1>nome: {nome}</h1>
            <p>usuario: {usuario}</p>
            <p>data: {data_inclusao}</p>
            <p>descricao: {descricao}</p>
        </div>
    )
}