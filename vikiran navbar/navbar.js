var navigation = new TimelineLite({paused:true, reversed:true});
navigation.to("#navigationWrap", 0.2, {opacity: .9, display: 'block'})
          .to(".navbar", 0.3, {opacity: 0}, "-=0.1")
          .to(".close", 0.2, {display: "block", opacity: 1}, "-=0.1")
          .from(".menu", 0.3, {opacity: 0, y: 30})
          .from(".social", 0.3, {opacity: 0});

$(".navbar, .close").click (function() {
  navigation.reversed() ? navigation.play() : navigation.reverse();
})