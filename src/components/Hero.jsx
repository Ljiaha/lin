import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef(null)

  // Subtle geometric particle animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Create geometric particles
    const initParticles = () => {
      particles = []
      const count = Math.floor((canvas.width * canvas.height) / 25000)
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.3 + 0.05,
        })
      }
    }
    initParticles()

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(59, 130, 246, ${p.opacity})`
        ctx.fill()

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - p.x
          const dy = particles[j].y - p.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.04 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      })

      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: '700px',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(59, 130, 246, 0.06) 0%, transparent 70%)',
      }}
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Subtle grid lines */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          mask: 'radial-gradient(ellipse 60% 50% at 50% 40%, black 30%, transparent 70%)',
          WebkitMask: 'radial-gradient(ellipse 60% 50% at 50% 40%, black 30%, transparent 70%)',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '900px' }}>
          {/* Label */}
          <div className="section-label" style={{ marginBottom: '28px' }}>
            Mechanical Structure Engineer
          </div>

          {/* Main heading */}
          <h1
            style={{
              fontSize: 'clamp(56px, 8vw, 96px)',
              fontWeight: 600,
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              marginBottom: '28px',
            }}
          >
            <span style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.45em', fontWeight: 400, letterSpacing: '0.04em', marginBottom: '8px' }}>
              你好，我是
            </span>
            林佳浩
          </h1>

          {/* Title bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              marginBottom: '32px',
              flexWrap: 'wrap',
            }}
          >
            <span
              style={{
                fontSize: '18px',
                fontWeight: 500,
                color: 'var(--text-primary)',
                letterSpacing: '0.02em',
              }}
            >
              机械结构工程师 · 机器人设计师
            </span>
            <span style={{ color: 'var(--text-muted)' }}>|</span>
            <span
              style={{
                fontSize: '16px',
                color: 'var(--text-secondary)',
              }}
            >
              北京理工大学珠海学院 · 机械电子工程
            </span>
          </div>

          {/* Stats row */}
          <div
            style={{
              display: 'flex',
              gap: '48px',
              marginBottom: '48px',
            }}
          >
            {[
              { value: '3.55', unit: '/5.0', label: 'GPA' },
              { value: '1', unit: '/39', label: '专业排名' },
              { value: '30', unit: '+', label: '竞赛奖项' },
              { value: '4', unit: ' 项', label: '实用新型专利' },
            ].map((stat) => (
              <div key={stat.label}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '2px', marginBottom: '4px' }}>
                  <span style={{ fontSize: '36px', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1 }}>
                    {stat.value}
                  </span>
                  <span style={{ fontSize: '14px', color: 'var(--text-muted)', fontWeight: 500 }}>
                    {stat.unit}
                  </span>
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <a
              href="#projects"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '14px 32px',
                background: 'var(--text-primary)',
                color: 'var(--bg-primary)',
                borderRadius: '100px',
                fontSize: '15px',
                fontWeight: 600,
                letterSpacing: '0.02em',
                transition: 'all var(--transition)',
              }}
              className="hero-cta"
            >
              查看作品
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M7 13l5 5 5-5" />
              </svg>
            </a>
            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '14px 32px',
                border: '1px solid var(--border-strong)',
                borderRadius: '100px',
                fontSize: '15px',
                fontWeight: 500,
                letterSpacing: '0.02em',
                color: 'var(--text-secondary)',
                transition: 'all var(--transition)',
              }}
              className="hero-cta-secondary"
            >
              联系我
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '120px',
          background: 'linear-gradient(transparent, var(--bg-primary))',
          pointerEvents: 'none',
        }}
      />
    </section>
  )
}
