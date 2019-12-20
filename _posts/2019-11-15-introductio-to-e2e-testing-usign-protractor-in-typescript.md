---
layout: post
title: "E2e testing using Protractor in TypeScript - Part 1: Introduction"
date: 2019-11-15 15:03:37
image: '/assets/img/'
description: Introduction to why and how to write e2e using protractor in Typescript
tags: [end-to-end testing, JavaScript, TypeScript, Protractor]
categories: [end-to-end testing, JavaScript, TypeScript, Protractor]
twitter_text: E2e testing usign Protractor in TypeScript - Part 1 (Introduction)
---

## Motivation

Ten years ago, websites tended to offer a very specific series for the users. But day by day, this idea got demolished and huge corporates tended to put as many features as possible in a single website. For example, previously you was visiting Facebook only to share your updates for your friends and connections. Currently, you can visit Facebook and go live, selling some of your stuff, shopping online, attend watch parties, get a list of events in a specific location, attended online courses, and so many more. The same idea for many of big companies such as Amazon, Booking, and uber. Even for those applications which are specifically produces one service, there is a much huge details and complementaries about this service are offered now compared to many years ago. Google maps is a good example here.

The more websites get more complex, the more release process turns into headache. Until some stages, where the release may turn literally into a nightmare. And one wsteps into the road to get rid of that nightmare is to use test automation. In the normal process of release, you are interested in two testing processes. The first one is testing the release tasks and all the areas of the software which may be affected with those tasks. And other one is testing the whole software to make sure that the new features didn't harm the software in any of its parts deliberately or not. We call this type of testing **regression testing**. Testing the release task could be done manually easily (when it's preferred to be done automative), but the regression testing is not efficient to be done manually. Most of time, your system has many thousands of test cases. Running all of them manually every release consumes too much time. Also if you had the time, the eyes of the testing team get used to the function of the system. So they assume that all the parts of the system that were working well in the previous releases will work normally here. Especially those features which we didn't edit them. But the actual result may differ.

> As conclusion, we need to develop automation test plan for the regression testing automating all the test cases which we need to run every release.

## What's end-to-end testing

When we are talking about web based automation testing. There are many stages you as a software tester should implement automation testing. The first stage and the most straight forward is to try to simulate every simple action that your website user can do from the browser. This type of testing is called **end-to-end testing** or simply e2e.  The second stage is the API testing level. At this stage you simply write automation scripts to test the expected response of every end point in your system. At another stage you do the integration testing. At the complex systems, the developers implement unit tests to test every component isolated to the system (in all the systems actullay they should not only the complex ones). So the development team sends you a collection of components every one is confirmed that it's working as expected on its own. And you as a tester should develop scripts to make sure that those components will be coherent when they are talking to each other.

This series will focus only on the first stage which is e2e. May be we cover the other stages later.

## End-to-end testing workflow

When we are building test scripts, there are three main layers in the architecture.  
Here is a picture which shows the 3 main component of a testing framework
<p align='center'> <img src = '{{site.baseurl}}/assets/images/e2e-workflow.jpg'/> </p>
1. **Real Browser:** You must have at least one of the browsers installed on the machine to be able to create and run the tests. It’s recommended to install all the browsers that your clients will use.
2. **Selenium WebDriver:** For every real browser, there is a Selenium driver. For example, if you want to run your tests against Google Chrome, you need to install Selenium’s Chrome WebDriver. And so on ...  
3. **Testing Bindings:** Here is where our comparison fits in. Whatever we will use Selenium Java or any of the JavaScript libraries, you MUST have the above two layers. Then, you need to use one of the automation tools. Either to use one of the Selenium’s extensions. And in this area, Java is the most powerful option (to be discussed in detail below). The other option you can use one of the JavaScript libraries that can do the job for you. There are many options here too. You can use Protractor, TestCafe, or Cypress.

## Why to use Protractor

It's no secret to anyone that Selenium is the most popular tool to be used in e2e automation. There are two main reasons behind that popularity. First, it was the first major stable tool appeared. So the testers started using it heavily before the other frameworks come to the arena. And step by step it becomes harder and harder to replace the old code written in Selenium by any other new framework. The other reason that it supports many programming languaeg. And mostly, the testers aren't the best programmers in the field. So as a tester, you may have a hands-on experience only coding in one or two programming language. So it's easier and more practical for you to start using a tool with whatever the programming languaeg you know that learning a completely new programming language to start automating in another framework.
But let's talk more practically, is Selenium really the best option? For me, at least, nope! Protractor is better for me and more practical. And here are some reasons why Protractor is my favorite pick:

