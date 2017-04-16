var iife = (function() {
    'use strict';

    var getSelectedCategories = function() {
        var allTypes = document.querySelectorAll('.js-category');
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
        document.querySelectorAll('.js-posts-displayed')[0].innerHTML = document.querySelectorAll('.post.py3.show').length;
    };

    var displayFiltered = function() {
        var categoriesToShow = getSelectedCategories();
        // Go through all li's and decide whether to show or hide depending on whether it's in the categoriesToShow array
        var allItems = document.querySelectorAll('.js-post');
        // If none are checked, show everything again
        if (categoriesToShow.length === 0) {
            for (var l = 0; l < allItems.length; l++) {
                allItems[l].className = "post py3 show js-post";
            }
        } else {
            var types;
            for (var i = 0; i < allItems.length; i++) {
                allItems[i].className = ".js-post";
                // Account for items with more than one category
                types = allItems[i].getAttribute('data-categories').trim().split(" ");
                for (var j = 0; j < types.length; j++) {
                    if (categoriesToShow.indexOf(types[j]) != -1) {
                        allItems[i].className = "post py3 show js-post";
                        break;
                    } else {
                        allItems[i].className = "post py3 hide js-post";
                    }
                }
            }
        }
        countDisplayed();
    };

    return {
        displayFiltered: displayFiltered
    };
})();

iife.displayFiltered();