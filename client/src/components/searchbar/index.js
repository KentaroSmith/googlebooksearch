import React from "react";

function SearchBar() {
    return (
        <div>
            <div className="jumbotron">
                <h1 className="display-4">Search for a Book!</h1>
                <div className="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Please enter a book title!" aria-label="Recipient's username" aria-describedby="button-addon2">
                    </input>
                    <div className="input-group-append">
                        <button className="btn btn-outline-primary" type="button" id="button-addon2">Search</button>
                    </div>
                </div>
            </div>
            <div className="jumbotron">
                <h1 className="display-4">Results:</h1>

            </div>

        </div>







    )
}

export default SearchBar;