class EscortGrid extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
        <style>
            .models-section {
    padding: 2.5rem 0;
  }
  
  .escorts-tabs {
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
    border: 1px solid var(--manila-blue);
    border-radius: 0.25rem;
    overflow: hidden;
  }
  
  .escort-tab {
    padding: 0.5rem 1rem;
    background-color: #4169E1;
    color: #fff;
  }
  
  .escort-tab.active {
    background-color: var(--manila-blue);
    color: var(--white);
  }

.escort-image {
  width: 100%;
  height: 200px; /* force same height */
  object-fit: cover; /* crop nicely */
  border-radius: 10px;
}
  
  .models-layout {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  @media (min-width: 1024px) {
    .models-layout {
      flex-direction: row;
    }
  }
  
  /* Tab toggle control */
.models-container {
  display: none;
}

.models-container.active {
  display: block;
}

/* Grid layout control */
.models-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  flex-grow: 1;
}

@media (min-width: 640px) {
  .models-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 768px) {
  .models-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

        </style>
        <div class="escorts-tabs">
          <button class="escort-tab active" data-type="female">Female Escort</button>
          <button class="escort-tab" data-type="male">Male Escort</button>
          <button class="escort-tab" data-type="trans">Transsexual Escort</button>
        </div>
  
        <div id="female" class="models-container active">${this.renderCards(
          'female'
        )}</div>
        <div id="male" class="models-container">${this.renderCards(
          'male'
        )}</div>
        <div id="trans" class="models-container">${this.renderCards(
          'trans'
        )}</div>
      `;

    this.setupTabs();
  }

  setupTabs() {
    const tabs = this.shadowRoot.querySelectorAll('.escort-tab');
    const containers = this.shadowRoot.querySelectorAll('.models-container');

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        tabs.forEach((t) => t.classList.remove('active'));
        containers.forEach((c) => c.classList.remove('active'));

        tab.classList.add('active');
        this.shadowRoot
          .getElementById(tab.dataset.type)
          .classList.add('active');

        // Show images for selected tab
        this.showImages(tab.dataset.type);
      });
    });
  }

  showImages(category) {
    const container = this.shadowRoot.getElementById(category);
    const images = container.querySelectorAll('.escort-image');
    images.forEach((img) => {
      img.style.display = 'block';
    });
  }

  renderCards(type) {
    const models = [
      { name: 'Gloria', location: 'Kamuning' },
      { name: 'Jessica', location: 'Cubao Park' },
      { name: 'Samantha', location: 'Green Park' },
      { name: 'Michelle', location: 'Victoria' },
      { name: 'Lisa', location: 'Vineyard' },
      { name: 'Diana', location: 'Kings Valley' },
      { name: 'Jennifer', location: 'Buys Water' },
      { name: 'Patricia', location: "Earl's Court" },
      { name: 'Angelica', location: "King's Cross" },
    ];

    let img = '/assets/images/model-location 1.png';
    if (type === 'male')
      img =
        '/assets/images/front-view-woman-bdsm-aesthetics_23-2151117244 1.jpg';
    if (type === 'trans') img = '/assets/images/image (2).jpg';

    return `
      <div class="models-grid">
        ${models
          .map(
            (m) => `
          <div class="escort-card">
            <img src="${img}" alt="Escort" class="escort-image">
            <div class="escort-info">
              <h3 class="escort-name">${m.name}</h3>
              <p class="escort-location">${m.location}</p>
            </div>
          </div>
        `
          )
          .join('')}
      </div>
    `;
  }
}

customElements.define('escort-grid', EscortGrid);
