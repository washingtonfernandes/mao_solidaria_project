

function Header () {

    return (
        <>
            <div className="container-fluid bg-primary">
                <div className="container-fluid row p-5 ">
                    <div className="col-sm p-5">
                        <img className="col-sm " src="/src/assets/img/logo_mao_solidaria_branco.png" alt="" />
                    </div>
                    <div className="col-sm ">
                        <h1 className="text-center text-light p-5 display-2">
                            Juntos somos mais fortes!
                        </h1>
                    </div>
                    <div className="col-sm">
                        <ul className="row text-center nav p-1">
                            <li className="col-sm nav-item ">
                                <a className="h4 nav-link btn-light p-4" href="/home">Home</a>
                            </li>
                            <li className="col-sm nav-item">
                                <a className="h4 nav-link btn-light p-4" href="/sobre">Sobre</a>
                            </li>
                            <li className="col-sm nav-item">
                                <a className="h4 nav-link btn-light p-4" href="/cadastro">Cadastro</a>
                            </li>
                            <li className="col-sm nav-item">
                                <a className="h4 nav-link btn-dark p-4" href="login">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>

    );

}

export default Header