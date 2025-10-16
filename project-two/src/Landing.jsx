export default function Landing() {
  return (
    <>
      <h1>Online shopping simplified</h1>
      <p className="tagline text-dimmed max-w-[600px]">
        Order your groceries from SuperM with our easy to use app, and get your
        products delivered straight to your doorstep.
      </p>
      <a className="btn">Start shopping</a>
      <img
        className="landing-cover mt-5 rounded-xl w-full h-auto"
        width="816"
        height="380"
        src="https://res.cloudinary.com/dbfn5lnvx/image/upload/v1732813040/react-tutorial/superm-v2/landing.jpg"
        alt="Display of fruits and vegetables"
      />
    </>
  );
}
