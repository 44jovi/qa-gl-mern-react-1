const Friends = ({ friendsList }) => {
  const friendComponents = [];

  for (let i = 0; i < friendsList.length; i++) {
    friendComponents.push(
      <div key={i}>
        <p>name: {friendsList[i].name}</p>
        <p>age: {friendsList[i].age}</p>
      </div>
    );
  }

  // React renders each element in the returned array
  return friendComponents;

  // React can also render just a single item without it being in an array:
  // return (
  //   <>
  //     <p>pastrami</p>
  //   </>
  // );
};

export default Friends;
