---
title: Imports
---

Hachi's import system is super simple. There is a core library of Hachi code which is (or should be) located at `$HACHI_LIB`. If what you're trying to import isn't located there (e.g., custom modules) then the import path becomes a relative path.

Here is an example of an import form the core library:
```php
>@ "fmt"
```
This is the `fmt` module of the core library, which fmt is short for "format" of course. It just handles some simple text formatting. 

And here is an example of a custom module you might make, located at `.hMods/newMod.hachi`, which is a directory that gets automatically created if you choose to create a local Hachi project by running the `hachi -init` command:
```php
>@ "hMods/newMod"
```

Lets put this to use now.

So below, we'll actually import the `fmt` module and make use of it's `shout` function (short for *shell* + *out*).
```php
>@ "fmt"

shout: "Congrats! You did it!"
```

Just make sure to avoid name collissions between your main file and the modules you're importing. The below code will product a name collision.
```php
>@ "fmt" # This contains the `shout` function already.

shout:: {}: (
    print: "Test Text"
)
```
Here we're defining a function of `shout`, which already exists in our `fmt` import. So work to avoid that.

Circular dependencies work just fine in the language. If module A require something from module B, and the reverse, it just works.

Additionally, the import system is designed to circumvent name collissions natively. Meaning, if you don't introduce such collissions then they won't occur in the wild.

That's all for this import tutorial. It's meant to be as simple and intuitive as it can be.

