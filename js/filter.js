var getSelectedCategories = function() {
    var allTypes = document.getElementsByTagName('input');
    // convert from nodelist to array
    allTypes = Array.prototype.slice.call(allTypes, 0);
    // Return the data-categories of checked inputs only
    return allTypes.filter(function(node) {
        return node.checked;
    }).map(function(node) {
        return node.getAttribute('data-category');
    });
};

var countDisplayed = function() {
    document.getElementById('displayed').innerHTML = document.querySelectorAll('.post.py3.show').length;
};

var displayFiltered = function() {
    var categoriesToShow = getSelectedCategories();
    console.log(categoriesToShow);
    /* Go through all li's and decide whether to show or hide depending on whether it's in the categoriesToShow array */
    var allItems = document.querySelectorAll('.post.py3');
    /* if none are checked, show everything again */
    if (categoriesToShow.length === 0) {
        for (var l = 0; l < allItems.length; l++) {
            allItems[l].className = "post py3 show";
        }
    } else {
        for (var i = 0; i < allItems.length; i++) {
            allItems[i].className = "post py3";
            /* Account for items with more than one category */
            types = allItems[i].getAttribute('data-categories').split(" ");
            for (var j = 0; j < types.length; j++) {
                if (categoriesToShow.indexOf(types[j]) != -1) {
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