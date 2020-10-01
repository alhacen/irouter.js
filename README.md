# irouter
`irouter.js` is  a tiny, light-weight JavaScript page navigator

## Getting Started

### Include the library :
include irouter in your page
```<script src="https://irouter.js.org/lib/ver-0.2/irouter.min.js"></script>```

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
  page 3
</div>

<a href="#!page1">page1</a>
<a href="#!page2">page2</a>
<a href="#!page3">page3</a>
```
[live example](https://irouter.js.org/code-example/ver-0.2/simple.html)

#### By HTTP request:
for using advanced functions of the library use `irouter` attribute.
``irouter take values in json format``<br>
i.e. irouter='{"[prop name]":"[prop value]",...}'
```
<div id="page1" class="ipage ipage-default" irouter='{"get":"component/about-html.html"}'>
  page 1
</div>
<div id="page2" class="ipage" irouter='{"get":"component/about-javascript.html","cache":"false"}'>
  page 2
</div>
<div id="page3" class="ipage" irouter='{"get":"component/about-php.html","loading-screen":"loading-screen-id"}'>
  page 3
</div>
<div id="loading-screen-id" class="iloading-screen">
  <div class="loader">Wait its loading...</div>
</div>
<a href="#!page1">page1</a>
<a href="#!page2">page2</a>
<a href="#!page3">page3</a>
```
#### custom loading:
add class `iloading-screen` in custom loading container and use `id` of that container as value of `loading-screen` prop in `irouter`.<br>
`{..."loading-screen":"[loading-screen-id]"...}` <br>
[live example](https://irouter.js.org/code-example/ver-0.2/retrive-from-server.html)
<table>
  <tr>
    <th>Prop Name</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>`get / post`</td>
    <td>its required</td>
    <td>Request method</td>
  </tr>
  <tr>
    <td>`insert-into`</td>
    <td>id of that container</td>
    <td>where to insert server response</td>
  </tr>
  <tr>
    <td>`cache`</td>
    <td>true</td>
    <td>if content if fetched form server then it will not requested again if `{"cache":"true"}`</td>
  </tr>
  <tr>
    <td>`loading-screen`</td>
    <td>Loading...</td>
    <td>custom loading screen</td>
  </tr>
</table>

##LICENCE 
GPL-2.0
