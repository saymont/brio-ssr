import NavbarT from "../components/NavbarTest";
import DemoNavbar from "../components/Navbars/DemoNavbar.jsx"

import { Container, Button } from "reactstrap";

import image from "../assets/img/brand/blue.png";

const Index = () => (
    <>
        <section>
            <NavbarT />
            <h1>Hello World</h1>
        </section>
        <Container>
            <img src={image} alt="..." />
            <Button
                className="btn-icon mb-3 mb-sm-0"
                color="info"
                href="/"
            >
                Botão
                </Button>

        </Container>
    </>
);

export default Index;