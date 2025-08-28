# Coffee Shop Astrophysics

A Hugo static site for showcasing astrophysics talks and posts. Built with [Hugo](https://gohugo.io/) and [Tailwind CSS](https://tailwindcss.com/) using a custom theme.

**Live Site**: https://coffeeshopastrophysics.github.io/

## Installation
1. Install `Hugo` by following the instructions on the [official website](https://gohugo.io/getting-started/quick-start/).
    For example, on macOS, it can be installed using `brew`:
    ```
    brew install hugo
    ```

2. Install `Node.js` and `npm` by following the instructions on the [official website](https://nodejs.org/).

3. Install dependencies by running the following command in the project directory:
    ```
    npm install
    ```

## Preview Editing
1. Do:
    ```
    make
    ```
    or, equivalently, do:
    ```
    touch postcss.config.js && hugo server --disableFastRender -D
    ```
    This command will start the Hugo server with draft content enabled and without fast rendering, allowing you to preview your changes in real-time. The `touch postcss.config.js` update the timestamp so that css files are processed properly.
2. After making changes to your content or styles, simply refresh the browser to see the updates. Sometimes you may need to kill the hugo server and restart it for the changes to take effect.

3. After you confirm your changes are working as expected, you can just commit the changes and push them. The `/public` directory is ignored by `.gitignore`, so do not edit it directly. GitHub Actions will automatically build and deploy the site after you push your changes to the main branch.


## Editing Talks
1. The talks page is built based on `/data/talks.yaml`. You can edit this file to update the talks information.

2. If more than one talk is set to exactly the same date and time, they will be grouped together in the schedule. This is useful for managing multiple talks at the same time, e.g., UW-Madison Astronomy on Tap series.

## Adding Posts
1. Create a new markdown file in the `content/posts/` directory. You can use the existing files as templates.
2. If there are images in your post, create a folder `content/posts/YYYY-MM-DD-<Title>` and place your images with a markdown file `index.md` inside that folder.


## Other Content
1. Most custom content is defined as layout files in `/themes/csa/layouts/`

## References
### GitHub Action Setting
- [Host on GitHub Pages - Hugo](https://gohugo.io/host-and-deploy/host-on-github-pages/)