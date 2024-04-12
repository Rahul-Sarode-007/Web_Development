# Pass data from child to parent.

**Create a Callback Function:** You need to create a callback function in the parent component. This function will handle the data passed from the child component.

**Pass the Function as Props to Child:** You pass this callback function down to the child component as a prop.

**Call the Function in the Child Component:** In the child component, when you want to pass data back to the parent, you call this function (which was received as a prop) and pass the data as an argument to it.

**Handle Data in Parent Component:** When the callback function is invoked in the child component with the data, it triggers the function defined in the parent component. In this function, you typically update the state of the parent component with the received data.