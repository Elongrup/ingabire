import Image from 'next/image';

export default function LoginPage() {
  return (
    <div className="flex p-2 justify-center gap-0">
      {/* Left Division: Image */}
      <div className="hidden lg:flex w-1/2 items-center  p-2">
        <Image
          src="/login.jpg" // Replace with your image path
          alt="Login Image"
          width={300}
          height={300}
          className="object-contain" // Use object-contain to ensure image fits well
        />
      </div>

      {/* Right Division: Form */}
      <div className="flex-1  w-1/2 flex items-center bg-gradient-to-r from-[#b28529] to-[#efb443] p-6">
        <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-6">
          <h1 
            className="text-3xl font-bold mb-4 text-center text-white p-4" 
            style={{
              backgroundImage: 'linear-gradient(to right top, #b28529, #bf8d27, #cc9525, #d99c22, #e7a41e, #eaa92c, #ecaf38, #efb443, #e8b85b, #e0bb71, #d9be86, #d2c09b)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Cutie menu
          </h1>
          <p 
            className="text-xl font-bold text-center mb-6"
            style={{ color: '#B7B3B3' }}
          >
            The cutie menu sign in
          </p>
          <form>
            <div className="mb-4">
              <label 
                htmlFor="username" 
                className="block text-yellow-500 text-sm font-bold mb-2"
              >
               
              </label>
              <input
                type="email"
                id="email"
                className="appearance-none border rounded-md border-transparent focus:border-yellow-400 w-full py-2 px-3 text-yellow-500 leading-tight focus:outline-none focus:shadow-outline text-center placeholder-yellow-500"
                placeholder="Username"
              />
            </div>
            <div className="mb-6">
              <label 
                htmlFor="password" 
                className="block text-yellow-500 text-sm font-bold mb-2"
              >
               
              </label>
              <input
                type="password"
                id="password"
                className="appearance-none border rounded-md border-transparent focus:border-yellow-400 w-full py-2 px-3 text-yellow-500 leading-tight focus:outline-none focus:shadow-outline text-center placeholder-yellow-500"
                placeholder="Password"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="w-full text-white py-2 rounded-md transition duration-300"
                style={{
                  backgroundImage: 'linear-gradient(to right top, #b28529, #bf8d27, #cc9525, #d99c22, #e7a41e, #eaa92c, #ecaf38, #efb443, #e8b85b, #e0bb71, #d9be86, #d2c09b)',
                }}
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
