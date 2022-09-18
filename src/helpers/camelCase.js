// helper function that turn the normal text into camel case ('hello world' => 'helloWorld')
// it used for making the shelves ('Currently Reading' => 'currentlyReading') for the <options> tag to use in the books sidebar
const camelCase = (str) => {
  return str
    .replace(/\s(.)/g, function ($1) {
      return $1.toUpperCase();
    })
    .replace(/\s/g, "")
    .replace(/^(.)/, function ($1) {
      return $1.toLowerCase();
    });
};

export default camelCase;
