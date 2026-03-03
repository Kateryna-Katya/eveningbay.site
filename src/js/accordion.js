document.querySelectorAll('.faq-acc-el-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
        const parentElement = trigger.closest('.faq-acc-el');
        const panel = parentElement.querySelector('.faq-acc-el-descr-frame');
        const svg = trigger.querySelector('svg');
        const isOpen = parentElement.classList.contains('open');

        const plusIcon = `
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.1665 10H15.8332" stroke="#151515" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M10 4.1665V15.8332" stroke="#151515" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
</svg>`;

        const minusIcon = `
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.1665 10H15.8332" stroke="#151515" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M10 4.1665V15.8332" stroke="#151515" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
</svg>`;

        if (!isOpen) {
            parentElement.classList.add('open');
            panel.style.maxHeight = panel.scrollHeight + 'px';
            svg.outerHTML = minusIcon;
        } else {
            parentElement.classList.remove('open');
            panel.style.maxHeight = '0';
            svg.outerHTML = plusIcon;
        }
    });
});