A　Plugin to translate es6 to es5 based on babel in fis3.
for example

#### 
install

```
npm install fis3-parser-babel --save
```

#### config
```
fis3.match('js/**.js', {
    parser: fis.plugin('babel'),
    release: '$0',
    rExt: '.js'
})
```