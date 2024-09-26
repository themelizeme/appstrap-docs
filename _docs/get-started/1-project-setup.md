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

Before using Gulp, ensure you’ve installed all necessary dependencies.


We use <a href="https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating" target="_blank">Node Version Manager (NVM)</a> to ensure the right Node.js version is used & compatible with our build process. To install it type the following command in Terminal or check out the <a href="https://nodejs.org/en/download/package-manager" target="_blank">instructions on nodejs.org</a>:

{% highlight  ssh %}
# installs nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash

# download and install Node.js (you may need to restart the terminal)
nvm install

# verifies the right Node.js version is in the environment
node -v # should print `v20.17.0`

# verifies the right npm version is in the environment
npm -v # should print `10.8.2`
{% endhighlight %}

NVM reads the hidden `.nvmrc` file in the theme bundle to get the right Node version (currently `{{ _theme.node_version }}`) so you can type `nvm use` and your environment is ready to build. 

> We use yarn instead of NPM but you can use both, to install Yarn run the command <code>npm install --global yarn</code>.

With NVM installed you can install the dependencies either with NPM or Yarn:
 
{% highlight  ssh %}
npm install

# OR

yarn install
{% endhighlight %}

Once installed, you'll see a new directory called <code>./node_modules</code> which contains all the code dependencies needed to build your theme. 

> NOTE: As packages evolve and change you may see some deprecation warnings when installing dependencies, we do our best to update packages as often as possible but sometimes dependencies are embedded deep into another package so we often have to wait for a package to be updated. In most cases you can ignore the warnings.

You can now start running Gulp tasks using the following commands.

### 2) Create a new project

As of AppStrap 4.x you can now create unlimited projects within the theme all with there own different source code (/src) and configurations (config.PROJECT.js) and keep them as separate projects and sites. 
This makes AppStrap function like a basic static site generator!

> NOTE: Using projects is our recommended approach to using the theme although if you are not interested in future updates and just want to use the theme as a starting point for your own development then you can skip this step. This will mean to directly edit the files within ./src and your compile HTML, CSS & Javascript will be compiled into the root ./dist directory. 

To create a new project simply run:

{% highlight  ssh %}
gulp create-project --name=YOURPROJECTNAME
{% endhighlight %}

`YOURPROJECTNAME` should be a machine name without spaces and special characters ie. `themelize_me` or `appstrap_theme`.

When the command is successful you'll see a summary of the new project like below:

{% highlight  ssh %}
gulp create-project --name=myproject
[07:11:22] Using gulpfile ~/XXX/src/theme/gulpfile.js
[07:11:22] Starting 'create-project'...
INFO: Created project directory: /XXX/src/theme/projects/myproject
INFO: Copied SCSS file: _custom.maps.scss
INFO: Copied SCSS file: _custom.style.scss
INFO: Copied SCSS file: _custom.variables.scss
INFO: Copied SCSS file: theme.style.scss
INFO: Copied ./src to /XXX/src/theme/projects/myproject/src
INFO: Created prettified config file: /XXX/src/theme/projects/myproject/config.myproject.js

Project created successfully!

The project directory is: projects/myproject
The project config can be found at: projects/myproject/config.myproject.js

You can now use the following commands to build your project:
$ yarn gulp --project=myproject
$ yarn gulp build --project=myproject

[07:11:23] Finished 'create-project' after 1.1 s
{% endhighlight %}

Your new project directory is now created with `./projects/YOURPROJECTNAME` with the following structure:

- `/dist`: Contains production-ready files after running yarn gulp build.
- `/src`: Source files for the project, organized into js, scss, html, and assets folders. These are the files you will edit during your project development.
- `config.PROJECT_NAME.js`: The project-specific configuration file that overrides global settings.

### 2) Gulp Tasks Overview

Gulp tasks automate different parts of your workflow, such as compiling SCSS, optimizing JavaScript, and preparing files for deployment. The main commands you'll focus on are:

### A\. `gulp`

This command runs the primary development tasks. It compiles your SCSS files into CSS, processes JavaScript files, and handles HTML compilation. It also watches for any file changes and uses BrowserSync to automatically refresh the browser, making it ideal for live development.

{% highlight ssh %}
gulp --project=YOURPROJECTNAME
{% endhighlight %}

### B\. `gulp build`

The `gulp build` command prepares your files for production. It performs all the tasks from the development workflow but also adds additional steps to clean out unused assets and optimize the output.

-   **SCSS Compilation**: Converts SCSS into optimized, minified CSS files.
-   **JavaScript Processing**: Minifies and optimizes your JavaScript files.
-   **Compresses image assets**: squeezes down the file size of any image assets (this can take a few moments if you have a lot of images)
-   **Unused Asset Cleanup**: Identifies and removes any unused assets or CSS.
-   **Build Output**: The production-ready files are stored in the `dist` folder and can be uploaded to a web hosting service like [Linode](https://www.linode.com/lp/refer/?r=1ec57180eee726a5f1c8641f783b948410845c06) or [Github Page](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site), ideal choices for hosting static websites.

<div class="hl-box p-4 mb-5">
You can control some of these additional steps via your <code>config.PROJECT.js</code> file under <code>buildSettings</code>:

{% highlight ssh %}
buildSettings: {
  launchServer: false,
  unusedCss: true,
  unusedAssets: true,
  criticalCss: true, // @todo: coming soon
}
{% endhighlight %}
</div>

To run a full production build use the following command:
{% highlight ssh %}
gulp build --project=YOURPROJECTNAME
{% endhighlight %}

Both `yarn gulp` and `yarn gulp build` will create a new `./dist` or `./projects/YOURPROJECTNAME/dist` folder which contains your compile HTML, .css, .js files and assets. You don't ever need to edit files within the `./dist` or `./projects/YOURPROJECTNAME/dist` folders.

These commands also start BrowserSync so once the required tasks have completely your browser should open and render your site at `http://localhost:3004/`

To come out of Gulp simply type "Command" + "c" on Mac or "Control" + "c" on Windows.

### Next Steps

Now you have a new project setup and a development environment running you can <a href="{{ '/get-started/2-config-customisation' | relative_url }}">start to customise your project config</a> via the `config.PROJECT.js` file within your project or for non-project based sites `./config.custom.js`

