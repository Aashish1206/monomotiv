/**
 * MONOMOTIV — CORE CLIENT APPLICATION ENGINE (BHARAT / INDIAN FLEET EDITION)
 * 
 * Minimalist monochrome & dark aesthetic car rental experience.
 * Features:
 * - 120Hz smooth kinetic typography scroll controller with 2-layer displacement
 * - 100% Indian vehicle specimen registry (Economy, SUV, Luxury, EV)
 * - All tariffs, protection plans, add-ons, and fees denominated in Indian Rupees (₹)
 * - 3 Dedicated Full-Page SPA Views with natural unhindered window scrolling:
 *     1. view-fleet: Fleet registry with kinetic hero
 *     2. view-configurator: Full-page date, protection & add-on configurator
 *     3. view-confirmation: Luxury digital boarding pass & dispatch voucher
 * - Real-time invoice computation with animated tabular INR counter.
 * - Printable luxury voucher ticket with barcode and perforated design.
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. INDIAN VEHICLE REGISTRY DATASET (12 SPECIMENS: ECONOMY, SUV, LUXURY, EV)
     ========================================================================== */
  const FLEET_REGISTRY = [
    // --- 1. ECONOMY ---
    {
      id: 'spec-01-altroz',
      make: 'Tata',
      model: 'Altroz Dark Edition (i-Turbo Spec)',
      category: 'economy',
      rate: 2800, // ₹2,800/day
      mileage: '1,800 km (Odometer)',
      allowance: '250 km/day incl.',
      colour: {
        name: 'Cosmo Dark',
        hex: '#0A0A0C',
        finish: 'Deep Obsidian Metallic'
      },
      specs: {
        accel: '10.8s (0-100)',
        topSpeed: '170 km/h',
        power: '110 PS',
        drivetrain: '5-Speed Manual FWD',
        powertrain: '1.2L Turbocharged Revotron',
        seats: '5 City Touring'
      },
      description: '5-star GNCAP certified safety architecture. Laser-cut aerodynamic contours, sports-tuned i-Turbo delivery, and Harman acoustic audio.'
    },
    {
      id: 'spec-02-fronx',
      make: 'Maruti Suzuki',
      model: 'Fronx (Velocity Turbo Black)',
      category: 'economy',
      rate: 3200, // ₹3,200/day
      mileage: '2,100 km (Odometer)',
      allowance: '250 km/day incl.',
      colour: {
        name: 'Bluish Black',
        hex: '#08080B',
        finish: 'Dual-Tone Obsidian'
      },
      specs: {
        accel: '9.9s (0-100)',
        topSpeed: '175 km/h',
        power: '100 PS',
        drivetrain: '6-Speed Paddle AT',
        powertrain: '1.0L K-Series Boosterjet Turbo',
        seats: '5 Urban Crossover'
      },
      description: 'Direct-injection Boosterjet turbo punch with head-up display telemetry, 360-degree precision cameras, and agile metropolitan responsiveness.'
    },
    {
      id: 'spec-03-i20',
      make: 'Hyundai',
      model: 'i20 N-Line (Titan Black Spec)',
      category: 'economy',
      rate: 3400, // ₹3,400/day
      mileage: '2,600 km (Odometer)',
      allowance: '250 km/day incl.',
      colour: {
        name: 'Abyss Black',
        hex: '#0B0B0E',
        finish: 'High-Gloss Obsidian Tint'
      },
      specs: {
        accel: '9.4s (0-100)',
        topSpeed: '180 km/h',
        power: '120 PS',
        drivetrain: '7-Speed Dual-Clutch DCT',
        powertrain: '1.0L Turbo GDi Petrol',
        seats: '5 Hatch Cockpit'
      },
      description: 'Motorsport-calibrated suspension stiffness, twin-tip throaty exhaust notes, four-wheel disc brakes, and race-inspired paddle shifters.'
    },

    // --- 2. SUV ---
    {
      id: 'spec-04-thar',
      make: 'Mahindra',
      model: 'Thar Roxx 4x4 (Obsidian Spec)',
      category: 'suv',
      rate: 6500, // ₹6,500/day
      mileage: '2,400 km (Odometer)',
      allowance: '250 km/day incl.',
      colour: {
        name: 'Obsidian Matte',
        hex: '#0A0A0C',
        finish: 'Ultra-Matte Armor Coat'
      },
      specs: {
        accel: '8.4s (0-100)',
        topSpeed: '160 km/h',
        power: '177 bhp',
        drivetrain: '4x4 Electronic Locking Diff',
        powertrain: '2.0L mStallion Turbo Petrol',
        seats: '5 Off-Road Cabin'
      },
      description: 'Legendary Indian terrain dominance with electronic rear locking differentials, Watts penta-link suspension, and matte graphite styling.'
    },
    {
      id: 'spec-05-scorpio',
      make: 'Mahindra',
      model: 'Scorpio-N (Black Edition Z8L)',
      category: 'suv',
      rate: 6800, // ₹6,800/day
      mileage: '3,850 km (Odometer)',
      allowance: '250 km/day incl.',
      colour: {
        name: 'Napoli Black',
        hex: '#0B0B0E',
        finish: 'Gloss Obsidian Coat'
      },
      specs: {
        accel: '9.6s (0-100)',
        topSpeed: '175 km/h',
        power: '175 PS',
        drivetrain: '4XPLOR Intelligent Terrain',
        powertrain: '2.2L mHawk High-Output Diesel',
        seats: '7 All-Terrain Spec'
      },
      description: 'Robust body-on-frame architecture paired with mechanical locking differentials, 400 Nm of low-end torque, and Sony 12-channel audio.'
    },
    {
      id: 'spec-06-gurkha',
      make: 'Force',
      model: 'Gurkha 4x4 (Monolith Spec)',
      category: 'suv',
      rate: 5900, // ₹5,900/day
      mileage: '1,150 km (Odometer)',
      allowance: '200 km/day incl.',
      colour: {
        name: 'Gunmetal Basalt',
        hex: '#141418',
        finish: 'Heavy Textured Armor'
      },
      specs: {
        accel: '12.4s (0-100)',
        topSpeed: '145 km/h',
        power: '140 PS',
        drivetrain: 'Front & Rear Mechanical Diff Locks',
        powertrain: '2.6L Mercedes-Derived FM 2.6 CR',
        seats: '4 Expedition Spec'
      },
      description: 'Uncompromising Himalayan expedition instrument. Factory snorkel with 700mm water-wading depth and independent manual locking differentials.'
    },

    // --- 3. LUXURY ---
    {
      id: 'spec-07-safari',
      make: 'Tata',
      model: 'Safari Dark Edition (Stealth Spec)',
      category: 'luxury',
      rate: 7200, // ₹7,200/day
      mileage: '4,100 km (Odometer)',
      allowance: '250 km/day incl.',
      colour: {
        name: 'Oberon Black',
        hex: '#08080A',
        finish: 'Deep Charcoal Metallic'
      },
      specs: {
        accel: '10.2s (0-100)',
        topSpeed: '185 km/h',
        power: '170 PS',
        drivetrain: 'Front-Wheel Drive Terrain ESP',
        powertrain: '2.0L Kryotec Turbo Diesel',
        seats: '6 Captain Lounge'
      },
      description: 'Commanding flagship executive presence with ventilated Nappa leather captain chairs, dual-zone air purification, and Level 2 ADAS active safety.'
    },
    {
      id: 'spec-08-xuv700',
      make: 'Mahindra',
      model: 'XUV700 (Midnight Edition AX7L)',
      category: 'luxury',
      rate: 7500, // ₹7,500/day
      mileage: '5,200 km (Odometer)',
      allowance: '250 km/day incl.',
      colour: {
        name: 'Midnight Black',
        hex: '#0C0C10',
        finish: 'Deep Metallic Tint'
      },
      specs: {
        accel: '8.1s (0-100)',
        topSpeed: '200 km/h',
        power: '200 PS',
        drivetrain: 'BorgWarner Intelligent AWD',
        powertrain: '2.0L TGDi mStallion Turbo',
        seats: '7 Luxury Spec'
      },
      description: '200 horsepower turbocharged benchmark. Frequency selective damping, skyroof glass canopy, and Level 2 autonomous pilot assist.'
    },
    {
      id: 'spec-09-harrier',
      make: 'Tata',
      model: 'Harrier Dark Edition (Stealth R-Spec)',
      category: 'luxury',
      rate: 6400, // ₹6,400/day
      mileage: '3,200 km (Odometer)',
      allowance: '250 km/day incl.',
      colour: {
        name: 'Blackstone Matte',
        hex: '#111114',
        finish: 'Satin Ceramic Finish'
      },
      specs: {
        accel: '9.8s (0-100)',
        topSpeed: '190 km/h',
        power: '170 PS',
        drivetrain: 'Land Rover D8-Derived Monocoque',
        powertrain: '2.0L Turbo Diesel 350 Nm',
        seats: '5 Pilot Cockpit'
      },
      description: 'Engineered on the Land Rover-derived OMEGARC platform. Ultra-rigid torsional chassis with electronic parking brake and panoramic skyroof.'
    },

    // --- 4. EV (ELECTRIC) ---
    {
      id: 'spec-10-nexon-ev',
      make: 'Tata',
      model: 'Nexon EV (Dark Max Spec)',
      category: 'ev',
      rate: 4500, // ₹4,500/day
      mileage: '1,920 km (Odometer)',
      allowance: '300 km/day incl.',
      colour: {
        name: 'Midnight Onyx',
        hex: '#09090C',
        finish: 'Matte Shadow Coat'
      },
      specs: {
        accel: '8.9s (0-100)',
        topSpeed: '465 km range',
        power: '145 PS',
        drivetrain: 'Front Multi-Mode Regen',
        powertrain: '40.5 kWh High-Density LFP',
        seats: '5 City Touring'
      },
      description: 'India’s most celebrated electric touring specimen. Multi-mode regenerative paddle braking with V2V bidirectional emergency power.'
    },
    {
      id: 'spec-11-curvv-ev',
      make: 'Tata',
      model: 'Curvv EV (Dark Coupe Spec)',
      category: 'ev',
      rate: 5200, // ₹5,200/day
      mileage: '850 km (Odometer)',
      allowance: '300 km/day incl.',
      colour: {
        name: 'Graphite Eclipse',
        hex: '#0E0E12',
        finish: 'Aero-Lustre Finish'
      },
      specs: {
        accel: '8.6s (0-100)',
        topSpeed: '585 km range',
        power: '167 PS',
        drivetrain: 'Acti.ev Architecture FWD',
        powertrain: '55 kWh Liquid-Cooled Prism Cell',
        seats: '5 Aerodynamic Cabin'
      },
      description: 'Aerodynamic coupe silhouette with 1.2C ultra-fast charging capability (150 km range in 15 mins) and gesture-controlled smart tailgate.'
    },
    {
      id: 'spec-12-xuv400',
      make: 'Mahindra',
      model: 'XUV400 EV (EL Pro Dark Spec)',
      category: 'ev',
      rate: 4400, // ₹4,400/day
      mileage: '2,100 km (Odometer)',
      allowance: '300 km/day incl.',
      colour: {
        name: 'Infinity Black',
        hex: '#0A0A0E',
        finish: 'Obsidian Copper Accents'
      },
      specs: {
        accel: '8.3s (0-100)',
        topSpeed: '456 km range',
        power: '150 PS',
        drivetrain: 'Single-Pedal Pure Drive',
        powertrain: '39.4 kWh High-Density Lithium-Ion',
        seats: '5 Electric Touring'
      },
      description: 'Instantaneous 310 Nm torque delivery catapulting from 0 to 100 in 8.3 seconds. Dual 10.25-inch connected screens and wireless smart charging.'
    }
  ];

  /* ==========================================================================
     2. GLOBAL APPLICATION STATE (IN INDIAN RUPEES)
     ========================================================================== */
  const AppState = {
    selectedCarId: 'spec-04-thar',
    currentFilter: 'all',
    currentView: 'view-fleet', // 'view-fleet', 'view-configurator', 'view-confirmation'
    pickupDate: null,
    returnDate: null,
    rentalDays: 3,
    insuranceTier: 'standard', // 'standard' (0), 'comprehensive' (1200), 'elite' (2800)
    insuranceRate: 0,
    addons: {
      driver: false, // ₹600/day
      miles: false,  // ₹900/day
      carbon: false  // ₹350 flat
    },
    fixedServiceFee: 850.00, // ₹850 flat sanitization & dispatch fee
    taxRate: 0.18,          // 18% GST (Central & State Transport Tax)
    bookingReference: '',
    pilotUser: null         // Persisted authenticated operator profile
  };

  /* Helper to format Currency in INR (₹) */
  function formatINR(number) {
    return '₹' + Number(number).toLocaleString('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }

  function formatINRSpan(number) {
    return '₹' + Number(number).toLocaleString('en-IN');
  }

  /* ==========================================================================
     3. DOM CACHED REFERENCES
     ========================================================================== */
  const DOM = {
    // 2-Layer Kinetic Typography Layers
    heroLayerSolid: document.getElementById('hero-layer-solid'),
    heroLayerGhost: document.getElementById('hero-layer-ghost'),

    // Fleet Grid & Filters
    fleetGrid: document.getElementById('fleet-grid'),
    filterPills: document.querySelectorAll('.filter-pill'),
    emptyState: document.getElementById('fleet-empty-state'),
    resetFilterBtn: document.getElementById('reset-filter-btn'),

    // Category Counts
    countAll: document.getElementById('count-all'),
    countEconomy: document.getElementById('count-economy'),
    countSuv: document.getElementById('count-suv'),
    countLuxury: document.getElementById('count-luxury'),
    countEv: document.getElementById('count-ev'),

    // Header Quick Info & Navigation
    brandLogoBtn: document.getElementById('brand-logo-btn'),
    headerCartLabel: document.getElementById('header-cart-label'),
    headerCartPrice: document.getElementById('header-cart-price'),
    quickCartTrigger: document.getElementById('quick-cart-trigger'),
    headerConfigureBtn: document.getElementById('header-configure-btn'),

    // Dedicated Page 2 (Configurator) Elements
    engineCarMake: document.getElementById('engine-car-make'),
    engineCarId: document.getElementById('engine-car-id'),
    engineCarCategory: document.getElementById('engine-car-category'),
    engineCarName: document.getElementById('engine-car-name'),
    engineCarRate: document.getElementById('engine-car-rate'),
    engineCarMileage: document.getElementById('engine-car-mileage'),
    engineCarColour: document.getElementById('engine-car-colour'),
    engineCarColourSwatch: document.getElementById('engine-car-colour-swatch'),
    engineCarPower: document.getElementById('engine-car-power'),
    engineCarDrivetrain: document.getElementById('engine-car-drivetrain'),

    // Date Range Controls
    pickupInput: document.getElementById('pickup-date'),
    returnInput: document.getElementById('return-date'),
    displayDays: document.getElementById('display-rental-days'),
    displayDaysLabel: document.getElementById('display-rental-days-label'),
    presetPills: document.querySelectorAll('.preset-pill'),
    dateValidationAlert: document.getElementById('date-validation-alert'),
    dateValidationText: document.getElementById('date-validation-text'),

    // Protection Tiers & Add-ons
    insuranceCards: document.querySelectorAll('.insurance-card'),
    addonDriver: document.getElementById('addon-driver'),
    addonMiles: document.getElementById('addon-miles'),
    addonCarbon: document.getElementById('addon-carbon'),

    // Invoice Breakdown in INR
    invoiceBaseLabel: document.getElementById('invoice-base-label'),
    invoiceBaseTotal: document.getElementById('invoice-base-total'),
    invoiceProtectionLabel: document.getElementById('invoice-protection-label'),
    invoiceProtectionTotal: document.getElementById('invoice-protection-total'),
    invoiceAddonsLabel: document.getElementById('invoice-addons-label'),
    invoiceAddonsTotal: document.getElementById('invoice-addons-total'),
    invoiceFeeTotal: document.getElementById('invoice-fee-total'),
    invoiceTaxTotal: document.getElementById('invoice-tax-total'),
    invoiceGrandTotal: document.getElementById('invoice-grand-total'),
    reserveBtn: document.getElementById('reserve-btn'),

    // Page 2 Specimen Quick Digest
    ledgerCarMake: document.getElementById('ledger-car-make'),
    ledgerCarName: document.getElementById('ledger-car-name'),
    ledgerCarCategory: document.getElementById('ledger-car-category'),
    ledgerCarRate: document.getElementById('ledger-car-rate'),
    ledgerCarScheduleSummary: document.getElementById('ledger-car-schedule-summary'),

    // Sticky Bottom Bar (Page 1)
    stickyBar: document.getElementById('sticky-bottom-bar'),
    stickyCarInitials: document.getElementById('sticky-car-initials'),
    stickyCarTitle: document.getElementById('sticky-car-title'),
    stickyCarPricing: document.getElementById('sticky-car-pricing'),
    stickyGrandTotal: document.getElementById('sticky-grand-total'),
    stickyProceedBtn: document.getElementById('sticky-proceed-btn'),

    // Dedicated Page 3 (Confirmation Voucher) Elements
    confirmationRefId: document.getElementById('confirmation-ref-id'),
    copyRefBtn: document.getElementById('copy-ref-btn'),
    receiptCarName: document.getElementById('receipt-car-name'),
    receiptCarSpecs: document.getElementById('receipt-car-specs'),
    receiptPickup: document.getElementById('receipt-pickup'),
    receiptReturn: document.getElementById('receipt-return'),
    receiptDays: document.getElementById('receipt-days'),
    receiptProtection: document.getElementById('receipt-protection'),
    receiptAddons: document.getElementById('receipt-addons'),
    receiptBaseAmount: document.getElementById('receipt-base-amount'),
    receiptTaxAmount: document.getElementById('receipt-tax-amount'),
    receiptGrandTotal: document.getElementById('receipt-grand-total'),
    receiptTokenStub: document.getElementById('receipt-token-stub'),
    modalPrintBtn: document.getElementById('modal-print-btn'),
    newReservationBtn: document.getElementById('new-reservation-btn'),

    // Spec Inspection Modal
    specModal: document.getElementById('spec-modal'),
    specModalPanel: document.getElementById('spec-modal-panel'),
    specModalClose: document.getElementById('spec-modal-close'),
    specModalBadge: document.getElementById('spec-modal-badge'),
    specModalMake: document.getElementById('spec-modal-make'),
    specModalTitle: document.getElementById('spec-modal-title'),
    specModalRate: document.getElementById('spec-modal-rate'),
    specModalSwatch: document.getElementById('spec-modal-swatch'),
    specModalColour: document.getElementById('spec-modal-colour'),
    specModalMileage: document.getElementById('spec-modal-mileage'),
    specModalAllowance: document.getElementById('spec-modal-allowance'),
    specModalDesc: document.getElementById('spec-modal-desc'),
    specModalGrid: document.getElementById('spec-modal-grid'),
    specModalProceedBtn: document.getElementById('spec-modal-proceed-btn'),

    // Toast Container & Global Reset
    toastContainer: document.getElementById('toast-container'),
    footerResetAll: document.getElementById('footer-reset-all'),

    // Dedicated Page 4 (Login / Pilot Access) Elements
    openLoginBtn: document.getElementById('open-login-btn'),
    pilotSessionStatus: document.getElementById('pilot-session-status'),
    pilotAuthForm: document.getElementById('pilot-auth-form'),
    authEmail: document.getElementById('auth-email'),
    authPassword: document.getElementById('auth-password'),
    authName: document.getElementById('auth-name'),
    authAlert: document.getElementById('auth-alert'),
    authSubmitBtn: document.getElementById('auth-submit-btn'),
    authSubmitText: document.getElementById('auth-submit-text'),
    tabLogin: document.getElementById('tab-login'),
    tabRegister: document.getElementById('tab-register'),
    enrollmentNameGroup: document.getElementById('enrollment-name-group'),
    togglePasskeyVisibility: document.getElementById('toggle-passkey-visibility'),
    authForgotBtn: document.getElementById('auth-forgot-btn'),
    authPersist: document.getElementById('auth-persist')
  };

  /* ==========================================================================
     4. VIEW ROUTER (4 DEDICATED FULL-PAGE VIEWS WITH BROWSER HISTORY SUPPORT)
     ========================================================================== */
  const VIEW_HASH_MAP = {
    'view-fleet': '#fleet',
    'view-configurator': '#configure',
    'view-confirmation': '#voucher',
    'view-login': '#login'
  };

  const HASH_VIEW_MAP = {
    '#fleet': 'view-fleet',
    '#configure': 'view-configurator',
    '#voucher': 'view-confirmation',
    '#login': 'view-login'
  };

  function showView(viewId, updateHistory = true) {
    document.querySelectorAll('.app-view').forEach(view => {
      view.classList.add('hidden');
      view.classList.remove('active');
    });

    const target = document.getElementById(viewId);
    if (target) {
      target.classList.remove('hidden');
      target.classList.add('active');
      AppState.currentView = viewId;
      window.scrollTo({ top: 0, behavior: 'smooth' });

      if (viewId === 'view-confirmation') {
        syncVoucherData();
      }

      // Synchronize browser history / URL hash without page reload
      if (updateHistory && VIEW_HASH_MAP[viewId]) {
        const hash = VIEW_HASH_MAP[viewId];
        if (window.location.hash !== hash) {
          try {
            history.pushState({ view: viewId }, '', hash);
          } catch (_) {
            window.location.hash = hash;
          }
        }
      }
    }
  }

  /* ==========================================================================
     5. KINETIC TYPOGRAPHY SCROLL ENGINE (2 LAYERS: SOLID CORE & GHOST SHADOW)
     ========================================================================== */
  let scrollTargetY = 0;
  let scrollCurrentY = 0;
  let isKineticRunning = false;
  let inspectingCarId = null;

  function updateKineticTypography() {
    scrollCurrentY += (scrollTargetY - scrollCurrentY) * 0.1;

    if (DOM.heroLayerSolid && DOM.heroLayerGhost) {
      // Main text "monomotiv" floats upward smoothly
      const solidOffsetY = -scrollCurrentY * 0.24;
      // Ghost shadow drifts rightward smoothly
      const ghostOffsetX = scrollCurrentY * 0.38;

      DOM.heroLayerSolid.style.transform = `translate3d(0, ${solidOffsetY.toFixed(2)}px, 0)`;
      DOM.heroLayerGhost.style.transform = `translate3d(${ghostOffsetX.toFixed(2)}px, 0, 0)`;
    }

    if (Math.abs(scrollTargetY - scrollCurrentY) > 0.05) {
      requestAnimationFrame(updateKineticTypography);
    } else {
      scrollCurrentY = scrollTargetY;
      if (DOM.heroLayerSolid && DOM.heroLayerGhost) {
        DOM.heroLayerSolid.style.transform = `translate3d(0, ${(-scrollCurrentY * 0.24).toFixed(2)}px, 0)`;
        DOM.heroLayerGhost.style.transform = `translate3d(${(scrollCurrentY * 0.38).toFixed(2)}px, 0, 0)`;
      }
      isKineticRunning = false;
    }
  }

  function handleScroll() {
    scrollTargetY = window.scrollY || window.pageYOffset;
    if (!isKineticRunning) {
      isKineticRunning = true;
      requestAnimationFrame(updateKineticTypography);
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  /* ==========================================================================
     6. VEHICLE REGISTRY RENDERING (PURE SPECIFICATIONS IN RUPEES, NO IMAGES)
     ========================================================================== */
  function getSelectedCar() {
    return FLEET_REGISTRY.find(car => car.id === AppState.selectedCarId) || FLEET_REGISTRY[3];
  }

  function renderFleetGrid() {
    if (!DOM.fleetGrid) return;

    const filtered = FLEET_REGISTRY.filter(car => {
      if (AppState.currentFilter === 'all') return true;
      return car.category.toLowerCase() === AppState.currentFilter.toLowerCase();
    });

    if (filtered.length === 0) {
      DOM.fleetGrid.innerHTML = '';
      if (DOM.emptyState) DOM.emptyState.classList.remove('hidden');
      return;
    }

    if (DOM.emptyState) DOM.emptyState.classList.add('hidden');

    DOM.fleetGrid.innerHTML = filtered.map(car => {
      const isSelected = car.id === AppState.selectedCarId;

      return `
        <article class="specimen-card ${isSelected ? 'active-selected' : ''}" data-car-id="${car.id}">
          
          <!-- Card Header: Make, Model, Classification & Day Rate in Rupees -->
          <div>
            <div class="flex items-center justify-between gap-3 mb-2 font-mono text-xs">
              <div class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full dot-circle ${isSelected ? 'bg-white' : 'bg-emerald-400'}"></span>
                <span class="uppercase tracking-widest text-muted font-bold">${car.make}</span>
                <span class="text-muted/40">•</span>
                <span class="text-[10px] uppercase tracking-wider text-muted">${car.category}</span>
              </div>
              <span class="text-[10px] font-mono text-muted/60 uppercase">CHASSIS #${car.id.toUpperCase()}</span>
            </div>

            <h3 class="text-2xl font-extrabold text-white tracking-tight mb-3">
              ${car.model}
            </h3>

            <!-- Colour & Mileage Strip -->
            <div class="flex flex-wrap items-center gap-2 mb-4">
              <div class="color-swatch-chip">
                <span class="color-dot" style="background-color: ${car.colour.hex};"></span>
                <span class="text-offwhite text-[11px] font-medium">${car.colour.name}</span>
                <span class="text-muted text-[10px]">(${car.colour.finish})</span>
              </div>

              <div class="px-2.5 py-0.5 rounded bg-surface-subtle border border-subtle font-mono text-[11px] text-muted">
                <span>ODOMETER: <strong class="text-offwhite">${car.mileage.split(' ')[0]}</strong></span>
              </div>
            </div>
          </div>

          <!-- Specs Matrix (0-100 Accel, Range/Top Speed, Power, Drivetrain) -->
          <div class="spec-matrix-grid">
            <div class="spec-cell">
              <span class="spec-cell-label">0-100 Accel</span>
              <span class="spec-cell-val tabular-nums">${car.specs.accel.split(' ')[0]}</span>
            </div>
            <div class="spec-cell">
              <span class="spec-cell-label">Speed / Range</span>
              <span class="spec-cell-val tabular-nums">${car.specs.topSpeed}</span>
            </div>
            <div class="spec-cell">
              <span class="spec-cell-label">Output</span>
              <span class="spec-cell-val tabular-nums">${car.specs.power}</span>
            </div>
            <div class="spec-cell">
              <span class="spec-cell-label">Drivetrain</span>
              <span class="spec-cell-val text-[11px] truncate" title="${car.specs.drivetrain}">${car.specs.drivetrain.split(' ')[0]}</span>
            </div>
          </div>

          <!-- Card Bottom Action & Pricing Row (in ₹) -->
          <div class="pt-4 border-t border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span class="text-[10px] font-mono uppercase text-muted block">Per-Diem Rate</span>
              <div class="flex items-baseline gap-1">
                <span class="text-2xl font-bold font-mono text-white tabular-nums">${formatINRSpan(car.rate)}</span>
                <span class="text-xs font-mono text-muted">/ day</span>
              </div>
            </div>

            <div class="flex items-center gap-2">
              <button type="button" class="spec-inspect-btn" data-inspect-id="${car.id}" aria-label="Inspect ${car.make} ${car.model} specifications">
                <span>Specs</span>
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </button>

              <button type="button" class="spec-select-btn cursor-pointer" data-proceed-id="${car.id}" aria-label="Select and proceed with ${car.make} ${car.model}">
                <span>Proceed →</span>
              </button>
            </div>
          </div>

        </article>
      `;
    }).join('');

    updateFilterCounts();
  }

  function updateFilterCounts() {
    const counts = {
      all: FLEET_REGISTRY.length,
      economy: FLEET_REGISTRY.filter(c => c.category === 'economy').length,
      suv: FLEET_REGISTRY.filter(c => c.category === 'suv').length,
      luxury: FLEET_REGISTRY.filter(c => c.category === 'luxury').length,
      ev: FLEET_REGISTRY.filter(c => c.category === 'ev').length
    };

    if (DOM.countAll) DOM.countAll.textContent = counts.all;
    if (DOM.countEconomy) DOM.countEconomy.textContent = counts.economy;
    if (DOM.countSuv) DOM.countSuv.textContent = counts.suv;
    if (DOM.countLuxury) DOM.countLuxury.textContent = counts.luxury;
    if (DOM.countEv) DOM.countEv.textContent = counts.ev;
  }

  /* ==========================================================================
     7. VEHICLE SELECTION & CONFIGURATOR SYNCHRONIZATION
     ========================================================================== */
  function selectVehicle(carId, andOpenConfigurator = false) {
    const car = FLEET_REGISTRY.find(c => c.id === carId);
    if (!car) return;

    AppState.selectedCarId = carId;

    // Update active highlight in fleet cards
    document.querySelectorAll('.specimen-card').forEach(card => {
      const isMatch = card.getAttribute('data-car-id') === carId;
      card.classList.toggle('active-selected', isMatch);
    });

    // Populate Page 2 (Configurator) with Selected Specimen Details
    if (DOM.engineCarMake) DOM.engineCarMake.textContent = car.make.toUpperCase();
    if (DOM.engineCarId) DOM.engineCarId.textContent = `SPEC.${car.id.replace('spec-', '').toUpperCase()} // #${car.id.toUpperCase()}`;
    if (DOM.engineCarCategory) DOM.engineCarCategory.textContent = car.category.toUpperCase();
    if (DOM.engineCarName) DOM.engineCarName.textContent = car.model;
    if (DOM.engineCarRate) DOM.engineCarRate.textContent = formatINRSpan(car.rate);
    if (DOM.engineCarMileage) DOM.engineCarMileage.textContent = car.mileage;
    if (DOM.engineCarColour) DOM.engineCarColour.textContent = car.colour.name;
    if (DOM.engineCarColourSwatch) DOM.engineCarColourSwatch.style.backgroundColor = car.colour.hex;
    if (DOM.engineCarPower) DOM.engineCarPower.textContent = car.specs.power;
    if (DOM.engineCarDrivetrain) DOM.engineCarDrivetrain.textContent = car.specs.drivetrain;

    // Populate Page 2 Right Column Specimen Quick Digest
    if (DOM.ledgerCarMake) DOM.ledgerCarMake.textContent = car.make.toUpperCase();
    if (DOM.ledgerCarName) DOM.ledgerCarName.textContent = car.model;
    if (DOM.ledgerCarCategory) DOM.ledgerCarCategory.textContent = car.category.toUpperCase();
    if (DOM.ledgerCarRate) DOM.ledgerCarRate.textContent = formatINRSpan(car.rate);

    // Keep Page 3 Voucher Preview in sync
    if (DOM.receiptCarName) DOM.receiptCarName.textContent = `${car.make} ${car.model}`;
    if (DOM.receiptCarSpecs) {
      DOM.receiptCarSpecs.textContent = `${car.colour.name.toUpperCase()} • ${car.mileage.toUpperCase()} • ${car.specs.power.toUpperCase()}`;
    }

    calculateLiveInvoice();

    if (andOpenConfigurator) {
      showView('view-configurator');
      showToast(`Selected ${car.make} ${car.model} — Ready for schedule & protection`);
    }
  }

  /* ==========================================================================
     8. DATE PICKER & VALIDATION ENGINE
     ========================================================================== */
  function formatDateForInput(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  function initializeDateControls() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const defaultReturn = new Date(tomorrow);
    defaultReturn.setDate(defaultReturn.getDate() + AppState.rentalDays);

    AppState.pickupDate = tomorrow;
    AppState.returnDate = defaultReturn;

    if (DOM.pickupInput) {
      DOM.pickupInput.min = formatDateForInput(today);
      DOM.pickupInput.value = formatDateForInput(tomorrow);
    }

    if (DOM.returnInput) {
      DOM.returnInput.min = formatDateForInput(tomorrow);
      DOM.returnInput.value = formatDateForInput(defaultReturn);
    }

    updateDurationDisplay();

    if (DOM.pickupInput) {
      DOM.pickupInput.addEventListener('change', handlePickupDateChange);
    }

    if (DOM.returnInput) {
      DOM.returnInput.addEventListener('change', handleReturnDateChange);
    }

    DOM.presetPills.forEach(pill => {
      pill.addEventListener('click', function () {
        const days = parseInt(this.getAttribute('data-days'), 10);
        applyDurationPreset(days);
      });
    });
  }

  function handlePickupDateChange() {
    if (!DOM.pickupInput.value) return;

    const newPickup = new Date(DOM.pickupInput.value + 'T00:00:00');
    AppState.pickupDate = newPickup;

    const minReturn = new Date(newPickup);
    minReturn.setDate(minReturn.getDate() + 1);
    DOM.returnInput.min = formatDateForInput(minReturn);

    if (!AppState.returnDate || AppState.returnDate <= newPickup) {
      const shiftedReturn = new Date(newPickup);
      shiftedReturn.setDate(shiftedReturn.getDate() + Math.max(1, AppState.rentalDays));
      AppState.returnDate = shiftedReturn;
      DOM.returnInput.value = formatDateForInput(shiftedReturn);
      hideDateValidationAlert();
    }

    recomputeDays();
  }

  function handleReturnDateChange() {
    if (!DOM.returnInput.value) return;

    const newReturn = new Date(DOM.returnInput.value + 'T00:00:00');

    if (AppState.pickupDate && newReturn <= AppState.pickupDate) {
      showDateValidationAlert('Return date must be strictly after pickup date. Minimum booking is 1 day.');
      const corrected = new Date(AppState.pickupDate);
      corrected.setDate(corrected.getDate() + 1);
      AppState.returnDate = corrected;
      DOM.returnInput.value = formatDateForInput(corrected);
    } else {
      hideDateValidationAlert();
      AppState.returnDate = newReturn;
    }

    recomputeDays();
  }

  function applyDurationPreset(days) {
    if (!AppState.pickupDate) {
      AppState.pickupDate = new Date();
      AppState.pickupDate.setDate(AppState.pickupDate.getDate() + 1);
      DOM.pickupInput.value = formatDateForInput(AppState.pickupDate);
    }

    const newReturn = new Date(AppState.pickupDate);
    newReturn.setDate(newReturn.getDate() + days);

    AppState.returnDate = newReturn;
    AppState.rentalDays = days;

    if (DOM.returnInput) {
      DOM.returnInput.value = formatDateForInput(newReturn);
    }

    DOM.presetPills.forEach(pill => {
      const pillDays = parseInt(pill.getAttribute('data-days'), 10);
      pill.classList.toggle('active', pillDays === days);
    });

    hideDateValidationAlert();
    updateDurationDisplay();
    calculateLiveInvoice();
    showToast(`Duration updated to ${days} day${days > 1 ? 's' : ''}`);
  }

  function recomputeDays() {
    if (!AppState.pickupDate || !AppState.returnDate) return;

    const diffTime = AppState.returnDate.getTime() - AppState.pickupDate.getTime();
    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));

    AppState.rentalDays = Math.max(1, diffDays);

    DOM.presetPills.forEach(pill => {
      const pillDays = parseInt(pill.getAttribute('data-days'), 10);
      pill.classList.toggle('active', pillDays === AppState.rentalDays);
    });

    updateDurationDisplay();
    calculateLiveInvoice();
  }

  function updateDurationDisplay() {
    if (DOM.displayDays) DOM.displayDays.textContent = AppState.rentalDays;
    if (DOM.displayDaysLabel) {
      DOM.displayDaysLabel.textContent = AppState.rentalDays === 1 ? 'DAY' : 'DAYS';
    }

    if (DOM.ledgerCarScheduleSummary) {
      DOM.ledgerCarScheduleSummary.textContent = `${AppState.rentalDays} Day${AppState.rentalDays > 1 ? 's' : ''} Deployment`;
    }

    const car = getSelectedCar();
    if (DOM.stickyCarPricing) {
      DOM.stickyCarPricing.textContent = `${formatINRSpan(car.rate)}/d • ${AppState.rentalDays} Day${AppState.rentalDays > 1 ? 's' : ''}`;
    }

    // Keep Page 3 Voucher Deployment Duration & Dates fully synchronized
    if (DOM.receiptDays) {
      DOM.receiptDays.textContent = `${AppState.rentalDays} Day${AppState.rentalDays > 1 ? 's' : ''}`;
    }
    if (DOM.receiptPickup && AppState.pickupDate) {
      DOM.receiptPickup.textContent = formatDateForInput(AppState.pickupDate);
    }
    if (DOM.receiptReturn && AppState.returnDate) {
      DOM.receiptReturn.textContent = formatDateForInput(AppState.returnDate);
    }
  }

  function showDateValidationAlert(msg) {
    if (DOM.dateValidationAlert && DOM.dateValidationText) {
      DOM.dateValidationText.textContent = msg;
      DOM.dateValidationAlert.classList.remove('hidden');
    }
  }

  function hideDateValidationAlert() {
    if (DOM.dateValidationAlert) {
      DOM.dateValidationAlert.classList.add('hidden');
    }
  }

  /* ==========================================================================
     9. PROTECTION TIERS & OPERATIONAL ADD-ONS (IN RUPEES)
     ========================================================================== */
  function initializeProtectionAndAddons() {
    DOM.insuranceCards.forEach(card => {
      card.addEventListener('click', function () {
        DOM.insuranceCards.forEach(c => {
          c.classList.remove('active');
          c.setAttribute('aria-checked', 'false');
        });

        this.classList.add('active');
        this.setAttribute('aria-checked', 'true');

        AppState.insuranceTier = this.getAttribute('data-tier');
        AppState.insuranceRate = parseFloat(this.getAttribute('data-price')) || 0;

        calculateLiveInvoice();
        showToast(`Protection Tier: ${AppState.insuranceTier.toUpperCase()}`);
      });

      card.addEventListener('keydown', function (e) {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          this.click();
        }
      });
    });

    if (DOM.addonDriver) {
      DOM.addonDriver.addEventListener('change', function () {
        AppState.addons.driver = this.checked;
        calculateLiveInvoice();
      });
    }

    if (DOM.addonMiles) {
      DOM.addonMiles.addEventListener('change', function () {
        AppState.addons.miles = this.checked;
        calculateLiveInvoice();
      });
    }

    if (DOM.addonCarbon) {
      DOM.addonCarbon.addEventListener('change', function () {
        AppState.addons.carbon = this.checked;
        calculateLiveInvoice();
      });
    }
  }

  /* ==========================================================================
     10. REAL-TIME INVOICE COMPUTATION & ANIMATED COUNTER (IN RUPEES)
     ========================================================================== */
  let currentAnimatedTotal = 0;
  let counterAnimationId = null;

  function animateGrandTotal(targetValue) {
    if (counterAnimationId) cancelAnimationFrame(counterAnimationId);

    const startValue = currentAnimatedTotal || targetValue;
    const duration = 280;
    const startTime = performance.now();

    function step(timestamp) {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = startValue + (targetValue - startValue) * easeProgress;

      const formatted = formatINR(current);

      if (DOM.invoiceGrandTotal) DOM.invoiceGrandTotal.textContent = formatted;
      if (DOM.stickyGrandTotal) DOM.stickyGrandTotal.textContent = formatted;

      if (progress < 1) {
        counterAnimationId = requestAnimationFrame(step);
      } else {
        currentAnimatedTotal = targetValue;
      }
    }

    counterAnimationId = requestAnimationFrame(step);
  }

  function calculateLiveInvoice() {
    const car = getSelectedCar();
    const days = AppState.rentalDays;

    // 1. Vehicle Base Rate in ₹
    const baseSubtotal = car.rate * days;

    // 2. Protection Rate in ₹
    const protectionSubtotal = AppState.insuranceRate * days;

    // 3. Add-ons in ₹
    let addonsDaily = 0;
    if (AppState.addons.driver) addonsDaily += 600;
    if (AppState.addons.miles) addonsDaily += 900;
    const addonsPerDiemSubtotal = addonsDaily * days;
    const addonsFlat = AppState.addons.carbon ? 350 : 0;
    const totalAddons = addonsPerDiemSubtotal + addonsFlat;

    // 4. Fixed Prep & Sanitization Protocol Fee (₹850)
    const serviceFee = AppState.fixedServiceFee;

    // 5. GST (18% Transport Cess)
    const taxableAmount = baseSubtotal + protectionSubtotal + totalAddons;
    const taxAmount = taxableAmount * AppState.taxRate;

    // 6. Net Grand Total in ₹
    const grandTotal = taxableAmount + serviceFee + taxAmount;

    // Update DOM Line Items
    if (DOM.invoiceBaseLabel) {
      DOM.invoiceBaseLabel.textContent = `Base Rate (${formatINRSpan(car.rate)} × ${days}d)`;
    }
    if (DOM.invoiceBaseTotal) {
      DOM.invoiceBaseTotal.textContent = formatINR(baseSubtotal);
    }

    const tierTitle = AppState.insuranceTier === 'standard' ? 'Standard (Incl.)' : (AppState.insuranceTier === 'comprehensive' ? 'Comprehensive' : 'Elite Shield');
    if (DOM.invoiceProtectionLabel) {
      DOM.invoiceProtectionLabel.textContent = `${tierTitle} (${formatINRSpan(AppState.insuranceRate)} × ${days}d)`;
    }
    if (DOM.invoiceProtectionTotal) {
      DOM.invoiceProtectionTotal.textContent = formatINR(protectionSubtotal);
    }

    const addonNames = [];
    if (AppState.addons.driver) addonNames.push('Driver (+₹600/d)');
    if (AppState.addons.miles) addonNames.push('Unlimited km (+₹900/d)');
    if (AppState.addons.carbon) addonNames.push('Carbon Offset (+₹350)');

    if (DOM.invoiceAddonsLabel) {
      DOM.invoiceAddonsLabel.textContent = addonNames.length > 0 ? `Add-ons: ${addonNames.join(', ')}` : 'Add-ons & Extras';
    }
    if (DOM.invoiceAddonsTotal) {
      DOM.invoiceAddonsTotal.textContent = formatINR(totalAddons);
    }

    if (DOM.invoiceFeeTotal) {
      DOM.invoiceFeeTotal.textContent = formatINR(serviceFee);
    }

    if (DOM.invoiceTaxTotal) {
      DOM.invoiceTaxTotal.textContent = formatINR(taxAmount);
    }

    animateGrandTotal(grandTotal);

    return {
      baseSubtotal,
      protectionSubtotal,
      totalAddons,
      serviceFee,
      taxAmount,
      grandTotal,
      addonNames
    };
  }

  /* ==========================================================================
     11. BOOKING CONFIRMATION & VOUCHER ENGINE (PAGE 3)
     ========================================================================== */
  function generateBookingReference() {
    const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
    let token = 'MNM-IND-';
    for (let i = 0; i < 4; i++) {
      token += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    token += '-X';
    return token;
  }

  function syncVoucherData() {
    const car = getSelectedCar();
    const invoice = calculateLiveInvoice();
    if (!AppState.bookingReference) {
      AppState.bookingReference = generateBookingReference();
    }

    // Populate Page 3 (Confirmation Voucher Boarding Pass)
    if (DOM.confirmationRefId) DOM.confirmationRefId.textContent = AppState.bookingReference;
    if (DOM.receiptTokenStub) DOM.receiptTokenStub.textContent = AppState.bookingReference;
    if (DOM.receiptCarName) DOM.receiptCarName.textContent = `${car.make} ${car.model}`;
    if (DOM.receiptCarSpecs) {
      DOM.receiptCarSpecs.textContent = `${car.colour.name.toUpperCase()} • ${car.mileage.toUpperCase()} • ${car.specs.power.toUpperCase()}`;
    }

    if (DOM.receiptPickup && AppState.pickupDate) {
      DOM.receiptPickup.textContent = formatDateForInput(AppState.pickupDate);
    }
    if (DOM.receiptReturn && AppState.returnDate) {
      DOM.receiptReturn.textContent = formatDateForInput(AppState.returnDate);
    }

    if (DOM.receiptDays) DOM.receiptDays.textContent = `${AppState.rentalDays} Day${AppState.rentalDays > 1 ? 's' : ''}`;
    
    const protectionName = AppState.insuranceTier === 'standard'
      ? 'Standard Protection (Included)'
      : (AppState.insuranceTier === 'comprehensive' ? 'Comprehensive Shield (+₹1,200/day)' : 'Elite Shield (+₹2,800/day)');
    if (DOM.receiptProtection) DOM.receiptProtection.textContent = protectionName;

    if (DOM.receiptAddons) {
      DOM.receiptAddons.textContent = (invoice && invoice.addonNames && invoice.addonNames.length > 0) ? invoice.addonNames.join(', ') : 'None Selected';
    }

    if (DOM.receiptBaseAmount && invoice) DOM.receiptBaseAmount.textContent = formatINR(invoice.baseSubtotal);
    if (DOM.receiptTaxAmount && invoice) DOM.receiptTaxAmount.textContent = formatINR(invoice.taxAmount);
    if (DOM.receiptGrandTotal && invoice) DOM.receiptGrandTotal.textContent = formatINR(invoice.grandTotal);
  }

  function confirmReservationAndShowVoucher() {
    AppState.bookingReference = generateBookingReference();
    syncVoucherData();

    const car = getSelectedCar();
    const invoice = calculateLiveInvoice();

    // Prepare booking payload for MongoDB
    const bookingPayload = {
      carName: `${car.make} ${car.model}`,
      startDate: formatDateForInput(AppState.pickupDate),
      endDate: formatDateForInput(AppState.returnDate),
      totalDays: Number(AppState.rentalDays),
      insuranceTier: AppState.insuranceTier ? (AppState.insuranceTier.charAt(0).toUpperCase() + AppState.insuranceTier.slice(1)) : 'Standard',
      totalPrice: Number(invoice.grandTotal),
      bookingRef: AppState.bookingReference
    };

    // Asynchronously dispatch booking data to Node/Express/MongoDB API
    fetch('/api/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookingPayload)
    })
    .then(res => res.json())
    .then(data => {
      if (data && data.success) {
        console.log('✓ Booking recorded in MongoDB:', data.booking);
      } else {
        console.warn('Booking API response notice:', data);
      }
    })
    .catch(err => {
      console.error('MongoDB API sync error (proceeding with local voucher):', err);
    });

    // Transition to Page 3
    showView('view-confirmation');
    showToast(`Official Voucher Issued: ${AppState.bookingReference}`);
  }

  function resetEngineState() {
    closeSpecModal();

    applyDurationPreset(3);

    if (DOM.insuranceCards[0]) {
      DOM.insuranceCards[0].click();
    }

    if (DOM.addonDriver) DOM.addonDriver.checked = false;
    if (DOM.addonMiles) DOM.addonMiles.checked = false;
    if (DOM.addonCarbon) DOM.addonCarbon.checked = false;
    AppState.addons.driver = false;
    AppState.addons.miles = false;
    AppState.addons.carbon = false;

    selectVehicle('spec-04-thar', false);
    showView('view-fleet');

    showToast('Registry state reset to factory defaults.');
  }

  /* ==========================================================================
     12. SPECIFICATION INSPECTION MODAL (TECHNICAL BLUEPRINT)
     ========================================================================== */
  function openSpecModal(carId) {
    const car = FLEET_REGISTRY.find(c => c.id === carId);
    if (!car) return;

    inspectingCarId = carId;

    if (DOM.specModalBadge) DOM.specModalBadge.textContent = car.category.toUpperCase();
    if (DOM.specModalMake) DOM.specModalMake.textContent = car.make.toUpperCase();
    if (DOM.specModalTitle) DOM.specModalTitle.textContent = car.model;
    if (DOM.specModalRate) DOM.specModalRate.textContent = formatINRSpan(car.rate);
    if (DOM.specModalSwatch) DOM.specModalSwatch.style.backgroundColor = car.colour.hex;
    if (DOM.specModalColour) DOM.specModalColour.textContent = `${car.colour.name} (${car.colour.finish})`;
    if (DOM.specModalMileage) DOM.specModalMileage.textContent = car.mileage;
    if (DOM.specModalAllowance) DOM.specModalAllowance.textContent = car.allowance;
    if (DOM.specModalDesc) DOM.specModalDesc.textContent = car.description;

    if (DOM.specModalGrid) {
      DOM.specModalGrid.innerHTML = `
        <div class="spec-cell">
          <span class="spec-cell-label">0-100 Accel</span>
          <span class="spec-cell-val">${car.specs.accel}</span>
        </div>
        <div class="spec-cell">
          <span class="spec-cell-label">Speed / Range</span>
          <span class="spec-cell-val">${car.specs.topSpeed}</span>
        </div>
        <div class="spec-cell">
          <span class="spec-cell-label">Horsepower</span>
          <span class="spec-cell-val">${car.specs.power}</span>
        </div>
        <div class="spec-cell">
          <span class="spec-cell-label">Drivetrain</span>
          <span class="spec-cell-val">${car.specs.drivetrain}</span>
        </div>
        <div class="spec-cell">
          <span class="spec-cell-label">Powertrain</span>
          <span class="spec-cell-val text-[11px]">${car.specs.powertrain}</span>
        </div>
        <div class="spec-cell">
          <span class="spec-cell-label">Cockpit Seating</span>
          <span class="spec-cell-val">${car.specs.seats}</span>
        </div>
        <div class="spec-cell">
          <span class="spec-cell-label">Chassis Hex</span>
          <span class="spec-cell-val">${car.colour.hex}</span>
        </div>
        <div class="spec-cell">
          <span class="spec-cell-label">Terminal Status</span>
          <span class="spec-cell-val text-emerald-400">READY (HANGAR 01)</span>
        </div>
      `;
    }

    DOM.specModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeSpecModal() {
    if (DOM.specModal) {
      DOM.specModal.classList.remove('active');
      document.body.style.overflow = '';
      inspectingCarId = null;
    }
  }

  /* ==========================================================================
     13. TOAST NOTIFICATION UTILITY
     ========================================================================== */
  function showToast(message) {
    if (!DOM.toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast-item';
    toast.innerHTML = `
      <span class="w-1.5 h-1.5 rounded-full bg-white shadow-glow"></span>
      <span>${message}</span>
    `;

    DOM.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = 'toastOut 0.25s var(--ease-out-expo) forwards';
      setTimeout(() => toast.remove(), 260);
    }, 2800);
  }

  function copyTextToClipboard(text, successMsg) {
    if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      navigator.clipboard.writeText(text)
        .then(() => showToast(successMsg || 'Copied to clipboard!'))
        .catch(() => fallbackCopy(text, successMsg));
    } else {
      fallbackCopy(text, successMsg);
    }
  }

  function fallbackCopy(text, successMsg) {
    try {
      const tempInput = document.createElement('textarea');
      tempInput.value = text;
      tempInput.style.position = 'fixed';
      tempInput.style.opacity = '0';
      document.body.appendChild(tempInput);
      tempInput.select();
      const ok = document.execCommand('copy');
      document.body.removeChild(tempInput);
      if (ok) {
        showToast(successMsg || 'Copied to clipboard!');
      } else {
        showToast(`Reference: ${text}`);
      }
    } catch (_) {
      showToast(`Reference: ${text}`);
    }
  }

  /* ==========================================================================
     14. GLOBAL EVENT LISTENERS & NAVIGATION
     ========================================================================== */
  function initializeEventListeners() {
    // Brand Logo click -> Return to Page 1 (Fleet)
    if (DOM.brandLogoBtn) {
      DOM.brandLogoBtn.addEventListener('click', () => {
        showView('view-fleet');
      });
    }

    // Top Nav buttons
    document.querySelectorAll('.nav-view-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        const targetView = this.getAttribute('data-target-view');
        if (targetView) showView(targetView);
      });
    });

    // Back to Fleet buttons (Page 2)
    document.querySelectorAll('.back-to-fleet-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        showView('view-fleet');
      });
    });

    // Back to Configurator buttons (Page 3)
    document.querySelectorAll('.back-to-config-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        showView('view-configurator');
      });
    });

    // Category Filter Pills
    DOM.filterPills.forEach(pill => {
      pill.addEventListener('click', function () {
        DOM.filterPills.forEach(p => {
          p.classList.remove('active');
          p.setAttribute('aria-selected', 'false');
        });

        this.classList.add('active');
        this.setAttribute('aria-selected', 'true');

        AppState.currentFilter = this.getAttribute('data-category');
        renderFleetGrid();
      });
    });

    if (DOM.resetFilterBtn) {
      DOM.resetFilterBtn.addEventListener('click', () => {
        const allPill = document.querySelector('.filter-pill[data-category="all"]');
        if (allPill) allPill.click();
      });
    }

    // Delegated Fleet Grid Clicks (Proceed button & Inspect button)
    if (DOM.fleetGrid) {
      DOM.fleetGrid.addEventListener('click', (e) => {
        // "Proceed →" button -> Select car & open Page 2 directly
        const proceedBtn = e.target.closest('[data-proceed-id]');
        if (proceedBtn) {
          const carId = proceedBtn.getAttribute('data-proceed-id');
          selectVehicle(carId, true);
          return;
        }

        // "Specs" inspection button -> Open Spec modal
        const inspectBtn = e.target.closest('[data-inspect-id]');
        if (inspectBtn) {
          const carId = inspectBtn.getAttribute('data-inspect-id');
          openSpecModal(carId);
          return;
        }

        // Clicking the card body selects vehicle without moving views
        const card = e.target.closest('.specimen-card');
        if (card && !e.target.closest('button')) {
          const carId = card.getAttribute('data-car-id');
          selectVehicle(carId, false);
        }
      });
    }

    // Quick Cart Trigger Header Pill -> Open Page 2
    if (DOM.quickCartTrigger) {
      DOM.quickCartTrigger.addEventListener('click', () => {
        showView('view-configurator');
      });
    }

    // Header Configure Button -> Open Page 2
    if (DOM.headerConfigureBtn) {
      DOM.headerConfigureBtn.addEventListener('click', () => {
        showView('view-configurator');
      });
    }

    // Page 2: "Lock Reservation & View Voucher" Button -> Advance to Page 3
    if (DOM.reserveBtn) {
      DOM.reserveBtn.addEventListener('click', confirmReservationAndShowVoucher);
    }

    // Page 3: "Book Another Specimen" Button
    if (DOM.newReservationBtn) {
      DOM.newReservationBtn.addEventListener('click', resetEngineState);
    }

    // Page 3: "Print Official Voucher" Button
    if (DOM.modalPrintBtn) {
      DOM.modalPrintBtn.addEventListener('click', () => {
        window.print();
      });
    }

    // Page 3: Copy Reference Token
    if (DOM.copyRefBtn) {
      DOM.copyRefBtn.addEventListener('click', () => {
        if (AppState.bookingReference) {
          navigator.clipboard.writeText(AppState.bookingReference).then(() => {
            showToast('Copied booking reference token!');
          }).catch(() => {
            showToast(`Reference: ${AppState.bookingReference}`);
          });
        }
      });
    }

    // Spec Modal Close & Proceed
    if (DOM.specModalClose) {
      DOM.specModalClose.addEventListener('click', closeSpecModal);
    }

    if (DOM.specModalProceedBtn) {
      DOM.specModalProceedBtn.addEventListener('click', () => {
        if (inspectingCarId) {
          closeSpecModal();
          selectVehicle(inspectingCarId, true);
        }
      });
    }

    if (DOM.specModal) {
      DOM.specModal.addEventListener('click', (e) => {
        if (e.target === DOM.specModal) closeSpecModal();
      });
    }

    // Escape Key Listener
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeSpecModal();
      }
    });

    if (DOM.footerResetAll) {
      DOM.footerResetAll.addEventListener('click', resetEngineState);
    }
  }

  /* ==========================================================================
     15. PILOT AUTHENTICATION SYSTEM (TERMINAL ACCESS & LOCAL PERSISTENCE)
     ========================================================================== */
  let authMode = 'login'; // 'login' or 'register'

  function updatePilotStatusUI() {
    if (AppState.pilotUser && DOM.pilotSessionStatus) {
      const name = AppState.pilotUser.name || AppState.pilotUser.email.split('@')[0];
      DOM.pilotSessionStatus.textContent = `Pilot: ${name.toUpperCase()} (Online)`;
    } else if (DOM.pilotSessionStatus) {
      DOM.pilotSessionStatus.textContent = 'Pilot Terminal Access →';
    }
  }

  function showAuthAlert(msg, isSuccess = false) {
    if (!DOM.authAlert) return;
    DOM.authAlert.textContent = msg;
    DOM.authAlert.className = isSuccess
      ? 'mb-4 p-3 rounded text-xs font-mono border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 block'
      : 'mb-4 p-3 rounded text-xs font-mono border border-red-500/30 bg-red-500/10 text-red-400 block';
    DOM.authAlert.classList.remove('hidden');
  }

  function hideAuthAlert() {
    if (DOM.authAlert) {
      DOM.authAlert.classList.add('hidden');
    }
  }

  function initializeAuthSystem() {
    // Check local storage for persisted pilot session
    try {
      const savedPilot = localStorage.getItem('monomotiv_pilot');
      if (savedPilot) {
        AppState.pilotUser = JSON.parse(savedPilot);
        updatePilotStatusUI();
      }
    } catch (_) {}

    // Open login view button in hero
    if (DOM.openLoginBtn) {
      DOM.openLoginBtn.addEventListener('click', () => {
        showView('view-login');
      });
    }

    // Tab Switching: Login vs Register
    if (DOM.tabLogin && DOM.tabRegister) {
      DOM.tabLogin.addEventListener('click', () => {
        authMode = 'login';
        DOM.tabLogin.classList.add('active');
        DOM.tabRegister.classList.remove('active');
        if (DOM.enrollmentNameGroup) DOM.enrollmentNameGroup.classList.add('hidden');
        if (DOM.authSubmitText) DOM.authSubmitText.textContent = 'Authorize Terminal Access';
        hideAuthAlert();
      });

      DOM.tabRegister.addEventListener('click', () => {
        authMode = 'register';
        DOM.tabRegister.classList.add('active');
        DOM.tabLogin.classList.remove('active');
        if (DOM.enrollmentNameGroup) DOM.enrollmentNameGroup.classList.remove('hidden');
        if (DOM.authSubmitText) DOM.authSubmitText.textContent = 'Enroll New Pilot Profile';
        hideAuthAlert();
      });
    }

    // Password visibility toggle
    if (DOM.togglePasskeyVisibility && DOM.authPassword) {
      DOM.togglePasskeyVisibility.addEventListener('click', () => {
        const isPass = DOM.authPassword.type === 'password';
        DOM.authPassword.type = isPass ? 'text' : 'password';
        DOM.togglePasskeyVisibility.textContent = isPass ? 'Hide' : 'Show';
      });
    }

    // Forgot passkey placeholder handler
    if (DOM.authForgotBtn) {
      DOM.authForgotBtn.addEventListener('click', () => {
        showAuthAlert('Terminal Protocol: Contact concierge at +91 800-555-0199 for cryptographic token recovery.');
      });
    }

    // Submit handler
    if (DOM.pilotAuthForm) {
      DOM.pilotAuthForm.addEventListener('submit', (e) => {
        e.preventDefault();
        hideAuthAlert();

        const email = DOM.authEmail ? DOM.authEmail.value.trim() : '';
        const password = DOM.authPassword ? DOM.authPassword.value : '';
        const name = DOM.authName ? DOM.authName.value.trim() : '';

        if (!email || !password) {
          showAuthAlert('Email and passkey are required.');
          return;
        }

        if (DOM.authSubmitBtn) DOM.authSubmitBtn.disabled = true;
        if (DOM.authSubmitText) DOM.authSubmitText.textContent = 'Authenticating Terminal...';

        fetch('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password, name, mode: authMode })
        })
        .then(res => res.json())
        .then(data => {
          if (data && data.success) {
            AppState.pilotUser = data.user;
            if (DOM.authPersist && DOM.authPersist.checked) {
              try {
                localStorage.setItem('monomotiv_pilot', JSON.stringify(data.user));
              } catch (_) {}
            }
            updatePilotStatusUI();
            showAuthAlert(`✓ Access Authorized. Welcome Pilot ${data.user.name || ''}`, true);
            showToast(`Pilot Authenticated: ${data.user.name || data.user.email}`);

            setTimeout(() => {
              showView('view-fleet');
              if (DOM.pilotAuthForm) DOM.pilotAuthForm.reset();
              hideAuthAlert();
            }, 1000);
          } else {
            showAuthAlert(data.message || 'Authentication rejected. Verify passkey.');
          }
        })
        .catch(err => {
          console.error('Auth request notice (using local offline session):', err);
          const fallbackUser = {
            email: email,
            name: name || email.split('@')[0].toUpperCase(),
            role: 'Pilot Operator'
          };
          AppState.pilotUser = fallbackUser;
          updatePilotStatusUI();
          showAuthAlert(`✓ Local Terminal Clearance Granted. Welcome ${fallbackUser.name}`, true);
          showToast(`Offline Clearance: ${fallbackUser.name}`);
          setTimeout(() => {
            showView('view-fleet');
            hideAuthAlert();
          }, 1000);
        })
        .finally(() => {
          if (DOM.authSubmitBtn) DOM.authSubmitBtn.disabled = false;
          if (DOM.authSubmitText) {
            DOM.authSubmitText.textContent = authMode === 'login' ? 'Authorize Terminal Access' : 'Enroll New Pilot Profile';
          }
        });
      });
    }
  }

  /* ==========================================================================
     16. APP INITIALIZATION LIFECYCLE
     ========================================================================== */
  function initApp() {
    renderFleetGrid();
    initializeDateControls();
    initializeProtectionAndAddons();
    initializeEventListeners();
    initializeAuthSystem();

    // Default select Thar Roxx SUV
    selectVehicle('spec-04-thar', false);

    // Initial View resolution from URL hash
    const initialHash = window.location.hash;
    if (initialHash && HASH_VIEW_MAP[initialHash]) {
      showView(HASH_VIEW_MAP[initialHash], false);
    } else {
      showView('view-fleet', false);
    }

    // Listen for browser back/forward and hash changes
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash;
      if (hash && HASH_VIEW_MAP[hash] && AppState.currentView !== HASH_VIEW_MAP[hash]) {
        showView(HASH_VIEW_MAP[hash], false);
      }
    });

    handleScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }

})();
