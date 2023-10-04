// import React, {useState, useEffect} from 'react'
// import Product from './Product';

// function ProductProvider() {
//     const [products, setProducts] = useState(null)

//     useEffect(() => {
//         fetch("https://fakestoreapi.com/products").then((res) =>
//           res.json().then((data) => {
//             setProducts(data);
//           })
//         );
//     }, [])
// console.log(products);
//   return (
//     <div>
//       {products?.map(
//         ({ id, title, price, description, category, image, rating }) => (
//           <div className="my-5" key={id}>
//             <Product
//               id={id}
//               title={title}
//               price={price}
//               description={description}
//               catagory={category}
//               image={image}
//               rating={rating}
//             />
//           </div>
//         )
//       )}
//     </div>
//   );
// }

// export default ProductProvider