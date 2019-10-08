# irouter
`irouter.js` is  a tiny, light-weight JavaScript page navigator

## Getting Started

### Include the library :
include irouter in your page
```<script src="https://irouter.js.org/lib/irouter.min.js"></script>```

## example :
``
<div id="page1" class="ipage ">
  page 1
</div>
<div id="page2" class="ipage">
  page 2
</div>
<div id="page3" class="ipage ipage-default" irequest='{"get":"http://127.0.0.1","paste_in":"child_of_page4"}'>
    <div>
        <p id="child_of_page4">somthing</p>
    </div>
</div>

<a href="#!page1">page1</a>
<a href="#!page2">page2</a>
<a href="#!page3">page3</a>

``
