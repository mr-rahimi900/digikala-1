import React,{useState , useEffect} from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import { useGloballContext } from "../../../../Contexts/context";
import Swal from "sweetalert2";

const AddProduct = ({ uniqProduct }) => {
  const { cartItems, setCartItems } = useGloballContext();

  ////------------------Add Product to cart
  const addHandler = (product) => {
    const exist = cartItems.find((element) => element.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((element) =>
          element.id === product.id ? { ...exist, qty: exist.qty + 1 } : element
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
    Swal.fire({
      title: "عملیات با موفقیت انجام شد",
      text: "محصول به سبد خرید اضافه شد",
      icon: "success",
      confirmButtonText: "حله",
      closeOnEsc: true,
    });
  };
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // .....................................total price product.............................................

  // const cart = JSON.parse(localStorage.getItem(`cartItems`));
  // const inputValue = cart.find((element) => element.id === myproduct.id);
  // console.log(inputValue)

  // ...................................../total price product.............................................

  const [show, setShow] = useState(false);
  function commafy(num) {
    var str = num.toString().split(".");
    if (str[0].length >= 5) {
      str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
    }
    if (str[1] && str[1].length >= 5) {
      str[1] = str[1].replace(/(\d{3})/g, "$1 ");
    }
    return str.join(".");
  }

  return (
    <section className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
      <article className="p-3 shadow-sm rounded bg-white">
        <section>
          <div className="d-flex justify-content-between border-bottom">
            <p className="R-pfont">قیمت کالا </p>
            <span className="R-pfont">{commafy(uniqProduct.price)}</span>
          </div>
          {/* <div className="d-block w-100 mt-3 d-flex justify-content-between">
                        <p className="R-pfont">جمع کل </p>
                        <span className="R-pfont">111</span>
                    </div> */}
          <button
            onClick={() => addHandler(uniqProduct)}
            className="btn btn-danger rounded-1 d-block w-100 "
          >
            افزودن به سبد خرید
          </button>
        </section>
      </article>

      <ToastContainer position="bottom-start">
        <Toast
          onClose={() => setShow(false)}
          show={show}
          delay={3000}
          autohide
          className="bg-success text-white m-3"
        >
          <Toast.Header>
            <strong className="me-auto">کاربر گرامی</strong>
          </Toast.Header>
          <Toast.Body>محصول با موفقیت به سبد خرید شما اضافه شد</Toast.Body>
        </Toast>
      </ToastContainer>
    </section>
  );
};

export default AddProduct;
