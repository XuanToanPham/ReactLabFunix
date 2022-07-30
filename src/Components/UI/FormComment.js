import Modal from "./Modal/Modal";
import { useEffect, useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { baseUrl } from "../../Data/baseUrl";
import { formCommentActions } from "../../Redux/formComment";
import { commentActions } from "../../Redux/commentsAction";
const FormComment = () => {
  const dispatch=useDispatch();
  const commentInput = useRef("");
  const ratingInput = useRef("");
  const [disable, setDisable] = useState(true);
  const nameAuthorInput = useRef("");
  const params = useParams();
  const dishId = useSelector((state) => state.formComment.dishId);
  const submidHandler = (event) => {
    event.preventDefault();
    const date = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    }).format(new Date());
    if (
      commentInput.current.value &&
      ratingInput.current.value &&
      nameAuthorInput.current.value
    ) {
      setDisable(true);
      const newComment = {
        id: Math.random(),
        dishId: dishId,
        rating: ratingInput.current.value,
        comment: commentInput.current.value,
        author: nameAuthorInput.current.value,
        date: date,
      };
      const postComment = async () => {
        const respone = await axios
          .post(`${baseUrl}comments`, newComment)
          .then(function (response) {
            console.log(response.data);
            dispatch(commentActions.postComment(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });
        dispatch(formCommentActions.hideFormComment());
       
      };
      postComment();
    } else {
      setDisable(false);
    }
  };
  return (
    <Modal>
      <Form onSubmit={submidHandler}>
        <h3>New Comment</h3>
        <Form.Group className="mt-3">
          <Form.Label>Rating</Form.Label>
          <Form.Control as="select" className="form-select" ref={ratingInput}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className="mt-3">
          <Form.Control
            type="text"
            placeholder="Your Name"
            ref={nameAuthorInput}
          />
        </Form.Group>

        <Form.Group className="mt-3">
          <Form.Label className="form-label">Comment</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            id="input-feedback"
            ref={commentInput}
          />
        </Form.Group>
        <button className="btn btn-primary mt-3">Submit</button>
        {!disable ? (
          <p className="mt-2 mb-0">Please enter all the fields</p>
        ) : (
          ""
        )}
      </Form>
    </Modal>
  );
};

export default FormComment;
