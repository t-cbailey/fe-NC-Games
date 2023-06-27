import CategoryDropdown from "./CategoryDropdown"
import OrderByDropdown from "./OrderByDropdown"
import SortByDropdown from "./SoryByDropdown"
import '../../../../Styling/filters.css'

function Filters({ SetCategoryName, SetCategories, categories, categoryName, SetOrderParam, SetSortParam, sortParam }) {





    return <>

        <section className="filtersContainer">
            <SortByDropdown sortParam={sortParam} SetSortParam={SetSortParam} />
            <OrderByDropdown SetOrderParam={SetOrderParam} />
            <CategoryDropdown SetCategoryName={SetCategoryName} SetCategories={SetCategories} categories={categories} categoryName={categoryName} />
        </section>

    </>

}

export default Filters