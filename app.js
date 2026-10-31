(() => {
  'use strict';
  const projects = window.PORTFOLIO_PROJECTS || [];
  const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const projectURL = project => `project.html?id=${encodeURIComponent(project.id)}`;
  const tags = values => values.map(v => `<span class="project-tag">${escapeHTML(v)}</span>`).join('');
  const imageMarkup = (p, isHero = false) => `<img src="${escapeHTML(p.image)}" alt="${escapeHTML(p.imageAlt || p.title)}" ${isHero ? '' : 'loading="lazy"'} />`;
  const grid = document.getElementById('projects-grid');
  const renderCard = (p, featured) => `
    <a class="project-card ${featured ? 'project-card-featured' : ''}" href="${projectURL(p)}" aria-label="Read case study: ${escapeHTML(p.title)}">
      <div class="project-media ${p.imageLabel==='ILLUSTRATIVE GRAPHIC'?'project-media-illustration':''}">
        ${imageMarkup(p)}
        <span class="media-label">${escapeHTML(p.imageLabel || 'PROJECT IMAGE')}</span>
        ${p.video ? '<span class="media-video-chip" aria-hidden="true">▶ VIDEO</span>' : ''}
        <span class="media-arrow" aria-hidden="true">↗</span>
      </div>
      <div class="project-info"><div class="project-micro"><span>${escapeHTML(p.number)} / ${escapeHTML(p.year)}</span><span>${escapeHTML(p.descriptor)}</span></div><h3>${escapeHTML(p.title)}</h3><p>${escapeHTML(p.summary)}</p><div class="project-tags">${tags(p.categories)}</div></div>
    </a>`;
  const renderGrid = filter => {
    if (!grid) return;
    const filtered = projects.filter(p => filter === 'all' || p.categories.includes(filter));
    const ordered = filtered; // projects.js is already in curated display order.
    grid.innerHTML = ordered.map((p,i) => renderCard(p, filter === 'all' && i < 2)).join('') || '<p class="empty-results">No projects in this category yet.</p>';
  };
  if (grid) {
    renderGrid('all');
    document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
      document.querySelectorAll('.filter').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed','false'); });
      button.classList.add('active'); button.setAttribute('aria-pressed','true');
      renderGrid(button.dataset.filter);
    }));
  }

  const projectContainer = document.getElementById('case-study');
  if (projectContainer) {
    const id = new URLSearchParams(location.search).get('id');
    const p = projects.find(item => item.id === id);
    if (!p) {
      document.title = 'Project not found — Ethan Bikhazi-Green';
      projectContainer.innerHTML = '<div class="missing"><div class="eyebrow eyebrow-dark">PROJECT NOT FOUND</div><h1>Nothing here <em>yet.</em></h1><p>That project may have moved or has not been added.</p><a class="button button-primary" href="index.html#work">Back to projects →</a></div>';
    } else {
      document.title = `${p.title} — Ethan Bikhazi-Green`;
      const idx = projects.findIndex(item => item.id === p.id);
      const next = projects[(idx+1) % projects.length];
      const videoMarkup = p.video ? `<figure class="case-video case-video-feature">
        <div class="case-video-wrap case-video-stage"><span class="video-corner">WATCH THE PROJECT IN ACTION <span aria-hidden="true">▶</span></span><video controls playsinline preload="metadata" poster="${escapeHTML(p.video.poster)}" aria-label="Demonstration video: ${escapeHTML(p.title)}"><source src="${escapeHTML(p.video.src)}" type="video/mp4" />Your browser cannot play this video. <a href="${escapeHTML(p.video.src)}">Open the video file</a>.</video></div>
        <figcaption>${escapeHTML(p.video.caption)}</figcaption>
      </figure>` : '';
      const imagesMarkup = (p.gallery || []).length ? `<div class="case-gallery case-gallery-feature">${p.gallery.map(g => `<figure class="case-gallery-item"><a target="_blank" rel="noopener noreferrer" href="${escapeHTML(g.src)}" aria-label="Open image: ${escapeHTML(g.caption)}"><img src="${escapeHTML(g.src)}" alt="${escapeHTML(g.alt)}" loading="lazy" /><span class="expand-icon" aria-hidden="true">↗</span></a><figcaption>${escapeHTML(g.caption)}</figcaption></figure>`).join('')}</div>` : '';
      const docsMarkup = (p.documents || []).length ? `<div class="case-documents"><h3 class="case-subheading">Technical documentation</h3>${p.documents.map(d => `<a class="document-link" href="${escapeHTML(d.href)}" target="_blank" rel="noopener noreferrer"><span aria-hidden="true">▤</span><span>${escapeHTML(d.label)}</span><span aria-hidden="true">↗</span></a>`).join('')}</div>` : '';
      const hasMedia = !!(p.video || (p.gallery || []).length || (p.documents || []).length);
      // sourceNote stores editing guidance and is intentionally not rendered to visitors.
      const noteHTML = '';
      // Avoid public development to-do lists; unfinished evidence stays in project data.
      const todoHTML = '';
      const illustrationLabel = p.imageLabel === 'ILLUSTRATIVE GRAPHIC' ? 'ILLUSTRATIVE GRAPHIC — NOT A PROJECT PHOTO' : (p.imageLabel || 'ACTUAL PROJECT EVIDENCE');
      // Put proof before prose: playable demo, then real project imagery, then engineering narrative.
      const intro = `<div class="case-heading ${p.video ? 'case-heading-compact' : ''}"><div class="eyebrow eyebrow-dark"><span class="eyebrow-line"></span>${escapeHTML(p.descriptor).toUpperCase()}</div><h1>${escapeHTML(p.title)}</h1>${p.video ? '' : `<p>${escapeHTML(p.summary)}</p>`}<div class="project-tags">${tags(p.categories)}</div></div>`;
      const heroImage = `<div class="case-hero-image ${p.imageLabel==='ILLUSTRATIVE GRAPHIC'?'case-hero-illustration':''}">${imageMarkup(p, true)}<span>${escapeHTML(illustrationLabel)}</span></div>`;
      const gallery = imagesMarkup ? `<section class="case-visual-evidence" aria-labelledby="gallery-heading"><div class="case-evidence-heading"><span>PROJECT VISUALS</span><h2 id="gallery-heading">A closer look.</h2><p>Actual photos, CAD captures and test evidence. Select any image to view it full-size.</p></div>${imagesMarkup}</section>` : '';
      const projectInfo = `<div class="case-at-glance"><div><span>ROLE / CONTEXT</span><strong>${escapeHTML(p.role)}</strong></div><div><span>WHEN</span><strong>${escapeHTML(p.timeline)}</strong></div><div><span>TOOLS / METHODS</span><strong>${escapeHTML(p.tools.slice(0,3).join(' · '))}</strong></div></div>
        <section class="case-results" aria-label="Project metrics">${p.metrics.map(m => `<div><strong>${escapeHTML(m[0])}</strong><span>${escapeHTML(m[1])}</span></div>`).join('')}</section>`;
      const narrative = `<section class="case-content"><div class="case-sidebar"><span>01 / THE PROBLEM</span></div><div><h2>Engineering challenge</h2><p>${escapeHTML(p.challenge)}</p></div></section>
        <section class="case-content case-process"><div class="case-sidebar"><span>02 / THE PROCESS</span></div><div><h2>Design, build & iterate</h2>${p.process.map((s,i) => `<div class="process-row"><span class="process-number">${String(i+1).padStart(2,'0')}</span><div><h3>${escapeHTML(s[0])}</h3><p>${escapeHTML(s[1])}</p></div></div>`).join('')}</div></section>
        <section class="case-content"><div class="case-sidebar"><span>03 / THE OUTCOME</span></div><div><h2>Results & contribution</h2><p>${escapeHTML(p.result)}</p><h3 class="case-subheading">My contribution</h3><p>${escapeHTML(p.contribution)}</p></div></section>`;
      projectContainer.innerHTML = `
        <div class="case-back"><a href="index.html#work">← ALL PROJECTS</a><span>CASE STUDY / ${escapeHTML(p.number)}</span></div>
        ${intro}
        ${p.video ? `<section class="case-motion-first" aria-label="Video demonstration of ${escapeHTML(p.title)}">${videoMarkup}</section>${gallery}<p class="case-visual-summary">${escapeHTML(p.summary)}</p>` : `${heroImage}${gallery}`}
        ${projectInfo}
        ${narrative}
        <section id="project-evidence" class="case-content case-media-next"><div class="case-sidebar"><span>04 / MORE DETAILS</span></div><div><h2>Documentation & tools.</h2>${!p.video && videoMarkup ? videoMarkup : ''}${docsMarkup}<div class="skill-line"><span>TOOLS & METHODS</span><div class="project-tags">${tags(p.tools)}</div></div></div></section>
        <a class="next-project" href="${projectURL(next)}"><div><span>UP NEXT / ${escapeHTML(next.number)}</span><h2>${escapeHTML(next.title)}</h2></div><span aria-hidden="true">↗</span></a>`;
    }
  }
  document.querySelectorAll('.current-year').forEach(el => el.textContent = String(new Date().getFullYear()));
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav-links');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded','false');
    }));
  }
})();
