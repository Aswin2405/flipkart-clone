import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Fotter from '../components/Fotter'
import Header from "../components/Header"
import Product from "../components/Product"
export default function Home({products}) {
  return (
    <div>
      <Head>
        <title>Flipkart Clone</title>
        <meta name="description" content="Created by Aswin" />
        <link rel="icon" href="https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png" />
      </Head>
      <Header products={products} />
      <main className="bg-blue-100">
      <Banner />
      <Product products={products} />
      </main>
      <Fotter/>
    </div>
  )
}
export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(res => res.json())
  return {
    props:{
      products,
    }
  }
}