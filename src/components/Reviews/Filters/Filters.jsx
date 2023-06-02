import CategoryDropdown from "./CategoryDropdown"

function Filters({ SetCategoryName, SetCategories, categories, categoryName }) {
    console.log(categoryName)

    return <>
        <CategoryDropdown SetCategoryName={SetCategoryName} SetCategories={SetCategories} categories={categories} categoryName={categoryName} />
    </>

}

export default Filters