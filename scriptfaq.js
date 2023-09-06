const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const title = item.querySelector('.faq-title');
  const content = item.querySelector('.faq-content');
  
  title.addEventListener('click', () => {
    // Fechar todos os outros itens
    faqItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.querySelector('.faq-content').style.display = 'none';
      }
    });
    
    // Alternar o estado de exibição do conteúdo
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
  });
});