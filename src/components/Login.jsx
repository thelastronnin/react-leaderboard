import { useNavigate } from "react-router-dom"

export default function Login(){

    const navigate = useNavigate()

    async function login(formData){
        const username = formData.get("username")
        const password = formData.get("password")

        if(username != null && password != null){
            const response = await fetch('https://dropblockz.somee.com/LoginEndpoint', {
            method: 'POST',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({
                    Username: username, 
                    Password: password
                })
            });

            console.log("Login")
            console.log(response)
            const data = await response.json()
            console.log(data)
            console.log("Login")

            if(data.success){
                navigate('/Leaderboard')  
            }
        }
    }

    return <>
        <br /><br /><br /><br />
        <div className="container h-100">
            <div className="row h-100 justify-content-center align-items-center">
                <div className="col-md-5 col-lg-4">
                    <div className="card shadow login-card">
                        <div className="card-body p-4">

                            <div className="login-header">
                                <h2>Login</h2>
                            </div>

                            <form action={login}>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Username
                                    </label>
                                    <input type="text" className='form-control' name="username" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">
                                        Password
                                    </label>
                                    <input type="password" className='form-control' name="password" />
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary btn-login">
                                    Login
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

