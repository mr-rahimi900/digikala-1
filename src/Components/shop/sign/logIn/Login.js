import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
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
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const jsonParse = JSON.parse(localStorage.getItem("register"));
  const redirectToMain = () => {
    setTimeout(() => {
      navigate("/", { replace: true });
    }, 3000);
  };
  const redirectToRegister = () => {
    setTimeout(() => {
      navigate("/register", { replace: true });
    }, 3000);
  };
  const onSubmit = (data) => {
    let test = false;
    if (jsonParse === null) {
      redirectToRegister();
      toast.warn(
        `همچین پست الکترونیکی وجود ندارد
      لطفا ثبت نام کنید`,
        {
          position: "top-right",
          rtl: true,
          autoClose: 2000,
          closeButton: true,
        }
      );
    }
    jsonParse.map((user) => {
      if (data.email == user.email && data.password == user.password) {
        test = true;

        toast.success("شما با موفقیت وارد شدید", {
          position: "top-right",
          rtl: true,
          autoClose: 2000,
        });
        redirectToMain();
      }
    });

    if (test === false) {
      toast.error("پست الکترونیک یا رمز عبور صحیح نمی‌باشد", {
        position: "top-right",
        closeOnClick: true,
        rtl: true,
        autoClose: 2000,
      });
    }
  };

  return (
    <div>
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
                ورود /
                <span>
                  <Link to="/register">ثبت نام</Link>
                </span>
              </h1>
            </div>

            <div className="D-centering flex-column mt-3">
              <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="D-emailAlert-validate mb-3">
                  <label htmlFor="email" className="form-label D-inputLabels">
                    پست الکترونیک خود را وارد کنید
                  </label>
                  <input
                    type="text"
                    className="form-control D-login-input py-3"
                    {...register("email", {
                      required: true,
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
                </div>

                <div className="D-passalert-validate">
                  <label
                    htmlFor="password"
                    className="form-label D-inputLabels"
                  >
                    رمــز عبـور خود را وارد کنید
                  </label>
                  <input
                    type={show}
                    className="form-control D-login-input py-3"
                    {...register("password", {
                      required: true,
                      // pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
                      // minLength: 8,
                    })}
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

                  <span className="D-eye-icon" onClick={handleIcon}>
                    <i className={icon}></i>
                  </span>
                </div>
                <div className="mt-3">
                  <button
                    type="submit"
                    className="btn btn-danger D-loginBtn w-100"
                  >
                    ورود به آمازون
                  </button>
                </div>
                <div className="d-flex D-loginRules mt-4">
                  <input
                    type="checkbox"
                    {...register("checkBoxRules", {
                      required: true,
                    })}
                    className="form-check-input"
                  />
                  <label
                    htmlFor="checkBoxRules"
                    className="form-check-label ms-2"
                  >
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
      </section>
      <ToastContainer />
    </div>
  );
};

export default Login;
