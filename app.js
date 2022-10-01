//test.html line 7 gives us access to a Vue object
const app = Vue.createApp({
    data() {
        return {
            title: 'YACS',
            author: 'William Lin',
            age: 19
        }
    }, 
    methods: {
        changeTitle() {
            console.log('clicked')
        }
    }
                //The comp a root component
})
//the {} inside the () allows us to create functions to handle a click



//Tells the app to mount on the element in line 11 on test.html
//The Vue app now controls anything inside the <div id = "app"> here <div>
app.mount('#app')   