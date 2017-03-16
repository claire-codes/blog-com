var findSelectedItems = function() {
    var allTypes = document.getElementsByTagName('input');
    var which = [];
    for (var i = 0; i < allTypes.length; i++) {
        if (allTypes[i].checked) {
            which.push(allTypes[i].getAttribute('data-category'));
        }
    };
    return which;
};

var countDisplayed = function() {
    document.getElementById('displayed').innerHTML = document.querySelectorAll('.post.py3.show').length;
};

var displayFiltered = function() {
    var itemsToShow = findSelectedItems();
    /* Go through all li's and decide whether to show or hide depending on whether it's in the itemsToShow array */
    var allItems = document.querySelectorAll('.post.py3');
    /* if none are checked, show everything again */
    if (itemsToShow.length == 0) {
        for (var l = 0; l < allItems.length; l++) {
            allItems[l].className = "post py3 show";
        }
    } else {
        for (var i = 0; i < allItems.length; i++) {
            allItems[i].className = "post py3";
            /* Account for items with more than one category */
            types = allItems[i].getAttribute('data-categories').split(" ");
            for (var j = 0; j < types.length; j++) {
                if (itemsToShow.indexOf(types[j]) != -1) {
                    allItems[i].className = "post py3 show";
                    break;
                } else {
                    allItems[i].className = "post py3 hide";
                }
            }
        }
    }
    countDisplayed();
};