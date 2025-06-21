import { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";

export const ListMyDogs = () => {
  const { user } = useAuth();
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("ccp_dogs");
    const existingDogs = stored ? JSON.parse(stored) : [];
    const myDogs = existingDogs.filter(
      (dog: any) => dog.ownerEmail === user?.email
    );
    setDogs(myDogs);
  }, []);
  return (
    <div>
      <h2>My Dogs</h2>
      {dogs.length === 0 ? (
        <p>You have no dogs added yet.</p>
      ) : (
        <ul>
          {dogs.map((dog: any, index: number) => (
            <li key={index}>
              <strong>Name:</strong> {dog.name} <br />
              <strong>Breed:</strong> {dog.breed} <br />
              <strong>Birthday:</strong> {dog.birthday} <br />
              <strong>Notes:</strong> {dog.notes}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
