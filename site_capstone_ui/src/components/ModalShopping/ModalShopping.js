import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import apiClient from "../../services/apiClient"
import "./ModalShopping.css"
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import uuid from 'react-uuid'

export default function ModalShopping(props)
{
    //Implement a save button, when it is pressed, update the backend
    const { modalOpen, setModalOpen, user } = props;
    const [inputValue, setInputValue] = useState('');
    const [totalItemCount, setTotalItemCount] = useState(0);
    const modalActive = modalOpen ? 'is-active ' : '';
    // const [items, setItems] = useState([
    //     { title: 'item 1', quantity: 1, is_selected: false, unique_id: uuid() },
    //     { title: 'item 2', quantity: 3, is_selected: true, unique_id: uuid() },
    //     { title: 'item 3', quantity: 2, is_selected: false, unique_id: uuid() },
    // ]);
    const [items, setItems] = useState([]);
    useEffect(() => {
        const fetchItems = async () => {
            try{
                const { data, error} =  await apiClient.getShoppingList()
                if (data)
                {
                    console.log("data shopping: ", data?.listInfo)
                    console.log("data type: ", typeof(data.listInfo))
                    setItems(data.listInfo)
                }
            }
            catch(error)
            {
                console.log(error)
            }
        }
        fetchItems()
    }, [])
    const resetForm = e => {
        e.preventDefault();
        setModalOpen(!modalOpen);
      };
      
    const calculateTotal = () => {
        const totalItemCount = items.reduce((total, item) => {
            return total + item.quantity;
        }, 0);
    
        setTotalItemCount(totalItemCount);
    };
    const addButton = async () => {
        const newItem = {
            title: inputValue,
            quantity: 1,
            is_selected: false,
            unique_id: uuid() 
        };

        const { data, error } =  await apiClient.addToList(newItem)
    
        const newItems = [...items, newItem];
    
        setItems(newItems);
        setInputValue('');
        calculateTotal()
    };

    const selectItem = (index) => {
        console.log("index: ", index)
        const newItems = [...items];
    
        newItems[index].is_selected = !newItems[index].is_selected;
        console.log("itemShop: ", newItems[index])
        setItems(newItems);
    };

    const removeButton = async (index) => {
        const newItems = [...items];
        console.log(newItems[index])
        const { data, error } =  await apiClient.removeFromList(newItems[index])
        newItems.splice(index, 1)

        setItems(newItems)
    }

    const submitForm = async () => {
        console.log("length: ", items.length)
        let count = 0
        for (count = 0; count < items.length; count++)
        {
            const { data, error } =  await apiClient.updateListInfo(items[count])
            console.log(items[count])
        }
        setModalOpen(!modalOpen);
    }

    

    const increaseQuanity = (index) => {
        const newItems = [...items];
    
        newItems[index].quantity++;
    
        setItems(newItems);
        calculateTotal()
    };

    const decreaseQuanity = (index) => {
        const newItems = [...items];
    
        newItems[index].quantity--;
        if (newItems[index].quantity <= 0)
        {
            newItems[index].quantity = 1
        }

    
        setItems(newItems);
        calculateTotal()
    };
    
      console.log("inputValue: ", inputValue)
      console.log("items: ", items)
    return (
        <div className="ModalShopping">
            <div className={`modal ${modalActive}`}>
                <div className="modal-background"></div>
                <div className={`modal-card`}>
                <header className={`has-text-white modal-card-head `}>
                        <button
                            className="delete"
                            aria-label="close"
                            onClick={resetForm}
                        ></button>
                        <div className="shoppingTitle">
                            <h2>Shopping List</h2>
                        </div>
                </header>
                    <section className={`modal-content has-background-white py-6 px-6`}>
                        <div className="backgroundList">
                        <div className="listSection">
                            <div className="addItem">
					            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} className='add-item-input' placeholder='Add an item...' />
                                <button onClick={() => addButton()}>Add Item</button>
					            {/* <FontAwesomeIcon icon={faPlus} onClick={() => addButton()}/> */}
				            </div>
                        
                            <div className="itemList">
                                {items.map((item, index) => (
                                        <div className="itemContainer">
                                                <div className="itemName" onClick={() => selectItem(index)}>
                                                    {item.is_selected ? (
                                                        <>
                                                        <FontAwesomeIcon icon={faCheckCircle} />
                                                        <span className="completedCircle">{item.title}</span>
                                                        </>
                                                        ) : (
                                                        <>
                                                        <FontAwesomeIcon icon={faCircle} />
                                                        <span>{item.title}</span>
                                                        </>
                                                    )}
                                                </div>
                                                <div className="quantity">
                                                    <button>
                                                    <FontAwesomeIcon icon={faChevronLeft} onClick={() => decreaseQuanity(index)}/>
                                                    </button>
                                                    <span> {item.quantity} </span>
                                                    <button>
                                                    <FontAwesomeIcon icon={faChevronRight} onClick={() => increaseQuanity(index)}/>
                                                    </button>
                                                    <button>
                                                    <FontAwesomeIcon icon={faTrash} onClick={() => removeButton(index)}/>
                                                    </button>
                                                </div>
                                        </div>
                                ))}
                            </div>
                                <div className="totalItems">
                                    {/* <h4>Total: {totalItemCount}</h4> */}
                                    <button
                                    type="submit"
                                    onClick={submitForm}
                                    >Save</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}