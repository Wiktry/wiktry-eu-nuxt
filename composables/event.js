import { onMounted, onUnmounted } from "vue";

const useEventListener = (event, callback) => {
  onMounted(() => window.addEventListener(event, callback));
  onUnmounted(() => window.removeEventListener(event, callback));
}

export default useEventListener;