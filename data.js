// ==================================================================
// Dupla Animal — dados e lógica compartilhados entre index.html e loja.html
// ==================================================================

// ---- Icon system (inline SVG, no font/emoji dependency) ----
const ICONS = {
  paw: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="7.2" cy="7.5" r="2.1"/><circle cx="12" cy="5.8" r="2.1"/><circle cx="16.8" cy="7.5" r="2.1"/><circle cx="19.2" cy="12" r="1.9"/><path d="M12 12.5c-3.4 0-6.2 2.4-6.2 5.4 0 1.7 1.5 2.9 3.2 2.5.9-.2 1.9-.2 2.8 0 .1 0 .1 0 .2 0 1 .2 1.9.2 2.8 0 1.7.4 3.2-.8 3.2-2.5.1-3-2.7-5.4-6-5.4z"/></svg>',
  bowl: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h18c0 4-4 7-9 7s-9-3-9-7z"/><path d="M6 12c0-3 2.5-6 6-6s6 3 6 6"/><path d="M9 6.2c0-1.3.8-2.4 2-2.8"/></svg>',
  pill: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="9" width="17" height="7.4" rx="3.7" transform="rotate(-38 12 12.7)"/><line x1="10.6" y1="8.2" x2="14" y2="16.4"/></svg>',
  drop: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5S6 10.8 6 14.8a6 6 0 0012 0C18 10.8 12 3.5 12 3.5z"/></svg>',
  bone: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.8 8.6a2.4 2.4 0 00-3.9-2 2.4 2.4 0 00-3.6 2c0 .3.1.6.2.9L9.6 13.4a2.6 2.6 0 00-.9-.2 2.4 2.4 0 00-2 3.6 2.4 2.4 0 102.9 3.5 2.4 2.4 0 003.5-2.9l3.9-3.9c.3.1.6.2.9.2a2.4 2.4 0 002-3.6 2.4 2.4 0 001.9-1.5z"/></svg>',
  shirt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M8 4l4 2 4-2 4 3-3 3v10H7V10L4 7z"/></svg>',
  house: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11.5L12 4l8 7.5"/><path d="M6 10v9.5h12V10"/><path d="M10 19.5v-5h4v5"/></svg>',
  cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="20" r="1.3" fill="currentColor" stroke="none"/><circle cx="18" cy="20" r="1.3" fill="currentColor" stroke="none"/><path d="M2.5 3h2.4l2.1 11.4a2 2 0 002 1.6h8.6a2 2 0 002-1.6L21 7.2H6"/></svg>',
  chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12a8 8 0 1113.8 5.5L20 21l-4-1.2A8 8 0 014 12z"/></svg>',
  bolt: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"/></svg>',
  medal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="14.5" r="6"/><path d="M9.5 9.5L7 3M14.5 9.5L17 3"/><path d="M12 11.3l1 2.1 2.3.3-1.7 1.6.4 2.3-2-1.1-2 1.1.4-2.3-1.7-1.6 2.3-.3z"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 20.3l-1.4-1.3C5.6 14.9 3 12.6 3 9.6 3 7.2 4.9 5.3 7.3 5.3c1.4 0 2.7.6 3.5 1.7.8-1.1 2.2-1.7 3.5-1.7 2.4 0 4.3 1.9 4.3 4.3 0 3-2.6 5.3-7.6 9.4z"/></svg>',
  target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="9" r="2.4"/></svg>',
  pinBig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="9" r="2.4"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg>',
  camera: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="13" rx="2.5"/><path d="M8 7l1.6-2.5h4.8L16 7"/><circle cx="12" cy="13.3" r="3.4"/></svg>',
  truck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="1.5" y="7" width="13" height="10"/><path d="M14.5 10.5h4l3.5 3.5V17h-7.5z"/><circle cx="6" cy="19" r="1.6"/><circle cx="18" cy="19" r="1.6"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v6c0 4.8-3 8.2-7 9.5-4-1.3-7-4.7-7-9.5V6z"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M20 20l-4.8-4.8"/></svg>',
  bath: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h16v3a4 4 0 01-4 4H8a4 4 0 01-4-4v-3z"/><path d="M4 12V7a2 2 0 012-2c1 0 1.6.6 2 1.3"/><path d="M9 4.5S8 6 9 7"/></svg>',
  scissors: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="2.4"/><circle cx="6" cy="18" r="2.4"/><path d="M20 5L7.5 13.5M20 19L7.5 10.5"/></svg>',
  vet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v7M8.5 6.5h7"/><path d="M5 14c0 4 3 7 7 7s7-3 7-7"/><path d="M5 14a2 2 0 100-4M19 14a2 2 0 100-4"/></svg>',
};
function icon(name){ return ICONS[name] || ''; }
function paintIcons(root){
  (root || document).querySelectorAll('[data-icon]').forEach(el => {
    if(!el.dataset.painted){ el.innerHTML = icon(el.dataset.icon); el.dataset.painted = "1"; }
  });
}

