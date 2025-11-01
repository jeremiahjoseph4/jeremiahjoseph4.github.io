// Create floating hearts background
function createHearts() {
  const heartsContainer = document.getElementById('heartsContainer');
  const heartCount = 20;
  
  for (let i = 0; i < heartCount; i++) {
    const heart = document.createElement('div');
    heart.innerHTML = '<i class="fas fa-heart"></i>';
    heart.classList.add('heart');
    
    // Random properties for each heart
    const left = Math.random() * 100;
    const delay = Math.random() * 8;
    const duration = 6 + Math.random() * 4;
    const size = 15 + Math.random() * 20;
    
    heart.style.left = `${left}%`;
    heart.style.animationDelay = `${delay}s`;
    heart.style.animationDuration = `${duration}s`;
    heart.style.fontSize = `${size}px`;
    
    heartsContainer.appendChild(heart);
  }
}

// Add click-to-create-heart effect
document.addEventListener('click', function(e) {
  const heart = document.createElement('div');
  heart.innerHTML = '<i class="fas fa-heart"></i>';
  heart.style.position = 'fixed';
  heart.style.left = `${e.clientX}px`;
  heart.style.top = `${e.clientY}px`;
  heart.style.color = '#ff6b93';
  heart.style.fontSize = '25px';
  heart.style.pointerEvents = 'none';
  heart.style.zIndex = '9999';
  heart.style.animation = 'clickHeart 1s forwards';
  
  document.body.appendChild(heart);
  
  // Remove heart after animation
  setTimeout(() => {
    heart.remove();
  }, 1000);
});

// Add CSS for click animation dynamically
const style = document.createElement('style');
style.textContent = `
  @keyframes clickHeart {
    0% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
    100% {
      opacity: 0;
      transform: translateY(-50px) scale(1.5);
    }
  }
`;
document.head.appendChild(style);

// Initialize the page
window.onload = function() {
  createHearts();
  
  // Add typewriter effect to English message
  const messageElement = document.querySelector('.message');
  const originalText = messageElement.textContent;
  messageElement.textContent = '';
  
  let i = 0;
  function typeWriter() {
    if (i < originalText.length) {
      messageElement.textContent += originalText.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    }
  }
  
  // Start typewriter after 1 second
  setTimeout(typeWriter, 1000);
};