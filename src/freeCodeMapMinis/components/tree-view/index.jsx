import './styles.css';


// As a user, I want to be able to navigate through the different
// sections of the app using the menu.
// The menu should have the following structure:
// . Home
// . Profile
//   . Details
//     . Location
//       . City
// . Settings
//    . Account
//    . Security
//      . Login
//      . Register
//        . Random
export default function TreeView() {
    return (
        <div className="TreeView">
            <h1>TreeView</h1>
        </div>
    );
}