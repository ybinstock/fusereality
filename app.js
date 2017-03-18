AFRAME.registerComponent('cursor-listener', {
  init: function() {
    this.el.addEventListener('click', function(evt) {
      console.log('I was clicked at: ', evt.detail.intersection.point);
      document.querySelector('[light]').emit('fade');
      document.querySelector('[light]').emit('fade2');
      document.querySelector(".black-sky").emit('fade');
      document.querySelector(".white-sky").emit('fade');


      //document.querySelector(".black-sky").setAttribute( 'visibility', false);
      //document.querySelector(".white-sky").setAttribute( 'visibility', true);

      //
      //var COLORS = ['red', 'green', 'blue'];
      //var randomIndex = Math.floor(Math.random() * COLORS.length);
      //document.querySelector('[light]').setAttribute( 'color', COLORS[randomIndex]);
      //console.log('I was clicked at: ', evt.detail.intersection.point);

    });

  }
});

//https://aframe.io/docs/0.5.0/core/component.html#tick-time-timedelta

//https://rawgit.com/ngokevin/kframe/csstricks/scenes/aincraft/components/random-color.js