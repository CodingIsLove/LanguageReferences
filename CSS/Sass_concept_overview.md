# Sass

This is a short summary of all the components, that you should know, when working with sass.
I have the Information from [here](https://www.youtube.com/watch?v=Zz6eOVaaelI).

### Concepts:
 variables. You have to write them at the top of your scss file
  ```scss
    $primaryButton: red; 
  ```
   
### Nesting and hovering
This will apply the style to all the buttons, which are in the header
```scss
  header{
      $primaryButton: red; 
    button{
      background-color: #88fa4b;
      &:hover{
          background-color: $primaryButton;
      }
      &::after{
        background-color: #42b983;
      }
    }
  }
```

### Modular code
Just outsource different code styles into _filename.scss documents. Those can be inported later with a @.
```scss
@import "./filename";
```
This is very useful, to create a document called _variables.scss

### Mixins
If you want to apply a certain style at different elements, you can just write a mixin, to apply it easier. 

```scss
@mixin flexCenter($direction,$background){
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: $direction;
  background-color: $background;
}

header{
@include flexCenter;
}
```

### Extensions
If you want to intherit styles from an object, you can just extend the object.

```scss
 .contact{
   @extend header;
   background:lightcoral;
 }
```





