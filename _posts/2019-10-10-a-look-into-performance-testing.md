---
layout: post
title: "A deep look into performance performance"
date: 2019-10-10 09:51:18
image: '/assets/img/'
tags: [performance testing]
categories: [performance testing]
twitter_text: 'A deep look into web performance'
---

## Introduction
You opened a web page, wait it loading for a few seconds, get bored, close it!

How many times you face this problem?

I'm sure that you are facing it too many ... 

We as software engineers keep working on our web services (or websites) for some time, and step by step getting folded with the customisation, tickets, new CRs, and forget about taking care about performance.
On the other hand, we as regular users, if there are more than one website offering the same service, we visit the fastest more.

This clue takes our minds to think about performance as a feature of our websites. As we need to take care with functionality bugs, clients CRs, customer feedback, we need to take care about how speed is our website.
In this detailed article, we will take a deep look into how to take care of the prformance of our websites. So let's dive into the vestibules.

## What's web perofrmance?
First of all we need to agree on a clear definition about what's the web performance?

There are too many online definitions, but the one which we will use here is that **web performance  is the objective time of when a request for content is made until user can interact with that requested content.** It's not only about delivering the webpage's content to the client side, but also about making sure that it's in an interactable form.

Keep in your mind that in some forms of web elements, you can start interacting even before the content is fully rendered as we will discuss later.

Objectively, it is the frames per second the main thread is not available for user interactions.

Subjectively, it is the user's perception of whether the time it takes between the time the user requests the content and the time until the he feels the content requested is available and usable feels slow or fast.
So now we can say that web performance optimization is all about increasing both the objective and subjective performance.

Web performance includes how long it takes to load the content required, how long it takes to parse, execute, display, and make content usable in the browser, and how responsive and smooth the site is to user interaction. Is the scrolling smooth? Are buttons clickable? Are pop-ups quick to open up, and do they animate smoothly as they do so? Web performance includes both objective measurements like time to load, frames per second, and time to interactive, and subjective experiences of how long it felt like it took the content to load and how responsive the application feels, which is more difficult to measure but often more important.

The lifecycle of an HTML page has three important events:

1.**DOMContentLoaded** – the browser fully loaded HTML, and the DOM tree is built, but external resources like pictures <img> and stylesheets may be not yet loaded. At this point the handler can lookup DOM nodes, initialize the interface.

2.**load** – not only HTML is loaded, but also all the external resources: images, styles etc.

3.**beforeunload/unload** – the user is leaving the page. Now we can check if the user saved the changes and ask them whether they really want to leave.

There are many other in between events, but when we are talking about web performance those three are the most important events to take care of.

## Why we care about web perofrmance?
To recognize the impact of the web performance, we can say that start building a website without taking care of it's performance is like opening a cafe without taking care about the service. As well as you need to serve your visitors in the cafe, you need to serve your web visitors. Not only that. Building a website with not information about the maximum number of users who can access it in a single point of time is like opening a cafe with no preparation for the over visits of the weekend. The prepared cafe for a crowded weekend can increase his staff faster, modify his decore to receive more visitors more flexible, keep the tension level as minimum as possible in the rush hours, and so on. It's identically the case for your website... 

Now let's take CNN website as a case study. 

Loading CNN.com, makes over 400 HTTP requests costing about 22.6MB. Now imagine loading that same site while using mobile data on public transportation or loading it on his 9-year-old. Also, imagine one of your site's users loading your site on a $35 Huawei device in India.

A 22.6 MB site can take up to 83 seconds to load, with DOMContentLoaded at 31.86 seconds, on 3G, and costs 11% of the average Indian's daily wage. If this site was loaded on a mobile device in Mauritania, it would cost the user two full days of their average salary.  However, if this site was loaded on a US carrier's international roaming plan, the costs will make you cry.

In the language of numbers, here are some statistics from the real market which shows you how crucial is a small improvement in the performance of your website in milliseconds... 

