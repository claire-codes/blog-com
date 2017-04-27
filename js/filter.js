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
        document.querySelectorAll('.js-posts-displayed')[0].innerHTML = document.querySelectorAll('.show-post.js-post').length;
    };

    // Go through all posts and decide whether to show or hide depending on whether it's in the categoriesToShow array
    var displayFiltered = function() {
        var categoriesToShow = getSelectedCategories();
        var allPosts = document.querySelectorAll('.js-post');
        // If no categories are checked/selected, show all posts
        if (categoriesToShow.length === 0) {
            for (var l = 0; l < allPosts.length; l++) {
                allPosts[l].classList.add('show-post');
            }
        } else {
            var postCategories;
            for (var i = 0; i < allPosts.length; i++) {
                // Account for items with more than one category
                postCategories = allPosts[i].getAttribute('data-categories').trim().split(' ');
                for (var j = 0; j < postCategories.length; j++) {
                    if (categoriesToShow.indexOf(postCategories[j]) != -1) {
                        allPosts[i].classList.add('show-post');
                        break;
                    } else {
                        allPosts[i].classList.remove('show-post');
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