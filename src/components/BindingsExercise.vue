<template>
    <div class="binding-exercise container">
        <div class="row">
            <div class="col-12">
                <div class="border p-1">
                    <h5>One Way Data Binding</h5>
                    <p>Use the property "message" on the data object in our component for one way data binding
                        to display the message in our template. Replace the comment with the property name "message" in
                        the curlies.
                        Check out what happens below. Now go change the value of message in our components script area
                        and see what happens.</p>
                    <p> {{"message"}}</p>
                </div>
                <div class="border p-1">
                    <h5>Two Way Data Binding</h5>
                    <p>Use a v-model to bind an input value from our html to a property in the components data object.
                        Then reference that data property in the html to display the value. Notice Vue will rerender
                        each time the value changes.</p>
                    <!-- add a v-model to this input below called "myName"-->
                    <input v-model="myName">
                    <p> Hello {{"myName"}}</p>
                </div>
                <div class="border p-1">
                    <h5>Class Binding</h5>
                    <p>Use class binding to reference a property(isActive) in the components data object to determine
                        when to add the class to the elements class list. Then change the value of that data
                        property(isActive) to true. Notice Vue will rerender each time the value changes.</p>
                    <div class="red">
                        <!-- add a class binding attribute to the p tag -->
                        <p :class="{active: isActive}"> This text will turn green on active</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "myName",
        data() {
            return {
                myName: "Type your name here",
                message: "Super secret message here!",
                //change isActive to true
                isActive: true
            }
        }
    }
</script>


<style scoped>
    .red {
        color: red;
    }

    .active {
        color: green;
    }
</style>