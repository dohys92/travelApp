// import { checkForName } from './js/nameChecker'
// import { handleSubmit } from './js/formHandler'
import { countDown } from './js/app'
import { performAction } from './js/app'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import './styles/resets.scss'
// console.log(checkForName);

// alert("CLIENT INDEX.JS")

// Your index.js file inside the client folder should import the main function of 
// your application javascript, it should import your scss, 
// and it should export your main function 
// from your application javascript. But in order to import, 
// where will you need to export it?

document.getElementById('submit').addEventListener('click', countDown);
document.getElementById('submit').addEventListener('click', performAction);
