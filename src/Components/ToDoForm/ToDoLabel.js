const ToDoLabel = (props) => {
  return (
    <label
      htmlFor={props.label}
      className="text-2xl font-medium tracking-widest"
    >
      {props.labelName}
    </label>
  );
};

export default ToDoLabel;
