import { ref, computed, watch } from "vue";

export function useSearch(listRef, searchProp) {
  const enteredSearchTerm = ref("");
  const activeSearchTerm = ref("");

  const availableValues = computed(function () {
    let values = [];
    const list = listRef.value;
    if (activeSearchTerm.value) {
      values = list.filter(item => item[searchProp].includes(activeSearchTerm.value));
    } else if (list) {
      values = list;
    }
    return values;
  });

  watch(enteredSearchTerm, function (newValue) {
    setTimeout(() => {
      if (newValue === enteredSearchTerm.value) {
        activeSearchTerm.value = newValue;
      }
    }, 300);
  });

  function updateSearch(val) {
    enteredSearchTerm.value = val;
  }

  return [enteredSearchTerm, updateSearch, availableValues];
}
