# WAD-2021-HW2
Homework 2


## Description for work on Tasks 4 and 5
We define javascript function in file "posts.js" and put that in resources folder.
We call this function in index.html file when we want to display posts. 

The main logic for the function is to first determine json source.

In task we do this by defining:

    jsonSource = "https://api.npoint.io/d6d2f9f973bc3db141eb"

and then in function collecting from this source using jquery function 

    $.getJSON(jsonSource)

Once we have retrieved from json source we go through each post in json and construct appropriate post html code and append that to post section using jquery.

First of all, we do parsing of json file to determine wheter user has defined avatar, and wheter the post contains image (this should change the style of post sligthly).

After that is done, we sum up individual html parts and use jquery appendTo function.

    $( "posts html code here" ).appendTo("#post-body")

For Task 5 we define the json file localy and hence we have to change the jsonSource accordingly to, with rest remaining the same

    // jsonSource = "https://api.npoint.io/d6d2f9f973bc3db141eb"
    jsonSource = "/resources/json/posts.json"