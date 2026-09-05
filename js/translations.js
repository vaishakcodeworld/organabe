/**
 * ORGANIC ANABE (ಆರ್ಗ್ಯಾನಿಕ್ ಅಣಬೆ)
 * Bilingual Dictionary: English & Kannada (ಕನ್ನಡ)
 */

const translations = {
  en: {
    // Top Ticker
    ticker_text: "100% Farm Fresh Botanical Cultivation • No Chemicals",
    ticker_harvest: "Dawn Harvest (5:30 AM) • Active Ergothioneine & Beta-Glucans",
    ticker_phone: "Hotline: 9591185530",
    ticker_delivery: "Delivery Across Bangalore & Karnataka",

    // Navigation
    brand_name: "Organic Anabe",
    brand_sub: "Nature Purity In Every Bite",
    nav_home: "Home & 3D",
    nav_benefits: "Health Benefits",
    nav_products: "Mushrooms",
    nav_recipes: "Recipes (80+)",
    nav_contact: "Contact & Order",
    btn_order_nav: "Order Online",
    btn_price_nav: "₹79 / 200g",
    btn_explore_all_recipes: "Explore Complete Recipe Collection (80+ Dishes) →",
    vault_banner_title: "80+ Artisanal Farm Recipes Await You",
    vault_banner_desc: "From coastal sukkas and tandoori roasts to royal dum biryanis and healing immunity broths, explore our full library of 80 gourmet preparations (40 Oyster + 40 Milky).",

    // Hero Section & 3D Scrollytelling
    hero_badge: "Sacred Earth • 100% Organic & Chemical-Free",
    hero_title: "Nature’s Forest Gold: Freshly Harvested Gourmet Mushrooms",
    hero_subtitle: "Organic Anabe — Pure, Nutritious & Completely Natural",
    scroll_prompt: "Scroll to witness the living harvest ↓",
    scroll_btn_autoplay: "▶ Auto Play",
    scroll_btn_scrub: "❚❚ Scrub Mode",
    scroll_progress_label: "Harvest Progress",
    scroll_stage_1_badge: "Stage 1: Sacred Earth • 100% Organic Sprout",
    scroll_stage_1_title: "Nature’s Living Gold: Awakening From Sacred Earth",
    scroll_stage_1_desc: "Watch pure mycelium awaken from sterilized paddy straw, ragi husk & mountain spring mist. Zero chemicals or artificial boosters.",
    scroll_stage_2_badge: "Stage 2: Botanical Splendor • Oyster & Milky Bloom",
    scroll_stage_2_title: "Two Royal Cultivars Emerging in Synchrony",
    scroll_stage_2_oyster_title: "Oyster Mushroom (Pleurotus Ostreatus)",
    scroll_stage_2_oyster_desc: "Fan-shaped velvety fluted petals rich in Lovastatin, Ergothioneine & soluble dietary fiber.",
    scroll_stage_2_milky_title: "Milky Mushroom (Calocybe Indica)",
    scroll_stage_2_milky_desc: "Plump porcelain alabaster caps with dense plant protein and a firm, succulent culinary bite.",
    scroll_stage_3_badge: "Stage 3: Dawn Maturation • 5:30 AM Peak Potency",
    scroll_stage_3_title: "Pristine Organic Vitality at Peak Spore Release",
    scroll_stage_3_stat1: "Moisture: 88.4% • Density Grade A++",
    scroll_stage_3_stat2: "100% Residue & Chemical Free Substrate",
    scroll_stage_3_stat3: "Direct Farm Supply Across Karnataka",
    scroll_stage_4_badge: "Stage 4: Hand-Picked Harvest • From Earth to Kitchen",
    scroll_stage_4_title: "Gently Hand-Picked at Dawn for Your Family Table",
    scroll_stage_4_desc: "Direct farm-gate supply delivered within hours. Sealed in sterile 200g punnet packs for gourmet cooking.",

    // Hero Specs Left
    spec_dawn_title: "Dawn Harvest",
    spec_dawn_desc: "Hand-picked at peak spore release every morning. Sealed packaging preserves pristine crispness.",
    spec_dawn_pill: "Moisture: 88.4% • Density: Grade A++",

    spec_substrate_title: "Pure Substrate",
    spec_substrate_desc: "Sterilized paddy straw, ragi husk & mountain spring mist. Zero synthetic chemicals or boosters.",
    spec_substrate_pill: "100% Residue & Toxin Free",

    spec_delivery_title: "Fresh Express",
    spec_delivery_desc: "Direct farm-to-kitchen supply within 4 to 8 hours across Bengaluru, Tumakuru and nearby districts.",
    spec_delivery_pill: "Special Offer: ₹79 / 200g Pack",

    // 3D Controls
    btn_specimen_both: "Both Mushrooms",
    btn_specimen_oyster: "Oyster Specimen",
    btn_specimen_milky: "Milky Specimen",
    badge_3d_rotational: "3D Rotational Specimen",
    badge_3d_inspect: "Drag & Rotate to Inspect",
    caption_both: "Stylized Dual Cultivar Specimen: Oyster (Left) & Milky (Right)",
    caption_sub_both: "Interactive botanical models with floating spore ecology & organic moss base",
    caption_oyster: "Pleurotus Ostreatus (Oyster Botanical Specimen)",
    caption_sub_oyster: "Velvety fluted petals • Rich in lovastatin, ergothioneine & soluble fiber",
    caption_milky: "Calocybe Indica (Milky Botanical Specimen)",
    caption_sub_milky: "Plump alabaster caps • High protein density, firm bite & immune-potentiating polysaccharides",

    // Quick Order Card (Hero Right)
    order_card_tag: "Direct Farm Purchase",
    order_card_title: "Fresh Daily Harvest Pack",
    order_card_desc: "100% untouched sterile punnet pack. Ready for gourmet roasts, curries or immunity broths.",
    label_mrp: "Standard MRP",
    label_offer: "Offer Price",
    label_weight: "Net Weight: 200g",
    label_quantity: "Quantity:",
    btn_whatsapp_cta: "Instant WhatsApp Order",
    guarantee_text: "100% Farm Fresh Guarantee",
    lab_title: "Lab Tested & Certified",
    lab_desc: "Tested for zero heavy metals, zero synthetic residue, and pristine microbial cleanliness.",

    // Health Benefits Section
    benefits_badge: "Nutritional Authority • Verified Potency",
    benefits_title: "Health Benefits",
    benefits_ribbon: "Pure Nutrition • Better Health • Naturally",
    benefits_intro: "Revered in Ayurvedic traditions and validated by contemporary nutritional science, our unbleached farm-fresh mushrooms supply active bio-compounds for lifelong vitality.",

    benefit_1_title: "Rich in Protein & Fiber",
    benefit_1_desc: "Provides clean plant protein with complete amino acid profile to fuel lean muscle growth while high soluble fibers keep you satiated longer.",
    
    benefit_2_title: "Strong Antioxidants",
    benefit_2_desc: "Packed with Ergothioneine and Polyphenols that actively scavenge harmful free radicals, defending cellular DNA against premature oxidative stress.",

    benefit_3_title: "Supports Immune System",
    benefit_3_desc: "High concentration of active Beta-Glucans stimulates natural killer (NK) cells and macrophages, creating a resilient shield against seasonal infections.",

    benefit_4_title: "Natural Source of Vitamins",
    benefit_4_desc: "Nature's rare whole-food source of bioavailable Vitamin D, Vitamin B-complex (Riboflavin, Niacin, Folate) and essential trace minerals like Selenium & Potassium.",

    // Products Showcase
    products_badge: "Artisanal Cultivation",
    products_title: "Premium Quality Mushrooms",
    products_subtitle: "Carefully grown under climate-controlled pure mist chambers with zero artificial intervention.",

    oyster_name: "Oyster Mushroom",
    oyster_sci: "Pleurotus Ostreatus",
    oyster_desc: "Exquisite fan-shaped fluted petals with a tender, velvety texture and delicate earthy umami flavor. Cooks quickly; absorbs aromatic spices beautifully.",
    oyster_btn_add: "Order Oyster Pack",

    milky_name: "Milky Mushroom",
    milky_sci: "Calocybe Indica",
    milky_desc: "Stately porcelain-white mushroom with thick, succulent stems and firm meaty texture. Retains crisp bite in curries, biryanis, and tandoori roasts.",
    milky_btn_add: "Order Milky Pack",

    badge_fresh_seal: "100% Natural & Fresh",

    // Recipes Showcase
    recipes_badge: "Farm to Fork Cuisine",
    recipes_title: "Culinary Recipes Showcase",
    recipes_subtitle: "Unlock the gastronomic versatility of organic mushrooms with authentic regional and contemporary preparations.",
    tab_all: "All Recipes",
    tab_oyster: "Oyster Specials",
    tab_milky: "Milky Specials",

    recipe_1_title: "Coastal Oyster Mushroom Sukka",
    recipe_1_tag: "Oyster • Karnataka Coastal",
    recipe_1_desc: "Tender shredded oyster mushrooms dry-roasted in freshly ground byadgi chillies, roasted coconut, and fragrant curry leaves.",
    recipe_1_time: "20 Mins",
    recipe_1_cal: "165 kcal",

    recipe_2_title: "Pan-Seared Garlic Thyme Oyster",
    recipe_2_tag: "Oyster • Continental",
    recipe_2_desc: "Flash-seared in golden cold-pressed butter or olive oil with crushed malabar peppercorns, fresh green thyme, and toasted garlic cloves.",
    recipe_2_time: "12 Mins",
    recipe_2_cal: "140 kcal",

    recipe_3_title: "Royal Milky Mushroom Dum Biryani",
    recipe_3_tag: "Milky • Royal Feast",
    recipe_3_desc: "Layered saffron basmati rice and thick, juicy chunks of milky mushrooms slow-cooked in a clay pot with mint, caramelized onions, and spices.",
    recipe_3_time: "35 Mins",
    recipe_3_cal: "280 kcal",

    recipe_4_title: "Chettinad Milky Pepper Masala",
    recipe_4_tag: "Milky • South Indian",
    recipe_4_desc: "Plump milky mushroom wedges simmered in a dark, robust gravy infused with fresh stone-ground black pepper, fennel seeds, and shallots.",
    recipe_4_time: "25 Mins",
    recipe_4_cal: "190 kcal",

    btn_view_recipe: "View Recipe & Method",

    // Cultivation
    cultivation_badge: "Botanical Standards",
    cultivation_title: "Our Sustainable Cultivation Ritual",
    step1_title: "Paddy & Ragi Substrate",
    step1_desc: "Locally sourced, autoclaved sterilized agricultural husks provide the cleanest natural nutrition for mycelial colonization.",
    step2_title: "Pure Mountain Mist",
    step2_desc: "Filtered water misting maintains 85-90% humidity in shaded grow-rooms, replicating deep rainforest canopy conditions.",
    step3_title: "Harvest at First Light",
    step3_desc: "Hand-plucked before 6:00 AM while the mushroom caps are crisp and nutrient bioavailability is at its absolute peak.",

    // Footer & Contact
    footer_tagline: "Cultivated with reverence for natural purity. Bringing forest-grade vitality and gourmet nutrition directly to your table.",
    footer_contact_heading: "Contact & Helpline",
    footer_order_heading: "Order Online",
    footer_scan_note: "Scan QR code or click to order instantly on WhatsApp",
    thank_you_note: "THANK YOU FOR CHOOSING HEALTH & NATURE",
    copyright: "© 2026 Organic Anabe (ಆರ್ಗ್ಯಾನಿಕ್ ಅಣಬೆ). All Rights Reserved. organabe.in",
    
    // WhatsApp prefilled message
    wa_msg_prefix: "Hello Organic Anabe! I would like to place an order for:",
    wa_msg_pack: "pack(s) of 200g Fresh Harvest Mushrooms @ ₹79/pack.",
    wa_msg_suffix: "Please confirm delivery time and payment details. Thank you!"
  },

  kn: {
    // Top Ticker
    ticker_text: "100% ಸಾವಯವ ಕೃಷಿ • ಯಾವುದೇ ರಾಸಾಯನಿಕಗಳಿಲ್ಲ",
    ticker_harvest: "ಬೆಳಗಿನ ಜಾವದ ಕೊಯ್ಲು (5:30 AM) • ಗರಿಷ್ಠ ಪೋಷಕಾಂಶಗಳು ಮತ್ತು ನಾರಿನಂಶ",
    ticker_phone: "ಸಹಾಯವಾಣಿ: 9591185530",
    ticker_delivery: "ಬೆಂಗಳೂರು ಮತ್ತು ಕರ್ನಾಟಕದಾದ್ಯಂತ ಸರಬರಾಜು",

    // Navigation
    brand_name: "ಆರ್ಗ್ಯಾನಿಕ್ ಅಣಬೆ",
    brand_sub: "ಪ್ರತಿ ತುತ್ತಿನಲ್ಲೂ ನಿಸರ್ಗದ ಶುದ್ಧತೆ",
    nav_home: "ಮುಖಪುಟ & 3D",
    nav_benefits: "ಆರೋಗ್ಯ ಪ್ರಯೋಜನಗಳು",
    nav_products: "ಅಣಬೆ ತಳಿಗಳು",
    nav_recipes: "ಪಾಕವಿಧಾನಗಳು (80+)",
    nav_contact: "ಸಂಪರ್ಕ & ಖರೀದಿ",
    btn_order_nav: "ಈಗಲೇ ಖರೀದಿಸಿ",
    btn_price_nav: "₹79 / 200 ಗ್ರಾಂ",
    btn_explore_all_recipes: "ಸಮಗ್ರ 80+ ಪಾಕವಿಧಾನ ಸಂಗ್ರಹ ವೀಕ್ಷಿಸಿ →",
    vault_banner_title: "80+ ಅದ್ಭುತ ಅಣಬೆ ಪಾಕವಿಧಾನಗಳು ಲಭ್ಯವಿದೆ",
    vault_banner_desc: "ಕರಾವಳಿ ಸುಕ್ಕ, ತಂದೂರಿ ಕಬಾಬ್, ದಮ್ ಬಿರಿಯಾನಿ ಮತ್ತು ರೋಗನಿರೋಧಕ ಕಷಾಯಗಳವರೆಗೆ - ನಮ್ಮ 80 ವಿಶೇಷ ರೆಸಿಪಿಗಳ (40 ಸಿಂಪಿ + 40 ಹಾಲು) ಸಮಗ್ರ ಭಂಡಾರವನ್ನು ವೀಕ್ಷಿಸಿ.",

    // Hero Section & 3D Scrollytelling
    hero_badge: "ಪವಿತ್ರ ನಿಸರ್ಗ ಸತ್ವ • 100% ಸಂಪೂರ್ಣ ಸಾವಯವ",
    hero_title: "ನಿಸರ್ಗದ ವನಸಿರಿ: ಫಾರ್ಮ್‌ನಿಂದ ನೇರವಾಗಿ ನಿಮ್ಮ ಮನೆಗೆ ತಾಜಾ ಅಣಬೆಗಳು",
    hero_subtitle: "ಆರ್ಗ್ಯಾನಿಕ್ ಅಣಬೆ — ತಾಜಾ, ಪೌಷ್ಟಿಕ ಮತ್ತು ಸಂಪೂರ್ಣ ನೈಸರ್ಗಿಕ",
    scroll_prompt: "ಜೀವಂತ ಕೊಯ್ಲಿನ ವಿಸ್ಮಯ ನೋಡಲು ಕೆಳಗೆ ಸ್ಕ್ರೋಲ್ ಮಾಡಿ ↓",
    scroll_btn_autoplay: "▶ ಸ್ವಯಂಚಾಲಿತ",
    scroll_btn_scrub: "❚❚ ಸ್ಕ್ರೋಲ್ ಮಾಡಿ",
    scroll_progress_label: "ಬೆಳವಣಿಗೆಯ ಹಂತ",
    scroll_stage_1_badge: "ಹಂತ 1: ಪವಿತ್ರ ಮಣ್ಣು • 100% ಸಾವಯವ ಮೊಳಕೆ",
    scroll_stage_1_title: "ನಿಸರ್ಗದ ವನಸಿರಿ: ಪವಿತ್ರ ಮಣ್ಣಿನಿಂದ ಚಿಗುರೊಡೆಯುವ ಸಾವಯವ ಅಣಬೆಗಳು",
    scroll_stage_1_desc: "ಕ್ರಿಮಿನಾಶಕ ರಹಿತ ರಾಗಿ ಹೊಟ್ಟು, ಭತ್ತದ ಹುಲ್ಲು ಮತ್ತು ಪರ್ವತದ ತಂಪಾದ ನೀರಿನ ಹನಿಗಳಿಂದ ನೈಸರ್ಗಿಕವಾಗಿ ಚಿಗುರುವ ತಾಜಾ ಅಣಬೆಗಳು.",
    scroll_stage_2_badge: "ಹಂತ 2: ನೈಸರ್ಗಿಕ ವಿಕಸನ • ಸಿಂಪಿ ಮತ್ತು ಹಾಲು ಅಣಬೆ ತಳಿಗಳು",
    scroll_stage_2_title: "ಒಂದೇ ವಾತಾವರಣದಲ್ಲಿ ಜತೆಯಾಗಿ ಅರಳುವ ಎರಡು ರಾಜಮನೆತನದ ತಳಿಗಳು",
    scroll_stage_2_oyster_title: "ಸಿಂಪಿ ಅಣಬೆ (ಪ್ಲುರೊಟಸ್ ಆಸ್ಟ್ರಿಯೇಟಸ್)",
    scroll_stage_2_oyster_desc: "ಕೋಮಲ ದಳಗಳು • ಕೊಲೆಸ್ಟ್ರಾಲ್ ನಿಯಂತ್ರಣಕ್ಕೆ ಲೋವಸ್ಟಾಟಿನ್, ಎರ್ಗೋತಿಯೋನಿನ್ ಮತ್ತು ಕರಗುವ ನಾರಿನಂಶ ಸಮೃದ್ಧ.",
    scroll_stage_2_milky_title: "ಹಾಲು ಅಣಬೆ (ಕ್ಯಾಲೋಸೈಬ್ ಇಂಡಿಕಾ)",
    scroll_stage_2_milky_desc: "ದಪ್ಪನೆಯ ಬಿಳಿ ಕಾಂಡ • ಸಮೃದ್ಧ ಸಸಾರಜನಕ (ಪ್ರೋಟೀನ್), ನಾರಿನಂಶ ಮತ್ತು ಮಾಂಸಖಂಡದಂತಹ ಗಟ್ಟಿಯಾದ ರುಚಿ.",
    scroll_stage_3_badge: "ಹಂತ 3: ಮುಂಜಾನೆಯ ಪೂರ್ಣ ಬೆಳವಣಿಗೆ • 5:30 AM ಗರಿಷ್ಠ ಸತ್ವ",
    scroll_stage_3_title: "ಬೀಜಕಣಗಳು ಪೂರ್ಣಗೊಳ್ಳುವ ಹೊತ್ತಿಗೆ ಅತ್ಯುನ್ನತ ನೈಸರ್ಗಿಕ ಪೋಷಕಾಂಶಗಳು",
    scroll_stage_3_stat1: "ತೇವಾಂಶ: 88.4% • ಗರಿಷ್ಠ ಗುಣಮಟ್ಟ A++",
    scroll_stage_3_stat2: "100% ವಿಷಮುಕ್ತ & ಕೀಟನಾಶಕ ರಹಿತ ಕೃಷಿ ಮಾಧ್ಯಮ",
    scroll_stage_3_stat3: "ಕರ್ನಾಟಕದಾದ್ಯಂತ ನೇರ ಮನೆ ಬಾಗಿಲಿಗೆ ಸರಬರಾಜು",
    scroll_stage_4_badge: "ಹಂತ 4: ಪ್ರೀತಿಯಿಂದ ಕೈಯಿಂದ ಆಯ್ದ ತಾಜಾ ಕೊಯ್ಲು • ತೋಟದಿಂದ ನಿಮ್ಮ ಮನೆಗೆ",
    scroll_stage_4_title: "ಪ್ರತಿದಿನ ಮುಂಜಾನೆ ಪ್ರೀತಿಯಿಂದ ಕೊಯ್ಲು ಮಾಡಿದ ತಾಜಾ ಅಣಬೆಗಳು",
    scroll_stage_4_desc: "ಕೊಯ್ಲು ಮಾಡಿದ ಕೆಲವೇ ಗಂಟೆಗಳಲ್ಲಿ ನಿಮ್ಮ ಅಡುಗೆಮನೆಗೆ. 200 ಗ್ರಾಂ ಶುದ್ಧ ಪ್ಯಾನೆಟ್ ಪ್ಯಾಕ್‌ನಲ್ಲಿ ಗೌರ್ಮೆ ಅಡುಗೆಗೆ ಸಿದ್ಧ.",

    // Hero Specs Left
    spec_dawn_title: "ಬೆಳಗಿನ ತಾಜಾ ಕೊಯ್ಲು",
    spec_dawn_desc: "ಪ್ರತಿದಿನ ಮುಂಜಾನೆ ನೈಸರ್ಗಿಕವಾಗಿ ಕೊಯ್ಲು ಮಾಡಿ ತಕ್ಷಣವೇ ಪ್ಯಾಕ್ ಮಾಡಲಾಗುತ್ತದೆ. ತಾಜಾತನ ಮತ್ತು ಗರಿಗರಿತನ ಉಳಿಯುತ್ತದೆ.",
    spec_dawn_pill: "ತೇವಾಂಶ: 88.4% • ಗರಿಷ್ಠ ಗುಣಮಟ್ಟ A++",

    spec_substrate_title: "ಶುದ್ಧ ಕೃಷಿ ಮಾಧ್ಯಮ",
    spec_substrate_desc: "ಕ್ರಿಮಿನಾಶಕ ರಹಿತ ರಾಗಿ ಹೊಟ್ಟು, ಭತ್ತದ ಹುಲ್ಲು ಮತ್ತು ಶುದ್ಧ ನೀರಿನ ಹನಿಗಳಿಂದ ಬೆಳೆಯಲಾಗುತ್ತದೆ. ಶೂನ್ಯ ರಾಸಾಯನಿಕ.",
    spec_substrate_pill: "100% ವಿಷಮುಕ್ತ & ಶುದ್ಧ",

    spec_delivery_title: "ಎಕ್ಸ್‌ಪ್ರೆಸ್ ವಿತರಣೆ",
    spec_delivery_desc: "ಕೊಯ್ಲು ಮಾಡಿದ 4 ರಿಂದ 8 ಗಂಟೆಗಳ ಒಳಗಾಗಿ ಬೆಂಗಳೂರು, ತುಮಕೂರು ಮತ್ತು ಸುತ್ತಮುತ್ತಲಿನ ಜಿಲ್ಲೆಗಳಿಗೆ ತಾಜಾ ಪೂರೈಕೆ.",
    spec_delivery_pill: "ವಿಶೇಷ ರಿಯಾಯಿತಿ ದರ: ₹79 / 200 ಗ್ರಾಂ",

    // 3D Controls
    btn_specimen_both: "ಎರಡೂ ಅಣಬೆಗಳು",
    btn_specimen_oyster: "ಸಿಂಪಿ ಅಣಬೆ (ಆಯ್ಸ್ಟರ್)",
    btn_specimen_milky: "ಹಾಲು ಅಣಬೆ (ಮಿಲ್ಕಿ)",
    badge_3d_rotational: "3D ತಿರುಗಿಸಬಹುದಾದ ಮಾದರಿ",
    badge_3d_inspect: "ತಿರುಗಿಸಿ ಸೂಕ್ಷ್ಮವಾಗಿ ವೀಕ್ಷಿಸಿ",
    caption_both: "ಜೈವಿಕ 3D ಮಾದರಿ: ಸಿಂಪಿ ಅಣಬೆ (ಎಡಕ್ಕೆ) & ಹಾಲು ಅಣಬೆ (ಬಲಕ್ಕೆ)",
    caption_sub_both: "ನೈಸರ್ಗಿಕ ಪಾಚಿ ಮತ್ತು ತೇಲುವ ಚಿನ್ನದ ಬೀಜಕಣಗಳ (spores) ಪರಿಸರದಲ್ಲಿ ನೈಜ 3D ವೀಕ್ಷಣೆ",
    caption_oyster: "ಪ್ಲುರೊಟಸ್ ಆಸ್ಟ್ರಿಯೇಟಸ್ (ಸಿಂಪಿ / Oyster ಅಣಬೆ)",
    caption_sub_oyster: "ಕೋಮಲ ದಳಗಳು • ರಕ್ತದ ಕೊಲೆಸ್ಟ್ರಾಲ್ ನಿಯಂತ್ರಣಕ್ಕೆ ಲೋವಸ್ಟಾಟಿನ್ ಮತ್ತು ಕರಗುವ ನಾರಿನಂಶ ಸಮೃದ್ಧ",
    caption_milky: "ಕ್ಯಾಲೋಸೈಬ್ ಇಂಡಿಕಾ (ಹಾಲು / Milky ಅಣಬೆ)",
    caption_sub_milky: "ದಪ್ಪನೆಯ ಬಿಳಿ ಕಾಂಡ • ಸಮೃದ್ಧ ಸಸಾರಜನಕ (ಪ್ರೋಟೀನ್), ನಾರಿನಂಶ ಮತ್ತು ಗರಿಷ್ಠ ರೋಗನಿರೋಧಕ ಶಕ್ತಿ",

    // Quick Order Card (Hero Right)
    order_card_tag: "ನೇರ ಫಾರ್ಮ್ ಖರೀದಿ",
    order_card_title: "ತಾಜಾ ದಿನನಿತ್ಯದ ಪ್ಯಾಕ್",
    order_card_desc: "100% ಮುಟ್ಟದ ಸ್ವಚ್ಛ ಪ್ಯಾನೆಟ್ ಪ್ಯಾಕ್. ಸಾಂಬಾರ್, ಪಲ್ಯ, ಸುಕ್ಕ, ಬಿರಿಯಾನಿ ಅಥವಾ ಸೂಪ್‌ಗೆ ಸೂಕ್ತ.",
    label_mrp: "ಸಾಮಾನ್ಯ ಬೆಲೆ",
    label_offer: "ರಿಯಾಯಿತಿ ಬೆಲೆ",
    label_weight: "ತೂಕ: 200 ಗ್ರಾಂ",
    label_quantity: "ಪ್ರಮಾಣ:",
    btn_whatsapp_cta: "ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಖರೀದಿಸಿ",
    guarantee_text: "100% ತೋಟದ ತಾಜಾತನದ ಭರವಸೆ",
    lab_title: "ಪ್ರಯೋಗಾಲಯದಲ್ಲಿ ಪರೀಕ್ಷಿತ",
    lab_desc: "ಸೀಸ, ಕೀಟನಾಶಕ ರಹಿತ ಮತ್ತು ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಸ್ವಚ್ಛತೆಯ ಪರೀಕ್ಷೆಯಲ್ಲಿ ದೃಢೀಕರಿಸಲಾಗಿದೆ.",

    // Health Benefits Section
    benefits_badge: "ಪೌಷ್ಟಿಕ ಆಹಾರದ ಶಕ್ತಿ • ದೃಢೀಕೃತ ಸತ್ವ",
    benefits_title: "ಆರೋಗ್ಯ ಪ್ರಯೋಜನಗಳು",
    benefits_ribbon: "ಶುದ್ಧ ಪೋಷಣೆ • ಉತ್ತಮ ಆರೋಗ್ಯ • ನೈಸರ್ಗಿಕವಾಗಿ",
    benefits_intro: "ಆಯುರ್ವೇದ ಪರಂಪರೆಯಲ್ಲಿ ಶ್ಲಾಘಿಸಲ್ಪಟ್ಟ ಮತ್ತು ಆಧುನಿಕ ವೈದ್ಯಕೀಯ ವಿಜ್ಞಾನದಿಂದ ಸಾಬೀತಾದ ನಮ್ಮ ಸಾವಯವ ಅಣಬೆಗಳು ದೀರ್ಘಾಯುಷ್ಯ ಮತ್ತು ರೋಗನಿರೋಧಕ ಶಕ್ತಿಯನ್ನು ನೀಡುತ್ತವೆ.",

    benefit_1_title: "ಪ್ರೋಟೀನ್ ಮತ್ತು ನಾರಿನಂಶ ಭರಿತ",
    benefit_1_desc: "ಮಾಂಸಖಂಡಗಳ ಬಲವರ್ಧನೆಗೆ ಅಗತ್ಯವಾದ ಉತ್ತಮ ಸಸ್ಯಜನ್ಯ ಪ್ರೋಟೀನ್ ಒದಗಿಸುತ್ತದೆ ಮತ್ತು ಅಧಿಕ ನಾರಿನಂಶವು ಹೊಟ್ಟೆ ದೀರ್ಘಕಾಲ ತುಂಬಿರುವಂತೆ ಮಾಡುತ್ತದೆ.",
    
    benefit_2_title: "ಪ್ರಬಲ ಆ್ಯಂಟಿಆಕ್ಸಿಡೆಂಟ್‌ಗಳು",
    benefit_2_desc: "ಎರ್ಗೋತಿಯೋನಿನ್ ಮತ್ತು ಪಾಲಿಫಿನಾಲ್‌ಗಳು ದೇಹದಲ್ಲಿನ ಫ್ರೀ ರ್ಯಾಡಿಕಲ್ಸ್‌ಗಳ ವಿರುದ್ಧ ಹೋರಾಡಿ ಕೋಶಗಳ ಹಾನಿಯನ್ನು ತಡೆದು ನವಯೌವನವನ್ನು ಕಾಪಾಡುತ್ತವೆ.",

    benefit_3_title: "ರೋಗನಿರೋಧಕ ಶಕ್ತಿಯ ಬೆಂಬಲ",
    benefit_3_desc: "ಇದರಲ್ಲಿರುವ ಬೀಟಾ-ಗ್ಲುಕಾನ್ ಅಂಶವು ರಕ್ತದ ಬಿಳಿ ಕಣಗಳನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಿ, ದೇಹಕ್ಕೆ ಋತುಮಾನದ ರೋಗಗಳು ಮತ್ತು ಸೋಂಕುಗಳ ವಿರುದ್ಧ ನೈಸರ್ಗಿಕ ಕವಚವನ್ನು ನೀಡುತ್ತದೆ.",

    benefit_4_title: "ನೈಸರ್ಗಿಕ ಜೀವಸತ್ವಗಳ ಆಗರ",
    benefit_4_desc: "ನೈಸರ್ಗಿಕ ವಿಟಮಿನ್ ಡಿ ಯ ಅಪರೂಪದ ಸಸ್ಯಾಹಾರಿ ಮೂಲ. ಜೊತೆಗೆ ವಿಟಮಿನ್ ಬಿ-ಕಾಂಪ್ಲೆಕ್ಸ್, ಸೆಲೆನಿಯಮ್, ಪೊಟ್ಯಾಸಿಯಮ್‌ನಂತಹ ಅಗತ್ಯ ಖನಿಜಗಳನ್ನು ಸಮೃದ್ಧವಾಗಿ ಒಳಗೊಂಡಿದೆ.",

    // Products Showcase
    products_badge: "ಶ್ರೇಷ್ಠ ಸಾವಯವ ಕೃಷಿ",
    products_title: "ಉತ್ತಮ ಗುಣಮಟ್ಟದ ತಾಜಾ ಅಣಬೆಗಳು",
    products_subtitle: "ಯಾವುದೇ ರಾಸಾಯನಿಕಗಳಿಲ್ಲದೆ ನೈಸರ್ಗಿಕ ತೇವಾಂಶ ಮತ್ತು ತಂಪಾದ ವಾತಾವರಣದಲ್ಲಿ ಬೆಳೆದ ಅತ್ಯುನ್ನತ ದರ್ಜೆಯ ಅಣಬೆಗಳು.",

    oyster_name: "ಸಿಂಪಿ ಅಣಬೆ (Oyster Mushroom)",
    oyster_sci: "ಪ್ಲುರೊಟಸ್ ಆಸ್ಟ್ರಿಯೇಟಸ್",
    oyster_desc: "ಮೃದುವಾದ ದಳಗಳುಳ್ಳ, ಅತ್ಯಂತ ಸುಲಭವಾಗಿ ಬೇಯುವ ಮತ್ತು ಮಸಾಲೆಗಳನ್ನು ಚೆನ್ನಾಗಿ ಹೀರಿಕೊಳ್ಳುವ ರುಚಿಕರ ಅಣಬೆ. ಪಲ್ಯ, ಸುಕ್ಕ ಮತ್ತು ಫ್ರೈಗೆ ಅತ್ಯುತ್ತಮ.",
    oyster_btn_add: "ಸಿಂಪಿ ಅಣಬೆ ಆರ್ಡರ್ ಮಾಡಿ",

    milky_name: "ಹಾಲು ಅಣಬೆ (Milky Mushroom)",
    milky_sci: "ಕ್ಯಾಲೋಸೈಬ್ ಇಂಡಿಕಾ",
    milky_desc: "ದಪ್ಪ ಕಾಂಡ ಹೊಂದಿರುವ, ಮಾಂಸಖಂಡದಂತೆ ಗಟ್ಟಿಯಾದ ಹಾಲಿನಂತಹ ಬಿಳಿ ಅಣಬೆ. ಸಾಂಬಾರ್, ಬಿರಿಯಾನಿ ಮತ್ತು ಗ್ರೇವಿಗಳಲ್ಲಿ ಬೇಯಿಸಿದಾಗಲೂ ಗರಿಗರಿಯಾಗಿರುತ್ತದೆ.",
    milky_btn_add: "ಹಾಲು ಅಣಬೆ ಆರ್ಡರ್ ಮಾಡಿ",

    badge_fresh_seal: "100% ನೈಸರ್ಗಿಕ & ತಾಜಾ",

    // Recipes Showcase
    recipes_badge: "ಅಡುಗೆ ಮನೆಗೆ ವನಸಿರಿ ರುಚಿ",
    recipes_title: "ವಿಶೇಷ ಪಾಕವಿಧಾನಗಳು",
    recipes_subtitle: "ನಮ್ಮ ತಾಜಾ ಸಾವಯವ ಅಣಬೆಗಳಿಂದ ಮನೆಯಲ್ಲೇ ತಯಾರಿಸಬಹುದಾದ ಅದ್ಭುತ, ಪೌಷ್ಟಿಕ ಮತ್ತು ಬಾಯಲ್ಲಿ ನೀರೂರಿಸುವ ರುಚಿಕರ ಅಡುಗೆಗಳು.",
    tab_all: "ಎಲ್ಲಾ ಅಡುಗೆಗಳು",
    tab_oyster: "ಸಿಂಪಿ ಅಣಬೆ ವಿಶೇಷ",
    tab_milky: "ಹಾಲು ಅಣಬೆ ವಿಶೇಷ",

    recipe_1_title: "ಕರಾವಳಿ ಸಿಂಪಿ ಅಣಬೆ ಸುಕ್ಕ (Oyster Sukka)",
    recipe_1_tag: "ಸಿಂಪಿ ಅಣಬೆ • ಕರಾವಳಿ ಶೈಲಿ",
    recipe_1_desc: "ಹಸಿ ತೆಂಗಿನಕಾಯಿ ತುರಿ, ಬ್ಯಾಡಗಿ ಮೆಣಸಿನಕಾಯಿ ಮತ್ತು ಘಮಘಮಿಸುವ ಕರಿಬೇವು ಸೇರಿಸಿ ಹುರಿದ ಅದ್ಭುತ ಮಂಗಳೂರು ಶೈಲಿಯ ಸುಕ್ಕ.",
    recipe_1_time: "20 ನಿಮಿಷ",
    recipe_1_cal: "165 ಕ್ಯಾಲೊರಿ",

    recipe_2_title: "ಬೆಳ್ಳುಳ್ಳಿ ಬೆಣ್ಣೆ ಸಿಂಪಿ ಅಣಬೆ ಫ್ರೈ",
    recipe_2_tag: "ಸಿಂಪಿ ಅಣಬೆ • ತ್ವರಿತ ಲಘು ಉಪಹಾರ",
    recipe_2_desc: "ತಾಜಾ ಬೆಣ್ಣೆ, ಜಜ್ಜಿದ ಬೆಳ್ಳುಳ್ಳಿ ಮತ್ತು ಕಾಳುಮೆಣಸಿನ ಪುಡಿಯೊಂದಿಗೆ ಕೇವಲ 10 ನಿಮಿಷಗಳಲ್ಲಿ ಹದವಾಗಿ ಹುರಿದ ಗರಿಗರಿ ಅಣಬೆ.",
    recipe_2_time: "12 ನಿಮಿಷ",
    recipe_2_cal: "140 ಕ್ಯಾಲೊರಿ",

    recipe_3_title: "ಶಾಹೀ ಹಾಲು ಅಣಬೆ ದಮ್ ಬಿರಿಯಾನಿ",
    recipe_3_tag: "ಹಾಲು ಅಣಬೆ • ರಾಯಲ್ ಬಿರಿಯಾನಿ",
    recipe_3_desc: "ಉದ್ದನೆಯ ಬಾಸ್ಮತಿ ಅಕ್ಕಿ ಮತ್ತು ರಸಭರಿತ ಹಾಲು ಅಣಬೆ ತುಂಡುಗಳನ್ನು ಮಣ್ಣಿನ ಮಡಕೆಯಲ್ಲಿ ಕೇಸರಿ, ಪುದೀನಾ ಹಾಗೂ ಮಸಾಲೆಗಳೊಂದಿಗೆ ಬೇಯಿಸಿದ ಬಿರಿಯಾನಿ.",
    recipe_3_time: "35 ನಿಮಿಷ",
    recipe_3_cal: "280 ಕ್ಯಾಲೊರಿ",

    recipe_4_title: "ಚೆಟ್ಟಿನಾಡ್ ಹಾಲು ಅಣಬೆ ಪೆಪ್ಪರ್ ಮಸಾಲ",
    recipe_4_tag: "ಹಾಲು ಅಣಬೆ • ದಕ್ಷಿಣ ಭಾರತದ ಶೈಲಿ",
    recipe_4_desc: "ಕಲ್ಲು ಒರಳಲ್ಲಿ ಅರೆದ ಕಾಳುಮೆಣಸು, ಸೋಂಪು ಹಾಗೂ ಈರುಳ್ಳಿ ಗ್ರೇವಿಯಲ್ಲಿ ಬೇಯಿಸಿದ ಮಸಾಲೆಯುಕ್ತ ಗಟ್ಟಿ ಹಾಲು ಅಣಬೆ ಗ್ರೇವಿ.",
    recipe_4_time: "25 ನಿಮಿಷ",
    recipe_4_cal: "190 ಕ್ಯಾಲೊರಿ",

    btn_view_recipe: "ಮಾಡುವ ವಿಧಾನ ವೀಕ್ಷಿಸಿ",

    // Cultivation
    cultivation_badge: "ನೈಸರ್ಗಿಕ ಕೃಷಿ ಪದ್ಧತಿ",
    cultivation_title: "ನಮ್ಮ ನೈಸರ್ಗಿಕ ಕೃಷಿ ಹಂತಗಳು",
    step1_title: "ಶುದ್ಧ ರಾಗಿ ಹೊಟ್ಟು & ಹುಲ್ಲು",
    step1_desc: "ರೈತರಿಂದ ನೇರವಾಗಿ ತಂದ ಭತ್ತದ ಹುಲ್ಲು ಮತ್ತು ರಾಗಿ ಹೊಟ್ಟನ್ನು ಆವಿಯಲ್ಲಿ ಕ್ರಿಮಿನಾಶನಗೊಳಿಸಿ ಶುದ್ಧ ತಲಾಧಾರ ತಯಾರಿಸಲಾಗುತ್ತದೆ.",
    step2_title: "ಶುದ್ಧ ನೀರಿನ ಹನಿಗಳು",
    step2_desc: "ಕಾಡಿನ ವಾತಾವರಣದಂತೆ 85-90% ನೈಸರ್ಗಿಕ ತೇವಾಂಶವನ್ನು ಕಾಪಾಡಲು ಶುದ್ಧ ನೀರಿನ ಹನಿಗಳನ್ನು ನಿರಂತರವಾಗಿ ಸಿಂಪಡಿಸಲಾಗುತ್ತದೆ.",
    step3_title: "ಮುಂಜಾನೆಯ ಕೊಯ್ಲು",
    step3_desc: "ಪ್ರತಿದಿನ ಮುಂಜಾನೆ 6:00 ಗಂಟೆಯೊಳಗೆ ಅಣಬೆಗಳು ಗರಿಷ್ಠ ತಾಜಾತನದಲ್ಲಿರುವಾಗಲೇ ಕೈಯಿಂದ ಆರಿಸಿ ತಕ್ಷಣ ಪ್ಯಾಕ್ ಮಾಡಲಾಗುತ್ತದೆ.",

    // Footer & Contact
    footer_tagline: "ನಿಸರ್ಗದ ಶುದ್ಧತೆಯೊಂದಿಗೆ ಬೆಳೆದ ಅಣಬೆಗಳು. ನಿಮ್ಮ ಕುಟುಂಬಕ್ಕೆ ಅತ್ಯುತ್ತಮ ಆರೋಗ್ಯ, ಶಕ್ತಿ ಮತ್ತು ಪೌಷ್ಟಿಕತೆಯನ್ನು ತಲುಪಿಸುವುದೇ ನಮ್ಮ ಗುರಿ.",
    footer_contact_heading: "ಸಂಪರ್ಕ ಮತ್ತು ಸಹಾಯವಾಣಿ",
    footer_order_heading: "ಆನ್‌ಲೈನ್ ಖರೀದಿ",
    footer_scan_note: "QR ಕೋಡ್ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ಅಥವಾ ನೇರವಾಗಿ ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಸಂದೇಶ ಕಳುಹಿಸಿ",
    thank_you_note: "ಆರೋಗ್ಯ ಮತ್ತು ನಿಸರ್ಗವನ್ನು ಆಯ್ಕೆ ಮಾಡಿದ್ದಕ್ಕಾಗಿ ಧನ್ಯವಾದಗಳು",
    copyright: "© 2026 ಆರ್ಗ್ಯಾನಿಕ್ ಅಣಬೆ (Organic Anabe). ಸರ್ವ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ. organabe.in",
    
    // WhatsApp prefilled message
    wa_msg_prefix: "ನಮಸ್ಕಾರ ಆರ್ಗ್ಯಾನಿಕ್ ಅಣಬೆ! ನಾನು ತಾಜಾ ಅಣಬೆಗಳನ್ನು ಆರ್ಡರ್ ಮಾಡಲು ಬಯಸುತ್ತೇನೆ:",
    wa_msg_pack: "ಪ್ಯಾಕ್ (200 ಗ್ರಾಂ ತಾಜಾ ಅಣಬೆ @ ₹79/ಪ್ಯಾಕ್).",
    wa_msg_suffix: "ದಯವಿಟ್ಟು ವಿತರಣೆಯ ಸಮಯ ಮತ್ತು ಪಾವತಿಯ ವಿವರಗಳನ್ನು ತಿಳಿಸಿ. ಧನ್ಯವಾದಗಳು!"
  }
};

