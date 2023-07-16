import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Modal, Form, Row, Col } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
const NewComments = ({ comments, setComments }) => {
  const date = new Date().toLocaleDateString("FA-Ir");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { isSubmitSuccessful },
  } = useForm();
  const onSubmit = (data) => {
    const commentId = comments.map((comment) => comment.id);
    handleEdit(commentId.pop(), data);

    handleClose();
    toast.success("دیدگاه با موفقیت تغییر کرد", {
      position: "bottom-right",
      theme: "colored",
      autoClose: 2000,
      rtl: true,
      hideProgressBar: true,
      pauseOnHover: false,
    });
  };
  useEffect(() => {
    formState.isSubmitSuccessful &&
      reset({ firstName: "", family: "", textComment: "" });
  }, [formState, reset]);

  const handleEdit = (commentId, newData) => {
    const index = comments.findIndex((item) => item.id === commentId);
    const editComment = [...comments];
    editComment[index] = {
      firstName: newData.firstName,
      family: newData.family,
      textComment: newData.textComment,
      // id: comments[index].commentId
    };
    setComments(editComment);
  };

  return comments.map((comment, index) => (
    <div className="mt-2 bg-light p-2" key={index}>
      <div className="">
        <p className="border-bottom fs-6">
          <span className="R-pfont pe-3 text-secondary">{date}</span>
          {`${comment.firstName} ${comment.family}`}
        </p>
        <p className="R-pfont text-secondary">{comment.textComment}</p>
      </div>
      <div className="">
        <button
          type="button"
          className="btn btn-outline-secondary  editBtn"
          onClick={() => {
            handleShow();
            // handleEdit(comment.id);
          }}
        >
          ویرایش
        </button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="fs-6">
            <i className="fa fa-plus me-1"></i>ویرایش دیدگاه{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            action=""
            autoComplete="false"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Form.Group className="mb-3">
              <Row>
                <Col>
                  <label htmlFor="firstName" className="form-label">
                    نام :{" "}
                  </label>
                  <input
                    type="text"
                    placeholder="نام ..."
                    className="form-control"
                    {...register("firstName", { required: true })}
                  />
                </Col>
                <Col>
                  <label htmlFor="family" className="form-label">
                    نام خانوادگی :{" "}
                  </label>
                  <input
                    type="text"
                    placeholder="نام خانوادگی ..."
                    className="form-control"
                    {...register("family", { required: true })}
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <label htmlFor="textComment">دیدگاه شما : </label>
              <textarea
                className="form-control"
                rows={3}
                placeholder="دیدگاه شما ..."
                {...register("textComment", { required: true })}
              ></textarea>
            </Form.Group>

            <Modal.Footer>
              <button type="submit" className="btn btn-primary btn-sm">
                ویرایش
              </button>
              <button
                type="button"
                className="btn btn-danger btn-sm"
                onClick={handleClose}
              >
                بستن
              </button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
      <ToastContainer />
    </div>
  ));
};

export default NewComments;
