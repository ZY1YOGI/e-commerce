import Link from 'next/link'

import style from './header.module.css'

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <h1 className={style.name}>E-com</h1>
        <div className={style.container_user}>
          <div className={style.user}>
            <div className={style.name_user}>Youssef</div>
            <div className={style.role_user}>Manger</div>
          </div>
          <Link href="/">
            <img className={style.image} src="https://cdn.wallpapersafari.com/79/73/TvuM20.jpg" alt="" />
          </Link>
        </div>
      </div>
    </header>
  )
}