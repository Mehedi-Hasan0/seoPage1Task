/* eslint-disable react/prop-types */
const Header = ({ images, title }) => {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex items-center gap-2">
        {images && <img src={images} alt="logo" className="w-6" />}
        <h4 className=" text-gray-600 text-sm lg:text-base font-medium">
          {title}
        </h4>
      </div>

      <div className="px-[10px] py-1 rounded-md bg-[#e8eef3]">0</div>
    </div>
  );
};

export default Header;
