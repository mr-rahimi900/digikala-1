// import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";
import { set, useForm } from "react-hook-form";
import PassStrengh from "./PassStrengh";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const [show, setShow] = useState("password");
  const [icon, setIcon] = useState("fa fa-eye-slash");
  const handleIcon = () => {
    show === "password" ? setShow("text") : setShow("password");
    icon === "fa fa-eye-slash"
      ? setIcon("fa fa-eye")
      : setIcon("fa fa-eye-slash");
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const redirectToMain = () => {
    setTimeout(() => {
      navigate("/", { replace: true });
    }, 3000);
  };

  const [password, setPassword] = useState("");
  let users;
  const onSubmit = (data) => {
    let isIn = false;
    if (JSON.parse(localStorage.getItem("register"))) {
      users = JSON.parse(localStorage.getItem("register"));
      users.map((user) => {
        if (user.email === data.email) {
          toast.error(`این پست الکترونیک قبلا ثبت شده است`, {
            position: "top-right",
            rtl: true,
            closeButton: true,
            autoClose: 2000,
          });
          isIn = true;
        }
      });
      if (isIn === false) {
        let uniqId = Date.now();
        users.push({
          id: Math.floor(uniqId / 10000),
          email: data.email,
          password: data.password,
        });

        localStorage.setItem("register", JSON.stringify(users));
        toast.success("ثبت نام با موفقیت انجام شد", {
          position: "top-right",
          rtl: true,
          autoClose: 2000,
        });
        redirectToMain();
      }
    } else {
      users = [];
      users.push({
        id: Date.now(),
        email: data.email,
        password: data.password,
      });
      localStorage.setItem("register", JSON.stringify(users));
      toast.success("ثبت نام با موفقیت انجام شد", {
        position: "top-right",
        rtl: true,
        autoClose: 2000,
      });
      redirectToMain();
    }
  };

  return (
    <section className="h-100 D-centering flex-column mt-4 mb-5">
      <section className="D-loginBox mt-5">
        <header className="D-centering mt-2 mb-5">
          <div className="D-loginLogo">
            <img src="Images/logo/4.png" alt="لوگوی فروشگاه" />
          </div>
        </header>

        <main>
          <div className="D-header-form">
            <h1 className="h6 fw-bold  mb-3">
              ثبت نـام /{" "}
              <span>
                <Link to="/login">ورود</Link>
              </span>
            </h1>
          </div>

          <div className="D-centering flex-column mt-3">
            <form action="" onSubmit={handleSubmit(onSubmit)}>
              <div className="D-emailAlert-validate">
                <label htmlFor="email" className="form-label D-inputLabels">
                  پست الکترونیک خود را وارد کنید
                </label>
                <input
                  type="text"
                  className="form-control D-login-input py-3"
                  {...register("email", {
                    required: true,
                    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                  })}
                />
                {errors.email?.type === "required" && (
                  <span
                    className="text-danger D-required"
                    // data-empty="پست الکترونیک الزامی است"
                  >
                    <i className="fa fa-info-circle me-1"></i>
                    پست الکترونیک الزامی است
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span
                    className="text-danger D-required"
                    // data-falseValue="پست الکترونیک را صحیح وارد کنید"
                  >
                    <i className="fa fa-info-circle me-1"></i>
                    پست الکترونیک را صحیح وارد کنید
                  </span>
                )}
              </div>

              <div className="D-passalert-validate">
                <label htmlFor="password" className="form-label D-inputLabels">
                  رمــز عبـور خود را وارد کنید
                </label>
                <input
                  type={show}
                  className="form-control D-login-input py-3"
                  {...register("password", {
                    required: true,
                    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
                    minLength: 8,
                  })}
                  onChange={(e) => setPassword(e.target.value)}
                />

                {errors.password?.type === "required" && (
                  <span
                    className="text-danger D-required"
                    // data-empty="رمز عبور الزامی است"
                  >
                    <i className="fa fa-info-circle me-1"></i>
                    رمز عبور الزامی است
                  </span>
                )}
                {/* {errors.password?.type === "pattern" && (
                  <span
                    className="text-danger D-required"
                    // data-pattern="رمز عبور را صحیح وارد کنید"
                  >
                    <i className="fas fa-info-circle me-1"></i>
                    رمز عبور را صحیح وارد کنید
                  </span>
                )} */}
                {errors.password?.type === "minLength" && (
                  <span
                    className="text-danger D-required"
                    // data-length="رمز عبور باید حداقل هشت کاراکتر باشد"
                  >
                    <i className="fa fa-info-circle me-1"></i>
                    رمز عبور باید حداقل هشت کاراکتر باشد
                  </span>
                )}
                <span className="D-eye-icon" onClick={handleIcon}>
                  <i className={icon}></i>
                </span>
                <PassStrengh password={password} />
              </div>
              <div className="mt-3">
                <button
                  type="submit"
                  className="btn btn-danger D-loginBtn w-100"
                >
                  ثبــت نــام
                </button>
              </div>
              <div className="d-flex D-loginRules mt-4">
                <input
                  type="checkbox"
                  {...register("checkRules", { required: true })}
                  className="form-check-input"
                />
                <label htmlFor="checkRules" className="form-check-label ms-2">
                  <a href=" " className="text-info">
                    شرایط و قوانین{" "}
                  </a>
                  را خوانده ام و پذیرفته ام
                </label>
              </div>
            </form>
          </div>
        </main>
      </section>
      <ToastContainer />
    </section>
  );
};

export default Register;
