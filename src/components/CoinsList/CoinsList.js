import {gql, useQuery } from '@apollo/client'

const GET_COINS = gql`
  query GetCoins {
    coins {
      coinType
      description
    }
  }
  `;

function CoinsList() {
  const { loading, error, data } = useQuery(GET_COINS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      { data.coins.map(({ coinType, description }) => (
      <div key={coinType}>
        <b>Código de la moneda:</b>
        <p>{coinType}</p>
        <br />
        <b>Nombre de la moneda:</b>
        <p>{description}</p>
        <br />
      </div>
      ))}
    </>
  )
}

export default CoinsList