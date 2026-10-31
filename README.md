# ResQMind AI
> **AI-Powered Flood Intelligence & Autonomous Relief Coordinator**  
> *Tagline: Plan. Protect. Adapt.*  
> **Presented by Team Cameo Crew**

---

## 🌊 Overview

**ResQMind AI** is a centralized AI-powered flood intelligence and relief coordination platform designed to bridge the operational gap between flood detection and real-time emergency response. 

During flood emergencies, information is fragmented across citizens, weather stations, sensors, and field officers. Reports are often duplicate, conflicting, or outdated, while critical assets (boats, ambulances, rescue squads, relief supplies) are strictly limited and road access conditions fluctuate continuously. 

ResQMind AI turns volatile, multi-source flood information into verified, adaptive relief action while keeping human emergency coordinators in command of critical life-safety decisions.

---

## 🎨 Design System & Theme

The user interface follows an award-winning command-center aesthetic with a strict flood-management color palette:

- **Sage Green (`#87A96B`):** Verified intelligence flows, safe/open transit routes, active telemetry beacons, and environmental resilience indicators.
- **Walnut Brown (`#5A3E2B`):** Tactical grounding foundation, institutional stakeholder modules, and deep structural elevation.
- **Amber Glow (`#D5851F`):** Warning beacons, rising water hazard alerts, dynamic replanning triggers, and high-urgency prioritization callouts.

---

## 🚀 Key Modules & Architecture

### 1. The 4 Major Platform Stages
1. **Collect & Verify:** Aggregates multi-source incoming signals, identifies duplicates, and estimates flood risk.
2. **Prioritize & Allocate:** Ranks incidents by criticality, optimizes vehicle/crew allocation, and identifies open routes and shelters.
3. **Monitor & Replan:** Tracks real-time field operations and dynamically replans as road conditions change.
4. **Coordinate Decisions:** One intelligent platform delivering multiple coordinated decisions for adaptive flood response.

### 2. The 9-Stage Operating Loop
A continuous workflow where **Rescue Monitoring** directly feeds **Dynamic Replanning**, and critical actions require **Human Approval**:
1. *Flood data collection*
2. *Report verification*
3. *Flood-risk prediction*
4. *Emergency prioritization*
5. *Resource allocation*
6. *Safe route and shelter recommendation*
7. *Rescue monitoring* (feeds dynamic replanning)
8. *Dynamic replanning* (updates the plan when situation changes)
9. *Human approval* (keeps critical decisions with the emergency coordinator)

### 3. Decision Intelligence Models
- **NLP + Sentence Transformers:** Identifies semantically similar and duplicate emergency reports even when phrasing differs across citizens and call channels.
- **Reliability Assessment:** Evaluates timestamps, source reliability ratings, and cross-sensor corroboration to flag unverified claims.
- **XGBoost:** Estimates potential flood risk gradients using relevant historical and current rainfall, weather, and water-level sensor telemetry.
- **Intelligent Prioritization:** Ranks emergencies using a 4-factor matrix: *Severity*, *Medical Urgency*, *People Affected*, and *Time Sensitivity*.
- **Safety Guardrail:**
  > *"AI does not independently prove reports true. Uncertain but potentially life-threatening reports require urgent human verification."*

### 4. Flood-Aware Dynamic Replanning Engine
- **Visual Simulation Model:** Evaluates road connectivity changes on a supplied road network topology.
- **NetworkX:** Calculates safe alternative bypass routes when roads are inundated.
- **OR-Tools:** Re-optimizes asset and team assignments when routes or capacities shift.
- **Human-in-the-Loop:** Revised plans are automatically routed to an Emergency Coordinator for authorization prior to dispatch.

### 5. Tripartite Ecosystem (Customers & Users)
> *"Paying customers fund the platform. Operational users act through it. Flood-affected citizens benefit from better-informed response."*
- **Primary Paying Customers:** Government (state/district disaster authorities, municipal corporations, smart-city administrations, emergency-response departments).
- **Secondary Paying Customers:** Institutions (industrial parks, manufacturing facilities, hospitals, infrastructure operators, campuses in flood-prone areas).
- **Operational Users:** Disaster authorities and field rescue teams.
- **Other Stakeholders:** Weather agencies, NGOs, relief organizations, shelter administrators.
- **Primary Beneficiaries:** Flood-affected citizens.

### 6. Proposed Business Model & Sustainability
- **B2G + B2B SaaS:** Annual recurring subscription tiers rather than one-time software purchases.
- **5-Step Value Chain:** Customers &rarr; Subscription &rarr; Platform &rarr; Service &rarr; Outcome.
- **6-Stage Adoption Journey:** Identify &rarr; Demonstrate &rarr; Pilot &rarr; Evaluate &rarr; Annual Subscription &rarr; Expansion.
- *Notice:* All commercial revenue streams, pricing, and adoption timelines represent proposed business opportunities.

---

## 🛠️ Technology Stack

- **Frontend:** Vanilla HTML5, CSS3, ES6+ JavaScript (zero external framework dependencies)
- **Typography:** Space Grotesk, Plus Jakarta Sans, JetBrains Mono (via Google Fonts)
- **Icons & Graphics:** Inline SVG topological graphs, animated radar beacons, and custom vector icons

---

## 💻 Running the Project Locally

To run the interactive website locally:

```bash
# Clone the repository
git clone https://github.com/venkatsurya555/resqmind-ai.git

# Navigate into project directory
cd resqmind-ai

# Start a local HTTP server using Python:
python -m http.server 3000

# Open in your browser:
# http://localhost:3000
```

Or simply double-click [index.html](index.html) to open it in any modern web browser.

---

## 👥 Credits
**Project:** ResQMind AI  
**Directive:** Plan. Protect. Adapt.  
**Team:** Team Cameo Crew  
