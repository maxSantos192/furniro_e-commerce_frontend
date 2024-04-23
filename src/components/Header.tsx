import { useState } from 'react';
import { Fade as Hamburger } from 'hamburger-react';
import furniroLogo from '../assets/furniro_logo.svg';
import logo from '../assets/logo.svg';
import {
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from 'react-icons/ai';

type MenuItem = {
  url: string;
  label: string;
};

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const menuItems: MenuItem[] = [
    { label: 'Home', url: '/' },
    { label: 'Shop', url: '/shop' },
    { label: 'About', url: '/about' },
    { label: 'Contact', url: '/contact' },
  ];

  const navItem = (item: MenuItem, index: number) => (
    <li key={`menu-item-${index}`} className='inline-block px-6'>
      <a
        href={item.url}
        className='hover:text-zinc-600 text-base font-medium transition-all'
      >
        {item.label}
      </a>
    </li>
  );

  return (
    <div className='flex h-16 w-full items-center justify-center'>
      <header className='relative flex w-full max-w-7xl items-center justify-between bg-mwhite px-8'>
        <a href='/' className='hidden cursor-pointer lg:block'>
          <img src={furniroLogo} alt='Funiro Logo' />
        </a>
        <a href='/' className='z-30 cursor-pointer lg:hidden'>
          <img src={logo} alt='Funiro Logo' />
        </a>

        <nav className='hidden md:block'>
          <ul className='list-none'>
            {menuItems.map((item, index) => navItem(item, index))}
          </ul>
        </nav>

        <div className='hidden gap-8 md:flex'>
          <AiOutlineUser
            size={22}
            className='hover:text-zinc-600 cursor-pointer transition-all'
          />
          <AiOutlineSearch
            size={22}
            className='hover:text-zinc-600 cursor-pointer transition-all'
          />
          <AiOutlineHeart
            size={22}
            className='hover:text-zinc-600 cursor-pointer transition-all'
          />
          <AiOutlineShoppingCart
            size={22}
            className='hover:text-zinc-600 cursor-pointer transition-all'
          />
        </div>

        <div className='z-30 md:hidden'>
          <Hamburger color='#000' toggled={isOpen} toggle={setIsOpen} />
        </div>

        {isOpen && (
          <div className='absolute right-0 top-0 z-20 h-auto w-full rounded-b-lg bg-mwhite p-4 shadow'>
            <nav className='mt-20 h-4/5'>
              <ul className='flex flex-col gap-4'>
                {menuItems.map((item, index) => (
                  <li
                    key={`mobile-menu-item-${index}`}
                    className='hover:bg-slate-100 flex h-16 items-center px-4 text-base font-medium hover:shadow'
                  >
                    <a href={item.url}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;
