const Loader = () => {
  return (
    <ul className="flex items-center justify-center gap-[5px]">
      <li className="w-2 h-2 bg-gray-50 animate-pulse delay-100 duration-500 rounded"></li>
      <li className="w-2 h-2 bg-gray-50 animate-pulse delay-300 duration-500 rounded"></li>
      <li className="w-2 h-2 bg-gray-50 animate-pulse delay-500 duration-500 rounded"></li>
      <li className="w-2 h-2 bg-gray-50 animate-pulse delay-700 duration-500 rounded"></li>
      <li className="w-2 h-2 bg-gray-50 animate-pulse delay-900 duration-500 rounded"></li>
    </ul>
  );
};

export default Loader;
