interface NotFoundProps {
  children: React.ReactNode; // Proper type for children
}

const Notfound: React.FC<NotFoundProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-tr from-orange-500 via-orange-400 to-yellow-200 font-sans min-h-[400px] max-w-6xl px-6 py-12 mx-auto rounded-md overflow-hidden relative shadow-xl">
      <div className="text-center relative px-6 py-10 bg-white/70 rounded-[30px] w-full max-w-[550px] shadow-lg">
        <h6 className="text-gray-900 text-6xl max-sm:text-4xl font-extrabold leading-tight tracking-tight">
          {children}
        </h6>
      </div>
      <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-blue-50 opacity-40 shadow-2xl" />
      <div className="absolute -bottom-6 -left-6 w-44 h-44 rounded-full bg-blue-50 opacity-40 shadow-2xl" />
      <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-blue-50 opacity-40 shadow-2xl" />
      <div className="absolute -bottom-6 -right-6 w-44 h-44 rounded-full bg-blue-50 opacity-40 shadow-2xl" />
    </div>
  );
};

export default Notfound;
