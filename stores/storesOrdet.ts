import { defineStore } from "pinia";
import { getLocalStorage } from "@/scripts/localStorage";

interface IStat {
  id: number,
  value: number,
  max: number
}

const createStats = (local: Map<string, number> | null): Array<IStat> => {
  const tmp = [];
  for (let i = 0; i < 7; i++) {
    tmp.push({id: i, value: 0, max: 0});
  }

  if (local) {
    local.forEach(el => {
      tmp[el-1].value++;
    })

    for (let i = 0; i < 7; i++) {
      tmp[i].max = local.size;
    }
  }

  return tmp;
}

const _getStats = () => {
  const local = getLocalStorage('statistics');
  return createStats(local);
}

export const useStoresOrdet = defineStore('stores-ordet', {
  state: () => {
    return {
      isRunning: true,
      stats: [],
    }
  },
  actions: {
    getStats() {
      this.stats = _getStats();
    }
  },
})