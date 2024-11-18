import { useEffect, useState } from "react";

export default function CardComponent() {
  const [details, setDetails] = useState([]);

  useEffect(function () {
    fetch("https://reqres.in/api/users").then((res) =>
      res.json().then((res) => setDetails(res.data))
    );
  }, []);

  return (
    <>
      {details.length > 0 &&
        details.map((details, index) => (
          <div
            key={index}
            className="w-[30rem] h-full flex flex-row  gap-8 p-6 justify-start items-center border"
          >
            <div className="w-[10rem] h-full">
              <img
                className="w-full h-full"
                src={details.avatar}
                alt={details.first_name}
              />
            </div>

            <div className="w-1/2 h-auto flex flex-col gap-6 justify-start items-start ">
              <div className="flex flex-row gap-1">
                <p className="text-md font-medium text-black/60">
                  {details.first_name}
                </p>
                <p className="text-md font-medium text-black/60">
                  {details.last_name}
                </p>
              </div>

              <p className="text-md font-medium text-black/60">
                {details.email}
              </p>
            </div>
          </div>
        ))}
    </>
  );
}
