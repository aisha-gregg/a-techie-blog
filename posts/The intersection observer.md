## Building my portfolio with intersection Observer

When I first got into learning programming, I wanted to become more noticeable and have a portfolio online that would look simple yet broadcast that I knew how to animate.( well mostly, kind of)

Mind you, I had a lot to learn about animations, CSS and html but still I dived into something that would help my portfolio look cool without too much sweat and tears. That something was called the intersection observer.

The inter- what-now?

Yes. I know. I will talk a little about it and how it works. The intersection observer is an API (Application programming interface) that basically observes all the objects at the intersection of the screen viewport. The viewport is the visbile part of the screen that end users see. We can imagine it with a simple analogy. Think of it as a sea port, when the boats enter the PORT they can be VIEWED by people.

As elements pass across the port we can therefore animate them.

Let's see how we can create a simple portfolio using this effect.

First let's write some html.

Now this is the metadata that always goes in the first part of your html document. It is called the head and it gives the browser the necessary information it needs to render your webpage. For example, if you look closely you can see the viewport(screen) settings written out in the header. If you are just starting out, you may think what I thought when I saw html for the first time- "I have to memorize all this??"

Well no, you don't! The best thing to do is to copy this code and save it in a hotkey shortcut. You can do this in an editor such as Vscode by using emmet. Press control + shift + p and type 'emmet' and look for abbreviation wrap. Press enter then type the keyboard shortcut you would like to use. For the html DOCTYPE header you can simply put '!'.

Now when you type this (!) and hit enter the meta data will autocomplete. You're welcome!

Now let's move on to the body of the code. You can also use emmt to autocomplete the tags then add the code of your choice. Here, I will display my headshot, my name, title, my about section and my section about my education and wrap all this content in a div called 'main-container'

You can add in your own content and tweak it to create your very own portfolio or site.

Now how do we animate with the observer? Well, we need a bit of CSS and a javaScript function which can help us.

First the javaScript:

The first line stores the document.querySelector that will be used to select a Css element from your stylesheet in a constant called elements. The document.querySelector is used to select static classes or ids on the webpage. Here we will select _All_ the elements that are nested under the main-container class. Hence, it is important that all your sections are inside this div. (except maybe the footer)

We create a new intersection observer class and map each instance of an element to each entry (to each boat that comes into the port) Now for each element we want to check that the intersection Ratio is greater than 0.
If this is the case we add the class 'show' to the element

You will want to save this function in a separate file with extension .js in order to reuse it or call the function when needed.
