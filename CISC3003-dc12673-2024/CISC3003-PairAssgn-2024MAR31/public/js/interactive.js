/* 
====================================================
    Toggle Functions: These functions will
    only be invoked when toggled.
====================================================
*/
/**
 * Scroll to top function.
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/**
 * Adjust video speed.
 * @param {*} videoId The id tag of the video.
 * @param {*} speed The target play speed for the video.
 * @param {*} playspeedTextId Whether there are text displaying the video speed.
 */
function setVideoSpeedTo(videoId, speed, playspeedTextId = null) {
    // Video object to be adjusted.
    let video = document.querySelector(`#${videoId}`);

    // Get target text plot to display current speed.
    let playSpeedText = playspeedTextId ? document.querySelector(`#${playspeedTextId}`) : null;

    // Adjust speed.
    video.playbackRate = speed;

    // Set display text.
    if (!playSpeedText)
        return;
    playSpeedText.innerText = `${speed.toFixed(1)}`;
}

/**
 * Make content show less.
 * @param {*} contentId ID tag of a content.
 */
function toggleExpandOrHide(contentId, displayMethod = "block", iconId) {
    // Content to be expaned or hidden.
    let content = document.querySelector(`#${contentId}`);

    // Toggle: Foresee the visibility & icon rotation.
    var targetVisibility = content.style.display == "none" ? displayMethod : "none";
    var targetRotation = targetVisibility == "none" ? "rotate(180deg)" : "rotate(0deg)";

    // Set visibility.
    content.style.display = targetVisibility;

    // Set icon rotation.
    let curIcon = document.querySelector(`#${iconId}`);
    curIcon.style.transition = "transform 300ms ease";
    curIcon.style.transform = targetRotation;
}


/* 
====================================================
    The below functions will be always invoked
    whenever the window loads.
====================================================
*/

/**
 * Make the blog images clickable.
 */
function setImagePreviewable() {

    function setSingleElemPreviewable(element) {
        element.addEventListener("click", function () {
            window.open(element.getAttribute("src"));
        });
    }

    let allBlogImages = document.querySelectorAll(".blog-img img");
    let previewableImages = document.querySelectorAll(".previewable")

    allBlogImages.forEach(function (image) {
        setSingleElemPreviewable(image);
    });

    previewableImages.forEach(function (image) {
        setSingleElemPreviewable(image);
    });
}


/**
 * Set the UI for the selector. Only one button should be selected.
 * The selected button should be bigger than unselected button.
 */
function setSelectorUI() {
    // Get all the selector elements.
    let selectors = document.querySelectorAll(".selector");

    // Do this for all selectors.
    selectors.forEach(function (selector) {
        // Get all the buttons in the selector.
        let buttons = selector.querySelectorAll('a');

        // Add event listener for all buttons.
        buttons.forEach(function (button) {

            // Refresh button states in the selector.
            button.addEventListener("click", function (event) {
                buttons.forEach(function (button) {
                    button.classList.add("unselect");
                })
                button.classList.remove('unselect');
            })
        });
    });
}

/**
 * A list of selections is binded with a preview image.
 * As one selection is hovered, the image is set to the target source.
 * Besides, the image should scale a bit as feedback.
 * @param {*} linkClassName The class name of the link.
 * @param {*} imgId The id of the image.
 * @returns 
 */
function setSelectorPreviewImgBinding(linkClassName, imgId, scaleFactor = 1.1, disableShadow = false) {
    // Anchor links that directs to shocase webpages.
    let showcaseLinks = document.querySelectorAll(linkClassName);

    // Images that sets the showcase link.
    let targetPreviewImg = document.querySelector(imgId);

    if (!showcaseLinks || !targetPreviewImg) {
        return;
    }

    let originalImgSrc = targetPreviewImg.getAttribute("src");
    targetPreviewImg.style.transition = "transform 300ms ease";

    showcaseLinks.forEach(function (link) {
        link.addEventListener("mouseover", function () {
            targetPreviewImg.setAttribute("src", link.getAttribute("title"));
            targetPreviewImg.style.transform = `scale(${scaleFactor})`;
            if (!disableShadow) {
                targetPreviewImg.style.boxShadow = "0 2px 6px #00000027";
            }
        });

        link.addEventListener("mouseout", function () {
            targetPreviewImg.setAttribute("src", originalImgSrc);
            targetPreviewImg.style.transform = "scale(1.0)";
            if (!disableShadow) {
                targetPreviewImg.style.boxShadow = "0 2px 6px #00000027";
            }
        })
    });
}



/* 
====================================================
    Function Invokes.
====================================================
*/


setImagePreviewable();
setSelectorPreviewImgBinding(".music-item", "#album");
setSelectorPreviewImgBinding(".showcase-link", "#showcase-img", "1.02");
setSelectorPreviewImgBinding(".game-item", "#game-logo", "1.02", true);
setSelectorUI();



