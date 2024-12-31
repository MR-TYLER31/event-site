import { useRouter } from "@tanstack/react-router";

const ErrorLoading = ({ message }: { message?: string }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center bg-red-100 text-red-800 p-4 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-2">Oops! Something went wrong.</h2>
      <p className="mb-4 text-center">
        {message || "An unexpected error occurred. Please try again later."}
      </p>
      <button
        onClick={() => router.navigate({ to: "/dashboard" })} // Navigate to the Dashboard page
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Go Back to Dashboard
      </button>
    </div>
  );
};

export default ErrorLoading;
