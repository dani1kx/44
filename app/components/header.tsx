import routes from '@/routes'
import { Link } from 'react-router'

export const Header = () => {
  const mediaLinks = [{ label: 'x', link: 'https://x.com/joyco_studio' }, { label: 'instagram', link: 'https://instagram.com' }]

  return (
    <header className="joyco-header fixed top-0 z-50 w-full items-center justify-between grid grid-cols-3 px-3 py-2 md:px-12 md:py-3">
      <div className="gap-3 contents">
        <Link key="logo" to="/" className="max-w-max justify-self-start">
          <img src="/logo.svg" alt="Rebels logo" className="h-4" />
        </Link>
        <nav className="flex items-center justify-center md:justify-self-center">
          <ul className="flex items-center gap-3 md:gap-6 font-mono uppercase">
            {routes.map((route, index) => (
              <li key={index} className="text-sm">
                <Link to={route.path ?? ''}>{route.path?.replace('/', '') ?? 'Home'}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <ul className="flex items-center gap-3 md:gap-6 font-mono uppercase justify-self-end">
        {mediaLinks.map((link, index) => (
          <li key={index} className="text-sm">
            <Link className="underline underline-offset-4" to={link.link} target="_blank" rel="noopener noreferrer">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  )
}
