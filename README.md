# React-tutorial
My react

Add package.json file and also initialize the repo with npm
run -  npm init

Dependency means project require lot of packages. why? bcz we need lot of functionalities or super powers in our react app. Eg. minified, bundled, chunkin etc.

Those packages we'll be installed by npm.

Install parcel

npm install -D parcel or npm install --save-dev parcel.

Caret or tilde is required if in future some upgraded version comes.

Package-lock.json - package lock, locks the version it will show the exact version. It also maintain the version.


Install react and react dom

npm install react
npm install react-dom

execute parcel using npm without downloading it and give the entry point as index.html
npx parcel index.html

Note :-  About Parcel
Parcel is a bundler. It is bundling everything. 
parcel create server
Parcel is doing HMR(Hot module replacement. Parcel will keep track of all files that user is updating)
Parcel uses File matcher algorithm -  C++
Minifying the code
Cleaning our code
Dev and Production build
Super fast build algoritm
image optimization - image is the heaviest thing on website
Caching while development
Compresses the files
Compatible with old browser by adding polyfills
Https on Dev
parcel - manage the port number
Consistent Hashing Algorithm
Parcel is a zero config
Transitive dependencies
Tree Shaking-  remove the unwanted code Eg. App is using library which has 10 functions but only 2 is used in the application than Parcel ignore the remaining 8 functions.
Pracel-cache - Pacel require some extra space to do perform it actions.

Build the app for production and create dist folder
npx parcel build Index.html

Anything which can be generated automatically on web server will be put inside the "gitignore" file


Babel - It is a complier that convert the code to older version of browser to make browser compatiable using polyfills.

It is just a node package or just another piece of js code that input the code and convert to the
output.

Install babel-plugin-transform-remove-console  to remove the console  and config it in the App. 

Render - Updating anything in the DOM is called Render

JSX -  JSX is HTML like syntax inside the Javascript

JSX => React.createElement  => object => HTML(DOM) //  babel convert JSx element to the React.createElement

JSX - Improve the readability, User experience,  less code, Maintainibility.

JSX is not mandatory as we can use React directly.

JSX - It can have only one parent. Either use div as parent or use React.Fragment.
 React.Fragment will put it child elements directly below the root div. Syntax - <></>

Is ES6 Mandatory  - NO

COMPONENT

2 types  
Class based component - old way
Functional based component - new way

Functional Component is a Js function that returns JSX or React element or composition of react element. Name of component will always start with Capital letter for good practice. 

Virtual DOM  - It is a representation of a DOM with us.
Need Virtual DOM for reconciliation of react.

Reconcilation  - It is an algorithm that react uses to diff one tree from other. 
Diff algo find out what need to be updated and just update the small portion of the app.
If all element has same attritbute than react will render the complete child tree.Eg all are div's.
If we use "key" as attribute than react will know what is newly added and render tht only.

React is fast bcz React is using Virtual DOM, it is representaion of the actual DOM.  
If element has different tags than "Keys" not required but if tags are same than it is must to put 
"Key" as attritbute so that reconciliation engine works best.


To maintain a variable that changes itself is called React variable. React variable is kind of a state variable. Every component in react maintain a state so you can put some variable on to the state. Every time to create any local variable use state inside react.

Create local state variable by useState hook. Hooks are just a normal function created by facebook developers. Eg:-  const [searchText] = useState(); 

Monolithic Application - Everythinh is in one project. Eg. UI, API, Notifcation, logs etc
Micro services - There is different project for Ui, API etc which make it better for testing, Separation of concern etc.

UseEffect - useeffect is hook which has been called after the component rendering.
UseEffect has no dependency in array -  It will be called only once after the component renders. Eg
   useEffect(() => {
    getSwiggyRestaurantsDetails(); // Api call
  }, []);

UseEffect has dependency in array - It will be called once after the comp. inital rendering + after
whnenever the state of depenecy changes (seacrhText).
 useEffect(() => {
    getSwiggyRestaurantsDetails(); // Api call
  }, [searchText]);

UseEffect has no dependency array -  usefeect will execute after every state changes in component.
 useEffect(() => {
    getSwiggyRestaurantsDetails(); // Api call
  });

  ROUTER
  npm i react-router-dom

 Class based Component
 Class component cannot be created without the Rendered method.

 Hooks - It is jsut a normal function.
 Custom hook - Hokks give us readability, usability, separation of concern(modularizing) and maintainbility. 

 Lazy loading, On Demand loading, Code splitting, Chunking, Dynamic bundling, Dynamic import.
 When loading a component on demand than React try to suspend loading. 