---
title: Installation
---


No heavy dependencies are currently required to install Hachi. Since its built on top of C++ all you need is a C++ compiler, where in the case of Linux this is g++ as part of the gcc package, and the `make` command is required. This has been tested in Linux, but not in Mac or Windows.



## Install on Linux
    # Install g++ & make
    apt install -y gcc make
    # Clone Hachi repo
    git clone https://gitlab.com/hachi-lang/hachi
    # Install Hachi
    cd hachi
    # Build
    make

Installation hasn't been fully tested in other operating systems at this time.