// import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom'

// const ProductDetail = () => {
//     const {id}=useParams()
//     const products=useSelector((state)=>state.product.products)
//     const [product,setProduct]=useState()
//     useEffect(() => {
//         const newProduct=products.find(product=>{product.id===parseInt(id)
//             console.log(typeof(product.id))
//         })
//         setProduct(newProduct)
        
//     },[id])
   
//   return (
//     <div>
//       {product.name}
//     </div>
//   )
// }

// export default ProductDetail
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { addToCart } from '../redux/cartSlice'

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch=useDispatch()
  const products = useSelector((state) => state.product.products);
  const [product, setProduct] = useState(null); // Initialize as null to handle loading
  const handleAddToCart =(e,product)=>{
        e.preventDefault()
        e.stopPropagation()
        dispatch(addToCart(product))
        alert("product added successfully")
      }
  useEffect(() => {
    const newProduct = products.find(product => product.id === parseInt(id));
    setProduct(newProduct); // Set the product if found, otherwise null
  }, [id, products]); // Re-run effect if products or id change

  if (!product) {
    return <div>Loading...</div>; // Show loading message until product is found
  }

  // Ensure safe access to product properties (like 'name')
  return (
    <div className="p-6 bg-white md:flex md:justify-center items-center rounded-2xl shadow-lg">
    <img
      src={product.image}
      alt={product.name}
      className="w-half  md:h-96 object-cover rounded-md"
    />
    <div className="mt-6 md:ml-12">
      <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
      <p className="text-gray-600 mt-2">${product.price.toFixed(2)}</p>
      <p className="text-gray-500 mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
        venenatis nisl vel nisi faucibus, at vehicula mauris laoreet.
      </p>
      <button onClick={(e)=>handleAddToCart(e,product)} className="mt-6 p-2 md:w-1/4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
        Add to Cart
      </button>
      <Link
        to="/"
        className="mt-4 block text-center text-blue-500 hover:underline"
      >
        Back to Products
      </Link>
    </div>
  </div>
  );
};

export default ProductDetail;

