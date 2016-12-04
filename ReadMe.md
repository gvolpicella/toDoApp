# Front-end setup

Currently using Gulp to build and minify front-end assets (SASS / JS), and JS linting. These are located in `dev/`

## Getting Started

###Install [Ruby](http://www.ruby-lang.org/en/documentation/installation/) (Windows only)

###Install sass gem

	$ sudo gem install sass`

###Install [Node](http://nodejs.org/en/download/) stable relase

Troubleshooting:

 - make sure `$NODE_PATH` is set (for example `export NODE_PATH="/usr/local/lib/node_modules"`)

Check node is installed:

    $ node -v

## Dev environment

### Install Bower in `/src`

	$ bower install

### In `/src`

###Install Gulp and its dependencies

    $ npm install

##Build

###In `/src`

###to watch for changes and automatically build the assets

    $ gulp watch    

###to build the assets manually

    $ gulp 

###or a specific asset

    $ gulp scripts

    $ gulp sass    
