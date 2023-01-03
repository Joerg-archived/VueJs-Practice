import { ref, computed } from "vue";

export function useSort(items, sortProperty) {
  const sorting = ref(null);

  function sort(mode) {
    sorting.value = mode;
  }
  console.log(items.value);

  const displayedValues = computed(function () {
    if (!sorting.value) {
      return items.value;
    }
    console.log(items.value);
    return items.value.slice().sort((u1, u2) => {
      if (sorting.value === "asc" && u1[sortProperty] > u2[sortProperty]) {
        return 1;
      } else if (sorting.value === "asc") {
        return -1;
      } else if (sorting.value === "desc" && u1[sortProperty] > u2[sortProperty]) {
        return -1;
      } else {
        return 1;
      }
    });
  });

  console.log(displayedValues.value);
  return [
    sorting,
    sort,
    displayedValues,
  ];
}
