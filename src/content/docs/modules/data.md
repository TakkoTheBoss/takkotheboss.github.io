---
title: Data
---

This module of the core library contains functions for working with various data structures.

# Sub Modules

## Map
Creates unordered integer and string maps, which can be thought of as similar to dictionaries you'd use in Python.

### Functions
#### *Map*
Creates a string map, and takes an integer size input.

*Syntax*:

    smap: Map: 20

#### *intMap*
Creates a integer map, and takes an integer as the map's size input.

*Syntax*:

    imap: intMap: 20

#### *insert*
Inserts a key/value pair into a map.

*Syntax*:

    # Insert String k/v pair.
    map.insert: "color", "red"

    # Insert Integer k/v pair.
    map.insert: 69, 420

#### *mapString*
Takes the input parameter of a map, and returns the entire map as a string delimited by spaces.

*Syntax*:

    mapString: map

#### *mapArray*
Takes the input parameter of a map, and returns a tuple, where the first return value is the entire map converted to a string array, and the second return value is an integer representing the length of the map's string array.

*Syntax*:

    mapArray: map

#### *mget*
Takes the input parameters of a map and a key, and returns the value of the input key.

*Syntax*:

```php
mget: map, "color"
```

