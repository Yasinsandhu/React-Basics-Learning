export default function () {
  const studentName = "Saad";
  const price = 500;
  const quantity = 4;
  return (
    <>
      <p>{studentName}</p>
      <p>{price * quantity}</p>
    </>
  );
}

export const GetMessage = () => {
  return <p>WelCome to React</p>;
};

export const GetImage = () => {
  const imageURL =
    "https://plus.unsplash.com/premium_photo-1771835259233-1e4dca9cf25a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";

  return <img src={imageURL} alt="Profile" />;
};
