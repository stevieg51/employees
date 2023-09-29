import { useState } from "react";
import Modal from "react-bootstrap/Modal";

export default function EmployeeCreator(props) {
  const [show, setShow] = useState(false);

  const [name, setName] = useState(props.name);
  const [role, setRole] = useState(props.role);
  const [img, setImg] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        onClick={handleShow}
        className="px-4 py-1 text-sm bg-slate-500  text-white font-semibold rounded-full border border-purple-200  hover:bg-slate-600  focus:outline-none focus:ring-2  focus:ring-stone-700 focus:ring-offset-1 block mx-auto my-2"
      >
        Add Employee
      </button>

      <Modal className=" opacity-90"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Employee Creater</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <>
            <div className="w-full">
              <form
              onSubmit={(e)=> {
                e.preventDefault();
                setName(' ');
                setImg(' ');
                setRole(' ');
                props.newEmployee(name, role, img )
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
                    className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Add Name"
                    id="name"
                    defaultValue={name}
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
                    placeholder="Add Occupation"
                    defaultValue={role}
                    onChange={(e) => {
                      setRole(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    for="img"
                  >
                    Image
                  </label>
                  <input
                    id="img"
                    className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Add Img URL:"
                    onChange={(e) => {
                      setImg(e.target.value);
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
            Add {" "}
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
