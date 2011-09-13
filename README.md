# $.dragRefresh 

$.dragRefresh is a jQuery plugin for use in your web app to simplify the drag-down-to-refresh idiom. 

## How to use

Apply to a container that you'd like to refresh and pass in the refresh callback:

```js
function checkMail () {
	//...
}

$('#inbox').dragRefresh (checkMail);
```

The second, optional, parameter can be used to customise the plugin. To do this, pass in an object with any of the following fields:

* dragText - Text to be used as the drag instruction (Default: '&#8595 Drag down to refresh.')
* releaseText - Text to be used a the release instruction (Default: '&#8593; Release to refresh.')
* backgroundColor - Colour of the void above the container (Default: '#ccc')
* color - Colour of the instruction text (Default: '#606060')
* divideBorder - CSS border style of the dividing line (Default: '1px dotted #b7b7b7')


```js
$('#inbox').dragRefresh (readMail, {
	dragText: 'Pull down further to refresh.',
	releaseText: "That's it, now let go."
});
```


## License 

(The MIT License)

Copyright (c) 2011 Paul Cuthbertson &lt;github@paulcuth.me.uk&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.