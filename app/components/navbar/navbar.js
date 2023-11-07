import Link from 'next/link'
import UserButton from './user-button'
import { Allison } from 'next/font/google'
import styles from './navbar.module.scss'

const allison = Allison({ subsets: ['latin'], weight: ['400'] })

export default function Navbar() {
  return (
    <header className={`navbar navbar-expand-md py-0 ${styles.navbar}`}>

      <nav data-bs-theme='dark' className='container-fluid container-md justify-content-between'>

        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarToggler' aria-controls='navbarToggler' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <ul className='collapse navbar-collapse navbar-nav col-md-4 order-2 order-md-0 gap-4 gap-md-5 my-3 my-md-0' id='navbarToggler'>
          <li className='nav-item'>
            <Link href='/gallery' className='nav-link px-2 link-light'>Gallery</Link>
          </li>
          <li className='nav-item'>
            <Link href='/prices' className='nav-link px-2 link-light'>Prices</Link>
          </li>
        </ul>

        <div className='col-md-4 text-center'>
          <Link href='/' className={`${allison.className} navbar-brand d-inline-flex link-body-emphasis text-decoration-none py-0 mx-0 ${styles.navbarBrand}`}>
            Marcotel
          </Link>
        </div>

        <div className='col-md-4 text-end'>
          <UserButton />
        </div>

      </nav>

    </header >
  )
}