import Link from "next/link";

import { AiOutlineHome } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { SlBasket } from "react-icons/sl";
import { HiOutlineUsers } from "react-icons/hi";
import { TbSettingsCog } from "react-icons/tb";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import ButtonTheme from "./buttonTheme";

import style from "./sidebar.module.css";



const LINKS: { href: string, icon: JSX.Element }[] = [
  {
    href: '/admin',
    icon: <AiOutlineHome size={35} title='Home' />
  }, {
    href: 'admin/category',
    icon: <BiCategory size={35} title='Category' />
  }, {
    href: 'admin/user',
    icon: <HiOutlineUsers size={35} title='User' />
  }, {
    href: '/admin',
    icon: <SlBasket size={35} title='Home' />
  }, {
    href: '/admin',
    icon: <LiaFileInvoiceSolid size={35} title='Home' />
  }, {
    href: '/admin',
    icon: <MdOutlineNotificationsActive size={35} title='Home' />
  }, {
    href: '/admin',
    icon: <TbSettingsCog size={35} title='Home' />
  }, {
    href: '/admin',
    icon: <TbSettingsCog size={35} title='Home' />
  }
]

export default function Sidebar() {
  return (
    <aside className={style.aside}>
      <div className={style.container}>
        <Link href="/">
          <img className={style.image} src="/apple-touch-icon.png" alt="MA-HOLIDAY" />
        </Link>

        {LINKS.map((link, id) => (
          <Link key={id} href={link.href} className={style.link}>
            {link.icon}
          </Link>
        ))}

        <ButtonTheme />
      </div>
    </aside>
  );
}