* **Protractor works perfectly for both angular and non angular apps:** Protractor was built basically to test angular pages. But it's no longer than a few months until they make it supports non-angular pages with only a small flag added to the config file. In case of Selenium, it was built for testing the non-angular pages, but when it comes to angular ones, it suffers. Selenium will work in angularjs , but it will get synchronisation issues. Selenium WebDriver code is not friendly for Behaviour Driven Development such as jasmine and mocha. Angularjs needs to identify the elements which are not recognized by Selenium for ex: ng-model, css, ... etc. But in Selenium Webdriver this can be achieved only via the required identifiers or unique class to access the elements. It takes more effort and time, when does the same in Selenium. Someone may say that Protractor uses Selenium webdriver and it uses the Selenium js driver with its own wrapper to support angular context helper methods, but why we need to prefer use of Protractor than Selenium for testing Angular and Angularjs applications? Well, it's true that Protractor uses Selenium js driver with its own wrapper, but Protractor provides some new locating strategies which are very helpful to automate the Angular applications. For example, Protractor provides you with waitForAngular, By.binding, By.repeater, By.testarea, By.model, ... etc. Sometimes it is difficult to capture the web elements in AngularJS applications using JUnit or Selenium Webdriver. Protractor supports Angular-specific locator strategies, which allows you to test Angular-specific elements without any setup effort on your part. Also, Protractor has the addLocator function to help you add your own locators. So that, for a fictional example, you can get elements by their handlebars properties.
* **Protractor is much easier to develop:** To discover how easier Protractor development compared to Selenium (regardless your knowledge in JavaScript), go ahead and spot the differences between this example written once in Protractor and another with Selenium.

```javascript
describe('Google Search', function() {
    it('should work', function() {
        browser.get('http://www.google.com');
        element(by.name('q')).sendKeys('webdriver');
        element(by.name('btnG')).click();
        expect(browser.getTitle()).toEqual('webdriver - Google Search')
    });
});
```

```javascript
var assert = require('assert'),
    test = require('selenium-webdriver/testing'),
    webdriver = require('selenium-webdriver');

test.describe('Google Search', function() {
    test.it('should work', function() {
        var driver = new webdriver.Builder().
            withCapabilities(webdriver.Capabilities.chrome()).
            build();

        driver.get('http://www.google.com');
        driver.findElement(webdriver.By.name('q')).sendKeys('webdriver');
        driver.findElement(webdriver.By.name('btnG')).click();
        driver.getTitle().then(function(title) {
            assert.equal(title, 'webdriver - Google Search');
        });

        driver.quit();
    });
});
```

You can see the huge difference between the ease of development and the readibility as a result. No need to point to which is the Protractor snippet and which is the Selenium. The first one is the Protractor of course.

* **You don’t need to add waits or sleeps to your test:** Protractor can communicate with your AngularJS app automatically and execute the next step in your test the moment the webpage finishes pending tasks, so you don’t have to worry about waiting for your test and webpage to sync.
* **Protractor is written in JavaScript which is dynamically typed:** There are too many advantages of using dynamically typed languages in test automation, but the main power is that there is no compile time. In a static typing language, every time you change a single command in your code you need to build it again. But in the dynamically typed languages, there is no more such a burden. Everytime you change your code and run, the interpreter won't generate a byte code from scratch, it will just start running your code line by line with no need to take the overhead of compilation time. You can get more details about this from [this magnificent paper](https://tratt.net/laurie/research/pubs/papers/tratt__compile-time_meta-programming_in_a_dynamically_typed_oo_language.pdf). What's really impressing when using Protractor, that you have the option to use JavaScript directly which is a dynamically typed language, or start writing in TypeScript which is a statically typed one. So you have the luxury of selecting the more suitable option for your project.
* **Protracor is much faster than Selenium:** You remember the previous example which is written above once in Protractor and another in Selenium? When I tried to run it, it took 11 seconds in case of Protractor compared to 20 seconds for Selenium. Actually, whatever the test that you are running, if you tried to write in once in Protractor and another in Selenium, you will find that most of the cases there is a huge difference in the running tim between Protractor and Selenium.
* **Using Jasmine:** Protractor uses Jasmine, the framework you use to write AngularJS unit tests. And Javascript, the same language you use to write AngularJS apps.
* **It is easy to set up page objects:** Protractor does not perform WebDriver commands till an action is needed, i.e., set up page objects so that tests can operate page elements without moving the HTML.

## Getting things ready

In order to write protractor tests the only mandatory prerequisite is getting protractor installed. And to get protractor install all what you need is node installed on your machine. But there are many other components that can ease the process of development. So first of all let's get node and protractor installed and then install the other preferences.

``` console
npm install -g protractor
```

## Writing your first test
