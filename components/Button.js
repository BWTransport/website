const Button = (props) => {
  return (
    <a href={props.link}>
      <button className="bg-blue-800 text-white py-3 px-3 sm:px-5 rounded hover:bg-blue-700 duration-500 text-sm sm:text-base text-center">
        {props.text}
      </button>
    </a>
  );
};

export default Button;
