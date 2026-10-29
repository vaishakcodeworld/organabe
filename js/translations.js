/**
 * ORGANIC ANABE (ಆರ್ಗ್ಯಾನಿಕ್ ಅಣಬೆ)
 * Bilingual Dictionary: Simple English & Kannada (ಕನ್ನಡ)
 */

const translations = {
  en: {
    // Top Announcement Bar
    ticker_text: "100% Farm-Fresh Organic Mushrooms • Grown Without Any Chemicals",
    ticker_harvest: "Harvested Fresh Every Morning at 5:30 AM • Direct From Our Karnataka Farm",
    ticker_phone: "Call Our Farmers: 9591185530",
    ticker_delivery: "Fresh Mushrooms: Mysore, Mandya, Hassan & Chamrajnagar • Pellets Across All Karnataka",

    // Navigation Links
    brand_name: "Organic Anabe",
    brand_sub: "Pure Nature in Every Bite",
    nav_home: "Home",
    nav_benefits: "Health Benefits",
    nav_popular_recipes: "Recipes",
    nav_spawn: "Mushroom Spawn",
    nav_pellets: "All Pellets",
    nav_recipes: "All 80+ Recipes",
    nav_about: "About Us",
    nav_gallery: "Gallery",
    nav_contact: "Contact Us",
    btn_order_nav: "Cart",
    btn_price_nav: "₹79 / 200g",

    // Hero Section
    hero_badge: "🌱 100% Organic & Chemical-Free • Daily Morning Harvest",
    hero_title: "Pellets, Spawn, Oyster Mushroom Spawn & Milky Mushroom Spawn - Direct Farm Supply",
    hero_subtitle: "Karnataka's #1 Certified Producer of All Types of Pellets (Substrate, Hardwood & Biomass Fuel) and Lab-Grade Pure Mushroom Spawn (Fresh Oyster & Milky Spawn @ ₹130/KG, Min 10KG). Fresh daily harvest delivered directly from our farm.",
    hero_trust_1: "0% Chemicals or Sprays",
    hero_trust_2: "Harvested Daily at Dawn",
    hero_trust_3: "Direct Farm-to-Home Delivery",
    hero_trust_4: "Mushroom Spawn (₹130/kg) & Hardwood Pellets",

    // Dual Mushroom Hero Cards
    hero_oyster_title: "Fresh Oyster Mushroom",
    hero_oyster_sci: "Soft, tender petals • Cooks in 10 minutes",
    hero_oyster_desc: "Delicate fan-shaped mushrooms that soak up rich spices. Great for quick pepper roasts, curries, crispy pakodas, and daily healthy meals.",
    hero_milky_title: "Fresh Milky Mushroom",
    hero_milky_sci: "Crisp, thick white stems • Delicious meaty bite",
    hero_milky_desc: "Firm white mushrooms that keep their shape while cooking. Best choice for Sunday biryanis, spicy gravies, tandoori tikka, and ghee roasts.",
    hero_price_label: "Offer Price",
    btn_add_cart: "+ Add to Cart",
    btn_order_whatsapp: "Order on WhatsApp",

    // Health Benefits
    benefits_badge: "Healthy & Nutritious",
    benefits_title: "Why Mushrooms Are Great For Your Health",
    benefits_ribbon: "Pure Food • Better Health • 100% Natural",
    benefits_intro: "Our mushrooms are grown completely chemical-free. They give you clean vegetarian protein and essential vitamins to keep your body strong and active.",
    benefit_1_title: "High in Protein & Fiber",
    benefit_1_desc: "Gives your body clean plant protein to build muscles, and dietary fiber that helps healthy digestion and keeps you full.",
    benefit_2_title: "Fights Body Weakness",
    benefit_2_desc: "Packed with natural antioxidants that protect your body cells and keep your skin fresh and healthy.",
    benefit_3_title: "Boosts Immunity Power",
    benefit_3_desc: "Rich in active Beta-Glucans that help your white blood cells fight off cold, cough, and common infections.",
    benefit_4_title: "Natural Vitamins & Minerals",
    benefit_4_desc: "One of the best natural plant sources of Vitamin D, Vitamin B, Iron, and Selenium for strong bones and daily energy.",

    // Recipes Section
    popular_badge: "⭐ Farm Recipes",
    popular_title: "Delicious Mushroom Recipes",
    popular_subtitle: "Simple, delicious dishes you can make at home in under 20 minutes with basic kitchen spices.",

    // 3B. Mushroom Spawn Section (Oyster & Milky)
    spawn_badge: "🌱 Laboratory Certified Mushroom Spawn • 100% Contamination-Free",
    spawn_title: "High-Yield Oyster & Milky Mushroom Spawn (ಅಣಬೆ ಬೀಜಗಳು)",
    spawn_desc: "First-generation, high-vigor laboratory grain spawn for commercial growers and home cultivators. Both Oyster and Milky mushroom spawn available at ₹130/KG with minimum order of 10 KG.",
    spawn_price_tag: "₹130 / KG • Minimum Order: 10 KG",
    spawn_oyster_title: "Oyster Mushroom Spawn (Pleurotus ostreatus)",
    spawn_oyster_desc: "Fast-running, pure white mycelium cultured on sterilized sorghum grains. Aggressive colonization in 12–15 days, high biological efficiency (100–120%), and bumper flushes.",
    spawn_milky_title: "Milky Mushroom Spawn (Calocybe indica)",
    spawn_milky_desc: "Heat-tolerant (up to 38°C) commercial grade grain spawn. Produces robust, heavy, snow-white milky mushrooms with delicious meaty texture and long shelf life.",
    spawn_perk_1_title: "100% Sterile Lab Inoculation",
    spawn_perk_1_desc: "Prepared under HEPA laminar airflow with medical-grade autoclaving in breathable microporous filter-patch bags.",
    spawn_perk_2_title: "Fast Mycelium Colonization (12-15 Days)",
    spawn_perk_2_desc: "Aggressive, high-vigor spawn runs swiftly through paddy straw and hardwood sawdust substrate bags, minimizing contamination risks.",
    spawn_perk_3_title: "Statewide Karnataka & Interstate Dispatch",
    spawn_perk_3_desc: "Safely boxed and dispatched within 24-48 hours across Mysore, Mandya, Bangalore, Hassan, Shivamogga, Belagavi, Mangalore & South India.",
    btn_spawn_quote: "Order Mushroom Spawn on WhatsApp (₹130/KG)",

    // Hardwood Pellets Section - All Types of Pellets
    pellets_badge: "All Types of Pellets • Mushroom Substrate & Biomass Fuel",
    pellets_title: "All Types of Pellets: Premium Mushroom Hardwood & Biomass Pellets",
    pellets_desc: "100% natural, chemical-free compressed hardwood sawdust pellets, biomass heating pellets, and mushroom cultivation substrates. Supplied across Karnataka and India in 30 KG bags to commercial tonnes.",
    pellets_min_order: "Orders: Minimum 30 KG and goes up to multiple Tonnes",
    pellets_perk_1_title: "All Pellets Types: Substrate & Biomass",
    pellets_perk_1_desc: "Broadleaf Hardwood Pellets for mushroom cultivation (Oak, Beech) plus High-Calorific Biomass Wood Pellets for industrial boilers and heating.",
    pellets_perk_2_title: "Fast Hydration & Maximum Mushroom Yield",
    pellets_perk_2_desc: "Hydrates evenly with hot water or steam pasteurization, promoting rapid, vigorous mycelium colonisation.",
    pellets_perk_3_title: "From 30 KG Bags to Commercial Tonnes",
    pellets_perk_3_desc: "Packed in sturdy moisture-protected sacks. Convenient supply for home growers, commercial farms, and agricultural units across Karnataka.",
    btn_pellets_quote: "Order / Inquire for Pellets (Min 30 KG)",

    // About Us Section (The Organic Anabe Story)
    about_badge: "Our Roots & Journey",
    about_title: "How Organic Anabe Started",
    about_subtitle: "Founded in 2026 by three cousins with a shared passion for sustainable agriculture.",
    about_story_heading: "The Story Behind Our Farm",
    about_story_p1: "Founded in 2026 by three cousins, Organic Anabe began with a shared passion for sustainable agriculture and fresh, healthy food. Repurposing an existing shelter, we transformed the space into a state-of-the-art mushroom cultivation facility that merges modern farming technology with age-old organic principles.",
    about_commitment: "Our commitment is simple: 100% natural, zero chemicals.",
    about_story_p2: "We cultivate our mushrooms on premium, sustainable substrates made from paddy straw and hardwood pellets, creating the ideal natural environment for robust growth and rich flavor. By combining precise environmental controls with zero-chemical methods, we deliver pure, nutrient-dense mushrooms straight from our farm to your table.",

    // Gallery
    gallery_badge: "Real Farm Photos",
    gallery_title: "Gallery",
    gallery_subtitle: "Take a peek inside our fresh harvest, mist growing rooms, hardwood pellets, and farm.",

    // Local SEO & Delivery Coverage
    coverage_badge: "🌱 Fresh Delivery & Statewide Supply",
    coverage_title: "Fresh Mushroom Delivery & Karnataka Pellets Logistics",
    coverage_subtitle: "Daily farm harvest delivered exclusively across Mysore & Mandya only • Statewide supply of mushroom spawn and hardwood pellets across all 31 Karnataka districts.",
    cov_card1_badge: "Daily Morning Harvest • Mysore & Mandya Only",
    cov_card1_title: "Fresh Oyster & Milky Mushrooms (Exclusively Mysore & Mandya)",
    cov_card1_desc: "Direct farm-to-doorstep delivery harvested fresh every morning at 5:30 AM without cold storage delays or chemical preservatives. Delivered exclusively in Mysore & Mandya only to guarantee morning harvest freshness.",
    cov_card2_badge: "Statewide Substrate Logistics",
    cov_card2_title: "Mushroom Hardwood Pellets (All Karnataka)",
    cov_card2_desc: "100% natural compressed hardwood sawdust pellets for mushroom cultivation. Fast dispatch from Min 30 KG trial sacks to multiple commercial tonnes across all Karnataka districts.",
    faq_title: "Frequently Asked Questions (FAQ) • Karnataka Mushroom & Pellets Guide",

    // Standalone Contact Us Section
    contact_badge: "Direct Farm Contacts",
    contact_title: "Contact Us",
    contact_subtitle: "Have a question about fresh mushrooms or hardwood pellets? Speak directly with our farm team:",

    // Cart Drawer
    cart_title: "Your Mushroom Cart",
    cart_empty: "Your cart is empty. Add fresh mushrooms to get started!",
    cart_qty: "Quantity",
    cart_subtotal: "Subtotal",
    cart_delivery: "Delivery",
    cart_delivery_free: "Standard Farm Delivery",
    cart_total: "Total Amount",
    cart_address_header: "Enter Delivery Address (Karnataka)",
    cart_input_name: "Full Name",
    cart_input_phone: "Mobile Number (WhatsApp)",
    cart_input_address: "House / Flat No, Street, Area",
    cart_input_city: "City / Town & Pincode",
    cart_input_notes: "Any Landmark or Delivery Notes",
    btn_checkout_wa: "Confirm Order via WhatsApp",

    // WhatsApp Modal
    wa_modal_badge: "WhatsApp Connect",
    wa_modal_title: "Ordering from a Laptop or Computer?",
    wa_modal_desc: "Choose how you would like to connect with our farm team:",
    btn_wa_web: "Open in WhatsApp Web (Browser)",
    wa_qr_title: "Or Scan QR Code with Your Phone Camera:",
    wa_copy_btn: "Copy Order Details",
    wa_copy_success: "Copied to Clipboard!",

    thank_you_note: "THANK YOU FOR CHOOSING HEALTH & NATURE",
    copyright: "© 2026 Organic Anabe (ಆರ್ಗ್ಯಾನಿಕ್ ಅಣಬೆ). All Rights Reserved."
  },

  kn: {
    ticker_text: "100% ನೈಸರ್ಗಿಕ ತೋಟದ ಸಾವಯವ ಅಣಬೆಗಳು • ಯಾವುದೇ ರಾಸಾಯನಿಕಗಳಿಲ್ಲ",
    ticker_harvest: "ಪ್ರತಿದಿನ ಬೆಳಗ್ಗೆ 5:30 ಕ್ಕೆ ಕೊಯ್ಲು • ಕರ್ನಾಟಕದ ನಮ್ಮದೇ ತೋಟದಿಂದ ನೇರ ಸರಬರಾಜು",
    ticker_phone: "ನಮ್ಮ ಕೃಷಿಕರನ್ನು ಸಂಪರ್ಕಿಸಿ: 9591185530",
    ticker_delivery: "ತಾಜಾ ಅಣಬೆ: ಮೈಸೂರು, ಮಂಡ್ಯ, ಹಾಸನ, ಚಾಮರಾಜನಗರ • ಪೆಲ್ಲೆಟ್ಸ್: ಸಮಗ್ರ ಕರ್ನಾಟಕ",

    brand_name: "ಆರ್ಗ್ಯಾನಿಕ್ ಅಣಬೆ",
    brand_sub: "ಪ್ರತಿ ತುತ್ತಿನಲ್ಲೂ ಶುದ್ಧ ಪ್ರಕೃತಿ",
    nav_home: "ಮುಖಪುಟ",
    nav_benefits: "ಆರೋಗ್ಯ ಪ್ರಯೋಜನಗಳು",
    nav_popular_recipes: "ಅಡುಗೆಗಳು",
    nav_spawn: "ಅಣಬೆ ಬೀಜ (Spawn)",
    nav_pellets: "ಪೆಲ್ಲೆಟ್‌ಗಳು",
    nav_recipes: "80+ ಅಡುಗೆಗಳು",
    nav_about: "ನಮ್ಮ ಬಗ್ಗೆ",
    nav_gallery: "ಗ್ಯಾಲರಿ",
    nav_contact: "ಸಂಪರ್ಕಿಸಿ",
    btn_order_nav: "ಕಾರ್ಟ್",
    btn_price_nav: "₹79 / 200 ಗ್ರಾಂ",

    hero_badge: "🌱 100% ಸಾವಯವ & ನೈಸರ್ಗಿಕ • ಮುಂಜಾನೆಯ ತಾಜಾ ಕೊಯ್ಲು",
    hero_title: "ಪೆಲ್ಲೆಟ್‌ಗಳು, ಅಣಬೆ ಬೀಜ (Spawn), ಸಿಂಪಿ ಮತ್ತು ಹಾಲು ಅಣಬೆ ಬೀಜ ನೇರ ಪೂರೈಕೆ",
    hero_subtitle: "ಕರ್ನಾಟಕದ ನಂ.1 ಲ್ಯಾಬ್-ದೃಢೀಕೃತ ಅಣಬೆ ಬೀಜ (ಸಿಂಪಿ & ಹಾಲು ಅಣಬೆ ಬೀಜ ₹130/ಕೆಜಿ, ಕನಿಷ್ಠ 10 ಕೆಜಿ) ಮತ್ತು ಎಲ್ಲಾ ರೀತಿಯ ಮರದ ಪೆಲ್ಲೆಟ್‌ಗಳ ನೇರ ಪೂರೈಕೆದಾರರು.",
    hero_trust_1: "0% ರಾಸಾಯನಿಕ ಅಥವಾ ಕ್ರಿಮಿನಾಶಕ",
    hero_trust_2: "ಮುಂಜಾನೆ 5:30 ರ ತಾಜಾ ಕೊಯ್ಲು",
    hero_trust_3: "ತೋಟದಿಂದ ನೇರ ಮನೆಗೆ ತಲುಪಿಸುವಿಕೆ",
    hero_trust_4: "ಅಣಬೆ ಬೀಜಗಳು (₹130/kg) & ಪೆಲ್ಲೆಟ್‌ಗಳು",

    hero_oyster_title: "ತಾಜಾ ಸಿಂಪಿ ಅಣಬೆ (Oyster)",
    hero_oyster_sci: "ಮೃದುವಾದ ದಳಗಳು • 10 ನಿಮಿಷದಲ್ಲಿ ಸಿದ್ಧ",
    hero_oyster_desc: "ಮೃದುವಾದ ಸಿಂಪಿ ಅಣಬೆ ಮಸಾಲೆಗಳನ್ನು ಚೆನ್ನಾಗಿ ಹೀರಿಕೊಳ್ಳುತ್ತದೆ. ಪೆಪ್ಪರ್ ಫ್ರೈ, ಪಲ್ಯ, ಸಾಂಬಾರ್, ಪಕೋಡ ಮತ್ತು ದಿನನಿತ್ಯದ ಅಡುಗೆಗೆ ಅತ್ಯುತ್ತಮ.",
    hero_milky_title: "ತಾಜಾ ಹಾಲು ಅಣಬೆ (Milky)",
    hero_milky_sci: "ದಪ್ಪ ಬಿಳಿ ಕಾಂಡ • ಗರಿಗರಿ ರುಚಿಯ ಮಾಂಸಖಂಡ",
    hero_milky_desc: "ಬೇಯಿಸಿದಾಗಲೂ ಗಟ್ಟಿಯಾಗಿ ಉಳಿಯುವ ಬಿಳಿ ಅಣಬೆ. ಬಿರಿಯಾನಿ, ಗ್ರೇವಿ, ತಂದೂರಿ ಟಿಕ್ಕಾ, ಮತ್ತು ತುಪ್ಪದ ರೋಸ್ಟ್‌ಗೆ ಅತ್ಯಂತ ರುಚಿಕರ.",
    hero_price_label: "ರಿಯಾಯಿತಿ ಬೆಲೆ",
    btn_add_cart: "+ ಕಾರ್ಟ್‌ಗೆ ಸೇರಿಸಿ",
    btn_order_whatsapp: "ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಆರ್ಡರ್ ಮಾಡಿ",

    benefits_badge: "ಪೌಷ್ಟಿಕ ಆಹಾರ",
    benefits_title: "ಅಣಬೆ ಸೇವನೆಯಿಂದ ಆರೋಗ್ಯಕ್ಕೆ ಅದ್ಭುತ ಲಾಭಗಳು",
    benefits_ribbon: "ಶುದ್ಧ ಆಹಾರ • ಉತ್ತಮ ಆರೋಗ್ಯ • 100% ನೈಸರ್ಗಿಕ",
    benefits_intro: "ನಮ್ಮ ಅಣಬೆಗಳು ಸಂಪೂರ್ಣವಾಗಿ ರಾಸಾಯನಿಕ ಮುಕ್ತವಾಗಿವೆ. ಇವು ದೇಹಕ್ಕೆ ಉತ್ತಮ ಸಸ್ಯಜನ್ಯ ಪ್ರೋಟೀನ್ ಮತ್ತು ಅಗತ್ಯ ಜೀವಸತ್ವಗಳನ್ನು ನೀಡುತ್ತವೆ.",
    benefit_1_title: "ಪ್ರೋಟೀನ್ ಮತ್ತು ನಾರಿನಂಶ",
    benefit_1_desc: "ಸ್ನಾಯುಗಳ ಬಲವರ್ಧನೆಗೆ ಉತ್ತಮ ಪ್ರೋಟೀನ್ ನೀಡುತ್ತದೆ ಮತ್ತು ಜೀರ್ಣಕ್ರಿಯೆಗೆ ಅಗತ್ಯವಾದ ನಾರಿನಂಶವನ್ನು ಒದಗಿಸುತ್ತದೆ.",
    benefit_2_title: "ಆ್ಯಂಟಿಆಕ್ಸಿಡೆಂಟ್ ಶಕ್ತಿ",
    benefit_2_desc: "ದೇಹದ ಜೀವಕೋಶಗಳನ್ನು ರಕ್ಷಿಸಿ ಚರ್ಮದ ಕಾಂತಿ ಮತ್ತು ಯೌವನವನ್ನು ಕಾಪಾಡಲು ನೆರವಾಗುತ್ತದೆ.",
    benefit_3_title: "ರೋಗನಿರೋಧಕ ಶಕ್ತಿಯ ಹೆಚ್ಚಳ",
    benefit_3_desc: "ಬೀಟಾ-ಗ್ಲುಕಾನ್ ಅಂಶವು ರೋಗನಿರೋಧಕ ಶಕ್ತಿಯನ್ನು ಹೆಚ್ಚಿಸಿ ಶೀತ, ಜ್ವರ ಮತ್ತು ಸೋಂಕುಗಳಿಂದ ರಕ್ಷಿಸುತ್ತದೆ.",
    benefit_4_title: "ನೈಸರ್ಗಿಕ ವಿಟಮಿನ್ ಡಿ & ಬಿ",
    benefit_4_desc: "ಮೂಳೆಗಳ ಬಲಕ್ಕೆ ಅಗತ್ಯವಿರುವ ವಿಟಮಿನ್ ಡಿ ಮತ್ತು ರಕ್ತಹೀನತೆ ತಡೆಯುವ ಖನಿಜಗಳ ಉತ್ತಮ ಸಸ್ಯಾಹಾರಿ ಮೂಲ.",

    popular_badge: "⭐ ಅಣಬೆ ಅಡುಗೆಗಳು",
    popular_title: "ರುಚಿಕರ ಅಣಬೆ ಅಡುಗೆಗಳು",
    popular_subtitle: "ಕೇವಲ 15-20 ನಿಮಿಷಗಳಲ್ಲಿ ಮನೆಯಲ್ಲೇ ಮಾಡಬಹುದಾದ ಅತಿ ಸರಳ ಮತ್ತು ರುಚಿಕರ ಅಡುಗೆಗಳು.",

    // 3B. Mushroom Spawn Section (Kannada)
    spawn_badge: "🌱 ಪ್ರಯೋಗಾಲಯ ಪ್ರಮಾಣೀಕೃತ ಅಣಬೆ ಬೀಜಗಳು (Spawn)",
    spawn_title: "ಉತ್ತಮ ಇಳುವರಿಯ ಸಿಂಪಿ & ಹಾಲು ಅಣಬೆ ಬೀಜಗಳು (Spawn)",
    spawn_desc: "ಪ್ರಥಮ ದರ್ಜೆಯ ರೋಗನಿರೋಧಕ ಅಣಬೆ ಬೀಜಗಳು (Mushroom Grain Spawn). ಸಿಂಪಿ ಮತ್ತು ಹಾಲು ಅಣಬೆ ಬೀಜಗಳು ಕೇವಲ ₹130/ಕೆ.ಜಿ. ಕನಿಷ್ಠ ಆರ್ಡರ್ 10 ಕೆ.ಜಿ. ಕರ್ನಾಟಕದಾದ್ಯಂತ ಸರಬರಾಜು.",
    spawn_price_tag: "₹130 / ಪ್ರತಿ ಕೆ.ಜಿ. • ಕನಿಷ್ಠ ಆರ್ಡರ್: 10 ಕೆ.ಜಿ.",
    spawn_oyster_title: "ಸಿಂಪಿ ಅಣಬೆ ಬೀಜ (Oyster Mushroom Spawn)",
    spawn_oyster_desc: "ಶುದ್ಧ ಜೋಳದ ಕಾಳುಗಳ ಮೇಲೆ ತಯಾರಿಸಿದ ಪ್ರಥಮ ದರ್ಜೆಯ ಸಿಂಪಿ ಅಣಬೆ ಬೀಜ. 12-15 ದಿನಗಳಲ್ಲಿ ವೇಗದ ಬೆಳವಣಿಗೆ ಮತ್ತು ಅಧಿಕ ಇಳುವರಿ.",
    spawn_milky_title: "ಹಾಲು ಅಣಬೆ ಬೀಜ (Milky Mushroom Spawn)",
    spawn_milky_desc: "ಹೆಚ್ಚಿನ ತಾಪಮಾನ (38°C ವರೆಗೆ) ಸಹಿಸಿಕೊಳ್ಳುವ ಶಕ್ತಿಶಾಲಿ ಹಾಲು ಅಣಬೆ ಬೀಜ. ದಪ್ಪ, ಗಟ್ಟಿ ಬಿಳಿ ಅಣಬೆಗಳನ್ನು ನೀಡುವ ಶ್ರೇಷ್ಠ ಬೀಜಕಣ.",
    spawn_perk_1_title: "100% ಶುದ್ಧ ಲ್ಯಾಬ್ ಕಲ್ಚರ್ & ಕಲ್ಮಶ ರಹಿತ",
    spawn_perk_1_desc: "ಲ್ಯಾಮಿನಾರ್ ಏರ್‌ಫ್ಲೋ ಕೋಣೆಯಲ್ಲಿ ವೈದ್ಯಕೀಯ ಗುಣಮಟ್ಟದ ಸ್ವಚ್ಛತೆಯಲ್ಲಿ ಫಿಲ್ಟರ್ ಬ್ಯಾಗ್‌ಗಳಲ್ಲಿ ತಯಾರಿಸಿದ ಸುರಕ್ಷಿತ ಬೀಜ.",
    spawn_perk_2_title: "ಕೇವಲ 12-15 ದಿನಗಳಲ್ಲಿ ತ್ವರಿತ ಬೆಳವಣಿಗೆ",
    spawn_perk_2_desc: "ಹುಲ್ಲು ಅಥವಾ ಮರದ ಹೊಟ್ಟಿನ ತಲಾಧಾರವನ್ನು ಅತಿ ಶೀಘ್ರವಾಗಿ ಆವರಿಸುವ ಗಟ್ಟಿ ಮೈಸಿಲಿಯಮ್ (ಬೀಜದ ಬಳ್ಳಿ).",
    spawn_perk_3_title: "ಕರ್ನಾಟಕ ರಾಜ್ಯಾದ್ಯಂತ ಶೀಘ್ರ ಪೂರೈಕೆ",
    spawn_perk_3_desc: "24-48 ಗಂಟೆಗಳಲ್ಲಿ ಸುರಕ್ಷಿತ ಬಾಕ್ಸ್‌ಗಳಲ್ಲಿ ಪ್ಯಾಕ್ ಮಾಡಿ ಕೊರಿಯರ್ ಅಥವಾ ಸಾರಿಗೆ ಮೂಲಕ ರವಾನೆ.",
    btn_spawn_quote: "ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಅಣಬೆ ಬೀಜ ಆರ್ಡರ್ ಮಾಡಿ (₹130/KG)",

    // Hardwood Pellets Section - All Types of Pellets (Kannada)
    pellets_badge: "ಎಲ್ಲಾ ಬಗೆಯ ಪೆಲ್ಲೆಟ್‌ಗಳು • ಅಣಬೆ ತಲಾಧಾರ & ಬಯೋಮಾಸ್ ಇಂಧನ",
    pellets_title: "ಎಲ್ಲಾ ಬಗೆಯ ಪೆಲ್ಲೆಟ್‌ಗಳು: ಪ್ರೀಮಿಯಂ ಮಶ್ರೂಮ್ ಹಾರ್ಡ್‌ವುಡ್ & ಬಯೋಮಾಸ್ ಪೆಲ್ಲೆಟ್‌ಗಳು",
    pellets_desc: "100% ನೈಸರ್ಗಿಕ, ರಾಸಾಯನಿಕ ಮುಕ್ತ ಒತ್ತಡದ ಹಾರ್ಡ್‌ವುಡ್ ಮರದ ಪುಡಿ ಪೆಲ್ಲೆಟ್‌ಗಳು, ಬಾಯ್ಲರ್ ಬಯೋಮಾಸ್ ಪೆಲ್ಲೆಟ್‌ಗಳು ಮತ್ತು ಅಣಬೆ ತಲಾಧಾರ. ಕನಿಷ್ಠ 30 KG ಇಂದ ವಾಣಿಜ್ಯ ಟನ್‌ಗಳವರೆಗೆ ಸರಬರಾಜು.",
    pellets_min_order: "ಕನಿಷ್ಠ 30 KG ಇಂದ ಹಲವಾರು ಟನ್‌ಗಳವರೆಗೆ ಸರಬರಾಜು",
    pellets_perk_1_title: "ಎಲ್ಲಾ ವಿಧದ ಪೆಲ್ಲೆಟ್‌ಗಳು: ತಲಾಧಾರ & ಬಯೋಮಾಸ್",
    pellets_perk_1_desc: "ಅಣಬೆ ಕೃಷಿಗೆ ಶುದ್ಧ ಹಾರ್ಡ್‌ವುಡ್ (ಓಕ್, ಬೀಚ್) ಪೆಲ್ಲೆಟ್‌ಗಳು ಮತ್ತು ಕೈಗಾರಿಕಾ ಬಾಯ್ಲರ್‌ಗಳಿಗೆ ಅಧಿಕ ಕ್ಯಾಲೋರಿ ಬಯೋಮಾಸ್ ಪೆಲ್ಲೆಟ್‌ಗಳು.",
    pellets_perk_2_title: "ತ್ವರಿತ ತೇವಾಂಶ & ಗರಿಷ್ಠ ಅಣಬೆ ಇಳುವರಿ",
    pellets_perk_2_desc: "ಬಿಸಿ ನೀರಿನಲ್ಲಿ ಸುಲಭವಾಗಿ ಕರಗಿ ಮೈಸಿಲಿಯಮ್ (ಬೀಜಕಣ) ತ್ವರಿತವಾಗಿ ಹರಡಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
    pellets_perk_3_title: "30 KG ಚೀಲದಿಂದ ಟನ್‌ಗಳವರೆಗೆ ಪೂರೈಕೆ",
    pellets_perk_3_desc: "ಮನೆ ಕೃಷಿಕರು ಹಾಗೂ ವಾಣಿಜ್ಯ ಅಣಬೆ ಫಾರ್ಮ್‌ಗಳಿಗೆ ಕರ್ನಾಟಕದಾದ್ಯಂತ ಸುರಕ್ಷಿತ ಚೀಲಗಳಲ್ಲಿ ರವಾನೆ.",
    btn_pellets_quote: "ಪೆಲ್ಲೆಟ್‌ಗಳ ವಿವರ ಹಾಗೂ ಆರ್ಡರ್ (ಕನಿಷ್ಠ 30 KG)",

    // About Us Section (The Organic Anabe Story)
    about_badge: "ನಮ್ಮ ಆರಂಭದ ಕಥೆ",
    about_title: "ಆರ್ಗ್ಯಾನಿಕ್ ಅಣಬೆ ಹೇಗೆ ಪ್ರಾರಂಭವಾಯಿತು",
    about_subtitle: "2026 ರಲ್ಲಿ ಮೂವರು ಸೋದರಸಂಬಂಧಿಗಳಿಂದ ಸ್ಥಾಪನೆಯಾದ ಸುಸ್ಥಿರ ಕೃಷಿ ಪಯಣ.",
    about_story_heading: "ನಮ್ಮ ತೋಟದ ಹುಟ್ಟಿನ ಕಥೆ",
    about_story_p1: "2026 ರಲ್ಲಿ ಮೂವರು ಸೋದರಸಂಬಂಧಿಗಳಿಂದ ಸ್ಥಾಪನೆಯಾದ 'ಆರ್ಗ್ಯಾನಿಕ್ ಅಣಬೆ', ಸುಸ್ಥಿರ ಕೃಷಿ ಮತ್ತು ತಾಜಾ, ಆರೋಗ್ಯಕರ ಆಹಾರದ ಹಂಚಿಕೆಯ ಉತ್ಸಾಹದಿಂದ ಪ್ರಾರಂಭವಾಯಿತು. ಅಸ್ತಿತ್ವದಲ್ಲಿದ್ದ ಆಶ್ರಯ ತಾಣವನ್ನೇ ಪುನರ್‌ರೂಪಿಸಿ, ಆಧುನಿಕ ಕೃಷಿ ತಂತ್ರಜ್ಞಾನ ಮತ್ತು ಪುರಾತನ ಸಾವಯವ ತತ್ವಗಳನ್ನು ಮೇಳೈಸಿದ ಅತ್ಯಾಧುನಿಕ ಅಣಬೆ ಕೃಷಿ ಕೇಂದ್ರವನ್ನಾಗಿ ನಾವು ಪರಿವರ್ತಿಸಿದ್ದೇವೆ.",
    about_commitment: "ನಮ್ಮ ಬದ್ಧತೆ ಸರಳ: 100% ನೈಸರ್ಗಿಕ, ಶೂನ್ಯ ರಾಸಾಯನಿಕ.",
    about_story_p2: "ನಾವು ಭತ್ತದ ಹುಲ್ಲು ಮತ್ತು ಹಾರ್ಡ್‌ವುಡ್ ಪೆಲ್ಲೆಟ್‌ಗಳಿಂದ ತಯಾರಿಸಿದ ಪ್ರೀಮಿಯಂ, ಸುಸ್ಥಿರ ತಲಾಧಾರಗಳಲ್ಲಿ ಅಣಬೆಗಳನ್ನು ಬೆಳೆಯುತ್ತೇವೆ. ಇದು ಬಲವಾದ ಬೆಳವಣಿಗೆ ಮತ್ತು ಸಮೃದ್ಧ ನೈಸರ್ಗಿಕ ರುಚಿಗೆ ಸೂಕ್ತ ವಾತಾವರಣ ಒದಗಿಸುತ್ತದೆ. ನಿಖರ ಪರಿಸರ ನಿಯಂತ್ರಣ ಮತ್ತು ಶೂನ್ಯ ರಾಸಾಯನಿಕ ವಿಧಾನಗಳ ಮೂಲಕ, ನಾವು ನಮ್ಮ ತೋಟದಿಂದ ನೇರವಾಗಿ ನಿಮ್ಮ ಊಟದ ಮೇಜಿಗೆ ಪರಿಶುದ್ಧ, ಪೌಷ್ಟಿಕ ಅಣಬೆಗಳನ್ನು ತಲುಪಿಸುತ್ತೇವೆ.",

    gallery_badge: "ನೈಜ ತೋಟದ ಚಿತ್ರಗಳು",
    gallery_title: "ಗ್ಯಾಲರಿ",
    gallery_subtitle: "ನಮ್ಮ ತಾಜಾ ಕೊಯ್ಲು, ಬೆಳೆ ಕೊಠಡಿಗಳು, ಹಾರ್ಡ್‌ವುಡ್ ಪೆಲ್ಲೆಟ್‌ಗಳು ಮತ್ತು ತೋಟದ ನೈಜ ಚಿತ್ರಗಳು.",

    // Local SEO & Delivery Coverage
    coverage_badge: "🌱 ತಾಜಾ ವಿತರಣೆ ಮತ್ತು ಕರ್ನಾಟಕ ಸರಬರಾಜು",
    coverage_title: "ತಾಜಾ ಅಣಬೆ ವಿತರಣೆ ಮತ್ತು ಕರ್ನಾಟಕ ಪೆಲ್ಲೆಟ್ಸ್ ಸಾಗಾಣಿಕೆ",
    coverage_subtitle: "ಮೈಸೂರು ಮತ್ತು ಮಂಡ್ಯದಲ್ಲಿ ಮಾತ್ರ ಮುಂಜಾನೆಯ ತಾಜಾ ಅಣಬೆ ವಿತರಣೆ • ಸಮಗ್ರ ಕರ್ನಾಟಕಕ್ಕೆ ಅಣಬೆ ಬೀಜ (Spawn) ಮತ್ತು ಪೆಲ್ಲೆಟ್‌ಗಳ ನೇರ ಸರಬರಾಜು.",
    cov_card1_badge: "ಮುಂಜಾನೆಯ ಕೊಯ್ಲು • ಮೈಸೂರು ಮತ್ತು ಮಂಡ್ಯ ಮಾತ್ರ",
    cov_card1_title: "ತಾಜಾ ಅಣಬೆಗಳು (ಕೇವಲ ಮೈಸೂರು ಮತ್ತು ಮಂಡ್ಯದಲ್ಲಿ ಮಾತ್ರ)",
    cov_card1_desc: "ಪ್ರತಿದಿನ ಮುಂಜಾನೆ 5:30 ಕ್ಕೆ ಕೊಯ್ಲು ಮಾಡಿ ತಾಜಾತನ ಉಳಿಸಲು ಕೇವಲ ಮೈಸೂರು ಮತ್ತು ಮಂಡ್ಯ ನಗರದ ವ್ಯಾಪ್ತಿಯಲ್ಲಿ ಮಾತ್ರ ತಲುಪಿಸಲಾಗುತ್ತದೆ. ಇತರ ಊರುಗಳಿಗೆ ತಾಜಾ ಅಣಬೆ ಆರ್ಡರ್ ತೆಗೆದುಕೊಳ್ಳಲಾಗುವುದಿಲ್ಲ.",
    cov_card2_badge: "ಕರ್ನಾಟಕ ರಾಜ್ಯವ್ಯಾಪಿ ಸರಬರಾಜು",
    cov_card2_title: "ಮಶ್ರೂಮ್ ಹಾರ್ಡ್‌ವುಡ್ ಪೆಲ್ಲೆಟ್‌ಗಳು (ಸಮಗ್ರ ಕರ್ನಾಟಕ)",
    cov_card2_desc: "ಅಣಬೆ ಬೆಳೆಗಾರರಿಗೆ ನೈಸರ್ಗಿಕ ಹಾರ್ಡ್‌ವುಡ್ ಪೆಲ್ಲೆಟ್‌ಗಳು. ಕನಿಷ್ಠ 30 KG ಮೂಟೆಗಳಿಂದ ವಾಣಿಜ್ಯ ಟನ್‌ಗಳವರೆಗೆ ಕರ್ನಾಟಕದ ಎಲ್ಲ ಜಿಲ್ಲೆಗಳಿಗೂ ನೇರ ರವಾನೆ.",
    faq_title: "ಸಾಮಾನ್ಯ ಪ್ರಶ್ನೋತ್ತರಗಳು (FAQ) • ಕರ್ನಾಟಕ ಅಣಬೆ ಮತ್ತು ಪೆಲ್ಲೆಟ್ ಮಾಹಿತಿ",

    contact_badge: "ನೇರ ಕೃಷಿಕರ ಸಂಪರ್ಕ",
    contact_title: "ಸಂಪರ್ಕಿಸಿ",
    contact_subtitle: "ತಾಜಾ ಅಣಬೆಗಳು ಅಥವಾ ಹಾರ್ಡ್‌ವುಡ್ ಪೆಲ್ಲೆಟ್ ಬಗ್ಗೆ ಮಾಹಿತಿಗಾಗಿ ನೇರವಾಗಿ ಕರೆ ಮಾಡಿ:",

    cart_title: "ನಿಮ್ಮ ಅಣಬೆ ಕಾರ್ಟ್",
    cart_empty: "ಕಾರ್ಟ್ ಖಾಲಿಯಾಗಿದೆ. ತಾಜಾ ಅಣಬೆಗಳನ್ನು ಆಯ್ಕೆ ಮಾಡಿ!",
    cart_qty: "ಪ್ರಮಾಣ",
    cart_subtotal: "ಉಪ ಮೊತ್ತ",
    cart_delivery: "ಡೆಲಿವರಿ",
    cart_delivery_free: "ನೇರ ತೋಟದ ಡೆಲಿವರಿ",
    cart_total: "ಒಟ್ಟು ಪಾವತಿಸಬೇಕಾದ ಮೊತ್ತ",
    cart_address_header: "ನಿಮ್ಮ ವಿಳಾಸ ನಮೂದಿಸಿ (ಕರ್ನಾಟಕ)",
    cart_input_name: "ಪೂರ್ಣ ಹೆಸರು",
    cart_input_phone: "ಮೊಬೈಲ್ ಸಂಖ್ಯೆ (WhatsApp)",
    cart_input_address: "ಮನೆ/ಫ್ಲಾಟ್ ನಂ, ರಸ್ತೆ, ಬಡಾವಣೆ",
    cart_input_city: "ಊರು / ಜಿಲ್ಲೆ & ಪಿನ್‌ಕೋಡ್",
    cart_input_notes: "ಲ್ಯಾಂಡ್‌ಮಾರ್ಕ್ ಅಥವಾ ಸೂಚನೆ",
    btn_checkout_wa: "ವಾಟ್ಸಾಪ್ ಮೂಲಕ ಆರ್ಡರ್ ಕನ್ಫರ್ಮ್ ಮಾಡಿ",

    wa_modal_badge: "ವಾಟ್ಸಾಪ್ ಕನೆಕ್ಟ್",
    wa_modal_title: "ಲ್ಯಾಪ್ಟಾಪ್ ಅಥವಾ ಕಂಪ್ಯೂಟರ್ ಬಳಸುತ್ತಿದ್ದೀರಾ?",
    wa_modal_desc: "ನಮ್ಮ ತೋಟದ ತಂಡವನ್ನು ಸಂಪರ್ಕಿಸಲು ಸುಲಭ ಆಯ್ಕೆಗಳು:",
    btn_wa_web: "ಬ್ರೌಸರ್‌ನಲ್ಲಿ WhatsApp Web ತೆರೆಯಿರಿ",
    wa_qr_title: "ಅಥವಾ ನಿಮ್ಮ ಮೊಬೈಲ್ ಕ್ಯಾಮೆರಾದಿಂದ QR ಕೋಡ್ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ:",
    wa_copy_btn: "ಆರ್ಡರ್ ವಿವರಗಳನ್ನು ಕಾಪಿ ಮಾಡಿ",
    wa_copy_success: "ಕಾಪಿ ಮಾಡಲಾಗಿದೆ!",

    thank_you_note: "ಆರೋಗ್ಯ ಮತ್ತು ಪ್ರಕೃತಿಯನ್ನು ಆಯ್ಕೆ ಮಾಡಿದ್ದಕ್ಕಾಗಿ ಧನ್ಯವಾದಗಳು",
    copyright: "© 2026 ಆರ್ಗ್ಯಾನಿಕ್ ಅಣಬೆ (Organic Anabe). ಸರ್ವ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ."
  }
};
