import { List } from "../styles";

function endereco({rua, cidade, bairro, estado, ...props}) {
  return (
    <div>
      <List>
        <li>Rua: {rua}</li>
        <li>Bairro: {bairro}</li>
        <li>Cidade: {cidade}</li>
        <li>Estado: {estado}</li>
      </List>
    </div>
  )
}
export default endereco;

