import ProductFeed from "./ProductFeed"
function Product({products}) {
    return (
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map(({id,title,price,description,category,image}) =>(
 <ProductFeed id={id} title={title} key={id} description={description} category={category} image={image} price={price}/>
            ))}
        </div>
    )
}

export default Product
