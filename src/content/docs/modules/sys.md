---
title: System
---

This module of the core library contains functions for some general system operations.

# Module Functions
## *argv*
Captures command line argument input to be used in you hachi code.

*Import-with*:

```php
>@ "sys/arg"
```

*Syntax*:

```php
>@ "sys/arg"

print: argv.get: 0
```

*Example*:

```php
# Example using the `go` flag. 
hachi <your-file>.8 -go yolo_so-lit

# Example post compilation.
hachi <your-file>.8 -build <your-program>
# Run your compiled program
<your-program> yolo_so-lit
```
