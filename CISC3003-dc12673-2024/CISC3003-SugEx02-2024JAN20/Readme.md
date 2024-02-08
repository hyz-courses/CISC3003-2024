# CISC3003-SugEx02-2024Jan20 
####by dc12673, Huang Yanzhen

### There are some differences!
There are some differences between installing git on Windows and on macOS, which exists from Figure 10 to Figure 14. Hence, my screen shots may be somehow different from the given example. Here are the explanations why this is different and how I decide to give the alternatives.

### Difference 1 and 2: Figure 10 and 12
Git is already built into macOS, but it can still be installed again. However, there is no standalone installer of git for mac. The most convenient way to install git on macOS is to use terminal commands with the help of third-party package managers (e.g. Homebrew). Therefore, it is really hard to demonstrate the similar installation process on mac. As an alternative:
- For Figure 10: I demonstrate the installation process of using terminal command ``brew install git``.
- For Figure 12: I typed the command ``git --version`` in the terminal to show the existence of git in my computer.

### Difference 3: Figure 11
As there is no standalone installer of git for mac, I can't use GUI to select VSCode as my default git editor. However, I looked up a tutorial on stackoverflow (<https://stackoverflow.com/questions/34746045/set-visual-studio-code-to-be-global-git-editor-on-osx>) to manually configure this in VSCode's terminal.

### Difference 4: Figure 13
.exe is the file extension for windows only. On macOS, git is opened by simply typing ``git`` command in the mac's terminal (I use a third-party terminal called iTerm so it looks a bit different from the mac's original one.) The ``git`` command would show sufficient message about this specific version of git in my computer.

### Difference 5: Figure 14 and Figure 14.01 (Additional)
Again, due to the fact that there's no standalone installer for git on mac, the official GUI of git is **not** installed with the command ``brew install git`` itself. Instead, I need to use another command ``brew install git-gui`` to install the official git GUI ( <https://git-scm.com/download/mac> ). Figure 14 shows the official git GUI on macOS, Figure 14.01 shows the installation & starting of git gui.


** Despite these differences, the rest part are fairly the same. **