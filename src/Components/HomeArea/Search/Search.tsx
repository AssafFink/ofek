import { ChangeEvent, SyntheticEvent, useState } from "react";
import "./Search.css";

function Search(): JSX.Element {

    const [textToSearch, setTextToSearch] = useState<string>("");

    function handleChange(args: ChangeEvent<HTMLInputElement>): void {
        const value = args.target.value;
        setTextToSearch(value);
    }

    function searchItem(): void {
        alert("Searching for " + textToSearch);
        setTextToSearch("");
    }

    return (
        <div className="Search">
			<label>Search something: </label>
            <input type="search" onChange={handleChange} value={textToSearch} />
            <button onClick={searchItem}>🔍</button>
            <span>{textToSearch}</span>
        </div>
    );
}

export default Search;
