/* ============================================================
   GE Naturais Marketplace — Scripts
   Handles: data rendering, animations, carousel, interactions
   ============================================================ */

// ========== PRODUCT DATA ==========
const products = [
  {
    id: 1,
    name: 'Mel Orgânico Silvestre 500g',
    seller: 'Apiário São José',
    price: 42.90,
    originalPrice: 54.90,
    rating: 4.8,
    reviews: 234,
    image: 'img/product-honey.png',
    badges: ['organic'],
    tags: ['organic'],
    pix: true
  },
  {
    id: 2,
    name: 'Matcha Premium Ceremonial Grade 80g',
    seller: 'Chá & Vida',
    price: 69.90,
    originalPrice: 89.90,
    rating: 4.9,
    reviews: 187,
    image: 'img/product-matcha.png',
    badges: ['natural', 'vegan'],
    tags: ['vegan', 'organic'],
    pix: true
  },
  {
    id: 3,
    name: 'Kit Óleos Essenciais Relaxamento',
    seller: 'Aroma Natural',
    price: 89.90,
    originalPrice: 119.90,
    rating: 4.7,
    reviews: 156,
    image: 'img/product-oils.png',
    badges: ['natural'],
    tags: ['vegan'],
    pix: true
  },
  {
    id: 4,
    name: 'Granola Artesanal com Castanhas 400g',
    seller: 'Grãos da Terra',
    price: 29.90,
    originalPrice: 36.90,
    rating: 4.6,
    reviews: 312,
    image: 'img/product-granola.png',
    badges: ['organic', 'glutenfree'],
    tags: ['organic', 'glutenfree', 'lowcarb'],
    pix: true
  },
  {
    id: 5,
    name: 'Multivitamínico Natural Plant-Based 60caps',
    seller: 'VidaVerde Labs',
    price: 79.90,
    originalPrice: 99.90,
    rating: 4.5,
    reviews: 98,
    image: 'img/product-supplements.png',
    badges: ['vegan', 'natural'],
    tags: ['vegan', 'sugarfree'],
    pix: true
  },
  {
    id: 6,
    name: 'Chá de Camomila & Mel Orgânico 30 sachês',
    seller: 'Erva Pura',
    price: 34.90,
    originalPrice: 42.90,
    rating: 4.8,
    reviews: 276,
    image: 'img/product-tea.png',
    badges: ['organic'],
    tags: ['organic', 'sugarfree'],
    pix: true
  },
  {
    id: 7,
    name: 'Spirulina em Pó Orgânica 200g',
    seller: 'SuperAlimentos BR',
    price: 54.90,
    originalPrice: 69.90,
    rating: 4.4,
    reviews: 89,
    image: 'img/product-matcha.png',
    badges: ['organic', 'vegan'],
    tags: ['organic', 'vegan', 'glutenfree'],
    pix: true
  },
  {
    id: 8,
    name: 'Manteiga de Karité Pura 200ml',
    seller: 'Beleza Consciente',
    price: 44.90,
    originalPrice: 59.90,
    rating: 4.9,
    reviews: 203,
    image: 'img/product-oils.png',
    badges: ['natural', 'vegan'],
    tags: ['vegan', 'organic'],
    pix: true
  }
];

// ========== SELLERS DATA ==========
const sellers = [
  { name: 'Apiário São José', specialty: 'Mel e Própolis Orgânicos', rating: 4.9, reviews: 487, initial: 'A', products: 24, verified: true },
  { name: 'Grãos da Terra', specialty: 'Granolas e Cereais Artesanais', rating: 4.8, reviews: 392, initial: 'G', products: 18, verified: true },
  { name: 'Erva Pura', specialty: 'Chás e Infusões Naturais', rating: 4.7, reviews: 310, initial: 'E', products: 32, verified: true },
  { name: 'Beleza Consciente', specialty: 'Cosméticos Naturais e Veganos', rating: 4.9, reviews: 265, initial: 'B', products: 15, verified: false }
];

