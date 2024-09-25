---
title: Project Setup
category: Get Started
permalink: /get-started/:title.html
order: 1
---


## Gulp Setup and Tasks Documentation

This documentation outlines how Gulp is used in the project and provides an overview of the key Gulp tasks. You can use Gulp to automate your development workflow and build production-ready files for deployment. 

The main `gulpfile.js` file imports tasks from `./gulp`, each task can be run individually but this is not required using the 2 main Gulp tasks listed below.

If you're new to build processes and Gulp do not fear it's rarely more complex than running a few commands and you're site is ready to develop. Plus we have plenty of customisation examples for you to follow.


### 1) Install dependencies

Before using Gulp, ensure you’ve installed all necessary dependencies:

{% highlight  ssh %}
yarn install
{% endhighlight %}

Once installed, you'll see a new directory called <code>./node_modules</code> which contains all the code dependencies needed to build your theme. 

You can now start running Gulp tasks using the following commands.

### 2) Create a new project

As of AppStrap 4.x you can now create unlimited projects within the theme all with there own different source code (/src) and configurations (config.PROJECT.js) and keep them as separate projects and sites. 

NOTE: Using projects is our recommended approach to using the theme although if you are not interested in future updates and just want to use the theme as a starting point for your own development then you can skip this step. This will mean to directly edit the files within ./src and your compile HTML, CSS & Javascript will be compiled into the root ./dist directory. 

To create a new project simply run:

{% highlight  ssh %}
yarn gulp create-project --name=YOURPROJECTNAME
{% endhighlight %}

`YOURPROJECTNAME` should be a machine name without spaces and special characters ie. `themelize_me` or `appstrap_theme`.

When the command is successful you'll see a summary of the new project like below:

{% highlight  ssh %}
yarn gulp create-project --name=YOURPROJECTNAME
{% endhighlight %}

Your new project directory is now created with `./projects/YOURPROJECTNAME` with the following structure:

- `/dist`: Contains production-ready files after running yarn gulp build.
- `/src`: Source files for the project, organized into js, scss, html, and assets folders. These are the files you will edit during your project development.
- `config.PROJECT_NAME.js`: The project-specific configuration file that overrides global settings.

### 2) Gulp Tasks Overview

Gulp tasks automate different parts of your workflow, such as compiling SCSS, optimizing JavaScript, and preparing files for deployment. The main commands you'll focus on are:

### A\. `yarn gulp`

This command runs the primary development tasks. It compiles your SCSS files into CSS, processes JavaScript files, and handles HTML compilation. It also watches for any file changes and uses BrowserSync to automatically refresh the browser, making it ideal for live development.

{% highlight ssh %}
yarn gulp --project=YOURPROJECTNAME
{% endhighlight %}

### B\. `yarn gulp build`

The `yarn gulp build` command prepares your files for production. It performs all the tasks from the development workflow but also adds additional steps to clean out unused assets and optimize the output.

-   **SCSS Compilation**: Converts SCSS into optimized, minified CSS files.
-   **JavaScript Processing**: Minifies and optimizes your JavaScript files.
-   **Unused Asset Cleanup**: Identifies and removes any unused assets or CSS.
-   **Build Output**: The production-ready files are stored in the `dist` folder and can be uploaded to a web hosting service like [Hostinger](https://www.hostinger.com), an ideal choice for hosting static websites.

{% highlight ssh %}
yarn gulp build --project=YOURPROJECTNAME
{% endhighlight %}

Both `yarn gulp` and `yarn gulp build` will create a new `./dist` or `./projects/YOURPROJECTNAME/dist` folder which contains your compile HTML, .css, .js files and assets. You don't ever need to edit files within the `./dist` or `./projects/YOURPROJECTNAME/dist` folders.

These commands also start BrowserSync so once the required tasks have completely your browser should open and render your site at `http://localhost:3004/`

To come out of Gulp simply type "Command" + "c" on Mac or "Control" + "c" on Windows.

### Next Steps

Now you have a new project setup and a development environment running you can <a href="{{ '/get-started/2-config-customisation' | relative_url }}">start to customise your project config</a> via the `config.PROJECT.js` file within your project or for non-project based sites `./config.custom.js`

