import { useState } from "react";
import Modal from "react-bootstrap/Modal";

export default function MyModal(props) {
  const [show, setShow] = useState(false);

  const [name, setName] = useState(props.name);
  const [role, setRole] = useState(props.role);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        onClick={handleShow}
        className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
      >
        Edit
      </button>

      <Modal className=" opacity-90"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <div className="w-full">
              <form
              onSubmit={(e)=> {
                e.preventDefault();
                props.updateEmployee(props.id, name, role )
                handleClose();
              }}
                id="editModal"
                className=" shadow-md rounded w-full mb-4 mt-4 px-6"
              >
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    for="name"
                  >
                    Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Update Name"
                    id="name"
                    defaultValue={props.name}
                    onChange={(e) => {
                      setName(e.target.value)
                    }}
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    for="role"
                  >
                    Occupation
                  </label>
                  <input
                    id="role"
                    className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Update Occupation"
                    defaultValue={props.role}
                    onChange={(e) => {
                      setRole(e.target.value);
                    }}
                  />
                </div>
              </form>
            </div>
          </>
        </Modal.Body>
        <Modal.Footer>

          <button
            form="editModal"
            className="bg-slate-500 hover:bg-gray-500 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            type="submit"
          >
            {" "}
            Submit{" "}
          </button>
          <button
            onClick={handleClose}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          >
            {" "}
            Close{" "}
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
