---
title: Using Sass
category: Customisation
order: 11
---

Since AppStrap version 3.0.5 Sass files (.scss) for compile the CSS code have been included to allow quick customisation of the core AppStrap CSS files.

If you're new to Sass we recommend taking a course over at uDemy like: 
[https://www.udemy.com/sasscourse/](https://www.udemy.com/sasscourse/)

### a) Compiling using Gulp:

Gulp is a task runner which we recommend you use gulp to compile the sass files into css. Included in AppStrap's <kbd>/theme</kbd> directory are 2 files which gulp uses: 
1. <kbd>package.json</kbd> - this defines the gulp dependencies AppStrap needs to compile the sass files
2. <kbd>gulpfile.js</kbd> - this defines the gulp tasks which should run to compile the sass files into css code, there are also some "clean up" tasks run on Javascript & images.

#### Installing Gulp:

##### Step 1)

Gulp needs node.js & node package manager (npm) to run so those need to be installed first, instructions are here: https://docs.npmjs.com/getting-started/installing-node

##### Step 2)

Open up terminal or command line and type the following command to install gulp globally on your machine:

{% highlight shell %}
npm install --global gulp-cli
{% endhighlight %}

Type <code>gulp -v</code> to ensure gulp installed correctly, if it did you'll see something like:

{% highlight shell %}
[13:42:05] CLI version 3.9.1
[13:42:05] Local version 3.9.1
{% endhighlight %}

##### Step 3)

Type the following command to install all the gulp dependencies defined by the package.json file: 

{% highlight shell %}
npm install --save-dev gulp
{% endhighlight %}

If everything work correctly you should see a new directory called <kbd>node_modules</kbd> which is full of the dependencies gulp needs to function. Once you've finished your development you can remove this directory and just run the above command again to get the latest dependencies each time.

##### Step 4)

Type the following command to have gulp watch for file changes to the .scss & .js files:

{% highlight shell %}
gulp watch
{% endhighlight %}

Alternative you can just type <code>gulp</code> to compile .scss & .js files and compress all images in the theme on a one off basis. You can use "Ctrl" + "c" to exit gulp at anytime.

You can look for any errors in terminal after running the above commands.

To find out more about gulp see: [http://gulpjs.com/](http://gulpjs.com/).


### b) Compiling using an app/GUI


If you don't want to mess around with gulp or node.js there are a number of apps out there which can compile sass code into css.
We recommend the following apps: 
- http://koala-app.com/
- https://codekitapp.com/index.html
- http://livereload.com/
- https://mhs.github.io/scout-app/


### Example sass files


There are a number of example .scss files prefixed with "example-*.scss" to show you how you can change things within the theme or strip back to only the styles you want.
We have broken up the sass files into logical includes to make it easier for you to pick and choose which styles to include.
If you would like a specific example please email us at info@themelize.me and we'll do our best to include it in a future update.

