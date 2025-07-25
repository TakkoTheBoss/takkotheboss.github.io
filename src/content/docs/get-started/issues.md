---
title: Known Issues
---

This is a list of currently known issues at this time, and while none of these render the language unworkable in any real way, these are things that're good to know before diving in real deep.

1. Error handling is meh. Down the road, my plan is to work more towards an "Error as Value" approach.

2. The -go flag does **not** work well with loops. It will be fixed in future releases (maybe).

3. `print` allocates undesired memory. Fine to use outside of loops, but for the time being it's highly suggested to just use the fmt module's `shout` function. It will be fixed in future releases (maybe).

4. Creating arrays inside of a loop is not suggested at this time. The auto-free mechanism doesn't have coverage yet for arrays. However you can insert C++ free calls to free the array if needed (from inside the loop), like so: 
```php
innerCPP: "free(<ARRAY-NAME>._data);"
```
