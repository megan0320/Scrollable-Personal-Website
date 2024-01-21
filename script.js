gsap.registerPlugin("ScrollTrigger");


let scene = gsap.timeline();
let intro_tl = gsap.timeline();
let part1_tl = gsap.timeline();
let part2_tl = gsap.timeline();
let part3_tl = gsap.timeline();
let part4_tl = gsap.timeline();
let part5_tl = gsap.timeline();
let outro_tl = gsap.timeline();


ScrollTrigger.create({
  trigger: "#container",
  pin: true,
  start: "top top",
  end: "+=5700"
});

gsap.set(".specs", {
  x: -160,
  opacity: 0
});
gsap.set(".chars", {
  x: 260
});
part2_tl.set(".models li", {
  opacity: 0
});
part3_tl.set(".specs .border", {
  opacity: 0
});
part3_tl.set(".specs img", {
  opacity: 0
});
part3_tl.set(".specs dt", {
  opacity: 0
});
part3_tl.set(".specs dd", {
  opacity: 0
});
part4_tl.set(".chars h2", {
  opacity: 0
});
part4_tl.set(".chars dt", {
  opacity: 0
});
part4_tl.set(".chars dd", {
  opacity: 0
});

//
var today = new Date()
var curHr = today.getHours()

if (curHr < 12) {
  document.getElementById("intro-h1").textContent="Good Morning!";
} else if (curHr < 18) {
  document.getElementById("intro-h1").textContent="Good afternoon!";
} else {
  document.getElementById("intro-h1").textContent="Good evening!";
}

