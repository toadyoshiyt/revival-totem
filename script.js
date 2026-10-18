const label = document.getElementById('ingredient-name');
for (const slot of document.querySelectorAll('[data-item]')) {
  slot.title = slot.dataset.item;
  const inspect = () => { label.textContent = slot.dataset.item; };
  slot.addEventListener('mouseenter', inspect);
  slot.addEventListener('focus', inspect);
  slot.addEventListener('click', inspect);
}
