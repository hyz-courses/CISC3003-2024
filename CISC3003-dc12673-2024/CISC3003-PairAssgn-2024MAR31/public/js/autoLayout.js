/**
 * Detects if there are anything in the sidebar.
 **/

sidebarContentFlow = document.getElementsByClassName('sidebar-content-flow');

for (const element of sidebarContentFlow) {
    let hasChildren = element.childNodes.length > 0;
    let fatherContainer = element.parentElement;
    if (!hasChildren) {
        fatherContainer.classList.remove('bisec-flow');
    }
}