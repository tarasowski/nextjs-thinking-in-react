"use client"

export default function MeineKomponente(props) {
    console.log("props", props.test)
    console.log("props2", props.test2)
    return (
        <div>
    <button style={{
        backgroundColor: props.color,
        color: "white",
        padding: "1rem",
        borderRadius: "10px",
        fontSize: "1.5rem"
    }}>{ props.buttonText }</button>
        </div>
    ) 
}