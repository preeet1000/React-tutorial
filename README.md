# React-tutorial
My react

Add package.json file and also initialize the repo with npm
run -  npm init

Dependency means project require lot of packages. why? bcz we need lot of functionalities or super powers in our react app. Eg. minified, bundled, chunkin etc.

Those packages we'll be installed by npm.

Install parcel

npm install -D parcel or npm install --save-dev parcel.

Caret or tilde is required if in future some upgraded version comes.

Package-lock.json - package lock, locks the version it will show the exact version 


Install react and react dom

npm install react
npm install react-dom

execute parcel using npm and give the entry point as index.html
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
Pracel-cache - Pacel require some extra space to do perform it actions.

Build the app for production and create dist folder
npx parcel build Index.html

Anything which can be generated on web server will be put inside the "gitignore" file
