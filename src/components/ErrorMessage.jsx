const ErrorMessage = ({ message }) => {
  return (
    <div className="flex min-h-75 items-center justify-center px-4">
      <div className="rounded-lg border border-red-200 bg-red-50 px-6 py-5 text-center">
        <h2 className="mb-2 text-lg font-semibold text-red-600">
          Something went wrong
        </h2>

        <p className="text-sm text-red-500">
          {message}
        </p>
      </div>
    </div>
  );
};

export default ErrorMessage;