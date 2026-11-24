import { useNavigate } from "react-router-dom";
import Nav from "../assets/Nav";

export default function Users(){

    const navigate = useNavigate()
    const players = [
        { id: 1, name: "John", score: 1500 },
        { id: 2, name: "Jane", score: 1200 },
        { id: 3, name: "Mark", score: 1000 }
    ];

    async function handleAdd(){
        
        navigate('/AddUser')
    }

    return (
        <>
            <Nav />
            <div>
                <h2>Users</h2>

                <div className="container">
                    <table className="table table-bordered">
                        <thead className="table-light">
                            <tr>
                                <th>#</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            {players.map(player => (
                                <tr key={player.id}>
                                    <td>{player.id}</td>
                                    <td>{player.name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <button className="fab" onClick={handleAdd}>+</button>
                </div>
            </div>
        </>
    )
}