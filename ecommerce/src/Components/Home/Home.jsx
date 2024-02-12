
import Card from '../Card/Card'
import React from 'react'


const Home = () => {


  const [products, setProducts] = React.useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:8080/products');
      const data = await response.json();
      setProducts(data); // Update the state with fetched data
      console.log(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  


  React.useEffect(() => {
    fetchProducts();
  }, []);
  

  console.log(products)
  return (
    <div style={
      {
        padding: '10px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '10px',
        justifyContent: 'space-evenly',
        marginTop: '50px'
      }
    }>
   {
      products.map((product) => {
        return (
          <div>
          <Card product={product} />
            </div>
        )
      })
   }
    </div>
  )
}

export default Home
