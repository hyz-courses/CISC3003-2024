/**
 * Detects if there are anything in the sidebar.
 **/

/**
 * Auto-layout the blog images.
 **/
function autoLayoutBlogImages() {
    blogImageSets = document.querySelectorAll('.blog-img');
    for (let index = 0; index < blogImageSets.length; index++) {
        let curBlogImgSet = blogImageSets[index];
        let imgNum = curBlogImgSet.children.length;
        if (imgNum <= 3) {
            // Regular 1x3 layout.
            curBlogImgSet.style.gridTemplate = `repeat(${1}, ${25 / imgNum}rem) / repeat(${imgNum}, ${30 / imgNum}rem)`;
        } else if (imgNum == 4) {
            // Special layout of 2x2. Images should be bigger.
            curBlogImgSet.style.gridTemplate = `repeat(2, 15rem) / repeat(2, 15rem)`;
        } else {
            curBlogImgSet.style.gridTemplate = `repeat(${Math.ceil(imgNum / 3)}, 10rem) / repeat(3, 10rem)`;
        }
    }
}

autoLayoutBlogImages();