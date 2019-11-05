---
layout: post
title: "How to measure the performance of your website"
date: 2019-10-10 09:51:18
image: '/assets/img/'
tags: [performance testing]
categories: [performance testing]
twitter_text: 'How to measure the performance of your website'
---

## Introduction
You opened a web page, wait it loading for a few seconds, get bored, close it!

How many times you face this problem?

I'm sure that you are facing it too many ... 

We as software engineers keep working on our web services (or websites) for some time, and step by step getting folded with the customisation, tickets, new CRs, and forget about taking care about performance.
On the other hand, we as regular users, if there are more than one website offering the same service, we visit the fastest more.

This clue takes our minds to think about performance as a feature of our websites. As we need to take care with functionality bugs, clients CRs, customer feedback, we need to take care about how speed is our website.
In this detailed article, we will talk about how to take care about the prformance of our websites. So let's take the first step inside.

## What's web perofrmance?
First of all we need to agree on a clear definition about what's the web performance?

There are too many online definitions, but the one which we will use here is that **web performance  is the objective time of when a request for content is made until user can interact with that requested content.** It's not only about delivering the webpage's content to the client side, but also about making sure that it's in an interactable form.

Keep in your mind that in some forms of web elements, you can start interacting even before the content is fully rendered as we will discuss later.

Objectively, it is the frames per second the main thread is not available for user interactions.

Subjectively, it is the user's perception of whether the time it takes between the time the user requests the content and the time until the he feels the content requested is available and usable feels slow or fast.
So now we can say that web performance optimization is all about increasing both the objective and subjective performance.

Web performance includes how long it takes to load the content required, how long it takes to parse, execute, display, and make content usable in the browser, and how responsive and smooth the site is to user interaction. Is the scrolling smooth? Are buttons clickable? Are pop-ups quick to open up, and do they animate smoothly as they do so? Web performance includes both objective measurements like time to load, frames per second, and time to interactive, and subjective experiences of how long it felt like it took the content to load and how responsive the application feels, which is more difficult to measure but often more important.

The lifecycle of an HTML page has three important events:

1. **DOMContentLoaded** – the browser fully loaded HTML, and the DOM tree is built, but external resources like pictures and stylesheets may be not yet loaded. At this point the handler can lookup DOM nodes, initialize the interface.
2. **load** – not only HTML is loaded, but also all the external resources: images, styles etc.
3. **beforeunload/unload** – the user is leaving the page. Now we can check if the user saved the changes and ask them whether they really want to leave.

There are many other in between events, but when we are talking about web performance those three are the most important events to take care of.

## Why we care about web perofrmance?
To recognize the impact of the web performance, we can say that start building a website without taking care of it's performance is like opening a cafe without taking care about the service. As well as you need to serve your visitors in the cafe, you need to serve your web visitors. Not only that. Building a website with not information about the maximum number of users who can access it in a single point of time is like opening a cafe with no preparation for the over visits of the weekend. The prepared cafe for a crowded weekend can increase his staff faster, modify his decore to receive more visitors more flexible, keep the tension level as minimum as possible in the rush hours, and so on. It's identically the case for your website... 

Now let's take CNN website as a case study. 

Loading CNN.com, makes over 400 HTTP requests costing about 22.6MB. Now imagine loading that same site while using mobile data on public transportation or loading it on his 9-year-old. Also, imagine one of your site's users loading your site on a $35 Huawei device in India. A 22.6 MB site can take up to 83 seconds to load, with DOMContentLoaded at 31.86 seconds, on 3G, and costs 11% of the average Indian's daily wage. If this site was loaded on a mobile device in Mauritania, it would cost the user two full days of their average salary.  However, if this site was loaded on a US carrier's international roaming plan, the costs will make you cry.

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
* Continuous integration pipelines aren't complete without load testing. The main idea behind the continuous integration is making sure that any code changes don't break the system. You can make sure that it works fine "functionally" without injecting load testing into the pipeline. But that "functionally" isn't the whole story. You may add a new code snippet for example which doesn't break any of the system function but it abuses the server resources. And this can lead to a real disastar in a short time.
* Another technical reason about why you need to care about performance is that you don't always know when the number of users will increase massively. Yes, sometimes you know and are well prepared for that. But sometimes you don't. Once I was working on a Learning Management System which supposed to handle 10 thousand user per time in it's first stage, suddenly one of the influncers taked about our system on TV and more than 100 thousand user started visiting us in a few hours. The 10 thousand user threeshold got met just 10 minutes after the TV show got presented. At this point, you can't predect what's the behavior of the system will be in the early stages. At the late stages it will get down definetly and you can't help if you are not well prepared. Even if you are prepared and you implement some sort of auto-scaling, you can't build it and leave it without monitoring. Because if you did, simply I can create a very simple bot generating too many fake visits and it will cost you heavily! So **you need to know what's the limits of your system, and how it will behave when it comes to those limits**
* A final point here is that there is no need to mention that discovering performance issues earlier -like any other bugs in your system- helps you to save money, time, and effort. Discovering it in the development phase is almost free. Discovering it while testing is low cost. Discovering it early on production is high cost. Letting the user discover it may be a catastrophe.

