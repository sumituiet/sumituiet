import { Container } from "react-bootstrap";
import Motion from "./motion";
import Background from "./background";
export default function Contact() {
    return (
        <Background>
        <Container style={
            {
                color: 'white',
                textAlign: 'center',
                padding: '5rem'
            }}>
        <Motion >
        <h1>Hire Me</h1>
        <p>
        I am currently looking for opportunities as a Machine Learning Engineer or Data Scientist. If you have a role that fits my profile, please get in touch.
        </p>
        <p>
        Email: <a href="mailto: sumitsainiuiet@gmail.com">Sumit</a>
        </p>
        </Motion>
        </Container>
        </Background>
    )};
