import Entry from "./Entry.jsx"
import "./entries.css";

export default function Entries() {
    return (
        <div>
            <nav>
                <a className="all-entries">All Entries</a>
                <a className="favourites">Favourites</a>
            </nav>
        <Entry />
        </div>
    )
}