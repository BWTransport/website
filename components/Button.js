const Button = (props) => {
  return (
    <a href={props.link}>
      <button className="bg-blue-800 text-white py-2 px-6 rounded hover:bg-blue-600 duration-500 text-sm sm:text-base text-center">
        {props.text}
      </button>
    </a>
  );
};

export default Button;
