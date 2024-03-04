import brandLogo from '../../../public/static/images/logog.png';
import searchIcon from '../../../public/static/images/search-icon.png';
import userIcon from '../../../public/static/images/user-icon.png';
import cartIcon from '../../../public/static/images/cart-icon.png';

const Header = () => {
  return (
    <div className="top-0 flex py-auto justify-between relative items-center px-[2rem] py-[1rem] sm:px-[10rem] ">
      <img src={brandLogo.src}></img>
      <div>
        <ul className="flex gap-6 text-sm sm:text-base font-grotesk text-neutralDark ">
          <li className="cursor-pointer  hover:text-neutral1">Home</li>
          <li className="cursor-pointer hover:text-neutral1">Shop</li>
          <li className="cursor-pointer hover:text-neutral1">Products</li>
          <li className="sm:block hidden cursor-pointer hover:text-neutral1">Contact Us</li>
        </ul>
      </div>
      <div>
        <ul className="flex gap-4">
          <li className="cursor-pointer">
            <img src={searchIcon.src} className="w-[1.5rem]"></img>
          </li>
          <li className="cursor-pointer">
            <img src={userIcon.src} className="w-[1.5rem]"></img>
          </li>
          <li className="cursor-pointer">
            <img src={cartIcon.src} className="w-[1.5rem]"></img>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
