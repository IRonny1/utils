export function removeDuplicatesByFieldName(arr, field) {
    return [...new Map(arr.map((item) => [item[field], item])).values()];
}

export function removeDuplicates(arr) {
 return [...new Set(arr)];
}
