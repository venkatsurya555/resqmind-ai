/**
 * RESQMIND AI — INTERACTIVE PRODUCT CONTROLLER
 * AI-Powered Flood Intelligence & Autonomous Relief Coordinator
 * Team Cameo Crew // Plan. Protect. Adapt.
 * 
 * Strict Content Rule: Only official PDF specifications and terminology.
 * Strict Theme: Sage Green (#87A96B), Walnut Brown (#5A3E2B), Amber Glow (#D5851F).
 */

(function () {
  'use strict';

  // --- 1. GLOBAL SCROLL & NAVIGATION CONTROLLER ---
  function initNavigation() {
    const header = document.getElementById('siteHeader');
    const progressBar = document.getElementById('scrollProgressBar');
    const navLinks = document.querySelectorAll('.desktop-nav .nav-link');
    const sections = document.querySelectorAll('section.section');
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    // Scroll Progress & Header Glass Effect
    window.addEventListener('scroll', () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;

      if (progressBar) {
        progressBar.style.width = scrolled + '%';
      }

      if (header) {
        if (winScroll > 40) {
          header.style.background = 'rgba(12, 16, 13, 0.94)';
          header.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.5)';
        } else {
          header.style.background = 'rgba(12, 16, 13, 0.82)';
          header.style.boxShadow = 'none';
        }
      }

      // Scrollspy: Highlight Active Nav Link
      let currentSectionId = '';
      sections.forEach(sec => {
        const top = sec.offsetTop - 120;
        const height = sec.offsetHeight;
        if (winScroll >= top && winScroll < top + height) {
          currentSectionId = sec.getAttribute('id');
        }
      });

      if (currentSectionId) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === '#' + currentSectionId) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });

    // Mobile Hamburger Menu
    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.contains('open');
        if (isOpen) {
          mobileMenu.classList.remove('open');
          mobileMenu.setAttribute('aria-hidden', 'true');
          menuToggle.setAttribute('aria-expanded', 'false');
        } else {
          mobileMenu.classList.add('open');
          mobileMenu.setAttribute('aria-hidden', 'false');
          menuToggle.setAttribute('aria-expanded', 'true');
        }
      });

      mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.remove('open');
          mobileMenu.setAttribute('aria-hidden', 'true');
          menuToggle.setAttribute('aria-expanded', 'false');
        });
      });
    }
  }

  // --- 2. HERO HUD TELEMETRY SIMULATION ---
  function initHeroHUD() {
    const liveStatus = document.getElementById('hudLiveStatus');
    if (!liveStatus) return;

    const statuses = [
      'VERIFYING INPUTS',
      'XGBOOST RISK SCANNING',
      'SENTENCE TRANSFORMERS ACTIVE',
      'SUPPLIED GRAPH READY',
      'COORDINATOR CONSOLE STANDBY'
    ];
    let idx = 0;

    setInterval(() => {
      idx = (idx + 1) % statuses.length;
      liveStatus.style.opacity = '0';
      setTimeout(() => {
        liveStatus.textContent = statuses[idx];
        liveStatus.style.opacity = '1';
      }, 250);
    }, 3800);
  }

  // --- 3. SECTION 4: THE OPERATING LOOP (9-STAGE CONTROLLER) ---
  function initOperatingLoop() {
    const stageData = [
      {
        step: 1,
        title: 'Stage 1: Flood data collection',
        desc: 'Bring reports, weather, sensors and field updates together into one centralized intelligence layer.',
        badge: 'STAGE 01 — MULTI-SOURCE INGESTION',
        scope: 'Multi-channel raw telemetry aggregation',
        role: 'Coordinator monitors aggregate input streams',
        pdfRef: 'Bring reports, weather, sensors and field updates together.'
      },
      {
        step: 2,
        title: 'Stage 2: Report verification',
        desc: 'Compare sources, timestamps and corroborating information to evaluate signal reliability.',
        badge: 'STAGE 02 — SIGNAL VERIFICATION',
        scope: 'Cross-reference timestamps & source reputation',
        role: 'Alerts flagged for human priority checks',
        pdfRef: 'Compare sources, timestamps and corroborating information.'
      },
      {
        step: 3,
        title: 'Stage 3: Flood-risk prediction',
        desc: 'Estimate changing risk from rainfall, weather and water-level data using machine learning algorithms.',
        badge: 'STAGE 03 — RISK ESTIMATION',
        scope: 'XGBoost estimation on historical and current sensor data',
        role: 'Provides predicted risk gradient map to dispatchers',
        pdfRef: 'Estimate changing risk from rainfall, weather and water-level data.'
      },
      {
        step: 4,
        title: 'Stage 4: Emergency prioritization',
        desc: 'Rank severity, medical urgency, people affected and time sensitivity to identify highest-need incidents.',
        badge: 'STAGE 04 — INCIDENT PRIORITIZATION',
        scope: '4-factor weighted criticality index',
        role: 'Surfaces highest urgency cases for immediate review',
        pdfRef: 'Rank severity, medical urgency, people affected and time sensitivity.'
      },
      {
        step: 5,
        title: 'Stage 5: Resource allocation',
        desc: 'Match available teams, boats, ambulances and supplies against prioritized emergency incidents.',
        badge: 'STAGE 05 — ASSET MATCHING',
        scope: 'Optimization of constrained fleet and supplies',
        role: 'Coordinator reviews automated vehicle & team assignments',
        pdfRef: 'Match available teams, boats, ambulances and supplies.'
      },
      {
        step: 6,
        title: 'Stage 6: Safe route and shelter recommendation',
        desc: 'Work from current access and capacity to plot safe passage and allocate shelter space.',
        badge: 'STAGE 06 — ROUTE & SHELTER PLANNING',
        scope: 'Calculates transit path based on known open corridors',
        role: 'Validates route accessibility before deployment',
        pdfRef: 'Work from current access and capacity.'
      },
      {
        step: 7,
        title: 'Stage 7: Rescue monitoring',
        desc: 'Track assignments and new field conditions in real time as rescue units execute operations. Monitoring feeds dynamic replanning.',
        badge: 'STAGE 07 — OPERATIONAL MONITORING',
        scope: 'Continuous field status tracking',
        role: 'Observes unit movement & logs emerging road hazards',
        pdfRef: 'Track assignments and new field conditions. Monitoring feeds dynamic replanning.'
      },
      {
        step: 8,
        title: 'Stage 8: Dynamic replanning',
        desc: 'Update the plan when the situation changes. Remove blocked roads, recalculate alternative routes with NetworkX, and re-optimize with OR-Tools.',
        badge: 'STAGE 08 — DYNAMIC REPLANNING ENGINE',
        scope: 'Autonomous alternative path calculation & asset rebalancing',
        role: 'Coordinator receives instant revised proposal',
        pdfRef: 'Update the plan when the situation changes.'
      },
      {
        step: 9,
        title: 'Stage 9: Human approval',
        desc: 'Keep critical decisions with the emergency coordinator. No revised routing or priority override executes without human authorization.',
        badge: 'STAGE 09 — HUMAN IN THE LOOP',
        scope: 'Final decision sign-off & tactical authorization',
        role: 'Coordinator holds final authority on life-safety dispatches',
        pdfRef: 'Keep critical decisions with the emergency coordinator.'
      }
    ];

    let currentStep = 1;
    let autoPlayTimer = null;
    let isPlaying = false;

    const nodeButtons = document.querySelectorAll('.loop-node-btn');
    const currentNumEl = document.getElementById('loopCurrentNum');
    const currentNameEl = document.getElementById('loopCurrentName');
    const btnPlay = document.getElementById('btnLoopPlay');
    const playText = document.getElementById('loopPlayText');
    const btnPrev = document.getElementById('btnLoopPrev');
    const btnNext = document.getElementById('btnLoopNext');

    const spotlightBadge = document.getElementById('spotlightBadge');
    const spotlightTitle = document.getElementById('spotlightTitle');
    const spotlightDesc = document.getElementById('spotlightDesc');
    const spotlightMeta = document.getElementById('spotlightMeta');

    function updateStageUI(stepNumber) {
      currentStep = stepNumber;
      const data = stageData[stepNumber - 1];

      // Update node buttons
      nodeButtons.forEach(btn => {
        const step = parseInt(btn.getAttribute('data-step'), 10);
        if (step === stepNumber) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });

      // Update header
      if (currentNumEl) currentNumEl.textContent = stepNumber;
      if (currentNameEl) {
        const cleanName = data.title.split(': ')[1] || data.title;
        currentNameEl.textContent = cleanName;
      }

      // Update spotlight panel
      if (spotlightBadge) spotlightBadge.textContent = data.badge;
      if (spotlightTitle) spotlightTitle.textContent = data.title;
      if (spotlightDesc) spotlightDesc.textContent = data.desc;
      if (spotlightMeta) {
        spotlightMeta.innerHTML = `
          <span class="meta-item"><strong>Stage Scope:</strong> ${data.scope}</span>
          <span class="meta-item"><strong>Human Role:</strong> ${data.role}</span>
          <span class="meta-item"><strong>PDF Directive:</strong> ${data.pdfRef}</span>
        `;
      }
    }

    // Direct Click on Node
    nodeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const step = parseInt(btn.getAttribute('data-step'), 10);
        updateStageUI(step);
        stopAutoPlay();
      });
    });

    // Next / Prev Controls
    if (btnPrev) {
      btnPrev.addEventListener('click', () => {
        let prev = currentStep - 1;
        if (prev < 1) prev = stageData.length;
        updateStageUI(prev);
        stopAutoPlay();
      });
    }

    if (btnNext) {
      btnNext.addEventListener('click', () => {
        let next = currentStep + 1;
        if (next > stageData.length) next = 1;
        updateStageUI(next);
        stopAutoPlay();
      });
    }

    // Auto-Play Cycle
    function startAutoPlay() {
      isPlaying = true;
      if (playText) playText.textContent = 'Pause Cycle';
      autoPlayTimer = setInterval(() => {
        let next = currentStep + 1;
        if (next > stageData.length) next = 1;
        updateStageUI(next);
      }, 2600);
    }

    function stopAutoPlay() {
      isPlaying = false;
      if (playText) playText.textContent = 'Auto-Play Cycle';
      if (autoPlayTimer) {
        clearInterval(autoPlayTimer);
        autoPlayTimer = null;
      }
    }

    if (btnPlay) {
      btnPlay.addEventListener('click', () => {
        if (isPlaying) {
          stopAutoPlay();
        } else {
          startAutoPlay();
        }
      });
    }

    // Initialize with Stage 1
    updateStageUI(1);
  }

  // --- 4. SECTION 6: FLOOD-AWARE DYNAMIC REPLANNING ENGINE (FLAGSHIP) ---
  function initDynamicReplanning() {
    let currentStep = 1;

    // SVG elements
    const floodWater = document.getElementById('floodWaterZone');
    const routeOrig1 = document.getElementById('routeOriginalPart1');
    const routeOrig2 = document.getElementById('routeOriginalPart2');
    const routeAlt = document.getElementById('routeAlternative');
    const hazardMarker = document.getElementById('blockedRoadHazard');
    const pathUpperAux = document.getElementById('pathUpperAux');

    // UI elements
    const mapStatusDot = document.getElementById('mapStatusDot');
    const mapStatusText = document.getElementById('mapStatusText');
    const mapTelemetryBadge = document.getElementById('mapTelemetryBadge');
    const telemOutput = document.getElementById('replanTelemOutput');
    const btnApprove = document.getElementById('btnCoordinatorApprove');
    const approvalBadge = document.getElementById('approvalSuccessBadge');
    const coordDesc = document.getElementById('coordApprovalDesc');
    const hotspotBtn = document.getElementById('btnBlockTrigger');

    // Step indicators & buttons
    const stepBtns = [
      document.getElementById('btnStep1'),
      document.getElementById('btnStep2'),
      document.getElementById('btnStep3'),
      document.getElementById('btnStep4')
    ];

    const stepIndicators = [
      document.getElementById('replanStepIndicator1'),
      document.getElementById('replanStepIndicator2'),
      document.getElementById('replanStepIndicator3'),
      document.getElementById('replanStepIndicator4')
    ];

    function applyReplanningState(step) {
      currentStep = step;

      // Update button active states
      stepBtns.forEach((btn, i) => {
        if (btn) {
          if (i + 1 === step) btn.classList.add('active');
          else btn.classList.remove('active');
        }
      });

      // Update horizontal indicator track
      stepIndicators.forEach((ind, i) => {
        if (ind) {
          if (i + 1 <= step) ind.classList.add('active');
          else ind.classList.remove('active');
        }
      });

      // Reset approval elements on steps 1-3
      if (step < 4) {
        if (btnApprove) btnApprove.disabled = true;
        if (approvalBadge) approvalBadge.style.display = 'none';
      }

      // STATE 1: Original Route – Accessible
      if (step === 1) {
        if (floodWater) {
          floodWater.setAttribute('opacity', '0.2');
          floodWater.setAttribute('rx', '75');
          floodWater.setAttribute('ry', '35');
        }
        if (routeOrig1) {
          routeOrig1.setAttribute('stroke', '#87A96B');
          routeOrig1.setAttribute('stroke-width', '5');
          routeOrig1.style.opacity = '1';
        }
        if (routeOrig2) {
          routeOrig2.setAttribute('stroke', '#87A96B');
          routeOrig2.setAttribute('stroke-width', '5');
          routeOrig2.style.opacity = '1';
        }
        if (routeAlt) {
          routeAlt.style.opacity = '0';
        }
        if (pathUpperAux) {
          pathUpperAux.setAttribute('stroke', '#5A3E2B');
          pathUpperAux.setAttribute('stroke-width', '3');
          pathUpperAux.setAttribute('opacity', '0.6');
        }
        if (hazardMarker) hazardMarker.style.opacity = '0';

        if (mapStatusDot) {
          mapStatusDot.style.background = '#87A96B';
          mapStatusDot.style.boxShadow = '0 0 8px #87A96B';
        }
        if (mapStatusText) mapStatusText.textContent = 'STATE 1: ORIGINAL ROUTE ACCESSIBLE';
        if (mapTelemetryBadge) mapTelemetryBadge.textContent = 'NETWORKX GRAPH: CONNECTED';

        if (telemOutput) {
          telemOutput.innerHTML = `
            <p class="telem-line text-sage">&gt; NetworkX graph loaded with supplied road topology.</p>
            <p class="telem-line">&gt; Initial route verified: Depot Alpha &rarr; Corridor 101 &rarr; Shelter Delta.</p>
            <p class="telem-line text-muted">&gt; Standing by for updated field conditions...</p>
          `;
        }
        if (coordDesc) {
          coordDesc.textContent = 'Original route is open and cleared. No replan required.';
        }
      }

      // STATE 2: Updated Condition – Road blocked due to rising water
      else if (step === 2) {
        if (floodWater) {
          floodWater.setAttribute('opacity', '0.85');
          floodWater.setAttribute('rx', '135');
          floodWater.setAttribute('ry', '65');
        }
        if (routeOrig1) {
          routeOrig1.setAttribute('stroke', '#D5851F');
          routeOrig1.setAttribute('stroke-width', '4');
          routeOrig1.style.opacity = '0.7';
        }
        if (routeOrig2) {
          routeOrig2.setAttribute('stroke', '#5A3E2B');
          routeOrig2.setAttribute('stroke-width', '3');
          routeOrig2.style.opacity = '0.3';
        }
        if (routeAlt) {
          routeAlt.style.opacity = '0';
        }
        if (hazardMarker) hazardMarker.style.opacity = '1';

        if (mapStatusDot) {
          mapStatusDot.style.background = '#D5851F';
          mapStatusDot.style.boxShadow = '0 0 12px #D5851F';
        }
        if (mapStatusText) mapStatusText.textContent = 'STATE 2: ROAD BLOCKED (RISING WATER)';
        if (mapTelemetryBadge) mapTelemetryBadge.textContent = 'HAZARD VERIFIED AT SECTOR B';

        if (telemOutput) {
          telemOutput.innerHTML = `
            <p class="telem-line text-amber">&gt; [ALERT] Updated condition received and verified from field sensor.</p>
            <p class="telem-line text-amber">&gt; Road blocked: Rising water inundating Central Bridge Sector B.</p>
            <p class="telem-line">&gt; Initial corridor severed. Replanning engine triggered.</p>
          `;
        }
        if (coordDesc) {
          coordDesc.textContent = 'Hazard reported. NetworkX removing blocked segment from topological graph.';
        }
      }

      // STATE 3: Alternative Route – Highlighted (NetworkX)
      else if (step === 3) {
        if (floodWater) {
          floodWater.setAttribute('opacity', '0.75');
        }
        if (hazardMarker) hazardMarker.style.opacity = '1';
        if (routeOrig1) routeOrig1.style.opacity = '0.3';
        if (routeOrig2) routeOrig2.style.opacity = '0.3';

        if (routeAlt) {
          routeAlt.style.opacity = '1';
          routeAlt.setAttribute('stroke', '#87A96B');
          routeAlt.setAttribute('stroke-width', '6');
        }

        if (pathUpperAux) {
          pathUpperAux.setAttribute('stroke', '#87A96B');
          pathUpperAux.setAttribute('stroke-width', '4');
          pathUpperAux.setAttribute('opacity', '0.9');
        }

        if (mapStatusDot) {
          mapStatusDot.style.background = '#87A96B';
          mapStatusDot.style.boxShadow = '0 0 10px #87A96B';
        }
        if (mapStatusText) mapStatusText.textContent = 'STATE 3: ALTERNATIVE ROUTE HIGHLIGHTED';
        if (mapTelemetryBadge) mapTelemetryBadge.textContent = 'NETWORKX: BYPASS PATH RESOLVED';

        if (telemOutput) {
          telemOutput.innerHTML = `
            <p class="telem-line text-sage">&gt; NetworkX calculates alternative route on supplied road network.</p>
            <p class="telem-line text-sage">&gt; Safe bypass identified: Depot &rarr; North Waypoint &rarr; High Ridge &rarr; Shelter.</p>
            <p class="telem-line text-muted">&gt; Preparing reassignment proposal for coordinator review...</p>
          `;
        }
        if (coordDesc) {
          coordDesc.textContent = 'Alternative route computed. Proceeding to replanning loop for coordinator sign-off.';
        }
      }

      // STATE 4: Replanning loop – remove road · recalculate · request approval
      else if (step === 4) {
        if (floodWater) floodWater.setAttribute('opacity', '0.8');
        if (hazardMarker) hazardMarker.style.opacity = '1';
        if (routeAlt) {
          routeAlt.style.opacity = '1';
          routeAlt.setAttribute('stroke', '#D5851F');
          routeAlt.setAttribute('stroke-width', '6');
        }

        if (mapStatusDot) {
          mapStatusDot.style.background = '#D5851F';
          mapStatusDot.style.boxShadow = '0 0 12px #D5851F';
        }
        if (mapStatusText) mapStatusText.textContent = 'STATE 4: AWAITING COORDINATOR APPROVAL';
        if (mapTelemetryBadge) mapTelemetryBadge.textContent = 'OR-TOOLS: RE-OPTIMIZATION READY';

        if (btnApprove) {
          btnApprove.disabled = false;
        }

        if (telemOutput) {
          telemOutput.innerHTML = `
            <p class="telem-line text-amber">&gt; Replan loop: remove road &bull; recalculate &bull; request approval.</p>
            <p class="telem-line text-sage">&gt; OR-Tools can re-optimize resource assignments when required.</p>
            <p class="telem-line">&gt; Revised plan submitted to Emergency Coordinator for human authorization.</p>
          `;
        }
        if (coordDesc) {
          coordDesc.textContent = 'The revised plan goes to an emergency coordinator for approval. Click button below to approve.';
        }
      }
    }

    // Bind Step Trigger Buttons
    stepBtns.forEach((btn, idx) => {
      if (btn) {
        btn.addEventListener('click', () => applyReplanningState(idx + 1));
      }
    });

    // Hotspot on road (toggles rising water blockage)
    if (hotspotBtn) {
      hotspotBtn.addEventListener('click', () => {
        if (currentStep === 1) {
          applyReplanningState(2);
        } else if (currentStep === 2) {
          applyReplanningState(3);
        } else if (currentStep === 3) {
          applyReplanningState(4);
        } else {
          applyReplanningState(1);
        }
      });
    }

    // Coordinator Human Approval Action Button
    if (btnApprove) {
      btnApprove.addEventListener('click', () => {
        btnApprove.disabled = true;
        if (approvalBadge) {
          approvalBadge.style.display = 'block';
        }
        if (mapStatusText) {
          mapStatusText.textContent = 'STATE 4: PLAN APPROVED & DISPATCHED';
        }
        if (mapStatusDot) {
          mapStatusDot.style.background = '#87A96B';
          mapStatusDot.style.boxShadow = '0 0 12px #87A96B';
        }
        if (routeAlt) {
          routeAlt.setAttribute('stroke', '#87A96B');
        }
        if (telemOutput) {
          telemOutput.innerHTML += `
            <p class="telem-line text-sage" style="font-weight: bold; margin-top: 4px;">&gt; [COORDINATOR SIGN-OFF] Human approval granted. High Ridge route dispatched to field units.</p>
          `;
        }
      });
    }

    // Default to State 1
    applyReplanningState(1);
  }

  // --- 5. SECTION 7: CUSTOMERS & USERS FILTER TABS ---
  function initStakeholderTabs() {
    const tabs = document.querySelectorAll('.sh-tab-btn');
    const cards = document.querySelectorAll('.stakeholder-card');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const filter = tab.getAttribute('data-filter');

        cards.forEach(card => {
          if (filter === 'all') {
            card.style.display = 'flex';
          } else {
            const hasCategory = card.classList.contains(`sh-category-${filter}`);
            if (hasCategory) {
              card.style.display = 'flex';
            } else {
              card.style.display = 'none';
            }
          }
        });
      });
    });
  }

  // --- 6. SECTION 9: PROPOSED CUSTOMER JOURNEY STEPPER ---
  function initCustomerJourney() {
    const journeyData = [
      {
        step: 1,
        title: 'Targeting Flood-Prone Districts & Institutions',
        badge: 'STAGE 1: IDENTIFY',
        text: 'Identify high-risk flood-prone districts and institutions requiring real-time situational awareness and coordinated response.'
      },
      {
        step: 2,
        title: 'Demonstrating Platform Capabilities',
        badge: 'STAGE 2: DEMONSTRATE',
        text: 'Demonstrate multi-source ingestion, duplicate detection, XGBoost risk forecasting, and NetworkX dynamic replanning workflows.'
      },
      {
        step: 3,
        title: 'Pilot Deployment in Target District',
        badge: 'STAGE 3: PILOT',
        text: 'Pilot deployment in one flood-prone district to integrate local road networks, sensor networks, and emergency coordination teams.'
      },
      {
        step: 4,
        title: 'Evaluating Operational Metrics',
        badge: 'STAGE 4: EVALUATE',
        text: 'Evaluate operational metrics, decision-support accuracy, replanning latency, and human coordinator feedback.'
      },
      {
        step: 5,
        title: 'Transitioning to Annual SaaS Subscription',
        badge: 'STAGE 5: ANNUAL SUBSCRIPTION',
        text: 'Establish annual subscription rather than a one-time software purchase, ensuring continuous maintenance and mapping updates.'
      },
      {
        step: 6,
        title: 'Regional Expansion & Collaboration',
        badge: 'STAGE 6: EXPANSION',
        text: 'Expansion through institutional collaboration to multiple districts, connecting wider state-level and regional networks.'
      }
    ];

    const steps = document.querySelectorAll('.journey-step');
    const detailBadge = document.getElementById('jdetailBadge');
    const detailTitle = document.getElementById('jdetailTitle');
    const detailText = document.getElementById('jdetailText');

    steps.forEach(stepEl => {
      stepEl.addEventListener('click', () => {
        const stepNum = parseInt(stepEl.getAttribute('data-jstep'), 10);

        steps.forEach(s => s.classList.remove('active'));
        stepEl.classList.add('active');

        const data = journeyData[stepNum - 1];
        if (data) {
          if (detailBadge) detailBadge.textContent = data.badge;
          if (detailTitle) detailTitle.textContent = data.title;
          if (detailText) detailText.textContent = data.text;
        }
      });
    });
  }

  // --- 7. SMOOTH LINK SCROLLING ---
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // --- INITIALIZE APPLICATION ON DOM READY ---
  document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initHeroHUD();
    initOperatingLoop();
    initDynamicReplanning();
    initStakeholderTabs();
    initCustomerJourney();
    initSmoothScroll();
  });

})();