//-------canvas-------//
var TAU = Zdog.TAU;
var scale=1;
function makeAvatar( isGood, colors, options ) {

  var rotor = new Zdog.Anchor( options );

  var body = new Zdog.Group({
    addTo: rotor,
    rotate: { x: -TAU/8*0 },
    translate: { x: 0, y: 10*scale, z: 1*scale },
    /*translate: { z: -48 },*/
    updateSort: true,
  });

  var head = new Zdog.Anchor({
    addTo: body,
    translate: { y: -11*scale },
    rotate: { x: -TAU/8*0.3 },
  });

  // face
  var face = new Zdog.Ellipse({
    diameter: 6*scale,
    addTo: head,
    translate: { z: 4*scale },
    stroke: 8*scale,
    color: colors.skin,
  });

  var eyeGroup = new Zdog.Group({
    addTo: face,
    translate: { z: face.stroke/2 - 0.5 },
  });


  // eyes
  [ -1, 1 ].forEach( function( xSide ) {
    // cheek blush
      new Zdog.Ellipse({
        width: 2*scale,
        height: 2.3*scale,
        addTo: eyeGroup,
        translate: { x: 4.5*xSide*scale, y: 3*scale, z: -1*scale },
        rotate: { y: -TAU/16*xSide },
        stroke: 1*scale,
        color: '#FA8',
        fill: true,
      });
    

    var eyeX = 3.5*xSide*scale;

    // eye
    new Zdog.Ellipse({
      width: 0.75*scale,
      height: 1.5*scale,
      addTo: eyeGroup,
      color: colors.eye,
      translate: { x: eyeX },
      stroke: 2*scale,
      fill: true,
    });

    // eye brow
    new Zdog.Ellipse({
      addTo: eyeGroup,
      height: 3*scale,
      width: 1.2*scale,
      quarters: 2,
      translate: { x: eyeX, y: -3*scale },
      rotate: { z: -TAU/4 + 0.15*xSide * (isGood ? 1 : -1) },
      color: colors.newHair,
      stroke: 0.5*scale,
      fill: false,
      closed: true,
    });

  });


  // hair ball
  new Zdog.Shape({
    path: [
      { x: -1*scale },
      { x: 1*scale },
      { z: -3*scale },
    ],
    addTo: head,
    translate: { y: -1*scale, z: -1*scale },
    stroke: 18*scale,
    color: colors.newHair,
  });

  var bang = new Zdog.Shape({
    path: [
      {},
      { arc: [
        { z: 4*scale, y: 4*scale },
        { z: 0, y: 5*scale },
      ]},
    ],
    addTo: head,
    translate: { x: 2*scale, y: -7.5*scale, z: 0 },
    rotate: { x: 0.5, z: -0.5 },
    stroke: 4*scale,
    color: colors.newHair,
    closed: false,
  });
  bang.copy({
    translate: { x: 5*scale, y: -6*scale, z: 0 },
    rotate: { x: -0.3, z: -0.5 },
  });
  bang.copy({
    translate: { x: 5*scale, y: -6*scale, z: 0 },
    rotate: { y: -0.7, z: -1 },
  });

  // left side
  bang.copy({
    translate: { x: -2*scale, y: -7.5*scale, z: 0 },
    rotate: { x: 0, z: TAU/16*6*0 },
  });
  bang.copy({
    translate: { x: -5*scale, y: -6*scale, z: 5*scale },
    rotate: { x: 0, z: TAU/4 },
  });
  bang.copy({
    translate: { x: -5*scale, y: -6*scale, z: 3*scale },
    rotate: { y: 0.7, z: 1 },
  });

  // hair cover
  new Zdog.Shape({
    path: [
      { x: -3*scale },
      { x:  3*scale },
    ],
    addTo: head,
    stroke: 5*scale,
    translate: { y: -8*scale, z: 5*scale },
    color: colors.newHair,
  });

  // trail locks

  var trailLock = new Zdog.Shape({
    path: [
      { y: -4*scale, z: 0 },
      { bezier: [
        { y: 0, z: -4*scale },
        { y: 10*scale, z: -6*scale },
        { y: 5*scale, z: -10*scale }
      ]},
    ],
    addTo: head,
    translate: { z: -4*scale, y: 0 },
    stroke: 10*scale,
    color: colors.newHair,
    closed: false,
  });

  trailLock.copy({
    translate: { x: -3*scale, z: -4*scale },
    rotate: { z: -TAU/8 },
    stroke: 8*scale,
  });
  trailLock.copy({
    translate: { x: 3*scale, z: -4*scale },
    rotate: { z: TAU/8 },
    stroke: 8*scale,
  });
  trailLock.copy({
    translate: { y: 2*scale },
    // rotate: { z: TAU/2 },
    scale: { y: 0.5*scale },
    stroke: 8*scale,
  });

  // ----- torso ----- //

  // 2nd rib
  var torsoRib = new Zdog.Ellipse({
    width: 12*scale,
    height: 10*scale,
    addTo: body,
    rotate: { x: -TAU/4 },
    translate: { y: -1*scale },
    stroke: 6*scale,
    color: colors.parkaDark,
    fill: true,
  });
  // neck rib
  torsoRib.copy({
    width: 6*scale,
    height: 6*scale,
    translate: { y: -5*scale },
  });
  // 3rd rib
  torsoRib.copy({
    translate: { y: 3*scale },
  });
  // 4th rib
  torsoRib.copy({
    translate: { y: 7*scale },
    color: colors.parkaDark,
  });
  // waist
  new Zdog.Ellipse({
    width: 10*scale,
    height: 8*scale,
    addTo: body,
    rotate: { x: -TAU/4 },
    translate: { y: 11*scale },
    stroke: 4*scale,
    color: colors.tight,
    fill: true,
  });

  // arms
  [ -1, 1 ].forEach( function( xSide ) {
    var isLeft = xSide == 1;
    // shoulder ball
    
    var shoulderJoint = new Zdog.Anchor({
      addTo: body,
      translate: { x: 9*xSide*scale, y: -3*scale, z: -2*scale },
      rotate: isLeft ? { z: -TAU/16*2, x: TAU/16*2} : { z: TAU/16*2, x: -TAU/16*2 },
    });

    // top shoulder rib
    var armRib = new Zdog.Ellipse({
      diameter: 3*scale,
      rotate: { x: -TAU/4 },
      addTo: shoulderJoint,
      translate: { x: 0*xSide*scale },
      stroke: 5*scale,
      color: colors.parkaDark,
      fill: true,
    });
    armRib.copy({
      translate: { y: 4*scale },
    });

    var elbowJoint = new Zdog.Anchor({
      addTo: shoulderJoint,
      translate: { y: 8*scale },
      rotate: isLeft ? {x:-20,y:20,z: -TAU/8*3 } : { x:20,y:-20,z: TAU/8*1 },
    });

    armRib.copy({
      addTo: elbowJoint,
      translate: { x: 0, y: 0 },
    });
    armRib.copy({
      addTo: elbowJoint,
      translate: { y: 4*scale },
      color: colors.skin,
    });

    // hand
    new Zdog.Shape({
      addTo: elbowJoint,
      translate: { y: 9*scale, z: -1*scale },
      stroke: 8*scale,
      color: colors.skin,
    });

    // ----- legs ----- //
    var knee = { x:0,y:6*scale ,z:10*scale};
    
    var thigh = new Zdog.Shape({
      path: [ { y: 0,z:0 }, knee ],
      addTo: body,
      translate: { x: 4*xSide*scale, y: 13*scale },
      rotate: isLeft ? {} : { x: TAU/16, z: TAU/16 },
      stroke: 8*scale,
      color: colors.tight,
    });

    var shin = new Zdog.Shape({
      path: [ { y: 0 }, { y: 8*scale } ],
      addTo: thigh,
      stroke: 6*scale,
      translate: knee,
      rotate: isLeft ? {x: -TAU/16*0} : { x: -TAU/16*0 },
      color: colors.tight,
    });
    
    // shoe
    new Zdog.Shape({
      addTo: thigh,
      translate: { y: 18*scale, z: 10*scale },
      stroke: 8*scale,
      color: colors.skin,
    });

  });

  // butt
  new Zdog.Shape({
    path: [
      { x: -3*scale },
      { x: 3*scale },
    ],
    visible: false,
    addTo: body,
    translate: { y: 11*scale, z: -2*scale },
    stroke: 8*scale,
    color: colors.tight,
  });

  //bubble
   var bubble=new Zdog.Shape({
    stroke: 30*scale,
    translate: { y: 28*scale },
    rotate: { x: 0.3, z: 0.1 },
    addTo: body,
    color: colors.bubble,
  });
  
  //light
  bubble.copy({
      addTo: body,
      stroke: 35*scale,
      translate: { y: 28*scale },
      color: colors.bubbleLight,
    });
  
  bubble.copy({
      addTo: body,
      stroke: 10*scale,
      translate: { x: 30*scale,  y: 4*scale ,z:10*scale},
      color: colors.bubble,
    });
  
  //light
  bubble.copy({
      addTo: body,
      stroke: 13*scale,
      translate: { x: 30*scale,  y: 4*scale,z:10*scale},
      color: colors.bubbleLight,
    });
  
  bubble.copy({
      addTo: body,
      stroke: 5*scale,
      translate: { x: 50*scale,  y: 40*scale ,z:20*scale},
      color: colors.bubble,
    });
  
  //light
  bubble.copy({
      addTo: body,
      stroke: 8*scale,
      translate: { x: 50*scale,  y: 40*scale ,z:20*scale},
      color: colors.bubbleLight,
    });
  
  bubble.copy({
      addTo: body,
      stroke: 8*scale,
      translate: { x: -50*scale,  y: 40*scale ,z:-20*scale},
      color: colors.bubble,
    });
  
  //light
  bubble.copy({
      addTo: body,
      stroke: 11*scale,
      translate: { x: -50*scale,  y: 40*scale ,z:-20*scale},
      color: colors.bubbleLight,
    });
  
  bubble.copy({
      addTo: body,
      stroke: 5*scale,
      translate: { x: -30*scale,  y: 20*scale ,z:-30*scale},
      color: colors.bubble,
    });
  //light
  bubble.copy({
      addTo: body,
      stroke: 8*scale,
      translate: { x: -30*scale,  y: 20*scale ,z:-30*scale},
      color: colors.bubbleLight,
    });
  
}
//-------latop-------//
function makeLaptop( options ) {

  var rotor = new Zdog.Anchor( options );
  
  screenGroup = new Zdog.Group({
  addTo: illo,
	translate: {y: 13*scale, z: 25*scale},
	rotate: {x: -TAU/24,y:TAU/4*2}
});
	
  screen = new Zdog.RoundedRect({
    addTo: screenGroup,
    width: 24*scale,
    height: 18*scale,
    fill: true,
    translate: {y: -9*scale},
    color: "#363636"
  });

  lcd = new Zdog.Rect({
    addTo: screen,
    width: 22*scale,
    height: 14*scale,
    translate: {y: -1*scale, z: 0},
    stroke: 0,
    fill: true,
    color: "#000",
    backface: false
  });
}
function makeLaptopPad( options ) {
  
  var rotor = new Zdog.Anchor( options );
  
  padGroup = new Zdog.Group({
  addTo: rotor
  });

  pad = new Zdog.RoundedRect({
    addTo: padGroup,
    width: 24*scale,
    height: 15*scale,
    rotate: {x: TAU/4,z:TAU/4*2},
    translate: {y: 13*scale, z: 18*scale},
    fill:true
  });


  powerBtn = new Zdog.Ellipse({
    addTo: pad,
    translate: {x: 10*scale, y: -6.5*scale},
    stroke: 0,
    fill: true,
    color: "#555",
    backface: false
  });


  keyboard = new Zdog.RoundedRect({
    addTo: pad,
    width: 22*scale,
    height: 8*scale,
    translate: {y: -1*scale},
    stroke: 0,
    fill: true,
    color: "#555",    
    backface: false
  });


  touchpad = new Zdog.RoundedRect({
    addTo: pad,
    width: 6*scale,
    height: 4*scale,
    translate: {y: 6*scale},
    stroke: 0,
    fill: true,
    color: "#555",
    backface: false
  });
	
	
}

