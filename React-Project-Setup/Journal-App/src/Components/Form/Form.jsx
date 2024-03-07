// import FormInputs from "./FormInputs"
import Button from "./Button"

export default function Form(){
    return (
        <form className = "inputForm">
            <h2>New Entry</h2>
            <label className = "input-label" htmlFor="Motto">Motto</label>
            <input type="text-box" id="motto-input"></input>
            <label className = "input-label" htmlFor="notes">Notes</label>
            <input type="text-box" id="notes-input" className="notes-input"></input>
            <Button />
        </form>
    )
}


