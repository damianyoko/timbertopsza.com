const gallery = document.querySelector('.gallery');
const preview = document.querySelector('.gallery > .preview');
gallery.addEventListener('click', ({ target }) => {
  if (target.classList.contains('pic'))
    [preview.src, target.src] = [target.src, preview.src];
});