//-------draw zdog-------//

var illoElem = document.querySelector('.illo');
var w = 160;
var h = 160;
var minWindowSize = Math.min( window.innerWidth, window.innerHeight );
var zoom = Math.min( 5, Math.floor( minWindowSize / w ) );
illoElem.setAttribute( 'width', w * zoom );
illoElem.setAttribute( 'height', h * zoom );

var isSpinning = true;
var TAU = Zdog.TAU;

var illo = new Zdog.Illustration({
  element: illoElem,
  zoom: zoom,
  //
  rotate: { y: -TAU/4 },
  dragRotate: true,
  onDragStart: function() {
    isSpinning = false;
  },
});

var madColor = {
  skin: '#FD9',
  hair: '#D53',
  newHair: '#742',
  parkaLight: '#ff2',
  parkaDark: '#fff',
  tight: '#88F',
  eye: '#333',
  bubble:'#9DF',
  bubbleLight:'rgba( 255, 255, 255, 0.2 )',
};



// -- illustration shapes --- //

makeAvatar( true, madColor, {
  addTo: illo,
});
makeLaptop( {
  addTo: illo,
} ) ;
makeLaptopPad( {
  addTo: illo,
} ) ;
// -- animate --- //

var isSpinning = true;
var rotateSpeed = -TAU / 60;
var xClock = 0;
var then = new Date() - 1 / 60;

