---
layout: post
title: "E2e testing usign protractor in typescript - Part 1: Introduction"
date: 2019-11-15 15:03:37
image: '/assets/img/'
description: Writing e2e testing scripts using Protractor in TypeScript (Part One)
tags: [end-to-end testing, JavaScript, TypeScript, Protractor]
categories: [end-to-end testing, JavaScript, TypeScript, Protractor]
twitter_text: Writing e2e testing scripts using Protractor in TypeScript (Part One)
---

## Motivation
Ten years ago, websites tended to offer a very specific series for the users. But day by day, this idea got demolished and huge corporates tended to put as many features as possible in a single website. For example, previously you was visiting Facebook only to share your updates for your friends and connections. Currently, you can visit Facebook and go live, selling some of your stuff, shopping online, attend watch parties, get a list of events in a specific location, attended online courses, and so many more. The same idea for many of big companies such as Amazon, Booking, and uber. Even for those applications which are specifically produces one service, there is a much huge details and complementaries about this service are offered now compared to many years ago. Google maps is a good example here.

The more websites get more complex, the more release process turns into headache. Until some stages, where the release may turn literally into a nightmare. And one wsteps into the road to get rid of that nightmare is to use test automation. In the normal process of release, you are interested in two testing processes. The first one is testing the release tasks and all the areas of the software which may be affected with those tasks. And other one is testing the whole software to make sure that the new features didn't harm the software in any of its parts deliberately or not. We call this type of testing **regression testing**. Testing the release task could be done manually easily (when it's preferred to be done automative), but the regression testing is not efficient to be done manually. Most of time, your system has many thousands of test cases. Running all of them manually every release consumes too much time. Also if you had the time, the eyes of the testing team get used to the function of the system. So they assume that all the parts of the system that were working well in the previous releases will work normally here. Especially those features which we didn't edit them. But the actual result may differ.

>> As conclusion, we need to develop automation test plan for the regression testing automating all the test cases which we need to run every release.

## What's end-to-end testing?
When we are talking about web based automation testing. There are many stages you as a software tester should implement automation testing. The first stage and the most straight forward is to try to simulate every simple action that your website user can do from the browser. This type of testing is called **end-to-end testing** or simple e2e.  The second stage is the API testing level. At this stage you simply write automation scripts to test the expected response of every end point in your system. At another stage you do the integration testing. At the complex systems, the developers implement unit tests to test every component isolated to the system (in all the systems actullay they should not only the complex ones). So the development team sends you a collection of components every one is confirmed that it's working as expected on its own. And you as a tester should develop scripts to make sure that those components will be coherent when they are talking to each other. 

This series will focus only on the first stage which is e2e. May be we cover the other stages later.

## Why to use Protractor

## Why to write in TypeScript

## Prerequisites

## Getting things ready

## Sample test
