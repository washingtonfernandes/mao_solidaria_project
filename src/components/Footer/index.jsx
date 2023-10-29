
function Footer(){

    return(
		<>
			<footer className="conteiner bg-secondary p-5">
				<div className="bg-white p-1">
					
				</div>
				<div className="container-fluid row p-4">
					<div className="col-sm ">
						<img className="h-100 p-3 shadow-sm bg-dark" src="/src/assets/img/logo_mao_solidaria_branco.png" alt="" />
					</div>
					<div className="col-sm bg-primary">
					<h1 className="text-center text-light p-5">
                            Juntos somos mais fortes!
                        </h1>
					</div>
					<div className="container-fluid  col-sm"> 
						<h4 className="text-white text-center p-4">Visite nossas redes sociais!</h4>
						<ul className="d-flex justify-content-around p-3 list-inline top-link link">
							<li className="p-2"><a className="h3 text-white " href="https://facebook.com">Facebook</a></li>
							<li className="p-2"><a className="h3 text-white " href="https://instagram.com">Instagram</a></li>
							<li className="p-2"><a className="h3 text-white " href="https://youtube.com">Youtube</a></li>

						</ul>
					</div>
					<div className="text-center p-3">
							<span className="text-white">Copyright © <a className="text-light" href="https://ulbra.br">Direitos reservados!!</a></span>
					</div>
				</div>
			</footer>
		</>

    )

}

export default Footer