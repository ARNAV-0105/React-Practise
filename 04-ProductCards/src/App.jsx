import React from 'react'
import ProductCard from './components/ProductCard'

const App = () => {
  const products = [
  {
    id: 1,
    prodname: "Sony 1000XM5",
    prodcat: "Electronics",
    price: 24990,
    rating: 4.8,
    img: "https://m.media-amazon.com/images/I/61sGlge485L.jpg"
  },
  {
    id: 2,
    prodname: "Nike Air Force 1",
    prodcat: "Footwear",
    price: 7495,
    rating: 4.6,
    img: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/d/ad22b92Nike-CW2288-111_1.jpg?rnd=20200526195200&tr=w-1536"
  },
  {
    id: 3,
    prodname: "Casio G-Shock",
    prodcat: "Accessories",
    price: 5995,
    rating: 4.7,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-eyG1i4sazd6u6RQZ_8ulcRCce81auIn_juMxXxB_NQ&s=10"
  },
  {
    id: 4,
    prodname: "Logitech MX",
    prodcat: "Electronics",
    price: 9995,
    rating: 4.5,
    img: "https://m.media-amazon.com/images/I/61xKiCADfpL.jpg"
  }
]

  return (
    <div className='bg-zinc-600 h-screen w-full p-10 '>
      <h1 className='font-bold text-3xl mb-5'>FEATURED PRODUCTS</h1>
      <div className='w-full flex gap-5'>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            prodname={product.prodname}
            prodcat={product.prodcat}
            price={product.price}
            rating={product.rating}
            img={product.img}
          />
        ))}
      </div>
    </div>
  )
}

export default App