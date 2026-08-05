const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');
const modalClose = document.getElementById('modalClose');
const backToTop = document.getElementById('backToTop');
const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    navLinks.classList.toggle('open');
  });

  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

document.querySelectorAll('.cert-card').forEach((card) => {
  card.addEventListener('click', () => {
    modalTitle.textContent = card.dataset.title || 'เกียรติบัตร';
    modalText.textContent = card.dataset.text || 'รายละเอียดเพิ่มเติม';
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  });
});

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}

if (modalClose) {
  modalClose.addEventListener('click', closeModal);
}

if (modal) {
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
