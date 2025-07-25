---
title: Embedding C++
---

One of the main differentiators of Hachi is it's interoperability with C++, and just how simple it is to do. Incorporating it into your Hachi files is very simple, and can introduce many great possibilities.

Two main things to remember when embedding C++ code in Hachi is this: `outerCPP` is for C++ code outside of the main function, and `innerCPP` is for within the main function. See the below sample:

```php
>@ "fmt"

outerCPP: "
#include <iostream>
#include <string>
using std::cout;
using std::endl;
"

shout: "The next line is a test string printed using C++"

innerCPP: "
cout << \"This is a test string!\" << endl;
"

```

In the above example, `outerCPP` is used to include C++ libs and definitions, and the `innerCPP` prints the statement.

Not only can we just throw C++ code inline in our Hachi files, but we can also interpolate inside of the C++ code. to correctly do this, we use define a constant using the double-colon operator `::` with the value we want to assign, and just place it in either the `outerCPP` and/or `innerCPP` wrapped in `+` symbols (think of the old fashion way to do string interpolation in python).

```php
cLib:: "#include <stdio.h>"

outerCPP: cLib

cLibTwo:: "stdlib.h>"

outerCPP: "#include <" + cLibTwo

strConst:: "test"

outerCPP: "
#include <iostream>
#include <string>
using std::cout;
using std::endl;
"

innerCPP: "
cout << \"This is a " + strConst + " string!\" << endl;
"
```
