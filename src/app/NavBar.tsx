"use client";

import Link from "next/link";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <Navbar
      bg="primary"
      variant="dark"
      sticky="top"
      expand="sm"
      collapseOnSelect
    >
      <Container>
        <Navbar.Brand as={Link} href="/">
          Next.JS Image Gallery
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav>
            <Nav.Link as={Link} href="/static" active={pathname === "/static"}>
              Static
            </Nav.Link>
            <Nav.Link
              as={Link}
              href="/dynamic"
              active={pathname === "/dynamic"}
            >
              Dyanmic
            </Nav.Link>
            <Nav.Link as={Link} href="/isr" active={pathname === "/isr"}>
              Incremental Static Regeneration
            </Nav.Link>
            <NavDropdown title="Topics" id="topics-dropdown">
              <NavDropdown.Item as={Link} href="/topics/Coffee">
                Coffee
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/topics/Hiking">
                Hiking
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/topics/Cycling">
                Cycling
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/search">
                Search
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
