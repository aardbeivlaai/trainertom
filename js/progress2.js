// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

var bar = new ProgressBar.Circle(containerProgress, {
    color: 'url(#gradient)',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 3,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 3000,
    text: {
      autoStyleContainer: false
    },
    //from: { color: '#aaa', width: 1 },
    //to: { color: '#333', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
      
  
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value + "%");
      }
  
    }
  });
  bar.text.style.fontFamily = '"Open Sans", Helvetica, sans-serif';
  bar.text.style.fontSize = '2rem';
  
  bar.animate(1.0);  // Number from 0.0 to 1.0
  
  let linearGradient = `
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
        <stop offset="20%" stop-color="#61499D"/>
        <stop offset="50%" stop-color="#EA6594"/>
      </linearGradient>
    </defs>
  `
  
  bar.svg.insertAdjacentHTML('afterBegin', linearGradient);

  setTimeout("location.href = 'result.html';",3500);