function animateCanvas() {
  update();
  illo.renderGraph();
  requestAnimationFrame(animateCanvas);
}

//update

function update() {
  var now = new Date();
  var delta = now - then;
  // auto rotate
  if (isSpinning) {
    var theta = (rotateSpeed / 240) * delta * -1;
    illo.rotate.y += theta;
    xClock += theta / 4;
    illo.rotate.x = (Math.sin(xClock) * TAU) / 12;
  }

  illo.updateGraph();

  then = now;
}

animateCanvas();

//end canvas 
// Pull out the preloader
var myVar;

function myFunction() {
  myVar = setTimeout(hidePage, 1500);
}

function hidePage() {
  document.getElementById("loader").style.display = "none";
}
myFunction()
// TIMELINE: Intro
intro_tl
/*
  .fromTo(
    "#loader",
    {
      opacity:1,
      duration: 1
    },
    {
      opacity:0,
      
    }
  )*/
  .fromTo(
    "#wrapWin",
    {
      height: 80
    },
    {
      height: 800,
      duration: 0.1
    }
  )
  .fromTo(
    "#liberty",
    {
      scale: 0.8,
      y: -300
    },
    {
      scale: 1,
      y: 0,
      duration: 0.1
    }
  )
  .to("#logo", {
    scrollTrigger: {
      start: 300,
      end: 500,
      scrub: 0.5
    },
    y: -190,
    scale: 0.6,
    duration: 0.6,
    ease: "expo.out"
  })
  .to("#intro-h1", {
    scrollTrigger: {
      start: 500,
      end: 700,
      scrub: 0.5
    },
    scale: 0,
    duration: 0.6,
    ease: "expo.out"
  })
  .to("#intro-h3", {
    scrollTrigger: {
      start: 550,
      end: 750,
      scrub: 0.5
    },
    scale: 0,
    duration: 0.6,
    ease: "expo.out"
  });

