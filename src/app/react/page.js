import Headline from "@/components/Headline"
import Table from "@/components/Table"
import Button from "@/components/Button"
import Input from "@/components/Input"

const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
  ]

const headline = "This is my headline"

const COLOR = "green"
const BUTTON_TEXT = "Produkt hinzufügen (Neu)"
  // this is our parent component or entry point for /react
const VALUE = "Gib was ein.."

export default function React() {
    return (
        <div>
            {/* here are both our children components Headline and Table */}
            {/* myHeadline is a prop 👇*/}
            <Headline myHeadline={headline} />
            <Table products={PRODUCTS} tableHeader="Meine Früchte" />

            <Input placeholder={VALUE} />

            <Button 
            color="green"
            buttonText={BUTTON_TEXT} 
            />
            <Button
            color="blue"
            buttonText="Preis kalkulieren"
            />
            <Button
            color="red"
            buttonText="Produkte löschen"
            />
        </div>
    )
}