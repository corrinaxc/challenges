export default function FormInputs( {htmlFor ,name, id} ) {
    return (
    <>
    <label className = "form-label" htmlFor={htmlFor}>{name}</label>
    <input type="text-box" id={id}></input>
    </> )
}