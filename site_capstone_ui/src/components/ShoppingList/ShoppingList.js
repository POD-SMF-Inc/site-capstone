import "./ShoppingList.css"
import { useState, useEffect, useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext";
import uuid from 'react-uuid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import apiClient from "../../services/apiClient"
import NotAuthorized from "../NotAuthorized/NotAuthorized"
import ModalShopping from "../ModalShopping/ModalShopping"
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
export default function ShoppingList({ user, setAppState })
{
    const [inputValue, setInputValue] = useState('');
    const [items, setItems] = useState([]);
    const [errors, setErrors] = useState({})
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
        
        if (user?.username)
        {
            fetchItems()
        }
        
    }, [])

    const context = useContext(ThemeContext);
    const theme = context.isLightTheme ? context.light : context.dark;
    const theme2 = context.isLightTheme ? context.cardLight : context.cardDark;
  
    const ThemeToggler = (props) => {
        const context = useContext(ThemeContext);
        const btnText = context.isLightTheme ? "Light ☀️" : "Dark 🌘";
        const toggleTheme = context.toggleTheme;
      
        return (
          <button className={`button is-light rounded`} onClick={toggleTheme}>
            {btnText}
          </button>
        );
      };

    if (!user?.username) {
        return <NotAuthorized user={user} setAppState={setAppState}/>
    } 

    const addButton = async () => {
        if (inputValue === "")
        {
            setErrors({input: "Please Enter Item Name"})
        }
        else
        {
            setErrors({input: null })
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
        }
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
    }

    

    const increaseQuanity = (index) => {
        const newItems = [...items];
    
        newItems[index].quantity++;
    
        setItems(newItems);
    };

    const decreaseQuanity = (index) => {
        const newItems = [...items];
    
        newItems[index].quantity--;
        if (newItems[index].quantity <= 0)
        {
            newItems[index].quantity = 1
        }

    
        setItems(newItems);
    };

    return (
        <div className={`shop ${theme} `}>
        <div className={theme}>
        <ThemeToggler />
        <div className={`mainShop ${theme}`}>
        <div className="ShoppingList">
            <div className="headerShoppL">
                <h1>Your Shopping List</h1>
            </div>
            <div className="aboutShop">
                <h2>Missing Any Ingredients? Add To Your Shopping List!</h2>
            </div>
            <div className="listItemS">
                <div className={`addItemSec box ${theme2}`}>
					<input value={inputValue} onChange={(e) => setInputValue(e.target.value)} className='add-item-input' placeholder='Add an item...' />
                    
                    <button className="addBtnS" onClick={() => addButton()}>Add Item</button>
					{/* <FontAwesomeIcon icon={faPlus} onClick={() => addButton()}/> */}
				</div>
                {errors.input && <span className="error">{errors.input}</span>}
                {/* <div className="addItembtnS">
                <button className="addBtnS" onClick={() => addButton()}>Add Item</button>
                </div> */}
                <div className="itemListSec">
                {items?.length === 0 ? <h2>Your Shopping List Is Empty! </h2> : items.map((item, index) => (
                                        <div className={`itemContainerSec ${theme2}`}>
                                                <div className="itemNameSec" onClick={() => selectItem(index)}>
                                                    {item.is_selected ? (
                                                        <>
                                                        <FontAwesomeIcon icon={faCheckCircle} />

                                                            <span className="completedCircleSec">{item.title}</span>
                                                    
                                                        </>
                                                        ) : (
                                                        <>
                                                        <FontAwesomeIcon icon={faCircle} />
                                                        <span>{item.title}</span>
                                                        </>
                                                    )}
                                                </div>
                                                <div className="quantitySec">
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
                                <div className="totalItemsSec">
                                    {/* <h4>Total: {totalItemCount}</h4> */}
                                    <button
                                    className="submitShopBtn"
                                    type="submit"
                                    onClick={submitForm}
                                    >Save</button>
                                </div>
                
            </div>
        </div>
        </div>
        </div>
      </div>
    )
    /*
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
    */
}
