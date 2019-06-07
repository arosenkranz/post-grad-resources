# Terminal Commands #

## Directories ##

* `List Directory`

  > ls

  Displays the content of the current directory.

  > ls -la

  List the detailed contents of the current directory, including hidden files.

* `Print Working Directory`

  > pwd

  Displays the path to the directory you're currently in.

* `Change Directory`

  > cd \<directory>

  Open the \<directory> folder. This folder must be present in your current directory.

  > cd ..

  Navigate to the parent directory whih is indicated by `..`. This command essentially exits the current folder and brings you to the folder that contains it.

  > cd ~

  Navigate to the root directory.

* `Make Directory`

  > mkdir \<directory>

  Make a new folder with the name \<directory>

* `Remove Directory`

  > rm -r \<directory>

  Delete the folder \<directory> and all the files within it.

* `Copy Directory`

  > cp -r \<directory1> \<directory2>

  Copies \<directory1> and its contents into \<directory2>. If there is already a folder named \<directory1> within \<directory2>, the contents of the folder that was already present will be overwritten by the \<directory1> you're copying into the folder.

* `Move Directory`

  > mv \<directory1> \<directory2>

  Move \<directory1> into \<directory2>. This will not work if there is already a folder in \<directory1> with the name \<directory2>.

  > mv \<directory> ..

  Move \<directory> into the parent directory. `..` always refers to the parent directory

## Files ##

* `Create File`

  > touch \<file>

  Create a new \<file> in the current directory. Remember to include the file extension. If there is already a file with the name \<file>, it will just update the last modified time of the file.

* `Delete File`

  > rm \<file>

  Deletes the file with the name \<file>.

* `Copy File`

  > cp \<file> \<directory>

  Copies the \<file> into the \<directory> folder. If there is already a file named \<file>, the file that is already present will be overwritten by the new \<file> you're copying in.

* `Rename File`

  > mv \<old-name> \<new-name>

  Renames a file named \<old-name> into \<new-name>

* `Move File`

  > mv \<file> \<directory>

  Move a file named \<file> into the \<directory> folder. If there is already a file named \<file>, the file that is already present will be overwritten by the new \<file> you're moving in.

## Utility ##

* `Clear Screen`

  > clear

  Clears the terminal screen so you don't have to sift through the previous inputs.

* `Previous Command`

  > ↑

  Use the up arrow to navigate to previous commands you've used in terminal.

* `Tab Completion`

  > [Tab ↹]

  Use the `Tab` button to autocomplete the current file or directory you're typing in. If there's multiple names that can be completed from what you currently have typed up to the point where the names diverge. You can use tab completion again afterwards if you've narrowed down which name you're typing.

* `Closing a process`

  PC
  > [Ctrl] + c

  Mac
  > [Control] + c

  This ends the current process that's running in your terminal. This could be the `manual` or `node` or any of the many things that may take up the terminal window.