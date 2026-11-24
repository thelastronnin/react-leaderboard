import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import checkAuth from "../service/checkAuth";
import Nav from "../assets/Nav";

export default function Leaderboard({setPlayer}){

    const navigate = useNavigate()
    const [leaderboard, setLeadboard] = useState([])

    useEffect(() => {
        const verifyAuth = async () => {
            const authenticated = await checkAuth();

            if(!authenticated.isAuthenticated){
                navigate('/')
            }

            if(authenticated.isAuthenticated){
                const getLeaderboard = async () =>{
                const response = await fetch('https://dropblockz.somee.com/Leaderboard/GetLeaderboard', {
                    method: 'POST',
                    credentials: "include",
                    headers: {
                        'Content-Type': 'application/json; charset=utf-8'
                    },
                    })

                    console.log("Leaderboard")
                    console.log(response)
                    const data = await response.json()
                    console.log(data)
                    console.log("Leaderboard")

                    setLeadboard(data)
                }

                getLeaderboard()
            }
        }

        verifyAuth()
    }, [navigate]);


    const handleEdit = (player) => {

        setPlayer({
            id: player.id,
            name: player.name,
            score: player.score,
        })

        navigate("/EditScore")
    }
    
    function handleAddScore(){

        navigate('/AddScore')
    }

    async function handleDelete(id) {

        console.log(id);

        const response = await fetch('https://dropblockz.somee.com/Leaderboard/DeleteEndpoint', {
            method: 'POST',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(id),
        });

        console.log(response)
        const data = await response.json()
        console.log(data)

        if(data.success){
            window.location.reload()
        }
    }
    
    return (
        <>
            <Nav />
            <div>
                <h2>Leaderboard</h2>

                <div className="container">
                    <table className="table table-bordered">
                        <thead className="table-light">
                            <tr>
                                <th>Rank</th>
                                <th>Score</th>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {leaderboard.map((player, index) => (
                            
                                <tr key={player.id}>
                                    <td>{index + 1}</td>
                                    <td>{player.score}</td>
                                    <td>{player.name}</td>
                                    <td>
                                        <a className="btn btn-info text-white" onClick={() => handleEdit(player)} >Edit</a>
                                        <a type="submit" className="btn btn-danger ms-1" onClick={() => handleDelete(player.id)}>Delete</a> 
                                    </td>
                                </tr>

                                
                            ))}
                        </tbody>
                    </table>

                    <button className="fab" onClick={handleAddScore}>+</button>
                </div>
            </div>
        </>
    )
}