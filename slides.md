title: JavaScript all the tests!
output: index.html
theme: theme
controls: false
logo: theme/logo.png

--

# JavaScript all the tests!

## From manual debugging to automated testing

--

# Brought to you by

-- presenter

![David Luecke](http://gravatar.com/avatar/a14850281f19396480bdba4aab2d52ef?s=200)

## David Luecke

* [<i class="fa fa-github"></i> daffl](https://github.com/daffl)
* [<i class="fa fa-twitter"></i> @daffl](http://twitter.com/daffl)

-- presenter

![Eric Kryski](http://gravatar.com/avatar/23aba778a7daae99348aeb0728cf4aec?s=200)

## Eric Kryski

* [<i class="fa fa-github"></i> ekryski](https://github.com/ekryski)
* [<i class="fa fa-twitter"></i> @ekryski](http://twitter.com/ekryski)
* [<i class="fa fa-home"></i> erickryski.com](http://erickryski.com)

-- sponsors

# Our Sponsors

![Assembly](img/sponsors/assembly_logo.png)

![Village Brewery](img/sponsors/village_brewery_logo.png)

![Startup Calgary](img/sponsors/startup_calgary_logo.png)

![PetroFeed](img/sponsors/petrofeed_logo.png)

--

# What did we do this year again?

- [JavaScript - The weird parts](https://medium.com/@daffl/javascript-the-weird-parts-8ff3da55798e)
- [jQuery 202 and web components](http://yycjs.com/jquery-202-and-web-components/#slide1)
- [NodeJS like a boss](http://yycjs.com/nodejs-like-a-boss/)
- [Optimize your JS workflows](http://yycjs.com/js-workflow/)
- [Use a framework?](http://yycjs.com/use-a-framework/)

--

# What are we going to do today?

- Manual webpage testing
- Mobile remote debugging
- Unit testing
- Test runners
- Continuous Integration
- Functional Testing
- Everything together (Maybe)

--

# Manual webpage testing

--

--

--

# Tools

- [XCode](https://developer.apple.com/xcode/) and iOS simulator
- [Android SDK](http://developer.android.com/sdk/index.html) for Android emulators
- [Genymotion](http://www.genymotion.com/): Android emulators that actually work
- [modern.ie](https://modern.ie/en-us): Virtual machines with Internet Explorer
- [Browsersync](http://www.browsersync.io/): Synchronised browser testing
- [Ghostlab](http://vanamco.com/ghostlab/): Synchronized browser testing for web and mobile

--

# And Services

- [SauceLabs](https://saucelabs.com/): Automated testing on real devices
- [KeyNote](http://www.keynote.com/solutions/testing/mobile-testing): Testing on real mobile devices
- [Browserling](https://browserling.com/): Interactive cross-browser testing
- [BrowserStack](http://browserstack.com): Live, Web-Based Browser Testing

--

# [Mobile testing and remote debugging](http://www.smashingmagazine.com/2014/09/03/testing-mobile-emulators-simulators-remote-debugging)

--

# iOS

1. In iOS go to `Settings -> Safari -> Advanced`
	> Enable `Web Inspector`
2. Connect to your Mac via USB or start iOS simulator
3. In MacOS open Safari (7.x), go to `Preferences -> Advanced`
	> Check `Show Develop menu in menu bar`
4. Open web page in iOS
5. Device will show up in the *Develop* menu

--

# Android

1. In Android enable USB debugging by going to `Settings -> About Phone`
	> Tap `Build number` 7 times then return to the previous screen
2. Go to `Developer Options` and confirm `USB debugging` is checked
3. In Google Chrome go to [chrome://inspect](chrome://inspect) check `Discover USB devices`
4. Connect device via USB and open web page
5. Device should show up at [chrome://inspect](chrome://inspect)

--

# Unit Testing

--

# Unit? Testing?

#### Split functionality into contained units.

> Ideally each function should perform one __unit__ of work.

#### You don't need to write tests for every scenario.

> Try and kill many birds with one stone.

--

# JavaScript unit testing

<a href="http://pivotal.github.com/jasmine/" target="_blank" style="border: none;">
  <img src="img/jasmine_logo.png" alt="Jasmine Logo" />
</a>
<a href="http://qunitjs.com" target="_blank" style="border: none; float: right; margin-top: 6em;">
  <img src="img/qunit_logo.png" alt="QUnit Logo" />
</a>
<a href="http://visionmedia.github.com/mocha/" target="_blank" style="border: none; margin-top: 4em;">
  <img src="img/mocha_logo.png" alt="Mocha Logo" />
</a>

--

# A blog post

```javascript
var BlogPost = function(title, content, date) {
	this.title = title;
	this.content = content.replace(/n/g, "<br />");
	this.date = date || new Date();
	this.published = false;
}

BlogPost.prototype.publish = function() {
	this.published = true;
}

BlogPost.prototype.toString = function() {
	if(!this.published) {
		throw "This blog post is not published";
	}
	return "<h1>" + this.title + "</h1>" +
		"<h6>Published on " + this.date.toString() + "</h6>" +
		"<p>" + this.content + "</p>";
}
```

--

# QUnit

```javascript
module('Blog post test');

test('Date set to current time', function() {
	var post = new BlogPost('Hello', 'Hello world');
	equal(new Date().getTime(), post.date.getTime(), 'Date is correct');
});

test('Generates HTML', function() {
	var now = new Date();
	var post = new BlogPost('hello', 'Hello world', now);

	post.publish();

	equal(post.toString(), "<h1>hello</h1>" +
		"<h6>Published on " + now.toString() + "</h6>" +
		"<p>Hello world</p>", 'HTML generated');
});
```

--

# Mocha

```javascript
describe('BlogPost test', function() {

	it('Should be published at the current time', function() {
		var now = new Date();
		var post = new BlogPost('Hello', 'Hello world');

		assert(now.getTime(), post.date.getTime());
	});

	it('Generates some neat HTML', function() {
		var post = new BlogPost('Hello', 'Hello world');

		post.publish();

		var html = post.toString();
		assert(html.length > 0, 'Some text generated');
	});
});
```

--

# Jasmine



--

# Running tests

--

# Headless Browsers

<img style="float: right;" alt="PhantomJS logo" src="img/phantomjs_logo.png" />

#### [PhantomJS](http://phantomjs.org/)

- Webkit based.
- Written in C++. API in Javascript and Coffeescript.

#### [Zombie.js](http://zombie.labnotes.org/)

- Written in Coffeescript and NodeJS.
- Use jQuery on server side.

__Pro__: Fast, works well for automated acceptance and UI tests

__Con__: Doesn't test actual browsers

--

# Automating with Grunt

Run tests in a headless browser and report to [Grunt]():

- [Grunt QUnit](https://github.com/gruntjs/grunt-contrib-qunit)
- [Grunt Jasmine](https://github.com/gruntjs/grunt-contrib-jasmine)
- [Grunt Simplemocha](https://github.com/yaymukund/grunt-simple-mocha) - Server only

```javascript
// Project configuration.
grunt.initConfig({
  qunit: {
    all: ['path/to/test.html']
  }
});

grunt.loadNpmTasks('grunt-contrib-qunit');
```

--

# Test runners

Automate running your JavaScript tests __in any available browser__ and make the results persistent.

- [Testee](http://github.com/bitovi/testee)
- [Karma](http://karma-runner.github.io)
- [Testem](https://github.com/airportyh/testem)
- [YUI Yeti](http://yuilibrary.com/projects/yeti/)
- [BusterJS](http://docs.busterjs.org/en/latest/)
- [The Intern](http://theintern.io/)
- [Testling CI](https://ci.testling.com/)

--

# ![Testee Logo](img/testee_logo.png)

Testee runs your *Mocha*, *QUnit* or *Jasmine* unit tests from the command line using any browser.

- Runs on all browsers (supporting SocketIO)
- Remote URL testing
- Many output formats
- CI integration
- BrowserStack support
- GruntJS Task
- Code coverage

--

# Continuous Integration

- Use source control management system (SCM) for builds
- Run reports, tests, deploy or other tools on each SCM change
- Popular open source CI servers:
	- [Jenkins](http://jenkins-ci.org/): Probably most popular CI server, formerly Hudson
	- [CruiseControl](http://cruisecontrol.sourceforge.net/): CI framework initially by Thoughtworks
	- [TravisCI](http://travis-ci.org): Distributed build platform for the open source community
- Hosted CI services
	- [Codeship](https://www.codeship.io/): Build and deploy service
	- [Circle CI](https://circleci.com/)

--

# Functional testing

--

# Functional web application testing

#### Open Source Libraries

- [Zombie.js](http://zombie.labnotes.org/) - Headles browser with automation API
- [CasperJS](http://casperjs.org/) - Website automation using PhantomJS
- [FuncUnit](http://funcunit.com) - Clients side functional testing
- [Selenium](http://docs.seleniumhq.org/) - Browser automation toool

--

# __FuncUnit__

Functional testing library built on top of __jQuery__ and runs on __QUnit__, __Jasmine__ or __Mocha__:

- Write functional tests in your testing library of choice
- Use jQuery syntax to emulate user input

__Testing a [TodoMVC](http://todomvc.com) app__

```javascript
test('TodoMVC app', function() {
	S('#new-todo').click().type('Do some nerdy stuff\r').wait(500);
	S('#todo-list li').size(1, 'Got one Todo');
	S('#todo-list li:first label')
		.html('Do some nerdy stuff', 'Todo has correct text');
	S('#todo-count').html(/<strong>1<\/strong>(.*)item(.*)left/,
		'Todo count text is correct');
});
```

--

# Next Month

## JS bash

### Functional Reactive Programming with RXJS
> Kevin Barnabash

### [NodeBB](https://nodebb.org/) and managing your open source projects
> Julian Lam
