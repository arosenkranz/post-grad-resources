```c
define function quicksort (list)

// Select a pivot value
pivot = select_pivot_from list

// Create array of values less than/greater than pivot
left  = [element in list where element < pivot]
right = [element in list where element > pivot]

// Recursively sort left/right, and insert pivot in its final position
return quicksort (left) + pivot + quicksort (right)
```
