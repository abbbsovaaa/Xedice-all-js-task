function removeElement(arr, eded) {
    const ed = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== eded) {
            ed.push(arr[i])
        }
    }
    return ed
}


console.log(removeElement([1, 2, 3, 4], 3))
console.log(removeElement([1, 2, 3, 4], 4))