import './employees-add-form.css';

const EmployeesAddForm = () => {
    return (
        <div className="app-add-form">
            <h3>Dodaj nowego pracownika</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Jak się nazywa??" />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="Wynagrodzenie w euro?" />

                <button type="submit"
                        className="btn btn-outline-light">Dodaj</button>
            </form>
        </div>
    )
}

export default EmployeesAddForm;