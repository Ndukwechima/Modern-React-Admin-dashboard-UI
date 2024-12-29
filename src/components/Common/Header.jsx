const Header = ({ title }) => {
  return (
    <header className="bg-white sticky top-0 right-0 z-20 bg-opacity-50 backdrop-blur-md shadow-md border-b border-gray-300">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
      </div>
    </header>
  );
};
export default Header;