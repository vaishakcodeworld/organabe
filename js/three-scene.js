/**
 * ORGANIC ANABE (ಆರ್ಗ್ಯಾನಿಕ್ ಅಣಬೆ)
 * Interactive Three.js 3D Hero Scene
 * Stylized Oyster & Milky Mushrooms with Organic Living Animation
 */

(function() {
  const container = document.getElementById('mushroom-canvas-container');
  if (!container) return;

  // Scene, Camera, Renderer
  const scene = new THREE.Scene();
  let width = container.clientWidth || 600;
  let height = container.clientHeight || 450;

  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera.position.set(0, 1.1, 5.2);

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  container.appendChild(renderer.domElement);

  // Lighting Architecture
  const ambientLight = new THREE.AmbientLight(0xfcf8f0, 1.25);
  scene.add(ambientLight);

  const mainSun = new THREE.DirectionalLight(0xfff5e4, 2.2);
  mainSun.position.set(5, 8, 4);
  mainSun.castShadow = true;
  mainSun.shadow.mapSize.width = 1024;
  mainSun.shadow.mapSize.height = 1024;
  scene.add(mainSun);

  const botanicalRim = new THREE.DirectionalLight(0x73a875, 1.3);
  botanicalRim.position.set(-5, 3, -3);
  scene.add(botanicalRim);

  const warmUnderglow = new THREE.PointLight(0xe8c17a, 1.8, 12);
  warmUnderglow.position.set(0, -0.8, 2.2);
  scene.add(warmUnderglow);

  // Master Scene Group
  const sceneGroup = new THREE.Group();
  scene.add(sceneGroup);

  // 1. Organic Forest Soil & Moss Mound
  const soilGeo = new THREE.CylinderGeometry(2.8, 3.2, 0.45, 48);
  const soilMat = new THREE.MeshLambertMaterial({ color: 0x22301c });
  const soil = new THREE.Mesh(soilGeo, soilMat);
  soil.position.y = -1.6;
  soil.receiveShadow = true;
  sceneGroup.add(soil);

  const mossGeo = new THREE.CylinderGeometry(2.82, 2.85, 0.12, 48);
  const mossMat = new THREE.MeshLambertMaterial({ color: 0x365427 });
  const moss = new THREE.Mesh(mossGeo, mossMat);
  moss.position.y = -1.38;
  moss.receiveShadow = true;
  sceneGroup.add(moss);

  // Materials for Botanical Specimens
  const oysterCapMat = new THREE.MeshPhongMaterial({
    color: 0xcfc0ae,
    shininess: 38,
    specular: 0x665544,
    flatShading: false
  });

  const milkyCapMat = new THREE.MeshPhongMaterial({
    color: 0xfcfbfa,
    shininess: 50,
    specular: 0xffffff,
    flatShading: false
  });

  const stemMat = new THREE.MeshLambertMaterial({
    color: 0xeee6d8
  });

  const sporeMat = new THREE.PointsMaterial({
    color: 0xd9b348,
    size: 0.045,
    transparent: true,
    opacity: 0.75
  });

  // Helper 1: Build Oyster Mushroom Cluster (Layered fluted fan shells)
  function createOysterMushroom(scale, posX, posY, posZ, rotY, rotZ) {
    const cluster = new THREE.Group();

    // Curved Stem
    const stemCurve = new THREE.CylinderGeometry(0.085 * scale, 0.14 * scale, 1.15 * scale, 16);
    const stem = new THREE.Mesh(stemCurve, stemMat);
    stem.position.y = 0.58 * scale;
    stem.rotation.z = 0.28;
    stem.castShadow = true;
    stem.receiveShadow = true;
    cluster.add(stem);

    // Layered fan caps
    for (let i = 0; i < 3; i++) {
      const capGeo = new THREE.SphereGeometry(0.58 * scale * (1 - i * 0.18), 24, 18, 0, Math.PI * 2, 0, Math.PI * 0.44);
      capGeo.scale(1.42, 0.36, 1.05);
      const cap = new THREE.Mesh(capGeo, oysterCapMat);
      cap.position.set(0.13 * scale * i, (0.78 + i * 0.32) * scale, 0.05 * i);
      cap.rotation.x = 0.16;
      cap.rotation.z = -0.32 + (i * 0.12);
      cap.castShadow = true;
      cluster.add(cap);
    }

    cluster.position.set(posX, posY, posZ);
    cluster.rotation.y = rotY;
    cluster.rotation.z = rotZ;
    return cluster;
  }

  // Helper 2: Build Milky Mushroom (Plump, velvety porcelain domed cap)
  function createMilkyMushroom(scale, posX, posY, posZ) {
    const mushroom = new THREE.Group();

    // Plump Meaty Stem
    const stemGeo = new THREE.CylinderGeometry(0.19 * scale, 0.28 * scale, 1.45 * scale, 28);
    const stem = new THREE.Mesh(stemGeo, stemMat);
    stem.position.y = 0.72 * scale;
    stem.castShadow = true;
    mushroom.add(stem);

    // Porcelain Cap
    const capGeo = new THREE.SphereGeometry(0.68 * scale, 32, 22, 0, Math.PI * 2, 0, Math.PI * 0.53);
    capGeo.scale(1.12, 0.7, 1.12);
    const cap = new THREE.Mesh(capGeo, milkyCapMat);
    cap.position.y = 1.4 * scale;
    cap.castShadow = true;
    mushroom.add(cap);

    // Fine Under-Gills Disk
    const gillsGeo = new THREE.CylinderGeometry(0.62 * scale, 0.16 * scale, 0.07 * scale, 32);
    const gillsMat = new THREE.MeshLambertMaterial({ color: 0xe5dcce });
    const gills = new THREE.Mesh(gillsGeo, gillsMat);
    gills.position.y = 1.37 * scale;
    mushroom.add(gills);

    mushroom.position.set(posX, posY, posZ);
    return mushroom;
  }

  // Group 1: Oyster Mushrooms Cluster (Left)
  const oysterGroup = new THREE.Group();
  const oyster1 = createOysterMushroom(1.42, -1.05, -1.38, 0.1, 0.45, 0.1);
  const oyster2 = createOysterMushroom(1.05, -1.65, -1.38, -0.4, 0.95, -0.16);
  const oyster3 = createOysterMushroom(0.85, -0.65, -1.38, 0.5, -0.35, 0.22);
  oysterGroup.add(oyster1, oyster2, oyster3);
  sceneGroup.add(oysterGroup);

  // Group 2: Milky Mushrooms Family (Right)
  const milkyGroup = new THREE.Group();
  const milkyBig = createMilkyMushroom(1.48, 0.95, -1.38, 0.1);
  const milkyMedium = createMilkyMushroom(1.02, 1.75, -1.38, -0.32);
  const milkyBaby = createMilkyMushroom(0.66, 0.38, -1.38, 0.72);
  milkyGroup.add(milkyBig, milkyMedium, milkyBaby);
  sceneGroup.add(milkyGroup);

  // Floating Golden Spores
  const sporesCount = 130;
  const sporesGeometry = new THREE.BufferGeometry();
  const sporePositions = new Float32Array(sporesCount * 3);
  for (let i = 0; i < sporesCount * 3; i += 3) {
    sporePositions[i] = (Math.random() - 0.5) * 6;
    sporePositions[i + 1] = Math.random() * 4 - 1.4;
    sporePositions[i + 2] = (Math.random() - 0.5) * 5;
  }
  sporesGeometry.setAttribute('position', new THREE.BufferAttribute(sporePositions, 3));
  const sporeParticles = new THREE.Points(sporesGeometry, sporeMat);
  scene.add(sporeParticles);

  // Camera Target States for Specimen Focus
  const cameraTargets = {
    both: { x: 0, y: 1.1, z: 5.2, lookX: 0, lookY: 0 },
    oyster: { x: -1.1, y: 0.95, z: 3.6, lookX: -1.0, lookY: 0 },
    milky: { x: 1.1, y: 0.95, z: 3.6, lookX: 1.0, lookY: 0 }
  };
  let currentTarget = cameraTargets.both;

  // Interaction State
  let targetRotationY = 0;
  let targetRotationX = 0;
  let isDragging = false;
  let previousMousePosition = { x: 0, y: 0 };

  // Mouse Move tracking for subtle perspective parallax
  window.addEventListener('mousemove', (e) => {
    if (isDragging) return;
    const normX = (e.clientX / window.innerWidth) * 2 - 1;
    const normY = -(e.clientY / window.innerHeight) * 2 + 1;
    targetRotationY = normX * 0.35;
    targetRotationX = -normY * 0.15;
  });

  // Touch & Drag Controls for 3D Stage
  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    previousMousePosition = { x: e.clientX, y: e.clientY };
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  container.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - previousMousePosition.x;
    const deltaY = e.clientY - previousMousePosition.y;
    targetRotationY += deltaX * 0.008;
    targetRotationX += deltaY * 0.005;
    previousMousePosition = { x: e.clientX, y: e.clientY };
  });

  // Touch handlers for mobile
  container.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      isDragging = true;
      previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  }, { passive: true });

  container.addEventListener('touchmove', (e) => {
    if (!isDragging || e.touches.length !== 1) return;
    const deltaX = e.touches[0].clientX - previousMousePosition.x;
    const deltaY = e.touches[0].clientY - previousMousePosition.y;
    targetRotationY += deltaX * 0.01;
    targetRotationX += deltaY * 0.006;
    previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }, { passive: true });

  container.addEventListener('touchend', () => {
    isDragging = false;
  });

  // Resize Handler
  function onResize() {
    width = container.clientWidth || 600;
    height = container.clientHeight || 450;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }
  window.addEventListener('resize', onResize);

  // Public Focus Method for Specimen Switching
  window.focusMushroomSpecimen = function(mode) {
    if (cameraTargets[mode]) {
      currentTarget = cameraTargets[mode];
    }
  };

  // Clock & Animation Loop
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();

    // Lerp Scene Rotation
    sceneGroup.rotation.y += (targetRotationY - sceneGroup.rotation.y) * 0.06;
    sceneGroup.rotation.x += (targetRotationX - sceneGroup.rotation.x) * 0.06;

    // Smooth Camera Transition toward Target
    camera.position.x += (currentTarget.x - camera.position.x) * 0.05;
    camera.position.y += (currentTarget.y - camera.position.y) * 0.05;
    camera.position.z += (currentTarget.z - camera.position.z) * 0.05;

    // Gentle Organic Floating & Breathing
    sceneGroup.position.y = Math.sin(elapsedTime * 1.6) * 0.06;

    // Oyster Subtle Petal Swaying
    oyster1.rotation.z = 0.1 + Math.sin(elapsedTime * 1.8) * 0.035;
    oyster2.rotation.z = -0.16 + Math.cos(elapsedTime * 1.5) * 0.025;

    // Milky Velvet Pulse
    const pulse = 1.0 + Math.sin(elapsedTime * 2.2) * 0.012;
    milkyBig.scale.set(pulse, 1.0, pulse);

    // Spores Upward Drift
    const positions = sporesGeometry.attributes.position.array;
    for (let i = 1; i < sporesCount * 3; i += 3) {
      positions[i] += 0.0055;
      if (positions[i] > 3.2) {
        positions[i] = -1.4;
      }
    }
    sporesGeometry.attributes.position.needsUpdate = true;

    renderer.render(scene, camera);
  }

  animate();
})();
