# Algorithms

## Levensthein distance

The Levensthein distance between two strings is the amount of replacements or insertions/removals it would take to make two string identical.

### Example
For example, the Levenshtein distance between kitten and sitting is 3, since the following three edits change one into the other, and there is no way to do it with fewer than three edits:

kitten → sitten (substitution of "s" for "k")
sitten → sittin (substitution of "i" for "e")
sittin → sitting (insertion of "g" at the end).

### Instructions
Create a function which takes two strings as arguments. Your function should return the Levensthein distance between those two strings.