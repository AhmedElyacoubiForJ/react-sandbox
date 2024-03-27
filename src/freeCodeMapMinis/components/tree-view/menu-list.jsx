import MenuItem from "./menu-item";

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
// and so we have an menu list.
export default function MenuList({ list = [] }) {
  return (
    <ul className="menu-list-container">
      {list && list.length
        ? list.map((listItem, index) => (
            <MenuItem key={index} item={listItem} />
          ))
        : null}
    </ul>
  );
}