// TIMELINE: Part 1
part1_tl
  .fromTo(
    "#liberty",
    {
      scale: 1,
      y: 0
    },
    {
      scale: 0.6,
      y: -300,
      duration: 1,
      ease: "sine.out",
      scrollTrigger: {
        start: 1000,
        end: 1200,
        scrub: 0.5
      }
    }
  )
  .from("#panel-h1", {
    scrollTrigger: {
      start: 1300,
      end: 1500,
      scrub: 0.5
    },
    scale: 0,
    opacity: 0,
    duration: 1,
    ease: "sine.out"
  })
  .from(".models li", {
    scrollTrigger: {
      start: 1250,
      end: 1450,
      scrub: 1
    },
    opacity: 0,
    x: -20,
    duration: 1,
    stagger: 0.3,
    ease: "sine.out"
  });

// TIMELINE: Part 2
part2_tl
  .from("#panel-h1", {
    scrollTrigger: {
      start: 2000,
      end: 2200,
      scrub: 1
    },
    scale: 1,
    duration: 1,
    ease: "sine.out"
  })
  .fromTo(
    ".models li",
    {
      x: 0,
      opacity: 1
    },
    {
      x: -20,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: "sine.out",
      scrollTrigger: {
        start: 2000,
        end: 2200,
        scrub: 1
      }
    }
  );

// TIMELINE: Part 3
part3_tl
  .fromTo(
    "#wrapWin",
    {
      height: 800
    },
    {
      scrollTrigger: {
        start: 2500,
        end: 2700,
        scrub: 1
      },
      height: 80,
      duration: 2,
      ease: "sine.out"
    }
  )
  .fromTo("#liberty", {
    scale:0.6,
    y:-300,
    },
    {
    scrollTrigger: {
      start: 2600,
      end: 2800,
      scrub: 1
    },
    x: 400,
    y:-360,
    duration: 2,
    ease: "sine.out"
  })
  /*
  .to(".details", {
    scrollTrigger: {
      start: 2600,
      end: 2800,
      scrub: 1
    },
    opacity: 1,
    duration: 2,
    ease: "sine.out"
  })*/
  .to(".specs", {
    scrollTrigger: {
      start: 2600,
      end: 3000,
      scrub: 1
    },
    opacity: 1,
    duration: 1.5,
    ease: "sine.out"
  })
  .from(".specs h2", {
    duration: 1*0.5,
    opacity: 0,
    x: -30,
    scrollTrigger: {
      start: 2600,
      end: 3000,
      scrub: 1
    }
  })
  .from(".specs .border", {
    duration: 1*0.5,
    opacity: 0,
    stagger: 0.3,
    x: -30,
    scrollTrigger: {
      start: 2600,
      end: 3000,
      scrub: 2
    }
  })
  .from(".specs img", {
    duration: 1*0.5,
    opacity: 0,
    stagger: 0.3,
    x: -30,
    scrollTrigger: {
      start: 2600,
      end: 2800,
      scrub: 2
    }
  })
  .from(".specs dt", {
    duration: 1*0.5,
    opacity: 0,
    stagger: 0.3,
    x: -30,
    scrollTrigger: {
      start: 2600,
      end: 2800,
      scrub: 2
    }
  })
  .from(
    ".specs dd",
    {
      duration: 1*0.5,
      opacity: 0,
      stagger: 0.3,
      x: -30,
      scrollTrigger: {
        start: 2600,
        end: 2800,
        scrub: 2
      }
    },
    "-=.5"
  )
  .from(
    ".specs .border",
    {
      duration: 1*0.5,
      opacity: 1,
      stagger: 0.3,
      x: -30,
      scrollTrigger: {
        start: 3200,
        end: 3400,
        scrub: 1
      }
    },
    "-=.5"
  )
  .from(
    ".specs img",
    {
      duration: 1*0.5,
      opacity: 1,
      stagger: 0.3,
      x: -30,
      scrollTrigger: {
        start: 3200,
        end: 3400,
        scrub: 1
      }
    },
    "-=.5"
  )
  .from(
    ".specs dd",
    {
      duration: 1*0.5,
      opacity: 1,
      stagger: 0.3,
      x: -30,
      scrollTrigger: {
        start: 3200,
        end: 3400,
        scrub: 1
      }
    },
    "-=.5"
  )
  .from(".specs dt", {
    duration: 1*0.5,
    opacity: 1,
    stagger: 0.3,
    x: -30,
    scrollTrigger: {
      start: 3200,
      end: 3400,
      scrub: 1
    }
  })
  .from(".specs h2", {
    duration: 1*0.5,
    opacity: 1,
    x: -30,
    scrollTrigger: {
      start: 3200,
      end: 3400,
      scrub: 1
    }
  })
  .fromTo(
    "#liberty",
    {
      x: 400,
      y:-360,
    },
    {
      scrollTrigger: {
        start: 3500,
        end: 3800,
        scrub: 1
      },
      x: -360,
      y:-360,
      duration: 3,
      ease: "sine.out"
    }
  );


