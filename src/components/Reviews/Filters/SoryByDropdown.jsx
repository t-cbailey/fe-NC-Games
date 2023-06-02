function SortByDropdown({ SetSortParam }) {
    function handleChange(event) {
        SetSortParam(event.target.value)

    }
    return (
        <form >

            <select onChange={handleChange} id="SortByDropdown">
                <option value='owner'>author</option>
                <option value='title'>title</option>
                <option value='created_at'>date created</option>
                <option value='votes'>votes</option>
                <option value='designer'>designer</option>
                <option value='comment_count'>comments</option>
            </select>

        </form>
    );
}

export default SortByDropdown