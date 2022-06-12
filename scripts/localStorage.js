const replacer = (key, value) => {
  if (value instanceof Map) {
    return {
      dataType: 'Map',
      value: Array.from(value.entries()),
    };
  } else {
    return value;
  }
}

const reviver = (key, value) => {
  if (typeof value === 'object' && value !== null) {
    if (value.dataType === 'Map') {
      return new Map(value.value);
    }
  }
  return value;
}

export const putLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value, replacer))
}

export const getLocalStorage = (key) => (
  JSON.parse(localStorage.getItem(key), reviver)
)