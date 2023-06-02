import { useEffect, useState } from "react";
import { fetchCategories } from "../../../../Utils/fetchUtils";
import { useNavigate } from "react-router-dom";


function CategoryDropdown({ SetCategoryName, SetCategories, categories, categoryName }) {
    const navigate = useNavigate()

    const handleClick = (event) => {
        SetCategoryName(event.target.value);
        navigate(`/reviews/categories/${categoryName}`);

    }

    return (
        <form>
            <label htmlFor="categoryDropdown">Choose a category here</label>
            <select onChange={handleClick} id="categoryDropdown">
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