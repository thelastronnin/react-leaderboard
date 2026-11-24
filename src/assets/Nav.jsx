import { Link } from "react-router-dom"

export default function Nav(){

    async function handleLogout(){

        const response = await fetch('https://localhost:7229/Users/LogoutEndpoint', {
        method: 'POST',
        credentials: "include",
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        });

        console.log(response)
        const data = await response.json()
        console.log(data)
    }

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
                    <div className="container-fluid">
                        <a className="navbar-brand" asp-area="" asp-controller="Leaderboard" asp-action="Index">DropBlocks</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                            <ul className="navbar-nav flex-grow-1">
                                <li className="nav-item">
                                    <Link className="nav-link text-dark" id="nav-user" style={{cursor: "default"}}></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark" to={'/Leaderboard'}>Leaderboard</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark logout" to={'/'} onClick={() => handleLogout()}>Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}