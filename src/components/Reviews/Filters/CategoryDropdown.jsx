import { useEffect, useState } from "react";
import { fetchCategories } from "../../../../Utils/fetchUtils";



function CategoryDropdown({ SetCategoryName, SetCategories, categories, categoryName }) {


    const handleChange = (event) => {
        event.target.value === 'select a category' ? SetCategoryName('') :
            SetCategoryName(event.target.value);
    }

    const handleClick = () => {
        SetCategoryName('')

    }


    return (
        <form >

            <select onChange={handleChange} id="categoryDropdown">
                {categories.map((category) => {
                    return (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    );
                })}
            </select>
            <button onClick={handleClick} type="reset">reset</button>
        </form>
    );
}
export default CategoryDropdown