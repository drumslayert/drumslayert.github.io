###Tools with Terry

  Every developer could use a little mocha in their life. Besides, who doesn't like mocha first thing in the morning?
Well, that depends on which mocha I'm talking about. I can tell you it's not the kind you sip on. It's time to teach you how to set up for testing with mocha. In this tutorial, Im just going to walk you through the steps of how to install mocha in a git repository to prepare for testing. 

#####1. The first you need to do is set up your working environment. It terminal cd into the directory and git branch where your work in progress is located.  

#####2. Now you want to make a directory in your branch where work in progress folders are located. You can call it something appropriate like test. Then inside the test directory, your going to create a file called test.js. You can acomplish this all at one time with the following command:
  `$ mkdir test && touch test/test.js`
  

#####3. Now, still in terminal, run the following command ` $ npm init`: This will start the process to create a package.json file. Follow the online instructions to make your package.json file. Below is an example of a how a package.json file looks.
     ```
     {
        "name": "setup-test-tutorial"
      , "version": "0.0.0"
      , "description": "tutorial for Mocha"
      , "keywords": ["test", "tutorial"]
      , "author": "Drumslayert"
      , "main": "index.html"
      , 
      , "scripts": {
        "test": "mocha"
      }
        "repository": {
        "type": "git",
        "url": "git+https://github.com/drumslayert/mybranch.git"
      }
      , "homepage": "https://github.com/drumslayert/mybranch#readme"
    }
    ```
#####4. Now that you have your package.json you still need to install mocha! You can do this with the following command: `$ npm install -g mocha`

#####5. Now that everything is intalled, open up that directory in your favorite text editor where you can begin to write some test. Below are some small examples of tests you could write.  
      ```
      it( 'should accept any number of chain objects', function() {
      expect( 'mocha' ).a( 'string' );
      expect( 'mocha' ).to.be.a( 'string' );
      expect( 'mocha' ).at.be.been.have.is.of.that.to.with.a( 'string' );
      } );
      ```
      ```
      it( 'should detect null, undefined and existing values', function() {
      var o = {};
   
      expect( o ).to.exist;
      expect( null ).to.not.exist;
      expect( null ).to.be.null;
      expect( null ).to.not.be.undefined;
      expect( o.member ).to.not.exist;
      expect( o.member ).to.not.be.null;
      expect( o.member ).to.be.undefined;
      } );
      ```
  "Mocha is a JavaScript test framework running on node.js, featuring browser support, asynchronous testing, test    coverage reports, and use of any assertion library." (https://en.wikipedia.org/wiki/Mocha_(JavaScript_framework)
Chai is a one of those assertion libraries. Both Mocha and Chai can run in Node environments or in the browser. You can use mocha's assertion module to run your tests. However, you can go much further by "asserting with chai". We will discuss more on that soon. Thank you for using Tools with Terry!
