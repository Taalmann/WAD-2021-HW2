# WAD-2021-HW2
 
Homework 2

## Description for work on tasks 1, 2, 3 and 6

Task 1. Create a JSON file. For posts I chose to continue with Hiiumaa-thema, because I wanted something neutral and related to Estonia. I created a JSON file (traditional JSON structure, as we had in our HW7). 

Task 6 was about adding pictures to our JSON file. Images are in binary format and JSON doesn’t support that format. So, there are two ways to add images: either by path either in base64 format (base64 is a way of encoding binary data in ASCII text; strings we can store in JSON). The last makes the original images (that are already quite large) approx ca 33% larger (and that may mean longer processing), so we decided that that approach isn’t justified in our case. We loaded our images up to Ritums’ Github directory and stored each images’s path from that directory into our json file. 

Task 2 was about our JSON file validating. (In reality, Webstorm and our chosen endpoint also show if there are any mistakes in JSON file, I think because of that there were no need to separately validate our JSON file). But anyway, as we were ask to do that, I did it. There are different tools online for that (you paste or upload your JSON file there (it’s a simple text editor in that window) and it tells you is your JSON file valid (i.e.without mistakes), or not (in that case the tool points out your mistakes, you can correct it at the place and try to validate again). For our JSON file validating I used https://jsonlint.com/ and got the answer "Valid JSON". I also experimented with three other tools https://jsonformatter.curiousconcept.com/# https://codebeautify.org/jsonvalidator
https://beautifytools.com and, of course, got the same answer. 

Task 3. Put the created JSON file onto endpoint. Endpoint in our case is a publicly available URL, you can send an HTTP request to it and it returns a JSON related to that request from the server. We can create it by ourselves or use an already existing one. In our task we were asked to find an already existing service on internet that allows us to store our JSON file and gives us it’s public URL. I looked at some websites that give that possibility and chose npoint.io, because it gave the possibility to add a schema (a structure of our JSON file) to our JSON file (so that if I accidentally want to store JSON with other structure, it points that out and doesn’t allow to store it). 


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