* Mozilla saw 60 million more downloads each year by making their webpage 2.2 seconds faster.

* Amazon calculated that webpage load slowdown of just one second could price it $1.6 billion in revenue annually.

* Pinterest increased search engine traffic and sign-ups by 15% when they reduced perceived wait times by 40%.

* COOK increased conversions by 7%, decreased bounce rates by 7%, and increased pages per session by 10% when they reduced average page load time by 850 milliseconds.

And here are other case studies where low performance had a negative impact on business goals:

* Bing discovered that a 2-second delay in page loading time led to a 1.8% drop off in queries, a 3.75% reduction in clicks, over a 4% reduction in satisfaction and a 4.3% reduction in revenue per visitor. 

* Google loses 20% of their traffic for every additional 100 milliseconds it takes for a page to load.

* The BBC found they lost an additional 10% of users for every additional second their site took to load.

* DoubleClick by Google found 53% of mobile site visits were abandoned if a page took longer than 3 seconds to load.

We discussed from a business overview why you should take care of your system's performance. Now let's take a different look from a technical perspective.

* There is no need for an expert to tell you that your system definetly will behave completely different under a load. For example if your system can handle N users comfortably with only 50% of the server capabilities, it doesn't require that you can handle 2N users with your current setup. And if we suppose that there won't be any missed user, there is nothing saying that all the 2N users can use your system smoothly. Your server can land a huge number to the home page at the same time, but when it comes to serving them aroung the whole system, it's completely a different story.

* Continuous integration pipelines aren't complete without load testing. The main idea behind the continuous integration is making sure that any code changes don't break the system. You can make sure that it works fine **functionally** without injecting load testing into the pipeline. But that "functionally" isn't the whole story. You may add a new code snippet for example which doesn't break any of the system function but it abuses the server resources. And this can lead to a real disastar in a short time.

* Another technical reason about why you need to care about performance is that you don't always know when the number of users will increase massively. Yes, sometimes you know and are well prepared for that. But sometimes you don't. Once I was working on a Learning Management System which supposed to handle 10 thousand user per time in it's first stage, suddenly one of the influncers taked about our system on TV and more than 100 thousand user started visiting us in a few hours. The 10 thousand user threeshold got met just 10 minutes after the TV show got presented. At this point, you can't predect what's the behavior of the system will be in the early stages. At the late stages it will get down definetly and you can't help if you are not well prepared. Even if you are prepared and you implement some sort of auto-scaling, you can't build it and leave it without monitoring. Because if you did, simply I can create a very simple bot generating too many fake visits and it will cost you heavily! So **you need to know what's the limits of your system, and how it will behave when it comes to those limits**

* A final point here is that there is no need to mention that discovering performance issues earlier -like any other bugs in your system- helps you to save money, time, and effort. Discovering it in the development phase is almost free. Discovering it while testing is low cost. Discovering it early on production is high cost. Letting the user discover it may be a catastrophe.

## How to care about web performance?

### From development perspective
* build a different mobile version of your website (opening from mobile data needs to be more conservative compared to opening from wifi)
* 

### From testing perspective

## How far is speed a luxury matter?

## A deeper look into client side performance

## Performance testing types

## How long is too long?

## How often should you run a performance testing? 

## Prformance testing tools

## Performance testing challenges

## References
* https://developer.mozilla.org/en-US/docs/Learn/Performance/What_is_web_performance
* https://developers.google.com/web/fundamentals/performance/why-performance-matters
* https://javascript.info/onload-ondomcontentloaded
* https://medium.com/@Pinterest_Engineering/driving-user-growth-with-performance-improvements-cfc50dafadd7
* https://www.nccgroup.trust/globalassets/resources/uk/case-studies/web-performance/cook-case-study.pdf
* https://www.creativebloq.com/features/how-the-bbc-builds-websites-that-scale
* https://www.doubleclickbygoogle.com/articles/mobile-speed-matters/