// TIMELINE: Part 4
part4_tl
  .from(".chars h2", {
    duration: 1,
    opacity: 0,
    x: 30,
    scrollTrigger: {
      start: 3800,
      end: 4000,
      scrub: 1
    }
  })
  .from(".chars dt", {
    duration: 1,
    opacity: 0,
    stagger: 0.3,
    x: 30,
    scrollTrigger: {
      start: 3800,
      end: 4000,
      scrub: 2
    }
  })
  .from(
    ".chars dd",
    {
      duration: 1,
      opacity: 0,
      stagger: 0.3,
      x: 30,
      scrollTrigger: {
        start: 3800,
        end: 4000,
        scrub: 2
      }
    },
    "-=.5"
  );

// TIMELINE: Part 5
part5_tl
  .fromTo(
    ".chars h2",
    {
      opacity: 1,
      x: 0
    },
    {
      duration: 1,
      opacity: 0,
      x: 30,
      scrollTrigger: {
        start: 4200,
        end: 4400,
        scrub: 1
      }
    }
  )
  .fromTo(
    ".chars dt",
    {
      opacity: 1,
      x: 0
    },
    {
      duration: 1,
      opacity: 0,
      stagger: 0.3,
      x: 30,
      scrollTrigger: {
        start: 4200,
        end: 4400,
        scrub: 2
      }
    }
  )
  .fromTo(
    ".chars dd",
    {
      opacity: 1,
      x: 0
    },
    {
      duration: 1,
      opacity: 0,
      stagger: 0.3,
      x: 30,
      scrollTrigger: {
        start: 4200,
        end: 4400,
        scrub: 2
      }
    },
    "-=.5"
  )
  .fromTo(
    "#liberty",
    {
      x: -360,
      y:-360
    },
    {
      scrollTrigger: {
        start: 4400,
        end: 4600,
        scrub: 1
      },
      x: 0,
      y:-360,
      duration: 3,
      ease: "sine.out"
    }
  );

// TIMELINE: Outro
outro_tl
  .fromTo(
    "#wrapWin",
    {
      height: 80
    },
    {
      scrollTrigger: {
        start: 5000,
        end: 5200,
        scrub: 1
      },
      height: 800,
      duration: 2,
      ease: "sine.out"
    }
  )
  .fromTo(
    "#liberty",
    {
      scale: 0.6,
      x: 0,
      y: -360
    },
    {
      scrollTrigger: {
        start: 5200,
        end: 5400,
        scrub: 1
      },
      x: -150,
      scale: 0.8,
      y: -180,
      duration: 3,
      ease: "sine.out"
    }
  )
  .from(".outro h2", {
    scrollTrigger: {
      start: 5300,
      end: 5400,
      scrub: 1
    },
    duration: 1,
    y: 30,
    opacity: 0
  })
  .from(".outro p", {
    scrollTrigger: {
      start: 5400,
      end: 5500,
      scrub: 1
    },
    duration: 1,
    y: 30,
    opacity: 0
  })
  .from(".outro .contact", {
    scrollTrigger: {
      start: 5500,
      end: 5600,
      scrub: 1
    },
    duration: 1,
    y: 30,
    opacity: 0
  })
  .from(".outro button", {
    scrollTrigger: {
      start: 5500,
      end: 5600,
      scrub: 1
    },
    duration: 1,
    y: 30,
    opacity: 0
  });

// TIMELINE: Main
scene
  .set("#liberty", {
    x: 0
  })
  .add(intro_tl)
  .add(part1_tl)
  .add(part2_tl)
  .add(part3_tl)
  .add(part4_tl)
  .add(part5_tl)
  .add(outro_tl);

