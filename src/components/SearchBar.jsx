import React from "react"


const SearchBar = ({
    value,
    loading,
    handleSubmit,
    onChange
}) => {
    return(
        <form onSubmit={handleSubmit}>
            <input 
                value={value}
                disabled={loading}
                onChange={onChange}

                placeholder="Search Recipes"
                className="form-control"
            >
            </input>
            <input
            disabled={loading} 
                type="submit"
                className="btn"
                value="Search"
                />
        </form>
    )
}

export default SearchBar