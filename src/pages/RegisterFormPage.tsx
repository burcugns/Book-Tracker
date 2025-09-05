import RegisterForm from "../components/RegisterForm"

function RegisterFormPage() {
  return (
    <div className="min-h-screen bg-neutral-50 flex items-center">
      <div className="max-w-md w-full mx-auto px-4">
        <RegisterForm />
      </div>
    </div>
  );
}

export default RegisterFormPage;
