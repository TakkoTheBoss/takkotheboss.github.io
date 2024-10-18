---
title: Installation
---


No heavy dependencies are currently required to install Hachi. Since its built on top of C++ all you need is a C++ compiler, where in the case the choice of clang++ and make are required. This has been tested in Linux, but not in Mac or Windows.



## Install on Linux
    # Install clang++ & make
    apt install -y clang make
    # Clone Hachi repo
    git clone https://gitlab.com/hachi-lang/hachi
    # Install Hachi
    cd hachi
    # Build
    make

Compile your hachi code with:

    hachi <your-program>.8 -build <your-compiled-program-name>

## Example:

    hachi sk.8 -build skate
    # Run skate program
    ./skate

Installation hasn't been fully tested in other operating systems at this time.
