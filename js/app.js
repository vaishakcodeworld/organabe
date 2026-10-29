/**
 * ORGANIC ANABE (ಆರ್ಗ್ಯಾನಿಕ್ ಅಣಬೆ)
 * Complete Application Controller
 * Cart Engine, Smart WhatsApp Router, Bilingual Switcher,
 * Gallery Uploader, VRL Logistics & Recipe Helpers.
 */

document.addEventListener('DOMContentLoaded', () => {
  // -------------------------------------------------------------
  // 1. Language & State Management
  // -------------------------------------------------------------
  let currentLang = localStorage.getItem('anabe_lang') || 'en';

  // Cart State (Initialized with default 1 Oyster pack so user immediately sees a live cart)
  let cartState = {
    oyster: { id: 'oyster', name: 'Fresh Oyster Mushroom (200g)', price: 79, qty: 1, unit: 'pack', img: 'assets/oyster_fresh.jpg' },
    milky: { id: 'milky', name: 'Fresh Milky Mushroom (200g)', price: 79, qty: 0, unit: 'pack', img: 'assets/milky_fresh.jpg' },
    combo: { id: 'combo', name: 'Organic Combo (1 Oyster + 1 Milky - 400g)', price: 150, qty: 0, unit: 'combo', img: 'assets/farm_harvest_basket.jpg' },
    oyster_spawn: { id: 'oyster_spawn', name: 'Oyster Mushroom Spawn (Min 10 KG)', price: 130, minQty: 10, qty: 0, unit: 'KG', img: 'assets/oyster_spawn.jpg' },
    milky_spawn: { id: 'milky_spawn', name: 'Milky Mushroom Spawn (Min 10 KG)', price: 130, minQty: 10, qty: 0, unit: 'KG', img: 'assets/milky_spawn.jpg' }
  };

  // Restore cart from localStorage if present
  try {
    const savedCart = localStorage.getItem('anabe_cart');
    if (savedCart) {
      const parsed = JSON.parse(savedCart);
      if (parsed && typeof parsed === 'object') {
        Object.keys(parsed).forEach(k => {
          if (cartState[k]) cartState[k].qty = Number(parsed[k].qty) || 0;
        });
      }
    }
  } catch (e) {
    console.warn("Could not load cart from storage", e);
  }

  // Restore saved address if present
  try {
    const savedAddr = localStorage.getItem('anabe_address');
    if (savedAddr) {
      const addrObj = JSON.parse(savedAddr);
      const nameInput = document.getElementById('cart-name');
      const phoneInput = document.getElementById('cart-phone');
      const addressInput = document.getElementById('cart-address');
      const cityInput = document.getElementById('cart-city');
      const notesInput = document.getElementById('cart-notes');

      if (nameInput && addrObj.name) nameInput.value = addrObj.name;
      if (phoneInput && addrObj.phone) phoneInput.value = addrObj.phone;
      if (addressInput && addrObj.address) addressInput.value = addrObj.address;
      if (cityInput && addrObj.city) cityInput.value = addrObj.city;
      if (notesInput && addrObj.notes) notesInput.value = addrObj.notes;
    }
  } catch (e) {
    console.warn("Could not load address from storage", e);
  }

  // DOM Elements - Language
  const langEnBtn = document.getElementById('lang-en-btn');
  const langKnBtn = document.getElementById('lang-kn-btn');

  // DOM Elements - Cart
  const cartOverlay = document.getElementById('cart-overlay');
  const cartDrawer = document.getElementById('cart-drawer');
  const cartCloseBtn = document.getElementById('cart-close-btn');
  const navCartBtn = document.getElementById('nav-cart-btn');
  const mobileBottomCartBtn = document.getElementById('mobile-bottom-cart-btn');
  const cartBadgeCount = document.getElementById('cart-badge-count');
  const mobileCartBadgeCount = document.getElementById('mobile-cart-badge-count');
  const mobileCartTotalVal = document.getElementById('mobile-cart-total-val');
  const cartItemsList = document.getElementById('cart-items-list');
  const cartSubtotalEl = document.getElementById('cart-subtotal-val');
  const cartTotalValEl = document.getElementById('cart-total-val');
  const btnCartCheckout = document.getElementById('btn-cart-checkout');

  // Direct WhatsApp Helper
  function sendDirectWhatsApp(messageText, phoneNum = "919591185530") {
    const cleanPhone = phoneNum.replace(/[^0-9]/g, '');
    const encodedMsg = encodeURIComponent(messageText || "Hello Organic Anabe! I would like to inquire about fresh organic mushrooms.");
    const url = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodedMsg}`;
    window.open(url, '_blank');
  }
  window.sendDirectWhatsApp = sendDirectWhatsApp;

  // DOM Elements - Mobile Navigation
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileDrawerOverlay = document.getElementById('mobile-drawer-overlay');
  const mobileDrawerClose = document.getElementById('mobile-drawer-close');

  // Helper: Device check for smart WhatsApp behavior
  function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
  }

  // -------------------------------------------------------------
  // 2. Bilingual Engine (Simple English & Natural Kannada)
  // -------------------------------------------------------------
  function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('anabe_lang', lang);
    document.body.setAttribute('data-lang', lang);
    document.documentElement.lang = lang;

    if (lang === 'kn') {
      if (langKnBtn) langKnBtn.classList.add('active');
      if (langEnBtn) langEnBtn.classList.remove('active');
      document.title = "ಆರ್ಗ್ಯಾನಿಕ್ ಅಣಬೆ (Organic Anabe) | ತಾಜಾ ಸಾವಯವ ಅಣಬೆಗಳು";
    } else {
      if (langEnBtn) langEnBtn.classList.add('active');
      if (langKnBtn) langKnBtn.classList.remove('active');
      document.title = "Organic Anabe | Fresh Organic Mushrooms in Karnataka";
    }

    const dict = (typeof translations !== 'undefined' && translations[lang]) ? translations[lang] : {};
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    renderCart();
  }

  if (langEnBtn) langEnBtn.addEventListener('click', () => updateLanguage('en'));
  if (langKnBtn) langKnBtn.addEventListener('click', () => updateLanguage('kn'));

  // -------------------------------------------------------------
  // 3. Cart Engine (+ / - Quantities & Full Total Calculation)
  // -------------------------------------------------------------
  function saveCart() {
    try {
      localStorage.setItem('anabe_cart', JSON.stringify(cartState));
    } catch (e) {}
  }

  window.addToCart = function(productId, qty = 1) {
    if (cartState[productId]) {
      const min = cartState[productId].minQty || 1;
      if (cartState[productId].qty === 0) {
        cartState[productId].qty = Math.max(min, qty);
      } else {
        cartState[productId].qty += qty;
      }
      saveCart();
      renderCart();
      openCart();
    }
  };

  window.changeCartQty = function(productId, delta) {
    if (cartState[productId]) {
      const min = cartState[productId].minQty || 1;
      const step = min > 1 ? 5 : 1;
      const actualDelta = delta * step;
      const newQty = cartState[productId].qty + actualDelta;
      if (newQty < min) {
        cartState[productId].qty = 0;
      } else {
        cartState[productId].qty = newQty;
      }
      saveCart();
      renderCart();
    }
  };

  function renderCart() {
    let totalItems = 0;
    let grandTotal = 0;
    let itemsHtml = '';

    Object.keys(cartState).forEach((key) => {
      const item = cartState[key];
      if (item.qty > 0) {
        totalItems += item.qty;
        const itemTotal = item.qty * item.price;
        grandTotal += itemTotal;

        const rateLabel = item.unit === 'KG' ? `₹${item.price} / KG (Min ${item.minQty || 10} KG)` : `₹${item.price} each`;
        const qtyLabel = item.unit === 'KG' ? `${item.qty} KG` : `${item.qty}`;

        itemsHtml += `
          <div class="cart-item-card">
            <img src="${item.img}" alt="${item.name}" class="cart-item-thumb" />
            <div class="cart-item-info">
              <div class="cart-item-name">${item.name}</div>
              <div class="cart-item-rate">${rateLabel}</div>
            </div>
            <div class="cart-qty-stepper">
              <button type="button" class="cart-qty-btn" onclick="changeCartQty('${key}', -1)" aria-label="Decrease quantity">-</button>
              <span class="cart-qty-val">${qtyLabel}</span>
              <button type="button" class="cart-qty-btn" onclick="changeCartQty('${key}', 1)" aria-label="Increase quantity">+</button>
            </div>
            <div class="cart-item-total">₹${itemTotal.toLocaleString('en-IN')}</div>
          </div>
        `;
      }
    });

    if (totalItems === 0) {
      itemsHtml = `
        <div style="text-align: center; padding: 40px 10px; color: var(--text-muted);">
          <span class="material-symbols-outlined" style="font-size: 48px; color: var(--secondary); margin-bottom: 8px;">shopping_basket</span>
          <p style="font-weight: 700; font-size: 1rem;">Your Cart is Empty</p>
          <p style="font-size: 0.85rem; margin-top: 4px;">Choose from our Fresh Mushrooms or Lab-Grade Mushroom Spawn (₹130/KG) to add them here!</p>
          <div style="display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; margin-top: 14px;">
            <button type="button" class="btn-order-primary" onclick="addToCart('oyster', 1)" style="font-size: 0.8rem; padding: 8px 14px;">
              + 1 Oyster Pack (₹79)
            </button>
            <button type="button" class="btn-order-primary" onclick="addToCart('oyster_spawn', 10)" style="font-size: 0.8rem; padding: 8px 14px; background: var(--tertiary-dark); border: 1px solid var(--secondary); color: var(--secondary-light);">
              + 10 KG Oyster Spawn (₹1,300)
            </button>
          </div>
        </div>
      `;
    }

    if (cartItemsList) cartItemsList.innerHTML = itemsHtml;
    if (cartBadgeCount) cartBadgeCount.textContent = totalItems;
    if (mobileCartBadgeCount) mobileCartBadgeCount.textContent = totalItems;
    if (cartSubtotalEl) cartSubtotalEl.textContent = `₹${grandTotal.toLocaleString('en-IN')}`;
    if (cartTotalValEl) cartTotalValEl.textContent = `₹${grandTotal.toLocaleString('en-IN')}`;
    if (mobileCartTotalVal) mobileCartTotalVal.textContent = `₹${grandTotal.toLocaleString('en-IN')}`;

    // Update hero quick order buttons with latest quantities
    const heroOysterQty = cartState.oyster.qty;
    const heroMilkyQty = cartState.milky.qty;
    const heroOysterQtyEl = document.getElementById('hero-oyster-qty');
    const heroMilkyQtyEl = document.getElementById('hero-milky-qty');
    if (heroOysterQtyEl) heroOysterQtyEl.textContent = heroOysterQty;
    if (heroMilkyQtyEl) heroMilkyQtyEl.textContent = heroMilkyQty;

    // Toggle Fresh Mushroom Mysore/Mandya delivery restriction notice
    const freshNoteEl = document.getElementById('fresh-mushroom-restriction-note');
    const hasFresh = (cartState.oyster && cartState.oyster.qty > 0) || (cartState.milky && cartState.milky.qty > 0);
    if (freshNoteEl) {
      freshNoteEl.style.display = hasFresh ? 'block' : 'none';
    }
  }

  function openCart() {
    if (cartOverlay) cartOverlay.classList.add('open');
    if (cartDrawer) cartDrawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    if (cartOverlay) cartOverlay.classList.remove('open');
    if (cartDrawer) cartDrawer.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (navCartBtn) navCartBtn.addEventListener('click', openCart);
  if (mobileBottomCartBtn) mobileBottomCartBtn.addEventListener('click', openCart);
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCart);
  if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

  // -------------------------------------------------------------
  // 4. Order Assembly & Smart WhatsApp Flow (Mobile vs Laptop)
  // -------------------------------------------------------------
  let latestOrderMessage = "";

  function compileOrderSlip() {
    const nameInput = document.getElementById('cart-name');
    const phoneInput = document.getElementById('cart-phone');
    const addressInput = document.getElementById('cart-address');
    const cityInput = document.getElementById('cart-city');
    const notesInput = document.getElementById('cart-notes');

    const name = nameInput ? nameInput.value.trim() : "";
    const phone = phoneInput ? phoneInput.value.trim() : "";
    const address = addressInput ? addressInput.value.trim() : "";
    const city = cityInput ? cityInput.value.trim() : "";
    const notes = notesInput ? notesInput.value.trim() : "";

    // Save to localStorage for user convenience
    try {
      localStorage.setItem('anabe_address', JSON.stringify({ name, phone, address, city, notes }));
    } catch (e) {}

    let totalItems = 0;
    let grandTotal = 0;
    let itemsText = "";

    Object.keys(cartState).forEach((key) => {
      const item = cartState[key];
      if (item.qty > 0) {
        totalItems += item.qty;
        const total = item.qty * item.price;
        grandTotal += total;
        const unitStr = item.unit === 'KG' ? 'KG' : 'pack(s)';
        itemsText += `• ${item.name}: ${item.qty} ${unitStr} = ₹${total.toLocaleString('en-IN')}\n`;
      }
    });

    if (totalItems === 0) {
      alert("Please add at least 1 pack of mushrooms or 10 KG spawn to your cart before ordering!");
      return null;
    }

    if (!name || !address) {
      alert("Please enter your Name and Delivery Address so our farm delivery team can reach you!");
      if (!name && nameInput) nameInput.focus();
      else if (!address && addressInput) addressInput.focus();
      return null;
    }

    const isKn = currentLang === 'kn';

    // Strict Fresh Mushroom Location Check (Mysore & Mandya ONLY)
    const hasFreshMushrooms = (cartState.oyster && cartState.oyster.qty > 0) || (cartState.milky && cartState.milky.qty > 0);
    const cleanCity = (city || '').toLowerCase();
    const isMysoreOrMandya = cleanCity.includes('mysore') || 
                             cleanCity.includes('mysuru') || 
                             cleanCity.includes('mandya') ||
                             cleanCity.includes('ಮೈಸೂರು') ||
                             cleanCity.includes('ಮಂಡ್ಯ');

    if (hasFreshMushrooms && !isMysoreOrMandya) {
      const msg = isKn 
        ? "⚠️ ಕ್ಷಮಿಸಿ! ತಾಜಾ ಸಾವಯವ ಅಣಬೆಗಳನ್ನು (Fresh Mushrooms) ಗರಿಷ್ಠ ತಾಜಾತನಕ್ಕಾಗಿ ಕೇವಲ ಮೈಸೂರು ಮತ್ತು ಮಂಡ್ಯ ನಗರದ ವ್ಯಾಪ್ತಿಯಲ್ಲಿ ಮಾತ್ರ ತಲುಪಿಸಲಾಗುತ್ತದೆ. ಇತರ ಊರುಗಳಿಗೆ ತಾಜಾ ಅಣಬೆಗಳ ಆರ್ಡರ್ ಸ್ವೀಕರಿಸಲಾಗುವುದಿಲ್ಲ.\n\n(ಗಮನಿಸಿ: ಅಣಬೆ ಬೀಜ / Mushroom Spawn ಮತ್ತು ಪೆಲ್ಲೆಟ್‌ಗಳನ್ನು ಮಾತ್ರ ಸಮಗ್ರ ಕರ್ನಾಟಕದ ಎಲ್ಲಾ ಜಿಲ್ಲೆಗಳಿಗೆ ತಲುಪಿಸಲಾಗುತ್ತದೆ).\n\nದಯವಿಟ್ಟು ನಿಮ್ಮ ಡೆಲಿವರಿ ಸ್ಥಳವನ್ನು ಮೈಸೂರು ಅಥವಾ ಮಂಡ್ಯ ಎಂದು ಆಯ್ಕೆಮಾಡಿ, ಅಥವಾ ಕಾರ್ಟ್‌ನಿಂದ ತಾಜಾ ಅಣಬೆಗಳನ್ನು ತೆಗೆದುಹಾಕಿ."
        : "⚠️ Fresh Mushroom Delivery Alert!\n\nFresh organic mushrooms are harvested at dawn and delivered EXCLUSIVELY to Mysore and Mandya only to preserve 100% same-day freshness. We do NOT accept fresh mushroom orders for other cities/districts.\n\n(Note: Mushroom Spawn and Pellets ARE delivered statewide across all 31 Karnataka districts!).\n\nPlease select Mysore or Mandya as your delivery location, or remove fresh mushrooms from your cart to proceed with Spawn/Pellets.";
      alert(msg);
      if (cityInput) cityInput.focus();
      return null;
    }
    let slip = "";

    if (isKn) {
      slip = `*ಆರ್ಗ್ಯಾನಿಕ್ ಅಣಬೆ - ಹೊಸ ಆರ್ಡರ್* 🍄\n` +
             `--------------------------------\n` +
             `*ಗ್ರಾಹಕರ ಹೆಸರು:* ${name}\n` +
             `*ಮೊಬೈಲ್ ಸಂಖ್ಯೆ:* ${phone || 'ಲಭ್ಯವಿಲ್ಲ'}\n` +
             `*ಡೆಲಿವರಿ ವಿಳಾಸ:* ${address}\n` +
             `*ಊರು / ಪಿನ್‌ಕೋಡ್:* ${city || 'ಕರ್ನಾಟಕ'}\n` +
             (notes ? `*ಸೂಚನೆ/ಲ್ಯಾಂಡ್‌ಮಾರ್ಕ್:* ${notes}\n` : '') +
             `--------------------------------\n` +
             `*ಆರ್ಡರ್ ಮಾಡಿದ ಅಣಬೆಗಳು:*\n${itemsText}` +
             `--------------------------------\n` +
             `*ಒಟ್ಟು ಪಾವತಿಸಬೇಕಾದ ಮೊತ್ತ:* ₹${grandTotal}\n` +
             `*ಪಾವತಿ ವಿಧಾನ:* ಡೆಲಿವರಿ ಬಂದಾಗ ನಗದು / UPI (PhonePe/GPay)\n` +
             `--------------------------------\n` +
             `ದಯವಿಟ್ಟು ಆರ್ಡರ್ ದೃಢೀಕರಿಸಿ ಮತ್ತು ಡೆಲಿವರಿ ಸಮಯವನ್ನು ತಿಳಿಸಿ. ಧನ್ಯವಾದಗಳು!`;
    } else {
      slip = `*Organic Anabe - Fresh Mushroom Order* 🍄\n` +
             `--------------------------------\n` +
             `*Customer Name:* ${name}\n` +
             `*Phone Number:* ${phone || 'Not provided'}\n` +
             `*Delivery Address:* ${address}\n` +
             `*City / Pincode:* ${city || 'Karnataka'}\n` +
             (notes ? `*Landmark / Notes:* ${notes}\n` : '') +
             `--------------------------------\n` +
             `*Items Ordered:*\n${itemsText}` +
             `--------------------------------\n` +
             `*TOTAL PAYABLE AMOUNT:* ₹${grandTotal}\n` +
             `*Payment:* Cash on Delivery / UPI on Delivery\n` +
             `--------------------------------\n` +
             `Please confirm my order and share estimated delivery time. Thank you!`;
    }

    return slip;
  }

  // Handle Checkout Click - DIRECTLY TO WHATSAPP
  if (btnCartCheckout) {
    btnCartCheckout.addEventListener('click', () => {
      const slip = compileOrderSlip();
      if (!slip) return;
      sendDirectWhatsApp(slip, "919591185530");
    });
  }



  // -------------------------------------------------------------
  // 5B. Interactive Mushroom Spawn Bulk Calculator Logic (₹130/KG, Min 10 KG)
  // -------------------------------------------------------------
  const spawnPresetChips = document.querySelectorAll('.spawn-chip-btn');
  const spawnQtyInput = document.getElementById('spawn-qty-input');
  const spawnDistSelect = document.getElementById('spawn-district-select');
  const spawnVarietySelect = document.getElementById('spawn-variety-select');
  const calcSpawnOutQty = document.getElementById('calc-spawn-out-qty');
  const calcSpawnOutBags = document.getElementById('calc-spawn-out-bags');
  const calcSpawnOutRate = document.getElementById('calc-spawn-out-rate');
  const calcSpawnOutTotal = document.getElementById('calc-spawn-out-total');
  const calcSpawnOutSubstrate = document.getElementById('calc-spawn-out-substrate');
  const calcSpawnOutYield = document.getElementById('calc-spawn-out-yield');
  const calcSpawnOutDist = document.getElementById('calc-spawn-out-dist');
  const btnSpawnWaCalc = document.getElementById('btn-spawn-wa-calc');

  function calculateSpawnSpecs() {
    let qty = 10;
    if (spawnQtyInput) {
      qty = parseInt(spawnQtyInput.value, 10);
      if (isNaN(qty) || qty < 10) qty = 10;
    }

    const rate = 130;
    const totalAmount = qty * rate;
    const bags = qty; // standard 1 KG autoclave filter bags
    const estSubstrate = qty * 10; // 1 kg spawn inoculates ~10 kg dry substrate
    const estYieldMin = qty * 10;
    const estYieldMax = Math.round(qty * 14);
    const district = spawnDistSelect ? spawnDistSelect.value : "Mysuru";

    if (calcSpawnOutQty) calcSpawnOutQty.textContent = `${qty} KG`;
    if (calcSpawnOutBags) calcSpawnOutBags.textContent = `${bags} x 1 KG Sterile Filter Bags`;
    if (calcSpawnOutRate) calcSpawnOutRate.textContent = `₹${rate} / KG`;
    if (calcSpawnOutTotal) calcSpawnOutTotal.textContent = `₹${totalAmount.toLocaleString('en-IN')}`;
    if (calcSpawnOutSubstrate) calcSpawnOutSubstrate.textContent = `~${estSubstrate} KG Straw / Pellets`;
    if (calcSpawnOutYield) calcSpawnOutYield.textContent = `~${estYieldMin} – ${estYieldMax} KG Fresh`;
    if (calcSpawnOutDist) calcSpawnOutDist.textContent = `${district}, Karnataka`;
  }

  if (spawnPresetChips.length > 0) {
    spawnPresetChips.forEach((chip) => {
      chip.addEventListener('click', () => {
        spawnPresetChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const chipQty = chip.getAttribute('data-qty');
        if (spawnQtyInput && chipQty) {
          spawnQtyInput.value = chipQty;
          calculateSpawnSpecs();
        }
      });
    });
  }

  if (spawnQtyInput) {
    spawnQtyInput.addEventListener('input', () => {
      const currentVal = spawnQtyInput.value;
      spawnPresetChips.forEach(chip => {
        if (chip.getAttribute('data-qty') === currentVal) {
          chip.classList.add('active');
        } else {
          chip.classList.remove('active');
        }
      });
      calculateSpawnSpecs();
    });
  }

  if (spawnDistSelect) {
    spawnDistSelect.addEventListener('change', calculateSpawnSpecs);
  }
  if (spawnVarietySelect) {
    spawnVarietySelect.addEventListener('change', calculateSpawnSpecs);
  }

  if (btnSpawnWaCalc) {
    btnSpawnWaCalc.addEventListener('click', (e) => {
      e.preventDefault();
      let qty = 10;
      if (spawnQtyInput) {
        qty = parseInt(spawnQtyInput.value, 10);
        if (isNaN(qty) || qty < 10) qty = 10;
      }
      const rate = 130;
      const totalAmount = qty * rate;
      const district = spawnDistSelect ? spawnDistSelect.value : "Mysuru";
      const variety = spawnVarietySelect ? spawnVarietySelect.value : "Oyster Mushroom Spawn";
      const estYieldMin = qty * 10;
      const estYieldMax = Math.round(qty * 14);

      const msg = `*Order / Inquiry: Mushroom Spawn (₹130/KG - Min 10 KG)*\n` +
                  `-----------------------------------------------------\n` +
                  `• *Spawn Variety:* ${variety}\n` +
                  `• *Quantity:* ${qty} KG (${qty} x 1 KG Sterile Autoclave Bags)\n` +
                  `• *Price per KG:* ₹130 / KG\n` +
                  `• *Total Estimated Amount:* ₹${totalAmount.toLocaleString('en-IN')}\n` +
                  `• *Destination District:* ${district}, Karnataka\n` +
                  `• *Spawn Quality:* 1st Generation Laboratory Grain Culture (100% Contamination Free)\n` +
                  `• *Est. Mushroom Yield:* ~${estYieldMin} – ${estYieldMax} KG Fresh\n` +
                  `-----------------------------------------------------\n` +
                  `Hello Organic Anabe! I would like to order ${qty} KG ${variety} to be delivered to ${district}. Please share dispatch time and payment details. Thank you!`;

      sendDirectWhatsApp(msg, "919591185530");
    });
  }

  // Initial spawn calculation
  calculateSpawnSpecs();

  // -------------------------------------------------------------
  // 6. Interactive Karnataka All Types Pellets Bulk Calculator Logic
  // -------------------------------------------------------------
  const pelletPresetChips = document.querySelectorAll('.pellet-chip-btn');
  const pelletQtyInput = document.getElementById('pellet-qty-input');
  const pelletDistSelect = document.getElementById('pellet-district-select');
  const pelletVarietySelect = document.getElementById('pellet-variety-select');
  const calcOutQty = document.getElementById('calc-out-qty');
  const calcOutBags = document.getElementById('calc-out-bags');
  const calcOutYield = document.getElementById('calc-out-yield');
  const calcOutDist = document.getElementById('calc-out-dist');
  const btnPelletWaCalc = document.getElementById('btn-pellet-wa-calc');

  function calculatePelletSpecs() {
    let qty = 30;
    if (pelletQtyInput) {
      qty = parseInt(pelletQtyInput.value, 10);
      if (isNaN(qty) || qty < 30) qty = 30;
    }

    const bags = Math.ceil(qty / 30);
    const minYield = Math.round(qty * 1.5);
    const maxYield = Math.round(qty * 2.0);
    const district = pelletDistSelect ? pelletDistSelect.value : "Mysuru";

    if (calcOutQty) calcOutQty.textContent = `${qty} KG`;
    if (calcOutBags) {
      if (qty >= 1000) {
        const tonnes = (qty / 1000).toFixed(1);
        calcOutBags.textContent = `${tonnes} Tonnes (${bags} x 30 KG Sacks)`;
      } else {
        calcOutBags.textContent = `${bags} x 30 KG Heavy Sack${bags > 1 ? 's' : ''}`;
      }
    }
    if (calcOutYield) calcOutYield.textContent = `~${minYield} – ${maxYield} KG Fresh`;
    if (calcOutDist) calcOutDist.textContent = `${district}, Karnataka`;
  }

  if (pelletPresetChips.length > 0) {
    pelletPresetChips.forEach((chip) => {
      chip.addEventListener('click', () => {
        pelletPresetChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const chipQty = chip.getAttribute('data-qty');
        if (pelletQtyInput && chipQty) {
          pelletQtyInput.value = chipQty;
          calculatePelletSpecs();
        }
      });
    });
  }

  if (pelletQtyInput) {
    pelletQtyInput.addEventListener('input', () => {
      const currentVal = pelletQtyInput.value;
      let matched = false;
      pelletPresetChips.forEach(chip => {
        if (chip.getAttribute('data-qty') === currentVal) {
          chip.classList.add('active');
          matched = true;
        } else {
          chip.classList.remove('active');
        }
      });
      calculatePelletSpecs();
    });
  }

  if (pelletDistSelect) {
    pelletDistSelect.addEventListener('change', calculatePelletSpecs);
  }

  if (btnPelletWaCalc) {
    btnPelletWaCalc.addEventListener('click', (e) => {
      e.preventDefault();
      let qty = 30;
      if (pelletQtyInput) {
        qty = parseInt(pelletQtyInput.value, 10);
        if (isNaN(qty) || qty < 30) qty = 30;
      }
      const bags = Math.ceil(qty / 30);
      const district = pelletDistSelect ? pelletDistSelect.value : "Mysuru";
      const variety = pelletVarietySelect ? pelletVarietySelect.value : "Mushroom Cultivation";
      const minYield = Math.round(qty * 1.5);
      const maxYield = Math.round(qty * 2.0);

      const msg = `*Inquiry: Mushroom Hardwood Pellets (Karnataka Wholesale)*\n` +
                  `-----------------------------------------------------\n` +
                  `• *Order Volume:* ${qty} KG (${bags} x 30 KG Bags)\n` +
                  `• *Destination District:* ${district}, Karnataka\n` +
                  `• *Intended Variety/Use:* ${variety}\n` +
                  `• *Substrate Quality:* 100% Pure Broadleaf Hardwood (0% Chemicals)\n` +
                  `• *Est. Mushroom Yield:* ~${minYield} – ${maxYield} KG Fresh\n` +
                  `-----------------------------------------------------\n` +
                  `Hello! Please share the price per KG/sack and transport dispatch options to ${district}. Thank you!`;

      sendDirectWhatsApp(msg, "919591185530");
    });
  }

  // -------------------------------------------------------------
  // 8. Mobile Navigation Drawer
  // -------------------------------------------------------------
  function openMobileDrawer() {
    if (mobileDrawerOverlay) mobileDrawerOverlay.classList.add('open');
    if (mobileDrawer) mobileDrawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileDrawer() {
    if (mobileDrawerOverlay) mobileDrawerOverlay.classList.remove('open');
    if (mobileDrawer) mobileDrawer.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileDrawer);
  if (mobileDrawerClose) mobileDrawerClose.addEventListener('click', closeMobileDrawer);
  if (mobileDrawerOverlay) mobileDrawerOverlay.addEventListener('click', closeMobileDrawer);

  document.querySelectorAll('.mobile-nav-link').forEach((link) => {
    link.addEventListener('click', closeMobileDrawer);
  });

  // -------------------------------------------------------------
  // 9. Initial Load Setup
  // -------------------------------------------------------------
  updateLanguage(currentLang);
  renderCart();
});

// Recipe Accordion helper function
window.toggleRecipeAccordion = function(accordionId, btnEl) {
  const content = document.getElementById(accordionId);
  if (!content) return;
  const isExpanded = btnEl.getAttribute('aria-expanded') === 'true';
  btnEl.setAttribute('aria-expanded', !isExpanded);
  content.classList.toggle('open');
};
