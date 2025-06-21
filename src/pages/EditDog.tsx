import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

export const EditDog = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [dog, setDog] = useState({
    id: "",
    name: "",
    breed: "",
    birthday: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    console.log(dog);
    e.preventDefault();
    // Load existing dogs from localStorage
    const storedDogs = JSON.parse(localStorage.getItem("ccp_dogs") || "[]");
    const updatedDogs = storedDogs.map((d: any) => (d.id === dog.id ? dog : d));
    localStorage.setItem("ccp_dogs", JSON.stringify(updatedDogs));
    // Redirect to dog list
    navigate("../my-dogs");
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setDog((prevDog) => ({
      ...prevDog,
      [name]: value,
    }));
  };

  useEffect(() => {
    // Load the dog data from localStorage or API based on params.id
    const stored = localStorage.getItem("ccp_dogs");
    const dogs = stored ? JSON.parse(stored) : [];
    const foundDog = dogs.find((d: any) => d.id === params.id);
    setDog(foundDog);
  }, [params.id]);

  return (
    <div>
      <h2>Edit Dog</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="id" name="id" defaultValue={dog.id} />
        <br />
        <input
          type="text"
          placeholder="Dog's Name"
          name="name"
          defaultValue={dog.name}
          onChange={(e) => handleInputChange(e)}
          required
        />
        <br />

        <input
          type="text"
          placeholder="Breed"
          name="breed"
          defaultValue={dog.breed}
          onChange={(e) => handleInputChange(e)}
          required
        />
        <br />

        <input
          type="date"
          name="birthday"
          placeholder="Birthday"
          defaultValue={dog.birthday}
          onChange={(e) => handleInputChange(e)}
          required
        />
        <br />

        <textarea
          placeholder="Notes"
          name="notes"
          defaultValue={dog.notes}
          onChange={(e) => handleInputChange(e)}
        ></textarea>
        <br />

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};
