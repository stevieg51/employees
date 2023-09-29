import MyModal from "./MyModal";



export default function Employee(props) {


    return (
        <>
            <div className="m-2 py-8 px-8 max-w-sm  max-h-36 rounded-xl shadow-lg  flex-shrink space-y-0 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 bg-gradient-to-bl from-blue-300 via-slate-500  to-zinc-400">
                <img className="object-cover h-[100px] w-[100px] rounded-full block mx-auto sm:mx-0 sm:shrink-0 " src={props.img} alt="nun" />
                <div className="text-center space-y-0 sm:text-left">
                    <div className=" space-y-0">
                        <p className="text-lg  text-zinc-200 font-semibold">
                            {props.name}
                        </p>
                        <p className="  text-zinc-100  font-light mb-1">
                            {props.role ? props.role : "No Role"}
                        </p>
                    </div>
                    <MyModal id={props.id} name={props.name} role={props.role} updateEmployee={props.updateEmployee}/>
                </div>
            </div>
        </>
    )
}