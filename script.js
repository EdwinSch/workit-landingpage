/* ---- TARGETS && INITIALIZERS ---- */
/* ---- SCRIPT ---- */
/* ---- FUNCTIONS ---- */

console.log("hello world");

//--- Global getElement function
function getElement(selector) {
  const element = document.querySelector(selector);
  if (element) {
    return element;
  }
  throw new Error(`${element} is not found`);
}
