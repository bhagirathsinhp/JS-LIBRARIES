// Working with JS Libraries...


// 1. What & Why....

// We are working with JS, doesn't matter if it's browser side or server side, we have the THIRD-PARTY LIBRARIES...
// The idea of having third-party libraries doesn't just exist in JS but in all the programming languages...

// We are writing code as a dev which is our job.
// There are certain problems we gotta solve.
// Some code we write would be really specific to the project - to the business logic.
// But other functionalities which we might need for the project might be more like - we might need some utility function.
// Utilities functions which take lot of time and energy and are not directly connected to our project.

// That's where the third-party libraries come in - they are essentially packages of code - packages of function written in JS which have the logic we need in them so that we could reach out to these predefined, prewritten functions and functionalities & use them in our project..

// Third-party libraries are all about adding utility functions of different complexities.
// It can be simple, very trivial utility functions or more complex functionalities which we wanna add.

// Third-party libraries let's us dev have an easier life cause they take away some of the complexities which is not directly related to our core project - to our core business logic but which we still might need...


------------------------------------------------------------------------------------------------------------


// 2. Adding Libraries (Example: lodash)...

// We start not with the third-party library but with the functionality built-in JS.
// Because the idea is the same.
// Math.random()
// We could come up with our own random function where we could take anything in consideration and get a psuedo random number.
// Math.random() is bit more elaborate than this.
// We get this method so that we don't have to build the random functionality on our own cause we need random numbers fairly often in programming.

// This is general in programming = we wanna write code that's exclusive, specific to our project and we don't wanna reinvent the wheel for such common tasks like generating a random number.
// As math.random() is in JS. Such is not the case for others.

// We take an example where we have two arrays of customers.
// We just wanna find out which customers are in our database from which we might have retrieved the customers array and which customers are active cause we retrieve activeCustomers array from another database.

const customers = ['Max', 'Manuel', 'Anna'];
const activeCustomers = ['Max', 'Manuel'];

// Typically these arrays might not be hardcoded and we might be fetching them from a database.

// Now we want the difference - the inactiveCustomers.
// Now we can't substact these arrays as it would return NaN.

// Instead we need to write some function which goes through the arrays and cross-checks the items.
// But this is a usecase where we might wanna use a third-party package and for this speciality - we could use LODASH...

// We could google about this lodash and find out what it is about and how we use it.
// This gives us a broad variety of functions which we could use to improve our code or to get certain functionalities..

// In the web of it we can see various functionalities and in there we see the one with DIFFERENCE...
// And we also see how that function might be applied.

_.difference([2, 1], [2, 3]);

// To use LODASH, we have to add it...
// We can't just call the code which is provided on the web on our project.
// And if we run the code - and it has _ in front of it (side note: we can start a name of variable with _) which is undefined.
// We will get an error in console.

// Lodash defines the variable = _
// We need to include lodash to our project.
// To install it - we have installation steps on the page of the library.
// There we also have different installation options that depends on how our project is set up.
// We'll have a look at how we can set up more complex JS projects in the tooling module later..

// We can download a script or a CDN..
// Here we opt for full build on Lodash website.
// It will open a JS file.
// We can download it by using save link as option on browser.
// We store it in the project folder - but Max has already provided a zip for the whole thing so no need to worry.
// Now lodash file contains all the features the library contains & we can use that.

// There's an optimized version - near full build.
// We can download that file - which has more optimized code.
// Later we will learn how we can optimize our own code.
// The optimized code loads faster on the browser.
// We go for optimized version...

// Now we need to include that optimized code - in index.html.
// We need to add another <script> before our script import - this is IMPORTANT...

// We can see the code with difference gives the answer back and there's no error in console...
const inactiveCustomers = _.difference([2, 1], [2, 3]);
console.log(inactiveCustomers);
// Here we get array[1] as a result.

// We got 1 as a result as we are comparing the 2 arrays inside difference.
// We can use customers and activeCustomers here...
const inactiveCustomers = _.difference(customers, activeCustomers);
// Then we get Anna in array - which is actual difference between these 2 consts.

