const currentData = [
  { id: 101, course: "English", comments: "" },
  { id: 102, course: "Math", comments: "This is a math comment" },
  { id: 103, course: "History", comments: "This is a history comment" },
];

const formData = {
  101: "This is a new english comment",
  102: "This is a math comment",
  103: "This is a history comment",
};

// create new empty array to contain updated data
// loop thru one data set and compare comments of both
// if comments are not equal, set comment to new comment
// push object with new comment into new array to be returned
// return array of only objects that has new comments

function postNewComments(input, formData) {
  // return array of only objects that has new comments and with all other properties
  const updatedData = [];

  for (const id in formData) {
    const matchingData = input.find((element) => {
      return element.id == id;
    });

    if (matchingData.comments !== formData[id]) {
      matchingData.comments = formData[id];
      updatedData.push(matchingData);
    }
  }

  return updatedData;
}

console.log("postNewComments:", postNewComments(currentData, formData));

const currentData2 = [
  { id: 101, course: "English", comments: "This is a english comment" },
  { id: 102, course: "Math", comments: "" },
  { id: 103, course: "History", comments: "This is a history comment" },
];

const formData2 = {
  101: "This is a english comment",
  102: "This is a new math comment",
  103: "This is a history comment",
};

function postNewComments2(input, formData) {
  const updatedData = [];

  input.forEach((element) => {
    if (element.comments !== formData[element.id]) {
      element.comments = formData[element.id];
      updatedData.push(element);
    }
  });

  return updatedData;
}

console.log("postNewComments2:", postNewComments2(currentData2, formData2));
