import CategoryDropdown from "./CategoryDropdown"
import OrderByDropdown from "./OrderByDropdown"
import SortByDropdown from "./SoryByDropdown"

function Filters({ SetCategoryName, SetCategories, categories, categoryName, SetOrderParam, SetSortParam }) {





    return <>

        <section className="filtersContainer">
            <SortByDropdown SetSortParam={SetSortParam} />
            <OrderByDropdown SetOrderParam={SetOrderParam} />
            <CategoryDropdown SetCategoryName={SetCategoryName} SetCategories={SetCategories} categories={categories} categoryName={categoryName} />
        </section>

    </>

}

export default Filters