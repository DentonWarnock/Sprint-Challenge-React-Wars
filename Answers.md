# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is a Javascript library that is very good for building user interfaces, especially ones that deal with rendering lots of data. React tries to solve the problem of interactive dynamic website needing to frequently update the entire DOM for each and every change. React uses a Virtual DOM and compares it to the real DOM to determine what has changed and only updates those select parts of the actual DOM. This results in less compting power used and less loading time for the user. 

1. What does it mean to think in react?

React is a different way to think about how to build Apps. Code is broken down into resuable componenents that should ideally render just one thing. A heirarchy of components is used to pass state and props data down to the componenents that use them. Placement of state is important and should ideally be located in the component above all of the common components that use it. Lastly, the final componenets are given functionality to update the state when necessary. 


1. Describe state.


State is an object that stores componenets dynamic data and in React JS it is used to re-render the application when the state data changes.

1. Describe props.

Props are object variables containing "properties" that are passed down to other components as parameters.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects are when a procedure changes a variable from outside its scope, and they also can't be performed during rendering. In React JS the useEffect hook is used to sync effects with changes in state, props, or other variables.

