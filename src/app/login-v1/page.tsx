import AnimatedBackground from "@/_components/AnimatedBackground1";
import Image from "next/image";
import Form from 'next/form';
import ToggleButton from "@/_components/ToggleButton";
import { linkClass, submitButton } from "@/_styles/StyleClasses";

export default function Login() {
  return (
    <>
      <AnimatedBackground />
      <main className="relative z-10 flex items-center justify-center min-h-screen 
      bg-gray-200/20 dark:bg-gray-700/20">
        <Form
        action={"/"} 
        className="form-container shadow-xl/20 bg-white/30 dark:bg-slate-800/40 w-[22rem] -mt-10 py-5 px-6 rounded-md backdrop-blur-3xl">
          <div className="form-logo-container relative w-full pb-5 border-b-gray-400/30 border-b">
            <div className="relative h-12 w-full">
              <Image
              src="/logo/logo-vertical.svg"
              alt=""
              fill={true}
              />
            </div>
          </div>
          <div className="form-inputs py-6 w-full">
            <div className="pb-2">
              <label htmlFor="username" className="text-md w-full ">
                Nom d&apos;utilisateur
              </label>
                <input 
                type="text"
                id="username"
                className="mt-1 bg-gray-100/80 text-gray-900/80 text-sm rounded-md focus:ring-0 focus:border-0 block w-full p-2.5 dark:bg-gray-600/40 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-0"
                placeholder="Nom d'utilisateur"
                required/>
            </div>
            <div>
              <label htmlFor="password" className="text-md w-full">
                Mot de passe
                </label>
                <input 
                type="password"
                id="password"
                // className=" bg-blue-300"
                className="mt-1 bg-gray-100/80 text-gray-900/80 text-sm rounded-md focus:ring-0 focus:border-0 block w-full p-2.5 dark:bg-gray-600/40 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-0 dark:focus:border-0"
                placeholder="Mot de passe"
                required/>
              
            </div>
          </div>
          <div className="options text-sm/tight flex justify-between pb-6">
            <label className="flex items-center gap-2 select-none">
              <ToggleButton name="remember_me" label="Se souvenir de moi" defaultChecked={false} />
            </label>
            <a href="#" className={`${linkClass}`}>Mot de passe oublié</a>
          </div>
          <div className="w-full flex justify-center pb-6">
            <button type="submit" className={`${submitButton}`}>
              Se connecter
            </button>
          </div>
          <div className="text-sm/tight">
            Pas de compte ? <a className={`${linkClass}`}>Inscription</a>
          </div>
        </Form>
      </main>
    </>
  );
}
