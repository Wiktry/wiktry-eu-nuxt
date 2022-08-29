import { useElementVisibility } from '@vueuse/core';
import { Ref } from 'nuxt/dist/app/compat/capi';

const hasEnteredViewport = (element: HTMLElement, mounted: Ref<boolean>, self?: Ref<boolean>) => (
  computed(() => {
    const active = useElementVisibility(element);

    if (mounted.value === false) {
      return false;
    } else if (active.value === true) {
      return true;
    } else if (self && self.value === true) {
      return true;
    }
    
    return false;
  })
)

export default hasEnteredViewport;