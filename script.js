/* ============================================
   林佳浩 | 作品集 · 交互脚本
   粒子背景 · 灯箱 · 导航 · 数字动画 · 滚动效果
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. Canvas 粒子/网格背景
    // ==========================================
    const canvas = document.getElementById('bgCanvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrame;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.4;
            this.vy = (Math.random() - 0.5) * 0.4;
            this.size = Math.random() * 1.5 + 0.5;
            this.opacity = Math.random() * 0.5 + 0.1;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0) this.x = canvas.width;
            if (this.x > canvas.width) this.x = 0;
            if (this.y < 0) this.y = canvas.height;
            if (this.y > canvas.height) this.y = 0;
        }

        draw(ctx) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 180, 216, ${this.opacity})`;
            ctx.fill();
        }
    }

    function initParticles() {
        const count = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000));
        particles = Array.from({ length: count }, () => new Particle());
    }

    function drawGrid() {
        ctx.strokeStyle = 'rgba(30, 30, 48, 0.3)';
        ctx.lineWidth = 0.5;
        const spacing = 60;

        for (let x = 0; x <= canvas.width; x += spacing) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
            ctx.stroke();
        }

        for (let y = 0; y <= canvas.height; y += spacing) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
            ctx.stroke();
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw grid
        drawGrid();

        // Draw lines between nearby particles
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(0, 180, 216, ${0.08 * (1 - dist / 120)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }

        // Update and draw particles
        particles.forEach(p => {
            p.update();
            p.draw(ctx);
        });

        animationFrame = requestAnimationFrame(animate);
    }

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener('resize', () => {
        resizeCanvas();
        initParticles();
    });

    // ==========================================
    // 2. 导航栏滚动效果
    // ==========================================
    const navbar = document.getElementById('navbar');

    function updateNav() {
        if (window.scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav();

    // 移动端菜单切换
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // 点击导航链接关闭菜单
    document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = navbar.offsetHeight;
                const targetPos = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                window.scrollTo({ top: targetPos, behavior: 'smooth' });
            }
            navLinks.classList.remove('active');
        });
    });

    // ==========================================
    // 3. 数字滚动动画
    // ==========================================
    function animateNumbers() {
        const statNumbers = document.querySelectorAll('.stat-number');

        statNumbers.forEach(el => {
            if (el.dataset.animated) return; // 只执行一次
            el.dataset.animated = 'true';

            const target = parseFloat(el.dataset.target);
            const decimals = parseInt(el.dataset.decimals) || 0;
            const suffix = el.dataset.suffix || '';
            const duration = 2000;
            const start = performance.now();

            function update(now) {
                const elapsed = now - start;
                const progress = Math.min(elapsed / duration, 1);
                // Ease out cubic
                const eased = 1 - Math.pow(1 - progress, 3);
                const current = target * eased;

                el.textContent = current.toFixed(decimals) + suffix;
                if (progress < 1) {
                    requestAnimationFrame(update);
                }
            }

            requestAnimationFrame(update);
        });
    }

    // 使用 IntersectionObserver 检测 Hero 数字何时进入视野
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 稍微延迟让入场更自然
                setTimeout(animateNumbers, 300);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        statsObserver.observe(heroStats);
    } else {
        // 如果没有 stats 元素，回退到立即执行
        setTimeout(animateNumbers, 500);
    }

    // ==========================================
    // 4. 灯箱 Lightbox
    // ==========================================
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCounter = document.getElementById('lightboxCounter');
    const closeBtn = document.getElementById('lightboxClose');
    const prevBtn = document.getElementById('lightboxPrev');
    const nextBtn = document.getElementById('lightboxNext');

    const workImages = Array.from(document.querySelectorAll('.gallery-img'));
    let currentIndex = 0;

    function openLightbox(index) {
        if (workImages.length === 0) return;
        currentIndex = index;
        updateLightboxImage();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    function updateLightboxImage() {
        if (workImages.length === 0) return;
        const img = workImages[currentIndex];
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightboxCounter.textContent = `${currentIndex + 1} / ${workImages.length}`;
    }

    function nextImage() {
        if (workImages.length === 0) return;
        currentIndex = (currentIndex + 1) % workImages.length;
        updateLightboxImage();
    }

    function prevImage() {
        if (workImages.length === 0) return;
        currentIndex = (currentIndex - 1 + workImages.length) % workImages.length;
        updateLightboxImage();
    }

    // 绑定点击
    workImages.forEach((img, index) => {
        img.addEventListener('click', (e) => {
            e.preventDefault();
            openLightbox(index);
        });
    });

    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        prevImage();
    });

    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        nextImage();
    });

    // 键盘控制
    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('active')) return;

        switch (e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                prevImage();
                break;
            case 'ArrowRight':
                nextImage();
                break;
        }
    });

    // ==========================================
    // 5. 滚动渐入动画
    // ==========================================
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                fadeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    // 渐入目标
    document.querySelectorAll('.project-block, .skill-card, .edu-card, .contact-card').forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${i * 0.06}s, transform 0.6s ease ${i * 0.06}s`;
        fadeObserver.observe(el);
    });

    // ==========================================
    // 6. 平滑滚动（非导航链接的锚点）
    // ==========================================
    document.querySelectorAll('a[href^="#"]:not(.nav-links a)').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = navbar.offsetHeight;
                const targetPos = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                window.scrollTo({ top: targetPos, behavior: 'smooth' });
            }
        });
    });
});
