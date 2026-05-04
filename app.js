const WHATSAPP = '5511999999999'; // ← troque pelo número real

// ===== DADOS DO CARDÁPIO =====
const pizzas = [
  // CLÁSSICAS
  { id:1,  cat:'classicas', nome:'La Marinara',           desc:'Molho de tomate San Marzano, alho laminado, anchovas e orégano fresco — sem queijo, como manda a tradição',  precos:{Broto:38,Média:48,Grande:58,'Família':68}, tag:'Clássica', tagClass:'tag-classica', img:'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=75' },
  { id:2,  cat:'classicas', nome:'Margherita di Bufala',  desc:'Fior di latte, tomate orgânico, folhas de manjericão rasgadas na hora e fio de azeite extra virgem',          precos:{Broto:42,Média:52,Grande:62,'Família':72}, tag:'Clássica', tagClass:'tag-classica', img:'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=75' },
  { id:3,  cat:'classicas', nome:'Diavola',               desc:'Salame piccante calabrês, pimenta dedo-de-moça, mel de abelha e mozzarella — doce, picante e viciante',       precos:{Broto:44,Média:54,Grande:64,'Família':74}, tag:'Clássica', tagClass:'tag-classica', img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=75' },
  { id:4,  cat:'classicas', nome:'Bianca Classica',       desc:'Base de ricota cremosa, alho assado, mozzarella, parmesão ralado na hora e pimenta negra moída',             precos:{Broto:43,Média:53,Grande:63,'Família':73}, tag:'Clássica', tagClass:'tag-classica', img:'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?w=400&q=75' },
  { id:5,  cat:'classicas', nome:'Tonno e Cipolla',       desc:'Atum do mediterrâneo, cebola roxa marinada, alcaparras, azeitonas Kalamata e mozzarella',                    precos:{Broto:43,Média:53,Grande:63,'Família':73}, tag:'Clássica', tagClass:'tag-classica', img:'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=75' },
  { id:6,  cat:'classicas', nome:'Prosciutto e Figos',    desc:'Presunto de parma, figos frescos, gorgonzola, rúcula selvagem e redução de balsâmico',                       precos:{Broto:49,Média:59,Grande:69,'Família':79}, tag:'Clássica', tagClass:'tag-classica', img:'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400&q=75' },

  // ESPECIAIS
  { id:7,  cat:'especiais', nome:'Funghi e Tartufo',      desc:'Mix de cogumelos frescos, creme de trufa negra, tomilho, fontina e lascas de parmesão envelhecido',           precos:{Broto:54,Média:65,Grande:77,'Família':89}, tag:'Chef',     tagClass:'tag-especial', img:'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&q=75' },
  { id:8,  cat:'especiais', nome:'Burrata & Confit',      desc:'Burrata fresca rasgada, tomates cherry confit, pesto de manjericão e lascas de castanha de caju',             precos:{Broto:52,Média:63,Grande:74,'Família':85}, tag:'Chef',     tagClass:'tag-especial', img:'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400&q=75' },
  { id:9,  cat:'especiais', nome:'Nduja e Burrata',       desc:'Nduja calabresa picante, burrata cremosa, mel de eucalipto e nozes caramelizadas — contraste perfeito',       precos:{Broto:55,Média:67,Grande:79,'Família':91}, tag:'Chef',     tagClass:'tag-especial', img:'https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?w=400&q=75' },
  { id:10, cat:'especiais', nome:'Salmone Affumicato',    desc:'Salmão defumado artesanal, cream cheese, alcaparras, endro fresco e cebola roxa em conserva',                precos:{Broto:57,Média:69,Grande:81,'Família':93}, tag:'Chef',     tagClass:'tag-especial', img:'https://images.unsplash.com/photo-1548369937-47519962c11a?w=400&q=75' },
  { id:11, cat:'especiais', nome:'Gamberi Piccanti',      desc:'Camarões salteados na manteiga com pimenta rosa, tomate fresco, alho negro e salsinha',                       precos:{Broto:59,Média:71,Grande:84,'Família':97}, tag:'Chef',     tagClass:'tag-especial', img:'https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&q=75' },
  { id:12, cat:'especiais', nome:'Carne Lenta & Chimichurri', desc:'Costela bovina desfiada lentamente por 12h, chimichurri fresco, cebola crispy e mozzarella',             precos:{Broto:53,Média:64,Grande:76,'Família':88}, tag:'Chef',     tagClass:'tag-especial', img:'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=75' },

  // DOCES
  { id:13, cat:'doces',     nome:'Cioccolato Fondente',   desc:'Chocolate 70% cacau, flor de sal, fio de azeite e raspas de laranja — uma sobremesa italiana de verdade',     precos:{Broto:43,Média:53,Grande:63,'Família':73}, tag:'Doce',     tagClass:'tag-doce',    img:'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&q=75' },
  { id:14, cat:'doces',     nome:'Romeu & Julieta',       desc:'Mozzarella derretida, goiabada artesanal aquecida, canela e farofa de castanha — o clássico reinventado',     precos:{Broto:39,Média:49,Grande:59,'Família':69}, tag:'Doce',     tagClass:'tag-doce',    img:'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&q=75' },
  { id:15, cat:'doces',     nome:'Pere e Gorgonzola',     desc:'Peras caramelizadas, gorgonzola cremoso, nozes tostadas e mel de abelha — doce, salgado e surpreendente',     precos:{Broto:44,Média:54,Grande:64,'Família':74}, tag:'Doce',     tagClass:'tag-doce',    img:'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=75' },
  { id:16, cat:'doces',     nome:'Banana Foster',         desc:'Banana flambada ao rum, caramelo artesanal, coco tostado e sorvete de baunilha — servida quente',              precos:{Broto:41,Média:51,Grande:61,'Família':71}, tag:'Doce',     tagClass:'tag-doce',    img:'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=75' },
];

// ===== CARRINHO =====
let cart = [];

function cartKey(id, tamanho) { return `${id}__${tamanho}`; }

function addToCart(id, tamanho) {
  const pizza = pizzas.find(p => p.id === id);
  if (!pizza) return;
  const key = cartKey(id, tamanho);
  const existing = cart.find(i => i.key === key);
  if (existing) { existing.qty++; }
  else { cart.push({ key, id, nome: pizza.nome, tamanho, preco: pizza.precos[tamanho], img: pizza.img, qty: 1 }); }
  updateCartUI();
  openCart();
  showToast(`${pizza.nome} (${tamanho}) adicionada ao carrinho`);
}

function changeQty(key, delta) {
  const item = cart.find(i => i.key === key);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(i => i.key !== key);
  updateCartUI();
}

function removeItem(key) {
  cart = cart.filter(i => i.key !== key);
  updateCartUI();
}

function cartTotal() { return cart.reduce((s, i) => s + i.preco * i.qty, 0); }

function updateCartUI() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cartCount').textContent = count;
  const body   = document.getElementById('cartBody');
  const footer = document.getElementById('cartFooter');

  if (cart.length === 0) {
    body.innerHTML = `<div class="cart-empty"><span><svg width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg></span><p>Seu carrinho está vazio.<br>Adicione pizzas do cardápio!</p></div>`;
    footer.style.display = 'none';
    return;
  }

  footer.style.display = 'block';
  body.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img"><img src="${item.img}" alt="${item.nome}" loading="lazy"/></div>
      <div class="cart-item-info">
        <strong>${item.nome}</strong>
        <div class="cart-item-size">${item.tamanho}</div>
        <div class="cart-item-controls">
          <div class="ci-qty">
            <button onclick="changeQty('${item.key}', -1)">−</button>
            <span>${item.qty}</span>
            <button onclick="changeQty('${item.key}', +1)">+</button>
          </div>
          <button class="cart-item-remove" onclick="removeItem('${item.key}')" title="Remover"><svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg></button>
        </div>
      </div>
      <span class="cart-item-price">R$ ${(item.preco * item.qty).toFixed(0)}</span>
    </div>`).join('');

  const total = cartTotal();
  document.getElementById('cartTotal').textContent = `R$ ${total.toFixed(0)}`;
  document.getElementById('cartFrete').textContent = total >= 60
    ? 'Entrega grátis incluída!'
    : `Faltam R$ ${(60 - total).toFixed(0)} para frete grátis`;
}

// ===== CARRINHO ABRIR/FECHAR =====
function openCart() {
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('cartBtn').addEventListener('click', openCart);
document.getElementById('cartClose').addEventListener('click', closeCart);
document.getElementById('cartOverlay').addEventListener('click', closeCart);

// ===== CHECKOUT MODAL =====
function openModal() {
  if (cart.length === 0) { showToast('Adicione pelo menos uma pizza!'); return; }
  const total = cartTotal();
  document.getElementById('modalResumo').innerHTML = `
    <span class="modal-resumo-title">Resumo do pedido</span>
    ${cart.map(i => `
      <div class="modal-resumo-item">
        <span>${i.qty}× ${i.nome} (${i.tamanho})</span>
        <span>R$ ${(i.preco * i.qty).toFixed(0)}</span>
      </div>`).join('')}
    <div class="modal-resumo-total"><span>Total</span><span>R$ ${total.toFixed(0)}</span></div>`;
  closeCart();
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('cartCheckout').addEventListener('click', openModal);
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', e => {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
});

// ===== ENVIAR PELO WHATSAPP =====
document.getElementById('checkoutForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const nome  = document.getElementById('ckNome').value.trim();
  const tel   = document.getElementById('ckTel').value.trim();
  const end   = document.getElementById('ckEnd').value.trim();
  const pgto  = document.querySelector('input[name="pgto"]:checked')?.value || '';
  const troco = document.getElementById('ckTroco').value.trim();
  const obs   = document.getElementById('ckObs').value.trim();

  if (!nome || !tel || !pgto) { showToast('Preencha nome, telefone e pagamento.'); return; }

  const total  = cartTotal();
  const entrega = end ? `📍 Entrega: ${end}` : '🏪 Retirada no local';
  const frete   = total >= 60 ? 'Entrega grátis ✅' : 'Taxa de entrega a combinar';
  const itens   = cart.map(i => `  • ${i.qty}× ${i.nome} (${i.tamanho}) — R$ ${(i.preco * i.qty).toFixed(0)}`).join('\n');
  const trocoLine = pgto === 'Dinheiro' ? (troco ? `💵 *Troco para:* ${troco}` : '💵 *Troco:* Não precisa') : '';

  const msg = [
    '🍕 *Novo Pedido — Forneria Napoli*',
    '─────────────────────',
    `👤 *Nome:* ${nome}`,
    `📞 *Tel:* ${tel}`,
    entrega,
    '',
    '*Itens:*',
    itens,
    '',
    `💰 *Total:* R$ ${total.toFixed(0)}`,
    `💳 *Pagamento:* ${pgto}`,
    trocoLine,
    `🛵 ${frete}`,
    obs ? `📝 *Obs:* ${obs}` : '',
    '─────────────────────',
    '_Pedido enviado pelo site_',
  ].filter(Boolean).join('\n');

  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank');

  closeModal();
  cart = [];
  updateCartUI();
  this.reset();
  document.querySelectorAll('input[name="pgto"]').forEach(r => r.checked = false);
  document.getElementById('trocoGroup').style.display = 'none';
  showToast('Pedido enviado pelo WhatsApp!');
});

// ===== TROCO (mostrar quando pagamento = Dinheiro) =====
document.querySelectorAll('input[name="pgto"]').forEach(r => {
  r.addEventListener('change', () => {
    const trocoGroup = document.getElementById('trocoGroup');
    trocoGroup.style.display = r.value === 'Dinheiro' && r.checked ? 'block' : 'none';
    if (r.value !== 'Dinheiro') document.getElementById('ckTroco').value = '';
  });
});

// ===== MÁSCARA TELEFONE =====
document.getElementById('ckTel').addEventListener('input', function() {
  let v = this.value.replace(/\D/g,'').slice(0,11);
  if (v.length > 6) v = `(${v.slice(0,2)}) ${v.slice(2,7)}-${v.slice(7)}`;
  else if (v.length > 2) v = `(${v.slice(0,2)}) ${v.slice(2)}`;
  else if (v.length > 0) v = `(${v}`;
  this.value = v;
});

// ===== CARDÁPIO =====
function renderMenu(cat = 'todas') {
  const grid     = document.getElementById('menuGrid');
  const filtered = cat === 'todas' ? pizzas : pizzas.filter(p => p.cat === cat);
  const tamanhos = ['Broto', 'Média', 'Grande', 'Família'];

  const tamanhoLabels = { Broto: 'P', Média: 'M', Grande: 'G', 'Família': 'F' };

  grid.innerHTML = filtered.map(p => {
    const sizeBtns = tamanhos.map((t, i) => `
      <button
        class="size-btn${i === 1 ? ' active' : ''}"
        data-size="${t}"
        data-price="${p.precos[t]}"
        onclick="selectSize(this, ${p.id})"
        title="${t}">
        <span class="size-label">${tamanhoLabels[t]}</span>
        <span class="size-price">R$${p.precos[t]}</span>
      </button>`).join('');

    return `
      <div class="pizza-card">
        <div class="pizza-card-img"><img src="${p.img}" alt="${p.nome}" loading="lazy"/></div>
        <div class="pizza-card-body">
          <span class="pizza-card-tag ${p.tagClass}">${p.tag}</span>
          <h3>${p.nome}</h3>
          <p>${p.desc}</p>
          <div class="size-selector" id="sizes_${p.id}">${sizeBtns}</div>
          <button class="btn-pedir" onclick="addToCartFromCard(${p.id})">
            <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
            Adicionar
          </button>
        </div>
      </div>`;
  }).join('');
}

function selectSize(btn, id) {
  const container = document.getElementById(`sizes_${id}`);
  container.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function addToCartFromCard(id) {
  const container = document.getElementById(`sizes_${id}`);
  const active = container?.querySelector('.size-btn.active');
  addToCart(id, active ? active.dataset.size : 'Média');
}

// ===== TABS =====
document.getElementById('menuTabs').addEventListener('click', e => {
  const tab = e.target.closest('.tab');
  if (!tab) return;
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  renderMenu(tab.dataset.cat);
});

// ===== HEADER SCROLL =====
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// ===== BURGER =====
document.getElementById('burger').addEventListener('click', () => {
  document.getElementById('nav').classList.toggle('open');
  document.getElementById('burger').classList.toggle('open');
});
document.getElementById('nav').addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    document.getElementById('nav').classList.remove('open');
    document.getElementById('burger').classList.remove('open');
  }
});

// ===== TOAST =====
function showToast(msg) {
  let t = document.querySelector('.toast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 3000);
}

// ===== ANIMAÇÕES =====
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.badge-item, .stat, .como-step, .depo-card').forEach(el => {
  el.classList.add('anim-in');
  observer.observe(el);
});

// ===== INIT =====
renderMenu();
updateCartUI();
