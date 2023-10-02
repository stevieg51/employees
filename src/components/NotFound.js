import { useNavigate } from "react-router-dom";

export default function NotFound() {

    const navigate = useNavigate();

    return (
        <>
        <h1> The page you are looking for was not found </h1>
        <button
        onClick={() => {
          navigate("/dictionary");
        }}
      >
        Go Back
      </button> 
        </>
    )

}