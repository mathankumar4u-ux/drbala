import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { mainNavigation } from '../../data/navigation'
import './Navigation.css'

function Navigation({ isOpen, onClose }) {
  const [openDropdown, setOpenDropdown] = useState(null)

  const handleDropdownToggle = (label) => {
    setOpenDropdown(openDropdown === label ? null : label)
  }

  const handleNavClick = () => {
    setOpenDropdown(null)
    onClose()
  }

  return (
    <nav
      id="main-navigation"
      className={`main-nav ${isOpen ? 'is-open' : ''}`}
      aria-label="Main navigation"
    >
      <ul className="nav-list">
        {mainNavigation.map((item) => (
          <li
            key={item.label}
            className={`nav-item ${item.children ? 'has-dropdown' : ''}`}
          >
            {item.children ? (
              <>
                <button
                  className="nav-link nav-dropdown-toggle"
                  onClick={() => handleDropdownToggle(item.label)}
                  aria-expanded={openDropdown === item.label}
                  aria-haspopup="true"
                >
                  {item.label}
                  <svg
                    className="dropdown-arrow"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>
                <ul
                  className={`nav-dropdown ${openDropdown === item.label ? 'is-open' : ''}`}
                  role="menu"
                >
                  <li role="none">
                    <NavLink
                      to={item.path}
                      className="nav-dropdown-link"
                      onClick={handleNavClick}
                      role="menuitem"
                      end
                    >
                      View All {item.label}
                    </NavLink>
                  </li>
                  {item.children.map((child) => (
                    <li key={child.path} role="none">
                      <NavLink
                        to={child.path}
                        className="nav-dropdown-link"
                        onClick={handleNavClick}
                        role="menuitem"
                      >
                        {child.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'is-active' : ''}`
                }
                onClick={handleNavClick}
                end={item.path === '/'}
              >
                {item.label}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
