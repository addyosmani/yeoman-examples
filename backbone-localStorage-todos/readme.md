## Building Apps With The Yeoman Workflow

This is a simple demonstration of the end result when using [Yeoman](http://yeoman.io), [Grunt](http://gruntjs.com), and [Bower](http://bower.io) to create an application.

[Building Apps With The Yeoman Workflow](http://stephenplusplus.github.io/me-but-you/#6-10-2013-building-apps-with-the-yeoman-workflow) walks through the steps we took to create the To Do application featured in this repository.

To check it out, clone the repository, then:

```
# Use `package.json` to pull down the app's dependencies from NPM
$ npm install

# Use `bower.json` to pull down the app's dependencies from Bower
$ bower install

# The (unwritten) tests have Bower dependencies as well. Grab those:
$ cd test
$ bower install
```

Now that you have all of the pieces, try out:

`grunt server` to create a development server, and
`grunt` to test and build the application.