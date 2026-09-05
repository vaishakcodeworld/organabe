/**
 * ORGANIC ANABE (ಆರ್ಗ್ಯಾನಿಕ್ ಅಣಬೆ)
 * 3D Cinematic Scroll-Based Hero Engine
 * Driven by 120-frame high-resolution mushroom sprouting sequence
 * Features: LERP physics, progressive preloading, canvas object-cover scaling,
 * bilingual scrollytelling narrative stages & autoplay preview toggle.
 */

(function () {
  const TOTAL_FRAMES = 120;
  const FRAME_DIR = 'assets/frames/';
  
  const frameImages = new Array(TOTAL_FRAMES);
  let loadedCount = 0;

  // Physics & Progress
  let targetProgress = 0;
  let currentProgress = 0;
  let currentFrameIndex = 0;
  let isAutoPlaying = false;
  let autoPlayRaf = null;

  // DOM Elements
  let trackEl, stickyFrameEl, canvas, ctx;
  let progressBarEl, progressPctEl, autoPlayBtn, autoPlayBtnText, autoPlayIcon;
  let stage1El, stage2El, stage3El, stage4El;

  // Format frame filename: frame_001.webp ... frame_120.webp
  function getFrameSrc(index) {
    const num = String(index + 1).padStart(3, '0');
    return `${FRAME_DIR}frame_${num}.webp`;
  }

  // Draw frame with object-fit: cover logic
  function drawFrame(frameIdx) {
    if (!ctx || !canvas) return;

    // Fallback to nearest loaded frame if current isn't loaded yet
    let img = frameImages[frameIdx];
    if (!img) {
      for (let i = frameIdx - 1; i >= 0; i--) {
        if (frameImages[i] && frameImages[i].complete && frameImages[i].naturalWidth) {
          img = frameImages[i];
          break;
        }
      }
      if (!img && frameImages[0] && frameImages[0].complete && frameImages[0].naturalWidth) {
        img = frameImages[0];
      }
    }

    if (!img || !img.naturalWidth) return;

    const rect = canvas.getBoundingClientRect();
    const cWidth = rect.width;
    const cHeight = rect.height;
    if (cWidth <= 0 || cHeight <= 0) return;

    // Calculate aspect ratio cover math
    const imgAspect = (img.naturalWidth || 960) / (img.naturalHeight || 540);
    const canvasAspect = cWidth / cHeight;

    let drawW, drawH, drawX, drawY;

    if (canvasAspect > imgAspect) {
      drawW = cWidth;
      drawH = cWidth / imgAspect;
      drawX = 0;
      drawY = (cHeight - drawH) / 2;
    } else {
      drawH = cHeight;
      drawW = cHeight * imgAspect;
      drawX = (cWidth - drawW) / 2;
      drawY = 0;
    }

    ctx.clearRect(0, 0, cWidth, cHeight);
    ctx.drawImage(img, drawX, drawY, drawW, drawH);
  }

  // Resize canvas for Retina / High DPI with full bleed cover
  function resizeCanvas() {
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return;
    
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
    
    if (ctx) {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    drawFrame(currentFrameIndex);
  }

  // Preload frames progressively
  function preloadFrames() {
    // 1. Load First Frame with top priority
    const firstImg = new Image();
    firstImg.onload = () => {
      frameImages[0] = firstImg;
      loadedCount++;
      drawFrame(0);
      
      // 2. Load immediate batch (frames 1 to 24)
      loadBatch(1, 25, () => {
        // 3. Progressively load remainder (frames 25 to 119)
        loadBatch(25, TOTAL_FRAMES, null);
      });
    };
    firstImg.src = getFrameSrc(0);

    // If already in browser cache
    if (firstImg.complete && firstImg.naturalWidth) {
      frameImages[0] = firstImg;
      loadedCount++;
      drawFrame(0);
      loadBatch(1, 25, () => {
        loadBatch(25, TOTAL_FRAMES, null);
      });
    }
  }

  function loadBatch(start, end, onComplete) {
    let batchLoaded = 0;
    const batchTotal = end - start;
    if (batchTotal <= 0) {
      if (onComplete) onComplete();
      return;
    }

    for (let i = start; i < end; i++) {
      const img = new Image();
      img.onload = () => {
        frameImages[i] = img;
        loadedCount++;
        batchLoaded++;
        if (batchLoaded >= batchTotal && onComplete) {
          onComplete();
        }
      };
      img.onerror = () => {
        batchLoaded++;
        if (batchLoaded >= batchTotal && onComplete) {
          onComplete();
        }
      };
      img.src = getFrameSrc(i);
      if (img.complete && img.naturalWidth) {
        frameImages[i] = img;
        loadedCount++;
        batchLoaded++;
        if (batchLoaded >= batchTotal && onComplete) {
          onComplete();
        }
      }
    }
  }

  // Update Scrollytelling Stages based on progress (0.0 to 1.0)
  function updateStages(progress) {
    // Stage 1: 0% - 22% (Sprouting from sacred soil)
    const s1Active = progress >= 0 && progress <= 0.22;
    if (stage1El) stage1El.classList.toggle('stage-active', s1Active);

    // Stage 2: 24% - 54% (Oyster and Milky bloom)
    const s2Active = progress > 0.22 && progress <= 0.54;
    if (stage2El) stage2El.classList.toggle('stage-active', s2Active);

    // Stage 3: 56% - 80% (Dawn peak & lab purity)
    const s3Active = progress > 0.54 && progress <= 0.80;
    if (stage3El) stage3El.classList.toggle('stage-active', s3Active);

    // Stage 4: 82% - 1.00 (Hand-picked harvest & order pack)
    const s4Active = progress > 0.80;
    if (stage4El) stage4El.classList.toggle('stage-active', s4Active);

    // Update Progress Bar & Percentage
    const pct = Math.min(100, Math.max(0, Math.round(progress * 100)));
    if (progressBarEl) progressBarEl.style.height = `${pct}%`;
    if (progressPctEl) progressPctEl.textContent = `${pct}%`;
  }

  let hasDrawnInitial = false;

  // Main Animation Loop with LERP
  function tick() {
    if (!isAutoPlaying) {
      // Linear interpolation for buttery smooth scroll inertia
      const diff = targetProgress - currentProgress;
      if (Math.abs(diff) > 0.0005) {
        currentProgress += diff * 0.14;
      } else {
        currentProgress = targetProgress;
      }
    }

    const frame = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.floor(currentProgress * (TOTAL_FRAMES - 1))));
    if (frame !== currentFrameIndex || !hasDrawnInitial) {
      currentFrameIndex = frame;
      if (frameImages[frame] && frameImages[frame].complete && frameImages[frame].naturalWidth) {
        hasDrawnInitial = true;
      }
      drawFrame(currentFrameIndex);
    }

    updateStages(currentProgress);
    requestAnimationFrame(tick);
  }

  // Scroll listener to calculate progress across #hero-scroll-track
  function onScroll() {
    if (isAutoPlaying || !trackEl) return;

    const rect = trackEl.getBoundingClientRect();
    const trackHeight = trackEl.offsetHeight;
    const winHeight = window.innerHeight;
    
    // Total scrollable distance inside track
    const scrollableDistance = trackHeight - winHeight;
    if (scrollableDistance <= 0) return;

    // Progress from 0 (top of hero at top of viewport) to 1 (bottom of hero reached)
    const scrolled = -rect.top;
    const progress = Math.min(1, Math.max(0, scrolled / scrollableDistance));
    targetProgress = progress;
  }

  // Auto-Play toggle function
  function toggleAutoPlay() {
    isAutoPlaying = !isAutoPlaying;

    const currentLang = localStorage.getItem('anabe_lang') || 'en';
    const dict = (window.translations && window.translations[currentLang]) ? window.translations[currentLang] : {};

    if (isAutoPlaying) {
      if (autoPlayBtn) autoPlayBtn.classList.add('playing');
      if (autoPlayBtnText) autoPlayBtnText.textContent = dict.scroll_btn_scrub || (currentLang === 'kn' ? "❚❚ ಸ್ಕ್ರೋಲ್ ಮಾಡಿ" : "❚❚ Scrub Mode");
      if (autoPlayIcon) autoPlayIcon.textContent = "pause";

      let startTime = performance.now();
      const initialProgress = currentProgress >= 0.98 ? 0 : currentProgress;
      const durationMs = 8000 * (1 - initialProgress); // 8 seconds full run

      function stepAutoPlay(time) {
        if (!isAutoPlaying) return;
        const elapsed = time - startTime;
        const fraction = initialProgress + (elapsed / durationMs);

        if (fraction >= 1) {
          currentProgress = 1;
          targetProgress = 1;
          isAutoPlaying = false;
          if (autoPlayBtn) autoPlayBtn.classList.remove('playing');
          if (autoPlayBtnText) autoPlayBtnText.textContent = dict.scroll_btn_autoplay || (currentLang === 'kn' ? "▶ ಸ್ವಯಂಚಾಲಿತ" : "▶ Auto Play");
          if (autoPlayIcon) autoPlayIcon.textContent = "play_arrow";
          return;
        }

        currentProgress = fraction;
        targetProgress = fraction;

        // Also smoothly scroll the window along with autoplay
        if (trackEl) {
          const trackHeight = trackEl.offsetHeight;
          const winHeight = window.innerHeight;
          const targetY = trackEl.offsetTop + fraction * (trackHeight - winHeight);
          window.scrollTo({ top: targetY, behavior: 'instant' });
        }

        autoPlayRaf = requestAnimationFrame(stepAutoPlay);
      }

      autoPlayRaf = requestAnimationFrame(stepAutoPlay);
    } else {
      if (autoPlayRaf) cancelAnimationFrame(autoPlayRaf);
      if (autoPlayBtn) autoPlayBtn.classList.remove('playing');
      if (autoPlayBtnText) autoPlayBtnText.textContent = dict.scroll_btn_autoplay || (currentLang === 'kn' ? "▶ ಸ್ವಯಂಚಾಲಿತ" : "▶ Auto Play");
      if (autoPlayIcon) autoPlayIcon.textContent = "play_arrow";
      onScroll();
    }
  }

  // Initialization function
  function init() {
    trackEl = document.getElementById('hero-scroll-track') || document.getElementById('home') || document.querySelector('.hero-scroll-track');
    stickyFrameEl = document.getElementById('hero-sticky-frame') || document.querySelector('.hero-sticky-frame');
    canvas = document.getElementById('hero-scroll-canvas');

    if (!canvas || !trackEl) {
      console.warn('[Organic Anabe] Scroll hero elements not found.');
      return;
    }

    ctx = canvas.getContext('2d');

    // HUD & Controls
    progressBarEl = document.getElementById('hero-progress-bar');
    progressPctEl = document.getElementById('hero-progress-pct');
    autoPlayBtn = document.getElementById('btn-hero-autoplay');
    autoPlayBtnText = document.getElementById('hero-autoplay-text');
    autoPlayIcon = document.getElementById('hero-autoplay-icon');

    // Stages
    stage1El = document.getElementById('scrolly-stage-1');
    stage2El = document.getElementById('scrolly-stage-2');
    stage3El = document.getElementById('scrolly-stage-3');
    stage4El = document.getElementById('scrolly-stage-4');

    if (autoPlayBtn) {
      autoPlayBtn.addEventListener('click', toggleAutoPlay);
    }

    // Window listeners
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', resizeCanvas, { passive: true });

    // Initial setup
    resizeCanvas();
    preloadFrames();
    onScroll();
    requestAnimationFrame(tick);
    console.log('[Organic Anabe] 3D Scroll Hero initialized successfully with 120 frames.');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
