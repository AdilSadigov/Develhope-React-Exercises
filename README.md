setState method in React is asynchronous, meaning that it does not immediately update the state.
If you pass an object as the parameter to setState, there is a risk that it will be overwritten.
So it is generally recommended to pass a function as the parameter rather than an object.