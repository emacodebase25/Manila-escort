

// FAQ functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
      question.addEventListener('click', () => {
        // Toggle the current FAQ item
        const faqItem = question.parentElement;
        const answer = faqItem.querySelector('.faq-answer');
        const icon = question.querySelector('.faq-icon');
        
        // Toggle open class
        answer.classList.toggle('open');
        question.classList.toggle('active');
        
        // Change the icon
        if (answer.classList.contains('open')) {
          icon.textContent = '-';
        } else {
          icon.textContent = '+';
        }
      });
    });
  });