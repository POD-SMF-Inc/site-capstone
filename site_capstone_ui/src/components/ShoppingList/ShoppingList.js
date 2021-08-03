import "./ShoppingList.css"
import { useState } from "react"
import ModalShopping from "../ModalShopping/ModalShopping"
export default function ShoppingList({ user })
{
    const [modalOpen, setModalOpen] = useState(false)
    console.log("userSL: ", user)
    return (
        <div className="ShoppingList">
            <h1>In Shopping List</h1>
            <ModalShopping modalOpen={modalOpen} setModalOpen={setModalOpen} user={user}/>
            <button
                onClick={() => setModalOpen(!modalOpen)}
                className="button"
                >
                Open
                </button>
        </div>
    )
}
