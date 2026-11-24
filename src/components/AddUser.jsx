import { useNavigate } from "react-router-dom"

export default function AddScore(){

    const navigate = useNavigate()

    async function addUser(){

    }

    function handleBack(){

        navigate('/Users')
    }

    return (
        <>
            <br/><br/><br/><br/>
            <div className="row h-100 justify-content-center align-items-center">
                <div className="col-md-5 col-lg-4">
                    <div className="card-body p-4">

                        <div className="login-header">
                            <h2>User</h2>
                        </div>

                        <form action={addUser}>
                            <div className="mb-3">
                                <label className="form-label">
                                    Name
                                </label>
                                <input type="text" className='form-control' name="username" />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">
                                    Score
                                </label>
                                <input type="number" className='form-control'/>
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