// ========== KITS DATA ==========
const kits = [
  {
    name: 'Kit Imunidade Total',
    items: 'Mel Orgânico + Própolis + Vitamina C + Chá de Equinácea',
    price: 149.90,
    originalPrice: 199.60,
    discount: 25,
    image: 'img/product-honey.png',
    tag: 'Mais Vendido'
  },
  {
    name: 'Kit Energia & Foco',
    items: 'Matcha Premium + Spirulina + Guaraná em Pó + Granola Energética',
    price: 169.90,
    originalPrice: 224.70,
    discount: 24,
    image: 'img/product-matcha.png',
    tag: 'Novidade'
  },
  {
    name: 'Kit Relaxamento & Bem-Estar',
    items: 'Óleos Essenciais + Chá Camomila + Melatonina Natural + Lavanda',
    price: 139.90,
    originalPrice: 179.60,
    discount: 22,
    image: 'img/product-tea.png',
    tag: 'Exclusivo'
  }
];

// ========== BADGE MAP ==========
const badgeLabels = {
  organic: 'Orgânico',
  natural: '100% Natural',
  vegan: 'Vegano',
  sale: 'Oferta',
  glutenfree: 'Sem Glúten'
};

// ========== SVG ICONS ==========
const starSVG = '<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
const heartSVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>';
const heartFilledSVG = '<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>';
const arrowSVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
const cartSVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>';

// ========== RENDER FUNCTIONS ==========

function renderStars(rating) {
  let html = '<div class="product-card__stars">';
  for (let i = 1; i <= 5; i++) {
    html += i <= Math.round(rating)
      ? starSVG
      : starSVG.replace('fill="currentColor"', 'fill="currentColor" class="empty"');
  }
  html += '</div>';
  return html;
}

function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  grid.innerHTML = products.map((p, i) => {
    const discount = p.originalPrice ? Math.round((1 - p.price / p.originalPrice) * 100) : 0;
    return `
    <article class="product-card fade-in fade-in-delay-${Math.min(i % 4 + 1, 6)}" tabindex="0" aria-label="${p.name}">
      <div class="product-card__image">
        <img src="${p.image}" alt="${p.name}" width="300" height="300" loading="lazy">
        <div class="product-card__badges">
          ${discount > 0 ? `<span class="badge badge--sale">-${discount}%</span>` : ''}
          ${p.badges.map(b => `<span class="badge badge--${b}">${badgeLabels[b]}</span>`).join('')}
        </div>
        <button class="product-card__wishlist" aria-label="Adicionar ${p.name} aos favoritos">${heartSVG}</button>
      </div>
      <div class="product-card__body">
        <span class="product-card__seller">${p.seller}</span>
        <h3 class="product-card__name">${p.name}</h3>
        <div class="product-card__rating">
          ${renderStars(p.rating)}
          <span class="product-card__rating-count">${p.rating} (${p.reviews})</span>
        </div>
        <div class="product-card__pricing">
          <span class="product-card__price">R$ ${p.price.toFixed(2).replace('.', ',')}</span>
          ${p.originalPrice ? `<span class="product-card__price-original">R$ ${p.originalPrice.toFixed(2).replace('.', ',')}</span>` : ''}
        </div>
        ${p.pix ? `<span class="product-card__pix">PIX R$ ${(p.price * 0.95).toFixed(2).replace('.', ',')} (5% off)</span>` : ''}
        <button class="product-card__cart-btn" aria-label="Adicionar ${p.name} ao carrinho">
          ${cartSVG}
          Adicionar
        </button>
      </div>
    </article>
  `}).join('');
}

