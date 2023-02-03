(function () {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  let TOGGLE_MENU = false;
  let activeTabDrink = 0
  let showPopup = false


  let downButton = document.getElementById('Chevrons')
  let mainContent = document.querySelector('.main-content')

  function scrollDownScreen() {
    mainContent.scrollIntoView({
      behavior: 'smooth'
    })
  }

  let siteHeader = document.querySelector('.site-header')

  window.addEventListener('scroll', function() {
    let scroll = window.scrollY;
    let screenHeight = window.innerHeight
    const header = document.querySelector('.site-header')
    if (scroll > (screenHeight - 80) && !header.classList.contains('transparent')) {
      header.classList.add('scrolled')
    }
    else {
      header.classList.remove('scrolled')
    }
});


  if(downButton){
    downButton.addEventListener('click', scrollDownScreen)
  }

  function init() {
    // new SmoothScroll(target,speed,smooth)
    new SmoothScroll(document, 40, 16)
  }

  function SmoothScroll(target, speed, smooth) {
    if (target === document)
      target = (document.scrollingElement ||
        document.documentElement ||
        document.body.parentNode ||
        document.body)

    let moving = false
    let pos = target.scrollTop
    let frame = target === document.body &&
      document.documentElement ?
      document.documentElement :
      target

    target.addEventListener('mousewheel', scrolled, {
      passive: false
    })
    target.addEventListener('DOMMouseScroll', scrolled, {
      passive: false
    })

    function scrolled(e) {
      e.preventDefault();
      let delta = normalizeWheelDelta(e)

      pos += -delta * speed
      pos = Math.max(0, Math.min(pos, target.scrollHeight - frame.clientHeight))

      if (!moving) update()
    }

    function normalizeWheelDelta(e) {
      if (e.detail) {
        if (e.wheelDelta)
          return e.wheelDelta / e.detail / 40 * (e.detail > 0 ? 1 : -1) // Opera
        else
          return -e.detail / 3 // Firefox
      } else
        return e.wheelDelta / 120 // IE,Safari,Chrome
    }

    function update() {
      moving = true
      let delta = (pos - target.scrollTop) / smooth

      target.scrollTop += delta

      if (Math.abs(delta) > 0.5)
        requestFrame(update)
      else
        moving = false
    }

    let requestFrame = function () { // requestAnimationFrame cross browser
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (func) {
          window.setTimeout(func, 1000 / 50);
        }
      );
    }()
  }

  const menuBurger = document.querySelector('#burger-menu')
  menuBurger.addEventListener('click', () => {
    const navigationPage = document.querySelector('#navigation-page')
    const header = document.querySelector('.site-header')
    const logo = document.querySelector('.logo')
    const navLogo = document.querySelector('.nav-logo')
    navigationPage.style.height = window.innerHeight + 'px'

    // opens menu
    if (!TOGGLE_MENU) {
      siteHeader.classList.add('transparent') //for navigation page on mobile
      //if (window.innerWidth > 450) {
        if (window.innerWidth > 960) {
        navLogo.classList.remove('hidden')
        logo.classList.add('hidden')
        header.classList.remove('scrolled')
      } else {
        document.body.style = "height: 100vh;"
      }
      header.classList.remove('open-burger')
      navigationPage.classList.remove('hidden')
    }

    if (TOGGLE_MENU) {
      siteHeader.classList.remove('transparent') //for navigation page on mobile
      document.body.style = ""
      navigationPage.classList.add('close')
      navLogo.classList.add('hidden')
      logo.classList.remove('hidden')
      header.classList.add('open-burger')

      // show header background color 
      if(window.scrollY > (window.innerHeight - 80)){
        header.classList.add('scrolled')
      }
      setTimeout(() => {
        navigationPage.classList.add('hidden')
        navigationPage.classList.remove('close')
      }, 500)
    }

    TOGGLE_MENU = !TOGGLE_MENU
  })

  document.querySelector('#closePopup').addEventListener('click', () => {
    togglePopup(false)
  })

  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape' || e.keyCode === 27)
      togglePopup(false)
  })

  document.querySelector('#newsletterPopupBck').addEventListener('click', (e) => {
    if (e.target.id == document.querySelector('#newsletterPopupBck').id)
      togglePopup(false)
  })

  document.querySelectorAll('.openPopup').forEach(el => {
    el.addEventListener('click', () => {
      togglePopup(true)
    })
  })

  function togglePopup(condition) {
    showPopup = condition;

    if (showPopup) {
      document.getElementById('newsletterPopup').classList.remove('hidden')
    } else {
      document.getElementById('newsletterPopup').classList.add('hidden')
    }
  }


  /*if (document.body.id === 'food') {
    if(document.querySelector('.product-title')){
      document.querySelector('.product-title').style.paddingTop = '0px'
    }

    const drinkItems = document.querySelectorAll('#drink-menu-categories .menu-category-title')
    const drinkItemsProducts = document.querySelectorAll('#drink-menu-categories .category-products')

    drinkItems.forEach((di, idx) => {
      di.addEventListener('click', () => {
        activeTabDrink = idx
        di.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        })
        filterProducts(drinkItems, drinkItemsProducts, activeTabDrink)
      })
    })

    filterProducts(drinkItems, drinkItemsProducts, activeTabDrink)
  }
*/

  function filterProducts(items, products, activeTab) {
    items.forEach((item, idx) => {
      if (idx === activeTab)
        item.classList.add('active')
      else
        item.classList.remove('active')
    })
    products.forEach((product, idx) => {
      if (idx === activeTab)
        product.classList.remove('hidden')
      else
        product.classList.add('hidden')
    })
  }

  /* partners - farms */

  if (document.body.id === 'about') {
    const accordions = document.querySelectorAll('.accordion')
    accordions.forEach((a) => {
      console.log('accordions',accordions)
      a.addEventListener('click', () => {
        if (a.classList.contains('accordion-opened')) {
          a.classList.remove('accordion-opened')
          return
        }
        
        let useSetTimeout = false

        accordions.forEach((ac) => {
          if (ac.classList.contains('accordion-opened')) {
            ac.classList.remove('accordion-opened')
            useSetTimeout = true
          }
        }) 

        setTimeout(() => {
          a.classList.add('accordion-opened')
          useSetTimeout = false;
        }, useSetTimeout ? 1 : 1)
          
      })
    })
  }

  //food


  if ( document.body.id === 'food') {
    const accordions = document.querySelectorAll('.accordion-drink')
    //console.log('accordions',accordions)
    accordions.forEach((a) => {
      a.addEventListener('click', () => {
        //console.log('a', a)
        if (a.classList.contains('accordion-opened')) {
         a.classList.remove('accordion-opened')
          return
        }
        
       let useSetTimeout = false

        accordions.forEach((ac) => {
          if (ac.classList.contains('accordion-opened')) {
            ac.classList.remove('accordion-opened')
            useSetTimeout = true
          }
        }) 

        setTimeout(() => {
          a.classList.add('accordion-opened')
          useSetTimeout = false;
        }, useSetTimeout ? 1 : 1)
          
      })
    })
  }


  if (document.querySelector('.reveal')) {
    ScrollReveal().reveal('.reveal', {
      distance: '150px',
      duration: 1300,
      origin: 'bottom',
      easing: 'cubic-bezier(.17,1.05,.88,1)'
    });
  }
  if (document.querySelector('.reveal-delay-200')) {
    ScrollReveal().reveal('.reveal-delay-200', {
      delay: 200,
      distance: '120px',
      duration: 1300,
      origin: 'bottom',
      easing: 'ease-in-out'
    });
  }
  if (document.querySelector('.reveal-delay-300')) {
    ScrollReveal().reveal('.reveal-delay-300', {
      delay: 300,
      distance: '120px',
      duration: 1300,
      origin: 'bottom',
      easing: 'ease-in-out'
    });
  }
  if (document.querySelector('.reveal-delay-400')) {
    ScrollReveal().reveal('.reveal-delay-400', {
      delay: 400,
      distance: '120px',
      duration: 1300,
      origin: 'bottom',
      easing: 'ease-in-out'
    });
  }
  if (document.querySelector('.reveal-delay-500')) {
    ScrollReveal().reveal('.reveal-delay-500', {
      delay: 500,
      distance: '120px',
      duration: 1300,
      origin: 'bottom',
      easing: 'ease-in-out'
    });
  }
  if (document.querySelector('.reveal-delay-600')) {
    ScrollReveal().reveal('.reveal-delay-600', {
      delay: 600,
      distance: '120px',
      duration: 1300,
      origin: 'bottom',
      easing: 'ease-in-out'
    });
  }
  if (document.querySelector('.reveal-delay-700')) {
    ScrollReveal().reveal('.reveal-delay-700', {
      delay: 700,
      distance: '120px',
      duration: 1300,
      origin: 'bottom',
      easing: 'ease-in-out'
    });
  }
  if (document.querySelector('.reveal-left')) {
    ScrollReveal().reveal('.reveal-left', {
      distance: '150px',
      origin: 'left',
      opacity: 0,
      delay: 150,
      duration: 1100,
      easing: 'ease-in-out'
    })
  }
  if (document.querySelector('.reveal-right')) {
    ScrollReveal().reveal('.reveal-right', {
      distance: '150px',
      origin: 'right',
      opacity: 0,
      delay: 150,
      duration: 1100,
      easing: 'ease-in-out'
    })
  }

  if (window.innerWidth < 450) {
    if (document.querySelector('.reveal')) {
      ScrollReveal().reveal('.reveal', {
        distance: '80px',
        duration: 1100,
        origin: 'bottom',
        easing: 'cubic-bezier(.17,1.05,.88,1)'
      });
    }
    if (document.querySelector('.reveal-delay-200')) {
      ScrollReveal().reveal('.reveal-delay-200', {
        delay: 130,
        distance: '120px',
        duration: 1100,
        origin: 'bottom',
        easing: 'cubic-bezier(0.3,1.05,1,1)'
      });
    }
    if (document.querySelector('.reveal-delay-300')) {
      ScrollReveal().reveal('.reveal-delay-300', {
        delay: 200,
        distance: '80px',
        duration: 1200,
        origin: 'bottom',
        easing: 'cubic-bezier(.17,1.05,.88,1)'
      });
    }
    if (document.querySelector('.reveal-delay-400')) {
      ScrollReveal().reveal('.reveal-delay-400', {
        delay: 230,
        distance: '120px',
        duration: 1100,
        origin: 'bottom',
        easing: 'cubic-bezier(.17,1.05,.88,1)'
      });
    }
    if (document.querySelector('.reveal-delay-500')) {
      ScrollReveal().reveal('.reveal-delay-500', {
        delay: 360,
        distance: '80px',
        duration: 1100,
        origin: 'bottom',
        easing: 'cubic-bezier(.17,1.05,.88,1)'
      });
    }
    if (document.querySelector('.reveal-delay-600')) {
      ScrollReveal().reveal('.reveal-delay-600', {
        delay: 400,
        distance: '80px',
        duration: 1200,
        origin: 'bottom',
        easing: 'cubic-bezier(.17,1.05,.88,1)'
      });
    }
    if (document.querySelector('.reveal-delay-700')) {
      ScrollReveal().reveal('.reveal-delay-700', {
        delay: 430,
        distance: '80px',
        duration: 1200,
        origin: 'bottom',
        easing: 'cubic-bezier(.17,1.05,.88,1)'
      });
    }
    if (document.querySelector('.reveal-delay-4000')) {
      ScrollReveal().reveal('.reveal-delay-4000', {
        delay: 130,
        distance: '80px',
        duration: 1200,
        origin: 'bottom',
        easing: 'cubic-bezier(.17,1.05,.88,1)'
      });
    }
    if (document.querySelector('.reveal-left')) {
      ScrollReveal().reveal('.reveal-left', {
        distance: '80px',
        origin: 'bottom',
        opacity: 0,
        duration: 1100,
        easing: 'ease-in-out'
      })
    }
    if (document.querySelector('.reveal-right')) {
      ScrollReveal().reveal('.reveal-right', {
        distance: '80px',
        origin: 'bottom',
        opacity: 0,
        duration: 1100,
        easing: 'ease-in-out'
      })
    }
  }


  //document.body.addEventListener('onload', init())

  // window.onbeforeunload = () => {
  //   window.scrollTo(0, 0);
  // }

})()