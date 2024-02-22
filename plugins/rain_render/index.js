function loadDivContent(div) {
    div.style.visibility = 'visible';
    div.style.opacity = '1';
  }
  function removeDivContent(div) {
    div.style.opacity = '0';
    div.style.visibility = 'hidden';
  }
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        loadDivContent(entry.target);
      } else {
        removeDivContent(entry.target);
      }
    });
  }, {threshold: 0.1,rootMargin: '100px 0px 100px 0px'});
  setInterval(()=>{
    const divs = document.querySelectorAll('div.message');
    divs.forEach(div => {
      if (!div.observed) {
        div.observed = true
        loadDivContent(div); 
        observer.observe(div);  
      }
    });
  },100)