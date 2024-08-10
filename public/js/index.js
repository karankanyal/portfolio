const email = 'mailto:karankanyal23@gmail.com?';
const gitHub = 'https://github.com/karankanyal';
const linkedin = 'https://www.linkedin.com/in/karan-kanyal-b5750a161/';

const connectingPlatform = document.querySelector('.connecting--paltform');
const navbar = document.querySelector('.navigation');

document.addEventListener('DOMContentLoaded', () => {
  // const menuBtn = document.querySelector('.menu');
  // const services = document.querySelector('.services');

  // if (!menuBtn) return;

  // menuBtn.addEventListener('click', () => {
  //   services.classList.toggle('service__positionChange');
  //   document.querySelector('.menu__bar').classList.toggle('menu__bar-open');
  //   services.classList.toggle('hidden');
  // });

  const elements = document.querySelectorAll('.animation');

  (async () => {
    for (const element of elements) {
      const text = element.getAttribute('data-text');
      element.innerHTML = '';
      for (let i = 0; i < text.length; i++) {
        await appendCharacterWithDelay(element, text[i], 50); // 100ms delay per character
      }
    }
  })();
});

function appendCharacterWithDelay(element, character, delay) {
  return new Promise(resolve => {
    setTimeout(() => {
      const span = document.createElement('span');
      span.textContent = character === ' ' ? '\u00A0' : character;
      if (element.tagName === 'H4') span.style.color = 'rgb(219, 219, 157)';
      element.appendChild(span);
      span.style.animationDelay = `${delay / 1000}s`;
      resolve();
    }, delay);
  });
}

window.addEventListener('scroll', () => {
  if (window.scrollY > window.innerHeight) {
    navbar.style.position = 'sticky';
  } else {
    navbar.style.position = 'static';
  }
  connectingPlatform.style.transform = `translateX(-${window.scrollY / 4}px)`;
});

connectingPlatform.addEventListener('click', function (e) {
  const platform = e.target.closest('.platform');
  if (platform.classList.contains('linkedin--link'))
    window.open(linkedin, '_blank');
  if (platform.classList.contains('github--link'))
    window.open(gitHub, '_blank');
  if (platform.classList.contains('email--link')) window.open(email, '_blank');
  if (!platform.platform.classList) return;
});
