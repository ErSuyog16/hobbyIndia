import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Btn = (props) => {
  return (
    <button type='button' class='btn btn-primary'>
      {props.txt}
    </button>
  );
};

export default Btn;
