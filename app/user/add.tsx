"use client";

import axios from "axios";
import { useState } from "react";
import Modal from "react-modal";
import { useRouter } from "next/navigation";
export default function AddUser() {
  const [showForm, setShowForm] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();
  const handleShowForm = () => {
    setShowForm(true);
    setShowButton(false);
  };
  const handleCloseForm = () => {
    setShowForm(false);
    setShowButton(true);
  };
  const handleSubmit = async () => {
    await axios.post('/api/user',{
        name:name,
        email:email
    })
    setName("");
    setEmail("");
    router.refresh();
    setShowForm(false);
    setShowButton(true);
  };
  return (
    <div>
      {showButton && (
        <button
          className="border px-2 py-1 rounded bg-blue-700 text-white my-2"
          onClick={handleShowForm}
        >
          Add User
        </button>
      )}
      {showForm && (
        <Modal
          isOpen={showForm}
          onRequestClose={handleCloseForm}
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            },
            content: {
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "400px",
              height: "200px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "20px",
            },
          }}
        >
          <h3 className="">Add New User</h3>
          <form>
            <div className="form-control w-full py-2">
              <label className="label font-bold">User Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mx-2 border px-2"
                placeholder="User Name"
              ></input>
            </div>
            <div className="form-control w-full py-2">
              <label className="label font-bold">User Email</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mx-2 border px-2"
                placeholder="User Email"
              ></input>
            </div>
          </form>
          <button
            className="border px-2 py-1 rounded mr-2"
            onClick={handleCloseForm}
          >
            Close
          </button>
          <button
            className="border px-2 py-1 rounded bg-blue-700 text-white"
            type="submit"
            onClick={handleSubmit}
          >
            Save
          </button>
        </Modal>
      )}
    </div>
  );
}
