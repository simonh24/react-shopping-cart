import React, { useContext } from 'react';
import { ProductContext } from "../contexts/ProductContext";

// Components
import Product from './Product';

const Products = () => {
	const { prods, add } = useContext(ProductContext);
	return (
		<div className="products-container">
			{prods.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={add}
				/>
			))}
		</div>
	);
};

export default Products;
