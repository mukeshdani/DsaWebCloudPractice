'use client';

import { useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Submitting...' : 'Submit Form'}
    </button>
  );
}

function CustomerForm({ action }) {
  return (
    <form action={action}>
      <input type="text" name="name" placeholder="Enter Name" />
      <br /><br />
      <input type="password" name="password" placeholder="Enter Password" />
      <br /><br />
      <SubmitButton />
    </form>
  );
}

export default function UseFormStatus() {
  async function handleSubmit() {
    await new Promise((res) => setTimeout(res, 2000));
    console.log("Submit");
  }

  return (
    <div>
      <h5>UseFormStatus</h5>
      <CustomerForm action={handleSubmit} />
    </div>
  );
}
