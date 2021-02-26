import { Container } from "react-bootstrap"

const App = () => {
  return (
    <>
      <main>
        <Container
          className="d-flex flex-column justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <h1 className="text-center">Welcome!</h1>
          <h3 className="text-center">
            Get started by editing{" "}
            <code className="text-danger">src/App.tsx</code>
          </h3>
        </Container>
      </main>
    </>
  )
}

export default App
