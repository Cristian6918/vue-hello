console.log('js ok');

let div=document.querySelector('#app');
div.innerHTML=`<h1 :class='classes' >{{ message }}</h1>
   <img :src="imageUrl" :class='classes'>`;



var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      center:'d-flex flex-column align-items-center',
      classes:'text-danger',
      imageUrl:'forrest-gump.gif',
    }
  })

//   <h1 :class='classes' >{{ message }}</h1>
//   <img :src="imageUrl" :class='classes'>
// </div>