// Now we use that CDN method to download the library.
// Most libraries also support CDNs..
// This gives us the link that we can include so that we don't have to download the package and manually import it.
// Instead we have exteranl hosted file where we can import the external hosting link.

// We copy the URL and in index.html - we add a script and paste the URL.
// So now the package isn't hosted on our own servers.
// And CDN servers often are quite fast - faster than our own servers.


-------------------------------------------------------------------------------------------------------------------


// 3. Example: jQuery...

// There are thousands of JS utility libraries - for JS browser and for Node.js.
// Libraries exists for all the programming language.
// In addition complexity of libraries differs.
// There are JS frameworks which are basically very very very large libraries - Vue.js, React etc...

// Another popular JS library is JQUERY..
// It was more important in the past.
// It was used for DOM. It worked so well with that.
// But now JS has come long way for DOM and other features...


----------------------------------------------------------------------------------------------------------------


// 4. Discovering Libraries...

// How do I know which/how much libraries exists?
// Is there a page for them?
// That's not really the case.
// There is a page - NPM.JS = repository of JS packages.
// It's more like a lookup resource where we already know a certain library.

// This isn't the page where we go and search for new interesting JS libraries...
// Instead when we have problems - we google for the problem.
// Now when we google the problem - we have some forums to look upto.
// There we have the solution of the problem but there might be a suggestion to any alternatives and those alternatives might be some libraries...

// For eg - we're having problems with http request. 
// We find the solution for it and there in some blog or article we see that - AXIOS.JS is one library which should help with sending http requests.
// Then we google it - find the page of it and install it.

// This is how we find new libraries - googling, reading & GITHUB.
// Github is a great resource to learn more about projects and to learn more about JS libraries...


--------------------------------------------------------------------------------------------------------------


// 5. Axios Library & Http Requests...

// Let's stick to Axios library and the http request we talked about in the last lecture...
// Now the XML http request was a bit clunky cause of the onload thing. Whereas the fetch() API was annoying cause of its error handling.

// Therefore let's now use axios...
// We add axios with the CDN link from it's github.
// Now to use it in httprequest app - we will use the whole http request folder with index and scripts and styles..
// Max has provided it here in the lecture link but I'm gonna paste it from my own..
// So now we paste the copied CDN link from axios github inside the index.html - above app.js script (IMP ALL THE TIME)..
<script src="https://unpkg.com/axios@1.1.2/dist/axios.min.js"></script>
// Add DEFER too!

// We can always learn how to use a library from it's official page or here - from github.
// As it's open source - we can dive into the source code and explore it.

// Now instead of sendHttpRequest in fetchPosts(), we would use Axios.
// Axios is globally available variable now with it's import.
// It's an object which has couple of methods.

// It has a get, post, put, delete, etc. method.
// Here we want get method. Now we don't need the http method of 'GET' here.
async function fetchPosts() {
  try {
    const responseData = await axios.get(
      // "GET",
      "https://jsonplaceholder.typicode.com/posts"
    );
    const listOfPosts = responseData;
    // console.log(listOfPosts);
    for (const post of listOfPosts) {
      const postEl = document.importNode(postTemplate.content, true);
      postEl.querySelector("h2").textContent = post.title.toUpperCase();
      postEl.querySelector("p").textContent = post.body;
      postEl.querySelector("li").id = post.id;
      listElement.append(postEl);
    }
  } catch (error) {
    alert(error.message);
  }
}

// Now axios uses promises out of the box so we don't have to promisify it..
// So we can use async await on it.
// Now we try to get some object and see what's in there before we try anything out.
const reponse = await axios.get()
console.log(response)
// This is just the overview how we need to get the object.

// Now we get an object that axios returns.
// Now we get an error cause we didn't render all the code but we got the object which we were trying to see first.

// Now that object has the status response code and unlike fetch() API it has ready to use data in the object.
// So with the data available we don't need to convert some streamed data into snapshot as we do with fetch().
// We also don't need to parse it from JSON to JS data.

