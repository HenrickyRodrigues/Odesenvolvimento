import { Title, Info, List, SearchButton } from "./styles"
import Address from "./Address";
import { useState } from "react";

function Sobre() {
  const [addressData, setAddressData] = useState()

  const [loading, setLoading] = useState(false)

  const handleSearchAddrees = () => {

    setLoading(true)

    fetch('https://viacep.com.br/ws/03802015/json/')
      .then(function (response) {

        if (response.ok) {
          response.json().then(function (data) {
            setTimeout(() => {
              setLoading(false)
              setAddressData(data)

            }, 800);
          })
        }
      }).catch(function (error) {
        console.log(error);
        setLoading(false)
      })
  }

  return (
    <>
      <Title>Identificação:</Title>
      <Info>
        <List>
          <li>Nome: Henricky Rodrigues</li>
          <li>Idade: 36 anos</li>
          <li>Endereço: 03802-015</li>
        </List>
        <SearchButton onClick={handleSearchAddrees} type='button'>Buscar</SearchButton>
        {loading && <p>Carregando...</p>}

        {addressData && (
          <Address
            rua={addressData.logradouro}
            cidade={addressData.localidade}
            bairro={addressData.bairro}
            estado={addressData.uf}
          />
        )}
      </Info>
    </>
  )
}

export default Sobre;
