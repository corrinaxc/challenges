import FormInputs from "./FormInputs"
import Button from "./Button"

export default function Form(){
    return (
        <form>
            <FormInputs htmlFor={"motto"} name={"Motto"} id={"motto"}/>
            <FormInputs htmlFor={"notes"} name={"Notes"} id={"notes"}/>
            <Button />
        </form>
    )
}


