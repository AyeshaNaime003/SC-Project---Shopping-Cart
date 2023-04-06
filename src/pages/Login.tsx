import { Container } from "react-bootstrap";

export function Login() {
    return (
        <>
            <Container>
                <form action="">
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="submit" value="Login" />

                </form>
            </Container>
        </>
    )
}