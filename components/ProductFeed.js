import Currency from 'react-currency-formatter';
import Image from 'next/image'
function ProductFeed({ id, title, image, description, category, price }) {
    return (
        <div className="flex flex-col relative bg-white m-5 p-10">
            <p className="absolute top-2 right-2 text-sm italic text-gray-400">{category}</p>
            <h1 className="my-3">{title}</h1>
            <Image src={image} width={200} height={200} objectFit="contain" />
            <p className="line-clamp-2 text-xs my-2">{description}</p>
            <div className="mb-5">
                <Currency
                    quantity={price}
                    currency="INR"
                />
            </div>
            <button className="p-2 focus:outline-none items-center uppercase font-semibold font-sans bg-yellow-500 text-white">Add to Cart</button>
        </div>
    )
}

export default ProductFeed
