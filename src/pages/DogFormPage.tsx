import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router";

export const DogFormPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [birthday, setBirthday] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      alert("You must be logged in to add a dog.");
      return;
    }

    const newDog = {
      id: crypto.randomUUID(), // Generate a unique ID for the dog
      name,
      breed,
      birthday,
      notes,
      ownerEmail: user.email,
    };

    // Load existing dogs from localStorage
    const stored = localStorage.getItem("ccp_dogs");
    const existingDogs = stored ? JSON.parse(stored) : [];

    // Add new dog and save
    const updatedDogs = [...existingDogs, newDog];
    localStorage.setItem("ccp_dogs", JSON.stringify(updatedDogs));

    // Redirect to dog list
    navigate("../my-dogs");
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      <h2>Add a New Dog</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Dog's Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <br />

        <input
          type="text"
          placeholder="Breed"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          required
        />
        <br />

        <input
          type="date"
          placeholder="Birthday"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          required
        />
        <br />

        <textarea
          placeholder="Notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={4}
        />
        <br />

        <button type="submit">Save Dog</button>
      </form>
    </div>
  );
};
