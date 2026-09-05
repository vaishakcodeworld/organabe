/**
 * ORGANIC ANABE (ಆರ್ಗ್ಯಾನಿಕ್ ಅಣಬೆ)
 * Interactive Application Controller
 * Bilingual Engine, WhatsApp Order Generator & Recipe Modals
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Language State
  let currentLang = localStorage.getItem('anabe_lang') || 'en';
  let currentSpecimen = 'both';
  let orderQuantity = 1;
  const unitPrice = 79;

  // Language Switch Elements
  const langEnBtn = document.getElementById('lang-en-btn');
  const langKnBtn = document.getElementById('lang-kn-btn');

  // Quantity Elements
  const qtyCountEl = document.getElementById('qty-count');
  const qtyMinusBtn = document.getElementById('qty-minus');
  const qtyPlusBtn = document.getElementById('qty-plus');
  const waHeroOrderBtn = document.getElementById('wa-order-hero');
  const waNavOrderBtn = document.getElementById('wa-order-nav');

  // Specimen Elements
  const specimenBothBtn = document.getElementById('specimen-both-btn');
  const specimenOysterBtn = document.getElementById('specimen-oyster-btn');
  const specimenMilkyBtn = document.getElementById('specimen-milky-btn');
  const specimenTitleEl = document.getElementById('specimen-title');
  const specimenSubEl = document.getElementById('specimen-sub');

  // Recipe Modal Elements
  const recipeModal = document.getElementById('recipe-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalIngredientsList = document.getElementById('modal-ingredients-list');
  const modalInstructionsList = document.getElementById('modal-instructions-list');
  const modalIngredientsHeader = document.getElementById('modal-ingredients-header');
  const modalInstructionsHeader = document.getElementById('modal-instructions-header');

  // Mobile Menu
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  // Function to Update Language
  function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('anabe_lang', lang);
    document.body.setAttribute('data-lang', lang);
    document.documentElement.lang = lang;

    // Toggle active classes on buttons
    if (lang === 'kn') {
      langKnBtn.classList.add('active');
      langEnBtn.classList.remove('active');
      document.title = "ಆರ್ಗ್ಯಾನಿಕ್ ಅಣಬೆ (Organic Anabe) | ತಾಜಾ ಸಾವಯವ ಅಣಬೆಗಳು";
    } else {
      langEnBtn.classList.add('active');
      langKnBtn.classList.remove('active');
      document.title = "Organic Anabe (ಆರ್ಗ್ಯಾನಿಕ್ ಅಣಬೆ) | Fresh Gourmet Mushrooms";
    }

    // Translate all elements with data-i18n
    const dict = translations[lang] || translations.en;
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // Update Specimen Caption
    updateSpecimenCaption();

    // Update WhatsApp Order links
    updateWhatsAppLink();
  }

  // Update Specimen Caption
  function updateSpecimenCaption() {
    const dict = translations[currentLang] || translations.en;
    if (currentSpecimen === 'oyster') {
      if (specimenTitleEl) specimenTitleEl.textContent = dict.caption_oyster;
      if (specimenSubEl) specimenSubEl.textContent = dict.caption_sub_oyster;
    } else if (currentSpecimen === 'milky') {
      if (specimenTitleEl) specimenTitleEl.textContent = dict.caption_milky;
      if (specimenSubEl) specimenSubEl.textContent = dict.caption_sub_milky;
    } else {
      if (specimenTitleEl) specimenTitleEl.textContent = dict.caption_both;
      if (specimenSubEl) specimenSubEl.textContent = dict.caption_sub_both;
    }
  }

  // Language Event Listeners
  if (langEnBtn) langEnBtn.addEventListener('click', () => updateLanguage('en'));
  if (langKnBtn) langKnBtn.addEventListener('click', () => updateLanguage('kn'));

  // 2. Quantity Counter & WhatsApp Pre-fill
  function updateWhatsAppLink(packType = "Mixed / Assorted Fresh Packs") {
    const dict = translations[currentLang] || translations.en;
    const totalAmount = orderQuantity * unitPrice;
    
    let message = "";
    if (currentLang === 'kn') {
      message = `${dict.wa_msg_prefix}\n\n• ${orderQuantity} ${dict.wa_msg_pack} (${packType})\n• ಒಟ್ಟು ಮೊತ್ತ: ₹${totalAmount}\n\n${dict.wa_msg_suffix}`;
    } else {
      message = `${dict.wa_msg_prefix}\n\n• ${orderQuantity} ${dict.wa_msg_pack} (${packType})\n• Total Value: ₹${totalAmount}\n\n${dict.wa_msg_suffix}`;
    }

    const encodedMsg = encodeURIComponent(message);
    const waUrl = `https://wa.me/919663152977?text=${encodedMsg}`;

    if (waHeroOrderBtn) waHeroOrderBtn.href = waUrl;
    if (waNavOrderBtn) waNavOrderBtn.href = waUrl;

    // Update product card buttons
    const oysterOrderBtn = document.getElementById('order-oyster-card-btn');
    if (oysterOrderBtn) {
      const oysterMsg = currentLang === 'kn' 
        ? encodeURIComponent(`${dict.wa_msg_prefix}\n\n• 1 ಪ್ಯಾಕ್ ಸಿಂಪಿ ಅಣಬೆ (Oyster 200g @ ₹79)\n\n${dict.wa_msg_suffix}`)
        : encodeURIComponent(`${dict.wa_msg_prefix}\n\n• 1 Pack of Fresh Oyster Mushrooms (200g @ ₹79)\n\n${dict.wa_msg_suffix}`);
      oysterOrderBtn.href = `https://wa.me/919663152977?text=${oysterMsg}`;
    }

    const milkyOrderBtn = document.getElementById('order-milky-card-btn');
    if (milkyOrderBtn) {
      const milkyMsg = currentLang === 'kn' 
        ? encodeURIComponent(`${dict.wa_msg_prefix}\n\n• 1 ಪ್ಯಾಕ್ ಹಾಲು ಅಣಬೆ (Milky 200g @ ₹79)\n\n${dict.wa_msg_suffix}`)
        : encodeURIComponent(`${dict.wa_msg_prefix}\n\n• 1 Pack of Fresh Milky Mushrooms (200g @ ₹79)\n\n${dict.wa_msg_suffix}`);
      milkyOrderBtn.href = `https://wa.me/919663152977?text=${milkyMsg}`;
    }
  }

  if (qtyMinusBtn && qtyPlusBtn && qtyCountEl) {
    qtyMinusBtn.addEventListener('click', () => {
      if (orderQuantity > 1) {
        orderQuantity--;
        qtyCountEl.textContent = orderQuantity;
        updateWhatsAppLink();
      }
    });

    qtyPlusBtn.addEventListener('click', () => {
      orderQuantity++;
      qtyCountEl.textContent = orderQuantity;
      updateWhatsAppLink();
    });
  }

  // 3. Specimen Switchers
  function setSpecimenMode(mode) {
    currentSpecimen = mode;
    [specimenBothBtn, specimenOysterBtn, specimenMilkyBtn].forEach((btn) => {
      if (btn) btn.classList.remove('active');
    });

    if (mode === 'both' && specimenBothBtn) specimenBothBtn.classList.add('active');
    if (mode === 'oyster' && specimenOysterBtn) specimenOysterBtn.classList.add('active');
    if (mode === 'milky' && specimenMilkyBtn) specimenMilkyBtn.classList.add('active');

    if (typeof window.focusMushroomSpecimen === 'function') {
      window.focusMushroomSpecimen(mode);
    }
    updateSpecimenCaption();
  }

  if (specimenBothBtn) specimenBothBtn.addEventListener('click', () => setSpecimenMode('both'));
  if (specimenOysterBtn) specimenOysterBtn.addEventListener('click', () => setSpecimenMode('oyster'));
  if (specimenMilkyBtn) specimenMilkyBtn.addEventListener('click', () => setSpecimenMode('milky'));

  // 4. Recipe Tab Filtering
  const recipeTabBtns = document.querySelectorAll('.recipe-tab-btn');
  const recipeCards = document.querySelectorAll('.recipe-card');

  recipeTabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      recipeTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');

      recipeCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || filter === category) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 5. Recipe Modal Controller
  window.openRecipeModal = function(recipeKey) {
    const data = recipeDetails[recipeKey];
    if (!data || !recipeModal) return;

    modalImg.src = data.img;
    modalTitle.textContent = currentLang === 'kn' ? data.title_kn : data.title_en;

    modalIngredientsHeader.textContent = currentLang === 'kn' ? "ಅಗತ್ಯವಿರುವ ಸಾಮಗ್ರಿಗಳು:" : "Ingredients Needed:";
    modalInstructionsHeader.textContent = currentLang === 'kn' ? "ಮಾಡುವ ಸರಳ ವಿಧಾನ:" : "Cooking Instructions:";

    const ingList = currentLang === 'kn' ? data.ingredients_kn : data.ingredients_en;
    modalIngredientsList.innerHTML = ingList.map(item => `<li>✦ ${item}</li>`).join('');

    const stepList = currentLang === 'kn' ? data.instructions_kn : data.instructions_en;
    modalInstructionsList.innerHTML = stepList.map((step, idx) => `<li><strong>${idx + 1}.</strong> ${step}</li>`).join('');

    recipeModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => {
      recipeModal.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  if (recipeModal) {
    recipeModal.addEventListener('click', (e) => {
      if (e.target === recipeModal) {
        recipeModal.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  // 6. Mobile Drawer Controller
  const mobileDrawerOverlay = document.getElementById('mobile-drawer-overlay');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileDrawerClose = document.getElementById('mobile-drawer-close');

  function openDrawer() {
    if (mobileDrawerOverlay) mobileDrawerOverlay.classList.add('open');
    if (mobileDrawer) mobileDrawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (mobileDrawerOverlay) mobileDrawerOverlay.classList.remove('open');
    if (mobileDrawer) mobileDrawer.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', openDrawer);
  }
  if (mobileDrawerClose) {
    mobileDrawerClose.addEventListener('click', closeDrawer);
  }
  if (mobileDrawerOverlay) {
    mobileDrawerOverlay.addEventListener('click', closeDrawer);
  }
  if (mobileDrawer) {
    mobileDrawer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeDrawer);
    });
  }

  // 7. Toggle in-card Step Accordion for Index Recipes
  window.toggleRecipeAccordion = function(contentId, btn) {
    const content = document.getElementById(contentId);
    if (!content) return;
    const isOpen = content.classList.contains('open');
    if (isOpen) {
      content.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    } else {
      content.classList.add('open');
      btn.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  };

  // Initialize Language and Links
  updateLanguage(currentLang);
});
