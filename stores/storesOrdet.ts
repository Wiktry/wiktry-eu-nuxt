import { defineStore } from "pinia";
import { getLocalStorage, putLocalStorage } from "../scripts/localStorage";

interface IStat {
  id: number,
  value: number,
  max: number
}

const healStats = (stats: Map<string, number>) => {
  const tmp = new Map();
  
  stats.forEach((value, key) => {
    if (value === 0) {
      tmp.set(key, 1);
    } else {
      tmp.set(key, value);
    }
  });

  putLocalStorage('statistics', tmp);
}

const createStats = (local: Map<string, number> | null): Array<IStat> => {
  try {
    const tmp = [];
    for (let i = 1; i < 8; i++) {
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
  } catch (e) {
    healStats(local);
    console.error('storesOrdet -> createStats: ' + e);
  }
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
      rowResult: [0,0],
    }
  },
  actions: {
    getStats() {
      this.stats = _getStats();
    },
    setRowResult(row: number, res: number) {
      this.rowResult[0] = row;
      this.rowResult[1] = res;
    }
  },
})