Vue.component('details-modal', {
  props:{
    instrument: Object
  },
  template: '#details-modal-template'
});

Vue.component('create-modal', {
  props:{
    newInstrument:{
      type: Object,
      default: function(){
        return{
          name: "",
          type: "",
          price: 0,
          brand: "",
          image: "",
          inCart: false,
          details: false
        }
      }
    }
  },
  template: '#create-modal-template'
});

new Vue({
  el: "#app",
  data:{
    showCreateModal: false,
    myCart: [],
    instruments: [{
      name: "Stratocaster",
      type: "Guitar",
      price: 600,
      brand: "Fender",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU0AMeOpq9U_YGw5-aXv7oeM45ggTFJzw1364GcZDwzVzQepvu",
      inCart: false,
      details: false
    },
    {
      name: "F335 Acoustic",
      type: "Guitar",
      price: 130,
      brand: "Yamaha",
      image: "https://i.ebayimg.com/images/i/173156924106-0-1/s-l1000.jpg",
      inCart: false,
      details: false
    },
    {
      name: "M225 Acoustic",
      type: "Guitar",
      price: 621,
      brand: "Maton",
      image: "https://images.reverb.com/image/upload/s--VK4HO0IA--/f_auto,t_large/v1541567539/xlikuktnhdquq4jvr3n5.jpg",
      inCart: false,
      details: false
    },
    {
      name: "Telecaster",
      type: "Guitar",
      price: 850,
      brand: "Fender",
      image: "https://images.reverb.com/image/upload/s--xsz8T4ia--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_620,q_90,w_620/v1481652622/pvnpgmqvvehjk1gbrgpj.png",
      inCart: false,
      details: false
    },
    {
      name: "GC2",
      type: "Piano",
      price: 28959,
      brand: "Yamaha",
      image: "http://www.piano-play-it.com/images/C7-Yamaha-grand-piano.png",
      inCart: false,
      details: false
    },
    {
      name: "Concert Ukulele",
      type: "Ukulele",
      price: 900,
      brand: "Maton",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY1QeoJYK5OnGkVxdrcnvOpZdxV0WkWT-vYC1m6sldnXxlOF1M",
      inCart: false,
      details: false
    }
   ],
  },
  methods:{
    addToCart: function(instrument){
      instrument.inCart = true;
      instrument.details = false;
      this.myCart.push(instrument);
    },
    emptyCart: function(){
      this.instruments.forEach(function(instrument){
        instrument.inCart = false;
      })
      this.myCart = [];
    },
    createInstrument: function(newInstrument){
      var errors = [];
      if (newInstrument.name === ""){
        errors.push("Name must not be empty");
      }
      if (newInstrument.type === ""){
        errors.push("Type must not be empty");
      }
      if (newInstrument.price <= 0){
        errors.push("Price must be greater than 0");
      }
      if (newInstrument.brand === ""){
        errors.push("A brand must be selected");
      }
      if (errors.length > 0){
        alert(errors);
      }else{
        this.instruments.push(newInstrument);
        this.showCreateModal = false;
      }
    }
  }
});