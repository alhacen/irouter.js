# irouter
`irouter.js` is  a tiny, light-weight JavaScript page navigator

## Getting Started

### Include the library :
include irouter in your page
```<script src="https://irouter.js.org/lib/irouter.min.js"></script>```

## usage :
add ``ipage`` class to every navigation container, and also add ``ipage-default`` to the default container.<br>
if there is no hash in url then ipage-default will be navigate.
```
<div id="page1" class="ipage ">
  page 1
</div>
<div id="page2" class="ipage">
  page 2
</div>
<div id="page3" class="ipage ipage-default">
    <div>
        <p id="child_of_page4">somthing</p>
    </div>
</div>

<a href="#!page1">page1</a>
<a href="#!page2">page2</a>
<a href="#!page3">page3</a>
```
[live example](http://alhaqhassan.github.io/me/snip/irouter-ex1.html)
