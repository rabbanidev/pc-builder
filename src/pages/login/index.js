import RootLayout from "@/components/layouts/RootLayout";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { BiLogoGithub, BiLogoGoogle } from "react-icons/bi";

const Login = () => {
  const router = useRouter();
  const { data: session } = useSession();

  if (session?.user) {
    router.push("/");
  }

  const githubSigninHandler = () => {
    signIn("github", {
      callbackUrl: router.query?.callbackUrl || "http://localhost:3000",
      // redirect: false,
    });
  };

  const googleSigninHandler = () => {
    signIn("google", {
      callbackUrl: router.query?.callbackUrl || "http://localhost:3000",
      // redirect: false,
    });
  };

  return (
    <section className="mt-10 max-w-7xl mx-auto px-5 h-[60vh] flex justify-center items-center lg:px-10">
      <div className="w-full bg-gray-100 rounded-lg shadow sm:max-w-md">
        <div className="p-4 space-y-4 md:space-y-6">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in
          </h1>
          <div className="flex flex-col md:flex-row gap-5">
            <button
              type="button"
              className="bg-white flex gap-x-2 items-center justify-center rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-black shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
              onClick={googleSigninHandler}
            >
              <BiLogoGoogle size={18} />
              Signin With Google
            </button>
            <button
              type="button"
              className="bg-white flex gap-x-2 items-center justify-center rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-black shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
              onClick={githubSigninHandler}
            >
              <BiLogoGithub size={18} />
              Signin With GitHub
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

Login.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
