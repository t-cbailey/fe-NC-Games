function OrderByDropdown({ SetOrderParam }) {

    function handleChange(event) {
        SetOrderParam(event.target.value)

    }
    return (
        <form >

            <select onChange={handleChange} id="OrderByDropdown">
                <option value='asc'>ASC</option>
                <option value='desc'>DESC</option>
            </select>

        </form>
    );

}

export default OrderByDropdown