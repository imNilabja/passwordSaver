import { v4 as uuidv4 } from 'uuid';
import { useState, useRef, useEffect } from "react";
const Manager = () => {
    const ref = useRef();
    const [form, setForm] = useState({ Email: '', username: '', password: '' });
    const [forms, setForms] = useState([]);


    useEffect(() => {
        const storedForms = JSON.parse(localStorage.getItem('forms')) || [];
        setForms(storedForms);
    }, []);

    const handleEdit = (e,id) => {

        const EditForm = forms.find(item => {
            return item.id === id;
        })
        if(EditForm){
            setForm({ id: EditForm.id, Email: EditForm.Email, username: EditForm.username, password: EditForm.password })
        }
        handleDelete(e,id)

    }

    const handleDelete = (e, id) => {

        const updatedForms = forms.filter(item => {
            return item.id !== id;
        })
        setForms(updatedForms)
        localStorage.setItem("forms", JSON.stringify(updatedForms))
    }



    const handleAdd = () => {
        const id = uuidv4();
        console.log(id)
        const newForm = { id: id, Email: form.Email, username: form.username, password: form.password };
        setForms([...forms, newForm]);
        localStorage.setItem("forms", JSON.stringify([...forms, newForm]))
        console.log(forms)
        setForm({ Email: '', username: '', password: '' });
    }




    const showPass = () => {

        if (ref.current.type.includes("password")) {
            ref.current.type = "text";
        } else {
            ref.current.type = "password";
        }
    }



    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: [e.target.value] })
    }



    return (



        <div className="bg-green-100 h-[100vh] w-[99.2vw] mx-auto">

            <div className="bg-green-200 mx-auto min-w-[50%] max-w-[80%] h-fit flex-col rounded-xl">

                <div className="logo relative w-fit font-bold text-3xl left-5 mx-auto ">
                    <span className="text-green-600">&lt;</span>
                    <span className="text-black">Pass</span>
                    <span className="text-green-600">OP</span>
                    <span className="text-green-600">/&gt;</span>
                    <div className="text-green-800 text-sm relative right-4">Your Own Password Manager</div>
                </div>



                <div className="bg-green-200 flex-col rounded-md w-[100%] mt-10 p-3 justify-center">
                    <input onChange={handleChange} className=' border border-green-600 flex w-[80%] rounded-xl mx-auto p-1' value={form.Email} type="text" name="Email" placeholder="Enter Email id/Website URL" />

                    <div className=" flex gap-5 m-7 justify-between w-[80%] mx-auto flex-wrap p-2">
                        <input onChange={handleChange} className='border border-green-600 w-[700px] rounded-xl p-1' value={form.username} type="text" name="username" placeholder="Enter Username" />
                        <input ref={ref} onChange={handleChange} className='border border-green-600 w-[360px] rounded-xl p-1' value={form.password} type="password" name="password" placeholder="Enter Password" />
                        <div onClick={showPass} className="relative top-1"><button className="w-[50px] bg-green-400 rounded-xl">show</button></div>
                    </div>


                    <div className="bg-green-200 flex rounded-md w-[100%] justify-center items-center">
                        <button onClick={handleAdd} className="flex items-center justify-center gap-1 w-fit bg-green-400 p-2 hover:font-bold hover:bg-green-500 rounded-xl">

                            <lord-icon
                                src="https://cdn.lordicon.com/jgnvfzqg.json"
                                trigger="hover"
                            >
                            </lord-icon>
                            Add Password</button>

                    </div>
                </div>





            </div>
            <div className="pasCont bg-green-200 mx-auto min-w-[50%] max-w-[80%] h-fit flex-col rounded-lg"></div>

            <div className="bg-green-200 mx-auto min-w-[50%] max-w-[70%] h-fit flex-col mt-5 rounded-lg">
                <div className="heading w-[100%] min-h-8 bg-green-900 rounded-lg flex justify-between items-center mx-auto">
                    <div className="w-[50%] flex justify-center">
                        <span className="text-yellow-500 md:block">Site/Email</span>
                    </div>
                    <div className="w-[50%] md:flex justify-between px-12 hidden md:block">
                        <span className="flex text-yellow-500">Username</span>
                        <span className="flex text-yellow-500">Password</span>
                        <span className="flex text-yellow-500">Actions</span>
                    </div>
                </div>
                {forms.map(item => (
                    <div key={item.id} className="flex min-h-10 items-center border border-green-700 rounded-md">
                        <div className="w-1/2 flex justify-center">
                            <p key={forms.Email} className="">{item.Email}</p>
                        </div>
                        <div className=" w-1/2 justify-between px-12 lg:flex md:block gap-3">
                            <span className="flex my-2">{item.username}</span>
                            <span className="flex relative left-2 my-2 blur-sm">{item.password}</span>

                            <span className="flex my-2">
                                <span className='mx-2'>
                                    <button onClick={(e) => handleEdit(e,item.id)} ><lord-icon

                                        src="https://cdn.lordicon.com/ogkflacg.json"
                                        trigger="hover"
                                        colors="primary:#5c330a"
                                        style={{ width: '20px', height: '20px' }}>
                                    </lord-icon></button>

                                </span>

                                <span className='mx-1'>
                                    <button onClick={(e) => handleDelete(e, item.id)}>
                                        <lord-icon

                                            src="https://cdn.lordicon.com/skkahier.json"
                                            trigger="hover"
                                            colors="primary:#5c330a"
                                            style={{ width: '20px', height: '20px' }}
                                        >
                                        </lord-icon>
                                    </button>


                                </span>
                            </span>
                        </div>

                    </div>


                ))}

            </div>




        </div>



    )
}

export default Manager