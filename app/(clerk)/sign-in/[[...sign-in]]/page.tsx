import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex h-full justify-center items-center">
      <SignIn />
    </div>
  );
}