const CAT_ICON = {racao:"bowl", medicamentos:"pill", higiene:"drop", acessorios:"bone", roupinhas:"shirt", casinhas:"house"};
const CAT_LABEL = {racao:"Ração", medicamentos:"Medicamento", higiene:"Higiene", acessorios:"Acessório", roupinhas:"Roupinha", casinhas:"Casinha"};
function catLabel(cat){ return CAT_LABEL[cat] || cat; }

// ---- Product catalog ----
const products = [
  {id:1, name:"Ração Origens Class", desc:"Gatos castrados · Salmão e frango 10,1kg", cat:"racao", price:144.90},
  {id:2, name:"Ração Native Super Premium", desc:"Cães adultos · Alta performance 15kg", cat:"racao", price:149.90},
  {id:3, name:"Ração Spert Frango & Carne", desc:"Cães adultos todos os portes 15kg", cat:"racao", price:119.90, img:"assets/racao-spert.jpg"},
  {id:4, name:"Ração Bummer Premium", desc:"Cães · Diferentes marcas disponíveis 15kg", cat:"racao", price:99.90, img:"assets/racao-bummer.jpg"},
  {id:5, name:"Bravecto Antipulgas", desc:"Proteção contra pulgas, carrapatos e sarnas", cat:"medicamentos", price:89.90, img:"assets/antipulgas.jpg"},
  {id:6, name:"Credeli Lotilaner 900mg", desc:"22 a 45kg · Antipulgas e carrapatos", cat:"medicamentos", price:79.90, img:"assets/antipulgas.jpg"},
  {id:7, name:"NexGard", desc:"Combate pulgas e carrapatos · Mastigável", cat:"medicamentos", price:69.90, img:"assets/antipulgas.jpg"},
  {id:15, name:"Defenz Flural", desc:"Proteção contra pulgas e carrapatos", cat:"medicamentos", price:74.90, img:"assets/antipulgas.jpg"},
  {id:16, name:"Simparic", desc:"Antipulgas e carrapatos · Comprimido mastigável", cat:"medicamentos", price:84.90, img:"assets/antipulgas.jpg"},
  {id:17, name:"VellPet Antipulgas", desc:"Linha completa para prevenção de parasitas", cat:"medicamentos", price:79.90, img:"assets/antipulgas.jpg"},
  {id:8, name:"Tapete Higiênico Sanol", desc:"30 unidades · 60x80cm", cat:"higiene", price:49.90, img:"assets/tapete-higienico.jpg"},
  {id:9, name:"Shampoo Pet News", desc:"Higiene e brilho para pelos", cat:"higiene", price:34.90},
  {id:10, name:"Coleira Ajustável", desc:"Confortável, para cães e gatos", cat:"acessorios", price:39.90},
  {id:11, name:"Brinquedo Mordedor", desc:"Resistente, ideal para diversão diária", cat:"acessorios", price:24.90},
  {id:12, name:"Roupinha de Frio", desc:"Quentinha para os dias mais frios", cat:"roupinhas", price:44.90},
  {id:13, name:"Casinha de Madeira", desc:"Resistente e confortável para o quintal", cat:"casinhas", price:229.90},
  {id:14, name:"Petisco Bistrô Animal · Suíno", desc:"Snacks naturais para cães e gatos", cat:"racao", price:19.90},
  {id:18, name:"Petisco Bistrô Animal · Bovino", desc:"Snacks naturais para cães e gatos", cat:"racao", price:19.90},
  {id:19, name:"Petisco Bistrô Animal · Frango", desc:"Snacks naturais para cães e gatos", cat:"racao", price:19.90},
];

