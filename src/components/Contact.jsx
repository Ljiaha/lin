export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `
          radial-gradient(ellipse 50% 50% at 50% 40%, rgba(59, 130, 246, 0.06) 0%, transparent 70%),
          var(--bg-primary)
        `,
        overflow: 'hidden',
      }}
    >
      {/* Decorative grid */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          mask: 'radial-gradient(ellipse 50% 40% at 50% 50%, black 20%, transparent 70%)',
          WebkitMask: 'radial-gradient(ellipse 50% 40% at 50% 50%, black 20%, transparent 70%)',
        }}
      />

      {/* Top fade transition */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '120px',
          background: 'linear-gradient(var(--bg-secondary), transparent)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        {/* Label */}
        <div
          className="section-label"
          style={{ justifyContent: 'center', marginBottom: '24px' }}
        >
          <span style={{ width: '24px', height: '1px', background: 'var(--accent)' }} />
          Get in Touch
        </div>

        {/* Big heading */}
        <h2
          style={{
            fontSize: 'clamp(48px, 7vw, 80px)',
            fontWeight: 600,
            letterSpacing: '-0.04em',
            lineHeight: 1.1,
            marginBottom: '20px',
          }}
        >
          期待与你合作
        </h2>
        <p
          style={{
            fontSize: '18px',
            color: 'var(--text-secondary)',
            maxWidth: '500px',
            margin: '0 auto 64px',
            lineHeight: 1.7,
          }}
        >
          如果你对我的项目经验感兴趣，欢迎随时联系
        </p>

        {/* Contact cards */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '24px',
            marginBottom: '80px',
            flexWrap: 'wrap',
          }}
        >
          {[
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 4l-10 8L2 4" />
                </svg>
              ),
              label: 'Email',
              value: 'lin_663@126.com',
              href: 'mailto:lin_663@126.com',
            },
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="5" y="2" width="14" height="20" rx="2" />
                  <path d="M12 18h.01" />
                </svg>
              ),
              label: '手机',
              value: '198 6872 1258',
              href: 'tel:19868721258',
            },
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              ),
              label: '所在地',
              value: '广东省珠海市',
              href: null,
            },
          ].map((item) => {
            const content = (
              <div
                style={{
                  padding: '36px 40px',
                  borderRadius: 'var(--radius-lg)',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  minWidth: '260px',
                  transition: 'all var(--transition)',
                  cursor: item.href ? 'pointer' : 'default',
                }}
                className="contact-card"
              >
                <div style={{ color: 'var(--accent)', marginBottom: '16px' }}>{item.icon}</div>
                <div
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    color: 'var(--text-muted)',
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                  }}
                >
                  {item.label}
                </div>
                <div style={{ fontSize: '16px', fontWeight: 500, color: 'var(--text-primary)' }}>
                  {item.value}
                </div>
              </div>
            )

            if (item.href) {
              return (
                <a key={item.label} href={item.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {content}
                </a>
              )
            }
            return <div key={item.label}>{content}</div>
          })}
        </div>

        {/* Divider */}
        <div
          style={{
            width: '60px',
            height: '1px',
            background: 'var(--border-default)',
            margin: '0 auto 32px',
          }}
        />

        {/* Footer text */}
        <p
          style={{
            fontSize: '13px',
            color: 'var(--text-muted)',
            letterSpacing: '0.04em',
          }}
        >
          © 2026 林佳浩 · 机械结构工程师
        </p>
      </div>
    </section>
  )
}
