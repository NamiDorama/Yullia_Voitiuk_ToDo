export const Login = ({ onLogin }) => {
  const submit = (e) => {
    const user = e.target.name.value;

    e.preventDefault();

    setTimeout(() => {
      onLogin(true, user);
    }, 2000);
  };
  return (
    <form onSubmit={submit}>
      <input
        type="text"
        placeholder="Name"
        name="name"
        required
      />
      <input
        type="password"
        placeholder="Password"
        required
      />
      <input
        type="submit"
        value="Логин"
      />
    </form>
  ); };
