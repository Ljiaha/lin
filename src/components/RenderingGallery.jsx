import { useState, useEffect, useCallback } from 'react'

const BASE = import.meta.env.BASE_URL

const RENDERINGS = [
  { src: `${BASE}images/keyshot-01.jpg`, alt: 'KeyShot 渲染作品 1' },
  { src: `${BASE}images/image7.jpeg`, alt: '仿真渲染作品 2' },
  { src: `${BASE}images/2ef58b4c1a4462ec375ddd183712d940.png`, alt: '仿真渲染作品 3' },
  { src: `${BASE}images/05b41450-e57b-4818-9662-9b04444225df.png`, alt: '仿真渲染作品 4' },
  { src: `${BASE}images/4.22.png`, alt: '仿真渲染作品 5' },
  { src: `${BASE}images/untitled.26.png`, alt: '仿真渲染作品 6' },
]

export default function RenderingGallery() {
  const [lightbox, setLightbox] = useState(null)

  const closeLightbox = useCallback(() => setLightbox(null), [])
  const prevImage = useCallback(
    () => setLightbox((prev) => (prev === 0 ? RENDERINGS.length - 1 : prev - 1)),
    []
  )
  const nextImage = useCallback(
    () => setLightbox((prev) => (prev === RENDERINGS.length - 1 ? 0 : prev + 1)),
    []
  )

  // Keyboard navigation
  useEffect(() => {
    if (lightbox === null) return
    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') prevImage()
      if (e.key === 'ArrowRight') nextImage()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightbox, closeLightbox, prevImage, nextImage])

  return (
    <section
      id="renderings"
      style={{
        padding: '120px 0',
        background: 'var(--bg-primary)',
        position: 'relative',
      }}
    >
      {/* Top divider glow */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.2), transparent)',
        }}
      />

      <div className="container">
        <div style={{ marginBottom: '56px' }}>
          <div className="section-label">Visualization</div>
          <h2 className="section-heading">仿真 & 渲染</h2>
          <p className="section-subtitle">
            KeyShot 产品渲染与仿真可视化作品
          </p>
        </div>

        {/* Grid — 3 columns × 2 rows, clean uniform layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '12px',
          }}
        >
          {RENDERINGS.map((item, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              style={{
                padding: 0,
                cursor: 'pointer',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                transition: 'all var(--transition)',
                aspectRatio: '16/10',
              }}
              className="rendering-card"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                }}
                className="rendering-img"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            background: 'rgba(0, 0, 0, 0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(20px)',
          }}
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            style={{
              position: 'absolute',
              top: '24px',
              right: '32px',
              fontSize: '28px',
              color: 'var(--text-secondary)',
              padding: '8px 12px',
              zIndex: 10,
              transition: 'color var(--transition)',
              lineHeight: 1,
            }}
            className="lightbox-close-btn"
          >
            ✕
          </button>

          {/* Counter */}
          <div
            style={{
              position: 'absolute',
              top: '32px',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: '13px',
              color: 'var(--text-muted)',
              letterSpacing: '0.06em',
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            {lightbox + 1} / {RENDERINGS.length}
          </div>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage() }}
            style={{
              position: 'absolute',
              left: '24px',
              top: '50%',
              transform: 'translateY(-50%)',
              padding: '12px',
              color: 'var(--text-secondary)',
              transition: 'color var(--transition)',
              zIndex: 10,
            }}
            className="lightbox-nav-btn"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage() }}
            style={{
              position: 'absolute',
              right: '24px',
              top: '50%',
              transform: 'translateY(-50%)',
              padding: '12px',
              color: 'var(--text-secondary)',
              transition: 'color var(--transition)',
              zIndex: 10,
            }}
            className="lightbox-nav-btn"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Image */}
          <img
            src={RENDERINGS[lightbox].src}
            alt={RENDERINGS[lightbox].alt}
            style={{
              maxWidth: '85vw',
              maxHeight: '85vh',
              objectFit: 'contain',
              borderRadius: 'var(--radius-md)',
              zIndex: 5,
            }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
