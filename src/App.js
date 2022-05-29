import React, { Suspense, Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./App.css";
import { useNavigate } from "react-router-dom";
import { CgMenuGridO } from "react-icons/cg";
import { BsBellFill, BsFillQuestionCircleFill } from "react-icons/bs";
const routes = [
  {
    exact: true,
    path: "/",
    component: React.lazy(() => import("./pages/Home/index")),
  },
  {
    exact: true,
    path: "/new-order",
    component: React.lazy(() => import("./pages/NewOrder/index")),
  },
  {
    exact: true,
    path: "/step1",
    component: React.lazy(() =>
      import("./pages/ConfigureNewOrder/NewOrderPart1")
    ),
  },
  {
    exact: true,
    path: "/step2",
    component: React.lazy(() =>
      import("./pages/ConfigureNewOrder/NewOrderPart2")
    ),
  },
  {
    exact: true,
    path: "/preview",
    component: React.lazy(() =>
      import("./pages/ConfigureNewOrder/PreviewOrder")
    ),
  },
  {
    component: () => <Navigate to='/404' />,
  },
];

const history = createBrowserHistory();

function App() {
  return (
    <div className='App'>
      <Router history={history}>
        <RenderRoutes data={routes} />
      </Router>
    </div>
  );
}

export default App;

function RenderRoutes(props) {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Routes>
        {props.data.map((route, i) => {
          const Component = route.component;

          return (
            <Route
              exact={route.exact}
              key={i}
              path={route.path}
              element={
                <MainLayout>
                  <Component />
                </MainLayout>
              }
            />
          );
        })}
      </Routes>
    </Suspense>
  );
}

const MainLayout = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar collapseOnSelect bg='dark' variant='dark'>
        <Container>
          <Navbar.Brand onClick={() => navigate("/")}>
            <img
              alt=''
              src='images/logo.png'
              height='30'
              className='d-inline-block align-top'
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'></Nav>
            <Nav>
              <Nav.Link
                style={{ fontSize: 18, marginRight: 16 }}
                onClick={() => navigate("/new-order")}
              >
                Add
              </Nav.Link>

              <Nav.Link
                style={{ fontSize: 18, marginRight: 16 }}
                onClick={() => navigate("/step1")}
              >
                step1
              </Nav.Link>
              <Nav.Link
                style={{ fontSize: 18, marginRight: 16 }}
                onClick={() => navigate("/step2")}
              >
                step2
              </Nav.Link>
              <Nav.Link
                style={{ fontSize: 18, marginRight: 16 }}
                onClick={() => navigate("/preview")}
              >
                preview
              </Nav.Link>
              <Nav.Link onClick={() => navigate("/")}>
                <CgMenuGridO style={{ fontSize: 24, marginRight: 16 }} />
              </Nav.Link>
              <Nav.Link eventKey={2} onClick={() => navigate("/")}>
                <BsBellFill style={{ fontSize: 22, marginRight: 16 }} />
              </Nav.Link>
              <Nav.Link eventKey={2} onClick={() => navigate("/")}>
                <BsFillQuestionCircleFill
                  style={{ fontSize: 22, marginRight: 16 }}
                />{" "}
              </Nav.Link>
              <Nav.Link eventKey={2} onClick={() => navigate("/")}>
                <img src='images/profile.png' height='30' />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div>{children}</div>
    </div>
  );
};
