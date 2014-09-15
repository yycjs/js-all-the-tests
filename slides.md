title: JavaScript all the tests!
output: index.html
theme: theme
controls: false
logo: theme/logo.png

--

# JavaScript all the tests!

## From manual debugging tools to automated testing

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

# JavaScript testing

JavaScript testing very *"young"* and still not a common practise.

#### Different environments

- Client
	- Requires both, functional and unit testing
	- Browsers
	- Screen resolutions (mobile)
	- Internet Explorer and old Androids (Boo!)
- Server (NodeJS)

--

# Manual testing and debugging tools

--

# [BrowserStack](http://browserstack.com)

## Live web-based cross browser testing

![Browserstack](images/browserstack.png "Browserstack")

- Browsers on VMs in Mac OS and Windows, mobile emulators
- RESTful API
- Local tunnelling
- Screenshots

--

# Tools and services

- [modern.ie](https://modern.ie/en-us) for virtual machines with Internet Explorer
- [XCode](https://developer.apple.com/xcode/) and iOS simulator
- [Genymotion](http://www.genymotion.com/) for Android emulators (or the [Android SDK](http://developer.android.com/sdk/index.html))
- [SauceLabs](https://saucelabs.com/) for automated testing on real devices
- [KeyNote](http://www.keynote.com/solutions/testing/mobile-testing) for testing on real mobile devices

--

# Mobile testing and debugging

--

# iOS remote debugging

- In iOS go to `Settings` -> `Safari` -> `Advanced`, enable `Web Inspector`
- Connect to your Mac via USB
- In MacOS open Safari (7.x), go to `Preferences` -> `Advanced`, check `Show Develop menu in menu bar`
- Open web page in iOS
- Device will show up in the *Develop* menu

--

# Android remote debuggin

--

# Unit Testing

--

## What?

- Split functionality into contained units. Ideally each function should perform one __unit__ of work.
- Ideally we also want to isolate the code to be tested (using mocks, stubs, test harnesses)
- Test each part.
	- Boundary Value Testing
	- White Box Testing

You don't need to write tests for every scenario (and you should't). Try and kill many birds with one stone.

--

## JavaScript unit testing

<a href="http://pivotal.github.com/jasmine/" target="_blank" style="border: none;">
  <img src="images/jasmine_logo.png" alt="Jasmine Logo" />
</a>
<a href="http://qunitjs.com" target="_blank" style="border: none; float: right; margin-top: 6em;">
  <img src="images/qunit_logo.png" alt="QUnit Logo" />
</a>
<a href="http://visionmedia.github.com/mocha/" target="_blank" style="border: none; margin-top: 4em;">
  <img src="images/mocha_logo.png" alt="Mocha Logo" />
</a>

--

## A blog post

	!javascript
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
--

# Running tests

--

## Headless Browsers

<img style="float: right;" alt="PhantomJS logo" src="images/phantomjs_logo.png" />

### [PhantomJS](http://phantomjs.org/)

- Webkit based.
- Written in C++. API in Javascript and Coffeescript.

### [Zombie.js](http://zombie.labnotes.org/)

- Written in Coffeescript and NodeJS.
- Use jQuery on server side.

__Pro__: Fast, works well for automated acceptance and UI tests

__Con__: Doesn't test actual browsers

--

## Test runners

Automate running your JavaScript tests __in any available browser__ and make the results persistent.

- [Karma](http://karma-runner.github.io)
- [Testem](https://github.com/airportyh/testem)
- [Testee](http://github.com/bitovi/testee)
- [YUI Yeti](http://yuilibrary.com/projects/yeti/)
- [BusterJS](http://docs.busterjs.org/en/latest/)
- [The Intern](http://theintern.io/)

Services

- [Testling CI](https://ci.testling.com/)
- [TestSwarm](http://swarm.jquery.org/)

--

## Testee


Testee.JS runs your Mocha, QUnit or Jasmine unit tests from the command line using any browser.

- Runs on all browsers (supporting SocketIO)
- Many output formats
<img src="images/testee_logo.png" alt="Testee Logo" style="float: right;" />
- CI integration
- BrowserStack support
- GruntJS Task


--

## Continuous Integration

- Use source control management system (SCM) for builds
- Run reports, tests, deploy or other tools on each SCM change
- Popular open source CI servers:
	- [Jenkins](http://jenkins-ci.org/): Probably most popular CI server, formerly Hudson
	- [CruiseControl](http://cruisecontrol.sourceforge.net/): CI framework initially by Thoughtworks
	- [TravisCI](http://travis-ci.org): Distributed build platform for the open source community

<img src="images/jenkins.png" alt="Mr. Jenkins" style="margin-top: -1.5em;" />

--

# Functional testing

--

## Function web application testing

### Open Source Libraries

- [Zombie.js](http://zombie.labnotes.org/) - Headles browser with automation API
- [CasperJS](http://casperjs.org/) - Website automation using PhantomJS
- [FuncUnit](http://funcunit.com) - Clients side functional testing
- [Selenium](http://docs.seleniumhq.org/) - Browser automation toool

### Services

- [SauceLabs](https://saucelabs.com/)
- [uTest](http://utest.com)

--

## __FuncUnit__

Functional testing library built on top of __jQuery__ and __QUnit__:

- Use jQuery syntax to emulate user input
- Write QUnit style tests

__Testing a [TodoMVC](http://todomvc.com) app__

	!javascript
	test('TodoMVC app', function() {
		S('#new-todo').click().type('Do some nerdy stuff\r').wait(500);
		S('#todo-list li').size(1, 'Got one Todo');
		S('#todo-list li:first label')
			.html('Do some nerdy stuff', 'Todo has correct text');
		S('#todo-count').html(/<strong>1<\/strong>(.*)item(.*)left/,
			'Todo count text is correct');
	});

--

--

# Next Month

* Something awesome
* More awesomeness
