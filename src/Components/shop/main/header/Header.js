import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { useGloballContext } from "../../../../Contexts/context";

const Header = () => {
  // .....................................total cart.............................................

  const { cartItems } = useGloballContext();

  let showQty = 0;

  cartItems &&
    cartItems.map((cartItem) => {
      showQty += cartItem.qty;
    });

  // ...................................../total cart.............................................

  return (
    <div>
      <header className="header mb-4">
        <section className="top-header">
          <section className="container-xxl ">
            <section className=" d-xl-flex justify-content-xl-between align-items-xl-center py-3">
              <section className=" d-flex justify-content-between align-items-center d-md-block">
                <Link className="text-decoration-none my-1" to="/">
                  <img
                    className="d-flex justify-contents-between   "
                    src="../../../../images/logo/8.png"
                    alt="logo"
                  />
                </Link>
              </section>

              <section className="my-3 my-md-auto search-wrapper">
                <section className="search-box">
                  <section className="search-textbox">
                    <span className="fa fa-search"></span>
                    <input
                      id="search"
                      type="text"
                      className=""
                      placeholder="جستجو ..."
                      autoComplete="off"
                    />
                  </section>
                </section>
              </section>

              <section className="mt-3 mt-md-auto text-end">
                <Dropdown className="d-inline px-md-3">
                  <Dropdown.Toggle variant="" id="dropdown-basic text-dark">
                    <Link to="/login" className="text-dark">
                      <span className="fs-4 fa fa-user"></span>
                    </Link>
                  </Dropdown.Toggle>

                  <Dropdown.Menu
                    className="dropdown-menu dropdown-menu-start custom-drop-down"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <Dropdown.Item
                      className="dropdown-item text-start fa fa-user-circle fs-6"
                      href="/"
                    >
                      {" "}
                      پروفایل کاربری{" "}
                    </Dropdown.Item>
                    <Dropdown.Item
                      className="dropdown-item text-start fa fa-newspaper-o fs-6"
                      href="/"
                    >
                      {" "}
                      سفارشات{" "}
                    </Dropdown.Item>
                    <Link to="/favorite">
                      <Dropdown.Item
                        className="dropdown-item text-start fa fa-heart fs-6"
                        href="/"
                      >
                        {" "}
                        لیست علاقه مندی{" "}
                      </Dropdown.Item>
                    </Link>
                    <section>
                      <hr className="dropdown-divider" />
                    </section>
                    <Dropdown.Item
                      className="dropdown-item text-start fa fa-sign-out fs-6"
                      href="/"
                    >
                      {" "}
                      خروج{" "}
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <section className="header-cart d-inline ps-3 border-start position-relative">
                  <Link
                    to="/Cart"
                    className="btn btn-link position-relative text-dark header-cart-link"
                  >
                    <span className="fs-4 fa fa-shopping-cart"></span>
                  </Link>
                  <span
                    className="position-absolute  translate-middle badge rounded-pill bg-danger  "
                    style={{ marginTop: "40px" }}
                  >
                    {showQty}
                  </span>
                  <section className="header-cart-dropdown">
                    <section className="border-bottom d-flex justify-content-start p-2">
                      <span className="text-muted"> </span>
                      <Link
                        className="text-decoration-none text-info "
                        to="/cart"
                      >
                        مشاهده سبد خرید{" "}
                      </Link>
                    </section>

                    <section className="header-cart-dropdown-footer border-top d-flex justify-content-between align-items-center p-2">
                      <section className="">
                        <Link
                          className=" btn btn-danger btn-sm d-flex "
                          to="/cart"
                          style={{ marginRight: "120px" }}
                        >
                          ثبت سفارش
                        </Link>
                      </section>
                    </section>
                  </section>
                </section>
              </section>
            </section>
          </section>
        </section>

        <Navbar expand={"xl"} className="fs-6 canvasIndex">
          <Container>
            <Navbar.Toggle
              className="toggleMove"
              aria-controls={`offcanvasNavbar-expand-expand-xl`}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-xl`}
              aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xl`}>
                  <Link className="text-decoration-none my-1" to="/">
                    <img
                      className="d-flex justify-contents-between   "
                      src="../../../../images/logo/8.png"
                      alt="logo"
                    />
                  </Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <NavDropdown
                  title="دسته بندی کالاها"
                  id={`offcanvasNavbarDropdown-expand-expand-xl`}
                  className="justify-content-start my-2 fw-bold"
                >
                  <NavDropdown.Item href="#action3" className="text-end">
                    کالای دیجیتال
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4" className="text-end">
                    لوازم جانبی موبایل
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5" className="text-end">
                    خانه و آشپزخانه
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav className="justify-content-start flex-grow-1 px-3 fw-bold">
                  <Nav.Link href="#action1">سوپرمارکت</Nav.Link>
                  <Nav.Link href="#action2">تخفیف ها و پیشنهادها</Nav.Link>
                  <Nav.Link href="#action3">آمازون من</Nav.Link>
                  <Nav.Link href="#action4">آمازون پلاس</Nav.Link>
                  <Nav.Link href="#action5">درباره ما</Nav.Link>
                  <Nav.Link href="#action6">فروشنده شوید</Nav.Link>
                  <Nav.Link href="#action7" className="D-header-link">فرصت های شغلی</Nav.Link>
                  <Nav.Link href="#action7">
                    <Link to="/compare" className="D-header-link">مقایسه محصولات</Link>
                   </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </header>
    </div>
  );
};

export default Header;
