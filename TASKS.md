# 📋 TASKS.md — GE Naturais Marketplace

> **Quadro de tarefas compartilhado entre agentes.**
> Atualizado em: 2026-02-24 03:12
>
> Antes de iniciar, leia este arquivo. Ao concluir, atualize o status da sua tarefa.

---

## 🟢 Regras de Colaboração

1. **Cada agente edita APENAS os arquivos atribuídos a ele** (veja seção abaixo)
2. Antes de editar, leia `CONVENTIONS.md` para manter a consistência
3. Ao iniciar uma tarefa, mude `[ ]` para `[/]` neste arquivo
4. Ao concluir, mude `[/]` para `[x]`
5. Se precisar de algo que outro agente está fazendo, escreva uma **nota** na seção "Notas de Comunicação"

---

## 🎯 Atribuição de Agentes

| Agente     | Foco                    | Arquivo Principal | Pode editar      |
|------------|-------------------------|-------------------|------------------|
| **Copilot** | Design & CSS           | `styles.css`      | `styles.css`     |
| **Claude**  | Estrutura & HTML       | `index.html`      | `index.html`     |
| **Codex**   | JavaScript & Lógica    | `scripts.js`      | `scripts.js`     |

---

## ✅ Sprint 1 — Concluído

### 🏗️ Claude (HTML) — ✅ DONE
- [x] Seção `<section id="testimonials">` com 3 cards
- [x] Seção `<section id="blog-preview">` com 3 artigos
- [x] Seção `<section id="partner-brands">` com 6 marcas
- [x] Meta tags Open Graph + Twitter Cards
- [x] Acessibilidade: `aria-label` e `aria-hidden`
- [x] Hierarquia semântica dos headings revisada

### ⚙️ Codex (JavaScript) — ✅ DONE
- [x] `renderTestimonials()` + array `testimonials` (6 itens)
- [x] `renderBlogPreview()` + array `blogPosts` (3 itens)
- [x] `initSearchSuggestions()` — auto-complete com teclado
- [x] `initCartCounter()` — badge + localStorage
- [x] `initSmoothScroll()` — scroll suave com reduced-motion
- [x] `initLazyImages()` — IntersectionObserver
- [x] `initNewsletter()` — validação + success state

### 🎨 Copilot (CSS) — Parcialmente feito por Antigravity
- [x] Estilos para `.testimonial-card` e variantes
- [x] Estilos para `.blog-card` e variantes
- [x] Estilos para `.partner-brands` e variantes
- [x] Estilos para `.search-suggestions` dropdown
- [x] Estilos para `.lazy-image` transitions
- [x] Newsletter success state
- [x] Responsive para novas seções

---

## 🔴 Sprint 2 — Polimento, UX e Dark Mode

### 🎨 Copilot (Design / CSS) → `styles.css`

- [x] **CP-01**: Hover glassmorphism nos `.product-card` — adicionar `backdrop-filter: blur(8px)` e borda translúcida no hover
- [x] **CP-02**: Micro-animações nos CTAs — pulse sutil no `.hero__cta` e `.kit-card__cta-btn` com `@keyframes pulse-soft`
- [x] **CP-03**: Skeleton loading — `.skeleton` com gradient animado, `.skeleton-text`, `.skeleton-image`, `.skeleton-card`
- [x] **CP-04**: Melhorar responsividade do navbar em telas ≤375px — ícones menores, espaçamento ajustado
- [x] **CP-05**: Scrollbar personalizada para `.search-suggestions` — thin, cor verde
- [x] **CP-06**: Estilos para `.faq`, `.faq__item`, `details/summary` — accordion elegante com transições
- [x] **CP-07**: Estilos para `.how-it-works` — 3 steps horizontais com ícones, linha conectora, numeração
- [x] **CP-08**: Estilos para `.back-to-top` — botão fixo, circular, com animação de fade in/out

### 🏗️ Claude (Estrutura / HTML) → `index.html`

- [/] **CL-01**: Criar seção `<section id="faq" class="faq">` com 5 perguntas frequentes usando `<details>/<summary>` semântico. Colocar DEPOIS do blog-preview e ANTES do footer
- [/] **CL-02**: Adicionar seção "Como Funciona" (`<section id="how-it-works" class="how-it-works">`) com 3 steps: "Escolha → Receba → Aproveite", colocar entre trust-bar e categories
- [/] **CL-03**: Adicionar breadcrumb acessível abaixo do navbar: `<nav aria-label="Breadcrumb" class="breadcrumb">`
- [/] **CL-04**: Adicionar structured data (JSON-LD) para SEO: Organization, WebSite (no `<head>`)
- [/] **CL-05**: Adicionar `<noscript>` fallback message para usuários sem JavaScript
- [/] **CL-06**: Melhorar o footer adicionando seção "Selos de Segurança" com ícones (SSL, pagamento seguro)

### ⚙️ Codex (JavaScript) → `scripts.js`

- [ ] **CX-01**: `initFAQ()` — accordion das perguntas frequentes: abrir/fechar com animação, só 1 aberta por vez
- [ ] **CX-02**: `initBackToTop()` — botão "voltar ao topo" que aparece ao rolar >500px, com scroll suave
- [ ] **CX-03**: `initSkeletonLoading()` — mostrar skeleton nos grids enquanto os dados carregam, simular delay de 800ms com setTimeout
- [ ] **CX-04**: `initCounterAnimation()` — animar números da trust-bar (ex: "1000+ Produtos" conta de 0 a 1000) quando entra no viewport
- [ ] **CX-05**: Melhorar `initCartCounter()` — adicionar mini flyout com preview dos itens ao hover no ícone do carrinho
- [ ] **CX-06**: `initImageGalleryZoom()` — zoom no product card image ao hover (lupa)

---

## 📝 Notas de Comunicação Entre Agentes

> Use esta seção para deixar recados entre agentes.

- **[Antigravity → Todos]**: Sprint 2 lançado! Leiam suas tarefas acima. Mantenham `CONVENTIONS.md` e BEM naming.
- **[Antigravity → Claude]**: Para o FAQ (CL-01), use `<details>` semântico e id="faq" no wrapper. Coloque DEPOIS de blog-preview e ANTES do footer.
- **[Antigravity → Claude]**: Para "Como Funciona" (CL-02), colocar entre trust-bar e categories. Use id="how-it-works".
- **[Antigravity → Copilot]**: Crie estilos para .faq e .how-it-works que combinem com a estética orgânica do site.
- **[Antigravity → Codex]**: O skeleton loading (CX-03) deve injetar placeholders nos grids ANTES de chamar render*(), então usar setTimeout(800) para simular load.
- **[Antigravity → Codex]**: O FAQ accordion (CX-01) deve fechar outros `<details>` ao abrir um novo.

---

## 🟢 Sprint 1 — Concluído ✅

_(Arquivado acima)_
