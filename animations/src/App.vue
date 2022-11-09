<template>
  <div class="container">
    <div class="block" :class="{ animate: blockAnimated }">
    </div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <button @click="toggleParagraph">Toggle paragraph</button>
    <!-- name replaces the 'v' with the name in the v-enter-* and v-leave-* 
    css animation classes
    -->
    <transition name="para" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter"
      @before-leave="beforeLeave" @leave="leave" @afterLeave="afterLeave" @enter-cancelled="enterCancelled"
      @leave-cancelled="leaveCancelled">
      <p v-if="paragraphVisible">This is a transitioned paragraph</p>
    </transition>
  </div>
  <div class="container">
    <!-- mode out-in: removes first element and makes then the transition -->
    <transition name="fade-button" mode="out-in">
      <!-- Transitions over multiple elements is possible
      if its guaranteed that maximum one element is present in the dom at one time
      (only using v-else makes it vue understandable)
      -->
      <button @click="showUsers" v-if="!usersShown">Show users</button>
      <button @click="hideUsers" v-else>Hide users</button>
    </transition>
  </div>
  <!-- Transition is only working for the root element thats why we had
  to move the v-if to the child component and passing dialogIsVisible as prop
  -->
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>  

<script>
export default {
  data() {
    return {
      blockAnimated: false,
      dialogIsVisible: false,
      paragraphVisible: false,
      usersShown: false,
      enterInterval: null,
      leaveInterval: null,
    };
  },
  methods: {
    enterCancelled() {
      clearInterval(this.enterInterval);
    },
    leaveCancelled() {
      clearInterval(this.leaveInterval);
    },
    beforeEnter(el) {
      console.log("beforeEnter");
      // Here I can manipulate the element
      // e.g. control animation completly in js instead of css
      console.log(el);

      el.style.opacity = 0;
    },
    enter(el, done) {
      let rounds = 1;
      let that = this;
      this.enterInterval = setInterval(function () {
        el.style.opacity = 0.01 * rounds;
        rounds++;
        if (rounds > 100) {
          clearInterval(that.enterInterval);
          done();
        }
      }, 20);

    },
    afterEnter(el) {
      el.style.opacity = 1;

    },
    beforeLeave(el) {
      console.log("beforeLeave");
      el.style.opacity = 1;
    },
    leave(el, done) {
      let rounds = 1;
      let that = this;
      this.leaveInterval = setInterval(function () {
        el.style.opacity = 1 - 0.01 * rounds;
        rounds++;
        if (rounds > 100) {
          clearInterval(that.leaveInterval);
          done();
        }
      });

    },
    afterLeave(el) {
      el.style.opacity = 0;
    },
    showUsers() {
      this.usersShown = true;
    },
    hideUsers() {
      this.usersShown = false;
    },
    animateBlock() {
      this.blockAnimated = true;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    toggleParagraph() {
      this.paragraphVisible = !this.paragraphVisible;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}

.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.3s ease-out;  */
}

.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  /* transform: translateX(-150px); */
  /* forwards: element remains in final animation state */
  animation: slide-fade 0.3s ease-out forwards;
}

.para-enter-from {
  /* opacity: 0;
  transform: translateY(-30px); */
}

.para-enter-active {
  /* transition: all 0.3s ease-out; */
  /* animation: slide-fade 0.3s ease-out; */
}

.para-enter-to {
  /* opacity: 1;
  transform: translateY(0); */
}

.para-leave-from {
  /* opacity: 1;
  transform: translateY(0) */
}

.para-leave-active {
  /* transition: all 0.3s ease-in; */
  /* animation: slide-fade 0.3s ease-out; */
}

.para-leave-to {
  /* opacity: 0;
  transform: translateY(+30px); */
}

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}

.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}

@keyframes slide-fade {
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translate(-120px) scale(1.1);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>