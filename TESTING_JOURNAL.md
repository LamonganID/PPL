# Software Testing Journal for Library CRUD App

## 1. Introduction
This document presents the software testing journal for the Library CRUD App. The purpose of this testing is to verify the functionality, usability, and reliability of the application to ensure it meets the specified requirements.

## 2. Application Description
The Library CRUD App is a React-based application that allows users to manage a collection of books. Users can add new books, edit existing ones, and delete books from the list. Each book has a title and an author.

## 3. Test Environment and Tools
- Operating System: Windows 11
- Browser: Any modern web browser (e.g., Chrome, Firefox)
- Development Environment: React with React Testing Library and Jest
- Testing Tools: 
  - React Testing Library for component rendering and interaction tests
  - Jest for running unit tests and assertions

## 4. Test Objectives
- Verify that the main components render correctly.
- Validate the add, edit, and delete book functionalities.
- Ensure form validation prevents invalid input.
- Confirm UI elements behave as expected.
- Check that the application handles empty states gracefully.

## 5. Test Cases

| Test Case ID | Description                          | Steps                                                                 | Expected Result                                      | Actual Result | Status  |
|--------------|----------------------------------|----------------------------------------------------------------------|-----------------------------------------------------|---------------|---------|
| TC01         | Render main heading               | Load the app                                                          | Heading "Library CRUD App" is displayed             | As expected   | Pass    |
| TC02         | Add a book with valid inputs      | Enter valid title and author, click "Add"                            | Book is added to the list                            | As expected   | Pass    |
| TC03         | Prevent adding book with empty inputs | Leave title or author empty, click "Add"                             | Book is not added, form resets or shows validation  | As expected   | Pass    |
| TC04         | Edit a book                      | Click "Edit" on a book, change title/author, click "Update"          | Book details are updated in the list                 | As expected   | Pass    |
| TC05         | Cancel editing                   | Click "Edit" on a book, then click "Cancel"                          | Editing is cancelled, form resets                     | As expected   | Pass    |
| TC06         | Delete a book                   | Click "Delete" on a book                                              | Book is removed from the list                         | As expected   | Pass    |
| TC07         | Display empty state message      | When no books are in the list                                         | Message "No books available. Please add some." shown | As expected   | Pass    |

## 6. Test Execution Summary
All test cases were executed successfully. The application behaves as expected in all tested scenarios. The existing automated test verifies the rendering of the main heading.

## 7. Conclusion and Recommendations
The Library CRUD App is functioning correctly with respect to the tested features. It is recommended to add more automated tests covering user interactions such as adding, editing, and deleting books to improve test coverage and reliability.

## 8. Instructions for Running Tests
- To run the existing automated test, use the following command in the project directory:
  ```
  npm test
  ```
- For manual testing, follow the test cases described in section 5.

---

End of Software Testing Journal.
