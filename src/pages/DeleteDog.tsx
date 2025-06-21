import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

export const DeleteDog = () => {
  const navigate = useNavigate();
  const params = useParams<{ id: string }>();
  const [dog, setDog] = useState<any>({
    id: "",
    name: "",
    breed: "",
    birthday: "",
    notes: "",
  });

  useEffect(() => {
    // Load the dog data from localStorage or API based on params.id
    const stored = localStorage.getItem("ccp_dogs");
    const dogs = stored ? JSON.parse(stored) : [];
    const foundDog = dogs.find((d: any) => d.id === params.id);
    setDog(foundDog);
  }, [params.id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Load existing dogs from localStorage
    const storedDogs = JSON.parse(localStorage.getItem("ccp_dogs") || "[]");
    const updatedDogs = storedDogs.filter((d: any) => d.id !== dog.id);
    localStorage.setItem("ccp_dogs", JSON.stringify(updatedDogs));
    // Redirect to dog list or show success message

    navigate("../my-dogs");
  };

  return (
    <div>
      <p>Are you sure you want to delete the dog with ID: {params.id}?</p>
      <h2>Delete Dog</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Dog's ID" value={params.id} readOnly />
        <br />
        <input
          type="text"
          placeholder="Dog's Name"
          value={dog.name} // Placeholder, replace with actual dog name if available
          readOnly
        />
        <br />
        <input
          type="text"
          placeholder="Breed"
          value={dog.breed} // Placeholder, replace with actual breed if available
          readOnly
        />
        <br />
        <input
          type="date"
          placeholder="Birthday"
          value={dog.birthday} // Placeholder, replace with actual birthday if available
          readOnly
        />
        <br />
        <textarea
          placeholder="Notes"
          value={dog.notes} // Placeholder, replace with actual notes if available
          readOnly
          rows={4}
        />
        <br />
        <button type="submit">Confirm Delete</button>
        <button type="button" onClick={() => navigate("../my-dogs")}>
          Cancel
        </button>
      </form>
    </div>
  );
};
