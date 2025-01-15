---
title: Import
---

To import a Hachi module into your code, use `>@` followed by the relative path to the module to your Hachi module file. Don't follow the file with a ".8" file extension.

# Single Import

*Syntax*:

```php
>@ "so/so"
```

# Multiple Imports
Use commas and newlines.

*Syntax*:

```php
>@ "so/so",
>@ "fs/fs
```

And what's happening here is that Hachi is looking in the **HACHI_LIB** (please set accordingly) first to see if the String Operations and the Filesystem modules are present, and if not then the path to your module becomes relative to the directory you're working in. So if you're in your top level directory of your project and you have a *mod* folder which contains a Hachi module called *my-mod.8*, then your import statement becomes the following:

```php
>@ "mod/my-mod"
```

If you do not set your **HACHI_LIB**, then all module import paths become relative.

At this time there are import collisions which occur if you have duplicate function names being or the same function from another module being used across your modules. So, if your *my-mod.8* has the *so/so* imported in it, where the function *strContains* is used, you will run into issues trying to use the *strContains* functions if you also have the *so/so* module also loaded into your main Hachi file. This is ultimately a C++ namespace issue which will be handled as soon as it's feasible to fix. Although a current workaround is to use *strContains* (or any other already imported function) as normal without importing it into your main Hachi file, as it already exists in your *my-mod* module. 
