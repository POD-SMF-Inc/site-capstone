import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

const addField = (e, recipe, setRecipe) => {
  e.preventDefault();
  const name = e.target.name;

  let temp = recipe[name].concat(['']);
  setRecipe(prevState => ({ ...prevState, [name]: temp }));
};

const removeField = (e, recipe, setRecipe) => {
  e.preventDefault();
  const name = e.target.name;

  if (recipe[name].length > 1) {
    let temp = recipe[name].slice(0, -1);
    setRecipe(prevState => ({ ...prevState, [name]: temp }));
  }
};

function NewRecipeForm(props) {
  const { isModalOpen, setModal, days, addRecipe } = props;
  const context = useContext(ThemeContext);
  const theme = context.isLightTheme ? context.cardLight : context.cardDark;
  const modalActive = isModalOpen ? 'is-active ' : '';

  const initialState = {
    title: '',
    name: '',
    ingredients: [''],
    steps: [''],
    day: '',
    
  };
  
      
 

  const [recipe, setRecipe] = useState(initialState);

  const onChange = e => {
    const { name, value } = e.target;
    setRecipe(prevState => ({ ...prevState, [name]: value }));
  };

  const arrayChange = (e, ndx) => {
    const { name, value } = e.target;

    let ings = [...recipe[name]];
    ings[ndx] = value;

    setRecipe(prevState => ({ ...prevState, [name]: ings }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(recipe);
    addRecipe(recipe);
    resetForm(e);
  };

  const resetForm = e => {
    e.preventDefault();
    setRecipe({...initialState});
    setModal(!isModalOpen);
  };

  return (
    <div className={`modal ${modalActive}`}>
      <div className="modal-background"></div>
      <div className={`modal-card`}>
        <header
          className={`has-background-primary has-text-white modal-card-head `}
        >
          <p className="modal-card-title  has-text-white">New recipe</p>
          <button
            className="delete"
            aria-label="close"
            onClick={resetForm}
          ></button>
        </header>
        <section className={`${theme} modal-card-body`}>
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className={`${theme} label`}>Meal type</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="title"
                  required
                  value={recipe.title}
                  onChange={onChange}
                  placeholder="e.g Breakfast, Lunch, Dinner"
                />
              </div>
            </div>
            <div className="field">
              <label className={`${theme} label`}>Recipe Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="name"
                  required
                  value={recipe.name}
                  onChange={onChange}
                  placeholder="e.g BLT Sandwich, Baked Potato"
                />
              </div>
            </div>
            <div className="field">
              <label className={`${theme} label`}>Day</label>
              <div className="control">
                <div className="select">
                  <select
                    value={recipe.day}
                    onChange={onChange}
                    name="day"
                    required
                  >
                    <option value="" defaultValue disabled hidden>
                      Choose a day
                    </option>
                    {days.map(day => (
                      <option key={day}>{day}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="field">
              <label className={`${theme} label`}>
                Ingredients
                <button
                  className="button is-small is-info is-outlined is-rounded is-primary mx-2"
                  name="ingredients"
                  onClick={e => addField(e, recipe, setRecipe)}
                >
                  Add
                </button>
                <button
                  className="button is-small is-info is-outlined  is-rounded is-danger mx-2"
                  name="ingredients"
                  onClick={e => removeField(e, recipe, setRecipe)}
                >
                  Remove
                </button>
              </label>
              <div className="control">
                {recipe.ingredients.map((ing, ndx) => {
                  return (
                    <input
                      className="input is-small my-1"
                      type="text"
                      value={ing}
                      name="ingredients"
                      required
                      onChange={e => arrayChange(e, ndx)}
                      key={ndx}
                      placeholder="Enter ingredient"
                    />
                  );
                })}
              </div>
            </div>
            <div className="field">
              <label className={`${theme} label`}>
                Steps
                <button
                  name="steps"
                  className="button is-small is-rounded is-info is-outlined is-primary mx-2"
                  onClick={e => addField(e, recipe, setRecipe)}
                >
                  Add
                </button>
                <button
                  name="steps"
                  className="button is-small is-rounded is-info is-outlined is-danger mx-2"
                  onClick={e => removeField(e, recipe, setRecipe)}
                >
                  Remove
                </button>
              </label>
              <div className="control">
                {recipe.steps.map((step, ndx) => {
                  return (
                    <input
                      className="input is-small my-1"
                      type="text"
                      value={step}
                      name="steps"
                      required
                      onChange={e => arrayChange(e, ndx)}
                      key={ndx}
                      placeholder="Enter step"
                    />
                  );
                })}
              </div>
            </div>
            <footer
              className={`modal-card-foot ${theme}`}
              style={{ justifyContent: 'center' }}
            >
              <input className="button is-success  round-border is-info is-outlined is-small " type="submit" />
              <button
                className="button is-small round-border  is-info is-outlined is-danger is-bold "
                aria-label="close"
                onClick={resetForm}
              >
                Cancel
              </button>
            </footer>
          </form>
        </section>
      </div>
    </div>
  );
}

export default NewRecipeForm;