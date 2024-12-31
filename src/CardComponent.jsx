import { useEffect, useState } from "react";

export default function CardComponent() {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setDetails(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {details.map((user) => (
        <div
          key={user.id}
          className="w-full sm:w-[30rem] h-full flex flex-col sm:flex-row gap-8 p-6 justify-start items-center border"
        >
          <div className="w-[10rem] h-full">
            <img
              className="w-full h-full"
              src={user.avatar}
              alt={user.first_name}
              loading="lazy"
            />
          </div>

          <div className="w-full sm:w-1/2 h-auto flex flex-col gap-6 justify-start items-start">
            <div className="flex flex-row gap-1">
              <p className="text-md font-medium text-black/60">
                {user.first_name}
              </p>
              <p className="text-md font-medium text-black/60">
                {user.last_name}
              </p>
            </div>

            <p className="text-md font-medium text-black/60">{user.email}</p>
          </div>
        </div>
      ))}
    </>
  );
}
