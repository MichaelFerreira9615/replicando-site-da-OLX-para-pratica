import { useState } from "react";
import { Link } from "react-router";

export default function LoginPage () {
const [formLogin, setFormLogin] = useState({
    email:"",
    password:"",
});

function handleOnChange (event){
    const{name, value } = event.target;

setFormLogin({
    ...formLogin,
    [name]: value,
})
};

function handleSubmitLogin(event){
    event.preventDefault();

    console.log(formLogin)
}

    return (
        <main className="w-full h-screen flex flex-col items-center justify-center px-4">
            <div className="max-w-sm w-full text-gray-600">
                <div className="text-center">
                    <img src="https://blog.homer.com.br/wp-content/uploads/2020/03/Logo-OLX-500x265.png" width={150} className="mx-auto" />
                    <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Faça o login na sua conta</h3>
                        <p className="">não tem uma conta? 
                        <Link to={"/cadastro"}
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                            Faça login
                        </Link>
                        </p>
                    </div>
                </div>
                <form
                    onSubmit={(handleSubmitLogin)}
                    className="mt-8 space-y-5"
                >
                    <div>
                        <label className="font-medium">
                            Email
                        </label>
                        <input
                            name="email"
                            type="email"
                            onChange={handleOnChange}
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="font-medium">
                            Senha
                        </label>
                        <input
                            name="password"
                            type="password"
                            onChange={handleOnChange}
                            required
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>
                    <button
                        className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                    >
                        Faça login
                    </button>
                    <div className="text-center">
                        <a href="javascript:void(0)" className="hover:text-indigo-600">Esqueceu a senha?</a>
                    </div>
                </form>
            </div>
        </main>
    )
}