function renderSellers() {
  const grid = document.getElementById('sellersGrid');
  if (!grid) return;

  const verifiedSVG = '<svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>';

  grid.innerHTML = sellers.map((s, i) => `
    <div class="seller-card fade-in fade-in-delay-${i + 1}" tabindex="0">
      <div class="seller-card__avatar-wrap">
        <div class="seller-card__avatar">${s.initial}</div>
        ${s.verified ? '<span class="seller-card__verified" title="Vendedor Verificado">' + verifiedSVG + '</span>' : ''}
      </div>
      <h3 class="seller-card__name">${s.name}</h3>
      <p class="seller-card__specialty">${s.specialty}</p>
      <span class="seller-card__products">${s.products} produtos disponíveis</span>
      <div class="seller-card__rating">
        ${starSVG}
        <span>${s.rating} (${s.reviews} avaliações)</span>
      </div>
      <button class="seller-card__btn">
        Ver Loja ${arrowSVG}
      </button>
    </div>
  `).join('');
}

function renderKits() {
  const grid = document.getElementById('kitsGrid');
  if (!grid) return;

  grid.innerHTML = kits.map((k, i) => `
    <div class="kit-card fade-in fade-in-delay-${i + 1}" tabindex="0">
      <div class="kit-card__image">
        <img src="${k.image}" alt="${k.name}" width="400" height="250" loading="lazy">
      </div>
      <span class="kit-card__tag">${k.tag}</span>
      <div class="kit-card__body">
        <h3 class="kit-card__name">${k.name}</h3>
        <p class="kit-card__items">${k.items}</p>
        <div class="kit-card__pricing">
          <span class="kit-card__price">R$ ${k.price.toFixed(2).replace('.', ',')}</span>
          <span class="kit-card__price-original">R$ ${k.originalPrice.toFixed(2).replace('.', ',')}</span>
          <span class="kit-card__discount">-${k.discount}%</span>
        </div>
        <button class="kit-card__cta-btn">
          Montar Meu Kit ${arrowSVG}
        </button>
      </div>
    </div>
  `).join('');
}

// ========== SCROLL ANIMATIONS ==========
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// ========== NAVBAR SCROLL EFFECT ==========
function initNavbar() {
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
  }, { passive: true });
}

// ========== FILTER PILLS TOGGLE ==========
const filterMap = {
  'Vegano': 'vegan',
  'Sem Glúten': 'glutenfree',
  'Zero Lactose': 'lactosefree',
  'Orgânico': 'organic',
  'Sem Açúcar': 'sugarfree',
  'Low Carb': 'lowcarb'
};

function initFilterPills() {
  const pills = document.querySelectorAll('.filter-pill');
  const grid = document.getElementById('productsGrid');

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pill.classList.toggle('active');
      filterProducts();
    });
  });

  function filterProducts() {
    const activeTags = [];
    pills.forEach(p => {
      if (p.classList.contains('active')) {
        const label = p.textContent.trim();
        const tag = filterMap[label];
        if (tag) activeTags.push(tag);
      }
    });

    const cards = grid.querySelectorAll('.product-card');
    let visibleCount = 0;

    cards.forEach((card, index) => {
      const product = products[index];
      if (!product) return;

      const matches = activeTags.length === 0 || activeTags.some(tag => product.tags && product.tags.includes(tag));
      card.style.display = matches ? '' : 'none';
      if (matches) visibleCount++;
    });

    // Show/hide empty state
    let emptyMsg = grid.querySelector('.products__empty');
    if (visibleCount === 0) {
      if (!emptyMsg) {
        emptyMsg = document.createElement('div');
        emptyMsg.className = 'products__empty';
        emptyMsg.innerHTML = '<p>Nenhum produto encontrado para os filtros selecionados.</p>';
        grid.appendChild(emptyMsg);
      }
      emptyMsg.style.display = '';
    } else if (emptyMsg) {
      emptyMsg.style.display = 'none';
    }
  }
}

// ========== MOBILE SEARCH EXPAND ==========
function initMobileSearch() {
  const searchWrap = document.querySelector('.navbar__search');
  const searchIcon = document.querySelector('.navbar__search-icon');
  if (!searchWrap || !searchIcon) return;

  const isMobile = () => window.innerWidth <= 375;

  searchIcon.style.pointerEvents = 'auto';
  searchIcon.style.cursor = 'pointer';

  searchIcon.addEventListener('click', () => {
    if (!isMobile()) return;
    searchWrap.classList.toggle('expanded');
    if (searchWrap.classList.contains('expanded')) {
      searchWrap.querySelector('input')?.focus();
    }
  });

  document.addEventListener('click', (e) => {
    if (isMobile() && !searchWrap.contains(e.target)) {
      searchWrap.classList.remove('expanded');
    }
  });
}

