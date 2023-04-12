import "./index.css";

const Input = (props) => {
  return (
    <input
      className="input_field"
      type={props.type}
      placeholder={props.placeholder}
    ></input>
  );
};

export default Input;

// // //
// import { BsEyeFill } from "react-icons/bs";
// import { BsEyeSlashFill } from "react-icons/bs";

// const isShowIcon = true;
// // {/* <input className="input_field" placeholder="Password"></input>
// // //      {isShowIcon ? <BsEyeFill /> : <BsEyeSlashFill />}
// // //     </div> */}
