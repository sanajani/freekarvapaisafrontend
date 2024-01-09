
const ErrorPage = ({ error, resetErrorBoundary  }) => {
    console.log('Error occured', error);
    return (
      <div className='flex w-screen h-screen justify-center items-center'>
        <p className='text-xl font-bold text-red-500 sm:text-2xl'>
          Something went wrong. Try clicking the refresh page button to reload the
          application.
          <button onClick={resetErrorBoundary} className='border-2 px-6 py-2 border-blue-500 bg-white text-blue-500'>
            Refresh page
          </button>
        </p>
      </div>
    );
  };

export default ErrorPage