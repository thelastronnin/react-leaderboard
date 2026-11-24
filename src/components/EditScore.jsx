import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import checkAuth from "../service/checkAuth";
import Nav from "../assets/Nav";

export default function EditScore({player}){

    const navigate = useNavigate()

    useEffect(() => {

        checkAuth()
    }, [])

    async function editScore(formData){
        const score = formData.get("score")
        const playerName = formData.get("name")

        const response = await fetch('https://dropblockz.somee.com/Leaderboard/EditEndpoint', {
            method: 'POST',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({
                    Id: player.id,
                    Score: score, 
                    Name: playerName,
                })
            });

            console.log("EditScore")
            console.log(response)
            const data = await response.json()
            console.log(data)
            console.log("EditScore")

        if(data.success){
            
            navigate('/Leaderboard')
        }
    }

    function handleBack(){

        navigate('/Leaderboard')
    }

    return (
        <>
            <Nav />
            <div className="row h-100 justify-content-center align-items-center">
                <div className="col-md-5 col-lg-4">
                    <div className="card-body p-4">

                        <div className="login-header">
                            <h2>Score</h2>
                        </div>

                        <form action={editScore}>

                            <div className="mb-3" style={{display : "none"}}>
                                <input type="number" name="id" id="" defaultValue={player.id} style={{display : "none"}}/>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">
                                    Name
                                </label>
                                <input type="text" className='form-control' name="name" style={{textTransform: "uppercase"}} defaultValue={player.name} />
                                {/*  */}
                            </div>

                            <div className="mb-3">
                                <label className="form-label">
                                    Score
                                </label>
                                <input type="number" className='form-control' name="score" defaultValue={player.score} />
                                {/*  */}
                            </div>

                            <button
                                type="submit"
                                className="btn btn-success btn-login">
                                Save
                            </button>
                        </form>
                            <div className="pt-2">
                                <button
                                    className="btn btn-danger btn-login"
                                    onClick={handleBack}>
                                    Back
                                </button>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}