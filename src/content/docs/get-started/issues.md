---
title: Known Issues
---

This is a list of currently known issues at this time, and while none of these render the language unworkable in any real way, these are things that're good to know before diving in real deep.

1. Namespace clashing in imported packages.
    - This is annoying, but workable and will be addressed in future releases.

2. Error handling is meh. Down the road, my plan is to work more towards an "Error as Value" approach. I like what Go does with error handling, so I'll probably just do that.

3. The -go flag does **not** work well with loops. It will be fixed in future releases (maybe).

4. `print` allocates undesired memory. Fine to use outside of loops, but for the time being it's highly suggested to instead use Hachi's `shout` function. It will be fixed in future releases (maybe).
