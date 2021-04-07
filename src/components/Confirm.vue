<template>
  <popup-modal ref="popup">
    <h2 style="margin-top: 0">{{ title }}</h2>
    <p>{{ message }}</p>
    <div class="btns">
      <button class="cancel-btn" @click="_cancel">{{ cancelButton }}</button>
      <button class="ok-btn" @click="_confirm" v-if="!hideSecondButton">{{ okButton }}</button>
    </div>
  </popup-modal>
</template>

<script>
import PopupModal from "@/components/Modal.vue";

export default {
  name: "ConfirmDialogue",

  components: { PopupModal },

  data: () => ({
    title: undefined,
    message: undefined,
    okButton: undefined,
    hideSecondButton: false,
    cancelButton: "Go Back",
    resolvePromise: undefined,
    rejectPromise: undefined,
  }),

  methods: {
    show(opts = {}) {
      this.title = opts.title;
      this.message = opts.message;
      this.okButton = opts.okButton;
      
      if (opts.hideSecondButton) {
        this.hideSecondButton = opts.hideSecondButton;
      }
      if (opts.cancelButton) {
        this.cancelButton = opts.cancelButton;
      }
      this.$refs.popup.open();
      return new Promise((resolve, reject) => {
        this.resolvePromise = resolve;
        this.rejectPromise = reject;
      });
    },

    _confirm() {
      this.$refs.popup.close();
      this.resolvePromise(true);
    },

    _cancel() {
      this.$refs.popup.close();
      this.resolvePromise(false);
    },
  },
};
</script>

<style scoped>
.btns {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.ok-btn {
  background-color: lightcoral;
  color: red;
  border: 2px solid red;
  border-radius: 5px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
}

.cancel-btn {
  background-color: #d5eae7;
  color: #35907f;
  border: 2px solid #0ec5a4;
  border-radius: 5px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
}
</style>