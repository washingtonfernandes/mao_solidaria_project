
import Header from "/src/components/Header"
import Container from "/src/components/Container"
import Footer from "/src/components/Footer"
import { Outlet } from "react-router-dom"



function PaginaBase() {
    return (
        <main>
            <Header />
            <Container>
                <Outlet />
            </Container>
            <Footer />

        </main>
    )
}
export default PaginaBase