import './app-filter.css';

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button
            className="btn btn-light"
            type="button"
            >
                Wszyscy pracownicy
            </button>
            <button
            className="btn btn-outline-light"
            type="button"
            >
                Podwyżka wynagrodzenia
            </button>
            <button
            className="btn btn-outline-light"
            type="button"
            >
                Wynagrodzenie powyżej 1000 euro
            </button>
        </div>
    )
}

export default AppFilter;