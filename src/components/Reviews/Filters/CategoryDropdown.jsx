

function CategoryDropdown({ SetCategory }) {


    const handleClick = () => {
        SetCategory('roll-and-write')
    }

    return <button onClick={handleClick}> category</button>
}
export default CategoryDropdown