// ==================================================================
// ---- Cart (shared between pages, kept in memory for the session) ----
// ==================================================================
let cart = [];
const WHATSAPP_NUMBER = "5516996065960";

function addToCart(id){
  const p = products.find(x => x.id === id);
  if(!p) return;
  const existing = cart.find(c => c.id === id);
  if(existing) existing.qty++;
  else cart.push({...p, qty:1});
  updateCartUI();
  showToast(`${p.name} adicionado ao carrinho`);
}
function changeQty(id, delta){
  const item = cart.find(c => c.id === id);
  if(!item) return;
  item.qty += delta;
  if(item.qty <= 0) cart = cart.filter(c => c.id !== id);
  updateCartUI();
}
function removeFromCart(id){
  cart = cart.filter(c => c.id !== id);
  updateCartUI();
}
function cartTotal(){
  return cart.reduce((sum, c) => sum + c.price * c.qty, 0);
}
function cartCount(){
  return cart.reduce((sum, c) => sum + c.qty, 0);
}
function updateCartUI(){
  const countEl = document.getElementById('cartCount');
  const itemsEl = document.getElementById('cartItems');
  const totalEl = document.getElementById('cartTotalValue');
  if(!countEl) return; // page has no cart widget
  const n = cartCount();
  countEl.textContent = n;
  countEl.style.display = n > 0 ? 'flex' : 'none';
  if(cart.length === 0){
    itemsEl.innerHTML = '<div class="cart-empty">Seu carrinho está vazio 🐾</div>';
  } else {
    itemsEl.innerHTML = cart.map(c => `
      <div class="cart-item">
        <div class="ic">${c.img ? `<img src="${c.img}" alt="${c.name}">` : icon(CAT_ICON[c.cat])}</div>
        <div class="info">
          <b>${c.name}</b>
          <span>R$ ${c.price.toFixed(2).replace('.', ',')}</span>
          <div class="qty">
            <button onclick="changeQty(${c.id},-1)">−</button>
            <span>${c.qty}</span>
            <button onclick="changeQty(${c.id},1)">+</button>
          </div>
        </div>
        <button class="remove" onclick="removeFromCart(${c.id})">remover</button>
      </div>`).join('');
  }
  totalEl.textContent = `R$ ${cartTotal().toFixed(2).replace('.', ',')}`;
}
function toggleCart(open){
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('overlay');
  if(!drawer) return;
  const isOpen = open !== undefined ? open : !drawer.classList.contains('open');
  drawer.classList.toggle('open', isOpen);
  overlay.classList.toggle('show', isOpen);
}
function checkoutWhatsapp(){
  if(cart.length === 0) return;
  let msg = "Olá! Quero fazer um pedido na Dupla Animal:%0A%0A";
  cart.forEach(c => {
    msg += `• ${c.name} (x${c.qty}) — R$ ${(c.price*c.qty).toFixed(2).replace('.', ',')}%0A`;
  });
  msg += `%0ATotal: R$ ${cartTotal().toFixed(2).replace('.', ',')}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
}
let toastTimer;
function showToast(msg){
  const toast = document.getElementById('toast');
  if(!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
}

// mobile menu toggle (shared)
function toggleMobileMenu(){
  document.querySelector('.nav-links').classList.toggle('mobile-open');
}
