

function Home() {
    return(

        <div className="p-5 row bg-dark">
            <div className="container-fluid p-3 col-sm-3">
                <div className="h-100 container-fluid  text-center col-sm">
                    <img className="h-100 bg-white" src="/src/assets/img/logo_maos_colors.png" alt="" />
                </div>

                <div className="text-center p-2 col-sm">
                    <div>
                        <p className="text-center text-light ">Encontre campanhas de 
                            doação ativas em sua região,<br></br>
                            Bem como locais de coleta de 
                            materiais próximo a você.
                        </p>
                    </div>

                </div>
            </div>

            <div className="container-fluid p-3 col-sm-3">
                <div className=" h-100 text-center">
                    <img className="bg-white h-100" src="/src/assets/img/logo_doacao.png" alt="" />
                </div>
                
                <div className="text-center p-2 col-sm">
                    <div>
                        <p className="text-center text-light">Encontre e explore uma 
                            variedade de oportunidades<br></br>
                            de voluntariado em sua região.

                        </p>
                    </div>
                </div>
            </div>
        </div>


    )
}
export default Home