// Recipe Details Dictionary for Modal
const recipeDetails = {
  recipe_1: {
    title_en: "Coastal Oyster Mushroom Sukka",
    title_kn: "ಕರಾವಳಿ ಸಿಂಪಿ ಅಣಬೆ ಸುಕ್ಕ (Oyster Sukka)",
    img: "assets/recipe_oyster_sukka.jpg",
    ingredients_en: [
      "200g Fresh Organic Oyster Mushrooms (shredded along gills)",
      "1/2 cup Freshly grated coconut",
      "4-5 Roasted Byadgi dried red chillies",
      "1 tbsp Coriander seeds, 1/2 tsp Cumin & Fennel seeds",
      "1 sprig Fresh Curry leaves",
      "1 medium Onion (thinly sliced)",
      "1 tsp Cold-pressed coconut oil or ghee",
      "Salt to taste & squeeze of fresh lime"
    ],
    ingredients_kn: [
      "200 ಗ್ರಾಂ ತಾಜಾ ಆರ್ಗ್ಯಾನಿಕ್ ಸಿಂಪಿ ಅಣಬೆ (ದಳಗಳಾಗಿ ಸೀಳಿದ್ದು)",
      "1/2 ಕಪ್ ತಾಜಾ ತುರಿದ ತೆಂಗಿನಕಾಯಿ",
      "4-5 ಹುರಿದ ಬ್ಯಾಡಗಿ ಒಣ ಮೆಣಸಿನಕಾಯಿ",
      "1 ಚಮಚ ಕೊತ್ತಂಬರಿ ಬೀಜ, 1/2 ಚಮಚ ಜೀರಿಗೆ ಮತ್ತು ಸೋಂಪು",
      "1 ಎಸಳು ತಾಜಾ ಕರಿಬೇವು",
      "1 ಈರುಳ್ಳಿ (ಉದ್ದಕ್ಕೆ ಹೆಚ್ಚಿದ್ದು)",
      "1 ಚಮಚ ತೆಂಗಿನ ಎಣ್ಣೆ ಅಥವಾ ತುಪ್ಪ",
      "ರುಚಿಗೆ ತಕ್ಕಷ್ಟು ಉಪ್ಪು ಮತ್ತು ಸ್ವಲ್ಪ ನಿಂಬೆರಸ"
    ],
    instructions_en: [
      "Dry roast coriander, cumin, fennel, and byadgi chillies until aromatic, then pulse with coconut to a coarse sukka powder.",
      "Heat coconut oil in a pan, add curry leaves and sliced onions; sauté until golden translucent.",
      "Add shredded oyster mushrooms; cook on medium-high heat for 4-5 minutes as they release their natural juices.",
      "Add the coarse spiced coconut mixture and salt. Stir-fry gently until dry and fragrant.",
      "Garnish with a squeeze of fresh lime juice. Serve hot with steamed rice or neer dosa!"
    ],
    instructions_kn: [
      "ಕೊತ್ತಂಬರಿ ಬೀಜ, ಜೀರಿಗೆ, ಸೋಂಪು ಹಾಗೂ ಬ್ಯಾಡಗಿ ಮೆಣಸಿನಕಾಯಿಯನ್ನು ಸಣ್ಣ ಉರಿಯಲ್ಲಿ ಹುರಿದು, ತೆಂಗಿನತುರಿಯೊಂದಿಗೆ ತರಿತರಿಯಾಗಿ ರುಬ್ಬಿಕೊಳ್ಳಿ.",
      "ಬಾಣಲೆಯಲ್ಲಿ ತೆಂಗಿನ ಎಣ್ಣೆ ಕಾಯಿಸಿ, ಕರಿಬೇವು ಮತ್ತು ಈರುಳ್ಳಿ ಹಾಕಿ ಹೊಂಬಣ್ಣ ಬರುವವರೆಗೆ ಹುರಿಯಿರಿ.",
      "ಸೀಳಿದ ಸಿಂಪಿ ಅಣಬೆ ಹಾಕಿ ಮಧ್ಯಮ ಉರಿಯಲ್ಲಿ 4-5 ನಿಮಿಷ ಬೇಯಿಸಿ.",
      "ರುಬ್ಬಿದ ತೆಂಗಿನ ಮಸಾಲೆ ಮತ್ತು ಉಪ್ಪು ಸೇರಿಸಿ ತೇವಾಂಶ ಇಂಗುವವರೆಗೆ ಚೆನ್ನಾಗಿ ಕೈಯಾಡಿಸಿ.",
      "ಮೇಲಿಂದ ಸ್ವಲ್ಪ ನಿಂಬೆರಸ ಹಿಂಡಿ, ಬಿಸಿಬಿಸಿ ನೀರುದೋಸೆ ಅಥವಾ ಅನ್ನದೊಂದಿಗೆ ಸವಿಯಿರಿ!"
    ]
  },

  recipe_2: {
    title_en: "Pan-Seared Garlic Thyme Oyster Mushrooms",
    title_kn: "ಬೆಳ್ಳುಳ್ಳಿ ಬೆಣ್ಣೆ ಸಿಂಪಿ ಅಣಬೆ ಫ್ರೈ (Garlic Thyme Oyster)",
    img: "assets/recipe_oyster_garlic.jpg",
    ingredients_en: [
      "200g Fresh Organic Oyster Mushrooms (whole petals)",
      "2 tbsp Salted Butter or Extra Virgin Olive Oil",
      "4-5 Cloves fresh Garlic (lightly crushed)",
      "2-3 Sprigs fresh Green Thyme",
      "1/2 tsp Freshly crushed Malabar Black Peppercorns",
      "Sea salt & flake salt for finishing"
    ],
    ingredients_kn: [
      "200 ಗ್ರಾಂ ತಾಜಾ ಆರ್ಗ್ಯಾನಿಕ್ ಸಿಂಪಿ ಅಣಬೆ (ಪೂರ್ಣ ದಳಗಳು)",
      "2 ಚಮಚ ಬೆಣ್ಣೆ ಅಥವಾ ಆಲಿವ್ ಎಣ್ಣೆ",
      "4-5 ಎಸಳು ಬೆಳ್ಳುಳ್ಳಿ (ಜಜ್ಜಿದ್ದು)",
      "ಸ್ವಲ್ಪ ತಾಜಾ ಥೈಮ್ ಅಥವಾ ಕೊತ್ತಂಬರಿ ಸೊಪ್ಪು",
      "1/2 ಚಮಚ ತಾಜಾ ಜಜ್ಜಿದ ಕಾಳುಮೆಣಸಿನ ಪುಡಿ",
      "ರುಚಿಗೆ ತಕ್ಕಷ್ಟು ಕಲ್ಲುಪ್ಪು"
    ],
    instructions_en: [
      "Heat a heavy skillet or cast-iron pan over medium-high heat until hot. Add 1 tbsp oil/butter.",
      "Place oyster mushroom petals flat in a single layer without overcrowding. Press down gently with a spatula.",
      "Sear undisturbed for 3-4 minutes until the bottom edges turn deep golden and caramelized.",
      "Flip over, toss in the crushed garlic, fresh thyme, and remaining butter. Baste the foaming butter over the caps for 2 minutes.",
      "Finish with freshly cracked black pepper and flake sea salt. Serve immediately as a gourmet warm starter!"
    ],
    instructions_kn: [
      "ಭಾರವಾದ ತವಾವನ್ನು ಬಿಸಿ ಮಾಡಿ 1 ಚಮಚ ಬೆಣ್ಣೆ ಅಥವಾ ಎಣ್ಣೆ ಹಾಕಿ.",
      "ಸಿಂಪಿ ಅಣಬೆಯ ದಳಗಳನ್ನು ತವಾದ ಮೇಲೆ ಹರಡಿ, ಚಮಚದಿಂದ ಲಘುವಾಗಿ ಒತ್ತಿ.",
      "3-4 ನಿಮಿಷ ಕೆಳಭಾಗ ಹೊಂಬಣ್ಣ ಮತ್ತು ಗರಿಗರಿಯಾಗುವವರೆಗೆ ತಿರುಗಿಸದೆ ಬೇಯಿಸಿ.",
      "ನಂತರ ಮಗುಚಿ ಹಾಕಿ, ಜಜ್ಜಿದ ಬೆಳ್ಳುಳ್ಳಿ, ಥೈಮ್ ಮತ್ತು ಉಳಿದ ಬೆಣ್ಣೆಯನ್ನು ಸೇರಿಸಿ 2 ನಿಮಿಷ ಸಾಟೇ ಮಾಡಿ.",
      "ಮೇಲಿಂದ ಕಾಳುಮೆಣಸಿನ ಪುಡಿ ಮತ್ತು ಉಪ್ಪು ಉದುರಿಸಿ ತಕ್ಷಣವೇ ಬಿಸಿಯಾಗಿ ಸವಿಯಿರಿ!"
    ]
  },

  recipe_3: {
    title_en: "Royal Milky Mushroom Dum Biryani",
    title_kn: "ಶಾಹೀ ಹಾಲು ಅಣಬೆ ದಮ್ ಬಿರಿಯಾನಿ (Milky Dum Biryani)",
    img: "assets/recipe_milky_biryani.jpg",
    ingredients_en: [
      "200g Fresh Organic Milky Mushrooms (cut into thick bite-sized chunks)",
      "1.5 cups Aged Long-Grain Basmati Rice (soaked for 30 mins)",
      "1/2 cup Thick Curd / Yogurt",
      "1 tsp Ginger-Garlic paste, 1 tsp Biryani Garam Masala",
      "1/2 tsp Kashmiri Red Chilli powder & 1/4 tsp Turmeric",
      "1 large Onion (deep-fried golden 'birista')",
      "Handful of fresh Mint and Coriander leaves",
      "2 tbsp Pure Desi Ghee & pinch of Saffron in warm milk"
    ],
    ingredients_kn: [
      "200 ಗ್ರಾಂ ತಾಜಾ ಹಾಲು ಅಣಬೆ (ದಪ್ಪ ಚೌಕಾಕಾರದ ತುಂಡುಗಳು)",
      "1.5 ಕಪ್ ಬಾಸ್ಮತಿ ಅಕ್ಕಿ (30 ನಿಮಿಷ ನೆನೆಸಿದ್ದು)",
      "1/2 ಕಪ್ ಗಟ್ಟಿ ಮೊಸರು",
      "1 ಚಮಚ ಶುಂಠಿ-ಬೆಳ್ಳುಳ್ಳಿ ಪೇಸ್ಟ್, 1 ಚಮಚ ಬಿರಿಯಾನಿ ಮಸಾಲ",
      "1/2 ಚಮಚ ಕಾಶ್ಮೀರಿ ಮೆಣಸಿನ ಪುಡಿ, 1/4 ಚಮಚ ಅರಿಶಿನ",
      "1 ಈರುಳ್ಳಿ (ಹೊಂಬಣ್ಣಕ್ಕೆ ಎಣ್ಣೆಯಲ್ಲಿ ಹುರಿದ ಬರಿಸ್ತಾ)",
      "ಸ್ವಲ್ಪ ಪುದೀನಾ ಮತ್ತು ಕೊತ್ತಂಬರಿ ಸೊಪ್ಪು",
      "2 ಚಮಚ ತುಪ್ಪ ಮತ್ತು ಕೇಸರಿ ಬೆರೆಸಿದ ಹಾಲು"
    ],
    instructions_en: [
      "Marinate thick milky mushroom chunks with curd, ginger-garlic paste, spices, and salt for 15 minutes.",
      "Boil basmati rice with whole cloves, cardamom, and bay leaf until 70% cooked; drain water.",
      "In a thick-bottomed pot or earthen handi, cook the marinated mushrooms in ghee for 5 minutes.",
      "Layer the semi-cooked rice over the mushrooms, top with fried onions, mint, coriander, saffron milk, and a drizzle of ghee.",
      "Seal pot with foil or dough. Slow-cook on low dum for 18-20 minutes. Rest 10 mins before fluffing up gently!"
    ],
    instructions_kn: [
      "ಹಾಲು ಅಣಬೆ ತುಂಡುಗಳಿಗೆ ಮೊಸರು, ಶುಂಠಿ-ಬೆಳ್ಳುಳ್ಳಿ ಪೇಸ್ಟ್, ಮಸಾಲೆ ಪುಡಿಗಳು ಮತ್ತು ಉಪ್ಪು ಸೇರಿಸಿ 15 ನಿಮಿಷ ನೆನೆಯಲು ಬಿಡಿ.",
      "ಬಾಸ್ಮತಿ ಅಕ್ಕಿಗೆ ಲವಂಗ, ಏಲಕ್ಕಿ ಹಾಕಿ 70% ಬೆಂದ ನಂತರ ನೀರು ಬಸಿದುಕೊಳ್ಳಿ.",
      "ಮಣ್ಣಿನ ಪಾತ್ರೆ ಅಥವಾ ದಪ್ಪ ತಳದ ಪಾತ್ರೆಯಲ್ಲಿ ತುಪ್ಪ ಹಾಕಿ, ನೆನೆಸಿದ ಅಣಬೆಯನ್ನು 5 ನಿಮಿಷ ಬೇಯಿಸಿ.",
      "ಅದರ ಮೇಲೆ ಬೆಂದ ಅನ್ನ, ಹುರಿದ ಈರುಳ್ಳಿ, ಪುದೀನಾ, ಕೇಸರಿ ಹಾಲು ಮತ್ತು ತುಪ್ಪವನ್ನು ಪದರಗಳಾಗಿ ಜೋಡಿಸಿ.",
      "ಪಾತ್ರೆಯ ಬಾಯನ್ನು ಭದ್ರವಾಗಿ ಮುಚ್ಚಿ, ಸಣ್ಣ ಉರಿಯಲ್ಲಿ 18-20 ನಿಮಿಷ 'ದಮ್' ಕಟ್ಟಿ. ಘಮಘಮಿಸುವ ಬಿರಿಯಾನಿ ಸವಿಯಲು ಸಿದ್ಧ!"
    ]
  },

  recipe_4: {
    title_en: "Chettinad Milky Mushroom Pepper Masala",
    title_kn: "ಚೆಟ್ಟಿನಾಡ್ ಹಾಲು ಅಣಬೆ ಪೆಪ್ಪರ್ ಮಸಾಲ (Chettinad Pepper Masala)",
    img: "assets/recipe_milky_pepper.jpg",
    ingredients_en: [
      "200g Fresh Organic Milky Mushrooms (diced into thick quarters)",
      "1 tbsp Whole Black Peppercorns, 1 tsp Cumin, 1 tsp Fennel seeds",
      "10 Small Shallots (sambhar onions, sliced)",
      "1 large Tomato (finely pureed)",
      "1 sprig Fresh Curry leaves & 2 Green chillies",
      "1 tsp Ginger-Garlic paste",
      "1.5 tbsp Gingelly / Sesame oil or Coconut oil",
      "Fresh coriander for garnish"
    ],
    ingredients_kn: [
      "200 ಗ್ರಾಂ ತಾಜಾ ಹಾಲು ಅಣಬೆ (ದಪ್ಪ ತುಂಡುಗಳಾಗಿ ಕತ್ತರಿಸಿದ್ದು)",
      "1 ಚಮಚ ಕಾಳುಮೆಣಸು, 1 ಚಮಚ ಜೀರಿಗೆ, 1 ಚಮಚ ಸೋಂಪು",
      "10 ಸಾಂಬಾರ್ ಸಣ್ಣ ಈರುಳ್ಳಿ (ಹೆಚ್ಚಿದ್ದು)",
      "1 ಟೊಮೆಟೊ (ನುಣ್ಣಗೆ ರುಬ್ಬಿದ್ದು)",
      "1 ಎಸಳು ಕರಿಬೇವು ಮತ್ತು 2 ಹಸಿಮೆಣಸಿನಕಾಯಿ",
      "1 ಚಮಚ ಶುಂಠಿ-ಬೆಳ್ಳುಳ್ಳಿ ಪೇಸ್ಟ್",
      "1.5 ಚಮಚ ಎಳ್ಳೆಣ್ಣೆ ಅಥವಾ ತೆಂಗಿನ ಎಣ್ಣೆ",
      "ಕೊತ್ತಂಬರಿ ಸೊಪ್ಪು"
    ],
    instructions_en: [
      "Dry roast black peppercorns, cumin, and fennel seeds until fragrant, then grind to a coarse aromatic pepper powder.",
      "Heat oil in a pan; add mustard seeds, curry leaves, green chillies, and shallots. Sauté until lightly browned.",
      "Add ginger-garlic paste and tomato puree; cook until oil separates on the sides.",
      "Toss in the juicy milky mushroom chunks and salt. Cook for 5 minutes so the mushrooms release and absorb juices.",
      "Add the freshly ground pepper spice blend. Simmer for 3 minutes until thick and glossy. Garnish with coriander!"
    ],
    instructions_kn: [
      "ಕಾಳುಮೆಣಸು, ಜೀರಿಗೆ ಮತ್ತು ಸೋಂಪನ್ನು ಸಣ್ಣ ಉರಿಯಲ್ಲಿ ಹುರಿದು ಪುಡಿ ಮಾಡಿಕೊಳ್ಳಿ.",
      "ಬಾಣಲೆಯಲ್ಲಿ ಎಣ್ಣೆ ಕಾಯಿಸಿ ಸಾಸಿವೆ, ಕರಿಬೇವು, ಹಸಿಮೆಣಸಿನಕಾಯಿ ಮತ್ತು ಸಣ್ಣ ಈರುಳ್ಳಿ ಹಾಕಿ ಹುರಿಯಿರಿ.",
      "ಶುಂಠಿ-ಬೆಳ್ಳುಳ್ಳಿ ಪೇಸ್ಟ್ ಮತ್ತು ಟೊಮೆಟೊ ಪ್ಯೂರಿ ಸೇರಿಸಿ ಎಣ್ಣೆ ಬಿಡುವವರೆಗೆ ಬೇಯಿಸಿ.",
      "ಹಾಲು ಅಣಬೆ ತುಂಡುಗಳು ಮತ್ತು ಉಪ್ಪು ಸೇರಿಸಿ 5 ನಿಮಿಷ ಬೇಯಿಸಿ.",
      "ರುಬ್ಬಿದ ಕಾಳುಮೆಣಸಿನ ಮಸಾಲೆ ಸೇರಿಸಿ ಗ್ರೇವಿ ದಪ್ಪವಾಗುವವರೆಗೆ 3 ನಿಮಿಷ ಕುದಿಸಿ, ಕೊತ್ತಂಬರಿ ಸೊಪ್ಪಿನಿಂದ ಅಲಂಕರಿಸಿ ಬಿಸಿ ಅನ್ನ, ಚಪಾತಿಯೊಂದಿಗೆ ಸವಿಯಿರಿ!"
    ]
  }
};
