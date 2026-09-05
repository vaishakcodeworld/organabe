/**
 * ORGANIC ANABE (ಆರ್ಗ್ಯಾನಿಕ್ ಅಣಬೆ)
 * Master Culinary Recipe Database: 80 Curated Recipes (40 Oyster + 40 Milky)
 * Multiple Kebab & Tandoor Specialties included
 * Fully bilingual (English & Kannada)
 */

const allRecipesData = [
  {
    "id": "oyster_1",
    "type": "oyster",
    "category": "coastal",
    "img": "assets/recipe_oyster_sukka.jpg",
    "title_en": "Coastal Oyster Mushroom Sukka",
    "title_kn": "ಕರಾವಳಿ ಸಿಂಪಿ ಅಣಬೆ ಸುಕ್ಕ (Oyster Sukka)",
    "desc_en": "Tender shredded oyster mushrooms dry-roasted in freshly ground byadgi chillies, roasted coconut, and fragrant curry leaves.",
    "desc_kn": "ಹಸಿ ತೆಂಗಿನಕಾಯಿ ತುರಿ, ಬ್ಯಾಡಗಿ ಮೆಣಸಿನಕಾಯಿ ಮತ್ತು ಘಮಘಮಿಸುವ ಕರಿಬೇವು ಸೇರಿಸಿ ಹುರಿದ ಮಂಗಳೂರು ಶೈಲಿಯ ರುಚಿಕರ ಸುಕ್ಕ.",
    "time_en": "20 Mins",
    "time_kn": "20 ನಿಮಿಷ",
    "calories": "165 kcal",
    "servings_en": "3-4 Servings",
    "servings_kn": "3-4 ಜನರಿಗೆ",
    "tag_en": "Oyster • Karnataka Coastal",
    "tag_kn": "ಸಿಂಪಿ ಅಣಬೆ • ಕರಾವಳಿ ಶೈಲಿ",
    "ingredients_en": [
      "200g Fresh Organic Oyster Mushrooms (shredded along gills)",
      "1/2 cup Freshly grated coconut",
      "4-5 Roasted Byadgi dried red chillies",
      "1 tbsp Coriander seeds, 1/2 tsp Cumin & Fennel seeds",
      "1 sprig Fresh Curry leaves",
      "1 medium Onion (thinly sliced)",
      "1 tsp Cold-pressed coconut oil or ghee",
      "Salt to taste & squeeze of fresh lime"
    ],
    "ingredients_kn": [
      "200 ಗ್ರಾಂ ತಾಜಾ ಆರ್ಗ್ಯಾನಿಕ್ ಸಿಂಪಿ ಅಣಬೆ (ದಳಗಳಾಗಿ ಸೀಳಿದ್ದು)",
      "1/2 ಕಪ್ ತಾಜಾ ತುರಿದ ತೆಂಗಿನಕಾಯಿ",
      "4-5 ಹುರಿದ ಬ್ಯಾಡಗಿ ಒಣ ಮೆಣಸಿನಕಾಯಿ",
      "1 ಚಮಚ ಕೊತ್ತಂಬರಿ ಬೀಜ, 1/2 ಚಮಚ ಜೀರಿಗೆ ಮತ್ತು ಸೋಂಪು",
      "1 ಎಸಳು ತಾಜಾ ಕರಿಬೇವು",
      "1 ಈರುಳ್ಳಿ (ಉದ್ದಕ್ಕೆ ಹೆಚ್ಚಿದ್ದು)",
      "1 ಚಮಚ ತೆಂಗಿನ ಎಣ್ಣೆ ಅಥವಾ ತುಪ್ಪ",
      "ರುಚಿಗೆ ತಕ್ಕಷ್ಟು ಉಪ್ಪು ಮತ್ತು ಸ್ವಲ್ಪ ನಿಂಬೆರಸ"
    ],
    "instructions_en": [
      "Dry roast coriander, cumin, fennel, and byadgi chillies until aromatic; coarsely grind with grated coconut.",
      "Heat coconut oil in a pan, add curry leaves and sliced onions; sauté until golden translucent.",
      "Add shredded oyster mushrooms; cook on medium-high heat for 4-5 minutes as they release natural juices.",
      "Add the coarse spiced coconut mixture and salt. Stir-fry gently until dry and fragrant.",
      "Garnish with a squeeze of fresh lime juice. Serve hot with steamed rice or neer dosa!"
    ],
    "instructions_kn": [
      "ಕೊತ್ತಂಬರಿ, ಜೀರಿಗೆ, ಸೋಂಪು ಹಾಗೂ ಬ್ಯಾಡಗಿ ಮೆಣಸಿನಕಾಯಿಯನ್ನು ಹುರಿದು ತೆಂಗಿನತುರಿಯೊಂದಿಗೆ ತರಿತರಿಯಾಗಿ ರುಬ್ಬಿಕೊಳ್ಳಿ.",
      "ಬಾಣಲೆಯಲ್ಲಿ ತೆಂಗಿನ ಎಣ್ಣೆ ಕಾಯಿಸಿ ಕರಿಬೇವು ಮತ್ತು ಈರುಳ್ಳಿ ಹಾಕಿ ಹೊಂಬಣ್ಣ ಬರುವವರೆಗೆ ಹುರಿಯಿರಿ.",
      "ಸೀಳಿದ ಸಿಂಪಿ ಅಣಬೆ ಹಾಕಿ ಮಧ್ಯಮ ಉರಿಯಲ್ಲಿ 4-5 ನಿಮಿಷ ಬೇಯಿಸಿ.",
      "ರುಬ್ಬಿದ ತೆಂಗಿನ ಮಸಾಲೆ ಮತ್ತು ಉಪ್ಪು ಸೇರಿಸಿ ತೇವಾಂಶ ಇಂಗುವವರೆಗೆ ಚೆನ್ನಾಗಿ ಕೈಯಾಡಿಸಿ.",
      "ಮೇಲಿಂದ ಸ್ವಲ್ಪ ನಿಂಬೆರಸ ಹಿಂಡಿ, ಬಿಸಿಬಿಸಿ ನೀರುದೋಸೆ ಅಥವಾ ಅನ್ನದೊಂದಿಗೆ ಸವಿಯಿರಿ!"
    ],
    "tip_en": "Shred oyster mushrooms by hand along their gills rather than cutting with a knife to retain moisture.",
    "tip_kn": "ಸಿಂಪಿ ಅಣಬೆಯನ್ನು ಚಾಕುವಿನಿಂದ ಹೆಚ್ಚುವ ಬದಲು ಕೈಯಿಂದಲೇ ದಳಗಳಾಗಿ ಸೀಳಿದರೆ ಅದರ ನೈಸರ್ಗಿಕ ರಸ ಉಳಿಯುತ್ತದೆ."
  },
  {
    "id": "oyster_2",
    "type": "oyster",
    "category": "continental",
    "img": "assets/recipe_oyster_garlic.jpg",
    "title_en": "Pan-Seared Garlic Thyme Oyster Mushrooms",
    "title_kn": "ಬೆಳ್ಳುಳ್ಳಿ ಬೆಣ್ಣೆ ಸಿಂಪಿ ಅಣಬೆ ಫ್ರೈ (Garlic Thyme)",
    "desc_en": "Flash-seared in golden cold-pressed butter or olive oil with crushed malabar peppercorns, fresh green thyme, and toasted garlic cloves.",
    "desc_kn": "ತಾಜಾ ಬೆಣ್ಣೆ, ಜಜ್ಜಿದ ಬೆಳ್ಳುಳ್ಳಿ ಮತ್ತು ಕಾಳುಮೆಣಸಿನ ಪುಡಿಯೊಂದಿಗೆ ಕೇವಲ 10 ನಿಮಿಷಗಳಲ್ಲಿ ಹದವಾಗಿ ಹುರಿದ ಗರಿಗರಿ ಅಣಬೆ.",
    "time_en": "12 Mins",
    "time_kn": "12 ನಿಮಿಷ",
    "calories": "140 kcal",
    "servings_en": "2 Servings",
    "servings_kn": "2 ಜನರಿಗೆ",
    "tag_en": "Oyster • Continental Starter",
    "tag_kn": "ಸಿಂಪಿ ಅಣಬೆ • ಕಾಂಟಿನೆಂಟಲ್",
    "ingredients_en": [
      "200g Fresh Organic Oyster Mushrooms (whole petals)",
      "2 tbsp Salted Butter or Extra Virgin Olive Oil",
      "4-5 Cloves fresh Garlic (lightly crushed)",
      "2-3 Sprigs fresh Green Thyme",
      "1/2 tsp Freshly crushed Malabar Black Peppercorns",
      "Sea salt & flake salt for finishing"
    ],
    "ingredients_kn": [
      "200 ಗ್ರಾಂ ತಾಜಾ ಆರ್ಗ್ಯಾನಿಕ್ ಸಿಂಪಿ ಅಣಬೆ (ಪೂರ್ಣ ದಳಗಳು)",
      "2 ಚಮಚ ಬೆಣ್ಣೆ ಅಥವಾ ಆಲಿವ್ ಎಣ್ಣೆ",
      "4-5 ಎಸಳು ಬೆಳ್ಳುಳ್ಳಿ (ಜಜ್ಜಿದ್ದು)",
      "ಸ್ವಲ್ಪ ತಾಜಾ ಥೈಮ್ ಅಥವಾ ಕೊತ್ತಂಬರಿ",
      "1/2 ಚಮಚ ತಾಜಾ ಜಜ್ಜಿದ ಕಾಳುಮೆಣಸಿನ ಪುಡಿ",
      "ರುಚಿಗೆ ತಕ್ಕಷ್ಟು ಕಲ್ಲುಪ್ಪು"
    ],
    "instructions_en": [
      "Heat a heavy skillet or cast-iron pan over medium-high heat until hot. Add 1 tbsp oil/butter.",
      "Place oyster mushroom petals flat in a single layer without overcrowding. Press down gently with a spatula.",
      "Sear undisturbed for 3-4 minutes until the bottom edges turn deep golden and caramelized.",
      "Flip over, toss in the crushed garlic, fresh thyme, and remaining butter. Baste the foaming butter over the caps for 2 minutes.",
      "Finish with freshly cracked black pepper and flake sea salt. Serve immediately as a gourmet warm starter!"
    ],
    "instructions_kn": [
      "ಭಾರವಾದ ತವಾವನ್ನು ಬಿಸಿ ಮಾಡಿ 1 ಚಮಚ ಬೆಣ್ಣೆ ಅಥವಾ ಎಣ್ಣೆ ಹಾಕಿ.",
      "ಸಿಂಪಿ ಅಣಬೆಯ ದಳಗಳನ್ನು ತವಾದ ಮೇಲೆ ಹರಡಿ, ಚಮಚದಿಂದ ಲಘುವಾಗಿ ಒತ್ತಿ.",
      "3-4 ನಿಮಿಷ ಕೆಳಭಾಗ ಹೊಂಬಣ್ಣ ಮತ್ತು ಗರಿಗರಿಯಾಗುವವರೆಗೆ ತಿರುಗಿಸದೆ ಬೇಯಿಸಿ.",
      "ನಂತರ ಮಗುಚಿ ಹಾಕಿ, ಜಜ್ಜಿದ ಬೆಳ್ಳುಳ್ಳಿ, ಥೈಮ್ ಮತ್ತು ಉಳಿದ ಬೆಣ್ಣೆಯನ್ನು ಸೇರಿಸಿ 2 ನಿಮಿಷ ಸಾಟೇ ಮಾಡಿ.",
      "ಮೇಲಿಂದ ಕಾಳುಮೆಣಸಿನ ಪುಡಿ ಮತ್ತು ಉಪ್ಪು ಉದುರಿಸಿ ತಕ್ಷಣವೇ ಬಿಸಿಯಾಗಿ ಸವಿಯಿರಿ!"
    ],
    "tip_en": "Ensure the pan is sizzling hot before dropping the petals so they sear instead of steaming.",
    "tip_kn": "ತವಾ ಚೆನ್ನಾಗಿ ಕಾದ ನಂತರವೇ ಅಣಬೆ ಹಾಕಿ, ಇದರಿಂದ ನೀರು ಬಿಡದೆ ಗರಿಗರಿಯಾಗಿ ರೋಸ್ಟ್ ಆಗುತ್ತದೆ."
  },
  {
    "id": "oyster_3",
    "type": "oyster",
    "category": "snack",
    "img": "assets/recipe_pakoda.jpg",
    "title_en": "Crispy Golden Oyster Mushroom Pakoda",
    "title_kn": "ಗರಿಗರಿ ಸಿಂಪಿ ಅಣಬೆ ಪಕೋಡ (Crispy Pakoda)",
    "desc_en": "Delicate fan clusters dipped in spiced gram flour batter with carom seeds and deep-fried till crunchy golden.",
    "desc_kn": "ಕಡಲೆಹಿಟ್ಟು, ಓಂಕಾಳು, ಹಸಿಮೆಣಸು ಮತ್ತು ಅರಿಶಿನದ ಹಿಟ್ಟಿನಲ್ಲಿ ಮುಳುಗಿಸಿ ಗರಿಗರಿಯಾಗಿ ಕರಿದ ಸಂಜೆಯ ಬಿಸಿಬಿಸಿ ಚಹಾ ತಿಂಡಿ.",
    "time_en": "15 Mins",
    "time_kn": "15 ನಿಮಿಷ",
    "calories": "195 kcal",
    "servings_en": "3-4 Servings",
    "servings_kn": "3-4 ಜನರಿಗೆ",
    "tag_en": "Oyster • Evening Snack",
    "tag_kn": "ಸಿಂಪಿ ಅಣಬೆ • ತ್ವರಿತ ಲಘು ಉಪಹಾರ",
    "ingredients_en": [
      "200g Fresh Oyster Mushrooms (shredded into medium pieces)",
      "1 cup Besan (Gram flour)",
      "2 tbsp Rice flour (for extra crunch)",
      "1/2 tsp Ajwain (Carom seeds) & 1/2 tsp Kashmiri chilli powder",
      "2 Green chillies finely chopped, 1 sprig Curry leaves",
      "Oil for deep frying, Pinch of Hing (Asafoetida) & Salt"
    ],
    "ingredients_kn": [
      "200 ಗ್ರಾಂ ತಾಜಾ ಸಿಂಪಿ ಅಣಬೆ",
      "1 ಕಪ್ ಕಡಲೆಹಿಟ್ಟು",
      "2 ಚಮಚ ಅಕ್ಕಿಹಿಟ್ಟು (ಹೆಚ್ಚಿನ ಗರಿಗರಿತನಕ್ಕೆ)",
      "1/2 ಚಮಚ ಓಂಕಾಳು, 1/2 ಚಮಚ ಅಚ್ಚಖಾರದ ಪುಡಿ",
      "2 ಹಸಿಮೆಣಸಿನಕಾಯಿ, ಸ್ವಲ್ಪ ಕರಿಬೇವು",
      "ಕರೆಯಲು ಎಣ್ಣೆ, ಇಂಗು ಮತ್ತು ಉಪ್ಪು"
    ],
    "instructions_en": [
      "Whisk besan, rice flour, ajwain, chilli powder, chopped green chillies, curry leaves, hing, and salt with water into a thick coating batter.",
      "Heat cooking oil in a deep kadai over medium flame.",
      "Dip oyster mushroom clusters into the batter ensuring an even coat, then gently drop into hot oil.",
      "Fry for 3-4 minutes until golden crisp. Drain onto paper towels.",
      "Serve piping hot sprinkled with chaat masala alongside mint chutney and masala chai!"
    ],
    "instructions_kn": [
      "ಕಡಲೆಹಿಟ್ಟು, ಅಕ್ಕಿಹಿಟ್ಟು, ಓಂಕಾಳು, ಖಾರದಪುಡಿ, ಹಸಿಮೆಣಸು, ಕರಿಬೇವು, ಇಂಗು ಮತ್ತು ಉಪ್ಪು ಸೇರಿಸಿ ದೋಸೆ ಹಿಟ್ಟಿನ ಹದಕ್ಕೆ ಕಲಸಿಕೊಳ್ಳಿ.",
      "ಬಾಣಲೆಯಲ್ಲಿ ಎಣ್ಣೆಯನ್ನು ಕಾಯಲು ಇಡಿ.",
      "ಸಿಂಪಿ ಅಣಬೆ ತುಂಡುಗಳನ್ನು ಹಿಟ್ಟಿನಲ್ಲಿ ಅದ್ದಿ ಕಾದ ಎಣ್ಣೆಯಲ್ಲಿ ಹಾಕಿ.",
      "ಹೊಂಬಣ್ಣ ಬರುವವರೆಗೆ ಗರಿಗರಿಯಾಗಿ ಕರಿದು ತೆಗೆಯಿರಿ.",
      "ಮೇಲಿಂದ ಚಾಟ್ ಮಸಾಲ ಉದುರಿಸಿ, ಪುದೀನಾ ಚಟ್ನಿ ಹಾಗೂ ಬಿಸಿ ಚಹಾದೊಂದಿಗೆ ಸವಿಯಿರಿ!"
    ],
    "tip_en": "Adding a spoon of hot oil into the batter makes the pakodas stay crisp longer.",
    "tip_kn": "ಹಿಟ್ಟಿಗೆ ಒಂದು ಚಮಚ ಬಿಸಿ ಎಣ್ಣೆ ಸೇರಿಸಿದರೆ ಪಕೋಡ ದೀರ್ಘಕಾಲ ಗರಿಗರಿಯಾಗಿರುತ್ತದೆ."
  },
  {
    "id": "oyster_4",
    "type": "oyster",
    "category": "continental",
    "img": "assets/recipe_fettuccine.jpg",
    "title_en": "Creamy Vegan Cashew Oyster Fettuccine",
    "title_kn": "ಕ್ರೀಮೀ ಸಿಂಪಿ ಅಣಬೆ ಪಾಸ್ತಾ (Cashew Fettuccine)",
    "desc_en": "Silky cashew veloute cream sauce coated over al-dente fettuccine pasta with tender browned oyster mushroom shreds.",
    "desc_kn": "ಗೋಡಂಬಿ ಕ್ರೀಮ್ ಸಾಸ್ ಮತ್ತು ಬೆಳ್ಳುಳ್ಳಿಯೊಂದಿಗೆ ಹದವಾಗಿ ಬೇಯಿಸಿದ ಇಟಾಲಿಯನ್ ಶೈಲಿಯ ಪೌಷ್ಟಿಕ ಸಿಂಪಿ ಅಣಬೆ ಪಾಸ್ತಾ.",
    "time_en": "25 Mins",
    "time_kn": "25 ನಿಮಿಷ",
    "calories": "310 kcal",
    "servings_en": "2 Servings",
    "servings_kn": "2 ಜನರಿಗೆ",
    "tag_en": "Oyster • Vegan Gourmet",
    "tag_kn": "ಸಿಂಪಿ ಅಣಬೆ • ವೀಗನ್ ಪಾಸ್ತಾ",
    "ingredients_en": [
      "200g Fresh Oyster Mushrooms (shredded)",
      "200g Fettuccine or Penne Pasta",
      "1/2 cup Soaked raw cashews (blended smooth with 1/2 cup water)",
      "3 Garlic cloves minced, 1 tbsp Olive oil",
      "1/4 cup Nutritional yeast or vegan parmesan",
      "Fresh flat-leaf Italian parsley & crushed white pepper"
    ],
    "ingredients_kn": [
      "200 ಗ್ರಾಂ ತಾಜಾ ಸಿಂಪಿ ಅಣಬೆ",
      "200 ಗ್ರಾಂ ಪಾಸ್ತಾ",
      "1/2 ಕಪ್ ನೆನೆಸಿದ ಗೋಡಂಬಿ (ನುಣ್ಣಗೆ ರುಬ್ಬಿದ ಪೇಸ್ಟ್)",
      "3 ಎಸಳು ಬೆಳ್ಳುಳ್ಳಿ, 1 ಚಮಚ ಆಲಿವ್ ಎಣ್ಣೆ",
      "ಸ್ವಲ್ಪ ಕೊತ್ತಂಬರಿ ಅಥವಾ ಪಾರ್ಸ್ಲಿ",
      "ಬಿಳಿ ಕಾಳುಮೆಣಸಿನ ಪುಡಿ ಮತ್ತು ಉಪ್ಪು"
    ],
    "instructions_en": [
      "Boil pasta in salted water until al dente; reserve 1/2 cup pasta cooking water.",
      "Sauté shredded oyster mushrooms in olive oil and minced garlic until golden brown.",
      "Pour in cashew cream and reserved pasta water; simmer gently for 2 minutes to create a glossy sauce.",
      "Toss in cooked fettuccine pasta, season with salt and white pepper.",
      "Garnish with chopped fresh parsley and serve warm!"
    ],
    "instructions_kn": [
      "ಪಾಸ್ತಾವನ್ನು ಉಪ್ಪು ಬೆರೆಸಿದ ನೀರಿನಲ್ಲಿ ಬೇಯಿಸಿ ನೀರು ಬಸಿದುಕೊಳ್ಳಿ.",
      "ಬಾಣಲೆಯಲ್ಲಿ ಆಲಿವ್ ಎಣ್ಣೆ ಮತ್ತು ಬೆಳ್ಳುಳ್ಳಿ ಹಾಕಿ, ಸಿಂಪಿ ಅಣಬೆಯನ್ನು ಹೊಂಬಣ್ಣಕ್ಕೆ ಹುರಿಯಿರಿ.",
      "ಗೋಡಂಬಿ ಕ್ರೀಮ್ ಸೇರಿಸಿ ಸಣ್ಣ ಉರಿಯಲ್ಲಿ 2 ನಿಮಿಷ ಬೇಯಿಸಿ.",
      "ಬೇಯಿಸಿದ ಪಾಸ್ತಾ ಹಾಕಿ ಚೆನ್ನಾಗಿ ಮಿಕ್ಸ್ ಮಾಡಿ, ಕಾಳುಮೆಣಸಿನ ಪುಡಿ ಉದುರಿಸಿ ಬಿಸಿಯಾಗಿ ಸವಿಯಿರಿ!"
    ],
    "tip_en": "Reserve starchy pasta water to emulsify the cashew cream into restaurant-smooth consistency.",
    "tip_kn": "ಪಾಸ್ತಾ ಬೇಯಿಸಿದ ಸ್ವಲ್ಪ ನೀರನ್ನು ಕ್ರೀಮ್‌ಗೆ ಸೇರಿಸಿದರೆ ಸಾಸ್ ಅತ್ಯಂತ ಮೃದುವಾಗಿ ಬರುತ್ತದೆ."
  },
  {
    "id": "oyster_5",
    "type": "oyster",
    "category": "dry",
    "img": "assets/recipe_ghee_roast.jpg",
    "title_en": "Kundapura Oyster Mushroom Ghee Roast",
    "title_kn": "ಕುಂದಾಪುರ ಸಿಂಪಿ ಅಣಬೆ ಘೀ ರೋಸ್ಟ್ (Ghee Roast)",
    "desc_en": "Shredded oyster mushrooms simmered in slow-roasted Kundapura red chilli masala paste with pure desi cow ghee.",
    "desc_kn": "ಶುದ್ಧ ಹಸುವಿನ ತುಪ್ಪ, ಹುರಿದ ಬ್ಯಾಡಗಿ ಮೆಣಸು ಮತ್ತು ಮಸಾಲೆ ಪೇಸ್ಟ್‌ನಲ್ಲಿ ಹದವಾಗಿ ಬೇಯಿಸಿದ ಕುಂದಾಪುರ ಸ್ಪೆಷಲ್ ಘೀ ರೋಸ್ಟ್.",
    "time_en": "25 Mins",
    "time_kn": "25 ನಿಮಿಷ",
    "calories": "230 kcal",
    "servings_en": "3 Servings",
    "servings_kn": "3 ಜನರಿಗೆ",
    "tag_en": "Oyster • Coastal Karnataka",
    "tag_kn": "ಸಿಂಪಿ ಅಣಬೆ • ಘೀ ರೋಸ್ಟ್",
    "ingredients_en": [
      "200g Fresh Oyster Mushrooms",
      "3 tbsp Pure Desi Ghee",
      "6 Byadgi dry red chillies & 2 Guntur chillies",
      "1 tsp Coriander seeds, 1/2 tsp Cumin, 1/4 tsp Fenugreek (Methi) seeds",
      "1 tbsp Tamarind pulp & 1 tsp Jaggery",
      "1 sprig Curry leaves & Salt to taste"
    ],
    "ingredients_kn": [
      "200 ಗ್ರಾಂ ತಾಜಾ ಸಿಂಪಿ ಅಣಬೆ",
      "3 ಚಮಚ ಶುದ್ಧ ಹಸುವಿನ ತುಪ್ಪ",
      "6 ಬ್ಯಾಡಗಿ ಮೆಣಸಿನಕಾಯಿ, 2 ಖಾರದ ಗುಂಟೂರು ಮೆಣಸು",
      "1 ಚಮಚ ಕೊತ್ತಂಬರಿ ಬೀಜ, 1/2 ಚಮಚ ಜೀರಿಗೆ, ಕಾಲು ಚಮಚ ಮೆಂತ್ಯ",
      "1 ಚಮಚ ಹುಣಸೆಹಣ್ಣಿನ ರಸ, 1 ಚಮಚ ಬೆಲ್ಲ",
      "ಕರಿಬೇವು ಮತ್ತು ಉಪ್ಪು"
    ],
    "instructions_en": [
      "Roast dry spices and chillies lightly in 1 tsp ghee; grind with tamarind pulp and jaggery into a thick fiery red paste.",
      "Heat 2 tbsp ghee in a heavy pan, add curry leaves and the roast masala paste; fry until ghee separates.",
      "Add oyster mushrooms and salt. Toss well to coat every petal in the rich red paste.",
      "Roast on medium flame for 6-8 minutes until glossy and fragrant.",
      "Drizzle a final spoon of ghee and serve with Neer Dosa or Appam!"
    ],
    "instructions_kn": [
      "ಮೆಣಸಿನಕಾಯಿ ಹಾಗೂ ಮಸಾಲೆಗಳನ್ನು ತುಪ್ಪದಲ್ಲಿ ಹುರಿದು, ಹುಣಸೆರಸ ಮತ್ತು ಬೆಲ್ಲ ಸೇರಿಸಿ ನುಣ್ಣಗೆ ರುಬ್ಬಿಕೊಳ್ಳಿ.",
      "ಬಾಣಲೆಯಲ್ಲಿ ತುಪ್ಪ ಕಾಯಿಸಿ, ಕರಿಬೇವು ಮತ್ತು ರುಬ್ಬಿದ ಮಸಾಲೆ ಹಾಕಿ ತುಪ್ಪ ತೇಲುವವರೆಗೆ ಹುರಿಯಿರಿ.",
      "ಸಿಂಪಿ ಅಣಬೆ ಮತ್ತು ಉಪ್ಪು ಸೇರಿಸಿ ಚೆನ್ನಾಗಿ ಮಗುಚಿ 6-8 ನಿಮಿಷ ರೋಸ್ಟ್ ಮಾಡಿ.",
      "ಕೊನೆಯಲ್ಲಿ ಇನ್ನೊಂದು ಚಮಚ ತುಪ್ಪ ಸೇರಿಸಿ, ಬಿಸಿಬಿಸಿ ನೀರುದೋಸೆ ಅಥವಾ ರೊಟ್ಟಿಯೊಂದಿಗೆ ಬಡಿಸಿ!"
    ],
    "tip_en": "Use Byadgi chillies generously for deep royal crimson color without excessive pungency.",
    "tip_kn": "ಬ್ಯಾಡಗಿ ಮೆಣಸು ಬಳಸುವುದರಿಂದ ಹೆಚ್ಚು ಖಾರವಿಲ್ಲದೆ ಆಕರ್ಷಕ ಕೆಂಪು ಬಣ್ಣ ಬರುತ್ತದೆ."
  },
  {
    "id": "oyster_6",
    "type": "oyster",
    "category": "dry",
    "img": "assets/recipe_oyster_garlic.jpg",
    "title_en": "Spicy Kerala Oyster Mushroom Pepper Fry",
    "title_kn": "ಖಾರವಾದ ಸಿಂಪಿ ಅಣಬೆ ಪೆಪ್ಪರ್ ಫ್ರೈ (Pepper Fry)",
    "desc_en": "Quick stir-fry of fresh oyster mushrooms with cracked black pepper, curry leaves, thinly sliced coconut, and shallots.",
    "desc_kn": "ತೆಂಗಿನಕಾಯಿ ತುಂಡುಗಳು, ಸಾಂಬಾರ್ ಈರುಳ್ಳಿ, ಕರಿಬೇವು ಹಾಗೂ ಜಜ್ಜಿದ ಕಾಳುಮೆಣಸಿನೊಂದಿಗೆ ತಯಾರಿಸಿದ ಕೇರಳ ಶೈಲಿಯ ಖಾರ ಅಣಬೆ ಫ್ರೈ.",
    "time_en": "15 Mins",
    "time_kn": "15 ನಿಮಿಷ",
    "calories": "155 kcal",
    "servings_en": "2-3 Servings",
    "servings_kn": "2-3 ಜನರಿಗೆ",
    "tag_en": "Oyster • Malabar Special",
    "tag_kn": "ಸಿಂಪಿ ಅಣಬೆ • ಮಲಬಾರ್ ಶೈಲಿ",
    "ingredients_en": [
      "200g Fresh Oyster Mushrooms (cut into strips)",
      "1.5 tbsp Coconut oil",
      "1 tbsp Freshly crushed black peppercorns",
      "8-10 Shallots (sliced)",
      "2 tbsp Thin coconut slices (Thenga kothu)",
      "1 sprig Curry leaves, 1/2 tsp Turmeric, Salt"
    ],
    "ingredients_kn": [
      "200 ಗ್ರಾಂ ತಾಜಾ ಸಿಂಪಿ ಅಣಬೆ",
      "1.5 ಚಮಚ ತೆಂಗಿನ ಎಣ್ಣೆ",
      "1 ಚಮಚ ಜಜ್ಜಿದ ಕಾಳುಮೆಣಸು",
      "8-10 ಸಣ್ಣ ಈರುಳ್ಳಿ",
      "2 ಚಮಚ ಸಣ್ಣಗೆ ಹೆಚ್ಚಿದ ತೆಂಗಿನಕಾಯಿ ತುಂಡುಗಳು",
      "ಕರಿಬೇವು, ಅರಿಶಿನ ಮತ್ತು ಉಪ್ಪು"
    ],
    "instructions_en": [
      "Heat coconut oil; fry coconut slices until golden, then add shallots and curry leaves.",
      "Add oyster mushroom strips, turmeric, and salt. Sauté on high flame for 4 minutes.",
      "Stir in freshly cracked black pepper. Toss until dry and aromatic.",
      "Serve with steamed red rice or Malabar parotta!"
    ],
    "instructions_kn": [
      "ತೆಂಗಿನ ಎಣ್ಣೆಯಲ್ಲಿ ಕಾಯಿ ತುಂಡುಗಳನ್ನು ಹೊಂಬಣ್ಣಕ್ಕೆ ಹುರಿದು, ಈರುಳ್ಳಿ ಮತ್ತು ಕರಿಬೇವು ಸೇರಿಸಿ.",
      "ಅಣಬೆ, ಅರಿಶಿನ ಮತ್ತು ಉಪ್ಪು ಹಾಕಿ 4 ನಿಮಿಷ ಹುರಿಯಿರಿ.",
      "ಜಜ್ಜಿದ ಕಾಳುಮೆಣಸು ಸೇರಿಸಿ ಚೆನ್ನಾಗಿ ಕೈಯಾಡಿಸಿ ಅನ್ನ ಅಥವಾ ಪರೋಟದೊಂದಿಗೆ ಸವಿಯಿರಿ!"
    ],
    "tip_en": "Thin coconut bites add a wonderful authentic Kerala crunch.",
    "tip_kn": "ತೆಂಗಿನಕಾಯಿ ಚೂರುಗಳು ಅಣಬೆಯ ಜೊತೆ ಅದ್ಭುತ ಗರಿಗರಿ ರುಚಿ ನೀಡುತ್ತವೆ."
  },
  {
    "id": "oyster_7",
    "type": "oyster",
    "category": "soup",
    "img": "assets/recipe_broth.jpg",
    "title_en": "Ayurvedic Oyster Mushroom Immunity Broth",
    "title_kn": "ಆಯುರ್ವೇದಿಕ್ ಸಿಂಪಿ ಅಣಬೆ ಇಮ್ಯೂನಿಟಿ ಸೂಪ್ (Broth)",
    "desc_en": "Golden healing broth infused with fresh crushed turmeric rhizome, ginger, black pepper, and nutrient-dense oyster mushroom petals.",
    "desc_kn": "ಹಸಿ ಅರಿಶಿನ, ಶುಂಠಿ, ಕಾಳುಮೆಣಸು ಮತ್ತು ಸಿಂಪಿ ಅಣಬೆ ದಳಗಳಿಂದ ತಯಾರಿಸಿದ ರೋಗನಿರೋಧಕ ಶಕ್ತಿ ಹೆಚ್ಚಿಸುವ ಬಿಸಿ ಔಷಧೀಯ ಸೂಪ್.",
    "time_en": "18 Mins",
    "time_kn": "18 ನಿಮಿಷ",
    "calories": "85 kcal",
    "servings_en": "3 Servings",
    "servings_kn": "3 ಜನರಿಗೆ",
    "tag_en": "Oyster • Immunity & Wellness",
    "tag_kn": "ಸಿಂಪಿ ಅಣಬೆ • ಆರೋಗ್ಯಕರ ಸೂಪ್",
    "ingredients_en": [
      "200g Fresh Oyster Mushrooms (shredded)",
      "1 inch Fresh Turmeric root (grated) or 1/2 tsp pure turmeric",
      "1 inch Fresh Ginger (bruised)",
      "1 tsp Whole black peppercorns (lightly crushed)",
      "3-4 Garlic cloves, 1 sprig Tulsi or Coriander leaves",
      "4 cups Mountain spring water, Rock salt to taste"
    ],
    "ingredients_kn": [
      "200 ಗ್ರಾಂ ತಾಜಾ ಸಿಂಪಿ ಅಣಬೆ",
      "1 ಇಂಚು ಹಸಿ ಅರಿಶಿನ (ತುರಿದದ್ದು)",
      "1 ಇಂಚು ಹಸಿಶುಂಠಿ (ಜಜ್ಜಿದ್ದು)",
      "1 ಚಮಚ ಕಾಳುಮೆಣಸು, 3-4 ಎಸಳು ಬೆಳ್ಳುಳ್ಳಿ",
      "ಸ್ವಲ್ಪ ತುಳಸಿ ಅಥವಾ ಕೊತ್ತಂಬರಿ",
      "4 ಲೋಟ ನೀರು ಮತ್ತು ಕಲ್ಲುಪ್ಪು"
    ],
    "instructions_en": [
      "In an earthen pot or saucepan, bring water to boil with bruised ginger, garlic, turmeric, and peppercorns.",
      "Add shredded oyster mushrooms and simmer on low heat for 12 minutes to release bioactive beta-glucans.",
      "Season with rock salt and a dash of cold-pressed sesame oil or ghee.",
      "Strain into cups or enjoy with the tender mushroom petals warm!"
    ],
    "instructions_kn": [
      "ಪಾತ್ರೆಯಲ್ಲಿ ನೀರು ಹಾಕಿ ಶುಂಠಿ, ಬೆಳ್ಳುಳ್ಳಿ, ಹಸಿ ಅರಿಶಿನ ಮತ್ತು ಕಾಳುಮೆಣಸು ಸೇರಿಸಿ ಕುದಿಸಿ.",
      "ಸಿಂಪಿ ಅಣಬೆ ಹಾಕಿ ಸಣ್ಣ ಉರಿಯಲ್ಲಿ 12 ನಿಮಿಷ ಕುದಿಯಲು ಬಿಡಿ.",
      "ಕಲ್ಲುಪ್ಪು ಮತ್ತು ಸ್ವಲ್ಪ ತುಪ್ಪ ಸೇರಿಸಿ ಬಿಸಿಬಿಸಿಯಾಗಿ ಕುಡಿಯಿರಿ!"
    ],
    "tip_en": "Drink warm during seasonal changes for immediate respiratory relief and immune protection.",
    "tip_kn": "ನೆಗಡಿ, ಕೆಮ್ಮು ಇರುವಾಗ ಈ ಬಿಸಿ ಸೂಪ್ ಕುಡಿದರೆ ತಕ್ಷಣ ಶಮನ ಸಿಗುತ್ತದೆ."
  },
  {
    "id": "oyster_8",
    "type": "oyster",
    "category": "snack",
    "img": "assets/recipe_oyster_sukka.jpg",
    "title_en": "Street-Style Crispy Chilli Oyster Mushroom",
    "title_kn": "ಕ್ರಿಸ್ಪಿ ಚಿಲ್ಲಿ ಸಿಂಪಿ ಅಣಬೆ (Chilli Mushroom)",
    "desc_en": "Indo-Chinese street-style crunchy coated oyster mushrooms tossed in spicy garlic soy reduction, bell peppers, and scallions.",
    "desc_kn": "ಕ್ಯಾಪ್ಸಿಕಮ್, ಹಸಿಮೆಣಸು, ಬೆಳ್ಳುಳ್ಳಿ ಮತ್ತು ಸಾಸ್‌ನೊಂದಿಗೆ ತಯಾರಿಸಿದ ಚೈನೀಸ್ ಶೈಲಿಯ ಗರಿಗರಿ ಚಿಲ್ಲಿ ಅಣಬೆ ಸ್ಟಾರ್ಟರ್.",
    "time_en": "18 Mins",
    "time_kn": "18 ನಿಮಿಷ",
    "calories": "210 kcal",
    "servings_en": "3 Servings",
    "servings_kn": "3 ಜನರಿಗೆ",
    "tag_en": "Oyster • Indo-Chinese",
    "tag_kn": "ಸಿಂಪಿ ಅಣಬೆ • ಇಂಡೋ-ಚೈನೀಸ್",
    "ingredients_en": [
      "200g Fresh Oyster Mushrooms (dry fluted pieces)",
      "2 tbsp Cornstarch + 2 tbsp All-purpose flour",
      "1 Bell Pepper (diced) & 1 Onion (cubed)",
      "3 Green chillies slit, 1 tbsp Garlic finely chopped",
      "1 tbsp Dark Soy Sauce & 1 tbsp Chilli Garlic paste",
      "Spring onion greens for garnish"
    ],
    "ingredients_kn": [
      "200 ಗ್ರಾಂ ಸಿಂಪಿ ಅಣಬೆ",
      "2 ಚಮಚ ಕಾರ್ನ್‌ಫ್ಲೋರ್ + 2 ಚಮಚ ಮೈದಾ",
      "1 ಕ್ಯಾಪ್ಸಿಕಮ್, 1 ಈರುಳ್ಳಿ",
      "3 ಹಸಿಮೆಣಸು, 1 ಚಮಚ ಬೆಳ್ಳುಳ್ಳಿ",
      "ಸೋಯಾ ಸಾಸ್ ಮತ್ತು ಚಿಲ್ಲಿ ಸಾಸ್",
      "ಈರುಳ್ಳಿ ಹೂವು (ಸ್ಪ್ರಿಂಗ್ ಆನಿಯನ್)"
    ],
    "instructions_en": [
      "Coat oyster mushrooms in cornstarch flour slurry and deep fry till extra crispy; drain.",
      "Heat a wok; stir-fry minced garlic, green chillies, onions, and bell peppers on high flame for 2 minutes.",
      "Add soy sauce, chilli paste, and a splash of water; boil into a glaze.",
      "Toss the crispy fried mushrooms into the glaze quickly so they remain crunchy.",
      "Garnish with spring onions and serve immediately!"
    ],
    "instructions_kn": [
      "ಅಣಬೆಯನ್ನು ಹಿಟ್ಟಿನಲ್ಲಿ ಅದ್ದಿ ಗರಿಗರಿಯಾಗಿ ಕರಿದು ತೆಗೆಯಿರಿ.",
      "ದೊಡ್ಡ ಬಾಣಲೆಯಲ್ಲಿ ಬೆಳ್ಳುಳ್ಳಿ, ಹಸಿಮೆಣಸು, ಈರುಳ್ಳಿ ಮತ್ತು ಕ್ಯಾಪ್ಸಿಕಮ್ ಅನ್ನು ತೀವ್ರ ಉರಿಯಲ್ಲಿ ಹುರಿಯಿರಿ.",
      "ಸಾಸ್ ಸೇರಿಸಿ ಕುದಿಸಿ, ನಂತರ ಕರಿದ ಅಣಬೆ ಹಾಕಿ ವೇಗವಾಗಿ ತಿರುವಿ ಬಿಸಿಯಾಗಿ ಸವಿಯಿರಿ!"
    ],
    "tip_en": "Toss in the glaze only right before serving to maintain maximum crunch.",
    "tip_kn": "ತಿನ್ನುವ ಮುನ್ನವೇ ಸಾಸ್‌ನಲ್ಲಿ ಮಿಕ್ಸ್ ಮಾಡಿದರೆ ಗರಿಗರಿತನ ಉಳಿಯುತ್ತದೆ."
  },
  {
    "id": "oyster_9",
    "type": "oyster",
    "category": "curry",
    "img": "assets/recipe_sambar.jpg",
    "title_en": "Karnataka Halli Style Oyster Mushroom Saaru",
    "title_kn": "ಅಪ್ಪಟ ಕರ್ನಾಟಕ ಸಿಂಪಿ ಅಣಬೆ ಸಾರು (Village Saaru)",
    "desc_en": "Traditional rustic village style thin aromatic broth simmered with stone-ground roasted spices, garlic, tomato, and fresh coriander.",
    "desc_kn": "ಹಳ್ಳಿಯ ಶೈಲಿಯ ರುಬ್ಬಿದ ಮಸಾಲೆ, ಬೆಳ್ಳುಳ್ಳಿ, ಟೊಮೆಟೊ ಮತ್ತು ಕೊತ್ತಂಬರಿ ಸೊಪ್ಪಿನ ಘಮಘಮಿಸುವ ಸಿಂಪಿ ಅಣಬೆ ಸಾರು. ಮುದ್ದೆ ಮತ್ತು ಅನ್ನಕ್ಕೆ ಬೆಸ್ಟ್!",
    "time_en": "25 Mins",
    "time_kn": "25 ನಿಮಿಷ",
    "calories": "130 kcal",
    "servings_en": "4 Servings",
    "servings_kn": "4 ಜನರಿಗೆ",
    "tag_en": "Oyster • Traditional Karnataka",
    "tag_kn": "ಸಿಂಪಿ ಅಣಬೆ • ಹಳ್ಳಿ ಸಾರು",
    "ingredients_en": [
      "200g Fresh Oyster Mushrooms (shredded)",
      "1 medium Tomato chopped, 1 small Onion",
      "6-8 Garlic cloves, 1 tbsp Coriander seeds",
      "1/2 tsp Cumin seeds, 1/2 tsp Black pepper",
      "1/4 cup Fresh grated coconut, Small lemon size tamarind",
      "Fresh coriander leaves & Salt to taste"
    ],
    "ingredients_kn": [
      "200 ಗ್ರಾಂ ತಾಜಾ ಸಿಂಪಿ ಅಣಬೆ",
      "1 ಟೊಮೆಟೊ, 1 ಈರುಳ್ಳಿ",
      "6-8 ಎಸಳು ಬೆಳ್ಳುಳ್ಳಿ, 1 ಚಮಚ ಕೊತ್ತಂಬರಿ ಬೀಜ",
      "ಜೀರಿಗೆ, ಕಾಳುಮೆಣಸು, ತೆಂಗಿನತುರಿ, ಹುಣಸೆಹಣ್ಣು",
      "ಕೊತ್ತಂಬರಿ ಸೊಪ್ಪು ಮತ್ತು ಉಪ್ಪು"
    ],
    "instructions_en": [
      "Roast coriander seeds, cumin, pepper, garlic, and onion; grind with coconut and tamarind to a smooth saaru paste.",
      "In a vessel, boil the ground paste with chopped tomato, salt, and 3 cups of water.",
      "Once boiling vigorously, add the shredded oyster mushrooms. Simmer for 6-8 minutes.",
      "Temper with mustard seeds and curry leaves in hot ghee. Serve with hot Ragi Mudde or steamed white rice!"
    ],
    "instructions_kn": [
      "ಕೊತ್ತಂಬರಿ, ಜೀರಿಗೆ, ಕಾಳುಮೆಣಸು, ಬೆಳ್ಳುಳ್ಳಿ ಹುರಿದು ತೆಂಗಿನತುರಿ ಮತ್ತು ಹುಣಸೆಹಣ್ಣಿನೊಂದಿಗೆ ನುಣ್ಣಗೆ ರುಬ್ಬಿಕೊಳ್ಳಿ.",
      "ಪಾತ್ರೆಯಲ್ಲಿ ಮಸಾಲೆ, ಟೊಮೆಟೊ, ನೀರು ಮತ್ತು ಉಪ್ಪು ಹಾಕಿ ಚೆನ್ನಾಗಿ ಕುದಿಸಿ.",
      "ನಂತರ ಸಿಂಪಿ ಅಣಬೆ ಸೇರಿಸಿ 6-8 ನಿಮಿಷ ಕುದಿಸಿ.",
      "ತುಪ್ಪದಲ್ಲಿ ಸಾಸಿವೆ, ಕರಿಬೇವು ಒಗ್ಗರಣೆ ಹಾಕಿ ಬಿಸಿ ರಾಗಿ ಮುದ್ದೆ ಅಥವಾ ಅನ್ನದೊಂದಿಗೆ ಸವಿಯಿರಿ!"
    ],
    "tip_en": "Pair this authentic saaru with hot steaming Ragi Mudde for the quintessential Karnataka farmhouse experience.",
    "tip_kn": "ಈ ಸಾರನ್ನು ಬಿಸಿಬಿಸಿ ರಾಗಿ ಮುದ್ದೆಯ ಜೊತೆ ಸವಿಯಲು ಅತ್ಯಂತ ಅದ್ಭುತ."
  },
  {
    "id": "oyster_10",
    "type": "oyster",
    "category": "snack",
    "img": "assets/recipe_pakoda.jpg",
    "title_en": "Panko-Crusted Crunchy Oyster Mushroom Cutlets",
    "title_kn": "ಸಿಂಪಿ ಅಣಬೆ ವೆಜ್ ಕಟ್ಲೆಟ್ (Panko Cutlets)",
    "desc_en": "Mashed potatoes and spiced sautéed oyster mushrooms shaped into patties, coated with Japanese panko breadcrumbs and pan-toasted.",
    "desc_kn": "ಬೇಯಿಸಿದ ಆಲೂಗಡ್ಡೆ ಮತ್ತು ಮಸಾಲೆ ಅಣಬೆ ಮಿಶ್ರಣದಿಂದ ತಯಾರಿಸಿದ ಬ್ರೆಡ್‌ಕ್ರಂಬ್ಸ್ ಲೇಪಿತ ಗರಿಗರಿ ಕಟ್ಲೆಟ್.",
    "time_en": "25 Mins",
    "time_kn": "25 ನಿಮಿಷ",
    "calories": "180 kcal",
    "servings_en": "4 Servings",
    "servings_kn": "4 ಜನರಿಗೆ",
    "tag_en": "Oyster • Evening Snack",
    "tag_kn": "ಸಿಂಪಿ ಅಣಬೆ • ಸ್ನ್ಯಾಕ್ಸ್",
    "ingredients_en": [
      "200g Oyster mushrooms (finely chopped & sautéed)",
      "2 medium Boiled potatoes (mashed)",
      "1/2 tsp Garam masala, 1/2 tsp Amchur (dry mango powder)",
      "2 Green chillies finely chopped, Handful chopped coriander",
      "Panko breadcrumbs for coating & Oil for shallow frying"
    ],
    "ingredients_kn": [
      "200 ಗ್ರಾಂ ಸಿಂಪಿ ಅಣಬೆ (ಸಣ್ಣಗೆ ಹೆಚ್ಚಿ ಹುರಿದದ್ದು)",
      "2 ಬೇಯಿಸಿದ ಆಲೂಗಡ್ಡೆ (ಮ್ಯಾಶ್ ಮಾಡಿದ್ದು)",
      "ಗರಂ ಮಸಾಲ, ಆಮ್‌ಚೂರ್ ಪುಡಿ, ಹಸಿಮೆಣಸು",
      "ಕೊತ್ತಂಬರಿ ಸೊಪ್ಪು ಮತ್ತು ಬ್ರೆಡ್‌ಕ್ರಂಬ್ಸ್",
      "ಶಾಲೋ ಫ್ರೈ ಮಾಡಲು ಎಣ್ಣೆ ಮತ್ತು ಉಪ್ಪು"
    ],
    "instructions_en": [
      "Combine sautéed oyster mushrooms, mashed potatoes, green chillies, spices, coriander, and salt.",
      "Shape into round patties. Dip in light cornstarch slurry, then coat generously in panko breadcrumbs.",
      "Pan-fry in a shallow skillet with a drizzle of oil until crust turns deep golden-brown on both sides.",
      "Serve hot with tangy tomato ketchup or mint dip!"
    ],
    "instructions_kn": [
      "ಹುರಿದ ಅಣಬೆ, ಆಲೂಗಡ್ಡೆ, ಮಸಾಲೆಗಳು ಹಾಗೂ ಉಪ್ಪನ್ನು ಚೆನ್ನಾಗಿ ಬೆರೆಸಿ ಕಟ್ಲೆಟ್ ಆಕಾರಕ್ಕೆ ತಟ್ಟಿ.",
      "ಬ್ರೆಡ್‌ಕ್ರಂಬ್ಸ್‌ನಲ್ಲಿ ಹೊರಳಿಸಿ ತವಾದ ಮೇಲೆ ಸ್ವಲ್ಪ ಎಣ್ಣೆ ಹಾಕಿ ಎರಡೂ ಕಡೆ ಹೊಂಬಣ್ಣ ಬರುವವರೆಗೆ ಬೇಯಿಸಿ.",
      "ಟೊಮೆಟೊ ಸಾಸ್ ಜೊತೆ ಸಂಜೆಯ ತಿಂಡಿಯಾಗಿ ಸವಿಯಿರಿ!"
    ],
    "tip_en": "Chop the mushrooms fine and cook off all their water before mixing with potatoes.",
    "tip_kn": "ಅಣಬೆಯ ತೇವಾಂಶ ಇಂಗಿದ ನಂತರವೇ ಆಲೂಗಡ್ಡೆಯೊಂದಿಗೆ ಬೆರೆಸಿ."
  },
  {
    "id": "oyster_11",
    "type": "oyster",
    "category": "snack",
    "img": "assets/recipe_oyster_sukka.jpg",
    "title_en": "Dry Oyster Mushroom Manchurian",
    "title_kn": "ಸಿಂಪಿ ಅಣಬೆ ಮಂಚೂರಿಯನ್ (Dry Manchurian)",
    "desc_en": "Crispy batter-fried oyster mushrooms tossed with finely chopped ginger, garlic, green chillies, and savory dark soy scallion sauce.",
    "desc_kn": "ಶುಂಠಿ, ಬೆಳ್ಳುಳ್ಳಿ, ಹಸಿಮೆಣಸು ಮತ್ತು ಸಾಸ್‌ಗಳೊಂದಿಗೆ ತಯಾರಿಸಿದ ರೆಸ್ಟೋರೆಂಟ್ ಶೈಲಿಯ ಮಂಚೂರಿಯನ್.",
    "time_en": "20 Mins",
    "time_kn": "20 ನಿಮಿಷ",
    "calories": "220 kcal",
    "servings_en": "3 Servings",
    "servings_kn": "3 ಜನರಿಗೆ",
    "tag_en": "Oyster • Chinese Starter",
    "tag_kn": "ಸಿಂಪಿ ಅಣಬೆ • ಮಂಚೂರಿಯನ್",
    "ingredients_en": [
      "200g Fresh Oyster Mushrooms",
      "3 tbsp Cornstarch + 1 tbsp All-purpose flour",
      "1 tbsp Ginger-Garlic finely minced",
      "2 Green chillies & 1 Onion diced",
      "1 tbsp Soy Sauce, 1 tsp Vinegar, 1 tbsp Tomato sauce",
      "Oil for frying & Fresh spring onion greens"
    ],
    "ingredients_kn": [
      "200 ಗ್ರಾಂ ಸಿಂಪಿ ಅಣಬೆ",
      "ಕಾರ್ನ್‌ಫ್ಲೋರ್ ಮತ್ತು ಮೈದಾ",
      "ಶುಂಠಿ, ಬೆಳ್ಳುಳ್ಳಿ, ಹಸಿಮೆಣಸು, ಈರುಳ್ಳಿ",
      "ಸೋಯಾ ಸಾಸ್, ವಿನೆಗರ್ ಮತ್ತು ಟೊಮೆಟೊ ಸಾಸ್",
      "ಕರೆಯಲು ಎಣ್ಣೆ ಮತ್ತು ಸ್ಪ್ರಿಂಗ್ ಆನಿಯನ್"
    ],
    "instructions_en": [
      "Dip oyster mushrooms into seasoned cornstarch batter; deep fry till crispy golden.",
      "In a wok, sauté minced ginger, garlic, and green chillies in 1 tbsp hot oil.",
      "Add soy sauce, vinegar, tomato ketchup, and toss the fried mushrooms rapidly on high flame.",
      "Finish with chopped scallion greens and serve immediately!"
    ],
    "instructions_kn": [
      "ಅಣಬೆಯನ್ನು ಹಿಟ್ಟಿನಲ್ಲಿ ಅದ್ದಿ ಗರಿಗರಿಯಾಗಿ ಕರಿದುಕೊಳ್ಳಿ.",
      "ಬಾಣಲೆಯಲ್ಲಿ ಶುಂಠಿ, ಬೆಳ್ಳುಳ್ಳಿ, ಹಸಿಮೆಣಸು ಹುರಿದು ಸಾಸ್‌ಗಳನ್ನು ಸೇರಿಸಿ.",
      "ಕರಿದ ಅಣಬೆ ಹಾಕಿ ವೇಗವಾಗಿ ಟಾಸ್ ಮಾಡಿ ಸ್ಪ್ರಿಂಗ್ ಆನಿಯನ್‌ನಿಂದ ಅಲಂಕರಿಸಿ!"
    ],
    "tip_en": "Keep wok on very high heat to impart authentic smoky wok-hei flavor.",
    "tip_kn": "ತೀವ್ರ ಉರಿಯಲ್ಲಿ ಬೇಗನೆ ಟಾಸ್ ಮಾಡಿದರೆ ರೆಸ್ಟೋರೆಂಟ್ ನಂತಹ ಘಮ ಬರುತ್ತದೆ."
  },
  {
    "id": "oyster_12",
    "type": "oyster",
    "category": "curry",
    "img": "assets/recipe_korma.jpg",
    "title_en": "Creamy Coconut Milk Oyster Mushroom Curry",
    "title_kn": "ತೆಂಗಿನ ಹಾಲಿನ ಸಿಂಪಿ ಅಣಬೆ ಕರ್ರಿ (Coconut Milk Curry)",
    "desc_en": "Gentle aromatic coconut milk stew with whole oyster mushrooms, tender green peas, mild spices, and ginger.",
    "desc_kn": "ದಪ್ಪ ತೆಂಗಿನ ಹಾಲು, ಹಸಿ ಬಟಾಣಿ, ಶುಂಠಿ ಹಾಗೂ ಹಸಿಮೆಣಸಿನೊಂದಿಗೆ ತಯಾರಿಸಿದ ಕೋಮಲ ರುಚಿಯ ಅಪ್ಪಮ್ ಸ್ಪೆಷಲ್ ಸ್ಟ್ಯೂ.",
    "time_en": "20 Mins",
    "time_kn": "20 ನಿಮಿಷ",
    "calories": "210 kcal",
    "servings_en": "3 Servings",
    "servings_kn": "3 ಜನರಿಗೆ",
    "tag_en": "Oyster • Kerala Stew Style",
    "tag_kn": "ಸಿಂಪಿ ಅಣಬೆ • ತೆಂಗಿನ ಹಾಲು ಕರ್ರಿ",
    "ingredients_en": [
      "200g Fresh Oyster Mushrooms",
      "1 cup First extract thick Coconut Milk",
      "1/2 cup Thin coconut milk",
      "1/2 cup Green peas",
      "2 Green chillies slit, 1 inch Ginger julienned",
      "1 sprig Curry leaves, 1 tsp Coconut oil, Salt"
    ],
    "ingredients_kn": [
      "200 ಗ್ರಾಂ ಸಿಂಪಿ ಅಣಬೆ",
      "1 ಕಪ್ ಗಟ್ಟಿ ತೆಂಗಿನ ಹಾಲು",
      "ಅರ್ಧ ಕಪ್ ತೆಳು ತೆಂಗಿನ ಹಾಲು",
      "ಹಸಿ ಬಟಾಣಿ, ಹಸಿಮೆಣಸು, ಹಸಿಶುಂಠಿ",
      "ಕರಿಬೇವು, ತೆಂಗಿನ ಎಣ್ಣೆ ಮತ್ತು ಉಪ್ಪು"
    ],
    "instructions_en": [
      "Simmer green peas, ginger, and green chillies in thin coconut milk for 5 minutes.",
      "Add fresh oyster mushrooms and cook gently for 4 minutes.",
      "Lower heat to lowest; stir in thick coconut milk and salt. Heat through without boiling.",
      "Drizzle raw coconut oil and fresh curry leaves. Serve with Idiyappam or Appam!"
    ],
    "instructions_kn": [
      "ತೆಳು ತೆಂಗಿನ ಹಾಲಿನಲ್ಲಿ ಬಟಾಣಿ, ಶುಂಠಿ, ಹಸಿಮೆಣಸು ಬೇಯಿಸಿ.",
      "ಸಿಂಪಿ ಅಣಬೆ ಸೇರಿಸಿ 4 ನಿಮಿಷ ಬೇಯಿಸಿ.",
      "ಉರಿ ಕಡಿಮೆ ಮಾಡಿ ಗಟ್ಟಿ ತೆಂಗಿನ ಹಾಲು ಮತ್ತು ಉಪ್ಪು ಸೇರಿಸಿ ಬಿಸಿ ಮಾಡಿ (ಕುದಿಸಬೇಡಿ).",
      "ಕೊನೆಯಲ್ಲಿ ತೆಂಗಿನ ಎಣ್ಣೆ, ಕರಿಬೇವು ಹಾಕಿ ಇಡಿಯಪ್ಪಂ ಜೊತೆ ಸವಿಯಿರಿ!"
    ],
    "tip_en": "Never boil thick coconut milk violently or it will curdle.",
    "tip_kn": "ಗಟ್ಟಿ ತೆಂಗಿನ ಹಾಲು ಹಾಕಿದ ನಂತರ ಹೆಚ್ಚು ಕುದಿಸಬೇಡಿ."
  },
  {
    "id": "oyster_13",
    "type": "oyster",
    "category": "curry",
    "img": "assets/recipe_ghee_roast.jpg",
    "title_en": "Dhaba Style Kadai Oyster Mushroom Masala",
    "title_kn": "ಕಡಾಯಿ ಸಿಂಪಿ ಅಣಬೆ ಮಸಾಲ (Kadai Masala)",
    "desc_en": "Crunchy capsicum petals and tender oyster mushrooms cooked in a semi-dry onion-tomato gravy with roasted coriander & red chillies.",
    "desc_kn": "ಕ್ಯಾಪ್ಸಿಕಮ್ ಹಾಗೂ ಸಿಂಪಿ ಅಣಬೆಯನ್ನು ಹುರಿದ ಮಸಾಲೆ ಮತ್ತು ಟೊಮೆಟೊ ಈರುಳ್ಳಿ ಗ್ರೇವಿಯಲ್ಲಿ ಬೇಯಿಸಿದ ಡಾಬಾ ಶೈಲಿಯ ಮಸಾಲ.",
    "time_en": "22 Mins",
    "time_kn": "22 ನಿಮಿಷ",
    "calories": "190 kcal",
    "servings_en": "3 Servings",
    "servings_kn": "3 ಜನರಿಗೆ",
    "tag_en": "Oyster • North Indian Dhaba",
    "tag_kn": "ಸಿಂಪಿ ಅಣಬೆ • ಕಡಾಯಿ ಗ್ರೇವಿ",
    "ingredients_en": [
      "200g Fresh Oyster Mushrooms",
      "1 Green Bell Pepper (cubed), 1 Onion (cubed)",
      "2 Tomatoes pureed, 1 tsp Ginger-Garlic paste",
      "1 tbsp Fresh Kadai Masala (roasted coriander, cumin, dry chillies, fennel)",
      "1/2 tsp Kasuri methi, 2 tbsp Oil or butter"
    ],
    "ingredients_kn": [
      "200 ಗ್ರಾಂ ಸಿಂಪಿ ಅಣಬೆ",
      "ಕ್ಯಾಪ್ಸಿಕಮ್ ಮತ್ತು ಈರುಳ್ಳಿ ಚೂರುಗಳು",
      "ಟೊಮೆಟೊ ಪ್ಯೂರಿ, ಶುಂಠಿ-ಬೆಳ್ಳುಳ್ಳಿ ಪೇಸ್ಟ್",
      "ಕಡಾಯಿ ಮಸಾಲ ಪುಡಿ, ಕಸೂರಿ ಮೇಥಿ",
      "ಎಣ್ಣೆ ಅಥವಾ ಬೆಣ್ಣೆ ಮತ್ತು ಉಪ್ಪು"
    ],
    "instructions_en": [
      "Sauté diced capsicum and onions in 1 tbsp oil till half-done; set aside.",
      "In same pan, cook ginger-garlic paste and tomato puree till oil separates.",
      "Add kadai masala powder, salt, and oyster mushrooms; simmer for 5 minutes.",
      "Toss in sautéed capsicum and crushed kasuri methi. Serve with hot Tandoori Roti or Naan!"
    ],
    "instructions_kn": [
      "ಕ್ಯಾಪ್ಸಿಕಮ್ ಮತ್ತು ಈರುಳ್ಳಿಯನ್ನು ಲಘುವಾಗಿ ಹುರಿದು ಬದಿಗಿಡಿ.",
      "ಅದೇ ಬಾಣಲೆಯಲ್ಲಿ ಶುಂಠಿ-ಬೆಳ್ಳುಳ್ಳಿ ಹಾಗೂ ಟೊಮೆಟೊ ಪ್ಯೂರಿ ಬೇಯಿಸಿ.",
      "ಕಡಾಯಿ ಮಸಾಲ, ಉಪ್ಪು ಮತ್ತು ಸಿಂಪಿ ಅಣಬೆ ಸೇರಿಸಿ 5 ನಿಮಿಷ ಬೇಯಿಸಿ.",
      "ಹುರಿದ ಕ್ಯಾಪ್ಸಿಕಮ್ ಮತ್ತು ಕಸೂರಿ ಮೇಥಿ ಸೇರಿಸಿ ರೋಟಿ ಅಥವಾ ಚಪಾತಿಯೊಂದಿಗೆ ಬಡಿಸಿ!"
    ],
    "tip_en": "Keep capsicum crisp for a delightful textural contrast with tender mushrooms.",
    "tip_kn": "ಕ್ಯಾಪ್ಸಿಕಮ್ ಅನ್ನು ಹೆಚ್ಚು ಬೇಯಿಸದೆ ಗರಿಗರಿಯಾಗಿರಿಸಿದರೆ ರುಚಿ ಹೆಚ್ಚುತ್ತದೆ."
  },
  {
    "id": "oyster_14",
    "type": "oyster",
    "category": "dry",
    "img": "assets/recipe_oyster_garlic.jpg",
    "title_en": "Rustic Tawa Oyster Mushroom Dry Fry",
    "title_kn": "ತವಾ ಸಿಂಪಿ ಅಣಬೆ ಡ್ರೈ ಫ್ರೈ (Tawa Fry)",
    "desc_en": "Homestyle iron-tawa roasted oyster mushrooms with crushed cumin, curry leaves, green chillies, and freshly squeezed lemon juice.",
    "desc_kn": "ಕಬ್ಬಿಣದ ತವಾದ ಮೇಲೆ ಜೀರಿಗೆ, ಹಸಿಮೆಣಸು, ಕರಿಬೇವು ಮತ್ತು ನಿಂಬೆರಸದೊಂದಿಗೆ ತ್ವರಿತವಾಗಿ ಹುರಿದ ಸರಳ ಮನೆಮದ್ದು ಶೈಲಿಯ ಅಣಬೆ ಪಲ್ಯ.",
    "time_en": "10 Mins",
    "time_kn": "10 ನಿಮಿಷ",
    "calories": "120 kcal",
    "servings_en": "2 Servings",
    "servings_kn": "2 ಜನರಿಗೆ",
    "tag_en": "Oyster • Quick Homestyle",
    "tag_kn": "ಸಿಂಪಿ ಅಣಬೆ • ತವಾ ಫ್ರೈ",
    "ingredients_en": [
      "200g Fresh Oyster Mushrooms (shredded)",
      "1 tbsp Cold-pressed Groundnut oil",
      "1 tsp Cumin seeds, 2 Green chillies finely chopped",
      "1 sprig Curry leaves, 1/4 tsp Turmeric powder",
      "Rock salt & half lemon for finishing"
    ],
    "ingredients_kn": [
      "200 ಗ್ರಾಂ ಸಿಂಪಿ ಅಣಬೆ",
      "1 ಚಮಚ ಕಡಲೆಕಾಯಿ ಎಣ್ಣೆ",
      "1 ಚಮಚ ಜೀರಿಗೆ, 2 ಹಸಿಮೆಣಸು, ಕರಿಬೇವು",
      "ಅರಿಶಿನ, ಕಲ್ಲುಪ್ಪು ಮತ್ತು ನಿಂಬೆಹಣ್ಣು"
    ],
    "instructions_en": [
      "Heat an iron tawa with groundnut oil until hot.",
      "Crack cumin seeds, add curry leaves and green chillies.",
      "Add oyster mushrooms and salt. Stir-fry constantly on high heat for 5 minutes.",
      "Turn off flame, squeeze fresh lemon juice, and serve as a quick healthy side dish!"
    ],
    "instructions_kn": [
      "ಕಬ್ಬಿಣದ ತವಾದಲ್ಲಿ ಎಣ್ಣೆ ಕಾಯಿಸಿ ಜೀರಿಗೆ, ಹಸಿಮೆಣಸು ಮತ್ತು ಕರಿಬೇವು ಒಗ್ಗರಣೆ ಹಾಕಿ.",
      "ಅಣಬೆ ಮತ್ತು ಉಪ್ಪು ಸೇರಿಸಿ ತೀವ್ರ ಉರಿಯಲ್ಲಿ 5 ನಿಮಿಷ ಕೈಯಾಡಿಸಿ.",
      "ಉರಿ ಆರಿಸಿ ನಿಂಬೆರಸ ಹಿಂಡಿ ಊಟದ ಜೊತೆ ಸೈಡ್ ಡಿಶ್ ಆಗಿ ಸವಿಯಿರಿ!"
    ],
    "tip_en": "Using an iron tawa imparts natural iron and distinct rustic flavor.",
    "tip_kn": "ಕಬ್ಬಿಣದ ತವಾ ಬಳಸುವುದರಿಂದ ನೈಸರ್ಗಿಕ ಕಬ್ಬಿನಾಂಶ ಹಾಗೂ ಅದ್ಭುತ ಪರಿಮಳ ಸಿಗುತ್ತದೆ."
  },
  {
    "id": "oyster_15",
    "type": "oyster",
    "category": "rice",
    "img": "assets/recipe_milky_biryani.jpg",
    "title_en": "Fragrant Coastal Oyster Mushroom Pulao",
    "title_kn": "ಸುವಾಸನಾಯುಕ್ತ ಸಿಂಪಿ ಅಣಬೆ ಪಲಾವ್ (Oyster Pulao)",
    "desc_en": "Basmati rice infused with whole garam spices, mint, coriander, and pan-seared juicy oyster mushroom petals.",
    "desc_kn": "ಬಾಸ್ಮತಿ ಅಕ್ಕಿ, ಹಸಿರು ಮಸಾಲೆ ಮತ್ತು ಹುರಿದ ಸಿಂಪಿ ಅಣಬೆಗಳಿಂದ ತಯಾರಿಸಿದ ಸರಳ, ಸುವಾಸನಾಯುಕ್ತ ಹಾಗೂ ಪೌಷ್ಟಿಕ ಲಂಚ್ ಬಾಕ್ಸ್ ಪಲಾವ್.",
    "time_en": "25 Mins",
    "time_kn": "25 ನಿಮಿಷ",
    "calories": "260 kcal",
    "servings_en": "3-4 Servings",
    "servings_kn": "3-4 ಜನರಿಗೆ",
    "tag_en": "Oyster • One-Pot Rice",
    "tag_kn": "ಸಿಂಪಿ ಅಣಬೆ • ಒನ್-ಪಾಟ್ ಪಲಾವ್",
    "ingredients_en": [
      "200g Fresh Oyster Mushrooms (shredded large)",
      "1.5 cups Aged Basmati Rice (washed and soaked)",
      "Whole spices: 1 Bay leaf, 2 Green Cardamoms, 3 Cloves, 1 Cinnamon stick",
      "1 sliced Onion, 1 tbsp Ginger-Garlic paste",
      "Handful fresh Mint & Coriander leaves",
      "2 tbsp Pure Ghee, 2.5 cups Water & Salt"
    ],
    "ingredients_kn": [
      "200 ಗ್ರಾಂ ಸಿಂಪಿ ಅಣಬೆ",
      "1.5 ಕಪ್ ಬಾಸ್ಮತಿ ಅಕ್ಕಿ",
      "ಮಸಾಲೆ ದಿಣ್ಣುಗಳು: ಲವಂಗ, ಚಕ್ಕೆ, ಏಲಕ್ಕಿ, ಬಿರಿಯಾನಿ ಎಲೆ",
      "ಈರುಳ್ಳಿ, ಶುಂಠಿ-ಬೆಳ್ಳುಳ್ಳಿ ಪೇಸ್ಟ್",
      "ಪುದೀನಾ ಮತ್ತು ಕೊತ್ತಂಬರಿ ಸೊಪ್ಪು",
      "ತುಪ್ಪ ಮತ್ತು ಉಪ್ಪು"
    ],
    "instructions_en": [
      "In a pressure cooker or heavy pot, heat ghee and sizzle whole spices.",
      "Sauté sliced onions till golden; add ginger-garlic paste and mint-coriander greens.",
      "Add oyster mushrooms and sauté for 2 minutes.",
      "Add soaked basmati rice, water, and salt. Bring to boil, cover, and cook on low for 1 whistle or 12 minutes.",
      "Rest 5 minutes, fluff with a fork, and serve with cooling cucumber raita!"
    ],
    "instructions_kn": [
      "ಕುಕ್ಕರ್‌ನಲ್ಲಿ ತುಪ್ಪ ಕಾಯಿಸಿ ಮಸಾಲೆ ದಿಣ್ಣುಗಳನ್ನು ಹಾಕಿ.",
      "ಈರುಳ್ಳಿ, ಶುಂಠಿ-ಬೆಳ್ಳುಳ್ಳಿ ಪೇಸ್ಟ್ ಮತ್ತು ಪುದೀನಾ-ಕೊತ್ತಂಬರಿ ಹುರಿಯಿರಿ.",
      "ಸಿಂಪಿ ಅಣಬೆ ಸೇರಿಸಿ 2 ನಿಮಿಷ ಸಾಟೇ ಮಾಡಿ ಅಕ್ಕಿ, ನೀರು ಮತ್ತು ಉಪ್ಪು ಹಾಕಿ 1 ವಿಸಿಲ್ ಕೂಗಿಸಿ.",
      "ತಣ್ಣಗಾದ ನಂತರ ಸೌತೆಕಾಯಿ ರಾಯಿತದೊಂದಿಗೆ ಸವಿಯಿರಿ!"
    ],
    "tip_en": "Sauté the mushrooms briefly before adding rice so they absorb the ghee aroma.",
    "tip_kn": "ಅಕ್ಕಿ ಹಾಕುವ ಮುನ್ನ ಅಣಬೆಯನ್ನು ತುಪ್ಪದಲ್ಲಿ ಸ್ವಲ್ಪ ಹುರಿದರೆ ಪರಿಮಳ ಹೆಚ್ಚುತ್ತದೆ."
  },
  {
    "id": "oyster_kebab_1",
    "type": "oyster",
    "category": "kebab",
    "img": "assets/recipe_kebab.jpg",
    "title_en": "Melt-in-Mouth Oyster Mushroom Galouti Kebab",
    "title_kn": "ಕರಗುವ ಸಿಂಪಿ ಅಣಬೆ ಗಲೋಟಿ ಕಬಾಬ್ (Galouti Kebab)",
    "desc_en": "Royal Awadhi style ultra-tender patties made from finely minced oyster mushrooms, roasted potli spices, browned onions, and pure desi cow ghee.",
    "desc_kn": "ಲಕ್ನೋವಿ ಶೈಲಿಯ ಬಾಯಲ್ಲಿಟ್ಟರೆ ಕರಗುವ ಸಿಂಪಿ ಅಣಬೆ ಗಲೋಟಿ ಕಬಾಬ್. ತುಪ್ಪ, ಹುರಿದ ಈರುಳ್ಳಿ ಪೇಸ್ಟ್ ಹಾಗೂ ರಾಯಲ್ ಮಸಾಲೆಗಳ ಅದ್ಭುತ ಸಂಗಮ.",
    "time_en": "25 Mins",
    "time_kn": "25 ನಿಮಿಷ",
    "calories": "175 kcal",
    "servings_en": "3-4 Servings",
    "servings_kn": "3-4 ಜನರಿಗೆ",
    "tag_en": "Oyster • Royal Awadhi Kebab",
    "tag_kn": "ಸಿಂಪಿ ಅಣಬೆ • ಗಲೋಟಿ ಕಬಾಬ್",
    "ingredients_en": [
      "250g Fresh Organic Oyster Mushrooms (finely minced and moisture squeezed)",
      "2 tbsp Roasted gram flour (Bhuna besan) for binding",
      "1 large Onion deep-fried golden brown & made into a paste (Birista paste)",
      "1 tbsp Pure Desi Cow Ghee",
      "1 tsp Ginger-Garlic paste",
      "1 tsp Awadhi Potli Garam Masala (cardamom, mace, nutmeg, rose petals)",
      "1/2 tsp Kashmiri red chilli powder, Salt to taste",
      "A piece of natural lump charcoal for authentic dhungar smoke"
    ],
    "ingredients_kn": [
      "250 ಗ್ರಾಂ ತಾಜಾ ಸಿಂಪಿ ಅಣಬೆ (ಅತಿ ಸಣ್ಣಗೆ ಹೆಚ್ಚಿ ನೀರು ಹಿಂಡಿದ್ದು)",
      "2 ಚಮಚ ಹುರಿದ ಕಡಲೆಹಿಟ್ಟು",
      "1 ಹುರಿದ ಈರುಳ್ಳಿ ಪೇಸ್ಟ್ (ಬರಿಸ್ತಾ ಪೇಸ್ಟ್)",
      "1 ಚಮಚ ಶುದ್ಧ ಹಸುವಿನ ತುಪ್ಪ",
      "1 ಚಮಚ ಶುಂಠಿ-ಬೆಳ್ಳುಳ್ಳಿ ಪೇಸ್ಟ್",
      "ರಾಯಲ್ ಗರಂ ಮಸಾಲ (ಏಲಕ್ಕಿ, ಜಾವಿತ್ರಿ, ಜಾಯಿಕಾಯಿ)",
      "ಕಾಶ್ಮೀರಿ ಖಾರದ ಪುಡಿ ಮತ್ತು ಉಪ್ಪು",
      "ಸ್ಮೋಕಿ ಪರಿಮಳಕ್ಕೆ ಸಣ್ಣ ಇದ್ದಿಲು ತುಂಡು"
    ],
    "instructions_en": [
      "Sauté minced oyster mushrooms in 1 tsp ghee until completely dry; let cool and blend into a smooth paste.",
      "Mix mushroom paste with bhuna besan, browned onion paste, ginger-garlic, potli garam masala, and salt.",
      "Infuse authentic charcoal smoke (Dhungar): place a hot burning charcoal in a metal bowl in the center of the dough, pour a drop of ghee over it, and cover for 5 minutes.",
      "Shape into delicate flat round patties. Sear gently on a low-medium iron tawa with desi ghee for 3 minutes per side until caramelized.",
      "Serve warm on miniature Mughlai ulte tawe ke parathas with mint yogurt chutney!"
    ],
    "instructions_kn": [
      "ಹೆಚ್ಚಿದ ಅಣಬೆಯನ್ನು ತುಪ್ಪದಲ್ಲಿ ತೇವಾಂಶ ಇಂಗುವವರೆಗೆ ಹುರಿದು, ತಣ್ಣಗಾದ ಮೇಲೆ ನುಣ್ಣಗೆ ರುಬ್ಬಿಕೊಳ್ಳಿ.",
      "ಅಣಬೆ ಪೇಸ್ಟ್‌ಗೆ ಹುರಿದ ಕಡಲೆಹಿಟ್ಟು, ಬರಿಸ್ತಾ ಪೇಸ್ಟ್, ಶುಂಠಿ-ಬೆಳ್ಳುಳ್ಳಿ ಹಾಗೂ ಮಸಾಲೆಗಳನ್ನು ಸೇರಿಸಿ ಕಲಸಿಕೊಳ್ಳಿ.",
      "ಇದ್ದಿಲನ್ನು ಕೆಂಡ ಮಾಡಿ ಬಟ್ಟಲಿನಲ್ಲಿಟ್ಟು ತುಪ್ಪ ಹಾಕಿ ಮುಚ್ಚಳ ಮುಚ್ಚಿ 5 ನಿಮಿಷ ಸ್ಮೋಕಿ ಪರಿಮಳ ನೀಡಿ.",
      "ಸಣ್ಣ ಚಪ್ಪಟೆ ಕಬಾಬ್ ಆಕಾರಕ್ಕೆ ತಟ್ಟಿ, ತವಾದ ಮೇಲೆ ತುಪ್ಪ ಹಾಕಿ ಎರಡೂ ಬದಿ ಹೊಂಬಣ್ಣ ಬರುವವರೆಗೆ ಬೇಯಿಸಿ.",
      "ಪುದೀನಾ ಚಟ್ನಿ ಹಾಗೂ ಈರುಳ್ಳಿ ರಿಂಗ್ಸ್‌ಗಳೊಂದಿಗೆ ಬಿಸಿಯಾಗಿ ಸವಿಯಿರಿ!"
    ],
    "tip_en": "Dhungar charcoal smoking imparts the authentic royal banquet wood-fired aroma to vegetarian kebabs.",
    "tip_kn": "ಇದ್ದಿಲಿನ ಧೂಪ (ಧುಂಗಾರ್) ನೀಡುವುದರಿಂದ ಕಬಾಬ್‌ಗೆ ಹೋಟೆಲ್ ನಂತಹ ಅಪ್ಪಟ ಸ್ಮೋಕಿ ಘಮ ಬರುತ್ತದೆ."
  },
  {
    "id": "oyster_kebab_2",
    "type": "oyster",
    "category": "kebab",
    "img": "assets/recipe_kebab.jpg",
    "title_en": "Hariyali Pudina Oyster Mushroom Kebab",
    "title_kn": "ಹರಿಯಾಲಿ ಪುದೀನಾ ಸಿಂಪಿ ಅಣಬೆ ಕಬಾಬ್ (Hariyali Kebab)",
    "desc_en": "Fresh oyster mushroom clusters steeped in an aromatic emerald green marinade of fresh garden mint, coriander, spinach, green chillies, and hung curd.",
    "desc_kn": "ಪುದೀನಾ, ಕೊತ್ತಂಬರಿ, ಪಾಲಕ್ ಮತ್ತು ಗಟ್ಟಿ ಮೊಸರಿನ ಹಸಿರು ಮಸಾಲೆಯಲ್ಲಿ ನೆನೆಸಿ ಕಲ್ಲಿದ್ದಲು ಅಥವಾ ತವಾದಲ್ಲಿ ಸುಟ್ಟ ಹಸಿರು ಕಬಾಬ್.",
    "time_en": "20 Mins",
    "time_kn": "20 ನಿಮಿಷ",
    "calories": "160 kcal",
    "servings_en": "3 Servings",
    "servings_kn": "3 ಜನರಿಗೆ",
    "tag_en": "Oyster • Hariyali Grill",
    "tag_kn": "ಸಿಂಪಿ ಅಣಬೆ • ಹರಿಯಾಲಿ ಕಬಾಬ್",
    "ingredients_en": [
      "200g Fresh Oyster Mushroom clusters",
      "Hariyali paste: 1 cup Fresh Mint, 1 cup Coriander, handful baby spinach, 2 Green chillies, 4 Garlic cloves ground with 1 tbsp lemon juice",
      "1/4 cup Thick hung curd",
      "1 tbsp Roasted besan, 1 tsp Chaat masala",
      "1 tbsp Mustard oil or melted butter, Salt"
    ],
    "ingredients_kn": [
      "200 ಗ್ರಾಂ ತಾಜಾ ಸಿಂಪಿ ಅಣಬೆ",
      "ಹಸಿರು ಪೇಸ್ಟ್: 1 ಕಪ್ ಪುದೀನಾ, 1 ಕಪ್ ಕೊತ್ತಂಬರಿ, ಸ್ವಲ್ಪ ಪಾಲಕ್, 2 ಹಸಿಮೆಣಸು, ಬೆಳ್ಳುಳ್ಳಿ, ನಿಂಬೆರಸ",
      "ಅರ್ಧ ಕಪ್ ಗಟ್ಟಿ ಮೊಸರು",
      "1 ಚಮಚ ಹುರಿದ ಕಡಲೆಹಿಟ್ಟು, ಚಾಟ್ ಮಸಾಲ",
      "ಸಾಸಿವೆ ಎಣ್ಣೆ ಅಥವಾ ಬೆಣ್ಣೆ ಮತ್ತು ಉಪ್ಪು"
    ],
    "instructions_en": [
      "Mix the emerald green herb paste with hung curd, roasted besan, mustard oil, and salt.",
      "Gently coat oyster mushroom clusters in the green marinade; rest for 15 minutes.",
      "Roast on a hot ridged grill pan with butter for 3-4 minutes per side until charred on the fluted edges.",
      "Dust with amchur or chaat masala and serve hot with sliced red onions and lime!"
    ],
    "instructions_kn": [
      "ಹಸಿರು ಪೇಸ್ಟ್‌ಗೆ ಮೊಸರು, ಕಡಲೆಹಿಟ್ಟು, ಸಾಸಿವೆ ಎಣ್ಣೆ ಮತ್ತು ಉಪ್ಪು ಸೇರಿಸಿ ಮಿಶ್ರಣ ಮಾಡಿ.",
      "ಸಿಂಪಿ ಅಣಬೆಯ ದಳಗಳಿಗೆ ಈ ಮಸಾಲೆಯನ್ನು ಲೇಪಿಸಿ 15 ನಿಮಿಷ ನೆನೆಯಲು ಬಿಡಿ.",
      "ಕಾದ ಗ್ರಿಲ್ ತವಾದ ಮೇಲೆ ಬೆಣ್ಣೆ ಹಾಕಿ ಎರಡೂ ಬದಿ ಗರಿಗರಿಯಾಗಿ ಹುರಿಯಿರಿ.",
      "ಚಾಟ್ ಮಸಾಲಾ ಉದುರಿಸಿ ನಿಂಬೆಹಣ್ಣು ಹಿಂಡಿ ಬಿಸಿಯಾಗಿ ಬಡಿಸಿ!"
    ],
    "tip_en": "Blanching spinach before blending preserves the vibrant jewel-green hue under grill heat.",
    "tip_kn": "ಪಾಲಕ್ ಸೊಪ್ಪನ್ನು ಬಿಸಿ ನೀರಿನಲ್ಲಿ ಅದ್ದಿ ತೆಗೆದರೆ ಕಬಾಬ್ ಕಡು ಹಸಿರು ಬಣ್ಣದಲ್ಲೇ ಉಳಿಯುತ್ತದೆ."
  },
  {
    "id": "oyster_kebab_3",
    "type": "oyster",
    "category": "kebab",
    "img": "assets/recipe_kebab.jpg",
    "title_en": "Lucknowi Shami Oyster Mushroom Kebab",
    "title_kn": "ಲಕ್ನೋವಿ ಶಾಮಿ ಸಿಂಪಿ ಅಣಬೆ ಕಬಾಬ್ (Shami Kebab)",
    "desc_en": "Finely minced oyster mushrooms slow-cooked with chana dal, black cardamom, cloves, and mint, ground to velvet paste and pan-seared with cow ghee.",
    "desc_kn": "ಕಡಲೆಬೇಳೆ, ಲವಂಗ, ಏಲಕ್ಕಿ ಹಾಗೂ ಮಸಾಲೆಗಳೊಂದಿಗೆ ಬೇಯಿಸಿದ ಸಿಂಪಿ ಅಣಬೆಯನ್ನು ನುಣ್ಣಗೆ ರುಬ್ಬಿ ತುಪ್ಪದಲ್ಲಿ ಸುಟ್ಟ ನವಾಬಿ ಶಾಮಿ ಕಬಾಬ್.",
    "time_en": "25 Mins",
    "time_kn": "25 ನಿಮಿಷ",
    "calories": "170 kcal",
    "servings_en": "3 Servings",
    "servings_kn": "3 ಜನರಿಗೆ",
    "tag_en": "Oyster • Awadhi Shami",
    "tag_kn": "ಸಿಂಪಿ ಅಣಬೆ • ಶಾಮಿ ಕಬಾಬ್",
    "ingredients_en": [
      "250g Fresh Oyster Mushrooms (minced)",
      "1/2 cup Chana Dal (soaked 1 hour)",
      "1 tsp Ginger-Garlic paste",
      "Whole spices: 1 Black cardamom, 4 cloves, 1 cinnamon stick",
      "1 tsp Roasted cumin powder & garam masala",
      "Fresh mint & coriander leaves chopped",
      "Desi cow ghee for pan searing"
    ],
    "ingredients_kn": [
      "250 ಗ್ರಾಂ ತಾಜಾ ಸಿಂಪಿ ಅಣಬೆ (ಸಣ್ಣಗೆ ಹೆಚ್ಚಿದ್ದು)",
      "ಅರ್ಧ ಕಪ್ ನೆನೆಸಿದ ಕಡಲೆಬೇಳೆ",
      "ಶುಂಠಿ-ಬೆಳ್ಳುಳ್ಳಿ ಪೇಸ್ಟ್",
      "ಏಲಕ್ಕಿ, ಲವಂಗ, ದಾಲ್ಚಿನ್ನಿ",
      "ಜೀರಿಗೆ ಪುಡಿ, ಗರಂ ಮಸಾಲ",
      "ತಾಜಾ ಪುದೀನಾ ಮತ್ತು ಕೊತ್ತಂಬರಿ",
      "ಹುರಿಯಲು ಶುದ್ಧ ಹಸುವಿನ ತುಪ್ಪ"
    ],
    "instructions_en": [
      "Pressure cook minced oyster mushrooms and chana dal with whole spices and minimal water for 2 whistles.",
      "Drain excess moisture thoroughly and blend into a thick, velvety smooth kebab paste.",
      "Mix in chopped mint, coriander, roasted cumin, and salt. Shape into round flat shami patties.",
      "Shallow fry on a heavy tawa in pure ghee until dark golden and crispy on both sides.",
      "Serve hot with mint chutney, lemon wedges, and paper-thin roomali roti!"
    ],
    "instructions_kn": [
      "ಅಣಬೆ ಮತ್ತು ಕಡಲೆಬೇಳೆಯನ್ನು ಮಸಾಲೆಗಳೊಂದಿಗೆ 2 ವಿಷಲ್ ಕೂಗಿಸಿ ಬೇಯಿಸಿಕೊಳ್ಳಿ.",
      "ನೀರನ್ನು ಪೂರ್ತಿ ಸೋಸಿ, ತಣ್ಣಗಾದ ಮೇಲೆ ನುಣ್ಣಗೆ ರುಬ್ಬಿ ಕಬಾಬ್ ಹಿಟ್ಟು ತಯಾರಿಸಿ.",
      "ಪುದೀನಾ, ಕೊತ್ತಂಬರಿ, ಜೀರಿಗೆ ಪುಡಿ ಸೇರಿಸಿ ಚಪ್ಪಟೆ ಶಾಮಿ ಕಬಾಬ್ ಆಕಾರಕ್ಕೆ ತಟ್ಟಿ.",
      "ಕಾದ ತವಾ ಮೇಲೆ ತುಪ್ಪ ಹಾಕಿ ಎರಡೂ ಬದಿ ಕಂದು ಬಣ್ಣ ಬರುವಂತೆ ಗರಿಗರಿಯಾಗಿ ಹುರಿಯಿರಿ.",
      "ಪುದೀನಾ ಚಟ್ನಿ ಹಾಗೂ ನಿಂಬೆರಸದೊಂದಿಗೆ ಬಿಸಿಯಾಗಿ ಸವಿಯಿರಿ!"
    ],
    "tip_en": "Ensure all moisture is drained before grinding to get firm, intact shami patties.",
    "tip_kn": "ರುಬ್ಬುವ ಮುನ್ನ ನೀರನ್ನು ಪೂರ್ತಿ ಸೋಸಿಕೊಂಡರೆ ಕಬಾಬ್ ತವಾದ ಮೇಲೆ ಒಡೆಯುವುದಿಲ್ಲ."
  },
  {
    "id": "oyster_kebab_4",
    "type": "oyster",
    "category": "kebab",
    "img": "assets/recipe_kebab.jpg",
    "title_en": "Peshawari Chapli Oyster Mushroom Kebab",
    "title_kn": "ಪೆಶಾವರಿ ಚಾಪ್ಲಿ ಸಿಂಪಿ ಅಣಬೆ ಕಬಾಬ್ (Chapli Kebab)",
    "desc_en": "Frontier-style rustic flat kebabs packed with coarse minced oyster mushrooms, crushed coriander seeds, dried pomegranate seeds (anardana), and green chillies.",
    "desc_kn": "ಜಜ್ಜಿದ ಕೊತ್ತಂಬರಿ ಬೀಜ, ದಾಳಿಂಬೆ ಕಾಳು (ಅನಾರ್‌ದಾನಾ) ಮತ್ತು ಹಸಿಮೆಣಸಿನಕಾಯಿ ಮಸಾಲೆಯಲ್ಲಿ ತಟ್ಟಿದ ಗರಿಗರಿ ಪೆಶಾವರಿ ಚಾಪ್ಲಿ ಕಬಾಬ್.",
    "time_en": "22 Mins",
    "time_kn": "22 ನಿಮಿಷ",
    "calories": "185 kcal",
    "servings_en": "4 Servings",
    "servings_kn": "4 ಜನರಿಗೆ",
    "tag_en": "Oyster • Frontier Chapli",
    "tag_kn": "ಸಿಂಪಿ ಅಣಬೆ • ಚಾಪ್ಲಿ ಕಬಾಬ್",
    "ingredients_en": [
      "250g Fresh Oyster Mushrooms (hand-chopped coarse)",
      "1 tbsp Anardana (dried pomegranate seeds, coarsely cracked)",
      "1 tbsp Coriander seeds & Cumin (crushed dry)",
      "1 medium Tomato (finely deseeded and chopped)",
      "2 tbsp Makki ka atta (maize flour) or gram flour",
      "1 Eggplant or boiled potato mashed for binding",
      "Crushed red chilli flakes & salt",
      "Mustard oil or ghee for shallow fry"
    ],
    "ingredients_kn": [
      "250 ಗ್ರಾಂ ಸಿಂಪಿ ಅಣಬೆ (ತರಿತರಿಯಾಗಿ ಹೆಚ್ಚಿದ್ದು)",
      "1 ಚಮಚ ಅನಾರ್‌ದಾನಾ (ಒಣ ದಾಳಿಂಬೆ ಪುಡಿ)",
      "1 ಚಮಚ ಜಜ್ಜಿದ ಕೊತ್ತಂಬರಿ ಮತ್ತು ಜೀರಿಗೆ",
      "1 ಟೊಮೆಟೊ (ಬೀಜ ತೆಗೆದು ಸಣ್ಣಗೆ ಹೆಚ್ಚಿದ್ದು)",
      "2 ಚಮಚ ಜೋಳದ ಹಿಟ್ಟು ಅಥವಾ ಕಡಲೆಹಿಟ್ಟು",
      "ಬಂಧಕಕ್ಕೆ ಸ್ವಲ್ಪ ಬೇಯಿಸಿದ ಆಲೂಗಡ್ಡೆ",
      "ಚಿಲ್ಲಿ ಫ್ಲೇಕ್ಸ್ ಮತ್ತು ಉಪ್ಪು",
      "ಹುರಿಯಲು ಸಾಸಿವೆ ಎಣ್ಣೆ ಅಥವಾ ತುಪ್ಪ"
    ],
    "instructions_en": [
      "Squeeze chopped oyster mushrooms in a clean kitchen towel to expel excess juice.",
      "Knead together with anardana, crushed spices, chopped tomatoes, green chillies, and maize flour into a rustic dough.",
      "Flatten into wide, thin circular disks with irregular artisanal edges.",
      "Fry on a wide iron skillet in hot mustard oil or ghee for 3 minutes per side until deeply caramelized and crunchy.",
      "Top with sliced onion rings and chaat masala!"
    ],
    "instructions_kn": [
      "ಹೆಚ್ಚಿದ ಅಣಬೆಯಿಂದ ನೀರನ್ನು ಬಟ್ಟೆಯಲ್ಲಿ ಹಿಂಡಿ ತೆಗೆಯಿರಿ.",
      "ಅನಾರ್‌ದಾನಾ, ಜಜ್ಜಿದ ಮಸಾಲೆಗಳು, ಟೊಮೆಟೊ, ಹಸಿಮೆಣಸು ಮತ್ತು ಜೋಳದ ಹಿಟ್ಟಿನೊಂದಿಗೆ ಗಟ್ಟಿಯಾಗಿ ನಾದಿಕೊಳ್ಳಿ.",
      "ದೊಡ್ಡ ಚಪ್ಪಟೆ ಆಕಾರದಲ್ಲಿ ತಟ್ಟಿ.",
      "ಕಾದ ತವಾದಲ್ಲಿ ಸಾಸಿವೆ ಎಣ್ಣೆ ಹಾಕಿ ಎರಡೂ ಬದಿ ಗರಿಗರಿಯಾಗಿ ಕಂದು ಬಣ್ಣಕ್ಕೆ ಹುರಿಯಿರಿ.",
      "ಈರುಳ್ಳಿ ಹಾಗೂ ಚಾಟ್ ಮಸಾಲೆಯೊಂದಿಗೆ ಬಡಿಸಿ!"
    ],
    "tip_en": "Anardana (dried pomegranate) provides the signature tangy tart burst authentic to Peshawari chapli kebabs.",
    "tip_kn": "ಅನಾರ್‌ದಾನಾ ಸೇರಿಸುವುದರಿಂದ ಚಾಪ್ಲಿ ಕಬಾಬ್‌ಗೆ ಹೋಟೆಲ್ ನಂತಹ ವಿಶಿಷ್ಟ ಹುಳಿ-ಖಾರದ ರುಚಿ ಸಿಗುತ್ತದೆ."
  },
  {
    "id": "oyster_kebab_5",
    "type": "oyster",
    "category": "kebab",
    "img": "assets/recipe_tikka.jpg",
    "title_en": "Achari Tandoori Oyster Mushroom Kebab",
    "title_kn": "ಅಚಾರಿ ತಂದೂರಿ ಸಿಂಪಿ ಅಣಬೆ ಕಬಾಬ್ (Achari Kebab)",
    "desc_en": "Tender oyster clusters marinated in pungent mustard oil, roasted pickling spices (fennel, nigella, fenugreek), and Kashmiri chilli paste, blistered in high heat.",
    "desc_kn": "ಉಪ್ಪಿನಕಾಯಿ ಮಸಾಲೆ (ಸೋಂಪು, ಕಲೋಂಜಿ, ಮೆಂತ್ಯ) ಹಾಗೂ ಸಾಸಿವೆ ಎಣ್ಣೆಯ ಘಮಘಮಿಸುವ ತಂದೂರಿ ಕಬಾಬ್.",
    "time_en": "18 Mins",
    "time_kn": "18 ನಿಮಿಷ",
    "calories": "155 kcal",
    "servings_en": "3 Servings",
    "servings_kn": "3 ಜನರಿಗೆ",
    "tag_en": "Oyster • Achari Tikka",
    "tag_kn": "ಸಿಂಪಿ ಅಣಬೆ • ಅಚಾರಿ ಟಿಕ್ಕಾ",
    "ingredients_en": [
      "200g Fresh Whole Oyster Mushroom Clusters",
      "Achari masala: 1 tsp Fennel, 1/2 tsp Kalonji, 1/2 tsp Fenugreek & Mustard seeds (dry roasted and coarse ground)",
      "1/4 cup Thick Hung Curd",
      "1 tbsp Pure Cold-Pressed Mustard Oil",
      "1 tsp Kashmiri red chilli powder & Turmeric",
      "1 tbsp Lemon juice & Rock salt"
    ],
    "ingredients_kn": [
      "200 ಗ್ರಾಂ ತಾಜಾ ಸಿಂಪಿ ಅಣಬೆ ಗೊಂಚಲು",
      "ಅಚಾರಿ ಮಸಾಲ: ಸೋಂಪು, ಕಲೋಂಜಿ, ಮೆಂತ್ಯ, ಸಾಸಿವೆ ಪುಡಿ",
      "ಕಾಲು ಕಪ್ ಗಟ್ಟಿ ಮೊಸರು",
      "1 ಚಮಚ ಶುದ್ಧ ಸಾಸಿವೆ ಎಣ್ಣೆ",
      "ಕಾಶ್ಮೀರಿ ಖಾರದ ಪುಡಿ, ಅರಿಶಿನ",
      "ನಿಂಬೆರಸ ಮತ್ತು ಸೈಂಧವ ಲವಣ"
    ],
    "instructions_en": [
      "Whisk hung curd with smoking mustard oil, coarse achari spice powder, Kashmiri chilli, and lemon juice.",
      "Toss oyster mushroom clusters gently in the tangy marinade, coating every fluted gill.",
      "Rest for 15 minutes, then skewer or arrange on a hot cast-iron grill pan.",
      "Sear over high flame for 3 minutes per side until the edges char delightfully with smoky pickle notes.",
      "Serve piping hot with lachha onions and mint dip!"
    ],
    "instructions_kn": [
      "ಮೊಸರಿಗೆ ಸಾಸಿವೆ ಎಣ್ಣೆ, ಅಚಾರಿ ಮಸಾಲೆ ಪುಡಿ, ಖಾರದ ಪುಡಿ ಹಾಗೂ ನಿಂಬೆರಸ ಹಾಕಿ ಚೆನ್ನಾಗಿ ಕದಡಿ.",
      "ಸಿಂಪಿ ಅಣಬೆಯ ದಳಗಳಿಗೆ ಈ ಮಸಾಲೆಯನ್ನು ಲೇಪಿಸಿ 15 ನಿಮಿಷ ನೆನೆಯಲು ಬಿಡಿ.",
      "ಗ್ರಿಲ್ ತವಾ ಅಥವಾ ಕಡ್ಡಿಗಳಲ್ಲಿ ಜೋಡಿಸಿ ತೀಕ್ಷ್ಣ ಉರಿಯಲ್ಲಿ ಹುರಿಯಿರಿ.",
      "ಎರಡೂ ಬದಿ ಗರಿಗರಿಯಾಗಿ ಬೆಂದ ಮೇಲೆ ಬಿಸಿಬಿಸಿಯಾಗಿ ಸವಿಯಿರಿ!"
    ],
    "tip_en": "Smoking the mustard oil until it reaches faint smoke removes raw bitterness and enhances nutty warmth.",
    "tip_kn": "ಸಾಸಿವೆ ಎಣ್ಣೆಯನ್ನು ಒಮ್ಮೆ ಬಿಸಿ ಮಾಡಿ ತಣ್ಣಗಾಗಿಸಿ ಬಳಸಿದರೆ ಕಟು ವಾಸನೆ ಹೋಗಿ ಕಬಾಬ್ ಅದ್ಭುತ ರುಚಿ ನೀಡುತ್ತದೆ."
  },
  {
    "id": "oyster_kebab_6",
    "type": "oyster",
    "category": "kebab",
    "img": "assets/recipe_kebab.jpg",
    "title_en": "Zafrani Reshmi Oyster Mushroom Kebab",
    "title_kn": "ಜಾಫ್ರಾನಿ ರೇಷ್ಮಿ ಸಿಂಪಿ ಅಣಬೆ ಕಬಾಬ್ (Zafrani Reshmi)",
    "desc_en": "Royal Mughlai style silky kebabs coated in clotted malai cream, cashew-almond paste, crushed white peppercorns, and saffron-infused milk.",
    "desc_kn": "ಗೋಡಂಬಿ ಪೇಸ್ಟ್, ಕೆನೆ (ಮಲೈ), ಕೇಸರಿ ಮತ್ತು ಬಿಳಿ ಮೆಣಸಿನ ಮಸಾಲೆಯಲ್ಲಿ ನೆನೆಸಿ ಬೆಣ್ಣೆಯಲ್ಲಿ ಹುರಿದ ರೇಷ್ಮೆಯಂತಹ ಮೃದು ಕಬಾಬ್.",
    "time_en": "20 Mins",
    "time_kn": "20 ನಿಮಿಷ",
    "calories": "210 kcal",
    "servings_en": "3 Servings",
    "servings_kn": "3 ಜನರಿಗೆ",
    "tag_en": "Oyster • Royal Zafrani",
    "tag_kn": "ಸಿಂಪಿ ಅಣಬೆ • ರೇಷ್ಮಿ ಕಬಾಬ್",
    "ingredients_en": [
      "200g Fresh Oyster Mushroom clusters",
      "2 tbsp Cashew & Almond paste",
      "2 tbsp Fresh Malai (clotted cream)",
      "Pinch of pure Kashmiri saffron soaked in 2 tbsp warm milk",
      "1/2 tsp White pepper powder & crushed Green Cardamom",
      "1 tbsp Roasted gram flour (Besan) for sheen",
      "Cow butter for delicate basting"
    ],
    "ingredients_kn": [
      "200 ಗ್ರಾಂ ತಾಜಾ ಸಿಂಪಿ ಅಣಬೆ",
      "2 ಚಮಚ ಗೋಡಂಬಿ-ಬಾದಾಮಿ ಪೇಸ್ಟ್",
      "2 ಚಮಚ ತಾಜಾ ಹಾಲಿನ ಕೆನೆ",
      "ಬೆಚ್ಚಗಿನ ಹಾಲಿನಲ್ಲಿ ನೆನೆಸಿದ ಕೇಸರಿ ಎಸಳುಗಳು",
      "ಬಿಳಿ ಮೆಣಸಿನ ಪುಡಿ ಮತ್ತು ಏಲಕ್ಕಿ",
      "1 ಚಮಚ ಹುರಿದ ಕಡಲೆಹಿಟ್ಟು",
      "ಬೆಣ್ಣೆ ಮತ್ತು ಉಪ್ಪು"
    ],
    "instructions_en": [
      "Blend soaked cashews with cream and saffron milk to create a rich ivory silk marinade.",
      "Season with white pepper, cardamom powder, roasted besan, and salt.",
      "Coat oyster mushroom clusters thoroughly and allow flavors to marry for 20 minutes.",
      "Gently grill on a buttered pan over gentle medium heat until golden glaze appears on edges.",
      "Garnish with silver vark or saffron strands and serve warm!"
    ],
    "instructions_kn": [
      "ಗೋಡಂಬಿ, ಕೆನೆ ಮತ್ತು ಕೇಸರಿ ಹಾಲನ್ನು ನುಣ್ಣಗೆ ರುಬ್ಬಿ ರೇಷ್ಮಿ ಮಸಾಲೆ ತಯಾರಿಸಿ.",
      "ಇದಕ್ಕೆ ಬಿಳಿ ಮೆಣಸಿನ ಪುಡಿ, ಏಲಕ್ಕಿ ಹಾಗೂ ಕಡಲೆಹಿಟ್ಟು ಸೇರಿಸಿ ಕಲಸಿ.",
      "ಅಣಬೆ ದಳಗಳಿಗೆ ಲೇಪಿಸಿ 20 ನಿಮಿಷ ನೆನೆಯಲು ಬಿಡಿ.",
      "ತವಾದಲ್ಲಿ ಬೆಣ್ಣೆ ಹಾಕಿ ಮೃದು ಉರಿಯಲ್ಲಿ ಹೊಂಬಣ್ಣ ಬರುವವರೆಗೆ ಬೇಯಿಸಿ ಬಡಿಸಿ!"
    ],
    "tip_en": "White pepper maintains the immaculate royal ivory appearance without black specks.",
    "tip_kn": "ಬಿಳಿ ಮೆಣಸಿನ ಪುಡಿ ಬಳಸುವುದರಿಂದ ಕಬಾಬ್ ರಾಯಲ್ ಬಿಳಿ ಬಣ್ಣದಲ್ಲೇ ಕಂಗೊಳಿಸುತ್ತದೆ."
  },
  {
    "id": "oyster_kebab_7",
    "type": "oyster",
    "category": "kebab",
    "img": "assets/recipe_kebab.jpg",
    "title_en": "Malabar Spiced Kalmi Oyster Kebab",
    "title_kn": "ಮಲಬಾರ್ ಕಲ್ಮಿ ಸಿಂಪಿ ಅಣಬೆ ಕಬಾಬ್ (Malabar Kalmi)",
    "desc_en": "Coastal Kerala style spiced clusters coated in shallots, green peppercorns, fresh coconut milk paste, and curry leaf oil, pan-fried to crisp perfection.",
    "desc_kn": "ತೆಂಗಿನಹಾಲು, ಸಣ್ಣ ಈರುಳ್ಳಿ, ಕರಿಬೇವು ಮತ್ತು ಹಸಿರು ಕಾಳುಮೆಣಸಿನ ಮಸಾಲೆಯಲ್ಲಿ ಹುರಿದ ಕರಾವಳಿ ಶೈಲಿಯ ಕಲ್ಮಿ ಕಬಾಬ್.",
    "time_en": "18 Mins",
    "time_kn": "18 ನಿಮಿಷ",
    "calories": "175 kcal",
    "servings_en": "3 Servings",
    "servings_kn": "3 ಜನರಿಗೆ",
    "tag_en": "Oyster • Malabar Roast",
    "tag_kn": "ಸಿಂಪಿ ಅಣಬೆ • ಮಲಬಾರ್ ಕಬಾಬ್",
    "ingredients_en": [
      "200g Fresh Oyster Mushroom clusters",
      "Malabar paste: 6 Shallots, 2 Garlic cloves, 1 tbsp crushed Black peppercorns, sprig of Curry leaves",
      "2 tbsp Thick Fresh Coconut Milk",
      "1 tsp Fennel powder & 1/2 tsp Turmeric",
      "1 tbsp Rice flour for crunch",
      "Cold-pressed coconut oil for shallow frying"
    ],
    "ingredients_kn": [
      "200 ಗ್ರಾಂ ತಾಜಾ ಸಿಂಪಿ ಅಣಬೆ",
      "ಮಲಬಾರ್ ಪೇಸ್ಟ್: ಸಣ್ಣ ಈರುಳ್ಳಿ, ಬೆಳ್ಳುಳ್ಳಿ, ಕಾಳುಮೆಣಸು, ಕರಿಬೇವು",
      "2 ಚಮಚ ದಪ್ಪ ತೆಂಗಿನ ಹಾಲು",
      "ಸೋಂಪು ಪುಡಿ ಮತ್ತು ಅರಿಶಿನ",
      "1 ಚಮಚ ಅಕ್ಕಿಹಿಟ್ಟು",
      "ತೆಂಗಿನ ಎಣ್ಣೆ ಮತ್ತು ಉಪ್ಪು"
    ],
    "instructions_en": [
      "Coarsely crush shallots, black pepper, and curry leaves; stir in coconut milk and rice flour.",
      "Massage the Malabar paste onto oyster mushroom fans.",
      "Heat coconut oil in a seasoned cast-iron skillet.",
      "Fry clusters for 3 minutes on each side until deeply browned and crunchy on the gills.",
      "Garnish with crispy fried curry leaves and lemon!"
    ],
    "instructions_kn": [
      "ಸಣ್ಣ ಈರುಳ್ಳಿ, ಕಾಳುಮೆಣಸು, ಕರಿಬೇವಿಗೆ ತೆಂಗಿನಹಾಲು ಮತ್ತು ಅಕ್ಕಿಹಿಟ್ಟು ಬೆರೆಸಿ ಪೇಸ್ಟ್ ಮಾಡಿ.",
      "ಅಣಬೆ ದಳಗಳಿಗೆ ಚೆನ್ನಾಗಿ ಲೇಪಿಸಿ.",
      "ಕಾದ ತೆಂಗಿನ ಎಣ್ಣೆಯಲ್ಲಿ ಎರಡೂ ಬದಿ ಗರಿಗರಿಯಾಗುವಂತೆ ಹುರಿಯಿರಿ.",
      "ಹುರಿದ ಕರಿಬೇವು ಮತ್ತು ನಿಂಬೆಹಣ್ಣಿನೊಂದಿಗೆ ಬಡಿಸಿ!"
    ],
    "tip_en": "Rice flour creates a light, ultra-crispy crust when fried in cold-pressed coconut oil.",
    "tip_kn": "ಅಕ್ಕಿಹಿಟ್ಟು ಸೇರಿಸುವುದರಿಂದ ತೆಂಗಿನ ಎಣ್ಣೆಯಲ್ಲಿ ಹುರಿದಾಗ ಅತಿ ಗರಿಗರಿಯಾದ ಕ್ರಸ್ಟ್ ಸಿಗುತ್ತದೆ."
  },
  {
    "id": "oyster_kebab_8",
    "type": "oyster",
    "category": "kebab",
    "img": "assets/recipe_tikka.jpg",
    "title_en": "Kasturi Methi Oyster Tikka Kebab",
    "title_kn": "ಕಸ್ತೂರಿ ಮೇಥಿ ಸಿಂಪಿ ಅಣಬೆ ಟಿಕ್ಕಾ (Kasturi Methi Kebab)",
    "desc_en": "Aromatic fenugreek-infused tandoori clusters steeped in roasted kasuri methi, ajwain, curd, and smoked paprika.",
    "desc_kn": "ಘಮಘಮಿಸುವ ಒಣ ಮೆಂತ್ಯ ಸೊಪ್ಪು (ಕಸ್ತೂರಿ ಮೇಥಿ), ಅಜ್ವೈನ್ ಮತ್ತು ಮೊಸರಿನ ಮಸಾಲೆಯಲ್ಲಿ ಸುಟ್ಟ ಸ್ವಾದಿಷ್ಟ ಟಿಕ್ಕಾ.",
    "time_en": "16 Mins",
    "time_kn": "16 ನಿಮಿಷ",
    "calories": "145 kcal",
    "servings_en": "3 Servings",
    "servings_kn": "3 ಜನರಿಗೆ",
    "tag_en": "Oyster • Herb Tikka",
    "tag_kn": "ಸಿಂಪಿ ಅಣಬೆ • ಕಸ್ತೂರಿ ಮೇಥಿ",
    "ingredients_en": [
      "200g Fresh Oyster Mushrooms",
      "2 tbsp Fragrant Kasuri Methi (crushed fine between palms)",
      "1/2 tsp Ajwain (carom seeds)",
      "3 tbsp Thick hung yogurt",
      "1 tsp Kashmiri red chilli & chaat masala",
      "1 tbsp Mustard oil & Ghee for basting"
    ],
    "ingredients_kn": [
      "200 ಗ್ರಾಂ ಸಿಂಪಿ ಅಣಬೆ",
      "2 ಚಮಚ ಕಸ್ತೂರಿ ಮೇಥಿ (ಕೈಯಲ್ಲಿ ಉಜ್ಜಿದ್ದು)",
      "ಅರ್ಧ ಚಮಚ ಓಮದ ಕಾಳು (ಅಜ್ವೈನ್)",
      "3 ಚಮಚ ಗಟ್ಟಿ ಮೊಸರು",
      "ಕಾಶ್ಮೀರಿ ಖಾರದ ಪುಡಿ, ಚಾಟ್ ಮಸಾಲ",
      "ಸಾಸಿವೆ ಎಣ್ಣೆ ಮತ್ತು ತುಪ್ಪ"
    ],
    "instructions_en": [
      "Rub kasuri methi between your palms to release potent herbal essential oils.",
      "Combine with ajwain, hung yogurt, mustard oil, chilli, and salt.",
      "Gently coat mushroom fans and rest for 10 minutes.",
      "Roast on a hot ridged tawa for 2-3 minutes per side until aromatic blister spots develop.",
      "Serve hot with sliced radish and spicy green chutney!"
    ],
    "instructions_kn": [
      "ಕಸ್ತೂರಿ ಮೇಥಿಯನ್ನು ಅಂಗೈಯಲ್ಲಿ ಉಜ್ಜಿ ಘಮ ಬರುವಂತೆ ಮಾಡಿ ಮೊಸರಿನ ಮಸಾಲೆಯೊಂದಿಗೆ ಬೆರೆಸಿ.",
      "ಅಣಬೆ ದಳಗಳಿಗೆ ಲೇಪಿಸಿ 10 ನಿಮಿಷ ನೆನೆಯಲು ಬಿಡಿ.",
      "ಕಾದ ತವಾದಲ್ಲಿ ತುಪ್ಪ ಸವರಿ ಎರಡೂ ಬದಿ ಹುರಿದು ಬಿಸಿಯಾಗಿ ಬಡಿಸಿ!"
    ],
    "tip_en": "Crushing dry methi between warm palms activates its earthy bittersweet perfume.",
    "tip_kn": "ಒಣ ಮೆಂತ್ಯ ಸೊಪ್ಪನ್ನು ಅಂಗೈಯಲ್ಲಿ ಉಜ್ಜುವುದರಿಂದ ಅದರ ನೈಜ ಪರಿಮಳ ಹೊರಹೊಮ್ಮುತ್ತದೆ."
  },
  {
    "id": "oyster_16",
    "type": "oyster",
    "category": "coastal",
    "img": "assets/recipe_ghee_roast.jpg",
    "title_en": "Kundapur Spiced Oyster Mushroom Masala",
    "title_kn": "ಕುಂದಾಪುರ ಸಿಂಪಿ ಅಣಬೆ ಮಸಾಲಾ (Kundapur Oyster)",
    "desc_en": "Traditional coastal Karnataka red masala made from roasted Byadgi chillies, coriander, garlic, and tamarind simmered with shredded oyster mushrooms.",
    "desc_kn": "ಬ್ಯಾಡಗಿ ಮೆಣಸಿನಕಾಯಿ, ಬೆಳ್ಳುಳ್ಳಿ ಮತ್ತು ಹುಣಸೆಹಣ್ಣಿನ ಸಾಂಪ್ರದಾಯಿಕ ಕುಂದಾಪುರ ಕೆಂಪು ಮಸಾಲೆಯಲ್ಲಿ ಬೆಂದ ಸಿಂಪಿ ಅಣಬೆ ಗ್ರೇವಿ.",
    "time_en": "25 Mins",
    "time_kn": "25 ನಿಮಿಷ",
    "calories": "175 kcal",
    "servings_en": "3-4 Servings",
    "servings_kn": "3-4 ಜನರಿಗೆ",
    "tag_en": "Oyster • Coastal Karnataka",
    "tag_kn": "ಸಿಂಪಿ ಅಣಬೆ • ಕುಂದಾಪುರ ಶೈಲಿ",
    "ingredients_en": [
      "250g Fresh Oyster Mushrooms (shredded)",
      "Kundapur masala: 6 Byadgi chillies, 1 tbsp Coriander, 1/2 tsp Cumin, 1/4 tsp Fenugreek, 6 Garlic cloves, marble tamarind",
      "1 Onion chopped & 1 sprig Curry leaves",
      "2 tbsp Coconut oil & Salt"
    ],
    "ingredients_kn": [
      "250 ಗ್ರಾಂ ಸಿಂಪಿ ಅಣಬೆ",
      "ಕುಂದಾಪುರ ಮಸಾಲಾ: ಬ್ಯಾಡಗಿ ಮೆಣಸು, ಕೊತ್ತಂಬರಿ, ಜೀರಿಗೆ, ಮೆಂತ್ಯ, ಬೆಳ್ಳುಳ್ಳಿ, ಹುಣಸೆಹಣ್ಣು",
      "ಈರುಳ್ಳಿ ಮತ್ತು ಕರಿಬೇವು",
      "ತೆಂಗಿನ ಎಣ್ಣೆ ಮತ್ತು ಉಪ್ಪು"
    ],
    "instructions_en": [
      "Roast spices and grind with tamarind and garlic into a fine crimson paste.",
      "Heat coconut oil, splutter curry leaves and sauté onions until golden.",
      "Add shredded oyster mushrooms and cook for 4 minutes.",
      "Stir in ground Kundapur masala with 1/2 cup water; simmer for 8 minutes until oil separates.",
      "Serve piping hot with boiled rice or kori rotti!"
    ],
    "instructions_kn": [
      "ಮಸಾಲೆ ಪದಾರ್ಥಗಳನ್ನು ಹುರಿದು ಹುಣಸೆಹಣ್ಣು, ಬೆಳ್ಳುಳ್ಳಿ ಜೊತೆ ನುಣ್ಣಗೆ ರುಬ್ಬಿಕೊಳ್ಳಿ.",
      "ತೆಂಗಿನ ಎಣ್ಣೆಯಲ್ಲಿ ಕರಿಬೇವು, ಈರುಳ್ಳಿ ಹುರಿದು ಅಣಬೆ ಸೇರಿಸಿ 4 ನಿಮಿಷ ಬೇಯಿಸಿ.",
      "ರುಬ್ಬಿದ ಮಸಾಲೆ ಹಾಗೂ ಸ್ವಲ್ಪ ನೀರು ಸೇರಿಸಿ ಎಣ್ಣೆ ತೇಲುವವರೆಗೆ 8 ನಿಮಿಷ ಕುದಿಸಿ ಬಡಿಸಿ!"
    ],
    "tip_en": "Kundapur masala pairs extraordinarily well with coastal steamed rice breads.",
    "tip_kn": "ಈ ಗ್ರೇವಿಯು ಅಕ್ಕಿರೊಟ್ಟಿ ಹಾಗೂ ಕುಚ್ಚಲಕ್ಕಿ ಅನ್ನದೊಂದಿಗೆ ಅದ್ಭುತ ರುಚಿ ನೀಡುತ್ತದೆ."
  },
  {
    "id": "oyster_17",
    "type": "oyster",
    "category": "coastal",
    "img": "assets/recipe_sambar.jpg",
    "title_en": "Udupi Temple Style Oyster Saaru",
    "title_kn": "ಉಡುಪಿ ಸಿಂಪಿ ಅಣಬೆ ಸಾರು (Udupi Oyster Saaru)",
    "desc_en": "Fragrant, comforting South Indian thin broth brewed with freshly ground rasam powder, ripe tomatoes, tamarind, and tender shredded oyster petals.",
    "desc_kn": "ತಾಜಾ ಸಾರಿನ ಪುಡಿ, ಟೊಮೆಟೊ, ಹುಣಸೆರಸ ಹಾಗೂ ಹಸಿ ಸಿಂಪಿ ಅಣಬೆಯ ದಳಗಳು ಬೆರೆತ ಸಾಂಪ್ರದಾಯಿಕ ಉಡುಪಿ ಅಣಬೆ ಸಾರು.",
    "time_en": "18 Mins",
    "time_kn": "18 ನಿಮಿಷ",
    "calories": "95 kcal",
    "servings_en": "4 Servings",
    "servings_kn": "4 ಜನರಿಗೆ",
    "tag_en": "Oyster • Udupi Rasam",
    "tag_kn": "ಸಿಂಪಿ ಅಣಬೆ • ಉಡುಪಿ ಸಾರು",
    "ingredients_en": [
      "150g Fresh Oyster Mushrooms (thin strips)",
      "2 ripe Tomatoes chopped",
      "1 tbsp Fresh Udupi Rasam powder",
      "1 tbsp Tamarind extract & 1 tsp Jaggery",
      "Tempering: Ghee, Mustard seeds, Curry leaves, Asafoetida (Hing)"
    ],
    "ingredients_kn": [
      "150 ಗ್ರಾಂ ಸಿಂಪಿ ಅಣಬೆ",
      "2 ಟೊಮೆಟೊ",
      "1 ಚಮಚ ಉಡುಪಿ ಸಾರಿನ ಪುಡಿ",
      "ಹುಣಸೆರಸ ಮತ್ತು ಸ್ವಲ್ಪ ಬೆಲ್ಲ",
      "ಒಗ್ಗರಣೆಗೆ ತುಪ್ಪ, ಸಾಸಿವೆ, ಕರಿಬೇವು, ಇಂಗು"
    ],
    "instructions_en": [
      "Boil tomatoes with tamarind juice, rasam powder, turmeric, and jaggery.",
      "Add shredded oyster mushrooms and cook gently for 5 minutes.",
      "Prepare aromatic tempering with pure ghee, mustard, hing, and curry leaves; pour sizzle over saaru.",
      "Garnish with chopped coriander and serve with hot steaming rice!"
    ],
    "instructions_kn": [
      "ಟೊಮೆಟೊ, ಹುಣಸೆರಸ, ಸಾರಿನ ಪುಡಿ, ಅರಿಶಿನ ಮತ್ತು ಬೆಲ್ಲ ಸೇರಿಸಿ ಚೆನ್ನಾಗಿ ಕುದಿಸಿ.",
      "ಅಣಬೆ ಚೂರುಗಳನ್ನು ಹಾಕಿ 5 ನಿಮಿಷ ಸಣ್ಣ ಉರಿಯಲ್ಲಿ ಬೇಯಿಸಿ.",
      "ತುಪ್ಪ, ಸಾಸಿವೆ, ಇಂಗು, ಕರಿಬೇವು ಒಗ್ಗರಣೆ ಹಾಕಿ ಬಿಸಿ ಅನ್ನದೊಂದಿಗೆ ಸವಿಯಿರಿ!"
    ],
    "tip_en": "Oyster mushrooms impart an earthy rich mushroom umami that makes rasam naturally restorative.",
    "tip_kn": "ಅಣಬೆ ಬೆರೆತ ಸಾರು ಶೀತ, ನೆಗಡಿ ನಿವಾರಣೆಗೆ ಹಾಗೂ ರೋಗನಿರೋಧಕ ಶಕ್ತಿಗೆ ಅತ್ಯುತ್ತಮ."
  },
  {
    "id": "oyster_18",
    "type": "oyster",
    "category": "coastal",
    "img": "assets/recipe_oyster_sukka.jpg",
    "title_en": "Malnad Forest Style Oyster Pepper Sambar",
    "title_kn": "ಮಲೆನಾಡು ಸಿಂಪಿ ಅಣಬೆ ಸಾಂಬಾರ್ (Malnad Sambar)",
    "desc_en": "Western Ghats style rustic sambar made with toor dal, wild black pepper, coconut paste, and forest-grade oyster mushrooms.",
    "desc_kn": "ತೊಗರಿಬೇಳೆ, ಕಾಳುಮೆಣಸು ಮತ್ತು ಕಾಯಿತುರಿ ಮಸಾಲೆಯೊಂದಿಗೆ ತಯಾರಿಸಿದ ಮಲೆನಾಡಿನ ಶೈಲಿಯ ಘಮಘಮಿಸುವ ಸಾಂಬಾರ್.",
    "time_en": "25 Mins",
    "time_kn": "25 ನಿಮಿಷ",
    "calories": "160 kcal",
    "servings_en": "4 Servings",
    "servings_kn": "4 ಜನರಿಗೆ",
    "tag_en": "Oyster • Malnad Special",
    "tag_kn": "ಸಿಂಪಿ ಅಣಬೆ • ಮಲೆನಾಡು ಸಾಂಬಾರ್",
    "ingredients_en": [
      "200g Fresh Oyster Mushrooms",
      "1/2 cup Cooked Toor Dal mashed",
      "1/2 cup Grated coconut ground with pepper and cumin",
      "1 tbsp Sambar powder, Tamarind, Drumstick or potatoes",
      "Mustard and curry leaf tempering"
    ],
    "ingredients_kn": [
      "200 ಗ್ರಾಂ ಸಿಂಪಿ ಅಣಬೆ",
      "ಅರ್ಧ ಕಪ್ ಬೆಂದ ತೊಗರಿಬೇಳೆ",
      "ಕಾಯಿತುರಿ, ಕಾಳುಮೆಣಸು, ಜೀರಿಗೆ ರುಬ್ಬಿದ ಪೇಸ್ಟ್",
      "ಸಾಂಬಾರ್ ಪುಡಿ, ಹುಣಸೆರಸ",
      "ಒಗ್ಗರಣೆ ಸಾಮಗ್ರಿಗಳು"
    ],
    "instructions_en": [
      "Cook vegetables and oyster mushrooms in tamarind water with sambar powder.",
      "Pour in mashed cooked toor dal and ground coconut-pepper paste.",
      "Bring to a rolling boil for 6 minutes, finish with a fragrant ghee tadka.",
      "Serve with ragi mudde or piping hot rice!"
    ],
    "instructions_kn": [
      "ಹುಣಸೆ ನೀರಿನಲ್ಲಿ ಸಾಂಬಾರ್ ಪುಡಿ ಹಾಕಿ ತರಕಾರಿ ಮತ್ತು ಅಣಬೆ ಬೇಯಿಸಿಕೊಳ್ಳಿ.",
      "ಬೆಂದ ಬೇಳೆ ಮತ್ತು ತೆಂಗಿನ ಮಸಾಲೆ ಸೇರಿಸಿ 6 ನಿಮಿಷ ಚೆನ್ನಾಗಿ ಕುದಿಸಿ.",
      "ತುಪ್ಪದ ಒಗ್ಗರಣೆ ನೀಡಿ ರಾಗಿಮುದ್ದೆ ಅಥವಾ ಅನ್ನದೊಂದಿಗೆ ಬಡಿಸಿ!"
    ],
    "tip_en": "Pairs exceptionally well with piping hot Ragi Mudde (Finger millet balls).",
    "tip_kn": "ಬಿಸಿಬಿಸಿ ರಾಗಿಮುದ್ದೆಯೊಂದಿಗೆ ಸವಿಯಲು ಇದು ಅತ್ಯಂತ ಪ್ರಶಸ್ತವಾದ ಅಣಬೆ ಸಾಂಬಾರ್."
  },
  {
    "id": "oyster_19",
    "type": "oyster",
    "category": "curry",
    "img": "assets/recipe_korma.jpg",
    "title_en": "Oyster Mushroom Butter Masala",
    "title_kn": "ಸಿಂಪಿ ಅಣಬೆ ಬಟರ್ ಮಸಾಲಾ (Butter Masala)",
    "desc_en": "Silky, rich North Indian restaurant-style tomato cashew makhani gravy infused with pan-roasted oyster mushroom petals and kasuri methi.",
    "desc_kn": "ಗೋಡಂಬಿ, ಬೆಣ್ಣೆ ಮತ್ತು ಟೊಮೆಟೊ ಗ್ರೇವಿಯಲ್ಲಿ ತಯಾರಿಸಿದ ಶ್ರೀಮಂತ ಪಂಜಾಬಿ ಶೈಲಿಯ ಅಣಬೆ ಬಟರ್ ಮಸಾಲಾ.",
    "time_en": "24 Mins",
    "time_kn": "24 ನಿಮಿಷ",
    "calories": "230 kcal",
    "servings_en": "3-4 Servings",
    "servings_kn": "3-4 ಜನರಿಗೆ",
    "tag_en": "Oyster • Makhani Gravy",
    "tag_kn": "ಸಿಂಪಿ ಅಣಬೆ • ಬಟರ್ ಮಸಾಲಾ",
    "ingredients_en": [
      "250g Fresh Oyster Mushrooms",
      "3 ripe Tomatoes & 10 Cashews pureed smooth",
      "2 tbsp Butter + 1 tbsp Cream",
      "1 tsp Kashmiri chilli powder, 1/2 tsp Garam masala",
      "1 tsp Kasuri methi & pinch of sugar"
    ],
    "ingredients_kn": [
      "250 ಗ್ರಾಂ ಸಿಂಪಿ ಅಣಬೆ",
      "3 ಟೊಮೆಟೊ ಮತ್ತು 10 ಗೋಡಂಬಿ ಪ್ಯೂರಿ",
      "ಬೆಣ್ಣೆ ಮತ್ತು ತಾಜಾ ಕೆನೆ",
      "ಕಾಶ್ಮೀರಿ ಖಾರದ ಪುಡಿ, ಗರಂ ಮಸಾಲ",
      "ಕಸ್ತೂರಿ ಮೇಥಿ ಮತ್ತು ಸಕ್ಕರೆ"
    ],
    "instructions_en": [
      "Sear oyster mushrooms in 1 tsp butter for 3 minutes; set aside.",
      "Sauté ginger-garlic in butter, add tomato-cashew puree and cook till butter releases.",
      "Add Kashmiri chilli, garam masala, salt, and splash of water; simmer 5 mins.",
      "Toss in seared oyster mushrooms, fresh cream, and crushed kasuri methi.",
      "Serve warm with garlic naan, butter kulcha, or jeera rice!"
    ],
    "instructions_kn": [
      "ಅಣಬೆಯನ್ನು ಬೆಣ್ಣೆಯಲ್ಲಿ 3 ನಿಮಿಷ ಹುರಿದು ಪಕ್ಕಕ್ಕಿಡಿ.",
      "ಟೊಮೆಟೊ-ಗೋಡಂಬಿ ಪ್ಯೂರಿಯನ್ನು ಬೆಣ್ಣೆಯಲ್ಲಿ ಎಣ್ಣೆ ಬಿಡುವವರೆಗೆ ಹುರಿಯಿರಿ.",
      "ಮಸಾಲೆ ಪುಡಿಗಳು ಮತ್ತು ನೀರು ಸೇರಿಸಿ 5 ನಿಮಿಷ ಕುದಿಸಿ.",
      "ಹುರಿದ ಅಣಬೆ, ಕಸ್ತೂರಿ ಮೇಥಿ ಮತ್ತು ಕ್ರೀಮ್ ಸೇರಿಸಿ ನಾನ್ ಅಥವಾ ಕುಲ್ಚಾ ಜೊತೆ ಬಡಿಸಿ!"
    ],
    "tip_en": "Searing mushrooms first seals moisture and prevents thinning of the makhani sauce.",
    "tip_kn": "ಅಣಬೆಯನ್ನು ಮೊದಲೇ ಬೆಣ್ಣೆಯಲ್ಲಿ ಹುರಿದುಕೊಂಡರೆ ಗ್ರೇವಿ ತೆಳುವಾಗುವುದಿಲ್ಲ."
  },
  {
    "id": "oyster_20",
    "type": "oyster",
    "category": "curry",
    "img": "assets/recipe_korma.jpg",
    "title_en": "Kashmiri Rogan Josh Oyster Mushroom",
    "title_kn": "ಕಾಶ್ಮೀರಿ ರೋಗನ್ ಜೋಶ್ ಸಿಂಪಿ ಅಣಬೆ (Rogan Josh)",
    "desc_en": "Slow-simmered in aromatic fennel, dry ginger powder (saunth), ratanjot or Kashmiri chilli oil, with yogurt reduction.",
    "desc_kn": "ಸೋಂಪು, ಒಣಶುಂಠಿ ಪುಡಿ ಮತ್ತು ಕಾಶ್ಮೀರಿ ಮಸಾಲೆಗಳ ಸಾರದಲ್ಲಿ ಮೃದುವಾಗಿ ಬೆಂದ ರೋಗನ್ ಜೋಶ್ ಅಣಬೆ ಕರಿ.",
    "time_en": "26 Mins",
    "time_kn": "26 ನಿಮಿಷ",
    "calories": "185 kcal",
    "servings_en": "3 Servings",
    "servings_kn": "3 ಜನರಿಗೆ",
    "tag_en": "Oyster • Kashmiri Royal",
    "tag_kn": "ಸಿಂಪಿ ಅಣಬೆ • ರೋಗನ್ ಜೋಶ್",
    "ingredients_en": [
      "250g Fresh Oyster Mushrooms",
      "1 tbsp Kashmiri red chilli powder",
      "1 tsp Fennel powder (Saunf) & 1/2 tsp Dry Ginger (Saunth)",
      "1/2 cup Whisked Yogurt",
      "Whole cloves, black cardamom, and mustard oil"
    ],
    "ingredients_kn": [
      "250 ಗ್ರಾಂ ಸಿಂಪಿ ಅಣಬೆ",
      "ಕಾಶ್ಮೀರಿ ಖಾರದ ಪುಡಿ",
      "ಸೋಂಪು ಪುಡಿ ಮತ್ತು ಒಣಶುಂಠಿ ಪುಡಿ",
      "ಅರ್ಧ ಕಪ್ ಗಟ್ಟಿ ಮೊಸರು",
      "ಲವಂಗ, ದೊಡ್ಡ ಏಲಕ್ಕಿ ಮತ್ತು ಸಾಸಿವೆ ಎಣ್ಣೆ"
    ],
    "instructions_en": [
      "Sear mushrooms lightly in mustard oil with whole cloves and cardamom.",
      "Whisk yogurt with Kashmiri chilli, saunf, and saunth powder; pour into pan on low heat.",
      "Stir continuously until oil glistens on the surface.",
      "Cover and simmer on low heat for 10 minutes until deep ruby red sauce coats the mushrooms.",
      "Serve hot with steamed basmati rice!"
    ],
    "instructions_kn": [
      "ಸಾಸಿವೆ ಎಣ್ಣೆಯಲ್ಲಿ ಮಸಾಲೆ ಹಾಕಿ ಅಣಬೆಯನ್ನು ಹುರಿಯಿರಿ.",
      "ಮೊಸರಿಗೆ ಸೋಂಪು, ಒಣಶುಂಠಿ ಮತ್ತು ಖಾರದ ಪುಡಿ ಬೆರೆಸಿ ಸಣ್ಣ ಉರಿಯಲ್ಲಿ ನಿರಂತರವಾಗಿ ಕೈಯಾಡಿಸಿ.",
      "ಎಣ್ಣೆ ತೇಲುವವರೆಗೆ 10 ನಿಮಿಷ ಕುದಿಸಿ ಬಿಸಿ ಅನ್ನದೊಂದಿಗೆ ಬಡಿಸಿ!"
    ],
    "tip_en": "Cook yogurt on low heat while stirring to prevent curdling in traditional Kashmiri style.",
    "tip_kn": "ಮೊಸರನ್ನು ಸಣ್ಣ ಉರಿಯಲ್ಲಿ ನಿಧಾನವಾಗಿ ಕೈಯಾಡಿಸುತ್ತಾ ಬೇಯಿಸಬೇಕು."
  },
  {
    "id": "oyster_21",
    "type": "oyster",
    "category": "curry",
    "img": "assets/recipe_korma.jpg",
    "title_en": "Goan Oyster Mushroom Xacuti",
    "title_kn": "ಗೋವನ್ ಸಿಂಪಿ ಅಣಬೆ ಶಾಕುತಿ (Goan Xacuti)",
    "desc_en": "Complex Goan curry featuring dry-roasted grated coconut, poppy seeds, star anise, and whole spices braised with fresh oyster mushroom petals.",
    "desc_kn": "ಹುರಿದ ತೆಂಗಿನಕಾಯಿ, ಗಸಗಸೆ ಮತ್ತು ನಕ್ಷತ್ರ ಮೊಗ್ಗು ಮಸಾಲೆಯ ಸಾಂಪ್ರದಾಯಿಕ ಗೋವಾದ ಶಾಕುತಿ ಗ್ರೇವಿ.",
    "time_en": "28 Mins",
    "time_kn": "28 ನಿಮಿಷ",
    "calories": "195 kcal",
    "servings_en": "4 Servings",
    "servings_kn": "4 ಜನರಿಗೆ",
    "tag_en": "Oyster • Goan Heritage",
    "tag_kn": "ಸಿಂಪಿ ಅಣಬೆ • ಗೋವನ್ ಶಾಕುತಿ",
    "ingredients_en": [
      "250g Fresh Oyster Mushrooms",
      "Xacuti paste: 1 cup roasted grated coconut, 1 tbsp poppy seeds, star anise, nutmeg, black peppercorns",
      "1 Onion & 2 Green chillies",
      "1 tbsp Tamarind pulp & Coconut oil"
    ],
    "ingredients_kn": [
      "250 ಗ್ರಾಂ ಸಿಂಪಿ ಅಣಬೆ",
      "ಶಾಕುತಿ ಮಸಾಲ: ಹುರಿದ ತೆಂಗಿನಕಾಯಿ, ಗಸಗಸೆ, ನಕ್ಷತ್ರ ಮೊಗ್ಗು, ಜಾಯಿಕಾಯಿ, ಕಾಳುಮೆಣಸು",
      "ಈರುಳ್ಳಿ ಮತ್ತು ಹಸಿಮೆಣಸು",
      "ಹುಣಸೆರಸ ಮತ್ತು ತೆಂಗಿನ ಎಣ್ಣೆ"
    ],
    "instructions_en": [
      "Slow-roast grated coconut and whole spices until dark coffee-brown; grind to silk paste.",
      "Sauté onions in coconut oil, add oyster mushrooms and cook for 4 minutes.",
      "Stir in dark roasted Xacuti paste, tamarind, and water.",
      "Simmer for 10 minutes until aromatic oil forms a layer on top.",
      "Serve hot with pav bread or unpolished red rice!"
    ],
    "instructions_kn": [
      "ತೆಂಗಿನತುರಿ ಮತ್ತು ಮಸಾಲೆಗಳನ್ನು ಕಂದು ಬಣ್ಣಕ್ಕೆ ಹುರಿದು ನುಣ್ಣಗೆ ರುಬ್ಬಿಕೊಳ್ಳಿ.",
      "ಈರುಳ್ಳಿ ಹುರಿದು ಅಣಬೆ ಸೇರಿಸಿ, ರುಬ್ಬಿದ ಮಸಾಲೆ ಹಾಗೂ ಹುಣಸೆರಸ ಹಾಕಿ 10 ನಿಮಿಷ ಕುದಿಸಿ.",
      "ಗೋವನ್ ಪಾವ್ ಅಥವಾ ಅನ್ನದೊಂದಿಗೆ ಸವಿಯಿರಿ!"
    ],
    "tip_en": "Dark roasting the coconut gives Xacuti its signature complex earthy depth.",
    "tip_kn": "ತೆಂಗಿನತುರಿಯನ್ನು ಕಡು ಕಂದು ಬಣ್ಣಕ್ಕೆ ಹುರಿಯುವುದರಿಂದ ಶಾಕುತಿಗೆ ಅಸಲಿ ಬಣ್ಣ ಮತ್ತು ಘಮ ಬರುತ್ತದೆ."
  },
  {
    "id": "oyster_22",
    "type": "oyster",
    "category": "dry",
    "img": "assets/recipe_oyster_garlic.jpg",
    "title_en": "Chettinad Crispy Oyster Chukka",
    "title_kn": "ಚೆಟ್ಟಿನಾಡ್ ಗರಿಗರಿ ಸಿಂಪಿ ಅಣಬೆ ಚುಕ್ಕಾ (Oyster Chukka)",
    "desc_en": "South Indian spicy dry roast made with shallots, crushed fennel, fresh curry leaves, and stone-ground peppercorns.",
    "desc_kn": "ಚಿಕ್ಕ ಈರುಳ್ಳಿ, ಸೋಂಪು, ಕರಿಬೇವು ಮತ್ತು ಕಾಳುಮೆಣಸಿನಲ್ಲಿ ಹುರಿದ ತಮಿಳುನಾಡಿನ ಪ್ರಸಿದ್ಧ ಅಣಬೆ ಚುಕ್ಕಾ ಫ್ರೈ.",
    "time_en": "18 Mins",
    "time_kn": "18 ನಿಮಿಷ",
    "calories": "150 kcal",
    "servings_en": "3 Servings",
    "servings_kn": "3 ಜನರಿಗೆ",
    "tag_en": "Oyster • Chettinad Dry",
    "tag_kn": "ಸಿಂಪಿ ಅಣಬೆ • ಚೆಟ್ಟಿನಾಡ್ ಚುಕ್ಕಾ",
    "ingredients_en": [
      "200g Fresh Oyster Mushrooms (shredded)",
      "10 Shallots (small onions) halved",
      "1 tbsp Coarsely crushed Black pepper & 1 tsp Fennel seeds",
      "2 sprigs Fresh Curry leaves",
      "1 tbsp Cold-pressed sesame oil (Gingelly oil)"
    ],
    "ingredients_kn": [
      "200 ಗ್ರಾಂ ಸಿಂಪಿ ಅಣಬೆ",
      "10 ಚಿಕ್ಕ ಸಾಂಬಾರ್ ಈರುಳ್ಳಿ",
      "ಜಜ್ಜಿದ ಕಾಳುಮೆಣಸು ಮತ್ತು ಸೋಂಪು",
      "ತಾಜಾ ಕರಿಬೇವು",
      "ಎಳ್ಳೆಣ್ಣೆ ಮತ್ತು ಉಪ್ಪು"
    ],
    "instructions_en": [
      "Heat gingelly oil, splutter fennel and curry leaves, add shallots and fry till browned.",
      "Add shredded oyster mushrooms and sauté on high flame till moisture vanishes.",
      "Sprinkle crushed pepper, turmeric, and salt; toss continuously for 3 minutes.",
      "Serve as a spicy starter or side dish with rasam rice!"
    ],
    "instructions_kn": [
      "ಎಳ್ಳೆಣ್ಣೆಯಲ್ಲಿ ಸೋಂಪು, ಕರಿಬೇವು, ಸಾಂಬಾರ್ ಈರುಳ್ಳಿ ಹಾಕಿ ಹೊಂಬಣ್ಣಕ್ಕೆ ಹುರಿಯಿರಿ.",
      "ಅಣಬೆ ಸೇರಿಸಿ ಹೆಚ್ಚಿನ ಉರಿಯಲ್ಲಿ ತೇವಾಂಶ ಇಂಗುವವರೆಗೆ ಹುರಿಯಿರಿ.",
      "ಕಾಳುಮೆಣಸಿನ ಪುಡಿ ಉದುರಿಸಿ 3 ನಿಮಿಷ ಫ್ರೈ ಮಾಡಿ ಬಿಸಿ ರಸಂ ಅನ್ನದ ಜೊತೆ ಸವಿಯಿರಿ!"
    ],
    "tip_en": "Cold-pressed gingelly oil gives the authentic Tamil Chettinad flavor profile.",
    "tip_kn": "ಅಪ್ಪಟ ಎಳ್ಳೆಣ್ಣೆಯಲ್ಲಿ ಹುರಿಯುವುದರಿಂದ ಚೆಟ್ಟಿನಾಡ್ ಹೋಟೆಲ್ ನಂತಹ ಅಪ್ಪಟ ರುಚಿ ಸಿಗುತ್ತದೆ."
  },
  {
    "id": "oyster_23",
    "type": "oyster",
    "category": "dry",
    "img": "assets/recipe_oyster_garlic.jpg",
    "title_en": "Karavali Ghee Podi Oyster Roast",
    "title_kn": "ಕರಾವಳಿ ತುಪ್ಪದ ಪೋಡಿ ಸಿಂಪಿ ಅಣಬೆ ರೋಸ್ಟ್ (Ghee Podi Roast)",
    "desc_en": "Flash-seared oyster mushroom gills tossed in pure homemade cow ghee and gun powder (idli podi) for explosive spicy-nutty bite.",
    "desc_kn": "ಶುದ್ಧ ಹಸುವಿನ ತುಪ್ಪ ಮತ್ತು ಗನ್‌ಪೌಡರ್ (ಇಡ್ಲಿ ಪೋಡಿ) ಮಸಾಲೆಯಲ್ಲಿ ಟಾಸ್ ಮಾಡಿದ ಗರಿಗರಿ ಅಣಬೆ ರೋಸ್ಟ್.",
    "time_en": "12 Mins",
    "time_kn": "12 ನಿಮಿಷ",
    "calories": "165 kcal",
    "servings_en": "3 Servings",
    "servings_kn": "3 ಜನರಿಗೆ",
    "tag_en": "Oyster • Ghee Podi",
    "tag_kn": "ಸಿಂಪಿ ಅಣಬೆ • ತುಪ್ಪ ಪೋಡಿ",
    "ingredients_en": [
      "200g Fresh Oyster Mushrooms",
      "2 tbsp Spicy Malagapodi (Gun powder / Idli podi)",
      "2 tbsp Pure Desi Cow Ghee",
      "1 sprig Crispy fried curry leaves",
      "Pinch of chaat masala & lime juice"
    ],
    "ingredients_kn": [
      "200 ಗ್ರಾಂ ಸಿಂಪಿ ಅಣಬೆ",
      "2 ಚಮಚ ಇಡ್ಲಿ ಪೋಡಿ (ಗನ್‌ಪೌಡರ್)",
      "2 ಚಮಚ ಶುದ್ಧ ಹಸುವಿನ ತುಪ್ಪ",
      "ಗರಿಗರಿ ಕರಿಬೇವು",
      "ಚಾಟ್ ಮಸಾಲ ಮತ್ತು ನಿಂಬೆರಸ"
    ],
    "instructions_en": [
      "Heat ghee in a hot skillet; lay oyster mushrooms flat and sear for 2 minutes on high heat.",
      "Flip and sear the other side until edges become crisp golden.",
      "Dust generously with idli podi, toss vigorously so every gill is coated in spiced ghee.",
      "Garnish with crispy curry leaves and serve immediately!"
    ],
    "instructions_kn": [
      "ತವಾದಲ್ಲಿ ತುಪ್ಪ ಕಾಯಿಸಿ ಅಣಬೆಯನ್ನು ಎರಡೂ ಬದಿ 2 ನಿಮಿಷ ಗರಿಗರಿಯಾಗಿ ಸುಟ್ಟುಕೊಳ್ಳಿ.",
      "ಮೇಲಿಂದ ಇಡ್ಲಿ ಪೋಡಿ ಉದುರಿಸಿ ಚೆನ್ನಾಗಿ ಟಾಸ್ ಮಾಡಿ.",
      "ಕರಿಬೇವು ಉದುರಿಸಿ ತಕ್ಷಣವೇ ಬಿಸಿಯಾಗಿ ಸವಿಯಿರಿ!"
    ],
    "tip_en": "Do not overcrowd the pan so the oyster mushrooms crisp instead of sweating.",
    "tip_kn": "ಅಣಬೆಯನ್ನು ಹರಡಿಕೊಂಡು ಹುರಿಯಬೇಕು, ಒಟ್ಟಿಗೆ ಹಾಕಿದರೆ ನೀರು ಬಿಡುತ್ತದೆ."
  },
  {
    "id": "oyster_24",
    "type": "oyster",
    "category": "rice",
    "img": "assets/recipe_milky_biryani.jpg",
    "title_en": "Malnad Donne Style Oyster Biryani",
    "title_kn": "ಮಲೆನಾಡು ದೊನ್ನೆ ಸಿಂಪಿ ಅಣಬೆ ಬಿರಿಯಾನಿ (Donne Biryani)",
    "desc_en": "Karnataka green masala biryani made with seeraga samba chitti muthyalu rice, mint, coriander, green chillies, and shredded oyster mushrooms.",
    "desc_kn": "ಸೀರಗ ಸಾಂಬಾ ಅಕ್ಕಿ, ಪುದೀನಾ, ಕೊತ್ತಂಬರಿ ಹಸಿರು ಮಸಾಲೆ ಮತ್ತು ಸಿಂಪಿ ಅಣಬೆಯಿಂದ ತಯಾರಿಸಿದ ಘಮಘಮಿಸುವ ದೊನ್ನೆ ಬಿರಿಯಾನಿ.",
    "time_en": "35 Mins",
    "time_kn": "35 ನಿಮಿಷ",
    "calories": "260 kcal",
    "servings_en": "4 Servings",
    "servings_kn": "4 ಜನರಿಗೆ",
    "tag_en": "Oyster • Malnad Donne",
    "tag_kn": "ಸಿಂಪಿ ಅಣಬೆ • ದೊನ್ನೆ ಬಿರಿಯಾನಿ",
    "ingredients_en": [
      "250g Fresh Oyster Mushrooms",
      "2 cups Seeraga Samba (Jeera rice)",
      "Green paste: 1 cup Mint, 1 cup Coriander, 4 Green chillies, 6 Garlic, 1-inch Ginger",
      "Whole spices: Cinnamon, cloves, marathi moggu",
      "2 tbsp Cow Ghee & Curd"
    ],
    "ingredients_kn": [
      "250 ಗ್ರಾಂ ಸಿಂಪಿ ಅಣಬೆ",
      "2 ಕಪ್ ಸೀರಗ ಸಾಂಬಾ ಅಕ್ಕಿ",
      "ಹಸಿರು ಪೇಸ್ಟ್: ಪುದೀನಾ, ಕೊತ್ತಂಬರಿ, ಹಸಿಮೆಣಸು, ಬೆಳ್ಳುಳ್ಳಿ, ಶುಂಠಿ",
      "ಚಕ್ಕೆ, ಲವಂಗ, ಮರಾಠಿ ಮೊಗ್ಗು",
      "ತುಪ್ಪ ಮತ್ತು ಮೊಸರು"
    ],
    "instructions_en": [
      "Heat ghee in a handi, splutter whole spices, add green herb paste and sauté till aromatic.",
      "Add curd and shredded oyster mushrooms; cook for 3 minutes.",
      "Add soaked seeraga samba rice, 3.5 cups boiling water, and salt.",
      "Cover with tight lid and cook on low dum for 15 minutes.",
      "Serve in traditional dried palm leaf eco-donne cups with onion raita!"
    ],
    "instructions_kn": [
      "ಪಾತ್ರೆಯಲ್ಲಿ ತುಪ್ಪ ಕಾಯಿಸಿ ಮಸಾಲೆ ಸಾಮಗ್ರಿ ಮತ್ತು ಹಸಿರು ಪೇಸ್ಟ್ ಹಾಕಿ ಘಮ ಬರುವವರೆಗೆ ಹುರಿಯಿರಿ.",
      "ಮೊಸರು ಮತ್ತು ಅಣಬೆ ಸೇರಿಸಿ 3 ನಿಮಿಷ ಬೇಯಿಸಿ.",
      "ನೆನೆಸಿದ ಅಕ್ಕಿ, ಕುದಿಯುವ ನೀರು, ಉಪ್ಪು ಸೇರಿಸಿ ಮುಚ್ಚಳ ಮುಚ್ಚಿ 15 ನಿಮಿಷ ದಮ್‌ನಲ್ಲಿ ಬೇಯಿಸಿ.",
      "ಸಾಂಪ್ರದಾಯಿಕ ದೊನ್ನೆಯಲ್ಲಿ ರೈತಾದೊಂದಿಗೆ ಬಡಿಸಿ!"
    ],
    "tip_en": "Seeraga samba rice absorbs the delicate herbal mushroom essence far better than basmati.",
    "tip_kn": "ಸೀರಗ ಸಾಂಬಾ ಅಕ್ಕಿಯು ಅಣಬೆಯ ನೈಸರ್ಗಿಕ ಸತ್ವವನ್ನು ಚೆನ್ನಾಗಿ ಹೀರಿಕೊಳ್ಳುತ್ತದೆ."
  },
  {
    "id": "oyster_25",
    "type": "oyster",
    "category": "rice",
    "img": "assets/recipe_milky_biryani.jpg",
    "title_en": "Mangalore Oyster Mushroom Ghee Rice",
    "title_kn": "ಮಂಗಳೂರು ಸಿಂಪಿ ಅಣಬೆ ತುಪ್ಪದನ್ನ (Oyster Ghee Rice)",
    "desc_en": "Fragrant short-grain rice cooked in pure cow ghee, whole spices, fried onions, roasted cashews, and delicate golden oyster mushroom fans.",
    "desc_kn": "ಶುದ್ಧ ತುಪ್ಪ, ಏಲಕ್ಕಿ, ಲವಂಗ, ಹುರಿದ ಗೋಡಂಬಿ ಮತ್ತು ಗೋಲ್ಡನ್ ಸಿಂಪಿ ಅಣಬೆ ಸೇರಿಸಿ ತಯಾರಿಸಿದ ರುಚಿಕರ ಕರಾವಳಿ ತುಪ್ಪದನ್ನ.",
    "time_en": "25 Mins",
    "time_kn": "25 ನಿಮಿಷ",
    "calories": "240 kcal",
    "servings_en": "3 Servings",
    "servings_kn": "3 ಜನರಿಗೆ",
    "tag_en": "Oyster • Coastal Neychoru",
    "tag_kn": "ಸಿಂಪಿ ಅಣಬೆ • ತುಪ್ಪದನ್ನ",
    "ingredients_en": [
      "200g Fresh Oyster Mushrooms (pan-seared in ghee)",
      "1.5 cups Basmati or Kaima rice",
      "3 tbsp Desi Cow Ghee",
      "Fried cashews & golden raisins",
      "Fried crisp onions (barista) for garnish"
    ],
    "ingredients_kn": [
      "200 ಗ್ರಾಂ ಸಿಂಪಿ ಅಣಬೆ (ತುಪ್ಪದಲ್ಲಿ ಹುರಿದದ್ದು)",
      "ಒಂದೂವರೆ ಕಪ್ ಅಕ್ಕಿ",
      "3 ಚಮಚ ಹಸುವಿನ ತುಪ್ಪ",
      "ಗೋಡಂಬಿ ಮತ್ತು ಒಣದ್ರಾಕ್ಷಿ",
      "ಹುರಿದ ಈರುಳ್ಳಿ (ಬರಿಸ್ತಾ)"
    ],
    "instructions_en": [
      "In a heavy pot, heat ghee and roast whole spices, onions, and rice for 2 minutes.",
      "Add boiling water and cook covered till rice grains are fluffy and distinct.",
      "Fold in gently seared golden oyster mushrooms.",
      "Garnish with fried cashews, golden raisins, and barista onions. Serve with curry!"
    ],
    "instructions_kn": [
      "ತುಪ್ಪದಲ್ಲಿ ಮಸಾಲೆ ಸಾಮಗ್ರಿ, ಅಕ್ಕಿ ಹುರಿದು ನೀರು ಹಾಕಿ ಅನ್ನ ಉದುರು-ಉದುರಾಗಿ ಬೇಯಿಸಿಕೊಳ್ಳಿ.",
      "ತುಪ್ಪದಲ್ಲಿ ಹುರಿದ ಅಣಬೆ ದಳಗಳನ್ನು ನಿಧಾನವಾಗಿ ಅನ್ನದೊಂದಿಗೆ ಬೆರೆಸಿ.",
      "ಹುರಿದ ಗೋಡಂಬಿ, ದ್ರಾಕ್ಷಿ, ಈರುಳ್ಳಿ ಉದುರಿಸಿ ಕುರ್ಮಾದೊಂದಿಗೆ ಸವಿಯಿರಿ!"
    ],
    "tip_en": "Tossing mushrooms in separately at the end preserves their delicate fan texture.",
    "tip_kn": "ಅಣಬೆಯನ್ನು ಕೊನೆಯಲ್ಲಿ ಸೇರಿಸುವುದರಿಂದ ಅದರ ನೈಸರ್ಗಿಕ ಆಕಾರ ಮತ್ತು ಕ್ರಿಸ್ಪಿನೆಸ್ ಉಳಿಯುತ್ತದೆ."
  },
  {
    "id": "oyster_26",
    "type": "oyster",
    "category": "continental",
    "img": "assets/recipe_fettuccine.jpg",
    "title_en": "Creamy Wild Oyster Mushroom Stroganoff",
    "title_kn": "ಕ್ರೀಮಿ ಸಿಂಪಿ ಅಣಬೆ ಸ್ಟ್ರೋಗನೋಫ್ (Oyster Stroganoff)",
    "desc_en": "Continental bistro dish with pan-seared oyster mushroom petals folded in garlic sour cream, Dijon mustard, vegetable broth, and flat egg noodles.",
    "desc_kn": "ಬೆಳ್ಳುಳ್ಳಿ, ಮಸ್ಟರ್ಡ್, ಕೆನೆ ಮತ್ತು ಗಿಡಮೂಲಿಕೆಗಳ ಸಾಸ್‌ನಲ್ಲಿ ತಯಾರಿಸಿದ ಕ್ಲಾಸಿಕ್ ಯುರೋಪಿಯನ್ ಅಣಬೆ ಖಾದ್ಯ.",
    "time_en": "20 Mins",
    "time_kn": "20 ನಿಮಿಷ",
    "calories": "220 kcal",
    "servings_en": "3 Servings",
    "servings_kn": "3 ಜನರಿಗೆ",
    "tag_en": "Oyster • Continental Bistro",
    "tag_kn": "ಸಿಂಪಿ ಅಣಬೆ • ಸ್ಟ್ರೋಗನೋಫ್",
    "ingredients_en": [
      "250g Fresh Oyster Mushrooms (sliced)",
      "1/2 cup Sour cream or Heavy cream",
      "1 tsp Dijon mustard & 1 tbsp Worcestershire sauce (vegetarian)",
      "2 Garlic cloves minced & 1 Onion diced",
      "Fresh parsley & cracked black pepper"
    ],
    "ingredients_kn": [
      "250 ಗ್ರಾಂ ಸಿಂಪಿ ಅಣಬೆ",
      "ಅರ್ಧ ಕಪ್ ಕೆನೆ (ಕ್ರೀಮ್)",
      "ಮಸ್ಟರ್ಡ್ ಸಾಸ್ ಮತ್ತು ಬೆಳ್ಳುಳ್ಳಿ",
      "ಈರುಳ್ಳಿ ಚೂರುಗಳು",
      "ಪಾರ್ಸ್ಲಿ ಸೊಪ್ಪು ಮತ್ತು ಕಾಳುಮೆಣಸಿನ ಪುಡಿ"
    ],
    "instructions_en": [
      "Sear oyster mushrooms in butter until golden brown edges form; set aside.",
      "Sauté onions and minced garlic in the same pan until soft.",
      "Stir in broth, Dijon mustard, and simmer for 3 minutes.",
      "Lower heat, fold in sour cream and seared oyster mushrooms.",
      "Toss with buttered noodles or serve over warm herbed rice!"
    ],
    "instructions_kn": [
      "ಅಣಬೆಯನ್ನು ಬೆಣ್ಣೆಯಲ್ಲಿ ಹೊಂಬಣ್ಣ ಬರುವವರೆಗೆ ಹುರಿದು ತೆಗೆಯಿರಿ.",
      "ಅದೇ ಬಾಣಲೆಯಲ್ಲಿ ಈರುಳ್ಳಿ, ಬೆಳ್ಳುಳ್ಳಿ ಹುರಿದು ಸಾಸ್ ಮತ್ತು ಕ್ರೀಮ್ ಸೇರಿಸಿ.",
      "ಹುರಿದ ಅಣಬೆ ಹಾಕಿ 2 ನಿಮಿಷ ಬೇಯಿಸಿ, ಪಾಸ್ತಾ ಅಥವಾ ಅನ್ನದ ಜೊತೆ ಬಡಿಸಿ!"
    ],
    "tip_en": "Never boil sour cream rapidly or the emulsion may break; keep heat gentle.",
    "tip_kn": "ಕ್ರೀಮ್ ಸೇರಿಸಿದ ಮೇಲೆ ಸಣ್ಣ ಉರಿಯಲ್ಲಿ ನಿಧಾನವಾಗಿ ಬಿಸಿ ಮಾಡಬೇಕು."
  },
  {
    "id": "oyster_27",
    "type": "oyster",
    "category": "continental",
    "img": "assets/recipe_oyster_garlic.jpg",
    "title_en": "Garlic Herb Oyster Mushroom Bruschetta",
    "title_kn": "ಗಾರ್ಲಿಕ್ ಹರ್ಬ್ ಸಿಂಪಿ ಅಣಬೆ ಬ್ರುಶೆಟ್ಟಾ (Bruschetta)",
    "desc_en": "Crisp toasted sourdough slices rubbed with raw garlic and piled high with buttery pan-seared oyster mushrooms, balsamic glaze, and parmesan.",
    "desc_kn": "ಟೋಸ್ಟ್ ಮಾಡಿದ ಗರಿಗರಿ ಬ್ರೆಡ್ ಮೇಲೆ ಬೆಳ್ಳುಳ್ಳಿ, ಆಲಿವ್ ಎಣ್ಣೆ ಮತ್ತು ಬೆಣ್ಣೆಯಲ್ಲಿ ಹುರಿದ ಸಿಂಪಿ ಅಣಬೆ ಜೋಡಿಸಿದ ಇಟಾಲಿಯನ್ ಸ್ಟಾರ್ಟರ್.",
    "time_en": "14 Mins",
    "time_kn": "14 ನಿಮಿಷ",
    "calories": "160 kcal",
    "servings_en": "3 Servings",
    "servings_kn": "3 ಜನರಿಗೆ",
    "tag_en": "Oyster • Italian Antipasto",
    "tag_kn": "ಸಿಂಪಿ ಅಣಬೆ • ಬ್ರುಶೆಟ್ಟಾ",
    "ingredients_en": [
      "200g Fresh Oyster Mushrooms (shredded)",
      "6 slices Sourdough or Baguette bread",
      "2 tbsp Extra virgin olive oil & butter",
      "2 Garlic cloves, Fresh Basil leaves",
      "Balsamic reduction glaze & shaved parmesan"
    ],
    "ingredients_kn": [
      "200 ಗ್ರಾಂ ಸಿಂಪಿ ಅಣಬೆ",
      "6 ಬ್ರೆಡ್ ಸ್ಲೈಸ್‌ಗಳು",
      "ಆಲಿವ್ ಎಣ್ಣೆ ಮತ್ತು ಬೆಣ್ಣೆ",
      "ಬೆಳ್ಳುಳ್ಳಿ, ತುಳಸಿ (ಬೆಸಿಲ್) ಎಲೆಗಳು",
      "ಚೀಸ್ ತುರಿ ಮತ್ತು ಬಾಲ್ಸಾಮಿಕ್ ಗ್ಲೇಜ್"
    ],
    "instructions_en": [
      "Toast sourdough slices until crunchy; rub cut raw garlic clove across warm surface.",
      "Flash-sear oyster mushrooms in olive oil and butter with salt and pepper for 3 minutes.",
      "Spoon hot glistening mushrooms over toasted bread.",
      "Drizzle aged balsamic glaze, scatter torn basil, and dust with parmesan!",
      "Serve immediately while hot and crisp!"
    ],
    "instructions_kn": [
      "ಬ್ರೆಡ್ ಸ್ಲೈಸ್‌ಗಳನ್ನು ಗರಿಗರಿಯಾಗಿ ಸುಟ್ಟು ಬೆಳ್ಳುಳ್ಳಿ ಎಸಳಿನಿಂದ ಉಜ್ಜಿ.",
      "ಅಣಬೆಯನ್ನು ಆಲಿವ್ ಎಣ್ಣೆ ಮತ್ತು ಬೆಣ್ಣೆಯಲ್ಲಿ 3 ನಿಮಿಷ ಹುರಿಯಿರಿ.",
      "ಬ್ರೆಡ್ ಮೇಲೆ ಅಣಬೆ ಜೋಡಿಸಿ, ಚೀಸ್ ತುರಿ ಮತ್ತು ತುಳಸಿ ಎಲೆ ಹಾಕಿ ಬಡಿಸಿ!"
    ],
    "tip_en": "Rubbing raw garlic directly onto hot crusty bread imparts clean, intense garlic perfume without greasiness.",
    "tip_kn": "ಬಿಸಿ ಬ್ರೆಡ್ ಮೇಲೆ ಹಸಿ ಬೆಳ್ಳುಳ್ಳಿ ಉಜ್ಜಿದರೆ ಉತ್ತಮ ಇಟಾಲಿಯನ್ ಸುವಾಸನೆ ಬರುತ್ತದೆ."
  },
  {
    "id": "oyster_28",
    "type": "oyster",
    "category": "continental",
    "img": "assets/recipe_fettuccine.jpg",
    "title_en": "Creamy Truffle Oyster Mushroom Risotto",
    "title_kn": "ಕ್ರೀಮಿ ಸಿಂಪಿ ಅಣಬೆ ರಿಸೊಟ್ಟೊ (Oyster Risotto)",
    "desc_en": "Slow-stirred Italian Arborio rice cooked in rich vegetable broth, white wine reduction, butter-seared oyster mushrooms, and aged parmesan.",
    "desc_kn": "ಇಟಾಲಿಯನ್ ಆರ್ಬೋರಿಯೊ ಅಕ್ಕಿ, ಬೆಣ್ಣೆ ಮತ್ತು ಚೀಸ್‌ನಲ್ಲಿ ನಿಧಾನವಾಗಿ ಬೇಯಿಸಿದ ಕ್ರೀಮಿ ಅಣಬೆ ರಿಸೊಟ್ಟೊ.",
    "time_en": "28 Mins",
    "time_kn": "28 ನಿಮಿಷ",
    "calories": "270 kcal",
    "servings_en": "3 Servings",
    "servings_kn": "3 ಜನರಿಗೆ",
    "tag_en": "Oyster • Italian Risotto",
    "tag_kn": "ಸಿಂಪಿ ಅಣಬೆ • ರಿಸೊಟ್ಟೊ",
    "ingredients_en": [
      "200g Fresh Oyster Mushrooms (seared)",
      "1 cup Arborio short grain rice",
      "4 cups Warm rich vegetable stock",
      "2 tbsp Butter & 1/4 cup Shaved Parmesan",
      "1 Shallot finely minced & fresh thyme"
    ],
    "ingredients_kn": [
      "200 ಗ್ರಾಂ ಸಿಂಪಿ ಅಣಬೆ",
      "1 ಕಪ್ ಆರ್ಬೋರಿಯೊ ಅಕ್ಕಿ",
      "4 ಕಪ್ ಬೆಚ್ಚಗಿನ ತರಕಾರಿ ಸೂಪ್ (ಸ್ಟಾಕ್)",
      "ಬೆಣ್ಣೆ ಮತ್ತು ಪಾರ್ಮಿಸನ್ ಚೀಸ್",
      "ಸಣ್ಣ ಈರುಳ್ಳಿ ಮತ್ತು ಥೈಮ್ ಸೊಪ್ಪು"
    ],
    "instructions_en": [
      "Sear mushrooms in 1 tbsp butter until golden; reserve half for topping.",
      "Sauté shallots in butter, toast Arborio rice for 2 minutes.",
      "Add warm stock ladle by ladle, stirring constantly until rice turns creamy al dente.",
      "Stir in seared mushrooms, remaining butter, and parmesan.",
      "Top with crispy seared oyster caps and serve immediately!"
    ],
    "instructions_kn": [
      "ಅಣಬೆಯನ್ನು ಬೆಣ್ಣೆಯಲ್ಲಿ ಹುರಿದು ತೆಗೆಯಿರಿ.",
      "ಈರುಳ್ಳಿ, ಅಕ್ಕಿ ಹುರಿದು ಬಿಸಿ ಸ್ಟಾಕ್ ನೀರನ್ನು ಸ್ವಲ್ಪ ಸ್ವಲ್ಪವೇ ಹಾಕಿ ಕೈಯಾಡಿಸುತ್ತಾ ಬೇಯಿಸಿ.",
      "ಅನ್ನ ಬೆಂದ ಮೇಲೆ ಬೆಣ್ಣೆ, ಚೀಸ್ ಮತ್ತು ಹುರಿದ ಅಣಬೆ ಸೇರಿಸಿ ಬಡಿಸಿ!"
    ],
    "tip_en": "Stirring continuously releases starch from Arborio grains to create the velvety natural cream sauce.",
    "tip_kn": "ನಿರಂತರವಾಗಿ ಕೈಯಾಡಿಸುವುದರಿಂದ ಅಕ್ಕಿಯಲ್ಲಿನ ನೈಸರ್ಗಿಕ ಪಿಷ್ಟ ಬಿಡುಗಡೆಯಾಗಿ ಕ್ರೀಮಿ ಟೆಕ್ಸ್ಚರ್ ಸಿಗುತ್ತದೆ."
  },
  {
    "id": "oyster_29",
    "type": "oyster",
    "category": "soup",
    "img": "assets/recipe_broth.jpg",
    "title_en": "Spicy Indo-Chinese Oyster Hot & Sour Soup",
    "title_kn": "ಹಾಟ್ & ಸೋರ್ ಸಿಂಪಿ ಅಣಬೆ ಸೂಪ್ (Hot & Sour)",
    "desc_en": "Fiery and tangy clear soup loaded with shredded oyster mushrooms, bamboo shoots, tofu strips, white pepper, dark soy, and toasted sesame oil.",
    "desc_kn": "ಬಿಳಿ ಮೆಣಸು, ಸೋಯಾ ಸಾಸ್, ವಿನೆಗರ್ ಮತ್ತು ಸೀಳಿದ ಸಿಂಪಿ ಅಣಬೆಯಿಂದ ತಯಾರಿಸಿದ ಖಾರ-ಹುಳಿ ಇಮ್ಯೂನಿಟಿ ಸೂಪ್.",
    "time_en": "15 Mins",
    "time_kn": "15 ನಿಮಿಷ",
    "calories": "90 kcal",
    "servings_en": "3 Servings",
    "servings_kn": "3 ಜನರಿಗೆ",
    "tag_en": "Oyster • Asian Broth",
    "tag_kn": "ಸಿಂಪಿ ಅಣಬೆ • ಹಾಟ್ & ಸೋರ್",
    "ingredients_en": [
      "150g Fresh Oyster Mushrooms (shredded fine)",
      "4 cups Clear vegetable stock",
      "1 tbsp Dark Soy Sauce & 1 tbsp Rice Vinegar",
      "1 tsp White pepper powder & crushed green chillies",
      "1 tbsp Cornstarch slurry to thicken",
      "1 tsp Toasted sesame oil & spring onion greens"
    ],
    "ingredients_kn": [
      "150 ಗ್ರಾಂ ಸಿಂಪಿ ಅಣಬೆ (ಸಣ್ಣಗೆ ಸೀಳಿದ್ದು)",
      "4 ಕಪ್ ತರಕಾರಿ ಸ್ಟಾಕ್ ನೀರು",
      "ಸೋಯಾ ಸಾಸ್ ಮತ್ತು ವಿನೆಗರ್",
      "ಬಿಳಿ ಮೆಣಸಿನ ಪುಡಿ, ಹಸಿಮೆಣಸು",
      "ಕಾರ್ನ್‌ಫ್ಲೋರ್ ನೀರು",
      "ಎಳ್ಳೆಣ್ಣೆ ಮತ್ತು ಈರುಳ್ಳಿ ಹೂವು (ಸ್ಪ್ರಿಂಗ್ ಆನಿಯನ್)"
    ],
    "instructions_en": [
      "Bring vegetable stock to a brisk boil with soy sauce, vinegar, and white pepper.",
      "Add shredded oyster mushrooms; simmer for 4 minutes.",
      "Pour cornstarch slurry in a thin stream while stirring until velvety texture forms.",
      "Drizzle toasted sesame oil and scatter fresh spring onions.",
      "Serve steaming hot as an immunity-boosting winter warmer!"
    ],
    "instructions_kn": [
      "ತರಕಾರಿ ನೀರಿನಲ್ಲಿ ಸೋಯಾ ಸಾಸ್, ವಿನೆಗರ್ ಮತ್ತು ಬಿಳಿ ಮೆಣಸಿನ ಪುಡಿ ಹಾಕಿ ಕುದಿಸಿ.",
      "ಅಣಬೆ ಚೂರುಗಳನ್ನು ಸೇರಿಸಿ 4 ನಿಮಿಷ ಬೇಯಿಸಿ.",
      "ಕಾರ್ನ್‌ಫ್ಲೋರ್ ನೀರು ಹಾಕಿ ದಪ್ಪಗಾಗಿಸಿ, ಎಳ್ಳೆಣ್ಣೆ ಮತ್ತು ಸ್ಪ್ರಿಂಗ್ ಆನಿಯನ್ ಉದುರಿಸಿ ಬಿಸಿಯಾಗಿ ಸವಿಯಿರಿ!"
    ],
    "tip_en": "White pepper provides the authentic deep throat-warming heat characteristic of hot and sour soup.",
    "tip_kn": "ಬಿಳಿ ಮೆಣಸು ಗಂಟಲಿಗೆ ಆರಾಮ ನೀಡುವ ನೈಜ ಖಾರವನ್ನು ನೀಡುತ್ತದೆ."
  },
  {
    "id": "oyster_30",
    "type": "oyster",
    "category": "soup",
    "img": "assets/recipe_broth.jpg",
    "title_en": "Thai Lemongrass Tom Yum Oyster Soup",
    "title_kn": "ಥಾಯ್ ಲೆಮನ್‌ಗ್ರಾಸ್ ಸಿಂಪಿ ಅಣಬೆ ಟಾಮ್ ಯಮ್ ಸೂಪ್ (Tom Yum)",
    "desc_en": "Fragrant Thai herbal broth simmering with fresh bruised lemongrass stalks, kaffir lime leaves, galangal, bird's eye chillies, and delicate oyster gills.",
    "desc_kn": "ಲೆಮನ್‌ಗ್ರಾಸ್, ನಿಂಬೆ ಎಲೆ, ಶುಂಠಿ ಮತ್ತು ಹಸಿಮೆಣಸಿನ ಸಾರದಲ್ಲಿ ತಯಾರಿಸಿದ ಸುಪ್ರಸಿದ್ಧ ಥಾಯ್ ಅಣಬೆ ಸೂಪ್.",
    "time_en": "16 Mins",
    "time_kn": "16 ನಿಮಿಷ",
    "calories": "85 kcal",
    "servings_en": "3 Servings",
    "servings_kn": "3 ಜನರಿಗೆ",
    "tag_en": "Oyster • Thai Herbal",
    "tag_kn": "ಸಿಂಪಿ ಅಣಬೆ • ಟಾಮ್ ಯಮ್",
    "ingredients_en": [
      "150g Fresh Oyster Mushrooms",
      "2 stalks Fresh Lemongrass (bruised)",
      "4 Kaffir lime leaves & 1-inch Galangal sliced",
      "2 Thai bird's eye chillies smashed",
      "1 tbsp Lime juice & 1 tsp Jaggery"
    ],
    "ingredients_kn": [
      "150 ಗ್ರಾಂ ಸಿಂಪಿ ಅಣಬೆ",
      "ಲೆಮನ್‌ಗ್ರಾಸ್ (ನಿಂಬೆ ಹುಲ್ಲು)",
      "ನಿಂಬೆ ಎಲೆ ಮತ್ತು ಶುಂಠಿ ತುಂಡುಗಳು",
      "ಹಸಿಮೆಣಸು",
      "ನಿಂಬೆರಸ ಮತ್ತು ಬೆಲ್ಲ"
    ],
    "instructions_en": [
      "Boil water with bruised lemongrass, kaffir lime leaves, and galangal for 6 minutes to extract aromatic oils.",
      "Add whole bird's eye chillies and oyster mushrooms; simmer for 3 minutes.",
      "Turn off flame; stir in fresh lime juice and a dash of soy sauce.",
      "Serve steaming in ceramic bowls for profound sensory rejuvenation!"
    ],
    "instructions_kn": [
      "ಲೆಮನ್‌ಗ್ರಾಸ್, ನಿಂಬೆ ಎಲೆ ಮತ್ತು ಶುಂಠಿಯನ್ನು 6 ನಿಮಿಷ ಕುದಿಸಿ ಗಿಡಮೂಲಿಕೆಗಳ ಸಾರ ತೆಗೆಯಿರಿ.",
      "ಅಣಬೆ ಮತ್ತು ಹಸಿಮೆಣಸು ಹಾಕಿ 3 ನಿಮಿಷ ಬೇಯಿಸಿ.",
      "ಉರಿಯಿಂದ ಇಳಿಸಿ ನಿಂಬೆರಸ ಹಿಂಡಿ ಬಿಸಿಯಾಗಿ ಸವಿಯಿರಿ!"
    ],
    "tip_en": "Always add lime juice off the flame to preserve its bright, fragrant vitamin C vitality.",
    "tip_kn": "ನಿಂಬೆರಸವನ್ನು ಉರಿಯಿಂದ ಕೆಳಗಿಳಿಸಿದ ಮೇಲೆಯೇ ಸೇರಿಸಬೇಕು."
  },
  {
    "id": "oyster_31",
    "type": "oyster",
    "category": "snack",
    "img": "assets/recipe_pakoda.jpg",
    "title_en": "Crispy Golden Oyster Mushroom 65",
    "title_kn": "ಗರಿಗರಿ ಸಿಂಪಿ ಅಣಬೆ 65 (Oyster 65)",
    "desc_en": "Street-style crunchy bites marinated in Kashmiri chilli, rice flour, cornstarch, ginger-garlic, curry leaves, and deep-fried till shatteringly crisp.",
    "desc_kn": "ಕಾರ್ನ್‌ಫ್ಲೋರ್, ಅಕ್ಕಿಹಿಟ್ಟು, ಶುಂಠಿ-ಬೆಳ್ಳುಳ್ಳಿ ಮತ್ತು ಕರಿಬೇವು ಮಸಾಲೆಯಲ್ಲಿ ಗರಿಗರಿಯಾಗಿ ಕರಿದ ಸ್ಟ್ರೀಟ್-ಸ್ಟೈಲ್ ಅಣಬೆ 65.",
    "time_en": "15 Mins",
    "time_kn": "15 ನಿಮಿಷ",
    "calories": "190 kcal",
    "servings_en": "3-4 Servings",
    "servings_kn": "3-4 ಜನರಿಗೆ",
    "tag_en": "Oyster • Crispy 65",
    "tag_kn": "ಸಿಂಪಿ ಅಣಬೆ • ಅಣಬೆ 65",
    "ingredients_en": [
      "200g Fresh Oyster Mushrooms (hand-torn)",
      "2 tbsp Cornstarch & 2 tbsp Rice flour",
      "1 tbsp Ginger-garlic paste",
      "1 tsp Kashmiri red chilli & chaat masala",
      "2 sprigs Curry leaves & slit green chillies",
      "Cold-pressed peanut oil for frying"
    ],
    "ingredients_kn": [
      "200 ಗ್ರಾಂ ಸಿಂಪಿ ಅಣಬೆ",
      "2 ಚಮಚ ಕಾರ್ನ್‌ಫ್ಲೋರ್ ಮತ್ತು 2 ಚಮಚ ಅಕ್ಕಿಹಿಟ್ಟು",
      "ಶುಂಠಿ-ಬೆಳ್ಳುಳ್ಳಿ ಪೇಸ್ಟ್",
      "ಖಾರದ ಪುಡಿ, ಚಾಟ್ ಮಸಾಲ",
      "ಕರಿಬೇವು ಮತ್ತು ಹಸಿಮೆಣಸು",
      "ಕರೆಯಲು ಕಡಲೆಕಾಯಿ ಎಣ್ಣೆ"
    ],
    "instructions_en": [
      "Dust dry oyster mushrooms with rice flour, cornstarch, ginger-garlic, chilli, and salt.",
      "Sprinkle a few drops of water so the coating adheres tightly to the fluted gills.",
      "Drop in smoking hot oil; fry for 2-3 minutes until golden and crackling crisp.",
      "Toss with fried curry leaves, slit chillies, and chaat masala. Serve immediately!"
    ],
    "instructions_kn": [
      "ಅಣಬೆಗೆ ಅಕ್ಕಿಹಿಟ್ಟು, ಕಾರ್ನ್‌ಫ್ಲೋರ್, ಶುಂಠಿ-ಬೆಳ್ಳುಳ್ಳಿ ಹಾಗೂ ಮಸಾಲೆಗಳನ್ನು ಲೇಪಿಸಿ.",
      "ಕಾದ ಎಣ್ಣೆಯಲ್ಲಿ 2-3 ನಿಮಿಷ ಗರಿಗರಿಯಾಗಿ ಕರಿದು ತೆಗೆಯಿರಿ.",
      "ಕರಿಬೇವು, ಹಸಿಮೆಣಸು ಮತ್ತು ಚಾಟ್ ಮಸಾಲಾ ಉದುರಿಸಿ ಬಿಸಿಯಾಗಿ ಬಡಿಸಿ!"
    ],
    "tip_en": "Rice flour guarantees that the mushrooms remain crunchy for over 30 minutes.",
    "tip_kn": "ಅಕ್ಕಿಹಿಟ್ಟು ಬಳಸುವುದರಿಂದ ಅಣಬೆ ದೀರ್ಘಕಾಲದವರೆಗೆ ಗರಿಗರಿಯಾಗಿ ಉಳಿಯುತ್ತದೆ."
  },
  {
    "id": "oyster_32",
    "type": "oyster",
    "category": "snack",
    "img": "assets/recipe_pakoda.jpg",
    "title_en": "Crispy Salt & Pepper Oyster Mushroom Popcorn",
    "title_kn": "ಸಾಲ್ಟ್ & ಪೆಪ್ಪರ್ ಸಿಂಪಿ ಅಣಬೆ ಪಾಪ್‌ಕಾರ್ನ್ (Popcorn Bites)",
    "desc_en": "Bite-sized fluted clusters tossed in coarse crushed Sichuan or Malabar black pepper, garlic powder, sea salt, and flashed golden in hot oil.",
    "desc_kn": "ಚಿಕ್ಕ ಚಿಕ್ಕ ಅಣಬೆ ತುಂಡುಗಳನ್ನು ಕಾಳುಮೆಣಸು, ಬೆಳ್ಳುಳ್ಳಿ ಪುಡಿ ಹಾಗೂ ಸಮುದ್ರದ ಉಪ್ಪಿನಲ್ಲಿ ಹುರಿದ ಗರಿಗರಿ ಪಾಪ್‌ಕಾರ್ನ್ ಸ್ನ್ಯಾಕ್ಸ್.",
    "time_en": "12 Mins",
    "time_kn": "12 ನಿಮಿಷ",
    "calories": "160 kcal",
    "servings_en": "3 Servings",
    "servings_kn": "3 ಜನರಿಗೆ",
    "tag_en": "Oyster • Crunchy Popcorn",
    "tag_kn": "ಸಿಂಪಿ ಅಣಬೆ • ಪಾಪ್‌ಕಾರ್ನ್",
    "ingredients_en": [
      "200g Fresh Oyster Mushrooms (separated to small florets)",
      "3 tbsp Cornstarch & 1 tbsp All-purpose flour",
      "1 tbsp Coarsely crushed Black pepper & 1/2 tsp Garlic powder",
      "Flaky sea salt & finely chopped scallions"
    ],
    "ingredients_kn": [
      "200 ಗ್ರಾಂ ಸಿಂಪಿ ಅಣಬೆ (ಸಣ್ಣ ಚೂರುಗಳು)",
      "3 ಚಮಚ ಕಾರ್ನ್‌ಫ್ಲೋರ್",
      "ಜಜ್ಜಿದ ಕಾಳುಮೆಣಸು ಮತ್ತು ಬೆಳ್ಳುಳ್ಳಿ ಪುಡಿ",
      "ಉಪ್ಪು ಮತ್ತು ಹಸಿರು ಈರುಳ್ಳಿ"
    ],
    "instructions_en": [
      "Toss dry oyster florets in seasoned cornstarch until evenly enveloped.",
      "Deep fry in hot oil for 2 minutes until light and puffy crisp.",
      "Drain on paper towel and immediately toss with sea salt, crushed black pepper, and scallions.",
      "Serve piping hot as a healthier plant-based movie night popcorn!"
    ],
    "instructions_kn": [
      "ಅಣಬೆ ಚೂರುಗಳಿಗೆ ಕಾರ್ನ್‌ಫ್ಲೋರ್ ಲೇಪಿಸಿ ಕಾದ ಎಣ್ಣೆಯಲ್ಲಿ 2 ನಿಮಿಷ ಕರಿಯಿರಿ.",
      "ಮೇಲಿಂದ ಕಾಳುಮೆಣಸಿನ ಪುಡಿ, ಉಪ್ಪು ಉದುರಿಸಿ ಚಹಾ ಜೊತೆ ತಿನ್ನಲು ಬಡಿಸಿ!"
    ],
    "tip_en": "Toss with salt and pepper immediately while piping hot so seasonings stick.",
    "tip_kn": "ಎಣ್ಣೆಯಿಂದ ತೆಗೆದ ತಕ್ಷಣವೇ ಉಪ್ಪು-ಮೆಣಸಿನ ಪುಡಿ ಉದುರಿಸಿದರೆ ಚೆನ್ನಾಗಿ ಹಿಡಿಯುತ್ತದೆ."
  },
  {
    "id": "milky_1",
    "type": "milky",
    "category": "rice",
    "img": "assets/recipe_milky_biryani.jpg",
    "title_en": "Royal Milky Mushroom Dum Biryani",
    "title_kn": "ಶಾಹೀ ಹಾಲು ಅಣಬೆ ದಮ್ ಬಿರಿಯಾನಿ (Milky Biryani)",
    "desc_en": "Layered aged basmati rice and thick, juicy chunks of milky mushrooms slow-cooked in a sealed clay pot with saffron, mint, and caramelized onions.",
    "desc_kn": "ದಪ್ಪನೆಯ ಹಾಲು ಅಣಬೆ ತುಂಡುಗಳು, ಬಾಸ್ಮತಿ ಅಕ್ಕಿ, ಕೇಸರಿ ಹಾಲು ಮತ್ತು ಹುರಿದ ಈರುಳ್ಳಿಯೊಂದಿಗೆ ಮಣ್ಣಿನ ಮಡಕೆಯಲ್ಲಿ 'ದಮ್' ಕಟ್ಟಿ ತಯಾರಿಸಿದ ರಾಯಲ್ ಬಿರಿಯಾನಿ.",
    "time_en": "35 Mins",
    "time_kn": "35 ನಿಮಿಷ",
    "calories": "280 kcal",
    "servings_en": "4 Servings",
    "servings_kn": "4 ಜನರಿಗೆ",
    "tag_en": "Milky • Royal Feast",
    "tag_kn": "ಹಾಲು ಅಣಬೆ • ರಾಯಲ್ ಬಿರಿಯಾನಿ",
    "ingredients_en": [
      "200g Fresh Organic Milky Mushrooms (cut into thick chunks)",
      "1.5 cups Aged Long-Grain Basmati Rice (soaked for 30 mins)",
      "1/2 cup Thick Curd / Yogurt",
      "1 tsp Ginger-Garlic paste, 1 tsp Biryani Garam Masala",
      "1/2 tsp Kashmiri Red Chilli powder & 1/4 tsp Turmeric",
      "1 large Onion (deep-fried golden 'birista')",
      "Handful of fresh Mint and Coriander leaves",
      "2 tbsp Pure Desi Ghee & pinch of Saffron in warm milk"
    ],
    "ingredients_kn": [
      "200 ಗ್ರಾಂ ತಾಜಾ ಹಾಲು ಅಣಬೆ (ದಪ್ಪ ಚೌಕಾಕಾರದ ತುಂಡುಗಳು)",
      "1.5 ಕಪ್ ಬಾಸ್ಮತಿ ಅಕ್ಕಿ (30 ನಿಮಿಷ ನೆನೆಸಿದ್ದು)",
      "1/2 ಕಪ್ ಗಟ್ಟಿ ಮೊಸರು",
      "1 ಚಮಚ ಶುಂಠಿ-ಬೆಳ್ಳುಳ್ಳಿ ಪೇಸ್ಟ್, 1 ಚಮಚ ಬಿರಿಯಾನಿ ಮಸಾಲ",
      "1/2 ಚಮಚ ಕಾಶ್ಮೀರಿ ಮೆಣಸಿನ ಪುಡಿ, 1/4 ಚಮಚ ಅರಿಶಿನ",
      "1 ಈರುಳ್ಳಿ (ಹೊಂಬಣ್ಣಕ್ಕೆ ಎಣ್ಣೆಯಲ್ಲಿ ಹುರಿದ ಬರಿಸ್ತಾ)",
      "ಸ್ವಲ್ಪ ಪುದೀನಾ ಮತ್ತು ಕೊತ್ತಂಬರಿ ಸೊಪ್ಪು",
      "2 ಚಮಚ ತುಪ್ಪ ಮತ್ತು ಕೇಸರಿ ಬೆರೆಸಿದ ಹಾಲು"
    ],
    "instructions_en": [
      "Marinate thick milky mushroom chunks with curd, ginger-garlic paste, spices, and salt for 15 minutes.",
      "Boil basmati rice with whole cloves, cardamom, and bay leaf until 70% cooked; drain water.",
      "In a thick-bottomed pot or earthen handi, cook the marinated mushrooms in ghee for 5 minutes.",
      "Layer the semi-cooked rice over the mushrooms, top with fried onions, mint, coriander, saffron milk, and a drizzle of ghee.",
      "Seal pot with foil or dough. Slow-cook on low dum for 18-20 minutes. Rest 10 mins before fluffing up gently!"
    ],
    "instructions_kn": [
      "ಹಾಲು ಅಣಬೆ ತುಂಡುಗಳಿಗೆ ಮೊಸರು, ಶುಂಠಿ-ಬೆಳ್ಳುಳ್ಳಿ ಪೇಸ್ಟ್, ಮಸಾಲೆ ಪುಡಿಗಳು ಮತ್ತು ಉಪ್ಪು ಸೇರಿಸಿ 15 ನಿಮಿಷ ನೆನೆಯಲು ಬಿಡಿ.",
      "ಬಾಸ್ಮತಿ ಅಕ್ಕಿಗೆ ಲವಂಗ, ಏಲಕ್ಕಿ ಹಾಕಿ 70% ಬೆಂದ ನಂತರ ನೀರು ಬಸಿದುಕೊಳ್ಳಿ.",
      "ಮಣ್ಣಿನ ಪಾತ್ರೆ ಅಥವಾ ದಪ್ಪ ತಳದ ಪಾತ್ರೆಯಲ್ಲಿ ತುಪ್ಪ ಹಾಕಿ, ನೆನೆಸಿದ ಅಣಬೆಯನ್ನು 5 ನಿಮಿಷ ಬೇಯಿಸಿ.",
      "ಅದರ ಮೇಲೆ ಬೆಂದ ಅನ್ನ, ಹುರಿದ ಈರುಳ್ಳಿ, ಪುದೀನಾ, ಕೇಸರಿ ಹಾಲು ಮತ್ತು ತುಪ್ಪವನ್ನು ಪದರಗಳಾಗಿ ಜೋಡಿಸಿ.",
      "ಪಾತ್ರೆಯ ಬಾಯನ್ನು ಭದ್ರವಾಗಿ ಮುಚ್ಚಿ, ಸಣ್ಣ ಉರಿಯಲ್ಲಿ 18-20 ನಿಮಿಷ 'ದಮ್' ಕಟ್ಟಿ. ಘಮಘಮಿಸುವ ಬಿರಿಯಾನಿ ಸವಿಯಲು ಸಿದ್ಧ!"
    ],
    "tip_en": "Milky mushrooms hold their shape exceptionally well under slow dum heat, giving a firm meaty bite.",
    "tip_kn": "ಹಾಲು ಅಣಬೆ ದಮ್ ಕಟ್ಟಿದಾಗಲೂ ಕರಗದೆ ಚಿಕನ್‌ನಂತೆ ಗಟ್ಟಿ ಮತ್ತು ರಸಭರಿತವಾಗಿರುತ್ತದೆ."
  },
  {
    "id": "milky_2",
    "type": "milky",
    "category": "curry",
    "img": "assets/recipe_milky_pepper.jpg",
    "title_en": "Authentic Chettinad Milky Pepper Masala",
    "title_kn": "ಚೆಟ್ಟಿನಾಡ್ ಹಾಲು ಅಣಬೆ ಪೆಪ್ಪರ್ ಮಸಾಲ (Chettinad Masala)",
    "desc_en": "Plump milky mushroom wedges simmered in a dark, robust gravy infused with fresh stone-ground black pepper, fennel seeds, and shallots.",
    "desc_kn": "ಕಲ್ಲು ಒರಳಲ್ಲಿ ಅರೆದ ಕಾಳುಮೆಣಸು, ಸೋಂಪು ಹಾಗೂ ಸಾಂಬಾರ್ ಈರುಳ್ಳಿ ಗ್ರೇವಿಯಲ್ಲಿ ಬೇಯಿಸಿದ ಮಸಾಲೆಯುಕ್ತ ಗಟ್ಟಿ ಹಾಲು ಅಣಬೆ ಗ್ರೇವಿ.",
    "time_en": "25 Mins",
    "time_kn": "25 ನಿಮಿಷ",
    "calories": "190 kcal",
    "servings_en": "3-4 Servings",
    "servings_kn": "3-4 ಜನರಿಗೆ",
    "tag_en": "Milky • South Indian Classic",
    "tag_kn": "ಹಾಲು ಅಣಬೆ • ಚೆಟ್ಟಿನಾಡ್ ಶೈಲಿ",
    "ingredients_en": [
      "200g Fresh Organic Milky Mushrooms (diced into thick quarters)",
      "1 tbsp Whole Black Peppercorns, 1 tsp Cumin, 1 tsp Fennel seeds",
      "10 Small Shallots (sambhar onions, sliced)",
      "1 large Tomato (finely pureed)",
      "1 sprig Fresh Curry leaves & 2 Green chillies",
      "1 tsp Ginger-Garlic paste",
      "1.5 tbsp Gingelly / Sesame oil or Coconut oil",
      "Fresh coriander for garnish & Salt"
    ],
    "ingredients_kn": [
      "200 ಗ್ರಾಂ ತಾಜಾ ಹಾಲು ಅಣಬೆ (ದಪ್ಪ ತುಂಡುಗಳಾಗಿ ಕತ್ತರಿಸಿದ್ದು)",
      "1 ಚಮಚ ಕಾಳುಮೆಣಸು, 1 ಚಮಚ ಜೀರಿಗೆ, 1 ಚಮಚ ಸೋಂಪು",
      "10 ಸಾಂಬಾರ್ ಸಣ್ಣ ಈರುಳ್ಳಿ (ಹೆಚ್ಚಿದ್ದು)",
      "1 ಟೊಮೆಟೊ (ನುಣ್ಣಗೆ ರುಬ್ಬಿದ್ದು)",
      "1 ಎಸಳು ಕರಿಬೇವು ಮತ್ತು 2 ಹಸಿಮೆಣಸಿನಕಾಯಿ",
      "1 ಚಮಚ ಶುಂಠಿ-ಬೆಳ್ಳುಳ್ಳಿ ಪೇಸ್ಟ್",
      "1.5 ಚಮಚ ಎಳ್ಳೆಣ್ಣೆ ಅಥವಾ ತೆಂಗಿನ ಎಣ್ಣೆ",
      "ಕೊತ್ತಂಬರಿ ಸೊಪ್ಪು ಮತ್ತು ಉಪ್ಪು"
    ],
    "instructions_en": [
      "Dry roast black peppercorns, cumin, and fennel seeds until fragrant, then grind to a coarse aromatic pepper powder.",
      "Heat oil in a pan; add mustard seeds, curry leaves, green chillies, and shallots. Sauté until lightly browned.",
      "Add ginger-garlic paste and tomato puree; cook until oil separates on the sides.",
      "Toss in the juicy milky mushroom chunks and salt. Cook for 5 minutes so the mushrooms release and absorb juices.",
      "Add the freshly ground pepper spice blend. Simmer for 3 minutes until thick and glossy. Garnish with coriander!"
    ],
    "instructions_kn": [
      "ಕಾಳುಮೆಣಸು, ಜೀರಿಗೆ ಮತ್ತು ಸೋಂಪನ್ನು ಸಣ್ಣ ಉರಿಯಲ್ಲಿ ಹುರಿದು ಪುಡಿ ಮಾಡಿಕೊಳ್ಳಿ.",
      "ಬಾಣಲೆಯಲ್ಲಿ ಎಣ್ಣೆ ಕಾಯಿಸಿ ಸಾಸಿವೆ, ಕರಿಬೇವು, ಹಸಿಮೆಣಸಿನಕಾಯಿ ಮತ್ತು ಸಣ್ಣ ಈರುಳ್ಳಿ ಹಾಕಿ ಹುರಿಯಿರಿ.",
      "ಶುಂಠಿ-ಬೆಳ್ಳುಳ್ಳಿ ಪೇಸ್ಟ್ ಮತ್ತು ಟೊಮೆಟೊ ಪ್ಯೂರಿ ಸೇರಿಸಿ ಎಣ್ಣೆ ಬಿಡುವವರೆಗೆ ಬೇಯಿಸಿ.",
      "ಹಾಲು ಅಣಬೆ ತುಂಡುಗಳು ಮತ್ತು ಉಪ್ಪು ಸೇರಿಸಿ 5 ನಿಮಿಷ ಬೇಯಿಸಿ.",
      "ರುಬ್ಬಿದ ಕಾಳುಮೆಣಸಿನ ಮಸಾಲೆ ಸೇರಿಸಿ ಗ್ರೇವಿ ದಪ್ಪವಾಗುವವರೆಗೆ 3 ನಿಮಿಷ ಕುದಿಸಿ, ಕೊತ್ತಂಬರಿ ಸೊಪ್ಪಿನಿಂದ ಅಲಂಕರಿಸಿ ಬಿಸಿ ಅನ್ನ, ಚಪಾತಿಯೊಂದಿಗೆ ಸವಿಯಿರಿ!"
    ],
    "tip_en": "Use stone-ground black pepper rather than pre-packaged powder for that authentic peppery kick.",
    "tip_kn": "ತಾಜಾ ಕಾಳುಮೆಣಸನ್ನು ಆಗಲೇ ಪುಡಿ ಮಾಡಿ ಬಳಸಿದರೆ ಚೆಟ್ಟಿನಾಡ್ ಶೈಲಿಯ ಅಸಲಿ ರುಚಿ ಬರುತ್ತದೆ."
  },
  {
    "id": "milky_3",
    "type": "milky",
    "category": "dry",
    "img": "assets/recipe_tikka.jpg",
    "title_en": "Tandoori Malai Milky Mushroom Tikka",
    "title_kn": "ತಂದೂರಿ ಮಲೈ ಹಾಲು ಅಣಬೆ ಟಿಕ್ಕಾ (Malai Tikka)",
    "desc_en": "Thick meaty milky mushroom disks skewered with peppers, marinated in hung curd, cashew cream, and roasted gram flour, char-grilled to perfection.",
    "desc_kn": "ದಪ್ಪನೆಯ ಹಾಲು ಅಣಬೆ ತುಂಡುಗಳನ್ನು ಹಂಗ್ ಕರ್ಡ್, ಗೋಡಂಬಿ ಕ್ರೀಮ್ ಮತ್ತು ಸಾಸಿವೆ ಎಣ್ಣೆಯಲ್ಲಿ ನೆನೆಸಿ ತಂದೂರ್ ಅಥವಾ ತವಾದಲ್ಲಿ ಸುಟ್ಟ ಅದ್ಭುತ ಸ್ಟಾರ್ಟರ್.",
    "time_en": "30 Mins",
    "time_kn": "30 ನಿಮಿಷ",
    "calories": "240 kcal",
    "servings_en": "3 Servings",
    "servings_kn": "3 ಜನರಿಗೆ",
    "tag_en": "Milky • Tandoori Starter",
    "tag_kn": "ಹಾಲು ಅಣಬೆ • ಮಲೈ ಟಿಕ್ಕಾ",
    "ingredients_en": [
      "200g Fresh Milky Mushrooms (cut into thick round disks)",
      "1/2 cup Hung Curd (Greek yogurt)",
      "2 tbsp Cashew paste or Fresh cream",
      "1 tbsp Roasted gram flour (Besan)",
      "1 tsp Kasuri methi crushed, 1 tsp Chaat masala",
      "1 tbsp Mustard oil, 1/2 tsp Cardamom powder, Salt",
      "Skewers, Bell pepper squares, Onion wedges"
    ],
    "ingredients_kn": [
      "200 ಗ್ರಾಂ ಹಾಲು ಅಣಬೆ (ದಪ್ಪ ಬಿಲ್ಲೆಗಳಾಗಿ ಕತ್ತರಿಸಿದ್ದು)",
      "ಅರ್ಧ ಕಪ್ ಗಟ್ಟಿ ಮೊಸರು (ನೀರಿಲ್ಲದ ಹಂಗ್ ಕರ್ಡ್)",
      "2 ಚಮಚ ಗೋಡಂಬಿ ಪೇಸ್ಟ್ ಅಥವಾ ಫ್ರೆಶ್ ಕ್ರೀಮ್",
      "1 ಚಮಚ ಹುರಿದ ಕಡಲೆಹಿಟ್ಟು",
      "ಕಸೂರಿ ಮೇಥಿ, ಚಾಟ್ ಮಸಾಲ, ಸಾಸಿವೆ ಎಣ್ಣೆ",
      "ಕ್ಯಾಪ್ಸಿಕಮ್ ಮತ್ತು ಈರುಳ್ಳಿ ಚೂರುಗಳು"
    ],
    "instructions_en": [
      "Whisk hung curd, cashew cream, roasted besan, mustard oil, crushed kasuri methi, cardamom powder, and salt into a luscious marinade.",
      "Toss in the thick milky mushroom disks, bell peppers, and onions. Marinate for 20 minutes.",
      "Thread onto skewers alternating mushroom, pepper, and onion.",
      "Grill on a hot grill pan or tandoor at 220°C for 10-12 minutes, basting with melted butter until lightly charred.",
      "Sprinkle chaat masala and fresh lime juice before serving hot with mint chutney!"
    ],
    "instructions_kn": [
      "ಗಟ್ಟಿ ಮೊಸರು, ಗೋಡಂಬಿ ಪೇಸ್ಟ್, ಕಡಲೆಹಿಟ್ಟು, ಸಾಸಿವೆ ಎಣ್ಣೆ ಮತ್ತು ಮಸಾಲೆಗಳನ್ನು ಬೆರೆಸಿ ಮ್ಯಾರಿನೇಡ್ ತಯಾರಿಸಿ.",
      "ಅಣಬೆ, ಕ್ಯಾಪ್ಸಿಕಮ್ ಮತ್ತು ಈರುಳ್ಳಿಯನ್ನು ಈ ಮಿಶ್ರಣದಲ್ಲಿ 20 ನಿಮಿಷ ನೆನೆಯಲು ಬಿಡಿ.",
      "ಕಡ್ಡಿಗಳಿಗೆ (skewers) ಒಂದಾದ ನಂತರ ಒಂದರಂತೆ ಚುಚ್ಚಿ.",
      "ತವಾ ಅಥವಾ ಓವನ್‌ನಲ್ಲಿ ಬೆಣ್ಣೆ ಸವರಿ ಹೊಂಬಣ್ಣಕ್ಕೆ ಹುರಿದು ಚಾಟ್ ಮಸಾಲಾ ಉದುರಿಸಿ ಬಡಿಸಿ!"
    ],
    "tip_en": "Milky mushrooms possess a thick dense cap that won't fall apart on skewers.",
    "tip_kn": "ಹಾಲು ಅಣಬೆ ಕಾಂಡ ಗಟ್ಟಿಯಾಗಿರುವುದರಿಂದ ಕಡ್ಡಿಗೆ ಚುಚ್ಚಿದಾಗ ಮುರಿದು ಬೀಳುವುದಿಲ್ಲ."
  },
  {
    "id": "milky_4",
    "type": "milky",
    "category": "curry",
    "img": "assets/recipe_sambar.jpg",
    "title_en": "Karnataka Traditional Milky Mushroom Sambar",
    "title_kn": "ಸಾಂಪ್ರದಾಯಿಕ ಹಾಲು ಅಣಬೆ ಸಾಂಬಾರ್ (Mushroom Sambar)",
    "desc_en": "Classic South Indian comfort stew with toor dal, fresh vegetables, juicy milky mushroom chunks, and aromatic homemade sambar powder.",
    "desc_kn": "ತೊಗರಿಬೇಳೆ, ನುಗ್ಗೆಕಾಯಿ, ತರಕಾರಿಗಳು ಮತ್ತು ಹಾಲು ಅಣಬೆಯೊಂದಿಗೆ ತಯಾರಿಸಿದ ಪರಿಮಳಯುಕ್ತ ಮನೆ ಸಾಂಬಾರ್.",
    "time_en": "30 Mins",
    "time_kn": "30 ನಿಮಿಷ",
    "calories": "175 kcal",
    "servings_en": "4 Servings",
    "servings_kn": "4 ಜನರಿಗೆ",
    "tag_en": "Milky • Everyday Comfort",
    "tag_kn": "ಹಾಲು ಅಣಬೆ • ಸಾಂಬಾರ್ ಊಟ",
    "ingredients_en": [
      "200g Milky Mushrooms (cubed)",
      "1/2 cup Toor dal (boiled soft)",
      "1 Drumstick cut into pieces, 1 Tomato chopped",
      "2 tbsp Homemade Sambar powder",
      "Small lime sized Tamarind soaked, 1/2 tsp Jaggery",
      "Mustard seeds, Hing, Curry leaves & Ghee for tadka"
    ],
    "ingredients_kn": [
      "200 ಗ್ರಾಂ ಹಾಲು ಅಣಬೆ (ಚೌಕವಾಗಿ ಹೆಚ್ಚಿದ್ದು)",
      "ಅರ್ಧ ಕಪ್ ತೊಗರಿಬೇಳೆ (ಮೃದುವಾಗಿ ಬೇಯಿಸಿದ್ದು)",
      "1 ನುಗ್ಗೆಕಾಯಿ, 1 ಟೊಮೆಟೊ",
      "2 ಚಮಚ ಸಾಂಬಾರ್ ಪುಡಿ, ಹುಣಸೆಹಣ್ಣಿನ ರಸ, ಸ್ವಲ್ಪ ಬೆಲ್ಲ",
      "ಸಾಸಿವೆ, ಇಂಗು, ಕರಿಬೇವು ಮತ್ತು ತುಪ್ಪ"
    ],
    "instructions_en": [
      "Boil drumstick pieces and tomatoes in tamarind water with turmeric until tender.",
      "Add milky mushroom chunks and homemade sambar powder; boil for 5 minutes.",
      "Pour in mashed boiled toor dal, salt, and jaggery; simmer on medium flame for 6 minutes.",
      "Temper mustard seeds, hing, and curry leaves in hot desi ghee and pour into the sambar.",
      "Serve hot with steamed rice and crispy papad!"
    ],
    "instructions_kn": [
      "ನುಗ್ಗೆಕಾಯಿ ಮತ್ತು ಟೊಮೆಟೊವನ್ನು ಹುಣಸೆರಸದಲ್ಲಿ ಬೇಯಿಸಿಕೊಳ್ಳಿ.",
      "ಹಾಲು ಅಣಬೆ ತುಂಡುಗಳು ಮತ್ತು ಸಾಂಬಾರ್ ಪುಡಿ ಸೇರಿಸಿ 5 ನಿಮಿಷ ಕುದಿಸಿ.",
      "ಬೇಯಿಸಿದ ತೊಗರಿಬೇಳೆ, ಉಪ್ಪು ಮತ್ತು ಬೆಲ್ಲ ಸೇರಿಸಿ ಚೆನ್ನಾಗಿ ಕುದಿಯಲು ಬಿಡಿ.",
      "ತುಪ್ಪದಲ್ಲಿ ಸಾಸಿವೆ, ಇಂಗು, ಕರಿಬೇವು ಒಗ್ಗರಣೆ ಹಾಕಿ ಬಿಸಿ ಅನ್ನದೊಂದಿಗೆ ಸವಿಯಿರಿ!"
    ],
    "tip_en": "Milky mushrooms soak up the sambar spices without turning soggy.",
    "tip_kn": "ಹಾಲು ಅಣಬೆ ಸಾಂಬಾರ್ ರಸವನ್ನು ಹೀರಿಕೊಂಡು ಬಾಯಲ್ಲಿ ಕರಗುವಂತೆ ಆಗುತ್ತದೆ."
  },
  {
    "id": "milky_5",
    "type": "milky",
    "category": "curry",
    "img": "assets/recipe_korma.jpg",
    "title_en": "Rich Mughlai Shahi Milky Mushroom Korma",
    "title_kn": "ಶಾಹೀ ಹಾಲು ಅಣಬೆ ಕುರ್ಮಾ (Shahi Korma)",
    "desc_en": "A rich celebratory royal korma with cashew nut, poppy seed, and melon seed paste simmered with succulent milky mushroom fillets.",
    "desc_kn": "ಗೋಡಂಬಿ, ಗಸಗಸೆ ಮತ್ತು ಕೆನೆ ಬೆರೆಸಿದ ಹಾಲಿನಂತಹ ಶ್ರೀಮಂತ ಬಿಳಿ ಗ್ರೇವಿಯಲ್ಲಿ ಬೇಯಿಸಿದ ಪರೋಟ ಸ್ಪೆಷಲ್ ಶಾಹೀ ಕುರ್ಮಾ.",
    "time_en": "28 Mins",
    "time_kn": "28 ನಿಮಿಷ",
    "calories": "270 kcal",
    "servings_en": "4 Servings",
    "servings_kn": "4 ಜನರಿಗೆ",
    "tag_en": "Milky • Royal Mughlai",
    "tag_kn": "ಹಾಲು ಅಣಬೆ • ಶಾಹೀ ಕುರ್ಮಾ",
    "ingredients_en": [
      "200g Fresh Milky Mushrooms (thick cut)",
      "1/2 cup Cashews & 1 tbsp Poppy seeds (soaked & pureed smooth)",
      "1 large Onion boiled & pureed, 1 tsp Ginger-Garlic paste",
      "Whole spices: 1 Cardamom, 1 Star Anise, 1 small Cinnamon stick",
      "1/4 cup Fresh cream, 1/2 tsp White pepper powder, Salt"
    ],
    "ingredients_kn": [
      "200 ಗ್ರಾಂ ಹಾಲು ಅಣಬೆ",
      "ಗೋಡಂಬಿ ಮತ್ತು ಗಸಗಸೆ ಪೇಸ್ಟ್",
      "ಬೇಯಿಸಿದ ಈರುಳ್ಳಿ ಪೇಸ್ಟ್, ಶುಂಠಿ-ಬೆಳ್ಳುಳ್ಳಿ ಪೇಸ್ಟ್",
      "ಏಲಕ್ಕಿ, ಅನಾನಸು ಹೂವು, ದಾಲ್ಚಿನ್ನಿ",
      "ಫ್ರೆಶ್ ಕ್ರೀಮ್, ಬಿಳಿ ಕಾಳುಮೆಣಸಿನ ಪುಡಿ ಮತ್ತು ಉಪ್ಪು"
    ],
    "instructions_en": [
      "Heat butter/ghee, sauté whole spices and boiled onion paste till fragrant.",
      "Add ginger-garlic paste and cashew-poppy puree; cook gently on low flame.",
      "Add milky mushroom chunks, white pepper, salt, and 1/2 cup warm water; simmer for 8 minutes.",
      "Swirl in fresh cream and a drop of kewra water. Serve with naan or kulcha!"
    ],
    "instructions_kn": [
      "ಬೆಣ್ಣೆಯಲ್ಲಿ ಮಸಾಲೆ ಮತ್ತು ಈರುಳ್ಳಿ ಪೇಸ್ಟ್ ಹುರಿಯಿರಿ.",
      "ಶುಂಠಿ-ಬೆಳ್ಳುಳ್ಳಿ ಹಾಗೂ ಗೋಡಂಬಿ ಪೇಸ್ಟ್ ಸೇರಿಸಿ ಸಣ್ಣ ಉರಿಯಲ್ಲಿ ಬೇಯಿಸಿ.",
      "ಹಾಲು ಅಣಬೆ, ಬಿಳಿ ಕಾಳುಮೆಣಸು, ಉಪ್ಪು ಹಾಕಿ 8 ನಿಮಿಷ ಬೇಯಿಸಿ ಕ್ರೀಮ್ ಸೇರಿಸಿ ನಾನ್ ಜೊತೆ ಬಡಿಸಿ!"
    ],
    "tip_en": "White pepper maintains the ivory color of the royal korma.",
    "tip_kn": "ಬಿಳಿ ಕಾಳುಮೆಣಸು ಬಳಸುವುದರಿಂದ ಗ್ರೇವಿಯ ರಾಜಮನೆತನದ ಬಿಳಿ ಬಣ್ಣ ಉಳಿಯುತ್ತದೆ."
  },
  {
    "id": "milky_6",
    "type": "milky",
    "category": "continental",
    "img": "assets/recipe_oyster_garlic.jpg",
    "title_en": "Butter Basted Milky Mushroom Gourmet Steaks",
    "title_kn": "ಬೆಣ್ಣೆ ಬೆಳ್ಳುಳ್ಳಿ ಹಾಲು ಅಣಬೆ ಸ್ಟೀಕ್ಸ್ (Mushroom Steaks)",
    "desc_en": "Thick 1-inch vertical slabs of milky mushrooms seared on a cast-iron pan, basted with rosemary butter and flake sea salt.",
    "desc_kn": "ದಪ್ಪ ಚಪ್ಪಟೆಯಾಗಿ ಹೆಚ್ಚಿದ ಹಾಲು ಅಣಬೆಯನ್ನು ಬೆಣ್ಣೆ, ರೋಸ್‌ಮೇರಿ ಮತ್ತು ಬೆಳ್ಳುಳ್ಳಿಯೊಂದಿಗೆ ಕಂದು ಬಣ್ಣಕ್ಕೆ ಹುರಿದ ಗೌರ್ಮೆ ಸ್ಟೀಕ್ಸ್.",
    "time_en": "16 Mins",
    "time_kn": "16 ನಿಮಿಷ",
    "calories": "170 kcal",
    "servings_en": "2 Servings",
    "servings_kn": "2 ಜನರಿಗೆ",
    "tag_en": "Milky • Continental Gourmet",
    "tag_kn": "ಹಾಲು ಅಣಬೆ • ಗೌರ್ಮೆ ಸ್ಟೀಕ್ಸ್",
    "ingredients_en": [
      "200g Large Milky Mushrooms (cut into 1-inch thick flat steaks)",
      "2.5 tbsp Grass-fed salted butter",
      "5 cloves Garlic whole with skin lightly crushed",
      "2 sprigs Fresh Rosemary or Thyme",
      "Coarse sea salt & cracked black peppercorns"
    ],
    "ingredients_kn": [
      "200 ಗ್ರಾಂ ದೊಡ್ಡ ಹಾಲು ಅಣಬೆ (ದಪ್ಪ ಬಿಲ್ಲೆಗಳಾಗಿ ಕತ್ತರಿಸಿದ್ದು)",
      "2.5 ಚಮಚ ಬೆಣ್ಣೆ",
      "5 ಎಸಳು ಬೆಳ್ಳುಳ್ಳಿ",
      "ರೋಸ್‌ಮೇರಿ ಅಥವಾ ಥೈಮ್ ಎಲೆಗಳು",
      "ಕಲ್ಲುಪ್ಪು ಮತ್ತು ಕಾಳುಮೆಣಸು"
    ],
    "instructions_en": [
      "Score crosshatch pattern lightly on the surface of the milky mushroom steaks.",
      "Sear in a smoking hot skillet with a touch of oil for 3 minutes until dark golden crust forms.",
      "Flip, add butter, crushed garlic, and rosemary to the pan.",
      "Tilt the skillet and continuously spoon the foamy fragrant butter over the steaks for 3 minutes.",
      "Rest 2 minutes, sprinkle coarse sea salt, and serve with mashed potatoes!"
    ],
    "instructions_kn": [
      "ಹಾಲು ಅಣಬೆ ಬಿಲ್ಲೆಗಳ ಮೇಲೆ ಚಾಕುವಿನಿಂದ ಚೌಕಾಕಾರವಾಗಿ ಲಘುವಾಗಿ ಗೆರೆ ಎಳೆಯಿರಿ.",
      "ಕಾದ ತವಾದ ಮೇಲೆ ಎರಡೂ ಕಡೆ ಹೊಂಬಣ್ಣ ಬರುವಂತೆ ಹುರಿಯಿರಿ.",
      "ಬೆಣ್ಣೆ, ಬೆಳ್ಳುಳ್ಳಿ ಮತ್ತು ರೋಸ್‌ಮೇರಿ ಹಾಕಿ ಕರಗಿದ ಬೆಣ್ಣೆಯನ್ನು ಚಮಚದಿಂದ ಅಣಬೆಯ ಮೇಲೆ ಸತತವಾಗಿ ಸುರಿಯಿರಿ.",
      "ಕಲ್ಲುಪ್ಪು ಉದುರಿಸಿ ತಕ್ಷಣ ಬಡಿಸಿ!"
    ],
    "tip_en": "Crosshatch scoring allows the garlic butter to penetrate deep into the mushroom's dense interior.",
    "tip_kn": "ಗೆರೆಗಳನ್ನು ಎಳೆಯುವುದರಿಂದ ಬೆಣ್ಣೆಯ ಪರಿಮಳ ಅಣಬೆಯ ಒಳಗಿನವರೆಗೂ ಇಳಿಯುತ್ತದೆ."
  },
  {
    "id": "milky_7",
    "type": "milky",
    "category": "curry",
    "img": "assets/recipe_ghee_roast.jpg",
    "title_en": "Creamy Milky Mushroom Matar Malai",
    "title_kn": "ಹಾಲು ಅಣಬೆ ಬಟಾಣಿ ಗ್ರೇವಿ (Matar Malai)",
    "desc_en": "Sweet tender green peas and soft milky mushroom medallions in a velvety onion, tomato, and cashew cream sauce.",
    "desc_kn": "ಸಿಹಿ ಹಸಿ ಬಟಾಣಿ ಮತ್ತು ಹಾಲು ಅಣಬೆ ತುಂಡುಗಳನ್ನು ಟೊಮೆಟೊ, ಈರುಳ್ಳಿ ಮತ್ತು ಗೋಡಂಬಿ ಕ್ರೀಮ್ ಸಾಸ್‌ನಲ್ಲಿ ಬೇಯಿಸಿದ ರುಚಿಕರ ಗ್ರೇವಿ.",
    "time_en": "22 Mins",
    "time_kn": "22 ನಿಮಿಷ",
    "calories": "220 kcal",
    "servings_en": "3-4 Servings",
    "servings_kn": "3-4 ಜನರಿಗೆ",
    "tag_en": "Milky • North Indian Classic",
    "tag_kn": "ಹಾಲು ಅಣಬೆ • ಮಟರ್ ಮಲೈ",
    "ingredients_en": [
      "200g Milky Mushrooms (cubed)",
      "1 cup Sweet Green Peas (fresh or frozen)",
      "2 Onions & 2 Tomatoes pureed",
      "1 tsp Ginger-garlic paste, 1/2 tsp Cumin seeds",
      "1/2 tsp Garam masala, 1/2 tsp Coriander powder",
      "3 tbsp Fresh Cream, Salt & Cilantro"
    ],
    "ingredients_kn": [
      "200 ಗ್ರಾಂ ಹಾಲು ಅಣಬೆ",
      "1 ಕಪ್ ಹಸಿ ಬಟಾಣಿ",
      "ಈರುಳ್ಳಿ ಮತ್ತು ಟೊಮೆಟೊ ಪ್ಯೂರಿ",
      "ಶುಂಠಿ-ಬೆಳ್ಳುಳ್ಳಿ ಪೇಸ್ಟ್, ಜೀರಿಗೆ",
      "ಗರಂ ಮಸಾಲ, ಕೊತ್ತಂಬರಿ ಪುಡಿ",
      "ಫ್ರೆಶ್ ಕ್ರೀಮ್ ಮತ್ತು ಉಪ್ಪು"
    ],
    "instructions_en": [
      "Sauté cumin, onions, and ginger-garlic paste in 2 tbsp oil till golden.",
      "Add tomato puree and dry spices; cook till oil separates.",
      "Add green peas, milky mushroom chunks, and 1/2 cup water; simmer covered for 7 minutes.",
      "Stir in fresh cream and cilantro; serve with warm Phulkas or Jeera Rice!"
    ],
    "instructions_kn": [
      "ಬಾಣಲೆಯಲ್ಲಿ ಜೀರಿಗೆ, ಈರುಳ್ಳಿ ಮತ್ತು ಶುಂಠಿ-ಬೆಳ್ಳುಳ್ಳಿ ಪೇಸ್ಟ್ ಹುರಿಯಿರಿ.",
      "ಟೊಮೆಟೊ ಪ್ಯೂರಿ ಹಾಗೂ ಮಸಾಲೆ ಪುಡಿಗಳನ್ನು ಸೇರಿಸಿ ಎಣ್ಣೆ ಬಿಡುವವರೆಗೆ ಬೇಯಿಸಿ.",
      "ಬಟಾಣಿ, ಹಾಲು ಅಣಬೆ ಸೇರಿಸಿ 7 ನಿಮಿಷ ಮುಚ್ಚಿ ಬೇಯಿಸಿ ಕೊನೆಯಲ್ಲಿ ಕ್ರೀಮ್ ಹಾಕಿ ಚಪಾತಿ ಜೊತೆ ಸವಿಯಿರಿ!"
    ],
    "tip_en": "Fresh peas provide natural sweetness that balances the rich savory mushrooms.",
    "tip_kn": "ಸಿಹಿ ಬಟಾಣಿ ಅಣಬೆಯ ಜೊತೆ ಅತ್ಯುತ್ತಮ ಸಮತೋಲನದ ರುಚಿ ನೀಡುತ್ತದೆ."
  },
  {
    "id": "milky_8",
    "type": "milky",
    "category": "dry",
    "img": "assets/recipe_milky_pepper.jpg",
    "title_en": "Spicy Andhra Milky Mushroom Vepudu",
    "title_kn": "ಆಂಧ್ರ ಶೈಲಿಯ ಹಾಲು ಅಣಬೆ ವೇಪುಡು (Andhra Vepudu)",
    "desc_en": "Spicy and fiery Andhra style dry roast with garlic, dry red chillies, curry leaves, and roasted peanut powder.",
    "desc_kn": "ಬೆಳ್ಳುಳ್ಳಿ, ಕೆಂಪು ಮೆಣಸು, ಕರಿಬೇವಿನ ಒಗ್ಗರಣೆ ಮತ್ತು ಹುರಿದ ಕಡಲೆಕಾಯಿ ಪುಡಿಯೊಂದಿಗೆ ತಯಾರಿಸಿದ ಆಂಧ್ರ ಶೈಲಿಯ ಖಾರವಾದ ವೇಪುಡು.",
    "time_en": "18 Mins",
    "time_kn": "18 ನಿಮಿಷ",
    "calories": "190 kcal",
    "servings_en": "3 Servings",
    "servings_kn": "3 ಜನರಿಗೆ",
    "tag_en": "Milky • Andhra Special",
    "tag_kn": "ಹಾಲು ಅಣಬೆ • ಆಂಧ್ರ ವೇಪುಡು",
    "ingredients_en": [
      "200g Fresh Milky Mushrooms (chopped bite-sized)",
      "2 tbsp Peanut oil",
      "1 tbsp Crushed garlic with skin",
      "4 Dried Guntur red chillies broken, 2 sprigs Curry leaves",
      "2 tbsp Coarse roasted peanut powder",
      "1/2 tsp Turmeric, 1/2 tsp Cumin seeds & Salt"
    ],
    "ingredients_kn": [
      "200 ಗ್ರಾಂ ಹಾಲು ಅಣಬೆ (ಚಿಕ್ಕ ತುಂಡುಗಳು)",
      "2 ಚಮಚ ಕಡಲೆಕಾಯಿ ಎಣ್ಣೆ",
      "1 ಚಮಚ ಜಜ್ಜಿದ ಬೆಳ್ಳುಳ್ಳಿ",
      "4 ಒಣ ಕೆಂಪು ಮೆಣಸಿನಕಾಯಿ, ಕರಿಬೇವು",
      "2 ಚಮಚ ಹುರಿದ ಶೇಂಗಾ ಪುಡಿ",
      "ಅರಿಶಿನ, ಜೀರಿಗೆ ಮತ್ತು ಉಪ್ಪು"
    ],
    "instructions_en": [
      "Heat peanut oil; splutter cumin seeds, curry leaves, crushed garlic, and dry chillies.",
      "Add milky mushrooms, turmeric, and salt. Sauté on medium-high flame for 6 minutes.",
      "Sprinkle roasted peanut powder; toss vigorously for 2 minutes until dry and crunchy.",
      "Serve hot alongside Andhra Pappu (dal) and steamed rice with ghee!"
    ],
    "instructions_kn": [
      "ಕಡಲೆಕಾಯಿ ಎಣ್ಣೆಯಲ್ಲಿ ಜೀರಿಗೆ, ಕರಿಬೇವು, ಜಜ್ಜಿದ ಬೆಳ್ಳುಳ್ಳಿ ಹಾಗೂ ಒಣಮೆಣಸು ಒಗ್ಗರಣೆ ಹಾಕಿ.",
      "ಹಾಲು ಅಣಬೆ, ಅರಿಶಿನ ಮತ್ತು ಉಪ್ಪು ಸೇರಿಸಿ 6 ನಿಮಿಷ ಹುರಿಯಿರಿ.",
      "ಹುರಿದ ಶೇಂಗಾ ಪುಡಿ ಉದುರಿಸಿ 2 ನಿಮಿಷ ಟಾಸ್ ಮಾಡಿ ಬಿಸಿ ಅನ್ನ, ಬೇಳೆ ಸಾರಿನ ಜೊತೆ ಸವಿಯಿರಿ!"
    ],
    "tip_en": "Roasted peanut powder coats each mushroom chunk in nutty crunch.",
    "tip_kn": "ಶೇಂಗಾ ಪುಡಿ ಅಣಬೆಗೆ ಗರಿಗರಿ ಮತ್ತು ನಟ್ಸ್ ಪರಿಮಳ ನೀಡುತ್ತದೆ."
  },
  {
    "id": "milky_9",
    "type": "milky",
    "category": "soup",
    "img": "assets/recipe_broth.jpg",
    "title_en": "Velvety Wild Milky Mushroom Soup",
    "title_kn": "ಕ್ರೀಮೀ ಹಾಲು ಅಣಬೆ ಸೂಪ್ (Velvety Soup)",
    "desc_en": "Luxurious, smooth potage made from pureed sautéed milky mushrooms, leeks or onions, vegetable stock, and fresh cream.",
    "desc_kn": "ಬೆಳ್ಳುಳ್ಳಿ, ಬೆಣ್ಣೆ ಮತ್ತು ತರಕಾರಿ ಸ್ಟಾಕ್‌ನಲ್ಲಿ ಬೇಯಿಸಿ ಕ್ರೀಮ್ ಸೇರಿಸಿದ ಹೋಟೆಲ್ ಶೈಲಿಯ ಕ್ರೀಮೀ ಹಾಲು ಅಣಬೆ ಸೂಪ್.",
    "time_en": "20 Mins",
    "time_kn": "20 ನಿಮಿಷ",
    "calories": "145 kcal",
    "servings_en": "3 Servings",
    "servings_kn": "3 ಜನರಿಗೆ",
    "tag_en": "Milky • Winter Warmth",
    "tag_kn": "ಹಾಲು ಅಣಬೆ • ಕ್ರೀಮೀ ಸೂಪ್",
    "ingredients_en": [
      "200g Fresh Milky Mushrooms (sliced)",
      "1 medium Onion chopped, 3 Garlic cloves minced",
      "2 tbsp Butter, 1 tbsp Flour (for roux)",
      "2.5 cups Vegetable stock or water",
      "1/4 cup Fresh cream, Fresh cracked black pepper & Salt"
    ],
    "ingredients_kn": [
      "200 ಗ್ರಾಂ ಹಾಲು ಅಣಬೆ",
      "ಈರುಳ್ಳಿ, ಬೆಳ್ಳುಳ್ಳಿ",
      "ಬೆಣ್ಣೆ ಮತ್ತು ಸ್ವಲ್ಪ ಮೈದಾ",
      "ತರಕಾರಿ ಸ್ಟಾಕ್ ಅಥವಾ ನೀರು",
      "ಫ್ರೆಶ್ ಕ್ರೀಮ್, ಕಾಳುಮೆಣಸಿನ ಪುಡಿ ಮತ್ತು ಉಪ್ಪು"
    ],
    "instructions_en": [
      "Sauté onions, garlic, and milky mushrooms in butter until mushrooms are tender; reserve a few slices for garnish.",
      "Sprinkle flour, cook for 1 minute, then pour vegetable stock and simmer for 10 minutes.",
      "Blend with an immersion blender to a silky smooth consistency.",
      "Stir in cream, season with black pepper and salt. Serve warm with toasted garlic bread!"
    ],
    "instructions_kn": [
      "ಬೆಣ್ಣೆಯಲ್ಲಿ ಈರುಳ್ಳಿ, ಬೆಳ್ಳುಳ್ಳಿ ಮತ್ತು ಅಣಬೆ ಹಾಕಿ ಮೃದುವಾಗುವವರೆಗೆ ಹುರಿಯಿರಿ.",
      "ಸ್ವಲ್ಪ ಮೈದಾ ಮತ್ತು ತರಕಾರಿ ಸ್ಟಾಕ್ ಸೇರಿಸಿ 10 ನಿಮಿಷ ಕುದಿಸಿ ಮಿಕ್ಸಿಯಲ್ಲಿ ನುಣ್ಣಗೆ ರುಬ್ಬಿ.",
      "ಕ್ರೀಮ್ ಮತ್ತು ಕಾಳುಮೆಣಸಿನ ಪುಡಿ ಸೇರಿಸಿ ಬಿಸಿಬಿಸಿಯಾಗಿ ಗಾರ್ಲಿಕ್ ಬ್ರೆಡ್ ಜೊತೆ ಸವಿಯಿರಿ!"
    ],
    "tip_en": "Milky mushrooms create an exceptionally smooth, snow-white velouté.",
    "tip_kn": "ಹಾಲು ಅಣಬೆ ಸೂಪ್‌ಗೆ ಅಪ್ಪಟ ಕೆನೆಯಂತಹ ಆಕರ್ಷಕ ಬಿಳಿ ಬಣ್ಣ ತರುತ್ತದೆ."
  },
  {
    "id": "milky_10",
    "type": "milky",
    "category": "rice",
    "img": "assets/recipe_milky_biryani.jpg",
    "title_en": "South Indian Ghee Milky Mushroom Pulao",
    "title_kn": "ಘಮಘಮಿಸುವ ಹಾಲು ಅಣಬೆ ಪಲಾವ್ (Ghee Pulao)",
    "desc_en": "Aromatic Seeraga Samba or Basmati rice cooked in pure ghee with green peas, mint paste, and tender milky mushroom cubes.",
    "desc_kn": "ಜೀರಗ ಸಾಂಬಾ ಅಕ್ಕಿ, ಹಸಿರು ಮಸಾಲೆ ಮತ್ತು ತುಪ್ಪದಲ್ಲಿ ಬೇಯಿಸಿದ ಕರ್ನಾಟಕ ಶೈಲಿಯ ಅದ್ಭುತ ಹಾಲು ಅಣಬೆ ಪಲಾವ್.",
    "time_en": "25 Mins",
    "time_kn": "25 ನಿಮಿಷ",
    "calories": "270 kcal",
    "servings_en": "4 Servings",
    "servings_kn": "4 ಜನರಿಗೆ",
    "tag_en": "Milky • Sunday Special",
    "tag_kn": "ಹಾಲು ಅಣಬೆ • ನಾಟಿ ಶೈಲಿ ಪಲಾವ್",
    "ingredients_en": [
      "200g Milky Mushrooms (cubed)",
      "1.5 cups Seeraga Samba or Basmati Rice",
      "2 tbsp Desi Ghee + 1 tbsp Oil",
      "Green masala: 4 Green chillies, 1 inch Ginger, 6 Garlic cloves, handful Mint & Coriander ground together",
      "1 Onion sliced, Whole spices, Salt"
    ],
    "ingredients_kn": [
      "200 ಗ್ರಾಂ ಹಾಲು ಅಣಬೆ (ಚೌಕಾಕಾರವಾಗಿ ಕತ್ತರಿಸಿದ್ದು)",
      "1.5 ಕಪ್ ಜೀರಗ ಸಾಂಬಾ ಅಥವಾ ಬಾಸ್ಮತಿ ಅಕ್ಕಿ",
      "ತುಪ್ಪ ಮತ್ತು ಎಣ್ಣೆ",
      "ಹಸಿರು ಮಸಾಲೆ: ಹಸಿಮೆಣಸು, ಶುಂಠಿ, ಬೆಳ್ಳುಳ್ಳಿ, ಪುದೀನಾ, ಕೊತ್ತಂಬರಿ",
      "ಈರುಳ್ಳಿ, ಮಸಾಲೆ ದಿಣ್ಣುಗಳು ಮತ್ತು ಉಪ್ಪು"
    ],
    "instructions_en": [
      "In a cooker, heat ghee; splutter whole spices and fry sliced onions till soft.",
      "Add ground green paste and sauté till aromatic; toss in milky mushroom cubes.",
      "Add soaked rice, 2.5 cups water, and salt. Cook for 2 whistles.",
      "Gently fluff and serve with spicy onion tomato raita!"
    ],
    "instructions_kn": [
      "ಕುಕ್ಕರ್‌ನಲ್ಲಿ ತುಪ್ಪ ಕಾಯಿಸಿ ಮಸಾಲೆ ದಿಣ್ಣು ಹಾಗೂ ಈರುಳ್ಳಿ ಹುರಿಯಿರಿ.",
      "ರುಬ್ಬಿದ ಹಸಿರು ಮಸಾಲೆ ಸೇರಿಸಿ ಘಮ ಬರುವವರೆಗೆ ಬಾಡಿಸಿ, ಅಣಬೆ ತುಂಡುಗಳನ್ನು ಹಾಕಿ.",
      "ಅಕ್ಕಿ, ನೀರು, ಉಪ್ಪು ಸೇರಿಸಿ 2 ವಿಸಿಲ್ ಕೂಗಿಸಿ ರಾಯಿತದೊಂದಿಗೆ ಬಡಿಸಿ!"
    ],
    "tip_en": "Seeraga Samba rice pairs heavenly with the firm bite of milky mushrooms.",
    "tip_kn": "ಜೀರಗ ಸಾಂಬಾ ಅಕ್ಕಿ ಬಳಸಿದರೆ ಮದುವೆ ಮನೆ ಪಲಾವ್‌ನಂತಹ ಪರಿಮಳ ಬರುತ್ತದೆ."
  },
  {
    "id": "milky_11",
    "type": "milky",
    "category": "snack",
    "img": "assets/recipe_pakoda.jpg",
    "title_en": "Crispy Fried Milky Mushroom Popcorn Bites",
    "title_kn": "ಕ್ರಿಸ್ಪಿ ಹಾಲು ಅಣಬೆ ಪಾಪ್‌ಕಾರ್ನ್ ಬೈಟ್ಸ್ (Popcorn Bites)",
    "desc_en": "Spicy marinated bite-sized milky mushroom cubes coated in seasoned flour crumbs and deep-fried until ultra-crispy.",
    "desc_kn": "ಮಕ್ಕಳಿಗೆ ಅಚ್ಚುಮೆಚ್ಚಿನ ಕೆಎಫ್‌ಸಿ ಶೈಲಿಯ ಗರಿಗರಿ ಹಾಲು ಅಣಬೆ ಪಾಪ್‌ಕಾರ್ನ್ ಬೈಟ್ಸ್. ಸಂಜೆಯ ಪಾರ್ಟಿ ಸ್ನ್ಯಾಕ್.",
    "time_en": "18 Mins",
    "time_kn": "18 ನಿಮಿಷ",
    "calories": "215 kcal",
    "servings_en": "3 Servings",
    "servings_kn": "3 ಜನರಿಗೆ",
    "tag_en": "Milky • Kids & Party Snack",
    "tag_kn": "ಹಾಲು ಅಣಬೆ • ಪಾರ್ಟಿ ಸ್ನ್ಯಾಕ್ಸ್",
    "ingredients_en": [
      "200g Milky Mushrooms (cut into bite-sized 1-inch cubes)",
      "1/2 cup Buttermilk or curd with garlic powder & salt",
      "1/2 cup Flour + 2 tbsp Cornstarch seasoned with paprika & pepper",
      "Breadcrumbs for extra crunch",
      "Oil for deep frying & Chaat masala"
    ],
    "ingredients_kn": [
      "200 ಗ್ರಾಂ ಹಾಲು ಅಣಬೆ (ಸಣ್ಣ ಚೌಕ ತುಂಡುಗಳು)",
      "ಮಜ್ಜಿಗೆ ಅಥವಾ ಮೊಸರು, ಬೆಳ್ಳುಳ್ಳಿ ಪುಡಿ",
      "ಮೈದಾ, ಕಾರ್ನ್‌ಫ್ಲೋರ್, ಕಾಳುಮೆಣಸಿನ ಪುಡಿ",
      "ಬ್ರೆಡ್‌ಕ್ರಂಬ್ಸ್ ಮತ್ತು ಎಣ್ಣೆ"
    ],
    "instructions_en": [
      "Marinate mushroom cubes in seasoned buttermilk for 10 minutes.",
      "Dredge each piece in flour, dip back in buttermilk, and roll in breadcrumbs.",
      "Deep fry in hot oil for 3-4 minutes until golden and super crunchy.",
      "Sprinkle chaat masala and serve with cheesy mayo or garlic dip!"
    ],
    "instructions_kn": [
      "ಅಣಬೆ ತುಂಡುಗಳನ್ನು ಮಸಾಲೆಯುಕ್ತ ಮಜ್ಜಿಗೆಯಲ್ಲಿ 10 ನಿಮಿಷ ನೆನೆಸಿಡಿ.",
      "ಹಿಟ್ಟಿನಲ್ಲಿ ಅದ್ದಿ, ನಂತರ ಬ್ರೆಡ್‌ಕ್ರಂಬ್ಸ್‌ನಲ್ಲಿ ಹೊರಳಿಸಿ ಕಾದ ಎಣ್ಣೆಯಲ್ಲಿ ಕರಿಯಿರಿ.",
      "ಮೇಲಿಂದ ಚಾಟ್ ಮಸಾಲಾ ಉದುರಿಸಿ ಮಯೋನೇಸ್ ಅಥವಾ ಸಾಸ್ ಜೊತೆ ಸವಿಯಿರಿ!"
    ],
    "tip_en": "Double-dipping produces the signature rippled crunchy outer crust.",
    "tip_kn": "ಎರಡು ಬಾರಿ ಹಿಟ್ಟಿನಲ್ಲಿ ಅದ್ದಿ ಕರಿದರೆ ಹೊರಪದರ ಅತಿ ಗರಿಗರಿಯಾಗುತ್ತದೆ."
  },
  {
    "id": "milky_12",
    "type": "milky",
    "category": "curry",
    "img": "assets/recipe_ghee_roast.jpg",
    "title_en": "Royal Hyderabadi Milky Mushroom Masala",
    "title_kn": "ಹೈದರಾಬಾದಿ ಹಾಲು ಅಣಬೆ ಮಸಾಲ (Hyderabadi Masala)",
    "desc_en": "Rich spicy gravy cooked with roasted sesame seeds, peanuts, desiccated coconut, and tender milky mushrooms.",
    "desc_kn": "ಎಳ್ಳು, ಶೇಂಗಾ, ತೆಂಗಿನಕಾಯಿ ಹಾಗೂ ಹುಣಸೆಹಣ್ಣಿನ ಮಸಾಲೆಯಲ್ಲಿ ಬೇಯಿಸಿದ ಸಾಲನ್ ಶೈಲಿಯ ಹೈದರಾಬಾದಿ ಹಾಲು ಅಣಬೆ ಮಸಾಲ.",
    "time_en": "28 Mins",
    "time_kn": "28 ನಿಮಿಷ",
    "calories": "250 kcal",
    "servings_en": "4 Servings",
    "servings_kn": "4 ಜನರಿಗೆ",
    "tag_en": "Milky • Hyderabadi Salan",
    "tag_kn": "ಹಾಲು ಅಣಬೆ • ಹೈದರಾಬಾದಿ ಶೈಲಿ",
    "ingredients_en": [
      "200g Milky Mushrooms (quartered)",
      "2 tbsp Peanuts, 1 tbsp Sesame seeds, 2 tbsp Dry coconut (roasted & ground to paste)",
      "1 large Onion fried, 1 tbsp Tamarind pulp",
      "1 tsp Ginger-garlic paste, 1/2 tsp Garam masala",
      "Oil, Fresh curry leaves & Green chillies"
    ],
    "ingredients_kn": [
      "200 ಗ್ರಾಂ ಹಾಲು ಅಣಬೆ",
      "ಶೇಂಗಾ, ಬಿಳಿ ಎಳ್ಳು, ಒಣಕೊಬ್ಬರಿ (ಹುರಿದು ರುಬ್ಬಿದ ಪೇಸ್ಟ್)",
      "ಹುರಿದ ಈರುಳ್ಳಿ, ಹುಣಸೆಹಣ್ಣಿನ ರಸ",
      "ಶುಂಠಿ-ಬೆಳ್ಳುಳ್ಳಿ ಪೇಸ್ಟ್, ಗರಂ ಮಸಾಲ",
      "ಎಣ್ಣೆ, ಕರಿಬೇವು ಮತ್ತು ಹಸಿಮೆಣಸು"
    ],
    "instructions_en": [
      "Roast peanuts, sesame seeds, and dry coconut; grind with fried onions and tamarind to a smooth nutty paste.",
      "Heat oil in a kadai; splutter curry leaves and green chillies.",
      "Add ginger-garlic paste, ground nutty paste, and spices; cook until oil floats on top.",
      "Add milky mushrooms and simmer for 8 minutes. Serve alongside Hyderabadi Biryani!"
    ],
    "instructions_kn": [
      "ಶೇಂಗಾ, ಎಳ್ಳು, ಒಣಕೊಬ್ಬರಿ ಮತ್ತು ಈರುಳ್ಳಿಯನ್ನು ಹುಣಸೆರಸದೊಂದಿಗೆ ನುಣ್ಣಗೆ ರುಬ್ಬಿಕೊಳ್ಳಿ.",
      "ಎಣ್ಣೆಯಲ್ಲಿ ಕರಿಬೇವು, ಹಸಿಮೆಣಸು ಒಗ್ಗರಣೆ ಹಾಕಿ ಮಸಾಲೆ ಪೇಸ್ಟ್ ಬೇಯಿಸಿ.",
      "ಹಾಲು ಅಣಬೆ ಸೇರಿಸಿ 8 ನಿಮಿಷ ಕುದಿಸಿ ಬಿರಿಯಾನಿ ಜೊತೆ ಸಾಲನ್ ಆಗಿ ಬಡಿಸಿ!"
    ],
    "tip_en": "The nutty sesame-peanut base pairs delightfully with aromatic biryanis.",
    "tip_kn": "ಎಳ್ಳು ಮತ್ತು ಶೇಂಗಾದ ಗ್ರೇವಿ ಬಿರಿಯಾನಿಗೆ ಅದ್ಭುತ ಸಾಲನ್ ಆಗಿ ಹೊಂದಿಕೊಳ್ಳುತ್ತದೆ."
  },
  {
    "id": "milky_13",
    "type": "milky",
    "category": "dry",
    "img": "assets/recipe_oyster_garlic.jpg",
    "title_en": "Spiced Milky Mushroom Bhurji",
    "title_kn": "ಮಸಾಲೆ ಹಾಲು ಅಣಬೆ ಭುರ್ಜಿ (Mushroom Bhurji)",
    "desc_en": "Finely minced milky mushrooms scrambled with onions, juicy tomatoes, green chillies, and aromatic fresh coriander.",
    "desc_kn": "ಸಣ್ಣಗೆ ಹೆಚ್ಚಿದ ಹಾಲು ಅಣಬೆಯನ್ನು ಈರುಳ್ಳಿ, ಟೊಮೆಟೊ, ಹಸಿಮೆಣಸಿನೊಂದಿಗೆ ಮೊಟ್ಟೆ ಭುರ್ಜಿಯ ಶೈಲಿಯಲ್ಲಿ ತಯಾರಿಸಿದ ಪೌಷ್ಟಿಕ ಸಸ್ಯಾಹಾರಿ ಭುರ್ಜಿ.",
    "time_en": "15 Mins",
    "time_kn": "15 ನಿಮಿಷ",
    "calories": "140 kcal",
    "servings_en": "3 Servings",
    "servings_kn": "3 ಜನರಿಗೆ",
    "tag_en": "Milky • High Protein Breakfast",
    "tag_kn": "ಹಾಲು ಅಣಬೆ • ಹೈ-ಪ್ರೋಟೀನ್ ಭುರ್ಜಿ",
    "ingredients_en": [
      "200g Milky Mushrooms (finely chopped / minced)",
      "1 large Onion finely chopped, 2 Tomatoes finely chopped",
      "2 Green chillies finely minced, 1/2 tsp Cumin seeds",
      "1/2 tsp Turmeric, 1/2 tsp Pav bhaji masala or Garam masala",
      "1 tbsp Butter / Oil, Fresh coriander & Lemon juice"
    ],
    "ingredients_kn": [
      "200 ಗ್ರಾಂ ಹಾಲು ಅಣಬೆ (ಅತಿ ಸಣ್ಣಗೆ ಹೆಚ್ಚಿದ್ದು)",
      "ಈರುಳ್ಳಿ ಮತ್ತು ಟೊಮೆಟೊ (ಸಣ್ಣಗೆ ಹೆಚ್ಚಿದ್ದು)",
      "ಹಸಿಮೆಣಸು, ಜೀರಿಗೆ, ಅರಿಶಿನ",
      "ಪಾವ್ ಭಾಜಿ ಮಸಾಲ ಅಥವಾ ಗರಂ ಮಸಾಲ",
      "ಬೆಣ್ಣೆ, ಕೊತ್ತಂಬರಿ ಮತ್ತು ನಿಂಬೆರಸ"
    ],
    "instructions_en": [
      "Heat butter in a pan; crackle cumin seeds and sauté onions and green chillies till translucent.",
      "Add chopped tomatoes and spices; cook till soft and mushy.",
      "Add minced milky mushrooms and salt. Scramble and cook on medium-high heat for 5 minutes.",
      "Finish with chopped coriander and a squeeze of fresh lime. Serve with warm Pav, Roti, or toasted bread!"
    ],
    "instructions_kn": [
      "ಬೆಣ್ಣೆಯಲ್ಲಿ ಜೀರಿಗೆ, ಈರುಳ್ಳಿ ಮತ್ತು ಹಸಿಮೆಣಸು ಹುರಿಯಿರಿ.",
      "ಟೊಮೆಟೊ ಮತ್ತು ಮಸಾಲೆ ಪುಡಿ ಹಾಕಿ ಮೃದುವಾಗುವವರೆಗೆ ಬೇಯಿಸಿ.",
      "ಸಣ್ಣಗೆ ಹೆಚ್ಚಿದ ಅಣಬೆ ಸೇರಿಸಿ 5 ನಿಮಿಷ ಭುರ್ಜಿಯಂತೆ ಕೈಯಾಡಿಸಿ ಬೇಯಿಸಿ.",
      "ನಿಂಬೆರಸ, ಕೊತ್ತಂಬರಿ ಸೊಪ್ಪು ಉದುರಿಸಿ ಚಪಾತಿ ಅಥವಾ ಬ್ರೆಡ್ ಜೊತೆ ಸವಿಯಿರಿ!"
    ],
    "tip_en": "A superb vegetarian, high-protein alternative to egg scrambled bhurji.",
    "tip_kn": "ಮೊಟ್ಟೆ ತಿನ್ನದವರಿಗೆ ಇದು ಅತ್ಯುತ್ತಮ ಸಸ್ಯಾಹಾರಿ ಹೈ-ಪ್ರೋಟೀನ್ ಉಪಹಾರ."
  },
  {
    "id": "milky_14",
    "type": "milky",
    "category": "dry",
    "img": "assets/recipe_ghee_roast.jpg",
    "title_en": "Claypot Sesame Milky Mushroom Roast",
    "title_kn": "ಮಣ್ಣಿನ ಮಡಕೆ ಹಾಲು ಅಣಬೆ ರೋಸ್ಟ್ (Sesame Roast)",
    "desc_en": "Slow-roasted milky mushroom wedges cooked in an earthenware clay pot with toasted white sesame, curry leaves, and crushed red chillies.",
    "desc_kn": "ಮಣ್ಣಿನ ಮಡಕೆಯಲ್ಲಿ ಹುರಿದ ಬಿಳಿ ಎಳ್ಳು, ಹಸುವಿನ ತುಪ್ಪ ಮತ್ತು ಕರಿಬೇವಿನೊಂದಿಗೆ ಸಣ್ಣ ಉರಿಯಲ್ಲಿ ರೋಸ್ಟ್ ಮಾಡಿದ ಸಾಂಪ್ರದಾಯಿಕ ಅಣಬೆ.",
    "time_en": "20 Mins",
    "time_kn": "20 ನಿಮಿಷ",
    "calories": "185 kcal",
    "servings_en": "3 Servings",
    "servings_kn": "3 ಜನರಿಗೆ",
    "tag_en": "Milky • Earthenware Cooking",
    "tag_kn": "ಹಾಲು ಅಣಬೆ • ಮಡಕೆ ರೋಸ್ಟ್",
    "ingredients_en": [
      "200g Milky Mushrooms (sliced into thick wedges)",
      "1.5 tbsp Desi cow ghee",
      "1 tbsp White sesame seeds toasted",
      "4-5 Crushed dry red chillies, 1 sprig Fresh curry leaves",
      "1/2 tsp Mustard seeds, Rock salt to taste"
    ],
    "ingredients_kn": [
      "200 ಗ್ರಾಂ ಹಾಲು ಅಣಬೆ (ದಪ್ಪ ತುಂಡುಗಳು)",
      "1.5 ಚಮಚ ಹಸುವಿನ ತುಪ್ಪ",
      "1 ಚಮಚ ಬಿಳಿ ಎಳ್ಳು (ಹುರಿದದ್ದು)",
      "ಒಣ ಕೆಂಪು ಮೆಣಸು, ಕರಿಬೇವು, ಸಾಸಿವೆ",
      "ಕಲ್ಲುಪ್ಪು"
    ],
    "instructions_en": [
      "Heat ghee in a seasoned claypot; add mustard seeds, curry leaves, and crushed dry chillies.",
      "Add milky mushroom wedges and rock salt. Roast uncovered on medium flame for 8 minutes.",
      "Toss with toasted white sesame seeds during the final minute.",
      "Serve directly in the hot clay pot for authentic rustic aroma!"
    ],
    "instructions_kn": [
      "ಮಣ್ಣಿನ ಮಡಕೆಯಲ್ಲಿ ತುಪ್ಪ ಕಾಯಿಸಿ ಸಾಸಿವೆ, ಕರಿಬೇವು ಮತ್ತು ಒಣಮೆಣಸು ಹಾಕಿ.",
      "ಹಾಲು ಅಣಬೆ ಮತ್ತು ಕಲ್ಲುಪ್ಪು ಸೇರಿಸಿ 8 ನಿಮಿಷ ಸಣ್ಣ ಉರಿಯಲ್ಲಿ ರೋಸ್ಟ್ ಮಾಡಿ.",
      "ಕೊನೆಯಲ್ಲಿ ಹುರಿದ ಬಿಳಿ ಎಳ್ಳು ಉದುರಿಸಿ ಘಮಘಮಿಸುವ ಮಡಕೆಯಲ್ಲೇ ಬಡಿಸಿ!"
    ],
    "tip_en": "Earthenware clay pots circulate heat evenly without drying out the succulent stems.",
    "tip_kn": "ಮಣ್ಣಿನ ಮಡಕೆ ಅಣಬೆಯ ಒಳಗಿನ ರಸವನ್ನು ಆವಿಯಾಗದಂತೆ ಮೃದುವಾಗಿರಿಸುತ್ತದೆ."
  },
  {
    "id": "milky_15",
    "type": "milky",
    "category": "curry",
    "img": "assets/recipe_korma.jpg",
    "title_en": "Creamy Methi Malai Milky Mushrooms",
    "title_kn": "ಮೇಥಿ ಮಲೈ ಹಾಲು ಅಣಬೆ ಗ್ರೇವಿ (Methi Malai)",
    "desc_en": "Fresh aromatic fenugreek leaves (methi) and tender milky mushroom cubes in a rich, mild spiced cashew and cream gravy.",
    "desc_kn": "ತಾಜಾ ಮೆಂತ್ಯೆ ಸೊಪ್ಪು ಮತ್ತು ಹಾಲು ಅಣಬೆಗಳನ್ನು ಗೋಡಂಬಿ ಹಾಗೂ ಹಾಲಿನ ಕೆನೆಯಲ್ಲಿ ಬೇಯಿಸಿದ ಹಿತವಾದ ಕಹಿ-ಸಿಹಿ ರುಚಿಯ ಶ್ರೀಮಂತ ಗ್ರೇವಿ.",
    "time_en": "24 Mins",
    "time_kn": "24 ನಿಮಿಷ",
    "calories": "235 kcal",
    "servings_en": "3-4 Servings",
    "servings_kn": "3-4 ಜನರಿಗೆ",
    "tag_en": "Milky • Winter Delicacy",
    "tag_kn": "ಹಾಲು ಅಣಬೆ • ಮೇಥಿ ಮಲೈ",
    "ingredients_en": [
      "200g Fresh Milky Mushrooms (cubed)",
      "1 cup Fresh Methi (Fenugreek) leaves chopped",
      "1/2 cup Cashew paste, 1 Onion pureed",
      "1/2 cup Milk + 2 tbsp Fresh Cream",
      "1 Green chilli, 1/2 tsp Garam masala, Salt & Sugar a pinch"
    ],
    "ingredients_kn": [
      "200 ಗ್ರಾಂ ಹಾಲು ಅಣಬೆ",
      "1 ಕಪ್ ತಾಜಾ ಮೆಂತ್ಯೆ ಸೊಪ್ಪು (ಹೆಚ್ಚಿದ್ದು)",
      "ಗೋಡಂಬಿ ಪೇಸ್ಟ್, ಈರುಳ್ಳಿ ಪೇಸ್ಟ್",
      "ಹಾಲು ಮತ್ತು ಫ್ರೆಶ್ ಕ್ರೀಮ್",
      "ಹಸಿಮೆಣಸು, ಗರಂ ಮಸಾಲ, ಉಪ್ಪು ಮತ್ತು ಚಿಟಿಕೆ ಸಕ್ಕರೆ"
    ],
    "instructions_en": [
      "Sauté chopped methi leaves in 1 tsp oil with a pinch of salt for 2 minutes to reduce bitterness.",
      "In another pan, sauté onion paste and cashew paste in butter on gentle heat.",
      "Add milky mushrooms, milk, garam masala, salt, and sautéed methi leaves; simmer for 6 minutes.",
      "Finish with fresh cream and serve warm with buttery Naan or Kulcha!"
    ],
    "instructions_kn": [
      "ಮೆಂತ್ಯೆ ಸೊಪ್ಪನ್ನು ಸ್ವಲ್ಪ ಎಣ್ಣೆ ಮತ್ತು ಉಪ್ಪು ಹಾಕಿ 2 ನಿಮಿಷ ಬಾಡಿಸಿಕೊಳ್ಳಿ.",
      "ಇನ್ನೊಂದು ಪಾತ್ರೆಯಲ್ಲಿ ಈರುಳ್ಳಿ ಪೇಸ್ಟ್ ಮತ್ತು ಗೋಡಂಬಿ ಪೇಸ್ಟ್ ಬೆಣ್ಣೆಯಲ್ಲಿ ಬೇಯಿಸಿ.",
      "ಹಾಲು ಅಣಬೆ, ಹಾಲು, ಮಸಾಲ ಮತ್ತು ಮೆಂತ್ಯೆ ಸೊಪ್ಪು ಸೇರಿಸಿ 6 ನಿಮಿಷ ಕುದಿಸಿ ಕ್ರೀಮ್ ಬೆರೆಸಿ ರೋಟಿ ಜೊತೆ ಸವಿಯಿರಿ!"
    ],
    "tip_en": "A pinch of sugar neutralizes any remaining bitterness from the fenugreek leaves.",
    "tip_kn": "ಚಿಟಿಕೆ ಸಕ್ಕರೆ ಸೇರಿಸಿದರೆ ಮೆಂತ್ಯೆಯ ಕಹಿ ಕಡಿಮೆಯಾಗಿ ರುಚಿ ಸಮೃದ್ಧವಾಗುತ್ತದೆ."
  },
  {
    "id": "milky_kebab_1",
    "type": "milky",
    "category": "kebab",
    "img": "assets/recipe_kebab.jpg",
    "title_en": "Smoky Charcoal Milky Mushroom Seekh Kebab",
    "title_kn": "ಸ್ಮೋಕಿ ಹಾಲು ಅಣಬೆ ಸೀಖ್ ಕಬಾಬ್ (Seekh Kebab)",
    "desc_en": "Minced meaty milky mushrooms blended with grated cottage paneer, crushed coriander seeds, mint, and green chillies skewered and flame-kissed.",
    "desc_kn": "ದಪ್ಪ ಹಾಲು ಅಣಬೆ, ಪನೀರ್, ಜಜ್ಜಿದ ಕೊತ್ತಂಬರಿ ಬೀಜ ಹಾಗೂ ಪುದೀನಾ ಮಸಾಲೆಯೊಂದಿಗೆ ಕಡ್ಡಿಗೆ ಸಿಕ್ಕಿಸಿ ಕೆಂಡ ಅಥವಾ ತವಾದಲ್ಲಿ ಸುಟ್ಟ ಗರಿಗರಿ ಸೀಖ್ ಕಬಾಬ್.",
    "time_en": "28 Mins",
    "time_kn": "28 ನಿಮಿಷ",
    "calories": "190 kcal",
    "servings_en": "4 Servings",
    "servings_kn": "4 ಜನರಿಗೆ",
    "tag_en": "Milky • Tandoori Kebab",
    "tag_kn": "ಹಾಲು ಅಣಬೆ • ಸೀಖ್ ಕಬಾಬ್",
    "ingredients_en": [
      "250g Fresh Milky Mushrooms (steamed & coarsely minced)",
      "100g Fresh soft Malai Paneer (grated)",
      "2 tbsp Roasted Gram flour (Besan) + 1 tbsp Breadcrumbs",
      "1 tbsp Coarsely crushed Coriander & Cumin seeds",
      "2 Green chillies & 1 tbsp Fresh Mint chopped",
      "1 tsp Chaat masala, 1/2 tsp Garam masala",
      "1 tbsp Melted butter for basting, Wooden or metal skewers"
    ],
    "ingredients_kn": [
      "250 ಗ್ರಾಂ ತಾಜಾ ಹಾಲು ಅಣಬೆ (ಆವಿಯಲ್ಲಿ ಬೇಯಿಸಿ ತರಿತರಿಯಾಗಿ ಹೆಚ್ಚಿದ್ದು)",
      "100 ಗ್ರಾಂ ತುರಿದ ಮಲೈ ಪನೀರ್",
      "2 ಚಮಚ ಹುರಿದ ಕಡಲೆಹಿಟ್ಟು + 1 ಚಮಚ ಬ್ರೆಡ್‌ಕ್ರಂಬ್ಸ್",
      "1 ಚಮಚ ಜಜ್ಜಿದ ಕೊತ್ತಂಬರಿ ಮತ್ತು ಜೀರಿಗೆ",
      "ಹಸಿಮೆಣಸು, ಪುದೀನಾ, ಚಾಟ್ ಮಸಾಲ",
      "ಬೆಣ್ಣೆ ಮತ್ತು ಕಬಾಬ್ ಕಡ್ಡಿಗಳು (skewers)"
    ],
    "instructions_en": [
      "Squeeze any excess liquid from coarsely minced milky mushrooms.",
      "Knead together with grated paneer, roasted besan, crushed spices, chopped mint, and green chillies into a pliable kebab dough.",
      "Mold the mixture around flat skewers into cylindrical seekh kebab shapes.",
      "Grill in an air-fryer at 200°C for 10 minutes or rotate over a hot grill pan, basting generously with melted butter.",
      "Gently slide off the skewers, dust with chaat masala, and serve with pickled lachha onions!"
    ],
    "instructions_kn": [
      "ಹೆಚ್ಚಿದ ಹಾಲು ಅಣಬೆಯಿಂದ ನೀರನ್ನು ಚೆನ್ನಾಗಿ ಹಿಂಡಿ ತೆಗೆಯಿರಿ.",
      "ಪನೀರ್, ಕಡಲೆಹಿಟ್ಟು, ಮಸಾಲೆಗಳು ಹಾಗೂ ಪುದೀನಾದೊಂದಿಗೆ ಚೆನ್ನಾಗಿ ನಾದಿಕೊಳ್ಳಿ.",
      "ಕಡ್ಡಿಗಳ (skewers) ಸುತ್ತಲೂ ಉದ್ದುದ್ದವಾಗಿ ಸಿಕ್ಕಿಸಿ ಸೀಖ್ ಕಬಾಬ್ ಆಕಾರ ನೀಡಿ.",
      "ತವಾ ಅಥವಾ ಗ್ರಿಲ್ ಮೇಲೆ ಬೆಣ್ಣೆ ಸವರಿ ಎಲ್ಲ ಬದಿ ಹೊಂಬಣ್ಣ ಮತ್ತು ಗರಿಗರಿಯಾಗುವವರೆಗೆ ಹುರಿಯಿರಿ.",
      "ಕಡ್ಡಿಯಿಂದ ನಿಧಾನವಾಗಿ ತೆಗೆದು ಚಾಟ್ ಮಸಾಲಾ ಉದುರಿಸಿ ಈರುಳ್ಳಿ ಜೊತೆ ಬಡಿಸಿ!"
    ],
    "tip_en": "Milky mushroom's dense fibrous stems mimic the bite and texture of minced meat better than any other vegetable.",
    "tip_kn": "ಹಾಲು ಅಣಬೆಯ ಗಟ್ಟಿ ಕಾಂಡವು ಚಿಕನ್ ಸೀಖ್ ಕಬಾಬ್ ನಂತೆಯೇ ಅದ್ಭುತ ಜ್ಯೂಸಿ ಟೆಕ್ಸ್ಚರ್ ನೀಡುತ್ತದೆ."
  },
  {
    "id": "milky_kebab_2",
    "type": "milky",
    "category": "kebab",
    "img": "assets/recipe_tikka.jpg",
    "title_en": "Peshawari Stuffed Milky Mushroom Caps Kebab",
    "title_kn": "ಪೆಶಾವರಿ ಸ್ಟಫ್ಡ್ ಹಾಲು ಅಣಬೆ ಕಬಾಬ್ (Stuffed Kebab)",
    "desc_en": "Large porcelain-white milky mushroom caps hollowed and stuffed with a rich filling of spiced paneer, roasted cashews, and raisins, roasted to golden perfection.",
    "desc_kn": "ದೊಡ್ಡ ಹಾಲು ಅಣಬೆಯ ಕಪ್‌ಗಳಲ್ಲಿ ಗೋಡಂಬಿ, ಒಣದ್ರಾಕ್ಷಿ ಹಾಗೂ ಪನೀರ್ ಮಸಾಲೆ ತುಂಬಿ ತಂದೂರ್ ಶೈಲಿಯಲ್ಲಿ ಬೇಯಿಸಿದ ಅತ್ಯಂತ ಶ್ರೀಮಂತ ಕಬಾಬ್.",
    "time_en": "30 Mins",
    "time_kn": "30 ನಿಮಿಷ",
    "calories": "225 kcal",
    "servings_en": "3 Servings",
    "servings_kn": "3 ಜನರಿಗೆ",
    "tag_en": "Milky • Peshawari Specialty",
    "tag_kn": "ಹಾಲು ಅಣಬೆ • ಸ್ಟಫ್ಡ್ ಕಬಾಬ್",
    "ingredients_en": [
      "12-14 Whole Large Milky Mushroom Caps (stems removed)",
      "100g Paneer (crumbled)",
      "2 tbsp Golden Raisins & chopped roasted Cashew nuts",
      "1 Green chilli finely minced, 1/2 tsp Cumin powder",
      "1/2 cup Thick Hung Curd + 1 tbsp Mustard oil (for outer coating)",
      "1 tsp Tandoori Masala & pinch of Saffron"
    ],
    "ingredients_kn": [
      "12-14 ದೊಡ್ಡ ಹಾಲು ಅಣಬೆ ಕಪ್‌ಗಳು (ಕಾಂಡ ಬೇರ್ಪಡಿಸಿದ್ದು)",
      "100 ಗ್ರಾಂ ತುರಿದ ಪನೀರ್",
      "ಗೋಡಂಬಿ ಚೂರುಗಳು ಮತ್ತು ಒಣದ್ರಾಕ್ಷಿ",
      "ಹಸಿಮೆಣಸು, ಜೀರಿಗೆ ಪುಡಿ, ಗಟ್ಟಿ ಮೊಸರು",
      "ಸಾಸಿವೆ ಎಣ್ಣೆ, ತಂದೂರಿ ಮಸಾಲಾ ಮತ್ತು ಕೇಸರಿ"
    ],
    "instructions_en": [
      "Chop the trimmed mushroom stems finely and sauté with paneer, cashews, raisins, green chilli, and spices to make the rich stuffing.",
      "Stuff each milky mushroom cap tightly with the royal paneer-nut filling.",
      "Coat the outside of the stuffed caps with spiced hung curd and mustard oil marinade.",
      "Bake in an oven at 200°C for 12-15 minutes or shallow grill in a lidded pan until caps are tender and juicy.",
      "Serve piping hot with mint dip and lemon wedges!"
    ],
    "instructions_kn": [
      "ಅಣಬೆಯ ಕಾಂಡಗಳನ್ನು ಸಣ್ಣಗೆ ಹೆಚ್ಚಿ ಪನೀರ್, ಗೋಡಂಬಿ, ದ್ರಾಕ್ಷಿ ಹಾಗೂ ಮಸಾಲೆ ಜೊತೆ ಹುರಿದು ಹೂರಣ ತಯಾರಿಸಿ.",
      "ಹಾಲು ಅಣಬೆಯ ಕಪ್‌ಗಳ ಒಳಗೆ ಈ ಹೂರಣವನ್ನು ಭದ್ರವಾಗಿ ತುಂಬಿ.",
      "ಹೊರಭಾಗಕ್ಕೆ ಮೊಸರು ಮತ್ತು ತಂದೂರಿ ಮಸಾಲೆ ಲೇಪಿಸಿ.",
      "ತವಾ ಮೇಲೆ ಮುಚ್ಚಳ ಮುಚ್ಚಿ ಅಥವಾ ಓವನ್‌ನಲ್ಲಿ 12-15 ನಿಮಿಷ ಬೇಯಿಸಿ ಬಿಸಿಬಿಸಿಯಾಗಿ ಸವಿಯಿರಿ!"
    ],
    "tip_en": "Milky mushroom caps hold their structural cup shape beautifully during baking without collapsing.",
    "tip_kn": "ಹಾಲು ಅಣಬೆ ಬೇಯಿಸಿದಾಗಲೂ ಬಟ್ಟಲಿನ ಆಕಾರವನ್ನು ಕಳೆದುಕೊಳ್ಳದೆ ರಸಭರಿತವಾಗಿರುತ್ತದೆ."
  },
  {
    "id": "milky_kebab_3",
    "type": "milky",
    "category": "kebab",
    "img": "assets/recipe_kebab.jpg",
    "title_en": "Mughlai Malai Milky Mushroom Boti Kebab",
    "title_kn": "ಮುಘಲೈ ಮಲೈ ಹಾಲು ಅಣಬೆ ಬೋಟಿ ಕಬಾಬ್ (Malai Boti)",
    "desc_en": "Thick, succulent cubes of firm milky mushrooms marinated in clotted malai, processed cheese, green cardamom, and white pepper, char-grilled on skewers.",
    "desc_kn": "ದಪ್ಪ ಹಾಲು ಅಣಬೆಯ ತುಂಡುಗಳನ್ನು ಹಾಲಿನ ಕೆನೆ (ಮಲೈ), ಚೀಸ್ ಮತ್ತು ಏಲಕ್ಕಿ ಮಸಾಲೆಯಲ್ಲಿ ನೆನೆಸಿ ತಂದೂರ್‌ನಲ್ಲಿ ಸುಟ್ಟ ರಾಯಲ್ ಬೋಟಿ ಕಬಾಬ್.",
    "time_en": "25 Mins",
    "time_kn": "25 ನಿಮಿಷ",
    "calories": "220 kcal",
    "servings_en": "3-4 Servings",
    "servings_kn": "3-4 ಜನರಿಗೆ",
    "tag_en": "Milky • Mughlai Malai Boti",
    "tag_kn": "ಹಾಲು ಅಣಬೆ • ಮಲೈ ಬೋಟಿ",
    "ingredients_en": [
      "300g Fresh Milky Mushrooms (cut into thick 1.5-inch boti cubes)",
      "1/4 cup Thick Malai (Fresh Cream) & 2 tbsp Grated Processed Cheese",
      "2 tbsp Hung Curd",
      "1 tsp Cardamom & Mace powder, 1/2 tsp White pepper",
      "1 tbsp Lemon juice & Melted butter for basting"
    ],
    "ingredients_kn": [
      "300 ಗ್ರಾಂ ತಾಜಾ ಹಾಲು ಅಣಬೆ (ದಪ್ಪ ತುಂಡುಗಳು)",
      "ಕಾಲು ಕಪ್ ಹಾಲಿನ ಕೆನೆ (ಮಲೈ) ಮತ್ತು ತುರಿದ ಚೀಸ್",
      "2 ಚಮಚ ಗಟ್ಟಿ ಮೊಸರು",
      "ಏಲಕ್ಕಿ ಪುಡಿ, ಜಾವಿತ್ರಿ ಮತ್ತು ಬಿಳಿ ಮೆಣಸು",
      "ನಿಂಬೆರಸ ಮತ್ತು ಬೆಣ್ಣೆ"
    ],
    "instructions_en": [
      "Blanch milky mushroom cubes in warm salt water for 2 minutes and pat completely dry.",
      "Whisk cream, grated cheese, hung curd, cardamom, and white pepper into a velvety white marinade.",
      "Coat milky cubes gently and refrigerate for 20 minutes.",
      "Thread onto metal or wooden skewers and roast on a hot grill pan, basting with butter until subtle golden blisters form.",
      "Serve warm with mint dip and tandoori parathas!"
    ],
    "instructions_kn": [
      "ಹಾಲು ಅಣಬೆ ತುಂಡುಗಳನ್ನು ಬಿಸಿ ನೀರಿನಲ್ಲಿ 2 ನಿಮಿಷ ಅದ್ದಿ ತೆಗೆದು ಒಣಗಿಸಿಕೊಳ್ಳಿ.",
      "ಕೆನೆ, ಚೀಸ್, ಮೊಸರು ಮತ್ತು ಏಲಕ್ಕಿ ಪುಡಿ ಸೇರಿಸಿ ಮಲೈ ಮಸಾಲೆ ತಯಾರಿಸಿ ಅಣಬೆಗೆ ಲೇಪಿಸಿ.",
      "ಕಡ್ಡಿಗಳಿಗೆ ಸಿಕ್ಕಿಸಿ ತವಾ ಅಥವಾ ಗ್ರಿಲ್ ಮೇಲೆ ಬೆಣ್ಣೆ ಸವರಿ ಹೊಂಬಣ್ಣ ಬರುವವರೆಗೆ ಹುರಿಯಿರಿ.",
      "ಪುದೀನಾ ಚಟ್ನಿಯೊಂದಿಗೆ ಬಿಸಿಯಾಗಿ ಸವಿಯಿರಿ!"
    ],
    "tip_en": "Milky mushroom cubes hold their firm boti chew without shrinking or releasing water.",
    "tip_kn": "ಹಾಲು ಅಣಬೆಯು ಗ್ರಿಲ್ ಮಾಡಿದಾಗಲೂ ನೀರು ಬಿಡದೆ ಚಿಕನ್ ಬೋಟಿಯಂತೆಯೇ ಗಟ್ಟಿಯಾಗಿರುತ್ತದೆ."
  },
  {
    "id": "milky_kebab_4",
    "type": "milky",
    "category": "kebab",
    "img": "assets/recipe_kebab.jpg",
    "title_en": "Awadhi Kakori Milky Mushroom Kebab",
    "title_kn": "ಅವಧಿ ಕಾಕೋರಿ ಹಾಲು ಅಣಬೆ ಕಬಾಬ್ (Kakori Kebab)",
    "desc_en": "The legendary melt-in-the-mouth Awadhi skewer kebab prepared with velvety minced milky mushrooms, roasted cashew paste, saffron, and aromatic kewra water.",
    "desc_kn": "ಬಾಯಲ್ಲಿಟ್ಟರೆ ಕರಗುವ ಅವಧಿ ಶೈಲಿಯ ರಾಯಲ್ ಕಾಕೋರಿ ಕಬಾಬ್. ಹಾಲು ಅಣಬೆ, ಗೋಡಂಬಿ ಪೇಸ್ಟ್ ಮತ್ತು ಕೇಸರಿ ಮಸಾಲೆಯ ಅದ್ಭುತ ಸಂಗಮ.",
    "time_en": "26 Mins",
    "time_kn": "26 ನಿಮಿಷ",
    "calories": "205 kcal",
    "servings_en": "4 Servings",
    "servings_kn": "4 ಜನರಿಗೆ",
    "tag_en": "Milky • Royal Kakori",
    "tag_kn": "ಹಾಲು ಅಣಬೆ • ಕಾಕೋರಿ ಕಬಾಬ್",
    "ingredients_en": [
      "300g Fresh Milky Mushrooms (steamed & ultra-finely minced)",
      "2 tbsp Cashew & Fried Onion paste",
      "2 tbsp Roasted Gram flour (Bhuna besan)",
      "1 tsp Royal Kakori spice mix (rose petals, mace, nutmeg, cloves)",
      "Few drops of pure Kewra water & saffron strands",
      "Desi cow ghee for basting skewers"
    ],
    "ingredients_kn": [
      "300 ಗ್ರಾಂ ಹಾಲು ಅಣಬೆ (ಆವಿಯಲ್ಲಿ ಬೇಯಿಸಿ ಅತಿ ನುಣ್ಣಗೆ ಹೆಚ್ಚಿದ್ದು)",
      "2 ಚಮಚ ಗೋಡಂಬಿ ಮತ್ತು ಹುರಿದ ಈರುಳ್ಳಿ ಪೇಸ್ಟ್",
      "2 ಚಮಚ ಹುರಿದ ಕಡಲೆಹಿಟ್ಟು",
      "ಕಾಕೋರಿ ಮಸಾಲ (ಗುಲಾಬಿ ದಳ, ಜಾವಿತ್ರಿ, ಜಾಯಿಕಾಯಿ, ಲವಂಗ)",
      "ಕೇವ್ರಾ ನೀರು ಮತ್ತು ಕೇಸರಿ",
      "ಶುದ್ಧ ತುಪ್ಪ"
    ],
    "instructions_en": [
      "Squeeze minced milky mushrooms completely dry in muslin cloth.",
      "Knead with cashew paste, roasted besan, royal spice blend, kewra water, and salt into silky dough.",
      "Mould the mixture along skewers into cylindrical sausage shapes.",
      "Grill on a charcoal barbecue or smoking cast-iron pan, basting generously with desi ghee.",
      "Gently slide off skewers onto warm ulta tawa paratha with mint relish!"
    ],
    "instructions_kn": [
      "ಅಣಬೆಯನ್ನು ಬಟ್ಟೆಯಲ್ಲಿ ಕಟ್ಟಿ ನೀರನ್ನು ಪೂರ್ತಿಯಾಗಿ ಹಿಂಡಿ ತೆಗೆಯಿರಿ.",
      "ಗೋಡಂಬಿ ಪೇಸ್ಟ್, ಕಡಲೆಹಿಟ್ಟು, ಮಸಾಲೆಗಳು ಹಾಗೂ ಕೇವ್ರಾ ನೀರು ಹಾಕಿ ನುಣ್ಣಗೆ ನಾದಿಕೊಳ್ಳಿ.",
      "ಕಡ್ಡಿಗಳ ಮೇಲೆ ಸಿಕ್ಕಿಸಿ ತುಪ್ಪ ಸವರಿ ಎಲ್ಲ ಬದಿ ಹೊಂಬಣ್ಣ ಬರುವಂತೆ ಹುರಿಯಿರಿ.",
      "ಪರೋಟಾ ಹಾಗೂ ಪುದೀನಾ ಚಟ್ನಿಯೊಂದಿಗೆ ಬಿಸಿಯಾಗಿ ಸವಿಯಿರಿ!"
    ],
    "tip_en": "The high dry-matter content of milky mushrooms replicates the melt-in-mouth texture of traditional Kakori.",
    "tip_kn": "ಹಾಲು ಅಣಬೆಯ ನೈಸರ್ಗಿಕ ಪ್ರೋಟೀನ್ ಸಾಂದ್ರತೆಯು ಕಬಾಬ್ ಬಾಯಲ್ಲಿಟ್ಟರೆ ಕರಗುವಂತೆ ಮಾಡುತ್ತದೆ."
  },
  {
    "id": "milky_kebab_5",
    "type": "milky",
    "category": "kebab",
    "img": "assets/recipe_kebab.jpg",
    "title_en": "Lucknowi Dahi ke Kebab with Milky Mushrooms",
    "title_kn": "ಲಕ್ನೋವಿ ದಹಿ ಅಣಬೆ ಕಬಾಬ್ (Dahi ke Kebab)",
    "desc_en": "Crispy on the outside, molten on the inside patties of hung curd, paneer, and finely minced milky mushrooms with roasted cumin and crushed black pepper.",
    "desc_kn": "ಹೊರಗೆ ಗರಿಗರಿ, ಒಳಗೆ ಮೃದು ಕ್ರೀಮಿ ಮೊಸರು ಮತ್ತು ಹಾಲು ಅಣಬೆಯ ಚೂರುಗಳು ಬೆರೆತ ಲಕ್ನೋವಿ ದಹಿ ಕಬಾಬ್.",
    "time_en": "20 Mins",
    "time_kn": "20 ನಿಮಿಷ",
    "calories": "190 kcal",
    "servings_en": "3 Servings",
    "servings_kn": "3 ಜನರಿಗೆ",
    "tag_en": "Milky • Dahi Kebab",
    "tag_kn": "ಹಾಲು ಅಣಬೆ • ದಹಿ ಕಬಾಬ್",
    "ingredients_en": [
      "200g Fresh Milky Mushrooms (finely chopped and sautéed dry)",
      "1 cup Thick Hung Curd (Chakka)",
      "1/2 cup Grated Paneer",
      "2 tbsp Roasted besan & 1 tbsp Breadcrumbs for crust",
      "1 tsp Roasted cumin, green chillies & fresh coriander",
      "Ghee for shallow frying"
    ],
    "ingredients_kn": [
      "200 ಗ್ರಾಂ ಹಾಲು ಅಣಬೆ (ಸಣ್ಣಗೆ ಹೆಚ್ಚಿ ಹುರಿದದ್ದು)",
      "1 ಕಪ್ ಗಟ್ಟಿ ಮೊಸರು (ಚಕ್ಕಾ)",
      "ಅರ್ಧ ಕಪ್ ತುರಿದ ಪನೀರ್",
      "2 ಚಮಚ ಹುರಿದ ಕಡಲೆಹಿಟ್ಟು",
      "ಜೀರಿಗೆ, ಹಸಿಮೆಣಸು ಮತ್ತು ಕೊತ್ತಂಬರಿ",
      "ಹುರಿಯಲು ತುಪ್ಪ"
    ],
    "instructions_en": [
      "Mix dry sautéed milky mushrooms with hung curd, paneer, roasted cumin, green chillies, and salt.",
      "Shape very gently into soft round patties and dust with breadcrumbs.",
      "Chill in refrigerator for 15 minutes to firm up.",
      "Shallow fry in hot ghee on medium heat for 2 minutes per side until golden crust forms.",
      "Serve warm; the inside stays luscious and molten!"
    ],
    "instructions_kn": [
      "ಹುರಿದ ಅಣಬೆಯನ್ನು ಗಟ್ಟಿ ಮೊಸರು, ಪನೀರ್ ಮತ್ತು ಮಸಾಲೆಗಳೊಂದಿಗೆ ನಿಧಾನವಾಗಿ ಬೆರೆಸಿ.",
      "ಚಪ್ಪಟೆ ಕಬಾಬ್ ಆಕಾರಕ್ಕೆ ತಟ್ಟಿ 15 ನಿಮಿಷ ಫ್ರಿಡ್ಜ್‌ನಲ್ಲಿ ಇರಿಸಿ.",
      "ಕಾದ ತುಪ್ಪದಲ್ಲಿ ಎರಡೂ ಬದಿ ಗರಿಗರಿಯಾಗುವವರೆಗೆ ಹುರಿದು ಬಿಸಿಯಾಗಿ ಬಡಿಸಿ!"
    ],
    "tip_en": "Use completely water-free hung curd so the kebab stays intact when hitting the hot pan.",
    "tip_kn": "ಮೊಸರಿನಲ್ಲಿ ನೀರಿನಾಂಶ ಇಲ್ಲದಂತೆ ಚೆನ್ನಾಗಿ ಬಸಿದು ಬಳಸಬೇಕು."
  },
  {
    "id": "milky_kebab_6",
    "type": "milky",
    "category": "kebab",
    "img": "assets/recipe_tikka.jpg",
    "title_en": "Banjara Spicy Milky Mushroom Skewer Kebab",
    "title_kn": "ಬಂಜಾರ ಮಸಾಲೆ ಹಾಲು ಅಣಬೆ ಕಬಾಬ್ (Banjara Kebab)",
    "desc_en": "Fiery tribal rustic kebab marinated in roasted sesame seeds, crushed coriander, dried red chillies, ginger-garlic paste, and mustard oil.",
    "desc_kn": "ಹುರಿದ ಎಳ್ಳು, ಒಣಮೆಣಸಿನಕಾಯಿ ಮತ್ತು ಸಾಸಿವೆ ಎಣ್ಣೆಯ ಗಾಢವಾದ ಮಸಾಲೆಯಲ್ಲಿ ಸುಟ್ಟ ಬಂಜಾರ ಶೈಲಿಯ ಹಾಲು ಅಣಬೆ ಕಬಾಬ್.",
    "time_en": "22 Mins",
    "time_kn": "22 ನಿಮಿಷ",
    "calories": "180 kcal",
    "servings_en": "3 Servings",
    "servings_kn": "3 ಜನರಿಗೆ",
    "tag_en": "Milky • Banjara Spicy",
    "tag_kn": "ಹಾಲು ಅಣಬೆ • ಬಂಜಾರ ಕಬಾಬ್",
    "ingredients_en": [
      "250g Fresh Milky Mushrooms (large bite-sized chunks)",
      "2 tbsp Roasted White Sesame seeds (ground coarse)",
      "1 tbsp Crushed whole Coriander & Red chilli flakes",
      "2 tbsp Mustard oil & 1/4 cup Curd",
      "1 tbsp Ginger-garlic paste & Rock salt"
    ],
    "ingredients_kn": [
      "250 ಗ್ರಾಂ ಹಾಲು ಅಣಬೆ (ದೊಡ್ಡ ಚೂರುಗಳು)",
      "2 ಚಮಚ ಹುರಿದ ಬಿಳಿ ಎಳ್ಳು",
      "ಜಜ್ಜಿದ ಕೊತ್ತಂಬರಿ ಮತ್ತು ಒಣಮೆಣಸಿನ ಚೂರುಗಳು",
      "ಸಾಸಿವೆ ಎಣ್ಣೆ ಮತ್ತು ಮೊಸರು",
      "ಶುಂಠಿ-ಬೆಳ್ಳುಳ್ಳಿ ಪೇಸ್ಟ್ ಮತ್ತು ಉಪ್ಪು"
    ],
    "instructions_en": [
      "Whisk yogurt with mustard oil, coarse sesame powder, crushed coriander, and fiery chilli flakes.",
      "Toss milky mushroom chunks thoroughly and rest for 15 minutes.",
      "Thread onto skewers alternating with capsicum and onion wedges.",
      "Grill on high heat until the sesame crust is toasted and mushroom edges are charred.",
      "Sprinkle lemon juice and enjoy with lachha onions!"
    ],
    "instructions_kn": [
      "ಮೊಸರಿಗೆ ಸಾಸಿವೆ ಎಣ್ಣೆ, ಎಳ್ಳಿನ ಪುಡಿ, ಕೊತ್ತಂಬರಿ ಮತ್ತು ಖಾರದ ಚೂರುಗಳನ್ನು ಬೆರೆಸಿ.",
      "ಅಣಬೆ ಚೂರುಗಳಿಗೆ ಲೇಪಿಸಿ ಕ್ಯಾಪ್ಸಿಕಂ ಜೊತೆ ಕಡ್ಡಿಗೆ ಸಿಕ್ಕಿಸಿ.",
      "ತೀಕ್ಷ್ಣ ಉರಿಯಲ್ಲಿ ಎಳ್ಳು ಹೊಂಬಣ್ಣ ಬರುವವರೆಗೆ ಹುರಿದು ಬಡಿಸಿ!"
    ],
    "tip_en": "Toasted sesame seeds give an unforgettable rustic nutty crunch to the crust.",
    "tip_kn": "ಹುರಿದ ಎಳ್ಳು ಕಬಾಬ್‌ಗೆ ಅದ್ಭುತ ಗರಿಗರಿತನ ಮತ್ತು ಪರಿಮಳವನ್ನು ನೀಡುತ್ತದೆ."
  },
  {
    "id": "milky_kebab_7",
    "type": "milky",
    "category": "kebab",
    "img": "assets/recipe_kebab.jpg",
    "title_en": "Pahadi Herb Milky Mushroom Kebab",
    "title_kn": "ಹಿಮಾಲಯನ್ ಪಹಾಡಿ ಹಾಲು ಅಣಬೆ ಕಬಾಬ್ (Pahadi Kebab)",
    "desc_en": "Himalayan hill-station style kebab marinated in wild green mint, mountain coriander, green garlic, crushed cumin, and Himalayan pink rock salt.",
    "desc_kn": "ಕಾಡು ಪುದೀನಾ, ಕೊತ್ತಂಬರಿ, ಹಸಿರು ಬೆಳ್ಳುಳ್ಳಿ ಹಾಗೂ ಹಿಮಾಲಯನ್ ಉಪ್ಪಿನ ಹಸಿರು ಮಸಾಲೆಯಲ್ಲಿ ಸುಟ್ಟ ಪಹಾಡಿ ಕಬಾಬ್.",
    "time_en": "20 Mins",
    "time_kn": "20 ನಿಮಿಷ",
    "calories": "165 kcal",
    "servings_en": "3 Servings",
    "servings_kn": "3 ಜನರಿಗೆ",
    "tag_en": "Milky • Pahadi Mountain",
    "tag_kn": "ಹಾಲು ಅಣಬೆ • ಪಹಾಡಿ ಕಬಾಬ್",
    "ingredients_en": [
      "250g Fresh Milky Mushrooms (cut into thick chunks)",
      "Pahadi paste: 1 cup Fresh Mint, 1 cup Coriander, 4 Green chillies, 4 Garlic cloves, 1-inch Ginger",
      "2 tbsp Thick hung curd",
      "1/2 tsp Himalayan pink rock salt & roasted cumin",
      "Pure cow butter for grilling"
    ],
    "ingredients_kn": [
      "250 ಗ್ರಾಂ ಹಾಲು ಅಣಬೆ",
      "ಪಹಾಡಿ ಪೇಸ್ಟ್: ಪುದೀನಾ, ಕೊತ್ತಂಬರಿ, ಹಸಿಮೆಣಸು, ಬೆಳ್ಳುಳ್ಳಿ, ಶುಂಠಿ",
      "2 ಚಮಚ ಗಟ್ಟಿ ಮೊಸರು",
      "ಹಿಮಾಲಯನ್ ಉಪ್ಪು ಮತ್ತು ಜೀರಿಗೆ",
      "ಬೆಣ್ಣೆ"
    ],
    "instructions_en": [
      "Grind fresh mint, coriander, and green chillies into a dense emerald paste.",
      "Fold into hung curd with Himalayan pink salt and cumin.",
      "Marinate thick milky mushroom chunks for 20 minutes.",
      "Grill over hot tawa or tandoor with butter until caramelized.",
      "Serve piping hot with fresh lemon and raw onion rings!"
    ],
    "instructions_kn": [
      "ಪುದೀನಾ, ಕೊತ್ತಂಬರಿ ಮತ್ತು ಹಸಿಮೆಣಸನ್ನು ರುಬ್ಬಿ ಹಸಿರು ಪೇಸ್ಟ್ ಮಾಡಿ.",
      "ಮೊಸರು ಮತ್ತು ಉಪ್ಪಿನೊಂದಿಗೆ ಬೆರೆಸಿ ಅಣಬೆಗೆ ಲೇಪಿಸಿ 20 ನಿಮಿಷ ನೆನೆಯಲು ಬಿಡಿ.",
      "ಕಾದ ತವಾದಲ್ಲಿ ಬೆಣ್ಣೆ ಹಾಕಿ ಎರಡೂ ಬದಿ ಗರಿಗರಿಯಾಗಿ ಹುರಿದು ಬಡಿಸಿ!"
    ],
    "tip_en": "Milky mushrooms soak in the herbal green juices deep into their white porous stem flesh.",
    "tip_kn": "ಹಾಲು ಅಣಬೆಯ ದಪ್ಪ ಕಾಂಡವು ಹಸಿರು ಮೂಲಿಕೆಗಳ ಸಾರವನ್ನು ಆಳವಾಗಿ ಹೀರಿಕೊಳ್ಳುತ್ತದೆ."
  },
  {
    "id": "milky_kebab_8",
    "type": "milky",
    "category": "kebab",
    "img": "assets/recipe_kebab.jpg",
    "title_en": "Hyderabadi Shikampuri Milky Mushroom Kebab",
    "title_kn": "ಹೈದರಾಬಾದಿ ಶಿಕಂಪುರಿ ಹಾಲು ಅಣಬೆ ಕಬಾಬ್ (Shikampuri Kebab)",
    "desc_en": "Royal Nizami delicacy featuring minced milky mushroom patties stuffed with a secret core of spiced hung yogurt, finely diced green chillies, and fresh mint.",
    "desc_kn": "ಹೊರಭಾಗದಲ್ಲಿ ಮೃದು ಅಣಬೆಯ ಕವಚ, ಒಳಭಾಗದಲ್ಲಿ ಮಸಾಲೆ ಮೊಸರಿನ ಹೂರಣ ತುಂಬಿ ತುಪ್ಪದಲ್ಲಿ ಸುಟ್ಟ ನವಾಬಿ ಶಿಕಂಪುರಿ ಕಬಾಬ್.",
    "time_en": "28 Mins",
    "time_kn": "28 ನಿಮಿಷ",
    "calories": "215 kcal",
    "servings_en": "4 Servings",
    "servings_kn": "4 ಜನರಿಗೆ",
    "tag_en": "Milky • Hyderabadi Nizami",
    "tag_kn": "ಹಾಲು ಅಣಬೆ • ಶಿಕಂಪುರಿ",
    "ingredients_en": [
      "300g Fresh Milky Mushrooms (steamed and minced)",
      "2 tbsp Roasted besan & 1 tsp Shahi garam masala",
      "Core stuffing: 1/4 cup Thick hung curd, 1 green chilli minced, 1 tbsp chopped mint, pinch of chaat masala",
      "Pure Desi Cow Ghee for shallow frying"
    ],
    "ingredients_kn": [
      "300 ಗ್ರಾಂ ಹಾಲು ಅಣಬೆ (ಆವಿಯಲ್ಲಿ ಬೇಯಿಸಿ ಹೆಚ್ಚಿದ್ದು)",
      "2 ಚಮಚ ಹುರಿದ ಕಡಲೆಹಿಟ್ಟು ಮತ್ತು ಶಾಹಿ ಮಸಾಲಾ",
      "ಒಳ ಹೂರಣ: ಕಾಲು ಕಪ್ ಗಟ್ಟಿ ಮೊಸರು, ಹಸಿಮೆಣಸು, ಪುದೀನಾ, ಚಾಟ್ ಮಸಾಲಾ",
      "ಶುದ್ಧ ಹಸುವಿನ ತುಪ್ಪ"
    ],
    "instructions_en": [
      "Knead minced milky mushrooms with roasted besan, garam masala, and salt into outer dough.",
      "Flatten a portion in your palm, place 1 tsp of the spiced hung curd core in the center, and seal into a patty.",
      "Chill patties for 15 minutes to secure the liquid center.",
      "Shallow fry gently in ghee until dark golden and crispy on both surfaces.",
      "When bitten into, the tangy spiced yogurt center oozes delightfully!"
    ],
    "instructions_kn": [
      "ಅಣಬೆ, ಕಡಲೆಹಿಟ್ಟು, ಮಸಾಲೆ ಹಾಕಿ ಹೊರಕವಚದ ಹಿಟ್ಟು ತಯಾರಿಸಿ.",
      "ಅಂಗೈಯಲ್ಲಿ ತಟ್ಟಿ ಮಧ್ಯದಲ್ಲಿ ಮೊಸರಿನ ಹೂರಣವಿಟ್ಟು ಮುಚ್ಚಿ ಕಬಾಬ್ ಆಕಾರ ನೀಡಿ.",
      "ಫ್ರಿಡ್ಜ್‌ನಲ್ಲಿ 15 ನಿಮಿಷ ಇರಿಸಿ, ಕಾದ ತುಪ್ಪದಲ್ಲಿ ಎರಡೂ ಬದಿ ಹುರಿಯಿರಿ.",
      "ತಿನ್ನುವಾಗ ಒಳಗಿನಿಂದ ಕ್ರೀಮಿ ಮೊಸರಿನ ಹೂರಣ ಬಾಯಲ್ಲಿ ಕರಗುತ್ತದೆ!"
    ],
    "tip_en": "Seal edges tightly so the rich yogurt stuffing does not leak into the hot ghee.",
    "tip_kn": "ಅಂಚುಗಳನ್ನು ಚೆನ್ನಾಗಿ ಮುಚ್ಚಿದರೆ ಒಳಗಿನ ಮೊಸರಿನ ಹೂರಣ ಆಚೆ ಬರುವುದಿಲ್ಲ."
  },
  {
    "id": "milky_16",
    "type": "milky",
    "category": "coastal",
    "img": "assets/recipe_milky_pepper.jpg",
    "title_en": "Mangalore Neer Dosa Milky Mushroom Gassi",
    "title_kn": "ಮಂಗಳೂರು ಹಾಲು ಅಣಬೆ ಗಸ್ಸಿ (Mangalore Gassi)",
    "desc_en": "Traditional coastal Tuluva curry featuring thick succulent milky mushroom chunks cooked in stone-ground roasted coconut and Byadgi red chilli gravy.",
    "desc_kn": "ತೆಂಗಿನಹಾಲು, ಹುರಿದ ಬ್ಯಾಡಗಿ ಮೆಣಸಿನಕಾಯಿ ಹಾಗೂ ಹಸಿ ಅಣಬೆಯ ಅದ್ಭುತ ಮಂಗಳೂರು ಶೈಲಿಯ ಗಸ್ಸಿ.",
    "time_en": "28 Mins",
    "time_kn": "28 ನಿಮಿಷ",
    "calories": "210 kcal",
    "servings_en": "4 Servings",
    "servings_kn": "4 ಜನರಿಗೆ",
    "tag_en": "Milky • Mangalore Gassi",
    "tag_kn": "ಹಾಲು ಅಣಬೆ • ಮಂಗಳೂರು ಗಸ್ಸಿ",
    "ingredients_en": [
      "300g Fresh Milky Mushrooms (cut into 1-inch discs)",
      "Gassi paste: 1 cup Fresh grated coconut, 8 Byadgi chillies, 1 tbsp Coriander, 1/2 tsp Cumin, 1/4 tsp Fenugreek, marble tamarind",
      "1 cup Thick Coconut Milk",
      "Curry leaves and coconut oil for tempering"
    ],
    "ingredients_kn": [
      "300 ಗ್ರಾಂ ಹಾಲು ಅಣಬೆ (ದಪ್ಪ ತುಂಡುಗಳು)",
      "ಗಸ್ಸಿ ಮಸಾಲ: ತೆಂಗಿನತುರಿ, ಬ್ಯಾಡಗಿ ಮೆಣಸು, ಕೊತ್ತಂಬರಿ, ಜೀರಿಗೆ, ಮೆಂತ್ಯ, ಹುಣಸೆಹಣ್ಣು",
      "1 ಕಪ್ ದಪ್ಪ ತೆಂಗಿನಹಾಲು",
      "ಕರಿಬೇವು ಮತ್ತು ತೆಂಗಿನ ಎಣ್ಣೆ"
    ],
    "instructions_en": [
      "Roast Byadgi chillies and whole spices; grind with grated coconut and tamarind to a velvety smooth paste.",
      "Bring the paste to boil with 1 cup water, add milky mushroom discs and salt.",
      "Simmer for 12 minutes until mushrooms become juicy and tender.",
      "Stir in thick coconut milk and remove from heat.",
      "Temper with coconut oil and curry leaves. Serve with delicate Neer Dosa!"
    ],
    "instructions_kn": [
      "ಮಸಾಲೆಗಳನ್ನು ಹುರಿದು ತೆಂಗಿನತುರಿ ಜೊತೆ ನುಣ್ಣಗೆ ರುಬ್ಬಿಕೊಳ್ಳಿ.",
      "ಮಸಾಲೆ ನೀರಿಗೆ ಅಣಬೆ ತುಂಡುಗಳನ್ನು ಹಾಕಿ 12 ನಿಮಿಷ ಚೆನ್ನಾಗಿ ಕುದಿಸಿ.",
      "ಕೊನೆಯಲ್ಲಿ ದಪ್ಪ ತೆಂಗಿನಹಾಲು ಮತ್ತು ಕರಿಬೇವು ಒಗ್ಗರಣೆ ಹಾಕಿ ನೀರುದೋಸೆ ಜೊತೆ ಸವಿಯಿರಿ!"
    ],
    "tip_en": "Do not boil after adding thick coconut milk to prevent the gravy from splitting.",
    "tip_kn": "ಕೊನೆಯಲ್ಲಿ ದಪ್ಪ ತೆಂಗಿನಹಾಲು ಹಾಕಿದ ಮೇಲೆ ಹೆಚ್ಚು ಕುದಿಸಬಾರದು."
  },
  {
    "id": "milky_17",
    "type": "milky",
    "category": "coastal",
    "img": "assets/recipe_sambar.jpg",
    "title_en": "Udupi Ashta Matha Milky Mushroom Sambar",
    "title_kn": "ಉಡುಪಿ ಹಾಲು ಅಣಬೆ ಸಾಂಬಾರ್ (Udupi Milky Sambar)",
    "desc_en": "Temple style sattvic sambar (no onion, no garlic) with yellow toor dal, fresh coconut masala, jaggery, hing, and juicy milky mushroom discs.",
    "desc_kn": "ಈರುಳ್ಳಿ-ಬೆಳ್ಳುಳ್ಳಿ ರಹಿತ ಉಡುಪಿ ಮಠದ ಶೈಲಿಯ ಶುದ್ಧ ಸಾತ್ವಿಕ ಬೇಳೆ ಸಾಂಬಾರ್.",
    "time_en": "24 Mins",
    "time_kn": "24 ನಿಮಿಷ",
    "calories": "155 kcal",
    "servings_en": "4 Servings",
    "servings_kn": "4 ಜನರಿಗೆ",
    "tag_en": "Milky • Udupi Sattvic",
    "tag_kn": "ಹಾಲು ಅಣಬೆ • ಉಡುಪಿ ಸಾಂಬಾರ್",
    "ingredients_en": [
      "250g Fresh Milky Mushrooms (thick cubes)",
      "1/2 cup Toor Dal (cooked soft)",
      "2 tbsp Udupi Sambar powder & 1/2 cup Fresh coconut paste",
      "1 tbsp Tamarind & 1 tsp Organic Jaggery",
      "Ghee, mustard seeds, curry leaves, and asafoetida (hing)"
    ],
    "ingredients_kn": [
      "250 ಗ್ರಾಂ ಹಾಲು ಅಣಬೆ",
      "ಅರ್ಧ ಕಪ್ ಬೆಂದ ತೊಗರಿಬೇಳೆ",
      "ಉಡುಪಿ ಸಾಂಬಾರ್ ಪುಡಿ ಮತ್ತು ಕಾಯಿತುರಿ ಪೇಸ್ಟ್",
      "ಹುಣಸೆರಸ ಮತ್ತು ಸಾವಯವ ಬೆಲ್ಲ",
      "ತುಪ್ಪ, ಸಾಸಿವೆ, ಕರಿಬೇವು, ಇಂಗು"
    ],
    "instructions_en": [
      "Boil milky mushroom cubes in tamarind water with turmeric and sambar powder for 6 minutes.",
      "Add cooked mashed toor dal, coconut paste, jaggery, and salt.",
      "Bring to a fragrant rolling boil for 5 minutes.",
      "Temper generously with pure cow ghee, mustard seeds, hing, and curry leaves.",
      "Serve hot with steamed rice or soft idlis!"
    ],
    "instructions_kn": [
      "ಹುಣಸೆ ನೀರಿನಲ್ಲಿ ಅರಿಶಿನ, ಸಾಂಬಾರ್ ಪುಡಿ ಹಾಕಿ ಅಣಬೆಯನ್ನು 6 ನಿಮಿಷ ಬೇಯಿಸಿ.",
      "ಬೆಂದ ಬೇಳೆ, ತೆಂಗಿನ ಪೇಸ್ಟ್, ಬೆಲ್ಲ ಮತ್ತು ಉಪ್ಪು ಸೇರಿಸಿ ಚೆನ್ನಾಗಿ ಕುದಿಸಿ.",
      "ತುಪ್ಪ ಮತ್ತು ಇಂಗಿನ ಒಗ್ಗರಣೆ ನೀಡಿ ಬಿಸಿ ಅನ್ನ ಅಥವಾ ಇಡ್ಲಿ ಜೊತೆ ಸವಿಯಿರಿ!"
    ],
    "tip_en": "Milky mushrooms absorb the sweet-tangy temple sambar broth deeply into their core.",
    "tip_kn": "ಹಾಲು ಅಣಬೆಯು ಸಾಂಬಾರಿನ ರುಚಿಯನ್ನು ತನ್ನ ಒಳಭಾಗದವರೆಗೂ ಸಂಪೂರ್ಣ ಹೀರಿಕೊಳ್ಳುತ್ತದೆ."
  },
  {
    "id": "milky_18",
    "type": "milky",
    "category": "coastal",
    "img": "assets/recipe_milky_pepper.jpg",
    "title_en": "Coorg Black Pepper Milky Mushroom Fry",
    "title_kn": "ಕೊಡಗು ಕಾಳುಮೆಣಸು ಹಾಲು ಅಣಬೆ ಫ್ರೈ (Coorg Pepper Fry)",
    "desc_en": "Kodagu estate style pan-roasted milky mushroom wedges cooked with freshly cracked tellicherry black pepper, curry leaves, shallots, and kachampuli vinegar.",
    "desc_kn": "ಕೊಡಗಿನ ಪ್ರಸಿದ್ಧ ಕಚಂಪುಳಿ, ಘಾಟು ಕಾಳುಮೆಣಸು ಮತ್ತು ಕರಿಬೇವು ಮಸಾಲೆಯಲ್ಲಿ ಹುರಿದ ಅಣಬೆ ಫ್ರೈ.",
    "time_en": "20 Mins",
    "time_kn": "20 ನಿಮಿಷ",
    "calories": "170 kcal",
    "servings_en": "3-4 Servings",
    "servings_kn": "3-4 ಜನರಿಗೆ",
    "tag_en": "Milky • Coorg Estate",
    "tag_kn": "ಹಾಲು ಅಣಬೆ • ಕೊಡಗು ಫ್ರೈ",
    "ingredients_en": [
      "250g Fresh Milky Mushrooms (thick wedges)",
      "1.5 tbsp Coarsely cracked Tellicherry black pepper",
      "1 tbsp Kachampuli fruit vinegar (or dark tamarind extract)",
      "10 Shallots & 2 sprigs Fresh curry leaves",
      "2 tbsp Coconut oil or ghee"
    ],
    "ingredients_kn": [
      "250 ಗ್ರಾಂ ಹಾಲು ಅಣಬೆ",
      "ಒಂದೂವರೆ ಚಮಚ ಕೊಡಗಿನ ಕಾಳುಮೆಣಸಿನ ಪುಡಿ",
      "1 ಚಮಚ ಕಚಂಪುಳಿ ವಿನೆಗರ್ (ಅಥವಾ ಹುಣಸೆರಸ)",
      "10 ಸಾಂಬಾರ್ ಈರುಳ್ಳಿ ಮತ್ತು ಕರಿಬೇವು",
      "ತೆಂಗಿನ ಎಣ್ಣೆ ಅಥವಾ ತುಪ್ಪ"
    ],
    "instructions_en": [
      "Heat coconut oil, sauté shallots and curry leaves until browned.",
      "Add milky mushroom wedges and sear on medium-high heat for 6 minutes.",
      "Add cracked black pepper, kachampuli vinegar, turmeric, and salt.",
      "Toss vigorously until the dark spicy reduction coats every mushroom slice.",
      "Serve hot with akki rotti or steamed rice!"
    ],
    "instructions_kn": [
      "ಎಣ್ಣೆಯಲ್ಲಿ ಈರುಳ್ಳಿ, ಕರಿಬೇವು ಹುರಿದು ಅಣಬೆ ಚೂರುಗಳನ್ನು ಹಾಕಿ 6 ನಿಮಿಷ ಬೇಯಿಸಿ.",
      "ಕಾಳುಮೆಣಸು, ಕಚಂಪುಳಿ ಮತ್ತು ಉಪ್ಪು ಸೇರಿಸಿ ತೇವಾಂಶ ಇಂಗುವವರೆಗೆ ಚೆನ್ನಾಗಿ ಕೈಯಾಡಿಸಿ.",
      "ಬಿಸಿಬಿಸಿ ಅಕ್ಕಿರೊಟ್ಟಿಯೊಂದಿಗೆ ಸವಿಯಿರಿ!"
    ],
    "tip_en": "Kachampuli vinegar provides the signature sour tartness unique to Coorg cuisine.",
    "tip_kn": "ಕಚಂಪುಳಿ ಸೇರಿಸುವುದರಿಂದ ಕೊಡಗಿನ ಅಪ್ಪಟ ಹುಳಿ-ಖಾರದ ಸ್ವಾದ ಸಿಗುತ್ತದೆ."
  },
  {
    "id": "milky_19",
    "type": "milky",
    "category": "curry",
    "img": "assets/recipe_korma.jpg",
    "title_en": "Shahi Kaju Milky Mushroom Kurma",
    "title_kn": "ಶಾಹಿ ಕಾಜು ಹಾಲು ಅಣಬೆ ಕುರ್ಮಾ (Shahi Korma)",
    "desc_en": "Rich Mughlai banquet kurma featuring whole roasted cashew nuts and thick milky mushroom chunks simmered in a creamy poppy seed and almond gravy.",
    "desc_kn": "ಹುರಿದ ಗೋಡಂಬಿ, ಬಾದಾಮಿ, ಗಸಗಸೆ ಮತ್ತು ಹಾಲಿನ ಕೆನೆಯ ಶ್ರೀಮಂತ ರಾಯಲ್ ಕುರ್ಮಾ ಗ್ರೇವಿ.",
    "time_en": "28 Mins",
    "time_kn": "28 ನಿಮಿಷ",
    "calories": "280 kcal",
    "servings_en": "4 Servings",
    "servings_kn": "4 ಜನರಿಗೆ",
    "tag_en": "Milky • Shahi Kurma",
    "tag_kn": "ಹಾಲು ಅಣಬೆ • ಕಾಜು ಕುರ್ಮಾ",
    "ingredients_en": [
      "300g Fresh Milky Mushrooms (cut into bite discs)",
      "1/2 cup Roasted whole Cashew nuts",
      "Kurma paste: 10 Almonds, 1 tbsp Poppy seeds, 2 green chillies, 1-inch ginger, 4 garlic cloves",
      "1/2 cup Fresh Cream & 2 tbsp Ghee",
      "Shahi garam masala & Cardamom"
    ],
    "ingredients_kn": [
      "300 ಗ್ರಾಂ ಹಾಲು ಅಣಬೆ",
      "ಅರ್ಧ ಕಪ್ ಹುರಿದ ಗೋಡಂಬಿ",
      "ಕುರ್ಮಾ ಪೇಸ್ಟ್: ಬಾದಾಮಿ, ಗಸಗಸೆ, ಹಸಿಮೆಣಸು, ಶುಂಠಿ-ಬೆಳ್ಳುಳ್ಳಿ",
      "ಅರ್ಧ ಕಪ್ ತಾಜಾ ಕೆನೆ (ಕ್ರೀಮ್) ಮತ್ತು ತುಪ್ಪ",
      "ಶಾಹಿ ಗರಂ ಮಸಾಲಾ ಮತ್ತು ಏಲಕ್ಕಿ"
    ],
    "instructions_en": [
      "Blanch milky mushrooms in warm water; sauté lightly in 1 tbsp ghee with whole cashews.",
      "Heat remaining ghee, add cardamom and kurma paste; cook on low heat till fragrant.",
      "Add water to adjust gravy consistency, bring to boil, and add milky mushrooms and roasted cashews.",
      "Simmer for 8 minutes; finish with fresh cream and a pinch of shahi garam masala.",
      "Serve warm with rumali roti or jeera pulao!"
    ],
    "instructions_kn": [
      "ಅಣಬೆ ಮತ್ತು ಗೋಡಂಬಿಯನ್ನು ತುಪ್ಪದಲ್ಲಿ ಲಘುವಾಗಿ ಹುರಿದಿಟ್ಟುಕೊಳ್ಳಿ.",
      "ತುಪ್ಪದಲ್ಲಿ ಮಸಾಲೆ ಪೇಸ್ಟ್ ಹಾಕಿ ಘಮ ಬರುವವರೆಗೆ ಸಣ್ಣ ಉರಿಯಲ್ಲಿ ಹುರಿಯಿರಿ.",
      "ನೀರು ಸೇರಿಸಿ ಕುದಿಸಿ, ಅಣಬೆ ಮತ್ತು ಗೋಡಂಬಿ ಹಾಕಿ 8 ನಿಮಿಷ ಬೇಯಿಸಿ.",
      "ಕೊನೆಯಲ್ಲಿ ಕೆನೆ ಸೇರಿಸಿ ರೋಟಿ ಅಥವಾ ಜೀರಾ ರೈಸ್ ಜೊತೆ ಬಡಿಸಿ!"
    ],
    "tip_en": "Milky mushrooms and cashews have matching density, creating a harmonious textural experience.",
    "tip_kn": "ಹಾಲು ಅಣಬೆ ಮತ್ತು ಗೋಡಂಬಿಯ ಸಂಯೋಜನೆಯು ಅತ್ಯಂತ ಶ್ರೀಮಂತ ಟೆಕ್ಸ್ಚರ್ ನೀಡುತ್ತದೆ."
  },
  {
    "id": "milky_20",
    "type": "milky",
    "category": "curry",
    "img": "assets/recipe_milky_pepper.jpg",
    "title_en": "Milky Mushroom Kadai Masala",
    "title_kn": "ಹಾಲು ಅಣಬೆ ಕಡಾಯಿ ಮಸಾಲಾ (Kadai Mushroom)",
    "desc_en": "North Indian wok specialty with crisp capsicum, diced onions, and thick milky mushroom chunks simmered in a stone-ground coriander-fennel kadai gravy.",
    "desc_kn": "ಕಡಾಯಿ ಮಸಾಲ (ಜಜ್ಜಿದ ಕೊತ್ತಂಬರಿ, ಸೋಂಪು), ಕ್ಯಾಪ್ಸಿಕಂ ಮತ್ತು ಈರುಳ್ಳಿಯೊಂದಿಗೆ ತಯಾರಿಸಿದ ರೆಸ್ಟೋರೆಂಟ್ ಶೈಲಿಯ ಕಡಾಯಿ ಅಣಬೆ ಕರಿ.",
    "time_en": "22 Mins",
    "time_kn": "22 ನಿಮಿಷ",
    "calories": "190 kcal",
    "servings_en": "3-4 Servings",
    "servings_kn": "3-4 ಜನರಿಗೆ",
    "tag_en": "Milky • Kadai Special",
    "tag_kn": "ಹಾಲು ಅಣಬೆ • ಕಡಾಯಿ ಮಸಾಲಾ",
    "ingredients_en": [
      "250g Fresh Milky Mushrooms (1-inch discs)",
      "1 Green Bell Pepper (capsicum) diced & 1 Onion diced",
      "Kadai spice: 1.5 tbsp Coriander seeds, 1 tsp Fennel, 1 tsp Cumin, 3 dried red chillies (dry roasted & coarse ground)",
      "3 ripe Tomatoes pureed",
      "1 tbsp Ginger juliennes & Kasuri methi"
    ],
    "ingredients_kn": [
      "250 ಗ್ರಾಂ ಹಾಲು ಅಣಬೆ",
      "ಕ್ಯಾಪ್ಸಿಕಂ ಮತ್ತು ಈರುಳ್ಳಿ ಚೂರುಗಳು",
      "ಕಡಾಯಿ ಮಸಾಲ: ಕೊತ್ತಂಬರಿ, ಸೋಂಪು, ಜೀರಿಗೆ, ಒಣಮೆಣಸು (ಹುರಿದು ಜಜ್ಜಿದ್ದು)",
      "ಟೊಮೆಟೊ ಪ್ಯೂರಿ",
      "ಶುಂಠಿ ಚೂರುಗಳು ಮತ್ತು ಕಸ್ತೂರಿ ಮೇಥಿ"
    ],
    "instructions_en": [
      "In a hot wok (kadai), toss capsicum and diced onions in oil on high flame for 2 mins; set aside crunchy.",
      "In the same kadai, sauté tomato puree with ginger juliennes and freshly ground kadai masala.",
      "Add milky mushrooms and 1/2 cup water; cover and cook for 7 minutes.",
      "Fold in the crunchy capsicum and onions; sprinkle crushed kasuri methi.",
      "Serve piping hot with tandoori roti or butter naan!"
    ],
    "instructions_kn": [
      "ಕಡಾಯಿಯಲ್ಲಿ ಕ್ಯಾಪ್ಸಿಕಂ ಮತ್ತು ಈರುಳ್ಳಿಯನ್ನು ಗರಿಗರಿಯಾಗಿ ಹುರಿದು ತೆಗೆಯಿರಿ.",
      "ಅದೇ ಬಾಣಲೆಯಲ್ಲಿ ಟೊಮೆಟೊ ಪ್ಯೂರಿ ಮತ್ತು ಕಡಾಯಿ ಮಸಾಲೆ ಹಾಕಿ ಹುರಿಯಿರಿ.",
      "ಅಣಬೆ ಸೇರಿಸಿ 7 ನಿಮಿಷ ಬೇಯಿಸಿ, ನಂತರ ಕ್ಯಾಪ್ಸಿಕಂ ಮತ್ತು ಕಸ್ತೂರಿ ಮೇಥಿ ಸೇರಿಸಿ ಬಡಿಸಿ!"
    ],
    "tip_en": "The crunchy capsicum contrasts exquisitely with the soft meaty bite of cooked milky mushrooms.",
    "tip_kn": "ಕ್ಯಾಪ್ಸಿಕಂ ಗರಿಗರಿತನ ಮತ್ತು ಹಾಲು ಅಣಬೆಯ ಜ್ಯೂಸಿ ಟೆಕ್ಸ್ಚರ್ ಅದ್ಭುತ ರುಚಿ ನೀಡುತ್ತದೆ."
  },
  {
    "id": "milky_21",
    "type": "milky",
    "category": "curry",
    "img": "assets/recipe_korma.jpg",
    "title_en": "Methi Malai Milky Mushroom Curry",
    "title_kn": "ಮೇಥಿ ಮಲೈ ಹಾಲು ಅಣಬೆ ಗ್ರೇವಿ (Methi Malai)",
    "desc_en": "Delicate royal curry pairing slightly bitter fresh fenugreek greens (methi) with thick milky mushroom chunks in a rich cardamom-scented cream sauce.",
    "desc_kn": "ತಾಜಾ ಮೆಂತ್ಯ ಸೊಪ್ಪು, ಹಾಲಿನ ಕೆನೆ ಹಾಗೂ ದಪ್ಪ ಹಾಲು ಅಣಬೆಯ ತುಂಡುಗಳು ಬೆರೆತ ರಾಜಮನೆತನದ ಮೃದು ಗ್ರೇವಿ.",
    "time_en": "24 Mins",
    "time_kn": "24 ನಿಮಿಷ",
    "calories": "230 kcal",
    "servings_en": "3 Servings",
    "servings_kn": "3 ಜನರಿಗೆ",
    "tag_en": "Milky • Methi Malai",
    "tag_kn": "ಹಾಲು ಅಣಬೆ • ಮೇಥಿ ಮಲೈ",
    "ingredients_en": [
      "250g Fresh Milky Mushrooms",
      "1 bunch Fresh Methi (Fenugreek leaves washed & chopped)",
      "1/2 cup Fresh cream & 2 tbsp Cashew paste",
      "1 Onion & 2 Green chillies pureed",
      "1/2 tsp Cardamom powder & Cinnamon"
    ],
    "ingredients_kn": [
      "250 ಗ್ರಾಂ ಹಾಲು ಅಣಬೆ",
      "1 ಕಟ್ಟು ತಾಜಾ ಮೆಂತ್ಯ ಸೊಪ್ಪು (ಹೆಚ್ಚಿದ್ದು)",
      "ಅರ್ಧ ಕಪ್ ಕೆನೆ ಮತ್ತು ಗೋಡಂಬಿ ಪೇಸ್ಟ್",
      "ಈರುಳ್ಳಿ-ಹಸಿಮೆಣಸು ಪ್ಯೂರಿ",
      "ಏಲಕ್ಕಿ ಪುಡಿ ಮತ್ತು ದಾಲ್ಚಿನ್ನಿ"
    ],
    "instructions_en": [
      "Sprinkle salt on chopped methi leaves, let sit 5 mins, and squeeze out excess bitter water.",
      "Sauté onion paste in ghee until translucent; add cashew paste and cook 2 minutes.",
      "Add squeezed methi leaves and cook till wilted and fragrant.",
      "Add milky mushroom chunks and 1/2 cup water; simmer for 6 minutes.",
      "Stir in fresh cream, cardamom, and simmer gently for 2 minutes before serving!"
    ],
    "instructions_kn": [
      "ಮೆಂತ್ಯ ಸೊಪ್ಪಿಗೆ ಉಪ್ಪು ಹಾಕಿ 5 ನಿಮಿಷ ಬಿಟ್ಟು ಕಹಿ ನೀರನ್ನು ಹಿಂಡಿ ತೆಗೆಯಿರಿ.",
      "ತುಪ್ಪದಲ್ಲಿ ಈರುಳ್ಳಿ ಮತ್ತು ಗೋಡಂಬಿ ಪೇಸ್ಟ್ ಹುರಿದು ಮೆಂತ್ಯ ಸೊಪ್ಪು ಸೇರಿಸಿ.",
      "ಅಣಬೆ ಹಾಕಿ 6 ನಿಮಿಷ ಬೇಯಿಸಿ, ಕೊನೆಯಲ್ಲಿ ಕ್ರೀಮ್ ಮತ್ತು ಏಲಕ್ಕಿ ಪುಡಿ ಸೇರಿಸಿ ಬಡಿಸಿ!"
    ],
    "tip_en": "Salting and squeezing methi removes harsh bitterness while keeping fresh chlorophyll essence intact.",
    "tip_kn": "ಮೆಂತ್ಯ ಸೊಪ್ಪಿಗೆ ಉಪ್ಪು ಹಾಕಿ ಹಿಂಡುವುದರಿಂದ ಕಹಿ ಅಂಶ ಕಡಿಮೆಯಾಗುತ್ತದೆ."
  },
  {
    "id": "milky_22",
    "type": "milky",
    "category": "dry",
    "img": "assets/recipe_ghee_roast.jpg",
    "title_en": "Mangalore Milky Mushroom Ghee Roast",
    "title_kn": "ಮಂಗಳೂರು ಹಾಲು ಅಣಬೆ ಘೀ ರೋಸ್ಟ್ (Milky Ghee Roast)",
    "desc_en": "The quintessential Mangalorean dark red, glossy, fiery roast cooked in generous pure desi ghee, Byadgi chillies, whole spices, and thick juicy milky chunks.",
    "desc_kn": "ಶುದ್ಧ ತುಪ್ಪ, ಬ್ಯಾಡಗಿ ಮೆಣಸಿನಕಾಯಿ ಹಾಗೂ ಮಂಗಳೂರು ಸ್ಪೆಷಲ್ ಮಸಾಲೆಯಲ್ಲಿ ಬೇಯಿಸಿದ ಅತ್ಯಂತ ಜನಪ್ರಿಯ ಘೀ ರೋಸ್ಟ್.",
    "time_en": "24 Mins",
    "time_kn": "24 ನಿಮಿಷ",
    "calories": "270 kcal",
    "servings_en": "3-4 Servings",
    "servings_kn": "3-4 ಜನರಿಗೆ",
    "tag_en": "Milky • Mangalore Ghee Roast",
    "tag_kn": "ಹಾಲು ಅಣಬೆ • ಘೀ ರೋಸ್ಟ್",
    "ingredients_en": [
      "300g Fresh Milky Mushrooms (1-inch thick disks)",
      "Ghee roast masala: 8 Byadgi chillies, 1 tbsp Coriander, 1/2 tsp Cumin, 1/4 tsp Fennel, 1/4 tsp Fenugreek, 1/2 tsp Black pepper, 6 Garlic cloves, tamarind",
      "3 tbsp Pure Desi Cow Ghee",
      "2 sprigs Curry leaves & Jaggery pinch"
    ],
    "ingredients_kn": [
      "300 ಗ್ರಾಂ ಹಾಲು ಅಣಬೆ (ದಪ್ಪ ತುಂಡುಗಳು)",
      "ಘೀ ರೋಸ್ಟ್ ಮಸಾಲ: ಬ್ಯಾಡಗಿ ಮೆಣಸು, ಕೊತ್ತಂಬರಿ, ಜೀರಿಗೆ, ಸೋಂಪು, ಮೆಂತ್ಯ, ಕಾಳುಮೆಣಸು, ಬೆಳ್ಳುಳ್ಳಿ, ಹುಣಸೆಹಣ್ಣು",
      "3 ಚಮಚ ಶುದ್ಧ ಹಸುವಿನ ತುಪ್ಪ",
      "ಕರಿಬೇವು ಮತ್ತು ಸ್ವಲ್ಪ ಬೆಲ್ಲ"
    ],
    "instructions_en": [
      "Dry roast spices and grind with tamarind and garlic to a thick crimson paste.",
      "Heat 2 tbsp ghee in a cast iron pan, add the ground paste and cook until ghee separates and aroma fills the kitchen.",
      "Add milky mushroom discs, remaining ghee, curry leaves, and pinch of jaggery.",
      "Roast on medium flame for 8 minutes until glossy, deep mahogany sauce coats every chunk.",
      "Serve piping hot with Neer Dosa or Appam!"
    ],
    "instructions_kn": [
      "ಮಸಾಲೆಗಳನ್ನು ಹುರಿದು ಹುಣಸೆಹಣ್ಣು, ಬೆಳ್ಳುಳ್ಳಿಯೊಂದಿಗೆ ನುಣ್ಣಗೆ ರುಬ್ಬಿ.",
      "ಕಾದ ತುಪ್ಪದಲ್ಲಿ ಈ ಮಸಾಲೆಯನ್ನು ತುಪ್ಪ ತೇಲುವವರೆಗೆ ಚೆನ್ನಾಗಿ ಹುರಿಯಿರಿ.",
      "ಹಾಲು ಅಣಬೆ, ಕರಿಬೇವು, ಬೆಲ್ಲ ಸೇರಿಸಿ 8 ನಿಮಿಷ ಚೆನ್ನಾಗಿ ರೋಸ್ಟ್ ಮಾಡಿ.",
      "ನೀರುದೋಸೆ ಅಥವಾ ಆಪ್ಪಂ ಜೊತೆ ಬಿಸಿಬಿಸಿಯಾಗಿ ಸವಿಯಿರಿ!"
    ],
    "tip_en": "Milky mushroom holds its firm lobster-like bite against the intense heat and ghee of this dish.",
    "tip_kn": "ಹಾಲು ಅಣಬೆಯ ಗಟ್ಟಿ ಕಾಂಡವು ತುಪ್ಪದ ತೀಕ್ಷ್ಣ ಶಾಖದಲ್ಲೂ ಕರಗದೆ ಜ್ಯೂಸಿಯಾಗಿ ಉಳಿಯುತ್ತದೆ."
  },
  {
    "id": "milky_23",
    "type": "milky",
    "category": "dry",
    "img": "assets/recipe_milky_pepper.jpg",
    "title_en": "Tawa Masala Milky Mushroom Steaks",
    "title_kn": "ತವಾ ಮಸಾಲಾ ಹಾಲು ಅಣಬೆ ಸ್ಟೇಕ್ಸ್ (Milky Steaks)",
    "desc_en": "Thick 1-inch cylindrical milky mushroom cross-sections marinated in spiced yogurt and seared on a cast-iron tawa like gourmet plant-based steaks.",
    "desc_kn": "ದಪ್ಪ ಹಾಲು ಅಣಬೆಯನ್ನು ಸ್ಟೇಕ್ ಆಕಾರದಲ್ಲಿ ಹೆಚ್ಚಿ ಮಸಾಲೆಯಲ್ಲಿ ನೆನೆಸಿ ತವಾದಲ್ಲಿ ಸುಟ್ಟ ಗೌರ್ಮೆ ಸ್ಟೇಕ್ಸ್.",
    "time_en": "18 Mins",
    "time_kn": "18 ನಿಮಿಷ",
    "calories": "160 kcal",
    "servings_en": "3 Servings",
    "servings_kn": "3 ಜನರಿಗೆ",
    "tag_en": "Milky • Plant Steaks",
    "tag_kn": "ಹಾಲು ಅಣಬೆ • ತವಾ ಸ್ಟೇಕ್ಸ್",
    "ingredients_en": [
      "300g Large Fresh Milky Mushrooms (sliced into thick 1-inch round steaks)",
      "2 tbsp Hung Curd",
      "1 tsp Kashmiri chilli powder, 1/2 tsp Garam masala, 1/2 tsp Chaat masala",
      "1 tbsp Ginger-garlic paste & Lemon juice",
      "Butter or oil for basting"
    ],
    "ingredients_kn": [
      "300 ಗ್ರಾಂ ದೊಡ್ಡ ಹಾಲು ಅಣಬೆ (ದಪ್ಪ ರೌಂಡ್ ಸ್ಟೇಕ್ ತುಂಡುಗಳು)",
      "2 ಚಮಚ ಗಟ್ಟಿ ಮೊಸರು",
      "ಖಾರದ ಪುಡಿ, ಗರಂ ಮಸಾಲ, ಚಾಟ್ ಮಸಾಲ",
      "ಶುಂಠಿ-ಬೆಳ್ಳುಳ್ಳಿ ಪೇಸ್ಟ್ ಮತ್ತು ನಿಂಬೆರಸ",
      "ಬೆಣ್ಣೆ"
    ],
    "instructions_en": [
      "Score cross-hatch shallow cuts on both sides of the thick milky steaks to allow marinades to penetrate.",
      "Apply spiced yogurt marinade and rest for 15 minutes.",
      "Sear on a smoking hot ribbed cast-iron pan with butter for 3-4 minutes per side.",
      "Baste continuously with spiced pan drippings until charred grill marks appear.",
      "Serve with grilled peppers and chimichurri or mint chutney!"
    ],
    "instructions_kn": [
      "ದಪ್ಪ ಅಣಬೆ ತುಂಡುಗಳ ಮೇಲೆ ಮಸಾಲೆ ಇಳಿಯಲು ಸಣ್ಣಗೆ ಗೆರೆ ಎಳೆಯಿರಿ.",
      "ಮೊಸರು ಮತ್ತು ಮಸಾಲೆ ಲೇಪಿಸಿ 15 ನಿಮಿಷ ನೆನೆಯಲು ಬಿಡಿ.",
      "ಕಾದ ತವಾದಲ್ಲಿ ಬೆಣ್ಣೆ ಹಾಕಿ ಎರಡೂ ಬದಿ 3-4 ನಿಮಿಷ ಚೆನ್ನಾಗಿ ಬೇಯಿಸಿ.",
      "ಪುದೀನಾ ಚಟ್ನಿ ಅಥವಾ ಸಾಸ್ ಜೊತೆ ಬಿಸಿಯಾಗಿ ಬಡಿಸಿ!"
    ],
    "tip_en": "Cross-hatch scoring creates beautiful grill marks and lets aromatic butter seep into the dense fibers.",
    "tip_kn": "ಗೆರೆ ಎಳೆದು ಹುರಿಯುವುದರಿಂದ ಬೆಣ್ಣೆ ಮತ್ತು ಮಸಾಲೆ ಅಣಬೆಯ ಒಳಭಾಗದವರೆಗೂ ಇಳಿಯುತ್ತದೆ."
  },
  {
    "id": "milky_24",
    "type": "milky",
    "category": "rice",
    "img": "assets/recipe_milky_biryani.jpg",
    "title_en": "Thalassery Style Milky Mushroom Biryani",
    "title_kn": "ತಲಶ್ಶೇರಿ ಹಾಲು ಅಣಬೆ ಬಿರಿಯಾನಿ (Thalassery Biryani)",
    "desc_en": "Malabar coast specialty prepared with fragrant short-grain Kaima rice, ghee, crispy cashew-raisins, and thick milky mushroom chunks cooked in mild green chilli paste.",
    "desc_kn": "ಕೈಮಾ ಅಕ್ಕಿ, ತುಪ್ಪ, ಹುರಿದ ಗೋಡಂಬಿ-ದ್ರಾಕ್ಷಿ ಮತ್ತು ಹಸಿಮೆಣಸಿನ ಮಸಾಲೆಯಲ್ಲಿ ದಮ್ ಕಟ್ಟಿದ ಕೇರಳದ ಪ್ರಸಿದ್ಧ ತಲಶ್ಶೇರಿ ಬಿರಿಯಾನಿ.",
    "time_en": "40 Mins",
    "time_kn": "40 ನಿಮಿಷ",
    "calories": "275 kcal",
    "servings_en": "4-5 Servings",
    "servings_kn": "4-5 ಜನರಿಗೆ",
    "tag_en": "Milky • Malabar Thalassery",
    "tag_kn": "ಹಾಲು ಅಣಬೆ • ತಲಶ್ಶೇರಿ ಬಿರಿಯಾನಿ",
    "ingredients_en": [
      "300g Fresh Milky Mushrooms (1-inch discs)",
      "2 cups Fragrant Kaima/Jeerakasala rice",
      "3 tbsp Desi Cow Ghee",
      "Green chilli, ginger, and garlic crushed paste",
      "Fried onions, fried cashews, and golden raisins",
      "Saffron or turmeric milk for topping"
    ],
    "ingredients_kn": [
      "300 ಗ್ರಾಂ ಹಾಲು ಅಣಬೆ",
      "2 ಕಪ್ ಕೈಮಾ/ಜೀರಕಸಾಲ ಅಕ್ಕಿ",
      "3 ಚಮಚ ಹಸುವಿನ ತುಪ್ಪ",
      "ಹಸಿಮೆಣಸು, ಶುಂಠಿ-ಬೆಳ್ಳುಳ್ಳಿ ಪೇಸ್ಟ್",
      "ಹುರಿದ ಈರುಳ್ಳಿ, ಗೋಡಂಬಿ, ದ್ರಾಕ್ಷಿ",
      "ಕೇಸರಿ ಹಾಲು"
    ],
    "instructions_en": [
      "Cook Kaima rice with ghee and whole spices till 80% tender.",
      "Prepare milky mushroom gravy with crushed chillies, onions, tomatoes, and curd in heavy bottom handi.",
      "Layer rice over mushrooms, sprinkle fried onions, cashews, raisins, and saffron milk.",
      "Seal pot with foil or dough; slow dum on low flame for 18 minutes.",
      "Gently mix from the bottom and serve with date pickle and coconut raita!"
    ],
    "instructions_kn": [
      "ಕೈಮಾ ಅಕ್ಕಿಯನ್ನು ತುಪ್ಪ ಮತ್ತು ಮಸಾಲೆ ಜೊತೆ ಮುಕ್ಕಾಲು ಭಾಗ ಬೇಯಿಸಿಕೊಳ್ಳಿ.",
      "ಅಣಬೆ, ಹಸಿಮೆಣಸು, ಈರುಳ್ಳಿ, ಮೊಸರು ಹಾಕಿ ಗ್ರೇವಿ ತಯಾರಿಸಿ.",
      "ಅಣಬೆ ಮೇಲೆ ಅನ್ನ, ಹುರಿದ ಗೋಡಂಬಿ, ದ್ರಾಕ್ಷಿ, ಕೇಸರಿ ಹಾಲು ಹಾಕಿ 18 ನಿಮಿಷ ದಮ್ ಕಟ್ಟಿ.",
      "ಖರ್ಜೂರದ ಚಟ್ನಿ ಮತ್ತು ರೈತಾದೊಂದಿಗೆ ಬಡಿಸಿ!"
    ],
    "tip_en": "Kaima rice has a distinct natural popcorn aroma that complements milky mushrooms gorgeously.",
    "tip_kn": "ಕೈಮಾ ಅಕ್ಕಿಯ ನೈಸರ್ಗಿಕ ಸುವಾಸನೆಯು ಬಿರಿಯಾನಿಗೆ ಅದ್ಭುತ ರುಚಿ ನೀಡುತ್ತದೆ."
  },
  {
    "id": "milky_25",
    "type": "milky",
    "category": "rice",
    "img": "assets/recipe_milky_biryani.jpg",
    "title_en": "Golden Garlic Milky Mushroom Fried Rice",
    "title_kn": "ಗೋಲ್ಡನ್ ಗಾರ್ಲಿಕ್ ಹಾಲು ಅಣಬೆ ಫ್ರೈಡ್ ರೈಸ್ (Fried Rice)",
    "desc_en": "Wok-tossed long grain jasmine or basmati rice with crunchy toasted garlic, diced milky mushrooms, spring onions, and light soy glaze.",
    "desc_kn": "ಗರಿಗರಿ ಹುರಿದ ಬೆಳ್ಳುಳ್ಳಿ, ಹಾಲು ಅಣಬೆಯ ಚೂರುಗಳು ಮತ್ತು ಸ್ಪ್ರಿಂಗ್ ಆನಿಯನ್ ಬೆರೆತ ಇಂಡೋ-ಚೈನೀಸ್ ಫ್ರೈಡ್ ರೈಸ್.",
    "time_en": "18 Mins",
    "time_kn": "18 ನಿಮಿಷ",
    "calories": "220 kcal",
    "servings_en": "3 Servings",
    "servings_kn": "3 ಜನರಿಗೆ",
    "tag_en": "Milky • Indo-Chinese Wok",
    "tag_kn": "ಹಾಲು ಅಣಬೆ • ಫ್ರೈಡ್ ರೈಸ್",
    "ingredients_en": [
      "200g Fresh Milky Mushrooms (diced small)",
      "3 cups Chilled cooked long grain rice",
      "10 Garlic cloves (minced & fried crisp golden)",
      "1 tbsp Light soy sauce & 1/2 tsp White pepper",
      "Finely chopped carrots & spring onion greens"
    ],
    "ingredients_kn": [
      "200 ಗ್ರಾಂ ಹಾಲು ಅಣಬೆ (ಸಣ್ಣಗೆ ಹೆಚ್ಚಿದ್ದು)",
      "3 ಕಪ್ ತಣ್ಣಗಾದ ಬೆಂದ ಅನ್ನ",
      "10 ಬೆಳ್ಳುಳ್ಳಿ ಎಸಳು (ಗರಿಗರಿಯಾಗಿ ಹುರಿದದ್ದು)",
      "ಸೋಯಾ ಸಾಸ್ ಮತ್ತು ಬಿಳಿ ಮೆಣಸು",
      "ಕ್ಯಾರೆಟ್ ಮತ್ತು ಸ್ಪ್ರಿಂಗ್ ಆನಿಯನ್"
    ],
    "instructions_en": [
      "Fry minced garlic in oil on medium flame till golden and crisp; remove half for garnish.",
      "Turn heat to maximum; toss diced milky mushrooms for 3 minutes until browned.",
      "Add chilled cooked rice, soy sauce, white pepper, and salt; stir-fry vigorously.",
      "Fold in spring onions and reserved golden crispy garlic.",
      "Serve piping hot with chilli paneer or manchurian gravy!"
    ],
    "instructions_kn": [
      "ಬೆಳ್ಳುಳ್ಳಿಯನ್ನು ಎಣ್ಣೆಯಲ್ಲಿ ಹೊಂಬಣ್ಣ ಬರುವಂತೆ ಗರಿಗರಿಯಾಗಿ ಹುರಿದು ಅರ್ಧ ಭಾಗ ತೆಗೆದಿಡಿ.",
      "ಹೆಚ್ಚಿದ ಉರಿಯಲ್ಲಿ ಅಣಬೆ ಹಾಕಿ 3 ನಿಮಿಷ ಹುರಿಯಿರಿ.",
      "ಅನ್ನ, ಸೋಯಾ ಸಾಸ್, ಮೆಣಸಿನ ಪುಡಿ ಹಾಕಿ ಚೆನ್ನಾಗಿ ಟಾಸ್ ಮಾಡಿ.",
      "ಮೇಲಿಂದ ಗರಿಗರಿ ಬೆಳ್ಳುಳ್ಳಿ ಮತ್ತು ಸ್ಪ್ರಿಂಗ್ ಆನಿಯನ್ ಉದುರಿಸಿ ಬಡಿಸಿ!"
    ],
    "tip_en": "Using cold day-old cooked rice prevents grains from sticking together in the hot wok.",
    "tip_kn": "ತಣ್ಣಗಾದ ಅನ್ನ ಬಳಸುವುದರಿಂದ ಫ್ರೈಡ್ ರೈಸ್ ಉದುರು-ಉದುರಾಗಿ ಬರುತ್ತದೆ."
  },
  {
    "id": "milky_26",
    "type": "milky",
    "category": "continental",
    "img": "assets/recipe_fettuccine.jpg",
    "title_en": "Creamy Milky Mushroom Fettuccine Alfredo",
    "title_kn": "ಕ್ರೀಮಿ ಹಾಲು ಅಣಬೆ ಫೆಟುಸಿನಿ ಅಲ್ಫ್ರೆಡೋ (Fettuccine Alfredo)",
    "desc_en": "Thick, succulent milky mushroom discs tossed with ribbon fettuccine pasta in a velvety garlic butter, heavy cream, and aged parmesan emulsion.",
    "desc_kn": "ಬೆಣ್ಣೆ, ಕೆನೆ, ಚೀಸ್ ಮತ್ತು ದಪ್ಪ ಹಾಲು ಅಣಬೆಯೊಂದಿಗೆ ತಯಾರಿಸಿದ ಪ್ರಸಿದ್ಧ ಇಟಾಲಿಯನ್ ಪಾಸ್ತಾ ಖಾದ್ಯ.",
    "time_en": "20 Mins",
    "time_kn": "20 ನಿಮಿಷ",
    "calories": "290 kcal",
    "servings_en": "3 Servings",
    "servings_kn": "3 ಜನರಿಗೆ",
    "tag_en": "Milky • Italian Alfredo",
    "tag_kn": "ಹಾಲು ಅಣಬೆ • ಫೆಟುಸಿನಿ ಪಾಸ್ತಾ",
    "ingredients_en": [
      "250g Fresh Milky Mushrooms (sliced into discs)",
      "200g Fettuccine pasta (cooked al dente)",
      "1/2 cup Heavy Cream & 2 tbsp Pure Butter",
      "1/3 cup Aged Parmesan cheese freshly grated",
      "2 Garlic cloves minced & cracked black pepper"
    ],
    "ingredients_kn": [
      "250 ಗ್ರಾಂ ಹಾಲು ಅಣಬೆ (ಚೂರುಗಳು)",
      "200 ಗ್ರಾಂ ಫೆಟುಸಿನಿ ಪಾಸ್ತಾ",
      "ಅರ್ಧ ಕಪ್ ಹೆವಿ ಕ್ರೀಮ್ ಮತ್ತು ಬೆಣ್ಣೆ",
      "ಪಾರ್ಮಿಸನ್ ಚೀಸ್ ತುರಿ",
      "ಬೆಳ್ಳುಳ್ಳಿ ಮತ್ತು ಕಾಳುಮೆಣಸಿನ ಪುಡಿ"
    ],
    "instructions_en": [
      "Melt butter in a wide skillet, sear milky mushroom discs for 4 minutes until golden on edges.",
      "Add minced garlic; stir for 30 seconds until fragrant.",
      "Pour in heavy cream and 1/4 cup pasta cooking water; bring to gentle simmer.",
      "Fold in cooked fettuccine ribbons and grated parmesan; toss vigorously till velvety sauce glazes pasta.",
      "Finish with freshly cracked black pepper and parsley!"
    ],
    "instructions_kn": [
      "ಬೆಣ್ಣೆಯಲ್ಲಿ ಅಣಬೆ ತುಂಡುಗಳನ್ನು 4 ನಿಮಿಷ ಹೊಂಬಣ್ಣ ಬರುವಂತೆ ಹುರಿಯಿರಿ.",
      "ಬೆಳ್ಳುಳ್ಳಿ, ಕ್ರೀಮ್ ಮತ್ತು ಸ್ವಲ್ಪ ಪಾಸ್ತಾ ಬೆಂದ ನೀರು ಹಾಕಿ ಕುದಿಸಿ.",
      "ಬೆಂದ ಪಾಸ್ತಾ ಮತ್ತು ಚೀಸ್ ತುರಿ ಸೇರಿಸಿ ಚೆನ್ನಾಗಿ ಟಾಸ್ ಮಾಡಿ.",
      "ಕಾಳುಮೆಣಸಿನ ಪುಡಿ ಉದುರಿಸಿ ಬಿಸಿಯಾಗಿ ಸವಿಯಿರಿ!"
    ],
    "tip_en": "Using starchy pasta water helps emulsify butter and cheese into a glossy restaurant-quality coat.",
    "tip_kn": "ಪಾಸ್ತಾ ಬೆಂದ ನೀರನ್ನು ಸ್ವಲ್ಪ ಸೇರಿಸುವುದರಿಂದ ಸಾಸ್ ಕ್ರೀಮಿಯಾಗಿ ಪಾಸ್ತಾಗೆ ಚೆನ್ನಾಗಿ ಹಿಡಿಯುತ್ತದೆ."
  },
  {
    "id": "milky_27",
    "type": "milky",
    "category": "continental",
    "img": "assets/recipe_fettuccine.jpg",
    "title_en": "Cheesy Baked Stuffed Milky Mushroom Caps",
    "title_kn": "ಚೀಸಿ ಬೇಕ್ಡ್ ಹಾಲು ಅಣಬೆ ಕಪ್ಸ್ (Baked Stuffed Caps)",
    "desc_en": "Large pristine white milky caps hollowed and filled with spinach, roasted garlic, cream cheese, and herbs, baked with bubbling mozzarella topping.",
    "desc_kn": "ದೊಡ್ಡ ಹಾಲು ಅಣಬೆ ಕಪ್‌ಗಳಲ್ಲಿ ಪಾಲಕ್, ಬೆಳ್ಳುಳ್ಳಿ ಮತ್ತು ಕ್ರೀಮ್ ಚೀಸ್ ತುಂಬಿ ಒಲೆಯಲ್ಲಿ ಬೇಕ್ ಮಾಡಿದ ಚೀಸ್ ಸ್ಟಾರ್ಟರ್.",
    "time_en": "22 Mins",
    "time_kn": "22 ನಿಮಿಷ",
    "calories": "230 kcal",
    "servings_en": "3 Servings",
    "servings_kn": "3 ಜನರಿಗೆ",
    "tag_en": "Milky • Baked Gourmet",
    "tag_kn": "ಹಾಲು ಅಣಬೆ • ಬೇಕ್ಡ್ ಚೀಸ್",
    "ingredients_en": [
      "12-14 Large Fresh Milky Mushroom Caps",
      "1 cup Spinach leaves chopped and wilted",
      "1/2 cup Cream cheese & 1/2 cup Mozzarella shredded",
      "2 Garlic cloves minced & Italian herbs (Oregano, Chilli flakes)",
      "Olive oil for brushing"
    ],
    "ingredients_kn": [
      "12-14 ದೊಡ್ಡ ಹಾಲು ಅಣಬೆ ಕಪ್‌ಗಳು",
      "1 ಕಪ್ ಸಣ್ಣಗೆ ಹೆಚ್ಚಿ ಬಾಡಿಸಿದ ಪಾಲಕ್ ಸೊಪ್ಪು",
      "ಕ್ರೀಮ್ ಚೀಸ್ ಮತ್ತು ಮೊಝರೆಲ್ಲಾ ಚೀಸ್",
      "ಬೆಳ್ಳುಳ್ಳಿ ಮತ್ತು ಓರೆಗಾನೊ ಮಸಾಲ",
      "ಆಲಿವ್ ಎಣ್ಣೆ"
    ],
    "instructions_en": [
      "Gently detach stems from milky mushroom caps; brush caps with olive oil and place cavity-up on baking tray.",
      "Mince stems and sauté with garlic, spinach, cream cheese, oregano, and salt.",
      "Spoon stuffing generously into each milky cap cavity.",
      "Top with shredded mozzarella cheese.",
      "Bake in preheated oven at 200°C (or air-fryer) for 12-14 minutes until cheese is bubbly golden brown!",
      "Serve hot as an irresistible luxury party hors d'oeuvre!"
    ],
    "instructions_kn": [
      "ಅಣಬೆಯ ಕಪ್‌ಗಳಿಗೆ ಆಲಿವ್ ಎಣ್ಣೆ ಸವರಿ ಟ್ರೇನಲ್ಲಿ ಜೋಡಿಸಿ.",
      "ಅಣಬೆ ಕಾಂಡ, ಪಾಲಕ್, ಬೆಳ್ಳುಳ್ಳಿ, ಕ್ರೀಮ್ ಚೀಸ್ ಹುರಿದು ಹೂರಣ ತಯಾರಿಸಿ ಕಪ್‌ಗಳ ಒಳಗೆ ತುಂಬಿ.",
      "ಮೇಲಿಂದ ಮೊಝರೆಲ್ಲಾ ಚೀಸ್ ಹಾಕಿ ಓವನ್ ಅಥವಾ ಏರ್-ಫ್ರೈಯರ್‌ನಲ್ಲಿ 12-14 ನಿಮಿಷ ಬೇಕ್ ಮಾಡಿ.",
      "ಚೀಸ್ ಕರಗಿ ಹೊಂಬಣ್ಣಕ್ಕೆ ಬಂದ ಮೇಲೆ ಬಿಸಿಯಾಗಿ ಬಡಿಸಿ!"
    ],
    "tip_en": "Milky mushroom caps maintain their firm structural cup during baking, holding fillings without collapsing.",
    "tip_kn": "ಹಾಲು ಅಣಬೆ ಬೇಯಿಸಿದಾಗಲೂ ಕಪ್ ಆಕಾರವನ್ನು ಕಳೆದುಕೊಳ್ಳದೆ ಚೀಸ್ ಹೂರಣವನ್ನು ಭದ್ರವಾಗಿ ಹಿಡಿದಿಟ್ಟುಕೊಳ್ಳುತ್ತದೆ."
  },
  {
    "id": "milky_28",
    "type": "milky",
    "category": "continental",
    "img": "assets/recipe_broth.jpg",
    "title_en": "Classic Cream of Wild Milky Mushroom Soup",
    "title_kn": "ಕ್ಲಾಸಿಕ್ ಕ್ರೀಮ್ ಆಫ್ ಹಾಲು ಅಣಬೆ ಸೂಪ್ (Cream of Mushroom)",
    "desc_en": "The quintessential Parisian soup made with slow-caramelized milky mushrooms, roasted garlic, thyme, rich vegetable broth, and fresh cream.",
    "desc_kn": "ಬೆಣ್ಣೆ, ಬೆಳ್ಳುಳ್ಳಿ, ಗಿಡಮೂಲಿಕೆಗಳು ಮತ್ತು ಹಾಲಿನ ಕೆನೆಯೊಂದಿಗೆ ತಯಾರಿಸಿದ ಅತ್ಯಂತ ಶ್ರೀಮಂತ ಸೂಪ್.",
    "time_en": "20 Mins",
    "time_kn": "20 ನಿಮಿಷ",
    "calories": "175 kcal",
    "servings_en": "3-4 Servings",
    "servings_kn": "3-4 ಜನರಿಗೆ",
    "tag_en": "Milky • Parisian Cream Soup",
    "tag_kn": "ಹಾಲು ಅಣಬೆ • ಕ್ರೀಮ್ ಸೂಪ್",
    "ingredients_en": [
      "250g Fresh Milky Mushrooms (sliced)",
      "2 tbsp Butter & 1 tbsp Flour (roux)",
      "3 cups Vegetable stock",
      "1/2 cup Fresh cream",
      "Fresh thyme sprigs & crushed black pepper"
    ],
    "ingredients_kn": [
      "250 ಗ್ರಾಂ ಹಾಲು ಅಣಬೆ",
      "2 ಚಮಚ ಬೆಣ್ಣೆ ಮತ್ತು 1 ಚಮಚ ಮೈದಾ ಹಿಟ್ಟು",
      "3 ಕಪ್ ತರಕಾರಿ ಸೂಪ್ ನೀರು (ಸ್ಟಾಕ್)",
      "ಅರ್ಧ ಕಪ್ ಕೆನೆ",
      "ಥೈಮ್ ಸೊಪ್ಪು ಮತ್ತು ಕಾಳುಮೆಣಸು"
    ],
    "instructions_en": [
      "Sauté milky mushrooms in butter with thyme until caramelized and deeply fragrant.",
      "Dust with flour and stir for 1 minute to cook the roux.",
      "Gradually pour in warm vegetable stock, whisking continuously to avoid lumps.",
      "Simmer for 8 minutes; blend half the soup for silkiness while keeping half chunky.",
      "Stir in fresh cream, season with sea salt and cracked pepper. Serve with garlic croutons!"
    ],
    "instructions_kn": [
      "ಬೆಣ್ಣೆಯಲ್ಲಿ ಅಣಬೆ ಮತ್ತು ಥೈಮ್ ಸೊಪ್ಪನ್ನು ಕಂದು ಬಣ್ಣ ಬರುವಂತೆ ಹುರಿಯಿರಿ.",
      "ಹಿಟ್ಟು ಸೇರಿಸಿ ಹುರಿದು, ಬಿಸಿ ತರಕಾರಿ ಸ್ಟಾಕ್ ನೀರನ್ನು ನಿಧಾನವಾಗಿ ಹಾಕಿ ಕುದಿಸಿ.",
      "ಅರ್ಧ ಸೂಪನ್ನು ಮಿಕ್ಸಿಯಲ್ಲಿ ರುಬ್ಬಿ ಕ್ರೀಮಿ ಮಾಡಿ, ನಂತರ ಕೆನೆ ಮತ್ತು ಕಾಳುಮೆಣಸು ಸೇರಿಸಿ ಕ್ರೌಟಾನ್ಸ್ ಜೊತೆ ಬಡಿಸಿ!"
    ],
    "tip_en": "Blending half while retaining half chunky gives the ideal balance of silky body and meaty bite.",
    "tip_kn": "ಅರ್ಧ ಸೂಪನ್ನು ರುಬ್ಬಿ, ಅರ್ಧ ಅಣಬೆ ತುಂಡುಗಳನ್ನು ಹಾಗೆಯೇ ಬಿಟ್ಟರೆ ಕ್ರೀಮಿ ಟೆಕ್ಸ್ಚರ್ ಮತ್ತು ಜಗಿಯುವ ಮಜಾ ಎರಡೂ ಸಿಗುತ್ತದೆ."
  },
  {
    "id": "milky_29",
    "type": "milky",
    "category": "soup",
    "img": "assets/recipe_broth.jpg",
    "title_en": "Tibetan Herbal Milky Mushroom Thukpa Broth",
    "title_kn": "ಟಿಬೆಟಿಯನ್ ಹಾಲು ಅಣಬೆ ತುಕ್ಪಾ ಸೂಪ್ (Tibetan Thukpa)",
    "desc_en": "Hearty Himalayan noodle soup brimming with thick milky mushroom slices, hand-pulled noodles, ginger, spring greens, and warming spices.",
    "desc_kn": "ಹಿಮಾಲಯನ್ ನೂಡಲ್ಸ್, ಹಸಿ ಶುಂಠಿ, ತರಕಾರಿಗಳು ಮತ್ತು ಹಾಲು ಅಣಬೆಯೊಂದಿಗೆ ತಯಾರಿಸಿದ ಪೌಷ್ಟಿಕ ಟಿಬೆಟಿಯನ್ ಸೂಪ್.",
    "time_en": "22 Mins",
    "time_kn": "22 ನಿಮಿಷ",
    "calories": "210 kcal",
    "servings_en": "3 Servings",
    "servings_kn": "3 ಜನರಿಗೆ",
    "tag_en": "Milky • Himalayan Thukpa",
    "tag_kn": "ಹಾಲು ಅಣಬೆ • ತುಕ್ಪಾ ಸೂಪ್",
    "ingredients_en": [
      "200g Fresh Milky Mushrooms (thick slices)",
      "150g Egg or wheat noodles (boiled)",
      "4 cups Rich vegetable broth",
      "Thukpa spices: Cumin, coriander, turmeric, Sichuan pepper, garlic",
      "Shredded cabbage, carrots & spring onion greens"
    ],
    "ingredients_kn": [
      "200 ಗ್ರಾಂ ಹಾಲು ಅಣಬೆ",
      "150 ಗ್ರಾಂ ಬೆಂದ ನೂಡಲ್ಸ್",
      "4 ಕಪ್ ತರಕಾರಿ ಸ್ಟಾಕ್ ನೀರು",
      "ಶುಂಠಿ, ಬೆಳ್ಳುಳ್ಳಿ, ಜೀರಿಗೆ, ಅರಿಶಿನ, ಕಾಳುಮೆಣಸು",
      "ಎಲೆಕೋಸು, ಕ್ಯಾರೆಟ್ ಮತ್ತು ಸ್ಪ್ರಿಂಗ್ ಆನಿಯನ್"
    ],
    "instructions_en": [
      "Sauté garlic, ginger, and thukpa spices in sesame oil for 1 minute.",
      "Add vegetable broth and bring to a rolling boil.",
      "Add milky mushroom slices and shredded cabbage; simmer for 6 minutes.",
      "Place boiled noodles in serving bowls and ladle the steaming spicy mushroom broth over.",
      "Garnish with fresh coriander and scallions. Slurp hot!"
    ],
    "instructions_kn": [
      "ಎಳ್ಳೆಣ್ಣೆಯಲ್ಲಿ ಶುಂಠಿ, ಬೆಳ್ಳುಳ್ಳಿ, ಮಸಾಲೆಗಳನ್ನು ಹುರಿದು ತರಕಾರಿ ನೀರು ಹಾಕಿ ಕುದಿಸಿ.",
      "ಅಣಬೆ ಮತ್ತು ತರಕಾರಿ ಹಾಕಿ 6 ನಿಮಿಷ ಬೇಯಿಸಿ.",
      "ಬಟ್ಟಲಿನಲ್ಲಿ ನೂಡಲ್ಸ್ ಇಟ್ಟು ಅದರ ಮೇಲೆ ಕುದಿಯುವ ಬಿಸಿ ಸೂಪ್ ಸುರಿದು ಬಿಸಿಯಾಗಿ ಸವಿಯಿರಿ!"
    ],
    "tip_en": "Milky mushroom slices retain their toothsome chew even in boiling broth without disintegrating.",
    "tip_kn": "ಹಾಲು ಅಣಬೆಯು ಕುದಿಯುವ ಸೂಪಿನಲ್ಲೂ ಕರಗದೆ ತನ್ನ ಗಟ್ಟಿ ಆಕಾರವನ್ನು ಉಳಿಸಿಕೊಳ್ಳುತ್ತದೆ."
  },
  {
    "id": "milky_30",
    "type": "milky",
    "category": "soup",
    "img": "assets/recipe_broth.jpg",
    "title_en": "Immunity Booster Turmeric Garlic Milky Tonic",
    "title_kn": "ರೋಗನಿರೋಧಕ ಅರಿಶಿನ-ಬೆಳ್ಳುಳ್ಳಿ ಹಾಲು ಅಣಬೆ ಕಷಾಯ (Immunity Tonic)",
    "desc_en": "Potent Ayurvedic healing broth brewed with fresh crushed turmeric root, whole garlic cloves, black pepper, Tulsi leaves, and milky mushroom cubes.",
    "desc_kn": "ಹಸಿ ಅರಿಶಿನ, ಜಜ್ಜಿದ ಬೆಳ್ಳುಳ್ಳಿ, ತುಳಸಿ ಹಾಗೂ ಕಾಳುಮೆಣಸಿನ ಸಾರದಲ್ಲಿ ತಯಾರಿಸಿದ ರೋಗನಿರೋಧಕ ಆಯುರ್ವೇದ ಕಷಾಯ.",
    "time_en": "18 Mins",
    "time_kn": "18 ನಿಮಿಷ",
    "calories": "75 kcal",
    "servings_en": "3 Servings",
    "servings_kn": "3 ಜನರಿಗೆ",
    "tag_en": "Milky • Ayurvedic Health",
    "tag_kn": "ಹಾಲು ಅಣಬೆ • ಇಮ್ಯೂನಿಟಿ ಟಾನಿಕ್",
    "ingredients_en": [
      "150g Fresh Milky Mushrooms (diced small)",
      "1-inch Fresh Raw Turmeric root (crushed)",
      "8 Garlic cloves (crushed with skins)",
      "1 tsp Malabar Black Peppercorns (freshly cracked)",
      "Handful Fresh Holy Basil (Tulsi) leaves & rock salt"
    ],
    "ingredients_kn": [
      "150 ಗ್ರಾಂ ಹಾಲು ಅಣಬೆ",
      "ಹಸಿ ಅರಿಶಿನ ಕೊಂಬು",
      "8 ಬೆಳ್ಳುಳ್ಳಿ ಎಸಳು (ಜಜ್ಜಿದ್ದು)",
      "1 ಚಮಚ ಕಾಳುಮೆಣಸು",
      "ತಾಜಾ ತುಳಸಿ ಎಲೆಗಳು ಮತ್ತು ಸೈಂಧವ ಲವಣ"
    ],
    "instructions_en": [
      "Simmer crushed turmeric, garlic, black peppercorns, and Tulsi leaves in 4 cups of mountain water for 10 minutes.",
      "Add diced milky mushrooms and simmer for another 6 minutes so polysaccharides infuse into the tonic.",
      "Season with rock salt and a squeeze of fresh lemon juice.",
      "Strain into cups or enjoy with the tender mushroom bits for complete immune fortification!"
    ],
    "instructions_kn": [
      "ಹಸಿ ಅರಿಶಿನ, ಬೆಳ್ಳುಳ್ಳಿ, ಕಾಳುಮೆಣಸು ಮತ್ತು ತುಳಸಿಯನ್ನು 4 ಕಪ್ ನೀರಿನಲ್ಲಿ 10 ನಿಮಿಷ ಕುದಿಸಿ.",
      "ಅಣಬೆ ಚೂರುಗಳನ್ನು ಹಾಕಿ ಮತ್ತೆ 6 ನಿಮಿಷ ಸಣ್ಣ ಉರಿಯಲ್ಲಿ ಕುದಿಸಿ.",
      "ಉಪ್ಪು ಮತ್ತು ನಿಂಬೆರಸ ಹಿಂಡಿ ಬೆಚ್ಚಗೆ ಕುಡಿಯಿರಿ. ಶೀತ, ಕೆಮ್ಮು ಮತ್ತು ಆಯಾಸಕ್ಕೆ ದಿವ್ಯೌಷಧ!"
    ],
    "tip_en": "Black pepper's piperine amplifies curcumin absorption by 2,000%, while beta-glucans in milky mushrooms prime immune macrophages.",
    "tip_kn": "ಕಾಳುಮೆಣಸು ಅರಿಶಿನದ ಹೀರಿಕೊಳ್ಳುವಿಕೆಯನ್ನು ಹೆಚ್ಚಿಸುತ್ತದೆ ಮತ್ತು ಅಣಬೆಯ ಬೀಟಾ-ಗ್ಲುಕನ್ಸ್ ರೋಗನಿರೋಧಕ ಶಕ್ತಿಯನ್ನು ಬಲಪಡಿಸುತ್ತದೆ."
  },
  {
    "id": "milky_31",
    "type": "milky",
    "category": "snack",
    "img": "assets/recipe_pakoda.jpg",
    "title_en": "Crispy Spicy Milky Mushroom Pakoda",
    "title_kn": "ಗರಿಗರಿ ಹಾಲು ಅಣಬೆ ಪಕೋಡ (Milky Pakoda)",
    "desc_en": "Crispy golden tea-time fritters made with thick juicy milky mushroom discs coated in a spiced chickpea and rice flour batter with carom seeds and curry leaves.",
    "desc_kn": "ಕಡಲೆಹಿಟ್ಟು, ಅಕ್ಕಿಹಿಟ್ಟು, ಓಮ ಮತ್ತು ಕರಿಬೇವು ಹಿಟ್ಟಿನಲ್ಲಿ ಅದ್ದಿ ಕರಿದ ಗರಿಗರಿ ಸಂಜೆಯ ಚಹಾ ಸಮಯದ ಅಣಬೆ ಪಕೋಡ.",
    "time_en": "16 Mins",
    "time_kn": "16 ನಿಮಿಷ",
    "calories": "180 kcal",
    "servings_en": "3-4 Servings",
    "servings_kn": "3-4 ಜನರಿಗೆ",
    "tag_en": "Milky • Monsoon Pakoda",
    "tag_kn": "ಹಾಲು ಅಣಬೆ • ಪಕೋಡ",
    "ingredients_en": [
      "250g Fresh Milky Mushrooms (1/2-inch discs)",
      "1/2 cup Besan (Gram flour) & 2 tbsp Rice flour",
      "1/2 tsp Ajwain (carom seeds) & 1/4 tsp Hing",
      "1 tsp Kashmiri red chilli & turmeric",
      "Crisp curry leaves & green chillies chopped",
      "Oil for deep frying"
    ],
    "ingredients_kn": [
      "250 ಗ್ರಾಂ ಹಾಲು ಅಣಬೆ (ದಪ್ಪ ಚೂರುಗಳು)",
      "ಅರ್ಧ ಕಪ್ ಕಡಲೆಹಿಟ್ಟು ಮತ್ತು 2 ಚಮಚ ಅಕ್ಕಿಹಿಟ್ಟು",
      "ಓಮ (ಅಜ್ವೈನ್) ಮತ್ತು ಇಂಗು",
      "ಖಾರದ ಪುಡಿ, ಅರಿಶಿನ",
      "ಕರಿಬೇವು ಮತ್ತು ಹಸಿಮೆಣಸು",
      "ಕರೆಯಲು ಎಣ್ಣೆ"
    ],
    "instructions_en": [
      "Whisk besan, rice flour, ajwain, chilli, hing, and salt with water into a thick lump-free coating batter.",
      "Dip thick milky mushroom discs one by one into the batter, ensuring full coverage.",
      "Slide gently into smoking hot oil; fry on medium flame for 3-4 minutes until crunchy and golden brown.",
      "Drain on paper towel, dust with chaat masala, and serve with hot filter coffee or masala chai!"
    ],
    "instructions_kn": [
      "ಕಡಲೆಹಿಟ್ಟು, ಅಕ್ಕಿಹಿಟ್ಟು, ಓಮ, ಇಂಗು, ಖಾರದ ಪುಡಿಗೆ ನೀರು ಹಾಕಿ ಗಟ್ಟಿಯಾದ ಬಜ್ಜಿ ಹಿಟ್ಟು ತಯಾರಿಸಿ.",
      "ಅಣಬೆ ಚೂರುಗಳನ್ನು ಹಿಟ್ಟಿನಲ್ಲಿ ಅದ್ದಿ ಕಾದ ಎಣ್ಣೆಯಲ್ಲಿ 3-4 ನಿಮಿಷ ಗರಿಗರಿಯಾಗಿ ಕರಿಯಿರಿ.",
      "ಮೇಲಿಂದ ಚಾಟ್ ಮಸಾಲಾ ಉದುರಿಸಿ ಬಿಸಿ ಫಿಲ್ಟರ್ ಕಾಫಿ ಅಥವಾ ಚಹಾ ಜೊತೆ ಸವಿಯಿರಿ!"
    ],
    "tip_en": "The thick milky mushroom disc retains its succulent juiciness inside while the crust turns shatteringly crisp.",
    "tip_kn": "ಹೊರಗೆ ಗರಿಗರಿಯಾಗಿದ್ದರೂ ಒಳಗಿನ ಅಣಬೆ ರಸಭರಿತವಾಗಿ ಉಳಿಯುತ್ತದೆ."
  },
  {
    "id": "milky_32",
    "type": "milky",
    "category": "snack",
    "img": "assets/recipe_pakoda.jpg",
    "title_en": "Indo-Chinese Crispy Milky Mushroom Manchurian Dry",
    "title_kn": "ಗರಿಗರಿ ಹಾಲು ಅಣಬೆ ಮಂಚೂರಿಯನ್ ಡ್ರೈ (Milky Manchurian)",
    "desc_en": "Crispy batter-fried milky mushroom chunks tossed in a sizzling wok with garlic, ginger, green chillies, dark soy sauce, and spring onions.",
    "desc_kn": "ಗರಿಗರಿಯಾಗಿ ಕರಿದ ಹಾಲು ಅಣಬೆಯನ್ನು ಬೆಳ್ಳುಳ್ಳಿ, ಸೋಯಾ ಸಾಸ್ ಮತ್ತು ಸ್ಪ್ರಿಂಗ್ ಆನಿಯನ್ ಜೊತೆ ತೀಕ್ಷ್ಣ ಉರಿಯಲ್ಲಿ ಟಾಸ್ ಮಾಡಿದ ಡ್ರೈ ಮಂಚೂರಿಯನ್.",
    "time_en": "18 Mins",
    "time_kn": "18 ನಿಮಿಷ",
    "calories": "195 kcal",
    "servings_en": "3-4 Servings",
    "servings_kn": "3-4 ಜನರಿಗೆ",
    "tag_en": "Milky • Indo-Chinese Dry",
    "tag_kn": "ಹಾಲು ಅಣಬೆ • ಮಂಚೂರಿಯನ್",
    "ingredients_en": [
      "250g Fresh Milky Mushrooms (bite-sized cubes)",
      "Batter: 3 tbsp Cornstarch, 2 tbsp All-purpose flour, salt, pepper",
      "Wok seasonings: 1 tbsp minced Garlic, 1 tbsp Ginger, 2 Green chillies slit",
      "Sauces: 1 tbsp Soy sauce, 1 tbsp Chilli sauce, 1 tsp Vinegar",
      "Chopped spring onions & toasted sesame"
    ],
    "ingredients_kn": [
      "250 ಗ್ರಾಂ ಹಾಲು ಅಣಬೆ (ಚೌಕ ಚೂರುಗಳು)",
      "ಹಿಟ್ಟು: ಕಾರ್ನ್‌ಫ್ಲೋರ್ ಮತ್ತು ಮೈದಾ ಹಿಟ್ಟು",
      "ಹೆಚ್ಚಿದ ಬೆಳ್ಳುಳ್ಳಿ, ಶುಂಠಿ ಮತ್ತು ಹಸಿಮೆಣಸು",
      "ಸೋಯಾ ಸಾಸ್, ಚಿಲ್ಲಿ ಸಾಸ್, ವಿನೆಗರ್",
      "ಸ್ಪ್ರಿಂಗ್ ಆನಿಯನ್ ಮತ್ತು ಎಳ್ಳು"
    ],
    "instructions_en": [
      "Coat milky mushroom cubes in cornstarch batter and deep fry until crispy golden; drain.",
      "Heat oil in a hot wok on high heat; sauté garlic, ginger, and chillies for 30 seconds.",
      "Add soy sauce, chilli sauce, and vinegar; cook until bubbly.",
      "Toss the fried crispy mushrooms quickly so they stay crunchy.",
      "Garnish with spring onion greens and serve immediately as a party starter!"
    ],
    "instructions_kn": [
      "ಅಣಬೆ ಚೂರುಗಳನ್ನು ಕಾರ್ನ್‌ಫ್ಲೋರ್ ಹಿಟ್ಟಿನಲ್ಲಿ ಅದ್ದಿ ಕಾದ ಎಣ್ಣೆಯಲ್ಲಿ ಗರಿಗರಿಯಾಗಿ ಕರಿದು ತೆಗೆಯಿರಿ.",
      "ಕಾದ ಬಾಣಲೆಯಲ್ಲಿ ಬೆಳ್ಳುಳ್ಳಿ, ಶುಂಠಿ, ಹಸಿಮೆಣಸು, ಸಾಸ್‌ಗಳನ್ನು ಹಾಕಿ ಹುರಿಯಿರಿ.",
      "ಕರಿದ ಅಣಬೆ ಹಾಕಿ ತ್ವರಿತವಾಗಿ ಟಾಸ್ ಮಾಡಿ, ಸ್ಪ್ರಿಂಗ್ ಆನಿಯನ್ ಉದುರಿಸಿ ಬಡಿಸಿ!"
    ],
    "tip_en": "Toss at the very last second over high flame so the batter doesn't turn soggy.",
    "tip_kn": "ತಿನ್ನುವ ಮುನ್ನವೇ ಸಾಸ್‌ನಲ್ಲಿ ಟಾಸ್ ಮಾಡಿದರೆ ಅಣಬೆ ಗರಿಗರಿಯಾಗಿಯೇ ಇರುತ್ತದೆ."
  }
];
