import { useEffect, useState } from "react";
import { fetchCategories } from "../../../../Utils/fetchUtils";



function CategoryDropdown({ SetCategoryName, categories }) {


    const handleChange = (event) => {
        event.target.value === 'All Categories' ? SetCategoryName('') :
            SetCategoryName(event.target.value);
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

        </form>
    );
}
export default CategoryDropdown