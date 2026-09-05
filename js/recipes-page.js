/**
 * ORGANIC ANABE (ಆರ್ಗ್ಯಾನಿಕ್ ಅಣಬೆ)
 * Recipes Vault Page Controller
 * Handles 80 curated recipes (40 Oyster + 40 Milky, including 16 Kebabs)
 * Progressive loading (PAGE_SIZE = 16) for high mobile/desktop performance
 * Bilingual English & Kannada live filtering, search & modal viewer
 */

document.addEventListener('DOMContentLoaded', () => {
  let currentLang = localStorage.getItem('anabe_lang') || 'en';
  let activeType = 'all';
  let activeCategory = 'all';
  let searchQuery = '';
  
  const PAGE_SIZE = 16;
  let visibleCount = PAGE_SIZE;

  const recipesGrid = document.getElementById('recipes-grid');
  const searchInput = document.getElementById('recipe-search-input');
  const langEnBtn = document.getElementById('lang-en-btn');
  const langKnBtn = document.getElementById('lang-kn-btn');

  // Pagination / Load More Elements
  const paginationControls = document.getElementById('pagination-controls');
  const btnLoadMore = document.getElementById('btn-load-more');
  const loadMoreText = document.getElementById('load-more-text');
  const currentShownCount = document.getElementById('current-shown-count');
  const totalFilteredCount = document.getElementById('total-filtered-count');
  const recipeCountIndicator = document.getElementById('recipe-count-indicator');

  // Type Tabs & Category Chips
  const typeTabs = document.querySelectorAll('[data-type]');
  const categoryChips = document.querySelectorAll('[data-category]');

  // Modal Elements
  const recipeModal = document.getElementById('recipe-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalImg = document.getElementById('modal-img');
  const modalTag = document.getElementById('modal-tag');
  const modalMeta = document.getElementById('modal-meta');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalIngredientsHeader = document.getElementById('modal-ingredients-header');
  const modalInstructionsHeader = document.getElementById('modal-instructions-header');
  const modalIngredientsList = document.getElementById('modal-ingredients-list');
  const modalInstructionsList = document.getElementById('modal-instructions-list');
  const modalTipBox = document.getElementById('modal-tip-box');
  const modalTip = document.getElementById('modal-tip');
  const modalWaBtn = document.getElementById('modal-wa-btn');
  const modalWaBtnText = document.getElementById('modal-wa-btn-text');

  // Page Header Text Elements for Bilingual Toggle
  const tickerHeading = document.getElementById('ticker-heading');
  const backHomeText = document.getElementById('back-home-text');
  const vaultBadge = document.getElementById('vault-badge');
  const vaultTitle = document.getElementById('vault-title');
  const vaultSubtitle = document.getElementById('vault-subtitle');
  const tabTypeAll = document.getElementById('tab-type-all');
  const tabTypeOyster = document.getElementById('tab-type-oyster');
  const tabTypeMilky = document.getElementById('tab-type-milky');

  const chipAll = document.getElementById('chip-cat-all');
  const chipCoastal = document.getElementById('chip-cat-coastal');
  const chipCurry = document.getElementById('chip-cat-curry');
  const chipDry = document.getElementById('chip-cat-dry');
  const chipRice = document.getElementById('chip-cat-rice');
  const chipContinental = document.getElementById('chip-cat-continental');
  const chipSoup = document.getElementById('chip-cat-soup');
  const chipSnack = document.getElementById('chip-cat-snack');
  const chipKebab = document.getElementById('chip-cat-kebab');

  function updatePageTexts() {
    document.body.setAttribute('data-lang', currentLang);
    document.documentElement.lang = currentLang;

    if (currentLang === 'kn') {
      if (langKnBtn) langKnBtn.classList.add('active');
      if (langEnBtn) langEnBtn.classList.remove('active');
      document.title = "80+ ಅದ್ಭುತ ಅಣಬೆ ಪಾಕವಿಧಾನಗಳು | ಆರ್ಗ್ಯಾನಿಕ್ ಅಣಬೆ (Organic Anabe)";

      if (tickerHeading) tickerHeading.textContent = "80 ವಿಶೇಷ ನೈಸರ್ಗಿಕ ಅಡುಗೆ ಪಾಕವಿಧಾನಗಳು • 40 ಸಿಂಪಿ, 40 ಹಾಲು & 16 ಕಬಾಬ್ ತಳಿಗಳು";
      if (backHomeText) backHomeText.textContent = "ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ";
      if (vaultBadge) vaultBadge.textContent = "ಸಮಗ್ರ ಪಾಕವಿಧಾನ ಸಂಗ್ರಹ";
      if (vaultTitle) vaultTitle.textContent = "ಆರ್ಗ್ಯಾನಿಕ್ ಅಣಬೆ ಪಾಕಶಾಸ್ತ್ರ ಭಂಡಾರ";
      if (vaultSubtitle) vaultSubtitle.textContent = "ತಾಜಾ ಸಿಂಪಿ (40) ಮತ್ತು ಹಾಲು ಅಣಬೆ (40) ಹಾಗೂ ತಂದೂರಿ ಕಬಾಬ್‌ಗಳೊಂದಿಗೆ ಮನೆಯಲ್ಲೇ ತಯಾರಿಸಬಹುದಾದ 80 ಗೌರ್ಮೆ ಪಾಕವಿಧಾನಗಳು";
      if (searchInput) searchInput.placeholder = "ಅಡುಗೆ ಅಥವಾ ಪದಾರ್ಥದ ಹೆಸರು ಹುಡುಕಿ... (ಉದಾ: ಕಬಾಬ್, ಸುಕ್ಕ, ಬಿರಿಯಾನಿ, ಪೆಪ್ಪರ್)";

      if (tabTypeAll) tabTypeAll.textContent = "ಎಲ್ಲಾ ಅಣಬೆಗಳು (80)";
      if (tabTypeOyster) tabTypeOyster.textContent = "ಸಿಂಪಿ ಅಣಬೆ (40)";
      if (tabTypeMilky) tabTypeMilky.textContent = "ಹಾಲು ಅಣಬೆ (40)";

      if (chipAll) chipAll.textContent = "ಎಲ್ಲಾ ವಿಧಗಳು (80)";
      if (chipCoastal) chipCoastal.textContent = "ಕರಾವಳಿ & ನಾಟಿ ಶೈಲಿ";
      if (chipCurry) chipCurry.textContent = "ಸಾಂಬಾರ್ & ಗ್ರೇವಿ";
      if (chipDry) chipDry.textContent = "ಫ್ರೈ & ತವಾ ರೋಸ್ಟ್";
      if (chipRice) chipRice.textContent = "ಬಿರಿಯಾನಿ & ಪಲಾವ್";
      if (chipContinental) chipContinental.textContent = "ಕಾಂಟಿನೆಂಟಲ್ & ಪಾಸ್ತಾ";
      if (chipSoup) chipSoup.textContent = "ಇಮ್ಯೂನಿಟಿ ಸೂಪ್ & ಕಷಾಯ";
      if (chipSnack) chipSnack.textContent = "ಸ್ನ್ಯಾಕ್ಸ್ & ಪಕೋಡ";
      if (chipKebab) chipKebab.textContent = "🔥 ಕಬಾಬ್ & ತಂದೂರ್ (16 ವಿಶೇಷಗಳು!)";
      if (loadMoreText) loadMoreText.textContent = "ಇನ್ನಷ್ಟು ಪಾಕವಿಧಾನಗಳನ್ನು ವೀಕ್ಷಿಸಿ";
    } else {
      if (langEnBtn) langEnBtn.classList.add('active');
      if (langKnBtn) langKnBtn.classList.remove('active');
      document.title = "Gourmet Mushroom Recipes (80+ Dishes) | Organic Anabe";

      if (tickerHeading) tickerHeading.textContent = "80 Curated Farm-to-Fork Gourmet Recipes • 40 Oyster, 40 Milky & 16 Charcoal Kebabs";
      if (backHomeText) backHomeText.textContent = "Back to Home";
      if (vaultBadge) vaultBadge.textContent = "Complete Culinary Collection";
      if (vaultTitle) vaultTitle.textContent = "The Organic Anabe Recipe Vault";
      if (vaultSubtitle) vaultSubtitle.textContent = "80 Artisanal Gourmet Recipes (40 Oyster + 40 Milky) Crafted for Healthy Living & Tandoori Feasts";
      if (searchInput) searchInput.placeholder = "Search recipes by name or ingredient... (e.g. Kebab, Sukka, Biryani, Pepper, Garlic)";

      if (tabTypeAll) tabTypeAll.textContent = "All Mushrooms (80)";
      if (tabTypeOyster) tabTypeOyster.textContent = "Oyster Mushroom (40)";
      if (tabTypeMilky) tabTypeMilky.textContent = "Milky Mushroom (40)";

      if (chipAll) chipAll.textContent = "All Courses (80)";
      if (chipCoastal) chipCoastal.textContent = "Coastal & Karnataka";
      if (chipCurry) chipCurry.textContent = "Curries & Gravies";
      if (chipDry) chipDry.textContent = "Dry Roasts & Tawa";
      if (chipRice) chipRice.textContent = "Rice & Biryanis";
      if (chipContinental) chipContinental.textContent = "Continental & Pasta";
      if (chipSoup) chipSoup.textContent = "Immunity Soups & Broths";
      if (chipSnack) chipSnack.textContent = "Snacks & Starters";
      if (chipKebab) chipKebab.textContent = "🔥 Kebabs & Tandoor (16 Specialties!)";
      if (loadMoreText) loadMoreText.textContent = "Load More Recipes";
    }
  }

  // Toggle in-card Step-by-Step Accordion
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

  // Filter and Render Cards (Stitch Luxury Botanical Design with Progressive Pagination)
  function renderRecipes(resetPagination = true) {
    updatePageTexts();

    if (resetPagination) {
      visibleCount = PAGE_SIZE;
    }

    const filtered = allRecipesData.filter((recipe) => {
      // Type filter
      if (activeType !== 'all' && recipe.type !== activeType) return false;

      // Category filter
      if (activeCategory !== 'all' && recipe.category !== activeCategory) return false;

      // Search filter
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const titleMatch = (recipe.title_en || '').toLowerCase().includes(q) || (recipe.title_kn || '').toLowerCase().includes(q);
        const descMatch = (recipe.desc_en || '').toLowerCase().includes(q) || (recipe.desc_kn || '').toLowerCase().includes(q);
        const tagMatch = (recipe.tag_en || '').toLowerCase().includes(q) || (recipe.tag_kn || '').toLowerCase().includes(q);
        const ingMatch = (recipe.ingredients_en || []).some(i => i.toLowerCase().includes(q)) ||
                         (recipe.ingredients_kn || []).some(i => i.toLowerCase().includes(q));
        return titleMatch || descMatch || tagMatch || ingMatch;
      }
      return true;
    });

    if (filtered.length === 0) {
      recipesGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
          <span class="material-symbols-outlined" style="font-size: 48px; color: var(--secondary);">search_off</span>
          <h3 style="font-family: var(--font-serif); font-size: 1.4rem; color: var(--primary); margin-top: 12px;">
            ${currentLang === 'kn' ? 'ಯಾವುದೇ ಅಡುಗೆ ಪತ್ತೆಯಾಗಲಿಲ್ಲ' : 'No Recipes Found'}
          </h3>
          <p style="font-size: 0.9rem; color: var(--text-muted); margin-top: 6px;">
            ${currentLang === 'kn' ? 'ದಯವಿಟ್ಟು ಬೇರೆ ಹೆಸರು ಅಥವಾ ವರ್ಗವನ್ನು ಪ್ರಯತ್ನಿಸಿ.' : 'Try adjusting your search terms or filter selection.'}
          </p>
        </div>
      `;
      if (paginationControls) paginationControls.style.display = 'none';
      return;
    }

    // Slice for progressive rendering
    const toRender = filtered.slice(0, visibleCount);

    // Update pagination controls & counters
    if (paginationControls) {
      if (filtered.length <= visibleCount) {
        paginationControls.style.display = 'none';
      } else {
        paginationControls.style.display = 'flex';
      }
    }

    if (currentShownCount) currentShownCount.textContent = toRender.length;
    if (totalFilteredCount) totalFilteredCount.textContent = filtered.length;

    if (recipeCountIndicator) {
      recipeCountIndicator.innerHTML = currentLang === 'kn'
        ? `ಒಟ್ಟು <strong style="color:var(--primary);">${filtered.length}</strong> ಅಡುಗೆಗಳಲ್ಲಿ <strong style="color:var(--primary);">${toRender.length}</strong> ಪ್ರದರ್ಶಿಸಲಾಗುತ್ತಿದೆ`
        : `Showing <strong style="color:var(--primary);">${toRender.length}</strong> of <strong style="color:var(--primary);">${filtered.length}</strong> recipes`;
    }

    recipesGrid.innerHTML = toRender.map((recipe) => {
      const title = currentLang === 'kn' ? recipe.title_kn : recipe.title_en;
      const titleEn = recipe.title_en;
      const titleKn = recipe.title_kn;
      const desc = currentLang === 'kn' ? recipe.desc_kn : recipe.desc_en;
      const tag = currentLang === 'kn' ? recipe.tag_kn : recipe.tag_en;
      const time = currentLang === 'kn' ? recipe.time_kn : recipe.time_en;
      const servings = currentLang === 'kn' ? recipe.servings_kn : recipe.servings_en;
      const btnMethodText = currentLang === 'kn' ? "ವಿವರ ವಿಧಾನ" : "Full Recipe";
      const btnWaText = currentLang === 'kn' ? "ಅಣಬೆ ಆರ್ಡರ್" : "Order Pack ₹79";
      const ingredientsLabel = currentLang === 'kn' ? "ಪ್ರಮುಖ ನೈಸರ್ಗಿಕ ಪದಾರ್ಥಗಳು" : "Key Botanical Ingredients";
      const prepLabel = currentLang === 'kn' ? "ಆರ್ಗ್ಯಾನಿಕ್ ವಿಧಾನ" : "Heritage Prep";
      const accordionBtnText = currentLang === 'kn' ? "ಹಂತ-ಹಂತದ ವಿಧಾನ ವೀಕ್ಷಿಸಿ" : "View Step-by-Step Technique";
      const healthCompound = currentLang === 'kn' ? "✦ ಎರ್ಗೋಥಿಯೋನಿನ್ & ನಾರಿನಂಶ" : "✦ Rich in Ergothioneine";

      // Pre-filled WhatsApp message for this specific recipe
      const waMsg = currentLang === 'kn'
        ? encodeURIComponent(`ನಮಸ್ಕಾರ ಆರ್ಗ್ಯಾನಿಕ್ ಅಣಬೆ! ನಾನು "${title}" ತಯಾರಿಸಲು 1 ಪ್ಯಾಕ್ (200 ಗ್ರಾಂ @ ₹79) ತಾಜಾ ಅಣಬೆ ಖರೀದಿಸಲು ಬಯಸುತ್ತೇನೆ. ದಯವಿಟ್ಟು ವಿತರಣೆಯ ವಿವರ ತಿಳಿಸಿ.`)
        : encodeURIComponent(`Hello Organic Anabe! I would like to order 1 pack of 200g Fresh Mushrooms (@ ₹79) to prepare "${titleEn}". Please confirm delivery.`);

      const ingredients = currentLang === 'kn' ? recipe.ingredients_kn : recipe.ingredients_en;
      const ingListItems = (ingredients || []).slice(0, 6).map(ing => `<li>${ing}</li>`).join('');

      const instructions = currentLang === 'kn' ? recipe.instructions_kn : recipe.instructions_en;
      const stepItems = (instructions || []).map((step, sIdx) => `
        <div class="stitch-step-item">
          <span class="stitch-step-num">${currentLang === 'kn' ? `ಹಂತ ${sIdx + 1}:` : `Step ${sIdx + 1}:`}</span>
          <span>${step}</span>
        </div>
      `).join('');

      const cardStepId = `stitch-steps-${recipe.id}`;

      return `
        <article class="recipe-card-stitch" data-id="${recipe.id}" data-category="${recipe.category}">
          <div class="stitch-img-wrap">
            <img src="${recipe.img}" alt="${titleEn}" loading="lazy" />
            <div class="stitch-badge-top">${tag}</div>
            <div class="stitch-time-pill">
              <span class="material-symbols-outlined" style="font-size: 14px; color: var(--secondary);">timer</span>
              <span>${time} • ${recipe.calories}</span>
            </div>
          </div>
          <div class="stitch-body">
            <div class="stitch-header-row">
              <div style="flex: 1;">
                <h3 class="stitch-title-en">${titleEn}</h3>
                <span class="stitch-title-kn">${titleKn}</span>
              </div>
              <div class="stitch-serves-pill">
                <span class="stitch-serves-label">${currentLang === 'kn' ? 'ಜನರಿಗೆ' : 'Serves'}</span>
                <span class="stitch-serves-val">${servings.replace(/ Servings| ಜನರಿಗೆ/g, '')}</span>
              </div>
            </div>
            <p class="stitch-desc">${desc}</p>
            
            <!-- Key Botanical Ingredients Box (Stitch Layout) -->
            <div class="stitch-botanical-box">
              <div class="stitch-botanical-top">
                <span style="display: flex; align-items: center; gap: 6px;">
                  <span class="material-symbols-outlined" style="font-size: 17px; color: var(--secondary);">menu_book</span>
                  ${ingredientsLabel}
                </span>
                <span class="stitch-botanical-badge">${prepLabel}</span>
              </div>
              <ul class="stitch-ing-grid">
                ${ingListItems}
              </ul>
              
              <!-- Step Accordion Trigger Inside Card -->
              <button type="button" class="stitch-step-toggle" onclick="toggleRecipeAccordion('${cardStepId}', this)" aria-expanded="false">
                <span>${accordionBtnText}</span>
                <span class="material-symbols-outlined stitch-step-chevron">expand_more</span>
              </button>
              <div class="stitch-steps-content" id="${cardStepId}">
                ${stepItems}
                ${recipe.tip_en ? `
                  <div style="background: rgba(197, 160, 89, 0.12); border-left: 3px solid var(--secondary); padding: 8px 10px; border-radius: 4px; font-size: 0.78rem; margin-top: 4px; color: var(--primary);">
                    <strong>✦ ${currentLang === 'kn' ? "ಶೆಫ್ ಸೂತ್ರ:" : "Chef Secret:"}</strong> ${currentLang === 'kn' ? recipe.tip_kn : recipe.tip_en}
                  </div>
                ` : ''}
              </div>
            </div>

            <!-- Footer Strip -->
            <div class="stitch-footer-strip">
              <div class="stitch-compound-badge">
                <span class="material-symbols-outlined" style="font-size: 16px; color: var(--secondary);">eco</span>
                <span>${healthCompound}</span>
              </div>
              <div class="stitch-actions-row">
                <button type="button" class="btn-stitch-modal" onclick="openRecipeModal('${recipe.id}')" title="View Full Method & Ingredients in Popup">
                  <span class="material-symbols-outlined" style="font-size: 16px;">open_in_new</span>
                  <span>${btnMethodText}</span>
                </button>
                <a href="https://wa.me/919663152977?text=${waMsg}" target="_blank" class="btn-stitch-wa">
                  <span class="material-symbols-outlined" style="font-size: 16px; color: var(--secondary-light);">chat</span>
                  <span>${btnWaText}</span>
                </a>
              </div>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  // Load More Button Event Listener
  if (btnLoadMore) {
    btnLoadMore.addEventListener('click', () => {
      visibleCount += PAGE_SIZE;
      renderRecipes(false);
    });
  }

  // Open Modal Function
  window.openRecipeModal = function(recipeId) {
    const recipe = allRecipesData.find(r => r.id === recipeId);
    if (!recipe || !recipeModal) return;

    modalImg.src = recipe.img;
    modalTag.textContent = currentLang === 'kn' ? recipe.tag_kn : recipe.tag_en;
    modalMeta.textContent = `⏱ ${currentLang === 'kn' ? recipe.time_kn : recipe.time_en} • ⚡ ${recipe.calories} • 🍽 ${currentLang === 'kn' ? recipe.servings_kn : recipe.servings_en}`;
    modalTitle.textContent = currentLang === 'kn' ? recipe.title_kn : recipe.title_en;
    modalDesc.textContent = currentLang === 'kn' ? recipe.desc_kn : recipe.desc_en;

    modalIngredientsHeader.textContent = currentLang === 'kn' ? "ಅಗತ್ಯವಿರುವ ಸಾಮಗ್ರಿಗಳು:" : "Ingredients Needed:";
    modalInstructionsHeader.textContent = currentLang === 'kn' ? "ಮಾಡುವ ಹಂತ-ಹಂತದ ಸರಳ ವಿಧಾನ:" : "Step-by-Step Cooking Method:";

    const ingList = currentLang === 'kn' ? recipe.ingredients_kn : recipe.ingredients_en;
    modalIngredientsList.innerHTML = (ingList || []).map(item => `<li>✦ ${item}</li>`).join('');

    const stepList = currentLang === 'kn' ? recipe.instructions_kn : recipe.instructions_en;
    modalInstructionsList.innerHTML = (stepList || []).map((step, idx) => `<li><strong>${idx + 1}.</strong> ${step}</li>`).join('');

    modalTip.textContent = currentLang === 'kn' ? recipe.tip_kn : recipe.tip_en;

    const modalTitleText = currentLang === 'kn' ? recipe.title_kn : recipe.title_en;
    const modalWaMsg = currentLang === 'kn'
      ? encodeURIComponent(`ನಮಸ್ಕಾರ ಆರ್ಗ್ಯಾನಿಕ್ ಅಣಬೆ! ನಾನು "${modalTitleText}" ಮಾಡಲು 200 ಗ್ರಾಂ ತಾಜಾ ಅಣಬೆ ಪ್ಯಾಕ್ ಆರ್ಡರ್ ಮಾಡಲು ಬಯಸುತ್ತೇನೆ.`)
      : encodeURIComponent(`Hello Organic Anabe! I would like to order fresh harvest mushrooms to cook "${modalTitleText}".`);
    modalWaBtn.href = `https://wa.me/919663152977?text=${modalWaMsg}`;
    modalWaBtnText.textContent = currentLang === 'kn' ? "ಈ ಅಡುಗೆಗೆ ತಾಜಾ ಅಣಬೆ ಖರೀದಿಸಿ" : "Order Fresh Mushrooms for this Recipe";

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

  // Event Listeners for Tabs
  typeTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      typeTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeType = tab.getAttribute('data-type');
      renderRecipes(true);
    });
  });

  // Event Listeners for Chips
  categoryChips.forEach((chip) => {
    chip.addEventListener('click', () => {
      categoryChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeCategory = chip.getAttribute('data-category');
      renderRecipes(true);
    });
  });

  // Event Listener for Search Input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderRecipes(true);
    });
  }

  // Language Switchers
  if (langEnBtn) {
    langEnBtn.addEventListener('click', () => {
      currentLang = 'en';
      localStorage.setItem('anabe_lang', 'en');
      renderRecipes(false);
    });
  }

  if (langKnBtn) {
    langKnBtn.addEventListener('click', () => {
      currentLang = 'kn';
      localStorage.setItem('anabe_lang', 'kn');
      renderRecipes(false);
    });
  }

  // Initial Render
  renderRecipes(true);
});