## How to care about web performance?
Now after we talked a lot about the importance of the high performance of a website. Let's talk a little bit about how to care about the performance of your website as a developer. And since I'm not a developer, so this section will be just a straight forward points without so much details. But if you are more interested to know about the development perspective, you can find further readings in the references section.

* Build a different mobile version of your website (opening from mobile data needs to be more conservative compared to opening from wifi).
* Migrate to HTTP/2. HTTP/2 addresses many performance problems inherent in HTTP/1.1, such as concurrent request limits and the lack of header compression.
* Bundling your frontend. Bundling is putting all your Javascript, HTML, CSS, images, and everything else in between together in a handful of neat little files to help make your web application run smoothly. In order to assess the consequences of any such decision, it helps to understand how browsers work: When the browser processes an HTML document, it does so from top to bottom. Upon encountering a `<script>` tag, it halts (blocks) further processing in order to download the referenced script file. Only after that download has completed and the respective JavaScript code has been processed, HTML processing continues. Now it's clear that loading one file in one request is too much faster than loading multiple files in more than one request. Bundling will show you a great performance optimization. There are many powerful tools to use to accomplish this task, but the most two famous are [Webpack](https://webpack.js.org/)  and [Browserify](http://browserify.org/). You can find more readings about bundling in the references section.
* Another key tip which helps you improve a website's performance is **cashing**. Caching is an area of a computer’s memory devoted to temporarily storing recently used information. The content, which includes HTML pages, images, files and Web objects, is stored on the local hard drive in order to make it faster for the user to access it, which helps improve the efficiency of the computer and its overall performance. Most caching occurs without the user knowing about it. In web development, when a user returns to a web page they have recently accessed, the browser can pull those files from the cache instead of the original server because it has stored the user’s activity.
* Download resources earlier using resource hints. rel=preload is one such resource hint that allows early fetches of critical resources before the browser would otherwise discover them. This can have a pronounced positive effect on page rendering and lowering Time to Interactive when used judiciously. rel=preconnect is another resource hint that can mask the latency of opening new connections for resources hosted on third party domains.
* Minify your text assets. Minification is the removal of unnecessary whitespace, comments and other content in text-based resources. It significantly reduces the amount of data you send to users without impacting functionality. Use uglification in JavaScript to get more savings through shortening variable and method names.
* Consider using code splitting in webpack to limit the amount of scripts downloaded to only what is needed by the current page or view. Separate your CSS into smaller template or component-specific files, and only include those resources where they're likely to be used.
* Configure your server to compress resources. Compression drastically reduces the amount of data you send to users, especially text assets. GZIP is a popular option, but some tools like [Brotli](https://github.com/google/brotli) compression can go further.
* Deliver images responsively. The huge diversity of devices and their screens presents a tremendous opportunity to improve performance by sending images that are the best fit for the screens that view them. In the simplest use cases, you can add an srcset attribute to an `<img>` element to specify an array of images the browser can choose from. On the more complex side of things, you can use `<picture>` to help the browser choose the most optimal format (e.g., WebP over JPEG or PNG), or serve altogether different treatments of images for different screen sizes.
* Use video instead of animated GIFs. Animated GIFs are massive. Videos of similar quality are far smaller, often by 80% or so. If your site makes heavy use of animated GIFs, this is probably the most impactful thing you can do to improve loading performance.

## Performance testing types
There are a lot of performance testing types. If you keep searching the web, you will find tens of them. But generally, whatever the type of your business, most probably you will find the type you need in this list: 

* **Load testing**: It's testing the behavior under normal or peak workload conditions. Load is more about characterizing or simulating your actual workload.
* **Stress testing**: It's testing issues under extreme conditions and resource failures. In stress testing you overloads the system in order to find the breaking point.
* **Soak testing**: It's also known as endurance testing. It's running a system at high load for a prolonged period of time to identify the performance problems. It is to make sure the software can handle the expected load over a long period of time. 
* **Spike testing**: It's to determine the behaviour of the system under sudden increase of load (a large number of users for example) on the system.

Here is a test case which shows the difference between the above four types. Let's say that you are building an e-commerce website and you are expecting 10,000 user at the peak time. 

* To perform **load testing** you can try testing with 1000 user as normal number of expected user or average. And should test with 10,000 concurrent user to simulate the maximum load on your website. 
* To perform **stress testing** you can simulate that one of your servers under the load balancer got down and start watching what's the destiny of the users who were served by this server. You shall also start testing the performance of your website under more than 10,000 concurrently and find when the system will start to behave strangely. When users loss will start. And how the system will behave when it starts losing those users. All of this should be a part of the stress testing plan. 
* Let's say that the peak time when you receive 10,000 visitors doesn't last for a long time. It lasts for five minutes for example. To perform **soak testing** you should check the performance of those 10,000 users when all of them keep using the sytem for 1 hour for example. 
* Finally, the case in **spike testing** is about keeping the number of users in the average (1000 supposedly in our case) for a decent time, then increase the number of users suddenly to 10,000 (the peak) and start monitoring the performance. Then let it back for 1000 for sometime, and increase it back to a point which is above the peek and keep monitoring the performance.

## How long is too long?
At this point, it's important to put some borders to identify how much your website is slow or fast. Actually, there are no obvious rules indicates what's a slow loading time and what's fast. On the other hand, there are some specific guidelines for indicating content load, idiling time, animating time, and reponsive time. Let's discuss quickly each one of them.

We mean here by load time the maximum amount of time to indicate to a user that the request for new content was made and will load, such as the browser displaying the page title and the background color of the page displaying. As you may know the first asset retrieved from a request is usually an HTML document, which then makes calls for additional assets. When HTML is received, browsers immediately start processing that HTML, rendering the content as it is received rather than waiting for additional assets to load. Yes, one second for loading is the goal, but it's something few sites achieve. Expectations differ... a 'hello world' on the corporate network would be expected to load in milliseconds, but a user downloading a cat video on a five-year-old device over an edge network in kenia would likely find a 20-second download speedy. In optimizing for performance, do set an ambitious first load goal, such as 5 seconds over the mobile 3G network and 1.5 seconds on an office internet line, with even more ambitious page load goals for subsequent page loads, leveraging service workers and caching.

Browsers are single threaded (though background threads are supported for web workers). This means that user interaction, painting, and script execution are all on the same thread. If the thread is busy doing complex JavaScript execution, the main thread will not be available to react to user input, such as pressing a button. For this reason, script execution should be limited in scope, divided into chunks of code that can be executed in 50ms or less. This makes the thread available for user interactions.

For scrolling and other animations to look smooth and feel responsive, the content repaints should occur at 60 frames per second (60fps), which is once every 16.7ms. The 16.7 milliseconds includes scripting, reflow, and repaint. Realize a document takes about 6ms to render a frame, leaving about 10ms for the rest. Anything less than 60fps, especially an un-even or changing frame rate, will appear janky.

When the user interacts with content, it is important to provide feedback and acknowledge the user's response or interaction and to do so within 100ms, preferably within 50ms. 50ms seconds feels immediate. The acknowledgment of user interaction should often feel immediate, such as a hover or button press, but that doesn't mean the completed response should be instantaneous. While a slower than 100ms reaction may create a disconnect between the user interaction and the response, a 100 to 200ms transition for a response may help the user notice the response their interaction initiated, such as a menu opening.  If a response takes longer than 100ms to complete, provide some form of feedback to inform the user the interaction has occurred. And we will talk more about this point in the client side performance section below.
> So we can summarize this section saying that the goal for load time is 1 second, 50 ms for idiling, animating within 16.7ms, and responding to the user input in 50ms.

## How often should you run a performance testing? 
Another important question before moving to the applicable part of this article is when and how much should you run the performance testing? 

* If you introduce, modify, or enhance one of your main features which may affect the running software heavily, you need here to run performance testing.
* If you modify the current environment infrastructure. Also if you modify configurations which may affect the system performance.
* Before every peak season or online event. If your service is seasonal and you expect huge traffic in some certain days or seasons, it's couraged to perform your performance testing at this point.

An important note to be pointed to here is that's almost better to get your performance testing injected into the release pipline. So that, your performance testing plan will be automatically run before every release. But unfortunately, it's not an easy task as it may seem. There are tons of challenges to build a performance testing pipeline. You may have been built a previous automation testing plipelines for unit testing or end-to-end automation testing. But the challenges here come more and more because you need to take care more about the infrastructure and the very specific details about the platforms the system will run on. Also another huge challenge here that your performance testing will definitly break the system and let it down many times. At this checkpoit, you need to configure your pipeline to get the system up again and make sure that it's ready to receive the next load. This topic may be interesting to be the next post of this performance testing category in the future. So stay tuned :D 

## A look into client side performance
According to Yahoo, around 80% of application response time is spent downloading elements such as images, stylesheets, scripts etc. To speed up response time requires strong servers and a well prepared and tested application. That's why we need to talk further about the client side performance.

For the past few years, we’ve been measuring page load times as a key metric for the usability of a website and the user experience it delivers. But a new performance metric has come on the scene that is less about measuring the actual time it takes for an entire page to load and more about measuring how long it takes for the page to deliver the experience the website visitor is seeking. Since the web development has got developed too much in the last few years, you now have the ability to load one or more web elements first and let the user being able to interact with them, and in background keep loading the other web elements. And here is a very important idiom shows. It's **Time To Interact or (TTI)**. It pinpoints the most critical moment in a page load; The moment the page’s primary interactive content is displayed and becomes interactive from the end user’s perspective. 
Let's discuss the below chart to see how critical is to benchmark your TTI compared to your total load time.
<p align='center'> <img src = '{{site.baseurl}}/assets/images/TTI-Graph-1.jpg'/> </p>
You can see that there are three main categories in this chart.

1. **Websites with low TTI and low load time**: Some exapmles from this category is the first three websites (abebooks.com, BHPhotovideo.com, CDUniverse.com). And when the load time is really small for those websites, so you can conclude that those websites performance can be either represented by the load time or the TTI. There will be no huge difference between the both. And it's not the most important category in our example. This low load time either reached by the simplicity of the delivered service, so there are no much resources to be loaded. Or by a perfect optimization of loading process. **_So in those two cases (low resources, perfect load process) the TTI and total load time will be near to each others and you can use either of them to measure the performance of your website on going_**.
2. **Websites with average TTI and high load time**: Some examples from this category is those three websites with more than 10 seconds total load time (Net-a-porter.com, Fineartamerica.com, Urbanoutfitters.com). Those websites can't use the total load time to represent how much their website is user friendly when it comes to performance factor. There may be a reason which prevents you from getting the total load time of your website to minimal. And at this point, you need to find a way to get the lowest TTI possible. You need to let the user being able to interact with the most important elements he is visiting your websites mainly for and then keep loading the other assets in the background. **_So in this case (high load time and average or low TTI) you must use TTI to indicate how well is the performance of your website_**.
3. **Websites with average TTI and average load time**: If you are trying to take care of the performance of your system as much as you can, most probably your website will fit in this category. Most of the msrket giants in different domains are in this category (as you can see amazon in the above chart). And in this case you need to keep working hard on improving your TTI. You may spent too much time optimizing the performance of the loading process so that the total load time isn't that high. Now you need to go to the next challenge which is how to let your customer being able to interact with your page earlier and earlier. **_So in this case (average load time and average TTI) you must use TTI to indecate how will is the performance of your website. And a very small enhancement in TTI ma lead to huge business impact either positvely or negatively._**
>So we can conclude that load time is not always the most meaningful measure of a site’s performance. For example, while Amazon.com has a greater load time of seconds, it has a TTI which indicates that this site delivers a satisfactory user experience.

## Prformance testing tools
Finally here we go! after all of that discussion about web performance, let's discuss the most powerful tools to measure it. We will use youtube main page in all of our tools to get the reports about it and see how much it will differ from a tool's report to another.
* **webpagetest.org**: This tool enables you to run a free website speed test from multiple locations around the globe using real browsers (Firefox or Chrome for example) and at real consumer connection speeds. You can run simple tests or perform advanced testing including multi-step transactions, video capture, content blocking and much more. Your results will provide rich diagnostic information including resource loading waterfall charts, Page Speed optimization checks and suggestions for improvements.
Once you open the website, you will find the screen in the following view. So let's talk about all the variables you need to set to get the full report about website.
<p align='center'> <img src = '{{site.baseurl}}/assets/images/webpagetest.png'/> </p>

## References
* https://developer.mozilla.org/en-US/docs/Learn/Performance/
* https://developers.google.com/web/fundamentals/performance/
* https://javascript.info/onload-ondomcontentloaded
* https://medium.com/@Pinterest_Engineering/driving-user-growth-with-performance-improvements-cfc50dafadd7
* https://www.nccgroup.trust/globalassets/resources/uk/case-studies/web-performance/cook-case-study.pdf
* https://www.creativebloq.com/features/how-the-bbc-builds-websites-that-scale
* https://www.doubleclickbygoogle.com/articles/mobile-speed-matters/
* https://medium.com/@PurpleGreenLemon/understanding-the-concept-of-bundling-for-beginners-f2db1adad724
* https://www.innoq.com/en/blog/loading-javascript/#fn:2
* https://kinsta.com/learn/page-speed/
* https://conversionxl.com/blog/two-overlooked-aspects-site-design-may-hurting-conversions/?__hstc=229822019.07430159d50a3c91e72c280a7921bf0d.1542499200129.1542499200130.1542499200131.1&__hssc=229822019.1.1542499200132&__hsfp=99862880