// ========== WISHLIST TOGGLE ==========
function initWishlist() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.product-card__wishlist');
    if (!btn) return;
    e.stopPropagation();
    btn.classList.toggle('active');
    if (btn.classList.contains('active')) {
      btn.innerHTML = heartFilledSVG;
      btn.style.transform = 'scale(1.2)';
      setTimeout(() => btn.style.transform = '', 200);
    } else {
      btn.innerHTML = heartSVG;
    }
  });
}

// ========== HERO SLIDER ==========
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero__slide');
  const dots = document.querySelectorAll('.hero__dot');
  if (slides.length <= 1 || dots.length === 0) return;

  let current = 0;
  let interval;

  function goTo(index) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function startAutoPlay() {
    interval = setInterval(() => goTo(current + 1), 5000);
  }

  function stopAutoPlay() {
    clearInterval(interval);
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      stopAutoPlay();
      goTo(i);
      startAutoPlay();
    });
  });

  const slider = document.getElementById('heroSlider');
  if (slider) {
    slider.addEventListener('mouseenter', stopAutoPlay);
    slider.addEventListener('mouseleave', startAutoPlay);
  }

  startAutoPlay();
}

// ========== MOBILE MENU ==========
function initMobileMenu() {
  const toggle = document.getElementById('menuToggle');
  const navbar = document.getElementById('navbar');
  if (!toggle || !navbar) return;

  // Create mobile menu overlay
  const overlay = document.createElement('div');
  overlay.className = 'mobile-menu-overlay';
  overlay.innerHTML = `
    <div class="mobile-menu">
      <button class="mobile-menu__close" aria-label="Fechar menu">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </button>
      <nav class="mobile-menu__nav">
        <a href="#categories" class="mobile-menu__link">Categorias</a>
        <a href="#products" class="mobile-menu__link">Ofertas</a>
        <a href="#sellers" class="mobile-menu__link">Vendedores</a>
        <a href="#kits" class="mobile-menu__link">Kits</a>
      </nav>
      <div class="mobile-menu__search">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        <input type="search" placeholder="Buscar produtos..." aria-label="Buscar produtos">
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  const menu = overlay.querySelector('.mobile-menu');
  const closeBtn = overlay.querySelector('.mobile-menu__close');

  function openMenu() {
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeMenu();
  });

  overlay.querySelectorAll('.mobile-menu__link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

// ========== ACTIVE NAV LINK ON SCROLL ==========
function initActiveNavLinks() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar__link');
  if (sections.length === 0 || navLinks.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' });

  sections.forEach(section => observer.observe(section));
}
function initWhatsApp() {
  const wrapper = document.getElementById('whatsappFloat');
  const btn = document.getElementById('whatsappBtn');
  const closeBtn = document.getElementById('whatsappClose');
  if (!wrapper || !btn) return;

  btn.addEventListener('click', () => {
    wrapper.classList.toggle('active');
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      wrapper.classList.remove('active');
    });
  }

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!wrapper.contains(e.target)) {
      wrapper.classList.remove('active');
    }
  });

  // Auto-show tooltip after 5s for first-time visitors
  if (!sessionStorage.getItem('whatsapp_shown')) {
    setTimeout(() => {
      wrapper.classList.add('active');
      sessionStorage.setItem('whatsapp_shown', '1');
    }, 5000);
  }
}

// ========== INITIALIZE ==========
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderSellers();
  renderKits();
  initScrollAnimations();
  initNavbar();
  initFilterPills();
  initWhatsApp();
  initWishlist();
  initHeroSlider();
  initMobileMenu();
  initActiveNavLinks();
  initMobileSearch();
});
