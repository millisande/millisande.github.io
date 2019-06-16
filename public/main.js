var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    degrees: 0,
    dialClicks: 0,
    mode: ["dusk", "day","night"]
  },
  computed: {
    style() {
      return { transform:'rotate(' + this.degrees + 'deg)'}
    }
  },
  methods: {
    rotate: function() {
      var turnAmount = 40;
      if (this.degrees < 180 && this.degrees > 0) {
        this.degrees = 0;
      } else if (this.degrees > 180) {
        this.degrees = 0
      } else if (this.dialClicks%4 == 0) {
        this.degrees += turnAmount
      } else {
        this.degrees = 360 - turnAmount
      }
      this.dialClicks += 1;
    }
  }
})
