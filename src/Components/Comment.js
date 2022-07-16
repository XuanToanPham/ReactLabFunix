const Comment = (props) => {
  const comment = props.comment;
  return (
    <div>
      <p>{comment.comment}</p>
      <p>
        -- {`${comment.author} `}
        {new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "short",
          day: "2-digit",
        }).format(new Date(Date.parse(comment.date)))}
      </p>
    </div>
  );
};

export default Comment;
