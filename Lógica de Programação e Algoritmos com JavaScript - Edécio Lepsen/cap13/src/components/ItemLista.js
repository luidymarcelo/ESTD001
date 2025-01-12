import "./ItemLista.css"

/*const ItemLista = (props) => {*/
const ItemLista = ({id, titulo, autor, ano, preco, foto, excluirClick, alterarClick}) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{titulo}</td>
            <td>{autor}</td>
            <td>{ano}</td>
            <td class="text-end">
                {Number(preco).toLocaleString("pt-br", {minimumFractionDigits:2})}
            </td>
            <td class="text-center">
                <img src={foto} alt="Capa do Livro" width="75"/>
            </td>
            <td class="text-center">
                <i className="exclui text-danger fw-bold" title="Exclui" onClick={excluirClick}>&#10008;</i>
                <i className="altera text-success fw-bold" title="Alterar"onClick={alterarClick}>&#36;</i>
            </td>
        </tr>
    )
};
export default ItemLista;