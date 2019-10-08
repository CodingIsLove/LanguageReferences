
# Intro to Vue

## 1. The vue Instance
- Vue instance is like the **heart**, that powers everything
- you pass an option to the new View() element
- el forms relation between instance and part of the dom
- Instance can also have data => data: {...}
- Double Curly syntax => **expression**
- **Reactive** the instances data is linked
- app is our viewinstance

#### Review:
- Vue instance plugs in into an element of the dom and uses expressions to display the data

## 2. Attribute Binding
- v-bind directive to change values of properties => Create bund to data
- **vbind** dynamically binds an attribute to an expression.
    ```javascript v-bind:src="expression"```
- shorthand for vbind= :alt"description", :href""

## 3. Conditional Rendering
- v-if="inStock" => is a boolean directive
- v-else-if=""
- v-else=""
- v-if will **add or remove from the dom**
- v-show will just **toggle the visibility**

## 4. List Rendering
Example:
```html
<ul>
    <li v-for="detail in details">{{ detail }}</li>
</ul>
```
Where details is the **collection** and **detail** is the alias
- You can use the **Dotnotation** to access more complex elements from the v-for
- when id's exist you should bind them like this:

```html
<div v-for="variant in variants" :key="variant.variantId">
    <p>{{ variant.variantColor }}</p>
</div>
```

## 5. Event Handling
- v-on:click="expression"
- expressions can also be functions
- you have to add **propertie for methods**!
- v-on:mousehover="expression"
    - since v-on is so common, you just write @mousehover

To keep everything clean, you can use the ES6 shorthand feature

``` javascript
methods:{
    addToCart(){
        this.cart+=1
    },
    updateProduct(variantImage){
        this.image = variantImage
    }
}
```
Other common events are:
    -@click
    -@mouseover
    -@submit
    -@keyup.enter
The .enter from @keyup.enter is a **modifier**

## 6. Class & Style Binding
- topic here is **style binding**
- further useful option is **:disable="expression"**

Example:
```html
<div v-for="variant in variants"
     :key="variant.variantId"
     class="color-box"
     :style="{backgroundColor: variant.variantColor}"
     @mouseover="updateProduct(variant.variantImag)">
</div>
```

To work clean, do not bind to singlet styles, but bind to a style object.
A style object could look like this:

```js
data:{
    styleObject:{
        color:'red',
        fontsize:'13px'
    }
}
```

Another importan concept is the **class binding** that looks like following

```html
<div class="color-box"
    :class="{ active: activeClass, 'text-danger':errorClass}">

</div>
```
You could add an array of classes, if you would like.
And you even can perform some conditional logic, using the ternary operator
```html
<div :class="[isActive ? activeClass : '']"></div>
>
```

## 7. Computed Properties


## 8. Components
### How to create component
- You can register components to the vue object as followign:
    ```js
    Vue.component('product',{
        props: [message]
        template: `
            <div>
                <h1></h2>
            </div>
            `,
        data(){
            return{
            }
        }
    })
    ```
If you are in an component within an component, you cannot reach out of you scope. To solve this problem you can use **properties**.
**Prop is a custom attribute for passing data into components**.
Best practice is to use objects for props, where you define, if it is necessary or not (and other options).

In order to receive props, the component has to declare all the props, it expects to receive.
## 9. Communicating Events
We can thunnel down informations from upper components, but we have not yet found a way to communicate events up again.
To solve this problem, we can emit evensts

example:
``` js
Vue.component('product',{
    addToCart(){
        this.$emit('add-to-cart')
}
})
```
If a certain component should listen for this event, you cann add it with

 ```html
<div :premium="premium" @add-to-cart="updateCart"></div>
```

With emit, we could also send data! fucking sweet.


## 10. Forms
## 11. Tabs





