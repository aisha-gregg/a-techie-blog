## Building my portfolio with intersection observer

When I first got into learning programmin I wanted to become more noticeable and have a portfolio online that would look simple yet broadcast that I knew how to animate (well mostly, kind of).

Mind you, I had a lot to learn about animations, CSS and HTML but still I dived into something that would help my portfolio look cool without too much sweat and tears. That something was called the intersection observer.

The inter -what- now?

Yes. I know. I will talk a little about it and how it works. The intersection observer is an API (Application Programming Interface) that basically observes all the objects at the intersection of the screen's viewport. The viewport is the visible part of the screen that end users see. We can imagine it with a simple analogy. Think of it as a sea port, when the boats enter the PORT they can be VIEWED by people.

As elements pass across the port we can therefore animate them.

Let's see how we can create a simple portfolio using this effect.

First let's write some HTML:

```xml
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
    />
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />
    <meta name="HandheldFriendly" content="true" />
    <title>Portfolio</title>

    <link rel="stylesheet" href="portfolio-styles.css" />
  </head>
</html>
```

Now this is the metadata that always goes in the first part of your HTML document. It is called the head and it gives the browser the necessary information it needs to render your webpage. For example, if you look closely you can see the viewport (screen) settings written out in the header. If you are just starting out, you may think what I thought when I saw HTML for the first time -"I have to memorize all this?"-.

Well no, you don't! The best thing to do is to copy this code and save it in a hotkey shortcut. You can do this in an editor such as VSCode by using **[Emmet](https://code.visualstudio.com/docs/editor/emmet)**. Press `control + shift + P` and type 'emmet' and look for abbreviation wrap. Press enter, then type the keyboard shortcut you would like to use. For the html DOCTYPE header you can simply put `!`.

Now when you type this (!) and hit enter the meta data will autocomplete. You're welcome!

Now let's move on to the body of the code. You can also use emmet to autocomplete the tags then add the code of your choice. Here, I will display my: headshot, name, title, about section and education, and wrap all this content in a div called `main-container`

```xml
<body>
    <div class="container">
      <img
        src="./images/aishaportfolio1.png"
        class="intro-image"
        alt="portfolio photo"
      />
      <div class="portfolio-intro">
        <h1 class="name">A.K Gregg</h1>

        <h2 class="job-title">FrontEnd, Quality & Project Management</h2>
      </div>
      <div class="title"></div>
    </div>

    <div class="main-container">
      <section>
        <h3 class="section">About</h3>
        <p>
          <strong>Aisha Kamilah Gregg</strong> is a
          <strong>frontend web developer</strong>, specializing in
          <strong>quality delivery</strong> and
          <strong>project management</strong>.<br /><br />
          With more than four years experience in the customer service and
          telecommunications industries, working in a fast-paced environment is
          a welcomed challenge. With skills in
          <strong>JavaScript frameworks</strong>, HTML5, CSS3, web
          applications,<strong>
            Git, tools like Jira, as well as libraries such as Jest </strong
          >being a critical asset to any development team is guaranteed.
          <strong
            >Self-determined, goal-oriented and a team-player! Furthermore,
            relentlessly ready for new opportunities to learn and to grow.
          </strong>
          Keep on reading to find out more about this up and coming programmer.
        </p>
      </section>
      <section>
        <h3 class="section">Education</h3>
        <ol>
          <li>
            <strong>Master´s Degree</strong> in
            <strong>Project Management.</strong>Anglia Ruskin University, United
            Kingdom 2020
          </li>
          <li>
            <strong>Bachelor´s Degree </strong>in
            <strong>Information Technology.</strong>University of the West
            Indies, Trinidad and Tobago 2014
          </li>
          <li>
            <strong>Certificate in FullStack programming</strong
            >:<strong>KeepCoding</strong>, Spain 2019
          </li>
        </ol>
      </section>
```

You can add in your own content and tweak it to create your very own portfolio or site.

Now how do we animate with the observer? Well, we need a bit of CSS and a JavaScript function which can help us.

Second the javaScript:

```javascript
const elements = document.querySelectorAll(".main-container > *");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
});

elements.forEach((element) => {
  element.classList.add("hide");
  observer.observe(element);
});
```

The first line stores the document.querySelector that will be used to select a CSS element from your stylesheet in a constant called elements. The document.querySelector is used to select static classes or ids on the webpage. Here we will select ** all** the elements that are nested under the main-container class. Hence, it is important that all your sections are inside this div (except maybe the footer).

We create a new intersection observer class and map each instance of an element to each entry (to each boat that comes into the port). Now for each element we want to check that the intersection ratio is greater than 0. If this is the case we add the class 'show' to the element.

In any other case (when the intersection ratio is less than 0) the content is not visible and will remain hidden. Therefore for each element on the page we add the class hide to it. However, we want to continue observing the element in case it comes into view agaim. Hence, the last line.

Note: You will want to save this function in a separate file with extension `.js` in order to reuse it or call the function when needed.

Finally the CSS:

```css
.hide {
  opacity: 0;
  transition: 2s opacity ease;
}

.show {
  opacity: 1;
}
```

Now, you can design the page how you'd like but there is an important piece of code you must put in, which works with the javascript.
This animates the text of show and hide by using differing levels of opacity; 0 to 1.
Then use a transition which cause the text to 'ease in' slowly. You can play with this.

And that's it. There you have a portfolio with the intersection observer!

![lastsection](/img/portfolio recoding_edit_0.webm)
