import Image from 'next/image'
import styles from './page.module.css'
import Button from "@/components/Button"
import Table from "@/components/Table"

const products = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
]

export default function Home() {
  return (
    <main>
      This is my main page
      <Button color="red" buttonText="Zur Bank gehen" />
      <Table products={products} />
    </main>
  )
}
