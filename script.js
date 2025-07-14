document.querySelectorAll('.toggle').forEach(button => {
  button.addEventListener('click', () => {
    const details = button.parentElement.nextElementSibling;
    const expanded = details.style.display === 'block';
    details.style.display = expanded ? 'none' : 'block';
    button.textContent = expanded ? 'Show More' : 'Show Less';
  });
});

document.getElementById('expandAll').addEventListener('click', () => {
  document.querySelectorAll('.project-details').forEach(details => {
    details.style.display = 'block';
  });
  document.querySelectorAll('.toggle').forEach(btn => {
    btn.textContent = 'Show Less';
  });
});
