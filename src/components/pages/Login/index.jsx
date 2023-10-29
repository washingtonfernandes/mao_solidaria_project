
function Login() {
    return (
        <>

            <div className="bg-info">
                <div className="text-center p-5">
                    <h1 className="container text-center  text-light">Login</h1>
                </div>
                <div className="container p-2">
                    <form className="mx-auto w-50 bg-primary row border border-5 p-4">
                        <label className="p-2 text-light">
                            <h4>Email</h4>
                            <input className="form-control form-control"  type="email" name="email" />
                        </label>
                        <label className=" p-2 text-light">
                            <h4>Senha</h4>
                            <input className="form-control form-control" type="password" name="password" />
                        </label>
                        <button type="submit" className="btn btn-info">
                            <h2>Entrar</h2>
                        </button>

                        <button type="submit" className="container w-50 btn btn text-light ">
                            <h5>Esqueci a senha!</h5>
                        </button>
                    </form>
                </div>
            </div>
        </>

    )
}

export default Login