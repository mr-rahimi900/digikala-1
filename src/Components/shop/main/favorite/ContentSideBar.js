import React from "react";

const ContentSideBar = () => {
  return (
    <aside id="sidebar" className="sidebar col-md-3">
      <section className="content-wrapper bg-white p-3 rounded-2 mb-3">
        {/* start sidebar nav */}
        <section className="sidebar-nav">
          <section className="sidebar-nav-item">
            <span className="sidebar-nav-item-title">
              <a className="p-3" href="my-orders.html">
                سفارش های من
              </a>
            </span>
          </section>
          <section className="sidebar-nav-item">
            <span className="sidebar-nav-item-title">
              <a className="p-3" href="my-addresses.html">
                آدرس های من
              </a>
            </span>
          </section>
          <section className="sidebar-nav-item">
            <span className="sidebar-nav-item-title">
              <a className="p-3" href="my-favorites.html">
                لیست علاقه مندی
              </a>
            </span>
          </section>
          <section className="sidebar-nav-item">
            <span className="sidebar-nav-item-title">
              <a className="p-3" href="my-profile.html">
                ویرایش حساب
              </a>
            </span>
          </section>
          <section className="sidebar-nav-item">
            <span className="sidebar-nav-item-title">
              <a className="p-3" href="#">
                خروج از حساب کاربری
              </a>
            </span>
          </section>
        </section>
        {/* end sidebar nav */}
      </section>
    </aside>
  );
};

export default ContentSideBar;
