

function Cadastro() {
    return (
        <>
            <div className="container-fluid row">
                <div className="bg-primary col-sm">
                    <div className="text-center p-4">
                        <h1 className="container text-center p-1 text-light display-7">Cadastre-se!</h1>
                    </div>
                    <div className="bg-light container p-5 w-75">
                        <form className="mx-auto w-100 bg-info row border border-5 p-4">
                            <label className="p-41">
                                Nome
                                <input className="form-control form-control"  type="text" name="nome" />
                            </label>
                            <label className="p-1">
                                Sobrenome
                                <input className="form-control form-control"  type="text" name="sobrenome" />
                            </label>
                            <label className="p-1">
                                Telefone
                                <input className="form-control form-control"  type="text" name="telefone" />
                            </label>
                            <label className="p-1">
                                CPF
                                <input className="form-control form-control"  type="text" name="cpf" />
                            </label>
                            <label className="p-1">
                                Email
                                <input className="form-control form-control"  type="email" name="email" />
                            </label>
                                <form className="mx-auto w-100 bg-primary row border border-5 p-4">
                                    <h4 className="container text-center p-1">Endereço</h4>
                                    <label className="p-1">
                                        Endereço
                                        <input className="form-control form-control"  type="text" name="endereco" />
                                    </label>
                                    <label className="p-1">
                                        Número
                                        <input className="form-control form-control"  type="text" name="numero" />
                                    </label>
                                    <label className="p-1">
                                        Bairro
                                        <input className="form-control form-control"  type="text" name="bairro" />
                                    </label>
                                    <label className="p-1">
                                        Complemento
                                        <input className="form-control form-control"  type="text" name="complemento" />
                                    </label>
                                    <label className="p-1">
                                        CEP
                                        <input className="form-control form-control"  type="text" name="cep" />
                                    </label>
                                    <label className="p-1">
                                        Cidade
                                        <input className="form-control form-control"  type="text" name="cep" />
                                    </label>
                                </form>
                            <button type="submit" className="btn btn-light">
                                <h2>Cadastrar</h2>
                            </button>

                        </form>
                    </div>
                </div>
                <div className="bg-primary col-sm">
                    <div>
                    <img className="container-fluid mx-auto p-5" src="/src/assets/img/maos.png" alt="" />
                    </div>
                </div>
            </div>
            

        </>

    )
}

export default Cadastro