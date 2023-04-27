const Friends = ({ friendsList }) => {
  const friendComponents = [];

  for (let i = 0; i < friendsList.length; i++) {
    friendComponents.push(
      <>
        <p>name: {friendsList[i].name}</p>
        <p>age: {friendsList[i].age}</p>
      </>
    );
  }

  return friendComponents;
};

export default Friends;
