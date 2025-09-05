import LoginForm from "../components/LoginForm";

function LoginFormPage() {
  return (
    <div className="min-h-screen bg-neutral-50 flex items-center">
      <div className="max-w-md w-full mx-auto px-4">
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginFormPage;