// Instead we get that automatically converted snapshot data here as part of our response object on the data field.
// So now we can say - 
const listOfPosts = response.data;

// Now what happens to the error though - we set an incorrect URL.
// We get a nice message about the 404 error when we click fetch post.
// So axios also got us covered there.

// Now axios unline fetch & xml treats the technically successful code with error - as error.
// It throws an error if we get a response that technically succeeded which was delivered without problems but has a 400 or 500 status code.

// So now when we have an error we get into our catch block on fetchPosts() without any problems.
// In that we can also look into error.response - to look into response that caused the error.
console.log(error.response);
// We do it cause technically its a correct response so there would be a status property with some data and if we need them we can gain access to it with response property on that error object.
// Max knows this cause the info's in the official docs.

// Now we fix that URL to get the data on our page.
// Yes, we get the data.

// We also make sure to use axios to create post.
// Instead of sendhttp we use axios.post and clear the "post".
sendHttpRequest("POST", "https://jsonplaceholder.typicode.com/posts", fd); // we change this to axios and here we don't wanna send formdata but the post object..

axios.post("https://jsonplaceholder.typicode.com/posts", post);

// Now we do this to find out what's the response.
const response = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    post
  );
  console.log(response);

// We enter the post and click add and we get a response back with the data we insert with 201 status code.

// Besides this - we didn't have had to add any headers here.
// With fetch and xml we had to add application/json - content type header there.
// Axios does this for us.

// It takes the post we entered which isn't json and converts it to json and then adds the header for us.

// Now Axios always doesn't use JSON data - it's smart - it analyzes the data we try to add - if that's an object or an array it assumes that we wanna convert it to JSON.
// Then it stringifies the data to convert it to JSON and sets the application/json header.

// If we add FormData - it will automatically append it to the request and the content type will be set correctly...

// So AXIOS analyzed the body we're appending and then behaves correctly to set the right headers & convert the data correctly...

// Now we also make sure we handle a deletion.
sendHttpRequest(
      "DELETE",
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );

// We use the delete axios.

axios.delete(
  `https://jsonplaceholder.typicode.com/posts/${postId}`
);
// Now we click on fetch post and click on delete - delete request will be sent.
// This is how we use axios...

// Now more complex our app gets - the more micromanagements we might need to do to make sure that these APIs behave correctly - AXIOS then might be a great alternative which is simply easier to use..


-----------------------------------------------------------------------------------------------------------------


// 6. Third-Party Library Considerations....

// There are couple of things when working with libraries.
// Now for eg: we might need a little from Lodash but we are downloading it entirely - with all it's functionalities which would impact the speed of page loading = ofcourse it's 24kb but it could slow down initial loading time of our application.

// Many libraries allows us to import them in different ways - with some or many features.
// We will learn about advanced project setups where we will import parts of a library and stripping out parts which we don't need...
// But not all libraries allows us to be this selective.

// We wanna make sure the libraries which we are working with are secure and well maintained.
// Let's take Axios for eg - it's open source which allows others to edit code and share that edited code but that code get's validated which nullifies the chance of hacking.
// And as it is open source more people are looking over it and working on it thus improving code quality and security.

// We also wanna make sure the library which we are using is actively maintained - bugs & security issues which are fixed on time.
// To get the idea of actively maintained libraries - we look into it's commit (when the code was edited) on Github - if it's old like maybe 2 years old then it's not well maintained..

// We can also check the releases page on github to check the updates are regular or not..
// Now in github we can also check on issues with Issues tab. 
// More popular packages should have more issues but if they aren't more - then there's nothing to worry about.

// We can judge the popularity of a package with how many stars it has on github.

// We have to make sure of all these things cause if not and we use that kinda packages - chances are high of our app breaking.

// THIRD-PARTY LIBRARIES CAN MAKE OUR LIFE EASIER AND IN MODERN DEVELOPMENT - IT'S NORMAL TO USE TYPICALLY A COUPLE OF LIBRARIES.


--------------------------------------------------------------------------------------------------------------------


