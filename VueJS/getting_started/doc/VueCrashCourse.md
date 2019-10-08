

# CrashCourseVue

### General notes


### Initliaization
- can be done via cli
- standard is babel and esLint

### Vue ui 
- Use vue ui to open the ui
- Use the Vue UI plugin for chrome. is super sweet!


### Files
#### index.html
Is opened, but everyting else will go trough the main.js

#### main.js
I entry point of the application

#### app.vue
consists of:
    - template
        - needs one div/element as parent
    - script
        - has export default
    - style
        - scope => means styling is scoped only to this component
 All those elements will be in each component you use.
 
 in export defaults, you will list all the components, that will be used.
 In the template you can give with some parameters, that will be used in the view later. 
 This is called "props".
 - You need exaclty one element in a template (mostly a dv)
 
 
 ### Data
 In "script" you can in the export default data(){}.
 You mostly write
 ```javascript
export default{
    data(){
        return{
        msg:'Hello'
        }        
    }
}
```

### Components
- You can create it easily with the Webstorm ide
- You can import the necessary components at the beginning of the script component.


### Directives
Vue has a lot of different template directives. 

What we used in this tutorial:
- v-bind  => can be used to bind data
- v-bind:key
- v-for => can be used to loop over arrays


### Props

 
 
