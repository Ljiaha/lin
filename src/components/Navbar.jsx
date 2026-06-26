import { useState, useEffect } from 'react'

const NAV_ITEMS = [
  { label: '作品', href: '#projects' },
  { label: '优势', href: '#strengths' },
  { label: '联系', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 'var(--nav-height)',
        display: 'flex',
        alignItems: 'center',
        transition: 'background 0.4s ease, backdrop-filter 0.4s ease',
        background: scrolled
          ? 'rgba(10, 10, 10, 0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <a
          href="#hero"
          style={{
            fontSize: '20px',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}
        >
          林佳浩
          <span style={{ color: 'var(--accent)' }}>.</span>
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
          <ul style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: 'var(--text-secondary)',
                    transition: 'color var(--transition)',
                    letterSpacing: '0.02em',
                  }}
                  className="nav-link"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            style={{
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.04em',
              padding: '10px 24px',
              borderRadius: '100px',
              border: '1px solid var(--border-strong)',
              color: 'var(--text-primary)',
              transition: 'all var(--transition)',
              whiteSpace: 'nowrap',
            }}
            className="nav-cta"
          >
            联系我
          </a>
        </div>
      </div>
    </nav>
  )
}
