import { Link } from "../components/Link";

export default function Page404() {
  return (
    <>
      <div>
        <h1>This is NOT fine.</h1>
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bff50f43-0545-4421-85c3-db0cb2577cac/df9yteq-34dcaf3f-0dd5-4318-ac6a-8d98fd6ec194.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JmZjUwZjQzLTA1NDUtNDQyMS04NWMzLWRiMGNiMjU3N2NhY1wvZGY5eXRlcS0zNGRjYWYzZi0wZGQ1LTQzMTgtYWM2YS04ZDk4ZmQ2ZWMxOTQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.JcNtIec2jxCLY1jTMzr0y-5Gwd8xW4IASXrSe4SOu7k"
          alt="This is Fine Meme."
        />
      </div>
      <Link to={"/"}>Volver al Home.</Link>
    </>
  );
}
