function QueryError() {
  return (
    <div className="text-2xl w-[20rem] sm:w-[32rem] md:w-[44rem] flex items-center flex-col mt-16 border-2 border-red-900 rounded-lg p-10 transition-all animate-fadeinbottom">
      <img src="assets/face-dead_.png" className="w-32 h-32 mb-4"></img>
      <p className="text-3xl">Ooops, Error!</p>
      <p className="text-center">We couldn't find the tweet or any video!</p>
      <p className="text-center">Please check it and try again!</p>
    </div>
  );
}

export default QueryError;